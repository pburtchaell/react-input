import React, { Component } from 'react';
import { render } from 'react-dom';
import { Field, Input, Label, Submit } from 'index';

class View extends Component {
  componentDidMount() {
    this.refs.nameInput.focus();
  }

  /**
   * @function handleFormSubmission
   * @description
   */
  handleFormSubmission(event) {
    event.preventDefault();
    console.log(':)', this.state);
  }

  /**
   * @function handleInputChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
   handleInputChange(id, event, value) {
     this.setState({
       [id]: value
     });
     console.log(`${id} value:`, this.state[id])
   }

  render() {
    return (
      <main>
        <header className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand"
                href="http://pburtchaell.github.com/react-input">
                React Input Example
              </a>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Example</h2>
              <hr />
              {this.renderExampleForm()}
            </div>
            <div className="col-md-12">
              <h2>Source</h2>
              <small>Open developer tools to see the form in action</small>
              <hr />
              <div dangerouslySetInnerHTML={this.renderExampleCode()}></div>
            </div>
          </div>
          <hr />
          <footer>
            <p>Copyright 2015 Patrick Burtchaell. Licensed MIT.</p>
          </footer>
        </div>
      </main>
    );
  }

  /**
   * @function renderExampleForm
   * @description Render an example form using React Input and Bootstrap
   * CSS classes.
   */
  renderExampleForm() {

    // Inline styles are supported.
    let style = {
      marginBottom: '1rem',
    };

    return (
      <form name="example" method="post" onSubmit={::this.handleFormSubmission}>

        <Field ref="name" name="name" className="input-group" style={style}>
          <Label className="input-group-addon" />
          <Input
            ref="nameInput"
            className="form-control"
            placeholder="John Smith"
            onChange={this.handleInputChange}
          />
        </Field>

        <Field ref="email" name="email" className="input-group" style={style}>
          <Input
            required
            type="email"
            className="form-control"
            placeholder="email@example.com"
            onChange={this.handleInputChange}
          />
          <Label className="input-group-addon" />
        </Field>

        <Field ref="phone" name="phone" className="input-group" style={style}>
          <Label className="input-group-addon" />
          <Input
            required
            className="form-control"
            placeholder="0-000-000-0000"
            onChange={this.handleInputChange}
          />
        </Field>

        <Submit className="btn btn-default" style={style}>Submit</Submit>

      </form>
    );
  }

  renderExampleCode() {
    return { __html: `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>form name<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>example</span><span style='color:#800000; '>"</span> onSubmit<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleFormSubmission<span style='color:#800080; '>}</span><span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span>Field name<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>name</span><span style='color:#800000; '>"</span> className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>input-group</span><span style='color:#800000; '>"</span> style<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>style<span style='color:#800080; '>}</span><span style='color:#808030; '>></span>
     <span style='color:#808030; '>&lt;</span>Label className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>input-group-addon</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
     <span style='color:#808030; '>&lt;</span>Input
       className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>form-control</span><span style='color:#800000; '>"</span>
       placeholder<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>John Smith</span><span style='color:#800000; '>"</span>
       onChange<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleInputChange<span style='color:#808030; '>.</span><span style='color:#400000; '>bind</span><span style='color:#808030; '>(</span>null<span style='color:#808030; '>,</span> <span style='color:#0000e6; '>'name'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
     <span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>Field<span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span>Field name<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>email</span><span style='color:#800000; '>"</span> className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>input-group</span><span style='color:#800000; '>"</span> style<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>style<span style='color:#800080; '>}</span><span style='color:#808030; '>></span>
     <span style='color:#808030; '>&lt;</span>Input
       required
       type<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>email</span><span style='color:#800000; '>"</span>
       className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>form-control</span><span style='color:#800000; '>"</span>
       placeholder<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>email@example.com</span><span style='color:#800000; '>"</span>
       onChange<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleInputChange<span style='color:#808030; '>.</span><span style='color:#400000; '>bind</span><span style='color:#808030; '>(</span>null<span style='color:#808030; '>,</span> <span style='color:#0000e6; '>'email'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
     <span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
     <span style='color:#808030; '>&lt;</span>Label className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>input-group-addon</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>Field<span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span>Field name<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>phone</span><span style='color:#800000; '>"</span> className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>input-group</span><span style='color:#800000; '>"</span> style<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>style<span style='color:#800080; '>}</span><span style='color:#808030; '>></span>
     <span style='color:#808030; '>&lt;</span>Label className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>input-group-addon</span><span style='color:#800000; '>"</span> <span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
     <span style='color:#808030; '>&lt;</span>Input
       required
       className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>form-control</span><span style='color:#800000; '>"</span>
       placeholder<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>0-000-000-0000</span><span style='color:#800000; '>"</span>
       onChange<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleInputChange<span style='color:#808030; '>.</span><span style='color:#400000; '>bind</span><span style='color:#808030; '>(</span>null<span style='color:#808030; '>,</span>  <span style='color:#0000e6; '>'phone'</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
     <span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>Field<span style='color:#808030; '>></span>
   <span style='color:#808030; '>&lt;</span>Submit className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>btn btn-default</span><span style='color:#800000; '>"</span> style<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>style<span style='color:#800080; '>}</span><span style='color:#808030; '>></span>Submit<span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>Submit<span style='color:#808030; '>></span>
 <span style='color:#808030; '>&lt;</span><span style='color:#808030; '>/</span>form<span style='color:#808030; '>></span>
</pre>` };
  }

}

render(<View />, document.querySelector('#mount'));
