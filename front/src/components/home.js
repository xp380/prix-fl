import React, {useState, useEffect, useCallback} from 'react'
import { removeUserSession } from '../utils/common';
import { Descriptions } from 'antd'
import axios from 'axios'

export default function Home(props) {
    // const [data, setData] = useState({ box: [] });
    const [total, setTotal] = useState([])
    const [carrefour, setCarrefour ] = useState([])
    const [system, setSystem ] = useState([])
    const [intermarche, setIntermarche ] = useState([])
    const [auchan, setAuchan ] = useState([])
    const [franprix, setFranprix ] = useState([])
    const [monoprix, setMonoprix ] = useState([])
    // const [prices, setPrice ] = useState([])
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    const fetchTotal = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices`);
            setTotal(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchTotal(), [fetchTotal]);
    console.log(total);

    const fetchCarrefour = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices/carrefour`);
            setCarrefour(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchCarrefour(), [fetchCarrefour]);
    console.log(carrefour);

    const fetchSystem = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices/systemu`);
            setSystem(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchSystem(), [fetchSystem]);
    console.log(system);

    const fetchIntermarche = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices/intermarche`);
            setIntermarche(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchIntermarche(), [fetchIntermarche]);
    console.log(system);

    const fetchAuchan = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices/auchan`);
            setAuchan(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchAuchan(), [fetchAuchan]);
    console.log(auchan);

    const fetchFranprix = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices/franprix`);
            setFranprix(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchFranprix(), [fetchFranprix]);
    console.log(franprix);

    const fetchMonoprix = useCallback(async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countprices/monoprix`);
            setMonoprix(
                res.data
                    );
        } catch (e) {
            console.warn(e);
        }
    }, [])
    useEffect(() => fetchMonoprix(), [fetchMonoprix]);
    console.log(monoprix);
    // const fetchPrices = useCallback(async () => {
    //     try {
    //         const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
    //         setPrice(
    //             res.data
    //                 );
    //     } catch (e) {
    //         console.warn(e);
    //     }
    // }, [])
    // useEffect(() => fetchPrices(), [fetchPrices]);
    // console.log(prices);


    // useEffect(() => fetchMarkets(), [fetchMarkets]);
    // console.log(markets);
    // useEffect(() => {
    //     const fecthData = async () => {
    //         await axios.all([
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/`,
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/monoprix`,
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/carrefour`,
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/auchan`,
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/systemu`,
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/franprix`,
    //             axios.get`${process.env.REACT_APP_SERVER_URL}/countprices/intermarche`
    //         ])
    //             .then(res => {
    //                 setData(res.data);
    //                 console.log(data);
    //             });
    //     };
    //     fecthData();
    // }, );

    
    
    return (
        <>
     <input type="button" onClick={handleLogout} value="Logout" />
  <Descriptions title="Statistiques des prix des produits" style={{ padding: '1em', border: '2px solid black', marginTop: '2rem', width: '750px', height: '250px' }}>
    <Descriptions.Item label="Nombre Total de Produits">{total}</Descriptions.Item>
    <Descriptions.Item label="Carrefour"> {carrefour}</Descriptions.Item>
    <Descriptions.Item label="System U">{system}</Descriptions.Item>
    <Descriptions.Item label="Intermarché">{intermarche}</Descriptions.Item>
    <Descriptions.Item label="Auchan">{auchan}</Descriptions.Item>
    <Descriptions.Item label="Franprix">{franprix}</Descriptions.Item>
    <Descriptions.Item label="Monoprix">{monoprix}</Descriptions.Item>
  </Descriptions>
        </>
    )
}