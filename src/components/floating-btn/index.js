//
const React = require('react');
import './index.css';
import '../../assets/css/bootstrap.css';
import $ from '../../assets/js/jquery-3';


//

class FloatingMenuItem extends React.Component {
    render() {
        return(
            <div className="menu-item" id={this.props.id}></div>
        );
    }
}


class FloatingMenu extends React.Component {
    constructor(props) {
        super(props);
        this.baseTrayWidth;
        this.maxTrayWidth;
        this.state = {
            trayIsOpen: false,
            toWidth: "80%"
        }
    }

    componentDidMount() {
        // set base tray width
        this.setBaseState();

        // set event handlers
        let traySelector = '.menu-tray';
        $('#menu-icon').click(() => {
            this.toggleTrayDisplay(traySelector)
                .then(this.toggleTrayState());
        });
    }
    setBaseState() {
        let width = $('#menu-icon').width();
        this.baseTrayWidth = width + 20 + 'px';
        this.maxTrayWidth = (5 * width) + 40 + 'px';
        this.setState({toWidth: this.maxTrayWidth});
    }
    async toggleTrayDisplay(selector) {
        $(selector).animate({
            width: this.state.toWidth
        })
    }

    async toggleTrayState() {
        if(!this.state.trayIsOpen) {
            this.setState({
                trayIsOpen: true,
                toWidth: this.baseTrayWidth
            })
        } else {
            this.setState({
                trayIsOpen: false,
                toWidth: this.maxTrayWidth
            })
        }
    }

    render() {
        return (
            <div className="menu-tray shadow">
                <div id="menu-icon" className="shadow"></div>
                <FloatingMenuItem />
            </div>
        );
    }
}

export default FloatingMenu;