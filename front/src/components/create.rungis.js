import React, { Component } from 'react';
import axios from 'axios';
import { DatePicker } from "antd";
import moment from 'moment';

import { NotificationManager } from 'react-notifications';

export default class CreateRungis extends Component {
    constructor(props) {
        super(props)
        this.onChangeRungisDateLibelle = this.onChangeRungisDateLibelle.bind(this);
        this.onChangeRungisCodeLibelle = this.onChangeRungisCodeLibelle.bind(this);
        this.onChangeRungisLibelle = this.onChangeRungisLibelle.bind(this);
        this.onChangeRungisPrixMin = this.onChangeRungisPrixMin.bind(this);
        this.onChangeRungisPrixMax = this.onChangeRungisPrixMax.bind(this);
        this.onChangeRungisPrixMoyen = this.onChangeRungisPrixMoyen.bind(this);
        this.onChangeRungisUnitePrix = this.onChangeRungisUnitePrix.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            date_lib: new Date().toLocaleDateString(),
            code_libelle: '',
            libelle: '',
            prix_mini: '',
            prix_maxi: '',
            prix_moyen: '',
            unite_prix: '',
            notification: '',
        }
    }



    onChangeRungisDateLibelle(date) {
        this.setState({ date_lib: date })
    }

    onChangeRungisCodeLibelle(e) {
        this.setState({ code_libelle: e.target.value })
    }

    onChangeRungisLibelle(e) {
        this.setState({ libelle: e.target.value })
    }

    onChangeRungisPrixMin(e) {
        this.setState({ prix_mini: e.target.value })
    }

    onChangeRungisPrixMax(e) {
        this.setState({ prix_maxi: e.target.value })
    }

    onChangeRungisPrixMoyen(e) {
        this.setState({ prix_moyen: e.target.value })
    }

    onChangeRungisUnitePrix(e) {
        this.setState({ unite_prix: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const userObject = {

            notification: this.state.notification,
            date_lib: this.state.date_lib,
            code_libelle: this.state.code_libelle,
            libelle: this.state.libelle,
            prix_mini: this.state.prix_mini,
            prix_maxi: this.state.prix_maxi,
            prix_moyen: this.state.prix_moyen,
            unite_prix: this.state.unite_prix
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/rungis/create`, userObject)
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
                        <DatePicker
                            defaultValue={moment}
                            selected={this.state.date_lib}
                            onChange={this.onChangeRungisDateLibelle}
                            format="YYYY-MM-DD"
                            placeholder="Date"
                            style={{ width: 130 }}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.code_libelle} onChange={this.onChangeRungisCodeLibelle} placeholder={'CodeLibelle'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.libelle} onChange={this.onChangeRungisLibelle} placeholder={'Libelle'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="test" style={{ float: 'left', paddingTop: "10px" }}></label>
                        <span style={{ display: 'block', overflow: 'hidden', padding: '5px 4px 3px 6px' }}>
                            <input type="number" step={0.01} value={this.prix_mini} onChange={this.onChangeRungisPrixMin} placeholder={"min"} className="form-control" style={{ width: '90px' }} />
                        </span>
                        <span style={{ display: 'block', overflow: 'hidden', padding: '5px 4px 3px 6px' }}>
                            <input type="number" step={0.01} value={this.prix_maxi} onChange={this.onChangeRungisPrixMax} placeholder={"max"} className="form-control" style={{ width: '90px' }} />
                        </span>
                        <span style={{ display: 'block', overflow: 'hidden', padding: '5px 4px 3px 6px' }}>
                            <input type="number" step={0.01} value={this.prix_moyen} onChange={this.onChangeRungisPrixMoyen} placeholder={"moyen"} className="form-control" style={{ width: '90px' }} />
                        </span>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.unite_prix} onChange={this.onChangeRungisUnitePrix} placeholder={'Unité Prix'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div>
                        <input type="submit" value="Send" className="btn btn-success btn-block" style={{ width: '100px' }} />
                    </div>
                </form>
            </div>
        )
    }
}


