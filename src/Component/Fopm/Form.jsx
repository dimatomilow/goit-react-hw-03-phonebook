import React, { Component } from 'react'
import shortid from 'shortid';


class Form extends Component {
   state = {
       name: '',
       number: ''
  }
  handleChange = e => {
      this.setState({
          name: e.target.value

      })
    }
    numberChange = e => {
         this.setState({
          number: e.target.value

         })

    }
  handleSubmit = e => {
      e.preventDefault();
       this.props.onSubmit(this.state.name,
       this.state.number)
      this.setState({ name: '', number: '' })

      };





    render() {

        return (
<form onSubmit={this.handleSubmit}>
           <label htmlFor={shortid.generate()}>Name
               <input
              type="text"
              value={this.state.name}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
/>
                </label>
                <label htmlFor={shortid.generate()}>Number
                    <input
  type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.numberChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
                </label>
           <button type='submit'>Add contact</button>
       </form>
        );
    }
}

export default Form;