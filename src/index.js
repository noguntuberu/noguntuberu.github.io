import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Landing from './components/landing/index';
import Work from './components/work/index';
import Contact from './components/contact/index.js';
import Footer from './components/footer/index.js';
import FloatingMenu from './components/floating-btn/index';

//
const React = require('react');
const ReactDOM = require('react-dom');

//
class AppComponent extends React.Component {
    render() {
        return(
            <div>
                <div className="m-fixed">
                    
                </div>
                <div className="m-scrollable">
                    <Landing />
                    <div>
                        <Work />
                        <Contact />
                    </div>
                    <FloatingMenu />
                    <Footer />
                </div>
            </div>
        );
    }
}

//
window.addEventListener('load', () => {
    const wrapper = document.getElementById('app-wrapper');
    ReactDOM.render(<AppComponent />, wrapper);
});