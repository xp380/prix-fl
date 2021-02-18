import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.promo}
                </td>
                <td>
                    {this.props.obj.prix}
                </td>
                <td>
                    {this.props.obj.origine}
                </td>
                <td>
                    {this.props.obj.cat}
                </td>
                <td>
                    {this.props.obj.cal}
                </td>
                <td>
                    {this.props.obj.cond}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
                <td>
                    {this.props.obj.codeMag}
                </td>
                <td>
                    {this.props.obj.codePluPlus}
                </td>
                <td>
                    {this.props.obj.codePlu}
                </td>
                <td>
                    {this.props.obj.entite}
                </td>
                <td>
                    {this.props.obj.adresse}
                </td>
            </tr>
        );
    }
}

export default DataTable;