# React Input

[![npm version](https://badge.fury.io/js/react-input.svg)](http://badge.fury.io/js/react-input) [![Build Status](https://travis-ci.org/pburtchaell/react-input.svg?branch=master)](https://travis-ci.org/pburtchaell/react-input) [![Coverage Status](https://coveralls.io/repos/github/pburtchaell/react-input/badge.svg)](https://coveralls.io/github/pburtchaell/react-input) [![npm downloads](https://img.shields.io/npm/dm/react-input.svg?style=flat)](https://www.npmjs.com/package/react-input)

## Overview

React input is a lightweight, dependency free component for building forms in React without having to think about what happens under the hood. It uses one component and an array of objects that describe the inputs in the form.

## Usage

Install the component via npm: `npm install react-input`.

```
<Form
  fields={[
    {
      name: 'Email',
      key: 'email',
      type: 'email',
      error: false,
      required: false,
      placeholder: 'Enter an email',
      onChange: value => {
        // handle a changed value on the input
      },
      renderAfter: () => (
        <div>Include an element after the input, which is useful for instructional text or strength meters for passwords</div>
      ),
      renderBefore: () => (
        <div>Include an element before the input</div>
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
| labels      | boolean  | If false, labels are disabled                            |           | true     |
| isPending   | boolean  | If true, an `.is-pending` class is added to the form     |           | null     |
| isRejected  | boolean  | If true, an `.is-rejected` class is added to the form    |           | null     |
| isFulfilled | boolean  | If true, an `.is-fulfilled` class is added to the form   |           | null     |

The `isPending`, `isRejected` and `isFulfilled` props are useful to add different styles to the form for different states.

### Form Events

| Event     | Description                                                                                             |
|---------  |---------------------------------------------------------------------------------------------------------|
| onChange  | Runs when any input in the form changes. The first parameter is the state of the form after the change. |
| onSubmit  | Runs when the submit button is clicked. The first parameter is the current state of the form.           |

### Input Properties and Events

Only text based inputs can be used, e.g., `email`, `text`, `tel` and `password`.

#### Properties

| Name         | Type     | Description                     | Required  | Default  |
|--------------|----------|---------------------------------|---------- |----------|
| key          | string   | Unique key for the field        | true      |          |
| type         | string   | The type of input               |           |`'text'`  |
| name         | string   | The name of input               |           |          |
| label        | boolean  | Label for the input field       |           | true     |
| required     | boolean  | Make field required             |           | true     |
| error        | boolean  | Is the input in an error state? |           | false    |
| renderAfter  | function | Element to render after the input   |           |          |
| renderBefore | function | Element to render before the input  |           |          |

#### Events

| Event     | Description                                                                 |
|---------  |-----------------------------------------------------------------------------|
| onChange  | Runs when the value of the input changes. The first parameter is the value. |

In addition to the props listed above, all standard HTML input attributes are supported and can be used as props on the inputs.

---
Copyright 2015 Patrick Burtchaell. Licensed MIT.
