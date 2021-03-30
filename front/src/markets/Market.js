import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export const Market = ({ market }) => {
    return market === undefined ? (
        <div style={{ marginLeft: 15 }}>No Market selected</div>
    ) : (
            <div style={{ marginLeft: 15 }}>
                <h5 style={{ marginBottom: 15, textAlign: "center", maxWidth: 800, minWidth: 0, maxHeight: 800, minHeight: 0 }}>
                    Graphe du marche {market?.data?.[0].marche}
                </h5>
                <HighchartsReact
                    options={{

                        title: {
                            text: "Comparaison des prix"
                        },

                        series: [
                            {
                                name: "Prix moyen",
                                data: market.data.map((entry) => ({
                                    x: new Date(entry.date_lib).getTime(),
                                    y: entry.prix_moyen
                                })),
                                lineWidth: 6,
                                color: "red",
                                alloDecimals: true,
                                tooltip: {
                                    valueDecimals: 2
                                }
                            },
                            {
                                name: "Prix mini",
                                data: market.data.map((entry) => ({
                                    x: new Date(entry.date_lib).getTime(),
                                    y: entry.prix_mini
                                })),
                                lineWidth: 6,
                                color: "blue",
                                tooltip: {
                                    valueDecimals: 2
                                }
                            },
                            {
                                name: "Prix mini",
                                data: market.data.map((entry) => ({
                                    x: new Date(entry.date_lib).getTime(),
                                    y: entry.prix_maxi
                                })),
                                lineWidth: 6,
                                color: "green",
                                tooltip: {
                                    valueDecimals: 2
                                }
                            }
                        ]
                    }}
                    containerProps={{ style: { height: "100%", width: "100%" } }}
                    highcharts={Highcharts}
                    constructorType={"stockChart"}
                />
            </div>
        );
};

export default Market;
