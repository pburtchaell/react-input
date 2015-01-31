# react-input

## Installation

`npm install react-input`

## Usage

```
<Input
  ref="foo"
  type="text"
  label="Foo"
  placeholder="Foo"
  defaultValue=""
  error="{false}
  disabled={false}
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
