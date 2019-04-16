//
const React = require('react');
import './index.css';
import '../../assets/css/bootstrap.css';
import $ from '../../assets/js/jquery-3'

class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.firstname = "";
        this.lastname = "";
    }

    componentDidMount() {
        this.blink();
    }

    blink() {
        let isShown = true;
        setInterval(() => {
            if(isShown) {
                $('#blinker').text("");
            } else {
                $('#blinker').text("|");
            }
            isShown = !isShown;
        }, 250);
    }

    render() {
        return (
            <div className="landing-hello">
                <span>{this.props.text}</span>
                <span id="blinker">|</span>
            </div>
        );
    }
}
class NameComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        if(this.props.name.show) {
            setTimeout(() => {
                $('#firstname').animate({
                    opacity : 1.0
                },1000, 'linear', () => {
                    $('#surname').animate({
                        opacity : 1.0
                    },1000, 'linear', () => {
                        $('.landing-bio').slideDown('700')
                    });
                });
            }, 700);
        }
    }
    render() {
        let {firstname, lastname} = this.props.name;
        return (
            <div className="landing-name">
                <span id="firstname">{firstname}</span>
                <span id="surname">{lastname}</span>
            </div>
        );
    }
}

class BioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.bio = props.bio;
    }
    render() {
        return (
            <p className="landing-bio">
                {this.bio}
            </p>
        );
    }
}

class LandingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.helloText = "Hello, I am";
        this.firstname = "NATHAN";
        this.lastname = "OGUNTUBERU";
        this.bio = "Full Stack Web Developer. Creative Writer. Javascript Junkie";
        this.state = {
            isInView : false,
            textToDisplay: "",
            typeWriterIsDone: 0
        }
    }

    componentDidMount() {
        // this is automatic for ider screens
        let position = $('.landing-section').position();
        if( position.top <= 0) {
            this.typeWriter(this.helloText);
        } else {
            $(document).on('scroll', (e) => {
                let docTop = $(document).scrollTop();
                let landingSectionTop = $('.landing-section').position().top;
                if (docTop >= landingSectionTop) {
                    if(!this.state.isInView) {
                        this.setState({
                            isInView: true
                        });
                    }
                }
            });
        }
    }

    componentDidUpdate() {
        if (this.state.isInView && this.state.textToDisplay.length == 0) {
            this.typeWriter(this.helloText);
        }
    }

    typeWriter(text) {
        let textDisplayed = "";
        let chIndex = 0;
        this.typewriterID = setInterval(() => {
            textDisplayed += text[chIndex];
            chIndex++;

            this.setState({
                textToDisplay: textDisplayed
            });

            if (text == textDisplayed) {
                clearInterval(this.typewriterID);
                this.setState({
                    typeWriterIsDone: true
                })
            }
        }, 200);
    }

    render() {
        return (
            <section className="landing-section">
                <div className="landing-image-wrapper">
                    
                </div>
                <div className="transluscent-pane"></div>
                <div className=" landing-info-wrapper bg-white d-flex flex-column justify-content-center align-content-center">
                    <HelloComponent text={this.state.textToDisplay}/>
                    <NameComponent name={{show: this.state.typeWriterIsDone, firstname: this.firstname, lastname: this.lastname}} />
                    <hr/>
                    <BioComponent bio={this.bio} />
                </div>
            </section>
        );
    }
}

export default LandingComponent;