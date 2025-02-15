// THis will be replaced by 'honey-toast' package

type ToastOptions = {
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    type: 'default' | 'success' | 'info' | 'warning' | 'error';
    theme: 'light' | 'dark';
    design: 'standard' | 'minimal' | 'colorful' | 'gradient';
};

import './style.css';

const DEMO_ALERT_GROUP:unknown[] = [];
const TIMEOUT_IDs:ReturnType<typeof setTimeout>[]= [];

const generateCode = async ({
    duration = 3000,
    position = 'top-right',
    type = 'success',
    animation = 'slide',
    hasButtons = true,
    hasProgressBar = false,
    offset = { x: 30, y: 30 },
}) => {
    let butttons = '';
    if (hasButtons) {
        butttons = `,
    buttons: [
        {
            iconUrl: 'YOUR_ICON_DIR/close.svg',
            label: 'Cancel',
            classes: [],
            onClick: () => {
                console.log('Canceling...');
            },
        },
        {
            iconUrl: 'YOUR_ICON_DIR/tick.svg',
            classes: [],
            label: 'Confirm',
            onClick: () => {
                console.log('Confirming...');
            },
        },
    ]`;
    }
    let code = `import toast from 'honey-toast';

toast.notify({
    title: 'Hi, there!',
    message: 'Thank you for subscribing our service.',
    duration: ${duration},
    position: '${position}',
    type: '${type}',
    animation: '${animation}',
    hasProgressBar: ${hasProgressBar},
    offset: {x: ${offset.x}, y: ${offset.y}},
    classNames: []${butttons},
});
    `;

    if ('codeToHtml' in window && window.codeToHtml) {
        const codeView = document.querySelector('.toast-code');
        //@ts-ignore
        codeView.innerHTML = await window.codeToHtml(code, {
            lang: 'js',
            theme: 'rose-pine',
        });
    }
};

function minimalTestToastAlerts() {
    const t = toast.notify('Hi There!', {
        duration: 7000,
        type: 'default',
        position: 'top-right',
        animation: 'slide',
    });
    DEMO_ALERT_GROUP.push(t);
    const timeout1 = setTimeout(() => {
        const t2 = toast.notify(
            {
                title: 'Hi There!',
                message: 'I hope you are having a greate day.',
            },
            {
                duration: 4500,
                type: 'success',
                position: 'top-right',
                animation: 'zoom',
                hasProgressBar: true,
                progress: 0,
            },
        );
        DEMO_ALERT_GROUP.push(t2);
    }, 3000);
    TIMEOUT_IDs.push(timeout1);

    const timeout2 = setTimeout(() => {
        const t3 = toast.notify('Hi There!', {
            duration: 3000,
            position: 'top-right',
            type: 'info',
            animation: 'bounce',
        });
        DEMO_ALERT_GROUP.push(t3);
    }, 1000);

    TIMEOUT_IDs.push(timeout2);
    const timeout3 = setTimeout(() => {
        const t4 = toast.notify('Hi There!', {
            duration: 4000,
            position: 'top-right',
            type: 'warning',
            animation: 'fade',
        });
        DEMO_ALERT_GROUP.push(t4);
    }, 3500);
    TIMEOUT_IDs.push(timeout3);

    const timeoutId4 = setTimeout(() => {
        const t5 = toast.notify('Hi There!', {
            duration: 3000,
            position: 'top-right',
            type: 'error',
            animation: 'zoom',
        });
        DEMO_ALERT_GROUP.push(t5);
    }, 5500);
    TIMEOUT_IDs.push(timeoutId4);

    const timeoutId5 = setTimeout(() => {
        const t6 = toast.notify('Your Parcel has arrived!', {
            duration: 3000,
            position: 'top-right',
            type: 'success',
            animation: 'bounce',
        });
        DEMO_ALERT_GROUP.push(t6);
    }, 4500);
    TIMEOUT_IDs.push(timeoutId5);

    const timeoutId7 = setTimeout(() => {
        const t7 = toast.notify(
            {
                title: 'Hi, there!',
                message:
                    'Thank you for subscribing our service. For any help feel free to write us.',
                buttons: [
                    {
                        iconUrl: '../assets/icons/close.svg',
                        label: 'Close',
                        classes: ['sm-tick-icon'],
                        onClick: () => {
                            console.log('Closing  the item');
                        },
                    },
                    {
                        iconUrl: '../assets/icons/tick.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Confirm',
                        onClick: () => {
                            console.log('Confirming the item');
                        },
                    },
                ],
            },
            {
                duration: 4000,
                position: 'top-right',
                type: 'success',
                animation: 'zoom',
                design: 'gradient',
            },
        );
        DEMO_ALERT_GROUP.push(t7);
    }, 5200);
    TIMEOUT_IDs.push(timeoutId7);

    const timeoutId8 = setTimeout(() => {
        const t8 = toast.notify(
            {
                title: 'Hi, there!',
                message:
                    'Thank you for subscribing our service. For any help feel free to write us.',
                buttons: [
                    {
                        iconUrl: '../assets/icons/close.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Close',
                        onClick: () => {
                            console.log('Closing  the item');
                        },
                    },
                    {
                        iconUrl: '../assets/icons/tick.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Confirm',
                        onClick: () => {
                            console.log('Confirming the item');
                        },
                    },
                ],
            },
            {
                duration: 4500,
                position: 'top-right',
                type: 'error',
                animation: 'zoom',
                design: 'gradient',
            },
        );
        DEMO_ALERT_GROUP.push(t8);
    }, 3500);
    TIMEOUT_IDs.push(timeoutId8);
}

