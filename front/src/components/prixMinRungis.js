import React, { Component } from 'react';
import axios from 'axios';
import DataRungis from './data-table-rungis';
import { BackTop } from 'antd'

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { RungisCollection: [] };
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/rungis`)
            .then(res => {
                this.setState({ RungisCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.RungisCollection.map((data, i) => {
            return <DataRungis obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users" style={{ marginRight: "0px", paddingRight: "1px" }}>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Date_lib</td>
                                <td>Code_libelle</td>
                                <td>Libelle</td>
                                <td>Prix_mini</td>
                                <td>Prix_maxi</td>
                                <td>Prix_moyen</td>
                                <td>Unité_prix</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                            <BackTop />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


