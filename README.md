# react-input

## Installation

`npm install react-input`

## Usage

### Props

| Name          | Type    | Default   | Description                                                     |           |
|-------------  |-------- |---------  |---------------------------------------------------------------  |---------- |
| type          | string  | `text`    | The type of input field, e.g., `text`, `password`, or `email`   | optional  |
| label         | string  |           | an instructional label for the input                            | optional  |
| placeholder   | string  |           | inline placeholder text for the input                           | optional  |
| error         | string  |           | error message for the input                                     | optional  |

### Methods

| Method  |                   |                                           |
|-------- |-----------------  |-----------------------------------------  |
| focus   | `Input.focus()`   | Sets the focus on the input element.      |
| value   | `Input.value()`   | Returns the value on the input element.   |
| clear   | `Input.clear()`   | Clears the value on the input element.    |

### DOM Nodes

As this component does not include CSS styles to use, you will need to add your own styles. The DOM tree of the component is included below for reference.

```html
<div class="input-group input-group-error">
  <label class="input-group-label"></label>
  <input class="input-group-field">
  <span class="input-group-message"></span>
</div>
```

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell).

Copyright 2014 Patrick Burtchaell. Licensed MIT.
