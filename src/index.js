import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component {
  state = {
    lat: null,
    errorMessage: '',
  };
  componentDidMount() {
    console.log('comp mount');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log('comp upate');
  }
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    return <Spinner message='Please accept Location Request' />;
  }
  render() {
    return <div>{this.renderContent()}</div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
