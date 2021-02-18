import React from 'react';
import CreateProduct from "./create.product";
import CreateBusiness from "./create-business";
import contacts from './contacts';

export default function Duplicate() {
    return (
        <>
            <p style={{ display: "flex", flexwrap: "wrap", padding: "10px", margin: '0 10px' }} >
                <CreateProduct
                    img={contacts[0].imgURL}
                    entite={contacts[0].entite}
                    adresse={contacts[0].adresse}
                />
                <CreateProduct
                    img={contacts[1].imgURL}
                    entite={contacts[1].entite}
                    adresse={contacts[1].adresse}
                />
                <CreateProduct
                    img={contacts[2].imgURL}
                    entite={contacts[2].entite}
                    adresse={contacts[2].adresse}
                />
                <CreateProduct
                    img={contacts[3].imgURL}
                    entite={contacts[3].entite}
                    adresse={contacts[3].adresse}
                />
                <CreateProduct
                    img={contacts[4].imgURL}
                    entite={contacts[4].entite}
                    adresse={contacts[4].adresse}
                />
                <CreateProduct
                    img={contacts[5].imgURL}
                    entite={contacts[5].entite}
                    adresse={contacts[5].adresse}
                />
                <CreateProduct
                    img={contacts[6].imgURL}
                    entite={contacts[6].entite}
                    adresse={contacts[6].adresse}
                />
                <CreateBusiness
                    img={contacts[0].imgURL}
                    entite={contacts[0].entite}
                    adresse={contacts[0].adresse}
                />
            </p>
        </>
    )
}
