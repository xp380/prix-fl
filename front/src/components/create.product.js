import React, { Component } from 'react';
import axios from 'axios';
import { DatePicker, Popover, Tooltip, } from "antd";
import moment from 'moment';
import data from './products-pluplus.json';

import { NotificationManager } from 'react-notifications';

console.log(data)
export default class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserRedirect = this.onChangeUserRedirect.bind(this);
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
        this.onChangeUserVille = this.onChangeUserVille.bind(this);
        this.onChangeUserCodePostal = this.onChangeUserCodePostal.bind(this);
        this.onChangeUserLocation = this.onChangeUserLocation.bind(this);
        this.onChangeUserLogo = this.onChangeUserLogo.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            redirect: '',
            promo: false,
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
            logo: "",
            adresse: "",
            ville: "",
            location: "",
            codePostal: "",
            notification: '',
        }
    }


    onChangeUserRedirect(e) {
        this.setState({ redirect: e.target.value })
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
    onChangeUserLogo(e) {
        // this.setState({ logo: e.target.value })
        this.setState({ logo: URL.createcreateObjectURL(e.target.files[0]) })
    }
    onChangeUserAdresse(e) {
        this.setState({ adresse: e.target.value })
    }
    onChangeUserVille(e) {
        this.setState({ ville: e.target.value })
    }
    onChangeUserCodePostal(e) {
        this.setState({ codePostal: e.target.value })
    }
    onChangeUserLocation(e) {
        this.setState({ location: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        e.target.reset();
        const userObject = {
            redirect: this.props.redirect,
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
            logo: this.props.logo,
            adresse: this.props.adresse,
            ville: this.props.ville,
            codePostal: this.props.codePostal,
            location: this.props.location
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/users/create`, userObject)
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
                    <Popover placement="bottom" content={this.props.location}>
                        <a rel="noreferrer" href={this.props.redirect} target="_blank"><img className="circle-img" src={this.props.img} alt="avatar_img" /></a>
                    </Popover>
                    <input type="hidden" value={this.props.logo} onChange={this.onChangeUserLogo} className="form-control" style={{ width: "100px" }} />
                    <input type="hidden" value={this.props.entite} onChange={this.onChangeUserEntite} className="form-control" style={{ width: "100px" }} />
                    <input type="hidden" value={this.props.adresse} onChange={this.onChangeUserAdresse} className="form-control" style={{ width: "100px" }} />
                    <input type="hidden" value={this.props.ville} onChange={this.onChangeUserVille} className="form-control" style={{ width: "100px" }} />
                    <input type="hidden" value={this.props.codePostal} onChange={this.onChangeUserCodePostal} className="form-control" style={{ width: "100px" }} />
                    <Tooltip title='Promo'>
                        <input type="checkbox" checked={this.state.promo} onChange={this.onChangeUserPromo} />
                    </Tooltip>
                    <div className="form-group">
                        <label htmlFor="test" style={{ float: 'left', paddingTop: "10px" }}>€</label>
                        <span style={{ display: 'block', overflow: 'hidden', padding: '5px 4px 3px 6px' }}>
                            <input type="number" step={0.1} value={this.prix} onChange={this.onChangeUserPrix} placeholder={"1"} className="form-control" style={{ width: '90px' }} />
                        </span>
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserOrigine} style={{ width: "100px" }} required >
                            <option value="">Origine</option>
                            <option value="FR">FR</option>
                            <option value="EN">EN</option>
                            <option value="IT">IT</option>
                            <option value="Maurice">Maurice</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Pays tiers">Pays tiers</option>
                            <option value="Equateur">Equateur</option>
                            <option value="Côte d'ivoire">Côte d'ivoire</option>
                            <option value=""></option>
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
                        <input type="text" value={this.cal} onChange={this.onChangeUserCAL} placeholder={'CAL'} className="form-control" style={{ width: "100px" }} />
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserCOND} style={{ width: "100px" }}>
                            <option value="">COND</option>
                            <option value="Sachet">Sachet</option>
                            <option value="Cagette">Cagette</option>
                            <option value="Pièce">Pièce</option>
                            <option value="Vrac">Vrac</option>
                            <option value="L'unité">L'unité</option>
                            <option value="1.220 kg">1.220 kg</option>
                            <option value="400 g">400 g</option>
                            <option value="kg">kg</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <DatePicker
                            defaultValue={moment}
                            selected={this.state.date}
                            onChange={this.onChangeUserDate}
                            format="YYYY-MM-DD"
                            placeholder="Date"
                            style={{ width: 130 }}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.codeMag} onChange={this.onChangeUserCodeMagasin} placeholder={"CodeMag"} className="form-control" style={{ width: '100px' }} />
                    </div>
                    <div className="form-group">
                        <select onChange={this.onChangeUserCodePLUPLUS} style={{ width: "130px" }}>
                            <option value="">codePluPlus</option>
                            <option value="4986">4986</option>
                            <option value="4985">4985</option>
                            <option value="4984">4984</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.codePlu} onChange={this.onChangeUserCodePLU} placeholder={"CodePlu"} className="form-control" style={{ width: '100px' }} />
                    </div>
                    <div>
                        <input type="submit" value="Send" className="btn btn-success btn-block" style={{ width: '100px' }} />
                    </div>
                </form>
            </div>
        )
    }
}


