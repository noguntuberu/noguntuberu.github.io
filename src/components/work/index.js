//
const React = require('react');
import './index.css';
import TechStackComponent from '../tech-stack';
import $ from '../../assets/js/jquery-3';

//
class WorkItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.uri = this.props.uri;
        this.state = {
            infoIsVisible: false,
            toWidth: "100%",
            toOpacity: 1
        }
    }
    componentDidMount() {
        /*  Declare selectors */
        let itemId = '#'+this.name;
        let veilSelector = itemId + ' .work-item-veil';
        let infoSelector = itemId + ' .work-item-info';

        $(itemId).mouseover(() => this.handleMouseOver(itemId));

        $(itemId).click(() => {
            //
            this.toggleWorkItemVeil(veilSelector)
                .then(this.toggleWorkItemInfo(infoSelector))
                .then(this.toggleAnimationState());
        })
    }

    handleMouseOver(selector) {
        $(selector).animate({
            marginTop: '-5px',
            marginBottom: '5px'
        }).animate({
            marginTop: '0px'
        });
    }

    async toggleWorkItemVeil(selector) {
        $(selector).animate({
            width: this.state.toWidth
        });
    }
    async toggleWorkItemInfo(selector) {
        $(selector).animate({
            opacity: this.state.toOpacity
        })
    }

    toggleAnimationState() {
        if (!this.state.infoIsVisible) {
            this.setState({
                infoIsVisible: true, 
                toWidth: "0%",
                toOpacity: 0
            });
        } else {
            this.setState({
                infoIsVisible: false, 
                toWidth: "100%",
                toOpacity: 1
            });
        }
    }

    render() {
        return(
            <div className="work-item shadow" id={this.name}>
                <div className="work-item-veil">
                    <div className="work-item-info">
                        <h3>{this.name}</h3>
                        <a href={this.uri} target="_blank">Open</a>
                    </div>
                </div>
            </div>
        );
    }
}

class WorkComponent extends React.Component {
    render() {
        return(
            <div>
                <section className="work-section">
                    <div className="row">
                        <WorkItemComponent name="Anonymas" uri=""/>
                        <WorkItemComponent name="GladePay"/>
                    </div>
                    <div className="row">
                        <WorkItemComponent name="Holiday" uri=""/>
                        <WorkItemComponent name="GOT-Verse"/>
                    </div>
                </section>
                <TechStackComponent />
            </div>
        );
    }
}

export default WorkComponent