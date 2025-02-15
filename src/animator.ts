/*
1. Add 'enter' class once appendChild or append is called
2. Then a transition animation will be applied based on the *-enter 
3. Once the transtionEnd event has been dispatched for the targetted node, the '*-entered' class will be added
4. Once the Element is about to be deleted '*-exit' class will be added and transition animation will be applied based on the *-exit class.
5. Once the transitionend event will be dispatched only then the Element will be removed from the DOM
*/


/*

.myclass {
    opacity: 0;
}

.myclass-enter {
    opacity: 1;
    transform: opacity 0.5s;
}

// this class will be added once transitionend is dispached on the node and has a class named .myclass-enter
.myclass-entered {
    // No Css transition since it's already in place
}

// style will be added once the remove() is called on the Node.myclass
.myclass-exiting {
     opacity: 0;
    transform: opacity 0.5s;
}

// once the transitionend is dispatched on the node and has .*-exiting  the following class will be added
.myclass-exited {
} 


Example:
Let's say we have an NodeElementX to be inserted to the Page.

After parentX.appendChild(NodeElementX) is called then NodeElementX.classlist contains 'enter' css class.
Let's say *-enter class has the css transtion delay of 500ms. Once it's over the transitionend event will be dispatched on the NodeElementX.
Once the 'transitionend' was dispatched the 'entered' class will be added to the NodeElementX.

At this phase the node is already in the view and active.
After sometime time if the NodeElementX.remove() is called then 'entered' class will be removed and 'exiting' class will be added instead.
Now css transition based on the *-exiting class will be applied.

Once the 'transitionend' is dispatched the NodeElementX will be finally removed.
*/

const noop = () => {}

export type AnimationOptions = {
    animationClassPrefix: string;
    animationKind: 'animation' | 'transition';
    onEnter: () => void;
    onEntered: () => void;
    onExit: () => void;
    onExited: () => void;
    animationTimeout: number;
}

const defaultAnimationOptions:AnimationOptions = {
    animationClassPrefix: '', 
    animationKind: 'animation',
    // event is dispatched once *-enter class is added and dom is staring to appear
    onEnter: noop,
    // event is dispatched once *-enter class already added and animationKindend event was triggered
    onEntered: noop,
    // event is dispatched once *-exits class is added and dom is staring to disappear
    onExit: noop,
    // event is dispatched once *-exit class already added and animationKindend event was triggered
    onExited: noop,
    // if there is no transtionend or animationend event is triggered after this timeout, it will go to the next phase -entered or -exited
    animationTimeout: 500 
}

const isObject = (value:any) => typeof value === 'object';

const isHTMLElement = (value) => {
    return typeof value === 'object' && ((value || {}).tagName || value?.nodeName)
}

export default class Animator {
    options:AnimationOptions;
    node:HTMLElement;
    constructor(node:HTMLElement, options:AnimationOptions) {
        this.options = {
            ...defaultAnimationOptions,
            ...(options || {})
        };
        this.node = node;
        this.validate();
    }

    validate() {
        if (!isHTMLElement(this.node)) {
            throw new Error('node must be HTML Element');
        }

        if (!['animation','transition'].includes(this.options.animationKind)) {
            throw new Error('animationKind must be either animation or transition');
        }

        if (typeof this.options.animationClassPrefix !== 'string' || !this.options.animationClassPrefix?.length) {
            throw new Error('animationClassPrefix must be a valid string');
        }

        if (typeof this.options.onEnter !== 'function') {
            throw new Error('onEnter must be function');
        }

        if (typeof this.options.onEntered !== 'function') {
            throw new Error('onEntered must be function');
        }

        if (typeof this.options.onExit !== 'function') {
            throw new Error('onExit must be function');
        }

        if (typeof this.options.onExited !== 'function') {
            throw new Error('onExit must be function');
        }
        if (!Number.isFinite(this.options.animationTimeout) || this.options.animationTimeout < 1) {
            throw new Error('animationTimeout must be number and larger than 0');
        }
    }

    cleanupAnimationEventListners(animatingClassName) {
        let eventHandler;
        if (animatingClassName === 'enter') {
            eventHandler = this.#setToEntered;
        } else if(animatingClassName === 'exit'){
            eventHandler = this.#setToExited;
        }
        if (eventHandler && this.node) {
            this.node.removeEventListener(`${this.options.animationKind}end`, eventHandler);
        }
    }

    handleAnimationTimeout(targetClass) {
        const startedAt = Date.now();
        const intervalId = setInterval(() => {
            if(!this.node){
                clearInterval(intervalId);
                return;
            }
            if (Date.now() - startedAt > this.options.animationTimeout) {
                if (!this.node.classList.contains(`${this.options.animationClassPrefix}-${targetClass}`)){
                    targetClass === 'entered' ? this.#setToEntered() : this.#setToExited();
                    clearInterval(intervalId);
                    return;
                } else {
                    clearInterval(intervalId);
                    return;
                }
            }
        }, 100);
    }

    #setToEntered = () => {
        if(this.node?.classList?.contains(`${this.options.animationClassPrefix}-enter`)) {
            this.node.classList.remove(`${this.options.animationClassPrefix}-enter`);
            this.node.classList.add(`${this.options.animationClassPrefix}-entered`);
            this.cleanupAnimationEventListners('enter');
            if (typeof this.options.onEntered === 'function') {
                this.options.onEntered();
            }
        }
    }

    #setToExited = () => {
        if (this.node?.classList?.contains(`${this.options.animationClassPrefix}-exit`)) {
            this.node.classList.remove(`${this.options.animationClassPrefix}-exit`);
            this.node.classList.add(`${this.options.animationClassPrefix}-exited`);
            this.cleanupAnimationEventListners('exit');
            this.node?.remove();
            if (typeof this.options.onExited === 'function') {
                this.options.onExited();
            }
        }
    }

    startEnteringAnimation() {
        this.node.classList.add(`${this.options.animationClassPrefix}-enter`);
        if (typeof this.options.onEnter === 'function') {
            this.options.onEnter();
        }
        this.handleAnimationTimeout('entered');
        this.node.addEventListener(`${this.options.animationKind}end`, this.#setToEntered);
    }

    startExitingAnimation() {
        this.node.classList.remove(`${this.options.animationClassPrefix}-entered`);
        if (typeof this.options.onExit === 'function') {
            this.options.onExit();
        }
        this.node.classList.add(`${this.options.animationClassPrefix}-exit`);
        this.handleAnimationTimeout('exited');
        this.node.addEventListener(`${this.options.animationKind}end`, this.#setToExited);
    }

    mount(direction='append', parent) {
        if(!isHTMLElement(parent)) {
            throw new Error('parent must be HTML Element')
        }
        if (direction !== 'append' && direction !== 'prepend') {
            throw new Error('direction must be either append or prepend');
        }
        if (direction === 'append') {
            parent.appendChild(this.node);
           
        } else if (direction === 'prepend') {
            parent.prepend(this.node);
        }
        this.node.classList.add(this.options.animationClassPrefix);
        setTimeout(this.startEnteringAnimation.bind(this), 100);
    }

    appendChild(parent) {
        this.mount('append', parent);
    }

    prepend(parent) {
        this.mount('prepend',parent);
    }

    append(parent) {
        this.mount('append', parent);
    }

    remove() {
        this.startExitingAnimation();
    }
}
