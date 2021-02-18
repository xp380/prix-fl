// ** create-user.component.js ** //
import React, { Component } from 'react';
import axios from 'axios';
import { DatePicker, Popover, notification } from "antd";
import moment from 'moment';


export default class CreateBusiness extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserPromo = this.onChangeUserPromo.bind(this);
        this.onChangeUserPrix = this.onChangeUserPrix.bind(this);
        this.onChangeUserOrigine = this.onChangeUserOrigine.bind(this);
        this.onChangeUserCAT = this.onChangeUserCAT.bind(this);
        this.onChangeUserCAL = this.onChangeUserCAL.bind(this);
        this.onChangeUserCOND = this.onChangeUserCOND.bind(this);
        this.onChangeUserDate = this.onChangeUserDate.bind(this);
        this.onChangeUserCodePLUPLUS = this.onChangeUserCodePLUPLUS.bind(this);
        this.onChangeUserCodePLU = this.onChangeUserCodePLU.bind(this);
        this.onChangeUserCodeMagasin = this.onChangeUserCodeMagasin.bind(this);
        this.onChangeUserEntite = this.onChangeUserEntite.bind(this);
        this.onChangeUserAdresse = this.onChangeUserAdresse.bind(this);
        this.openNotification = this.openNotification.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            promo: true,
            prix: "",
            origine: '',
            cat: '',
            cal: '',
            cond: '',
            date: new Date().toLocaleDateString(),
            codePluPlus: '',
            codePlu: "",
            codeMag: '',
            entite: "",
            adresse: "",
            logo: "",
            notification: ""
        }
    }

    onChangeUserPromo(e) {
        this.setState({ promo: e.target.checked })
    }
    onChangeUserPrix(e) {
        this.setState({ prix: e.target.value })
    }
    onChangeUserOrigine(e) {
        this.setState({ origine: e.target.value })
    }
    onChangeUserCAT(e) {
        this.setState({ cat: e.target.value })
    }
    onChangeUserCAL(e) {
        this.setState({ cal: e.target.value })
    }
    onChangeUserCOND(e) {
        this.setState({ cond: e.target.value })
    }
    onChangeUserDate(date) {
        this.setState({ date: date })
    }
    onChangeUserCodePLUPLUS(e) {
        this.setState({ codePluPlus: e.target.value })
    }
    onChangeUserCodePLU(e) {
        this.setState({ codePlu: e.target.value })
    }
    onChangeUserCodeMagasin(e) {
        this.setState({ codeMag: e.target.value })
    }
    onChangeUserEntite(e) {
        this.setState({ entite: e.target.value })
    }
    onChangeUserAdresse(e) {
        this.setState({ adresse: e.target.value })
    }

    openNotification = () => {
        notification.open({
            description:
                'Donnée envoyée',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            promo: this.state.promo,
            prix: this.state.prix,
            origine: this.state.origine,
            cat: this.state.cat,
            cal: this.state.cal,
            cond: this.state.cond,
            date: this.state.date,
            codePluPlus: this.state.codePluPlus,
            codePlu: this.state.codePlu,
            codeMag: this.state.codeMag,
            notification: this.state.notification,
            entite: this.props.entite,
            adresse: this.props.adresse,

        };

        axios.post('http://localhost:4000/businesses/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit} style={{ padding: '1em', border: '2px solid #c1c1c1', marginTop: '2rem', width: '150px', height: 'auto' }}>
                    <img className="circle-img" src={this.props.img} alt="avatar_img" />

                    <input type="hidden" value={this.props.entite} onChange={this.onChangeUserEntite} className="form-control" style={{ width: "100px" }} />
                    <input type="hidden" value={this.props.adresse} onChange={this.onChangeUserAdresse} className="form-control" style={{ width: "100px" }} />

                    <Popover title='Promo'>
                        <input type="checkbox" checked={this.state.promo} onChange={this.onChangeUserPromo} />
                    </Popover>
                    <div className="form-group">
                        <label for="test" style={{ float: 'left' }}>€</label>
                        <span style={{ display: 'block', overflow: 'hidden', padding: '5px 4px 3px 6px' }}>
                            <input type="text" value={this.state.prix} onChange={this.onChangeUserPrix} placeholder={"1"} className="form-control" style={{ width: '90px' }} required />
                        </span>
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserOrigine} style={{ width: "100px" }} required>
                            <option value="">Origine</option>
                            <option value="FR">FR</option>
                            <option value="EN">EN</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserCAT} style={{ width: "100px" }}>
                            <option value="">CAT</option>
                            <option value="extra">Extra</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.cal} onChange={this.onChangeUserCAL} placeholder={'CAL'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserCOND} style={{ width: "100px" }}>
                            <option value="">COND</option>
                            <option value="Sachet">Sachet</option>
                            <option value="Cagette">Cagette</option>
                            <option value="Pièce">Pièce</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <DatePicker
                            defaultValue={moment}
                            selected={this.state.date}
                            onChange={this.onChangeUserDate}
                            format="YYYY-MM-DD"
                            placeholder="Date"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.codeMag} onChange={this.onChangeUserCodeMagasin} placeholder={"CodeMag"} className="form-control" style={{ width: '100px' }} />
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserCodePLUPLUS} style={{ width: "120px" }}>
                            <option value="">codePluPlus</option>
                            <option value="4986">4986</option>
                            <option value="4985">4985</option>
                            <option value="4984">4984</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.codePlu} onChange={this.onChangeUserCodePLU} placeholder={"CodePlu"} className="form-control" style={{ width: '100px' }} />
                    </div>
                    <div>
                        <button type="primary" onClick={this.openNotification}>
                            <input type="submit" value="Send" className="btn btn-success btn-block" style={{ width: '100px' }} />
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


