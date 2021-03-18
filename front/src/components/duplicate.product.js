import React from 'react';
import CreateProduct from "./create.product";
// import CreateBusiness from "./create-business";
// import DataSearch from "./search";
import contacts from './contacts';
import { Tabs } from 'antd';

export default function Duplicate() {
    const { TabPane } = Tabs;

    return (
        <>
            {/* <DataSearch /> */}
            <Tabs defaultActiveKey="1"  >
                <TabPane tab="Carrefour" key="1" >
                    <div style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 100px' }} >
                        <CreateProduct
                            img={contacts[0].imgURL}
                            entite={contacts[0].entite}
                            adresse={contacts[0].adresse}
                            ville={contacts[0].ville}
                            codePostal={contacts[0].codePostal}
                            logo={contacts[0].logo}
                            redirect={contacts[0].redirect}
                            location={contacts[0].location}
                        />
                        <CreateProduct
                            img={contacts[1].imgURL}
                            entite={contacts[1].entite}
                            adresse={contacts[1].adresse}
                            ville={contacts[1].ville}
                            codePostal={contacts[1].codePostal}
                            logo={contacts[1].logo}
                            redirect={contacts[1].redirect}
                            location={contacts[1].location}

                        />
                        <CreateProduct
                            img={contacts[2].imgURL}
                            entite={contacts[2].entite}
                            adresse={contacts[2].adresse}
                            ville={contacts[2].ville}
                            codePostal={contacts[2].codePostal}
                            logo={contacts[2].logo}
                            redirect={contacts[2].redirect}
                            location={contacts[2].location}

                        />
                        <CreateProduct
                            img={contacts[3].imgURL}
                            entite={contacts[3].entite}
                            adresse={contacts[3].adresse}
                            ville={contacts[3].ville}
                            codePostal={contacts[3].codePostal}
                            logo={contacts[3].logo}
                            redirect={contacts[3].redirect}
                            location={contacts[3].location}

                        />
                    </div>
                </TabPane>
                <TabPane tab="System U" key="2">
                    <div style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 100px' }} >
                        <CreateProduct
                            img={contacts[4].imgURL}
                            entite={contacts[4].entite}
                            adresse={contacts[4].adresse}
                            ville={contacts[4].ville}
                            codePostal={contacts[4].codePostal}
                            logo={contacts[4].logo}
                            redirect={contacts[4].redirect}
                            location={contacts[4].location}

                        />
                        <CreateProduct
                            img={contacts[5].imgURL}
                            entite={contacts[5].entite}
                            adresse={contacts[5].adresse}
                            ville={contacts[5].ville}
                            codePostal={contacts[5].codePostal}
                            logo={contacts[5].logo}
                            redirect={contacts[5].redirect}
                            location={contacts[5].location}

                        />
                        <CreateProduct
                            img={contacts[6].imgURL}
                            entite={contacts[6].entite}
                            adresse={contacts[6].adresse}
                            ville={contacts[6].ville}
                            codePostal={contacts[6].codePostal}
                            logo={contacts[6].logo}
                            redirect={contacts[6].redirect}
                            location={contacts[6].location}

                        />
                        <CreateProduct
                            img={contacts[7].imgURL}
                            entite={contacts[7].entite}
                            adresse={contacts[7].adresse}
                            ville={contacts[7].ville}
                            codePostal={contacts[7].codePostal}
                            logo={contacts[7].logo}
                            redirect={contacts[7].redirect}
                            location={contacts[7].location}

                        />
                    </div>
                </TabPane>
                <TabPane tab="Intermarché super" key="3">
                    <div style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 100px' }} >
                        <CreateProduct
                            img={contacts[8].imgURL}
                            entite={contacts[8].entite}
                            adresse={contacts[8].adresse}
                            ville={contacts[8].ville}
                            codePostal={contacts[8].codePostal}
                            logo={contacts[8].logo}
                            redirect={contacts[8].redirect}
                            location={contacts[8].location}

                        />
                        <CreateProduct
                            img={contacts[9].imgURL}
                            entite={contacts[9].entite}
                            adresse={contacts[9].adresse}
                            ville={contacts[9].ville}
                            codePostal={contacts[9].codePostal}
                            logo={contacts[9].logo}
                            redirect={contacts[9].redirect}
                            location={contacts[9].location}

                        />
                    </div>
                </TabPane>
                <TabPane tab="Auchan" key="4">
                    <div style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 100px' }} >
                        <CreateProduct
                            img={contacts[10].imgURL}
                            entite={contacts[10].entite}
                            adresse={contacts[10].adresse}
                            ville={contacts[10].ville}
                            codePostal={contacts[10].codePostal}
                            logo={contacts[10].logo}
                            redirect={contacts[10].redirect}
                            location={contacts[10].location}

                        />
                        <CreateProduct
                            img={contacts[11].imgURL}
                            entite={contacts[11].entite}
                            adresse={contacts[11].adresse}
                            ville={contacts[11].ville}
                            codePostal={contacts[11].codePostal}
                            logo={contacts[11].logo}
                            redirect={contacts[11].redirect}
                            location={contacts[11].location}

                        />
                        <CreateProduct
                            img={contacts[12].imgURL}
                            entite={contacts[12].entite}
                            adresse={contacts[12].adresse}
                            ville={contacts[12].ville}
                            codePostal={contacts[12].codePostal}
                            logo={contacts[12].logo}
                            redirect={contacts[12].redirect}
                            location={contacts[12].location}

                        />
                        <CreateProduct
                            img={contacts[13].imgURL}
                            entite={contacts[13].entite}
                            adresse={contacts[13].adresse}
                            ville={contacts[13].ville}
                            codePostal={contacts[13].codePostal}
                            logo={contacts[13].logo}
                            redirect={contacts[13].redirect}
                            location={contacts[13].location}

                        />
                    </div>
                </TabPane>
                <TabPane tab="Franprix" key="5">
                    <div style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 100px' }} >
                        <CreateProduct
                            img={contacts[14].imgURL}
                            entite={contacts[14].entite}
                            adresse={contacts[14].adresse}
                            ville={contacts[14].ville}
                            codePostal={contacts[14].codePostal}
                            logo={contacts[14].logo}
                            redirect={contacts[14].redirect}

                        />
                    </div>
                </TabPane>
                <TabPane tab="Monoprix" key="6">
                    <div style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 100px' }} >
                        <CreateProduct
                            img={contacts[15].imgURL}
                            entite={contacts[15].entite}
                            adresse={contacts[15].adresse}
                            ville={contacts[15].ville}
                            codePostal={contacts[15].codePostal}
                            logo={contacts[15].logo}
                            redirect={contacts[15].redirect}

                        />
                    </div>
                </TabPane>
            </Tabs>
        </>
    )
}
