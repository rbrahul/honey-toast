# Honey-Toast
A framework agnostic notification UI library that offers tons of customization, designs and animations.


[Playground for Demo](https://rbrahul.github.io/honey-toast)


## Installation:

Install via npm package manager:
```sh
npm i honey-toast --save
```

### Usage Example:

Create notification with default configurations.

```js
import toast from 'honey-toast';

toast.notify("Hi There!")

```

Create different type of notifications:

```js
toast.success("Your information have been udpated!")
toast.info("Email has been delivered!")
toast.warn("Stock is limited")
toast.error("Ooops, something went wrong")
```

Create more advance toast notification with tons of options. Please have a look into our the [API Documentation](https://github.com/rbrahul/honey-toast-doc) to find the complete list of options.

```js
import toast from 'honey-toast';

toast.notify({
    title: 'Hi, there!',
    message: 'Thank you for subscribing our service.',
    duration: 3000,
    position: 'top-right',
    type: 'success',
    animation: 'slide',
    hasProgressBar: false,
    offset: {x: 30, y: 30},
    classNames: [],
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
    ],
});
    
```

