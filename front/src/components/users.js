import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import { BackTop } from 'antd'
// import _, { sortBy } from 'lodash'

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }
    // {_.sortBy(people, 'name').map( (person) => {
    //     return (
    //         <li>
    //             <span>{person.name}</span>
    //             <span>{person.id}</span>
    //         </li>
    //     )
    // })}
    // dataTable() {
    //     {
    //         _.sortBy(this.state.usersCollection, 'adresse').map((data, i) => {
    //             return (
    //                 <li>
    //                     <span>{data.adresse}</span>
    //                 </li>
    //                 // <DataTable obj={data} key={i} />
    //             )
    //         })
    //     }
    // }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container" >
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID </td>
                                <td>Promo</td>
                                <td>Prix</td>
                                <td>Origine</td>
                                <td>CAT</td>
                                <td>CAL</td>
                                <td>COND</td>
                                <td>DATE</td>
                                <td>CODEMag</td>
                                <td>CODEPluPlus</td>
                                <td>CODEPlu</td>
                                <td>ENTITE</td>
                                <td>ADRESSE</td>
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

