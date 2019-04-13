//
const React = require('react');
import './index.css';

//

class ContactFormComponent extends React.Component {
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
                        <input type="submit" name="submmit" value="SEND MESSAGE"/>
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
                    <p>Kindly leave a message. I'd really love to hear from you.</p>
                </div>
                <ContactFormComponent />
            </section>
        );
    }
}

export default ContactComponent;