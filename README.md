# react-input [![npm version](https://badge.fury.io/js/react-input.svg)](http://badge.fury.io/js/react-input) [![Dependency Status](https://david-dm.org/pburtchaell/react-classes.svg)](https://david-dm.org/pburtchaell/react-input)

## Overview

React input is a lightweight, dependency free component for building forms in React without having to think about what happens under the hood.

Right now, only `textarea`, `password`, `email` and `text` inputs can be used, but it can be expanded to provide date pickers, checkboxes/switches, selection menus, and file inputs in the future.

## Usage

- Install the component via npm: `npm install react-input`
- Require the form component

```
<form onSubmit={this.myFormSubmissionHandler}>
  <Field ref="email" name="email">
    <Label />
    <Input
      required
      type="email"
      placeholder="Name"
    />
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

| Event     | Description                                               |
|---------  |---------------------------------------------------------  |
| onChange  | Runs on change. Includes the name and value of the input. |

Considering this component:

```
<Field ref="email" name="email">
  <Input
    type="email"
    onChange={::this.handleInputChange}
  />
</Field>
```

An event handler might look like:

```
handleInputChange(value, field, event) {
  return this.setState({
    [field]: value
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