function standardTestToastAlerts() {
    setTimeout(() => {
        const t = toast.notify('Hi There!', {
            duration: 7000,
            type: 'default',
            design: 'standard',
            position: 'top-left',
            animation: 'slide',
        });
        DEMO_ALERT_GROUP.push(t);
    }, 500);

    setTimeout(() => {
        const t2 = toast.notify(
            {
                title: 'Hi There!',
                message: 'I hope you are having a greate day.',
            },
            {
                duration: 6000,
                type: 'success',
                design: 'standard',
                position: 'top-left',
                animation: 'bounce',
            },
        );
        DEMO_ALERT_GROUP.push(t2);
    }, 1500);

    setTimeout(() => {
        const t3 = toast.notify('Hi There!', {
            duration: 5000,
            position: 'top-left',
            design: 'standard',
            type: 'info',
            animation: 'zoom',
        });
        DEMO_ALERT_GROUP.push(t3);
    }, 2500);

    setTimeout(() => {
        const t4 = toast.notify('Hi There!', {
            duration: 4000,
            position: 'top-left',
            design: 'standard',
            type: 'success',
            animation: 'slide',
        });
        DEMO_ALERT_GROUP.push(t4);
    }, 3500);
    setTimeout(() => {
        const t5 = toast.notify('Hi There!', {
            duration: 5000,
            position: 'top-left',
            design: 'colorful',
            type: 'error',
            animation: 'bounce',
        });
        DEMO_ALERT_GROUP.push(t5);
    }, 4500);
    setTimeout(() => {
        const t6 = toast.notify(
            {
                title: 'Hi, there!',
                message:
                    'Thank you for subscribing our service. For any help feel free to write us.',
                buttons: [
                    {
                        iconUrl: '../assets/icons/close.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Close',
                        onClick: () => {
                            console.log('Closing  the item');
                        },
                    },
                    {
                        iconUrl: '../assets/icons/tick.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Confirm',
                        onClick: () => {
                            console.log('Confirming the item');
                        },
                    },
                ],
            },
            {
                duration: 4000,
                position: 'top-left',
                type: 'info',
                design: 'gradient',
                animation: 'fade',
                hasProgressBar: true,
                progress: 0,
            },
        );
        DEMO_ALERT_GROUP.push(t6);
    }, 5500);

    setTimeout(() => {
        const t7 = toast.notify(
            {
                title: 'Hi, there!',
                message:
                    'Thank you for subscribing our service. For any help feel free to write us.',
                buttons: [
                    {
                        iconUrl: '../assets/icons/close.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Close',
                        onClick: () => {
                            console.log('Closing  the item');
                        },
                        type: 'default',
                    },
                    {
                        label: 'Confirm',
                        classes: [],
                        onClick: () => {
                            console.log('Confirming the item');
                        },
                        type: 'success',
                    },
                ],
            },
            {
                duration: 3000,
                position: 'top-left',
                design: 'standard',
                type: 'error',
                animation: 'zoom',
            },
        );
        DEMO_ALERT_GROUP.push(t7);
    }, 6500);

    setTimeout(() => {
        const t8 = toast.notify(
            {
                title: 'Hi, there!',
                message:
                    'Thank you for subscribing our service. For any help feel free to write us.',
                buttons: [
                    {
                        iconUrl: '../assets/icons/close.svg',
                        classes: ['sm-tick-icon'],
                        label: 'Close',
                        onClick: () => {
                            console.log('Closing  the item');
                        },
                        type: 'default',
                    },
                    {
                        label: 'Confirm',
                        classes: [],
                        onClick: () => {
                            console.log('Confirming the item');
                        },
                        type: 'success',
                    },
                ],
            },
            {
                duration: 4000,
                position: 'top-left',
                design: 'colorful',
                type: 'info',
                animation: 'fade',
            },
        );
        DEMO_ALERT_GROUP.push(t8);
    }, 4500);
}

function showAllDemoAlerts() {
    minimalTestToastAlerts();
    standardTestToastAlerts();
}

const ALL_ALERTS:unknown[] = [];

