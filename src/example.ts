import { toast } from './index';
import { ToastOptions, Animation } from './type';

const DEMO_ALERT_GROUP = [];

function minimalTestToastAlerts() {
    const t = toast.notify('Hi There!', {
        duration: 7000,
        type: 'default',
        position: 'top-right',
        animation: 'slide',
    });
    DEMO_ALERT_GROUP.push(t);
    setTimeout(() => {
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
            },
        );
        DEMO_ALERT_GROUP.push(t2);
    }, 3000);

    setTimeout(() => {
        const t3 = toast.notify('Hi There!', {
            duration: 3000,
            position: 'top-right',
            type: 'info',
            animation: 'bounce',
        });
        DEMO_ALERT_GROUP.push(t3);
    }, 1000);

    setTimeout(() => {
        const t4 = toast.notify('Hi There!', {
            duration: 4000,
            position: 'top-right',
            type: 'warning',
            animation: 'fade',
        });
        DEMO_ALERT_GROUP.push(t4);
    }, 3500);
    setTimeout(() => {
        const t5 = toast.notify('Hi There!', {
            duration: 3000,
            position: 'top-right',
            type: 'error',
            animation: 'zoom',
        });
        DEMO_ALERT_GROUP.push(t5);
    }, 5500);
    setTimeout(() => {
        const t6 = toast.notify('Your Parcel has arrived!', {
            duration: 3000,
            position: 'top-right',
            type: 'success',
            animation: 'bounce',
            classNames: ['border-left-5'],
        });
        DEMO_ALERT_GROUP.push(t6);
    }, 4500);

    setTimeout(() => {
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
            classNames: ['border-left-5'],
        });
        DEMO_ALERT_GROUP.push(t4);
    }, 3500);
    setTimeout(() => {
        const t5 = toast.notify('Hi There!', {
            duration: 5000,
            position: 'top-left',
            design: 'standard',
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

setTimeout(() => {
    minimalTestToastAlerts();
    standardTestToastAlerts();
}, 2000);

function showAllDemoAlerts(){
    minimalTestToastAlerts();
    standardTestToastAlerts();
}

const ALL_ALERTS = [];

function createAnimatingToast({
    animationType,
    position = 'top-right',
    theme = 'light',
    type = 'success',
    design = 'standard',
}) {
    const toastAlert = toast.notify(
        {
            title: 'Hi, Rahul!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: [
                {
                    iconUrl: '../assets/icons/close.svg',
                    label: 'Close',
                    classes: ['sm-tick-icon'],
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
            position: position as ToastOptions['position'],
            type: type as ToastOptions['type'],
            theme: theme as ToastOptions['theme'],
            design: design as ToastOptions['design'],
            animation: animationType as Animation,
            isCloseable: true,
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
    const animationType = document.querySelector<HTMLInputElement>(`input[name="animation"]:checked`)?.value;
    const position = document.querySelector<HTMLInputElement>(`select[name="position"]`)?.value;
    const theme = document.querySelector<HTMLInputElement>(`input[name="theme"]:checked`)?.value;
    const type = document.querySelector<HTMLInputElement>(`input[name="type"]:checked`)?.value;
    const design = document.querySelector<HTMLInputElement>(`input[name="design"]:checked`)?.value;
    return { animationType, design, position, theme, type };
};

document.querySelector('.show-toast').addEventListener('click', e => {
    const options = getProperties();
    console.log('OPTIONS:', options);
    createAnimatingToast(options);
});


function closeAllAlerts() {
    if (ALL_ALERTS.length) {
        ALL_ALERTS[0].closeAll();
    }
    if (DEMO_ALERT_GROUP.length) {
        DEMO_ALERT_GROUP[0].closeAll();
    }
}

document.querySelector('.close-all-toast').addEventListener('click', e => {
    closeAllAlerts();
});

document.querySelector('.show-all-toast').addEventListener('click', e => {
    closeAllAlerts();
    showAllDemoAlerts();
});
