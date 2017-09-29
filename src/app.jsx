import React, { Component } from 'react';

function SuccessAlert() {
  return (
    <div className="alert alert-success">
      <strong>Success:</strong> Total change amountDue.
    </div>
  );
}

function WarningAlert() {
  return (
    <div className="alert alert-danger">
      <strong>Danger:</strong> Additional money owed.
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: '',
      amountReceived: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
      success: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const amountReceived = this.state.amountReceived * 100;
    const amountDue = this.state.amountDue * 100;
    let changeDue;

    if (amountDue > amountReceived) {
      changeDue = amountDue - amountReceived;
      this.setState({ success: false });
    } else {
      changeDue = amountReceived - amountDue;
      this.setState({ success: true });
    }

    if (changeDue / 2000 > 1.5) {
      // this.state.twenties = Math.floor(changeDue / 2000);
      this.setState({ twenties: Math.floor(changeDue / 2000) });
      changeDue %= 2000;
    }
    if (changeDue / 1000 > 1.25) {
      // this.state.tens = Math.floor(changeDue / 1000);
      this.setState({ tens: Math.floor(changeDue / 1000) });
      changeDue %= 1000;
    }
    if (changeDue / 500 > 1.1) {
      // this.state.fives = Math.floor(changeDue / 500);
      this.setState({ fives: Math.floor(changeDue / 500) });
      changeDue %= 500;
    }
    if (changeDue / 100 > 1) {
      // this.state.ones = Math.floor(changeDue / 100);
      this.setState({ ones: Math.floor(changeDue / 100) });
      changeDue %= 100;
    }
    if (changeDue / 25 > 0.25) {
      // this.state.quarters = Math.floor(changeDue / 25);
      this.setState({ quarters: Math.floor(changeDue / 25) });
      changeDue %= 25;
    }
    if (changeDue / 10 > 0.1) {
      // this.state.dimes = Math.floor(changeDue / 10);
      this.setState({ nickels: Math.floor(changeDue / 10) });
      changeDue %= 10;
    }
    if (changeDue / 5 > 0.05) {
      // this.state.nickels = Math.floor(changeDue / 5);
      this.setState({ dimes: Math.floor(changeDue / 5) });
      changeDue %= 5;
    }
    if (changeDue / 0.01 > 0.01) {
      // this.state.pennies = Math.ceil(changeDue);
      this.setState({ pennies: Math.ceil(changeDue) });
    }
  }

  handleChange(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Change Calculator</h1>

        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Enter Information</div>

              <div className="panel-body">
                <label htmlFor="amountDue" />How much is amountDue?
                <input
                  type="text"
                  id="amountDue"
                  name="amountDue"
                  value={this.state.amountDue}
                  onChange={this.handleChange('amountDue')}
                />
                <label htmlFor="amountReceived" />How much was amountReceived?
                <input
                  type="text"
                  id="amountReceived"
                  name="amountReceived"
                  value={this.state.amountReceived}
                  onChange={this.handleChange('amountReceived')}
                />
              </div>

              <div className="panel-footer">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleClick}
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-8 results-wrapper">
            {this.state.success && <SuccessAlert />}
            {!this.state.success && <WarningAlert />}

            <div className="flex-row">
              <div className="flex-item">
                <label htmlFor="twenties" />Twenties
                <p>{this.state.twenties}</p>
              </div>
              <div className="flex-item">
                <label htmlFor="tens" />Tens
                <p> {this.state.tens}</p>
              </div>
              <div className="flex-item">
                <label htmlFor="fives" />Fives
                <p>{this.state.fives}</p>
              </div>
              <div className="flex-item">
                <label htmlFor="ones" />Ones
                <p>{this.state.ones}</p>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-item">
                <label htmlFor="quarters" />Quarters
                <p>{this.state.quarters}</p>
              </div>
              <div className="flex-item">
                <label htmlFor="dimes" />Dimes
                <p>{this.state.dimes}</p>
              </div>
              <div className="flex-item">
                <label htmlFor="nickels" />Nickels
                <p>{this.state.nickels}</p>
              </div>
              <div className="flex-item">
                <label htmlFor="pennies" />Pennies
                <p>{this.state.pennies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
