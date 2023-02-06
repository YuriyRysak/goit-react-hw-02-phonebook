import React, {Component} from "react";
import PropTypes from 'prop-types';
import './ContactsItems.css';


export class ContactsItems extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        // this.setState({[e.currentTarget.name]: e.currentTarget.value,
        // });
        this.setState({[name]: value,})
    };
   


    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
       
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form className='NameEditor' onSubmit={this.handleSubmit}>
                <input
                    className='NameEditor__textarea'
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"                 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                 />
                 <input
                    className='NameEditor__textarea'
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    placeholder="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button type="submit" className='NameEditor__button'>
                    add contact
                </button>
            </form>
        );
    }
}

ContactsItems.prototypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
