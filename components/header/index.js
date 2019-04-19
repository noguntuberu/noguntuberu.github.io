/**
 * @author Oguntuberu Nathan O.
 */

const React = require('react');
import './index.css';
import '../../assets/css/bootstrap.css';

//
class HeaderComponent extends React.Component {
    render() {
        return(
            <header>
                <div>
                    <div className="site-icon"><img src=""/></div>
                    {/* <nav>
                        <ul>
                            <li><a href="#home-sec">Home</a></li>
                            <li><a href="#home-sec">Home</a></li>
                            <li><a href="#home-sec">Home</a></li>
                            <li><a href="#home-sec">Home</a></li>
                        </ul>
                    </nav> */}
                </div>
            </header>
        );
    }
}

export default HeaderComponent;