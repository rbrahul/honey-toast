export type AnimationOptions = {
    animationClassPrefix: string;
    animationKind: 'animation' | 'transition';
    onEnter: () => void;
    onEntered: () => void;
    onExit: () => void;
    onExited: () => void;
    animationTimeout: number;
};
export default class Animator {
    #private;
    options: AnimationOptions;
    node: HTMLElement;
    constructor(node: HTMLElement, options: AnimationOptions);
    validate(): void;
    cleanupAnimationEventListners(animatingClassName: any): void;
    handleAnimationTimeout(targetClass: any): void;
    startEnteringAnimation(): void;
    startExitingAnimation(): void;
    mount(direction: string, parent: any): void;
    appendChild(parent: any): void;
    prepend(parent: any): void;
    append(parent: any): void;
    remove(): void;
}
//# sourceMappingURL=animator.d.ts.map