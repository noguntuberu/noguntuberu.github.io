/**
 * @author Oguntuberu Nathan O.
 */

const React = require('react');
import './index.css';

class TechStackItem extends React.Component {
    render() {
        let image = require('../../assets/icons/' + this.props.name);
        return(
            <div className="tech-stack-item">
                <img src={image}/>
            </div>
        );
    }
}

class TechStackComponent extends React.Component {
    constructor(props) {
        super(props);
        this.stackItems = [
            "angular.png",
            "css.png",
            "git.png",
            "google.png",
            "jquery.png",
            "mongo.png",
            "mysql.png",
            "node.png",
            "php.png",
            "react.png"
        ]
    }
    render() {
        return(
            <section className="tech-stack">
            {
                this.stackItems.map((name, key) => {
                    return (<TechStackItem name={name} key={key}/>);
                })
            }
            </section>
        );
    }
}

export default TechStackComponent;