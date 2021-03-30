import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ProductList } from "./ProductList";
import { Button } from "react-bootstrap";
// import { Market } from "./Market";

import { FaArrowCircleUp } from "react-icons/fa";

export const MarketList = () => {
    const [markets, setMarkets] = useState([]);
    const [activeMarket, setActiveMarket] = useState();
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop);

    // const fetchMarkets = useCallback(async () => {
    //     try {
    //         setActiveMarket(undefined);
    //         const res = await axios.get("http://localhost:5000/markets");
    //         setMarkets(
    //             res.data
    //                 .filter((market) => market.marcheId !== "?")
    //                 .sort((a, b) => a.marcheId.localeCompare(b.marcheId)) ?? []
    //         );
    //     } catch (e) {
    //         console.warn(e);
    //     }
    // }, []);

    // useEffect(() => fetchMarkets(), [fetchMarkets]);
    // console.log(markets.length);

    return (
        <div style={{ width: "100%", padding: 30 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: 200, marginRight: 15 }}>
                    <div style={{ textAlign: "center" }}>
                        {markets.length} marchés
                    </div>
                    {markets.map(({ id, marcheId, region }) => (
                        <Button
                            key={id}
                            style={{
                                width: 200,
                                marginBottom: 5
                            }}
                            onClick={() => {
                                setActiveMarket(marcheId);
                                // getProduct(product.code_libelle);
                            }}
                        >
                            {marcheId} - {region}
                        </Button>
                    ))}
                </div>
                <div style={{ display: "flex" }}>
                    <ProductList list={activeMarket} />
                    {/* <Market market={activeMarket} /> */}
                </div>
            </div>
            <FaArrowCircleUp
                className="scrollTop"
                onClick={scrollTop}
                style={{
                    height: 40,
                    width: 50,
                    display: showScroll ? "flex" : "none",
                    position: "fixed",
                    right: 10,
                    bottom: 10
                }}
            />
        </div>
    );
};

export default MarketList;
