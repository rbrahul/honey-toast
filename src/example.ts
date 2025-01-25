import { InputType } from 'zlib';
import { toast } from './index';
import { ToastOptions, Animation } from './type';

function minimalTestToastAlerts() {
    const t = toast.notify('Hi There!', {
        duration: 1000,
        type: 'default',
        position: 'top-right',
    });
    const t2 = toast.notify(
        {
            title: 'Hi There!',
            message: 'I hope you are having a greate day.',
        },
        {
            duration: 1000,
            type: 'success',
            position: 'top-right',
        },
    );

    const t3 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-right',
        type: 'info',
    });

    const t4 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-right',
        type: 'warning',
    });

    const t5 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-right',
        type: 'error',
    });

    const t6 = toast.notify(
        {
            title: 'Hi, there!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: [
                {
                    iconUrl: '../assets/icons/close.svg',
                    label: 'Close',
                    onClick: () => {
                        console.log('Closing  the item');
                    },
                },
                {
                    iconUrl: '../assets/icons/tick.svg',
                    label: 'Confirm',
                    onClick: () => {
                        console.log('Confirming the item');
                    },
                },
            ],
        },
        {
            duration: 1000,
            position: 'top-right',
            type: 'success',
            classNames: ['border-left-5'],
        },
    );

    const t7 = toast.notify(
        {
            title: 'Hi, there!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: [
                {
                    iconUrl: '../assets/icons/close.svg',
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
            duration: 1000,
            position: 'top-right',
            type: 'error',
        },
    );
}


function standardTestToastAlerts() {
    const t = toast.notify('Hi There!', {
        duration: 1000,
        type: 'default',
        design: 'standard',
        position: 'top-center',
    });
    const t2 = toast.notify(
        {
            title: 'Hi There!',
            message: 'I hope you are having a greate day.',
        },
        {
            duration: 1000,
            type: 'success',
            design: 'standard',
            position: 'top-center',
        },
    );

    const t3 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'info',
    });

    const t4 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'warning',
    });

    const t5 = toast.notify('Hi There!', {
        duration: 1000,
        position: 'top-center',
        design: 'standard',
        type: 'error',
    });

    const t6 = toast.notify(
        {
            title: 'Hi, there!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: [
                {
                    iconUrl: '../assets/icons/close.svg',
                    label: 'Close',
                    onClick: () => {
                        console.log('Closing  the item');
                    },
                },
                {
                    iconUrl: '../assets/icons/tick.svg',
                    label: 'Confirm',
                    onClick: () => {
                        console.log('Confirming the item');
                    },
                },
            ],
        },
        {
            duration: 1000,
            position: 'top-center',
            design: 'standard',
            type: 'success',
            classNames: ['border-left-5'],
        },
    );

    const t7 = toast.notify(
        {
            title: 'Hi, there!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: [
                {
                    iconUrl: '../assets/icons/close.svg',
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
            duration: 1000,
            position: 'top-center',
            design: 'standard',
            type: 'error',
        },
    );
}

setTimeout(() => {
  //  standardTestToastAlerts();
    // minimalTestToastAlerts();

}, 3000);

function createAnimatingToast(animationType, position = 'top-right') {
    const t7 = toast.notify(
        {
            title: 'Hi, Rahul!',
            message: 'Thank you for subscribing our service. For any help feel free to write us.',
            buttons: [
                {
                    iconUrl: '../assets/icons/close.svg',
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
            duration: 1000,
            position: position as ToastOptions['position'],
            design: 'standard',
            type: 'success',
            animation: animationType as Animation,
        },
    );
}

const getProperties = () => {
    const animationType = document.querySelector(`input[name="animation"]:checked`)?.value;
    const position = document.querySelector(`input[name="position"]:checked`)?.value;
    return { animationType, position };
};

document.querySelector('.show-toast').addEventListener('click', e => {
    const { animationType, position } = getProperties();
    createAnimatingToast(animationType, position);
});
