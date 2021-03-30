import { useCallback, useEffect, useState } from "react";
import { Product } from "./Product";
import Market from "./Market";
import axios from "axios";
import { Button } from "react-bootstrap";

import Loader from "react-loader-spinner";
export const ProductList = ({ list }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const [activeProduct, setActiveProduct] = useState();

    // const fetchProducts = useCallback(async () => {
    //     try {
    //         setLoading(true);
    //         setActiveProduct(undefined);
    //         const res = await axios.get(
    //             `http://localhost:5000/products?marche_id=${list}`
    //         );
    //         setProducts(
    //             res.data.sort((a, b) => a.libelle.localeCompare(b.libelle)) ??
    //             []
    //         );
    //     } catch (e) {
    //         setLoading(false);
    //         console.warn(e);
    //     } finally {
    //         setLoading(false);
    //     }
    // }, [list]);

    // const getProduct = useCallback(
    //     async (productId) => {
    //         try {
    //             const res = await axios.get(
    //                 `http://localhost:5000/product?marche_id=${list}&product_id=${productId}`
    //             );
    //             setActiveProduct({ data: res.data });
    //         } catch (e) {
    //             console.warn(e);
    //         }
    //     },
    //     [list]
    // );

    // useEffect(() => fetchProducts(), [fetchProducts]);
    console.log(products);
    return list === undefined ? (
        <>No markets selected</>
    ) : loading ? (
        <>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            // timeout={3000}
            />
        </>
    ) : (
                <>
                    <div
                        style={{ width: 200, display: "flex", flexDirection: "column" }}
                    >
                        <div style={{ textAlign: "center" }}>
                            {products.length} produits
                </div>

                        {products.map((product, i) => (
                            <Button
                                variant="outline-secondary"
                                key={`product-${i}`}
                                style={{ marginBottom: 5, width: 250 }}
                                // onClick={() => getProduct(product.code_libelle)}
                            >
                                {product.libelle}
                                {product.code_libelle}
                            </Button>
                        ))}
                    </div>
                    <div style={{ position: "fixed", marginLeft: 300 }}>
                        <div style={{ textAlign: "center" }}>
                            Visualisation des prix de
                </div>
                        <Market market={activeProduct} />
                        <Product product={activeProduct} />
                    </div>
                </>
            );
};
