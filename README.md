# react-input [![npm version](https://badge.fury.io/js/react-input.svg)](http://badge.fury.io/js/react-input) [![Dependency Status](https://david-dm.org/pburtchaell/react-classes.svg)](https://david-dm.org/pburtchaell/react-input)

## Overview

This is a set of component designed for building forms in React. There are four components in total:

1. `<Form>`: The wrapper component
2. `<Field>`: The wrapper for inputs
3. `<Label>`: A label for inputs (optional)
4. `<Input>`: The input

Right now, only `password`, `email` and `text` inputs can be used, but it can be expanded to provide date pickers, checkboxes/switches, selection menus, and file inputs in the future.

## Getting Started

1. First, install the component via npm: `npm install react-input`
2. Require the component: `import Input from 'react-input';`

## Usage

```
<Form>
  <Field ref="name" message="Enter your full name">
    <Label />
    <Input required={true} type="text" placeholder="John Smith" />
  </Field>
  <Field ref="email" error="Error description">
    <Label />
    <Input required={true} type="email" />
  </Field>
</Form>
```

### Props

| Name          | Type    | Default   | Description                                                     |
|-------------  |-------- |---------  |---------------------------------------------------------------  |
| type          | string  | `text`    | The type of input field, e.g., `text`, `password`, or `email`   |
| required      | bool    | `false`   | Make the form required                                          |
| label         | string  |           | an instructional label for the input                            |
| placeholder   | string  |           | inline placeholder text for the input                           |
| error         | string  |           | error message for the input                                     |

### Methods

| Method  | Usage             |                                           |
|-------- |-----------------  |-----------------------------------------  |
| focus   | `Input.focus()`   | Sets the focus on the input element.      |
| value   | `Input.value()`   | Returns the value on the input element.   |
| clear   | `Input.clear()`   | Clears the value on the input element.    |

## Events

| Event     | Description                               |
|---------  |-----------------------------------------  |
| onChange  | Fuction runs on change                    |

### Styles

As this component does not include CSS styles to use, you will need to add your own styles. The DOM tree of the component is included below for reference.

```html
<div class="input-group">
  <label class="input-group-label"></label>
  <input class="input-group-field">
  <span class="input-group-message"></span>
</div>
```

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell).

Copyright 2014 Patrick Burtchaell. Licensed MIT.
