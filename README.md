# react-input [![npm version](https://badge.fury.io/js/react-input.svg)](http://badge.fury.io/js/react-input) [![Dependency Status](https://david-dm.org/pburtchaell/react-classes.svg)](https://david-dm.org/pburtchaell/react-input)

## Overview

React input is a lightweight, dependency free component for building forms in React without having to think about what happens under the hood. It uses one component and an array of objects that describe the inputs in the form.

## Usage

- Install the component via npm: `npm install react-input`
- Require the Form component

```
<Form
  fields={[
    {
      name: 'Email',
      type: 'email',
      error: false,
      required: false, // Property to include on the input,
      label: false, // Don't include a label
      placeholder: 'Enter an email',
      onChange: value => {
        // handle a changed value on the input
      },
      renderAfter: () => (
        <div>Include custom JSX after the input. This is useful for instructional text or strength meters for passwords</div>
      ),
      renderBefore: () => (
        <div>Include custom JSX before the input</div>
      )
    },
    // additional inputs to include in the form
  ]}
  onChange={state => /* handle form change */ }
  onSubmit={state => /* handle form submit */ }
/>
```

For a detailed example, see [the example project](/example).

### Form Props

| Name        | Type     | Description                                              | Required  | Default  |
|-------------|----------|----------------------------------------------------------|---------- |----------|
| fields      | array    | Array of inputs to include                               | true      |          |
| isPending   | boolean  | If true, an `.is-pending` class is added to the form     |           | null     |
| isRejected  | boolean  | If true, an `.is-rejected` class is added to the form    |           | null     |
| isFulfilled | boolean  | If true, an `.is-fulfilled` class is added to the form   |           | null     |

The `isPending`, `isRejected` and `isFulfilled` props are useful to add different styles to the form for different states.

### Form Events

| Event     | Description                                                                                             |
|---------  |---------------------------------------------------------------------------------------------------------|
| onChange  | Runs when any input in the form changes. The first parameter is the state of the form after the change. |
| onSubmit  | Runs when the submit button is clicked. The first parameter is the current state of the form.           |

### Input Props and Events

Only text based inputs can be used, e.g., `email`, `text`, `tel` and `password`.

#### Props

| Name         | Type     | Description                     | Required  | Default  |
|--------------|----------|---------------------------------|---------- |----------|
| type         | string   | The type of input               |           |`'text'`  |
| name         | string   | The name of input               |           |          |
| label        | boolean  | Label for the input field       |           | true     |
| error        | boolean  | Is the input in an error state? |           | false    |
| renderAfter  | function | JSX to render after the input   |           |          |
| renderBefore | function | JSX to render before the input  |           |          |

#### Events

| Event     | Description                                                                 |
|---------  |-----------------------------------------------------------------------------|
| onChange  | Runs when the value of the input changes. The first parameter is the value. |

In addition to the props listed above, all standard HTML input attributes are supported and can be used as props on the inputs.

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell).

Copyright 2015-current Patrick Burtchaell. Licensed MIT.
