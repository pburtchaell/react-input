# react-input [![npm version](https://badge.fury.io/js/react-input.svg)](http://badge.fury.io/js/react-input) [![Dependency Status](https://david-dm.org/pburtchaell/react-classes.svg)](https://david-dm.org/pburtchaell/react-input)

## Overview

This is a simple component designed to provide fields for all inputs on a form. Right now, only `password`, `email` and `text` inputs can be used with the component, but it will be expanded to provide date pickers, checkboxes/switches, selection menus, and file inputs.

## Getting Started

1. First, install the component via npm: `npm install react-input`
2. Require the component: `var Input = require('react-input');`

## Usage

```
<Input
  ref={string}
  type={string: text || password || email}
  label={string}
  placeholder={string}
  defaultValue={string}
  error={string}
  disabled={bool}
  onChange={function}
/>
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

### DOM Node Tree

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
