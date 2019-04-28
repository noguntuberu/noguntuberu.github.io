//
const React = require('react');
import './index.css';
import InputValidator from '../../assets/js/validator';
import MyEmail from '../../assets/js/email';
import $ from '../../assets/js/jquery-3';

//

class ContactFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.inputValidator = new InputValidator();
        this.myEmail = new MyEmail();
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

        // Handle Submit Button
        this.submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.myEmail.prepare(this.fullname.value, this.email.value, this.message.value);
            Email.send(this.myEmail.getDetails()).then(response => {
                if(response == "OK") {
                    this.displayFromMessage("Your message has been sent");
                } else {
                    this.displayFromMessage("Unable to send message. Please, try again");
                }
            })
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
    
    displayFromMessage(message) {
        $('#form-message').html(message)
                          .slideDown()
                          .delay(2000)
                          .slideUp(500, () => $('#form-message').html(''));
    }

    render() {
        return(
            <div className="contact-form-wrapper">
                <form name="contact" method="post">
                    <div id="form-message"></div>
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