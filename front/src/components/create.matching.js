import React, { Component } from 'react';
import axios from 'axios';
import { DatePicker } from "antd";
import moment from 'moment';

import { NotificationManager } from 'react-notifications';

export default class CreateRungis extends Component {
    constructor(props) {
        super(props)
        this.onChangeMatchingCodePlu = this.onChangeMatchingCodePlu.bind(this);
        this.onChangeMatchingCodeMin = this.onChangeMatchingCodeMin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            codePlu: '',
            codeMin: '',
            notification: '',
        }
    }

    onChangeMatchingCodePlu(e) {
        this.setState({ codePlu: e.target.value })
    }

    onChangeMatchingCodeMin(e) {
        this.setState({ codeMin: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const userObject = {

            notification: this.state.notification,
            codePlu: this.state.codePlu,
            codeMin: this.state.codeMin
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/matching/create`, userObject)
            .then((res) => {
                NotificationManager.success('You have added a new product!', 'Successful!', 3000);
            })
            .catch((err) => {
                NotificationManager.error('Error while Creating new product!', 'Error!', 3000);
            });
    }
    render() {
        return (
            <div >
                <form onSubmit={this.onSubmit} style={{ padding: '1em', border: '2px solid #c1c1c1', marginTop: '2rem', width: '150px', height: 'auto' }}>
                    <div className="form-group">
                        <input type="text" value={this.codePlu} onChange={this.onChangeMatchingCodePlu} placeholder={'CodePlu'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.codeMin} onChange={this.onChangeMatchingCodeMin} placeholder={'CodeMin'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div>
                        <input type="submit" value="Send" className="btn btn-success btn-block" style={{ width: '100px' }} />
                    </div>
                </form>
            </div>
        )
    }
}


