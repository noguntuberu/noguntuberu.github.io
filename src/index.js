import '@babel/polyfill';
import Header from './components/header/index';
import Landing from './components/landing/index';
import Work from './components/work/index';
import Contact from './components/contact/index.js';
import Footer from './components/footer/index.js';
import FloatingMenu from './components/floating-btn/index';

//
const React = require('react'),
      ReactDOM = require('react-dom');

//
class AppComponent extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Landing />
                <div>
                    <Work />
                    <Contact />
                </div>
                <FloatingMenu />
                <Footer />
            </div>
        );
    }
}

//
window.addEventListener('load', () => {
    const wrapper = document.getElementById('app-wrapper');
    ReactDOM.render(<AppComponent />, wrapper);
});