import React, { Component } from 'react';
import contacts from './contacts';

class App extends Component {

    constructor() {
        super();

        this.state = {
            search: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {
        const styleInfo = {
            paddingRight: '10px'
        }
        const elementStyle = {
            border: 'solid',
            borderRadius: '10px',
            position: 'relative',
            left: '10vh',
            height: '3vh',
            width: '20vh',
            marginTop: '5vh',
            marginBottom: '10vh'
        }
        const items = contacts.filter((data) => {
            if (this.state.search == null)
                return data
            else if (data.entite.toLowerCase().includes(this.state.search.toLowerCase()) || data.adresse.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map(data => {
            return (
                <div>
                    <ul>
                        <li style={{ position: 'relative', left: '10vh' }}>
                            <span style={styleInfo}>{data.entite}</span>
                            <span style={styleInfo}>{data.adresse}</span>
                            <span style={styleInfo}>{data.codePostal}</span>
                        </li>
                    </ul>
                </div>
            )
        })

        return (
            <div>
                <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)} />
                {items}
            </div>
        )
    }
}

export default App;
