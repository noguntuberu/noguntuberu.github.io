/**
 * @author Oguntuberu Nathan O.
 */

const React = require('react');
import './index.css';

class TechStackItem extends React.Component {
    render() {
        let image = require('../../assets/images/' + this.props.name);
        return(
            <div className="tech-stack-item">
                <img src={image}/>
            </div>
        );
    }
}

class TechStackComponent extends React.Component {
    render() {
        return(
            <section className="tech-stack">

            </section>
        );
    }
}

export default TechStackComponent;