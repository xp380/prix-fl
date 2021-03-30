import React, { Component } from 'react'

class DataTableRungis extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.date_lib}
                </td>
                <td>
                    {this.props.obj.code_libelle}
                </td>
                <td>
                    {this.props.obj.libelle}
                </td>
                <td>
                    {this.props.obj.prix_mini}
                </td>
                <td>
                    {this.props.obj.prix_maxi}
                </td>
                <td>
                    {this.props.obj.prix_moyen}
                </td>
                <td>
                    {this.props.obj.unite_prix}
                </td>

            </tr>
        )
    }
}

export default DataTableRungis