//
const React = require('react');
import './index.css';
import '../../assets/css/bootstrap.css';
import $ from '../../assets/js/jquery-3';


//

class FloatingMenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.image;
    }

    componentDidMount() {
        this.image = require('../../assets/icons/' + this.props.name + '.png');
        $('#' + this.props.name).click(() => {
            window.open(this.props.uri, 'tab');
        });
    }

    render() {
        return(
            <div className="menu-item">
                <img src={this.image} alt="social network id"  id={this.props.name}/>
            </div>
        );
    }
}


class FloatingMenu extends React.Component {
    constructor(props) {
        super(props);
        this.baseTrayWidth;
        this.maxTrayWidth;
        this.menuItemIndex = 0;
        this.state = {
            trayIsOpen: false,
            toWidth: "80%"
        }
    }

    async componentDidMount() {
        // get all menu items
        this.menuItems = $('.menu-item');

        // set base tray width
        await this.setBaseState();

        // set event handlers
        $('#menu-icon').click( async () => {
            await this.displayMenuItems();
            await this.toggleMenuItemsDisplayState();
        });
    }

    componentDidUpdate() {
        this.setBaseState();
    }

    setBaseState() {
        let width = $('#menu-icon').width();
        let baseTrayWidth = width + 20 + 'px';
        let maxTrayWidth = (5 * width) + 60 + 'px';
        
        if (baseTrayWidth != this.baseTrayWidth) {
            this.baseTrayWidth = baseTrayWidth;
            this.maxTrayWidth = maxTrayWidth;
            this.setState({toWidth: this.maxTrayWidth});
        }
    }

    async displayMenuItems() {
        // get the menu tray element
        let traySelector = '.menu-tray';

        //
        if(!this.state.trayIsOpen) {
            //
            /** If the menu Items are not displayed */
            await this.toggleTrayDisplay(traySelector);

            this.animationID = setInterval((x = this.animationID) => {
                this.menuItems[this.menuItemIndex].style.display = 'block';
                this.menuItemIndex++;

                if(this.menuItemIndex >= this.menuItems.length) {
                    clearInterval(x);
                    this.toggleTrayState();
                } 
            }, 250);
        } else {
            //
            this.animationID = setInterval((x = this.animationID) => {
                this.menuItemIndex--;
                this.menuItems[this.menuItemIndex].style.display = 'none';

                if(this.menuItemIndex < 1 ) {
                    clearInterval(x);
                    this.toggleTrayDisplay(traySelector);
                    this.toggleTrayState();
                } 
            }, 250);
        }
    }

    async toggleTrayDisplay(selector) {
        await $(selector).animate({
            width: this.state.toWidth
        })
    }

    async toggleTrayState() {
        if(!this.state.trayIsOpen) {
            await this.setState({
                trayIsOpen: true,
                toWidth: this.baseTrayWidth
            })
        } else {
            await this.setState({
                trayIsOpen: false,
                toWidth: this.maxTrayWidth
            })
        }
    }

    async toggleMenuItemsDisplayState() {
        await this.setState({menuItemsAreDisplayed: !this.state.menuItemsAreDisplayed});
    }

    render() {
        return (
            <div className="menu-tray shadow">
                <div id="menu-icon" className="shadow"></div>
                <div id="menu-items">
                    <FloatingMenuItem name="linkd" uri="https://www.linkedin.com/in/nathan-oguntuberu-00775073/" />
                    <FloatingMenuItem name="git" uri="https://www.github.com/noguntuberu" />
                    <FloatingMenuItem name="twt" uri="https://www.twitter.com/noguntuberu" />
                    <FloatingMenuItem name="ig" uri="https://www.instagram.com/noguntuberu" />
                </div>
            </div>
        );
    }
}

export default FloatingMenu;