function createAnimatingToast({
    animation,
    duration = 3000,
    position = 'top-right',
    theme = 'light',
    type = 'success',
    design = 'standard',
    autoClose = true,
    hasButtons = false,
    offset = { x: 30, y: 30 },
    hasProgressBar = false,
    progress=0,
}) {
     const toastAlert = toast.notify(
        {
            title: 'Hi, There!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: hasButtons ?[
                {
                    iconUrl: '../assets/icons/close.svg',
                    label: 'Close',
                    classes: ['sm-tick-icon'],
                    onClick: () => {
                        toastAlert.close();
                        console.log('Closing  the item');
                    },
                    type: 'default',
                },
                {
                    label: 'Confirm',
                    classes: [],
                    onClick: () => {
                        toastAlert.close();
                        console.log('Confirming the item');
                    },
                    type: 'success',
                },
            ] : [],
        },
        {
            duration,
            position: position as ToastOptions['position'],
            type: type as ToastOptions['type'],
            theme: theme as ToastOptions['theme'],
            design: design as ToastOptions['design'],
            animation: animation as string,
            isCloseable: true,
            autoClose,
            offset,
            hasProgressBar,
            progress,
            onClose: () => {
                console.log('I have been closed!');
            },
            onShow: () => {
                console.log('I have appeared!');
            },
        },
    );
    ALL_ALERTS.push(toastAlert);
}

const getProperties = () => {
    const animation = document.querySelector<HTMLInputElement>(
        `input[name="animation"]:checked`,
    )?.value;
    const position = document.querySelector<HTMLSelectElement>(`select[name="position"]`)?.value;
    const theme = document.querySelector<HTMLInputElement>(`input[name="theme"]:checked`)?.value;
    const type = document.querySelector<HTMLInputElement>(`input[name="type"]:checked`)?.value;
    const design = document.querySelector<HTMLInputElement>(`input[name="design"]:checked`)?.value;
    const autoClose = Boolean(
        Number(document.querySelector<HTMLInputElement>(`input[name="autoclose"]:checked`)?.value),
    );
    const hasButtons = Boolean(
        Number(document.querySelector<HTMLInputElement>(`input[name="hasbuttons"]:checked`)?.value),
    );
    const hasProgressBar = Boolean(
        Number(
            document.querySelector<HTMLInputElement>(`input[name="progressbar"]:checked`)?.value,
        ),
    );
    const duration = Number(
        document.querySelector<HTMLInputElement>(`input[name="duration"]`)?.value,
    );
    const offset = { x: 0, y: 0 };
    offset.x = Number(document.querySelector<HTMLInputElement>(`input[name="offset-x"]`)?.value);
    offset.y = Number(document.querySelector<HTMLInputElement>(`input[name="offset-y"]`)?.value);
    return {
        animation,
        design,
        position,
        theme,
        type,
        autoClose,
        duration,
        hasButtons,
        hasProgressBar,
        offset,
    };
};

// @ts-ignore
var toast = window?.toast ?? {};

document.querySelector('.show-toast')?.addEventListener('click', e => {
    const options = getProperties();
    if (!(Number.isFinite(options.duration) && options.duration > 0)) {
        toast.notify('Duration must be a number and greater than 0', {
            type: 'error',
            design: 'gradient',
            position: 'top-center',
        });
        return;
    }
    //@ts-ignore
    if (options?.offset?.x < 0 || options?.offset?.y < 0) {
        toast.notify('Offset values must be a valid positive number', {
            type: 'error',
            position: 'top-center',
            design: 'gradient',
        });
        return;
    }
    createAnimatingToast(options);
    generateCode(options);
});

function closeAllAlerts() {
    if (ALL_ALERTS.length) {
        //@ts-ignore
        ALL_ALERTS[0].closeAll();
    }
    if (DEMO_ALERT_GROUP.length) {
        //@ts-ignore
        DEMO_ALERT_GROUP[0].closeAll?.();
    }
}

document.querySelector('.close-all-toast')?.addEventListener('click', e => {
    closeAllAlerts();
});

document.querySelector('.show-all-toast')?.addEventListener('click', e => {
    closeAllAlerts();
    showAllDemoAlerts();
});

document.querySelectorAll(`input[name="autoclose"]`).forEach(input => {
    input.addEventListener('change', e => {
        const selectedAutoClose = (e.target as HTMLInputElement).value;
        if (Boolean(Number(selectedAutoClose))) {
            document.querySelector('#duration-input-area')?.classList.remove('hidden');
        } else {
            document.querySelector('#duration-input-area')?.classList.add('hidden');
        }
    });
});

document.querySelector(".copy-btn")?.addEventListener("click", () => {
    const code = document.querySelector(".toast-code pre")?.textContent;
    navigator.clipboard.writeText(code as string).then(() => {
        toast.notify("Code copied to clipboard", {
            type: "success",
            position: "top-center",
            duration: 2000,
        });
    });
})

window.onload = () => {
generateCode({});
};
/*
setTimeout(() => {
    minimalTestToastAlerts();
    standardTestToastAlerts();
}, 2000);
*/
