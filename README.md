# react-input [![npm version](https://badge.fury.io/js/react-input.svg)](http://badge.fury.io/js/react-input) [![Dependency Status](https://david-dm.org/pburtchaell/react-classes.svg)](https://david-dm.org/pburtchaell/react-input)

## Overview

This is a set of lightweight, dependency free components for building forms in React. There are three components in total:

1. `<Field>`: A wrapper that provides methods to get input values.
2. `<Label>`: An optional text label.
3. `<Input>`: A textarea, email, text or password input.
4. `<Submit>`: A submit button.

Right now, only `textarea`, `password`, `email` and `text` inputs can be used, but it can be expanded to provide date pickers, checkboxes/switches, selection menus, and file inputs in the future.

## Usage

- Install the component via npm: `npm install react-input`

```
<form onSubmit={this.myFormSubmissionHandler}>
  <Field ref="name">
    <Label />
    <Input required type="text" placeholder="Name" />
  </Field>
  <Submit />
</form>
```

For a detailed example, see [the example project](/example).

### Props

All standard HTML input attributes are supported and can be used as props.

### Input Methods

| Method  | Usage             |                                     |
|-------- |-----------------  |------------------------------------ |
| focus   | `Input.focus()`   | Sets the focus on the element.      |
| value   | `Input.value()`   | Returns the value on the element.*  |
| clear   | `Input.clear()`   | Clears the value on the element.    |

_*Note that you can also change the value of an input directly by `Input.value = 'newValue'_

### Input Events

| Event     | Description                               |
|---------  |-----------------------------------------  |
| onChange  | Runs on change                            |

Considering this component:

```
<Input
  type="email"
  onChange={this.handleInputChange.bind(null, 'email')}
/>
```

An event handler might look like:

```
handleInputChange(fieldName, event, value) {
  this.setState({
    [fieldName]: value
  });
}
```

### DOM Tree

As this component does not include CSS styles to use, you will need to add your own styles. If you are using inline styles, just include the `style` prop on each component.

The default DOM tree of the component is included below for reference. You can also override the default classes by just using `className` like you would normally.

```html
<div class="input-group">
  <label class="input-group-label"></label>
  <input class="input-group-input">
</div>
```

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell).

Copyright 2015 Patrick Burtchaell. Licensed MIT.
