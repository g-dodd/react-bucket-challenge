import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bucketNumber: '',
            clicked: false,
            passcodeValue: '',
            isCorrect: false,
            message: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkPasscode = this.checkPasscode.bind(this);
    }

    handleChange(event) {
        this.setState({ passcodeValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var checkPasscodeResponse = this.checkPasscode(this.state.passcodeValue);
        if(checkPasscodeResponse) {
            switch(this.state.passcodeValue) {
                case '1694':
                    this.setState({ bucketNumber: '1' }, this.updateMessage(this.state.bucketNumber));
                    break;
                case '7896':
                    this.setState({ bucketNumber: '2' }, this.updateMessage(this.state.bucketNumber));
                    break;
                case '7117':
                    this.setState({ bucketNumber: '3'}, this.updateMessage(this.state.bucketNumber));
                    break;
            }
        } else {
            this.setState({ bucketNumber: ''}, this.updateMessage(this.state.bucketNumber));
        }
    }

    updateMessage(bucketNumber) {
        if(bucketNumber !== '') {
            this.setState({ message: `Congratulations! Your bucket number is ${bucketNumber}` });
        } else {
            this.setState({ message: `Unfortunately, you are WRONG! Please try again...` });
        }
    }

    checkPasscode(passcode) {
        console.log('Passcode Value', passcode);
        if (passcode === '1234' || passcode === '2345' || passcode === '3456') {
            this.setState({ isCorrect: true });
            return true;
        }
        this.setState({ isCorrect: false });
        return false;
    }


    render() {
        var className = this.state.message !== '' ? '' : 'hide';
        return (
            <div className="App">
                <p>Current Passcode: {this.state.passcodeValue}</p>
                <form onSubmit={this.handleSubmit}>
                    <input id="passcode" type="text" name="passcode" placeholder="Enter Passcode" onChange={this.handleChange} />
                    <button type="submit">Check Your Passcode</button>
                </form>
                <p className="{className}">{this.state.message}</p>
            </div>
        );
    }
}

export default App;