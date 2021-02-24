import React from 'react'
import { removeUserSession } from '../utils/common';
import { Descriptions } from 'antd'

export default function home(props) {

    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (
        <>
     <input type="button" onClick={handleLogout} value="Logout" />
  <Descriptions title="Products Info" style={{ padding: '1em', border: '2px solid black', marginTop: '2rem', width: '750px', height: '250px' }}>
    <Descriptions.Item label="Carrefour"></Descriptions.Item>
    <Descriptions.Item label="System U"></Descriptions.Item>
    <Descriptions.Item label="Intermarché"></Descriptions.Item>
    <Descriptions.Item label="Auchan"></Descriptions.Item>
    <Descriptions.Item label="Franprix"></Descriptions.Item>
    <Descriptions.Item label="Monoprix"></Descriptions.Item>
  </Descriptions>
        </>
    )
}