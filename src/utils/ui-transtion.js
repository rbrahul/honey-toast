/*
1. Add 'enter' class once appendChild or append is called
2. Then a transition animation will be applied based on the *-enter 
3. Once the transtionEnd event has been dispatched for the targetted node 'entered'
4. Once the Element is about to be deleted 'exit' class will be added and transition animation will be applied based on the *-exit cass class.
5. Once the transitionend event will be dispatched only then the Element will be removed from the DOM
*/



/*

.myclass {
    opacity: 0;
}

.myclass-enter {
    opacity: 1;
    transform: transition opacity 0.5s;
}

// this class will be added once transitionend is dispached on the node and has a class named .myclass-enter
.myclass-entered {
    // No Css transition since it's already in place
}

// style will be added once the remove() is called on the Node.myclass
.myclass-exiting {
     opacity: 0;
    transform: transition opacity 0.5s;
}

// once the transitionend is dispatched on the node and has .*-exiting  the following class will be added
.myclass-exited {
} 


Example:

Let's say we have an NodeElementX to be inserted to the Page.

After parentX.appendChild(NodeElementX) is called then NodeElementX.classlist contains 'enter' css class.
Let's say *-enter class has the css transtion delay of 500ms. Once it's over the transitionend evennt will be dispatched on the NodeElementX.
Once the 'transitionend' was dispatched 'entered' class will be added to the NodeElementX. At this phase the node is already in the view and active.
After sometime time if the NodeElementX.remove() is called then 'entered' class will be removed and 'exiting' class will be added instead.
Now css transition based on the -exiting class will be applied. Once the transition ends the 'transitionend' will be dispatched.

Once the 'transitionend' is dispatched the NodeElementX will be finally removed.

*/

function testSlideAnimation(transitionName){
    const box = document.querySelector(".box");
    box.classList.add(transitionName,`${transitionName}-enter`);
    setTimeout(() => {
    
        box.classList.remove(`${transitionName}-enter`);
      //  box.classList.add(`${transitionName}-entered`);
        box.classList.add(`${transitionName}-exit`);

        setTimeout(() => {
          //  box.remove();
        box.classList.remove(`${transitionName}-exit`);
    
        }, 5000);

    }, 2000);
}
 /*  
var i = 0;
var intervalId = setInterval(() => {
    if (intervalId >= 10) {
        clearInterval(intervalId);
        return;
    }
    testSlideAnimation('bounce');
    i++;
}, 8000)
*/
//testSlideAnimation('bounce');

const noop = () => {}

const defaultAnimationOptions = {
    animationClassPrefix: undefined, 
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
    animationTimeout: 5000 
}

const isObject = () => typeof value === 'object';

const isHTMLElement = (value) => {
    return typeof value === 'object' && (value || {}).tagName
}

class DomAnimator {
    constructor(node, options=defaultAnimationOptions) {

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
            eventHandler = this._setToEntered;
        } else if(animatingClassName === 'exit'){
            eventHandler = this._setToExited;
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
            // TODO: Fix the 50 time execution issue even if class has been added
            if (Date.now() - startedAt > this.options.animationTimeout) {
                if (!this.node.classList.contains(`${this.options.animationClassPrefix}-${targetClass}`)){
                    targetClass === 'entered' ? this._setToEntered() : this._setToExited();
                    clearInterval(intervalId);
                    return;
                } else {
                    clearInterval(intervalId);
                    return;
                }
            }
            console.log("Looking for animation to finish for :", targetClass)
        }, 100);
    }


    _setToEntered = () => {
        console.log("setting to entered:")
        this.node.classList.remove(`${this.options.animationClassPrefix}-enter`);
        this.node.classList.add(`${this.options.animationClassPrefix}-entered`);
        this.cleanupAnimationEventListners('enter');
    }

    _setToExited = () => {
        console.log("setting to exited:")
        this.node.classList.remove(`${this.options.animationClassPrefix}-exit`);
        this.node.classList.add(`${this.options.animationClassPrefix}-exited`);
        this.cleanupAnimationEventListners('exit');
        this.node?.remove();
    }


    startEnteringAnimation() {
        this.node.classList.add(`${this.options.animationClassPrefix}-enter`);
        this.handleAnimationTimeout('entered');
        console.log(`${this.options.animationKind}end`);
        console.log("Node:", this.node);
        this.node.addEventListener(`${this.options.animationKind}end`, this._setToEntered);
    }

    startExitingAnimation() {
        this.node.classList.remove(`${this.options.animationClassPrefix}-entered`);
        this.node.classList.add(`${this.options.animationClassPrefix}-exit`);
        this.handleAnimationTimeout('exited');
        this.node.addEventListener(`${this.options.animationKind}end`, this._setToExited);
    }

    appendChildTo(parent) {
        if(!isHTMLElement(parent)) {
            throw new Error('parent must be HTML Element')
        }
        setTimeout(this.startEnteringAnimation.bind(this), 100);
        console.log(this.node.classList)
        parent.appendChild(this.node);
    }

    append(parent, target) {
        
    }

    prepend() {
        
    }

    remove() {
        this.startExitingAnimation();
        
    }
}

window.DomAnimator = DomAnimator;