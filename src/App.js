import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './regular/css/normalize.css';
import './regular/css/animate.css';
import './regular/css/style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div >
    );
  };
};



export default App;