//
const React = require('react');
import './index.css';
import TechStackComponent from '../tech-stack';
import $ from '../../assets/js/jquery-3';

//
class WorkItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.image = "../../assets/images/work/" + this.props.detail.image;
        this.name = this.props.detail.name;
        this.repo = this.props.detail.repo;
        this.uri = this.props.detail.uri;
        this.state = {
            infoIsVisible: false,
            toWidth: "100%",
            toOpacity: 1
        }
    }

    componentDidMount() {
        /*  Declare selectors */
        let itemId = '#' + this.name;
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
        const backStyle = {
            backgroundImage : "url(" + this.image + ")",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }

        return(
            <div className="work-item shadow" id={this.name} style={backStyle}>
                <div className="work-item-veil">
                    <div className="work-item-info">
                        <h3>{this.name}</h3>
                        <div className="d-flex flex-row justify-content-center">
                            <a href={this.repo} target="_blank">Code</a>
                            <a href={this.uri} target="_blank">Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class WorkItemGroup extends React.Component {
    constructor(props) {
        super(props);
        this.firstWorkItem = this.props.workItems[0];
        this.secondWorkItem = this.props.workItems[1];
    }

    render() {
        if (this.firstWorkItem && this.secondWorkItem) {
            return (
                <div className="row">
                    <WorkItemComponent detail={this.firstWorkItem}/>
                    <WorkItemComponent detail={this.secondWorkItem}/>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <WorkItemComponent detail={this.firstWorkItem}/>
                </div>
            )
        }
    }
}

class WorkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.repoBase = "https://github.com/noguntuberu/";
        this.workItems = [
            {
                name: "Anonymas", 
                repo: this.repoBase + "anonymas.git", 
                uri: "https://anonymas.herokuapp.com", 
                image: "anonymas.png"
            },
            {
                name: "Gladepay", 
                repo: "https://gitlab.com/gladepay-apis/gladepay-pretashop", 
                uri: "https://gitlab.com/gladepay-apis/gladepay-pretashop/blob/master/gladepay.zip", 
                image: "gladepay.jpeg"
            }
        ];
        this.workItemGroup = [];
    }

    populateWorkGroups() {
        let index = 0;
        for (index; index < this.workItems.length; ){
            let item1 = this.workItems[index] != undefined ? this.workItems[index] : null;
            let item2 = this.workItems[index + 1] != undefined ? this.workItems[index + 1] : null;
            this.workItemGroup.push([
                item1,
                item2
            ])
            index += 2;
        }
    }

    componentWillMount() {
        this.populateWorkGroups();
    }

    render() {
        return(
            <div>
                <section className="work-section">
                    {
                        this.workItemGroup.map((item, id) => {
                            return (
                                <WorkItemGroup workItems={item} key={id}/>
                            )
                        })
                    }
                </section>
                <TechStackComponent />
            </div>
        );
    }
}

export default WorkComponent