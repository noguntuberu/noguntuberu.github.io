//
const React = require('react');
import './index.css';
import InputValidator from '../../validator';

//

class ContactFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.inputValidator = new InputValidator();
        this.state = {
            nameIsValid : false,
            emailIsValid : false,
            messageIsValid : false
        }
    }

    componentDidMount() {
        /**
         * Get form elements
         */
        this.fullname = document.forms.contact.fullname,
        this.email = document.forms.contact.email,
        this.message = document.forms.contact.message,
        this.submitBtn = document.forms.contact.submit;

        /**
         * Set form elements listeners and handlers
         */
        this.fullname.addEventListener('input', () => {
            if(!this.inputValidator.validateNameInput(this.fullname.value.trim())) {
                this.fullname.style.borderLeft = '6px solid rgb(243, 98, 98)';
                this.setState({nameIsValid : false});
            }else {
                this.fullname.style.borderLeft = '6px solid rgb(40, 211, 77)';
                this.setState({nameIsValid : true});
            }
        });

        this.email.addEventListener('input', () => {
            if (!this.inputValidator.validateEmailInput(this.email.value.trim())) {
                this.email.style.borderLeft = '6px solid rgb(243, 98, 98)';
                this.setState({emailIsValid: false});
            }else {
                this.email.style.borderLeft = '6px solid rgb(40, 211, 77)';
                this.setState({emailIsValid: true});
            }
        });

        this.message.addEventListener('input', () => {
            if (this.message.value.trim().length < 1) {
                this.message.style.borderLeft = '6px solid rgb(243, 98, 98)';
                this.setState({messageIsValid: false});
            }else {
                this.message.style.borderLeft = '6px solid rgb(40, 211, 77)';
                this.setState({messageIsValid: true});
            }
        });

        //
        this.submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('clicked');
        });
    }

    componentDidUpdate() {
        // Check if all fields are valid
        if(this.state.nameIsValid && this.state.emailIsValid && this.state.messageIsValid) {
            this.submitBtn.removeAttribute('disabled');
        } else {
            this.submitBtn.setAttribute('disabled', 'disabled');
        }
    }
    

    render() {
        return(
            <div className="contact-form-wrapper">
                <form name="contact">
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input type="text" name="fullname"/>
                    </div>
                    <div className="form-group">
                        <label>Email Address:</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea name="message"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" name="submit" value="SEND MESSAGE" disabled/>
                    </div>
                </form>
            </div>
        );
    }
}

class ContactComponent extends React.Component {
    render() {
        return(
            <section className="contact-section">
                <div className="contact-message">
                    <h2>Want to Build Something Great?</h2>
                    <p>Kindly leave a message. I'd love to hear from you.</p>
                </div>
                <ContactFormComponent />
            </section>
        );
    }
}

export default ContactComponent;