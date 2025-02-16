# Honey-Toast
A framework agnostic notification UI library that offers tons of customization, designs and animations.

## Demo and Playground:
You can play with different animations and designs [View Demo with Playground.](https://rbrahul.github.io/honey-toast). You can just copy the generated code and start using inside your project.

## Documentation
Here is the complete API [Documentation.](https://github.com/rbrahul/honey-toast-doc).


## Main Features:

- Easier installation and integrations
- Use with any Javascript framework as it has zero dependencies.
- Huge collections of beautiful designs and categories
- Lot of built in animations to create interactive toast alert
- Control over the states of notifications
- Light, Dark and Sytem Default themes are supported
- Creating custom designs is way easier
- Playground to create Notifications and copy the generated code.

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

**Create different type of notifications using simpler api:**

```js
...
toast.success("Your information have been udpated!")
toast.info("Email has been delivered!")
toast.warn("Stock is limited")
toast.error("Ooops, something went wrong")
...
```

**Create more advanced toast notification with tons of options.**
Please have a look into our the [API Documentation](https://github.com/rbrahul/honey-toast-doc) to find the complete list of options.

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

**Closing notifications:**

```js
...
const notification = toast.notify("Hi There!");
// close once you need
notification.close();

// to close all notifications:
notification.closeAll();
...
```


**Updating existing notification in different circumstances:**

```js
...
const notification = toast.notify("Your requst is being processed", {hasProgressBar: true});
// once you need to update the status
notification.update("Request has been processed", {type: "success"})

// you may want to show error message if request was not handled correctly
notification.update("Ooops! Something went wrong", {type: "error"});
...
```
