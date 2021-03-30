import ReactApexChart from "react-apexcharts";

export const Product = ({ product }) => {
    return product === undefined ? (
        <div style={{ marginLeft: 15 }}>No product selected</div>
    ) : (
            <div style={{ marginLeft: 15 }}>
                <h5 style={{ marginBottom: 0 }}>
                    Graphe {product?.data?.[0].libelle} du marche{" "}
                    {product?.data?.[0].marche}
                </h5>
                <ReactApexChart
                    series={[
                        {
                            data: product.data.map((entry) => ({
                                x: new Date(entry.date_lib).getTime(),
                                y: [
                                    entry.prix_moyen,
                                    entry.prix_maxi,
                                    entry.prix_mini,
                                    entry.prix_mini
                                ]
                            }))
                        }
                    ]}
                    options={{
                        xaxis: {
                            type: "datetime"
                        },
                        yaxis: {
                            tooltip: {
                                enabled: true
                            }
                        },
                    }}
                    type="candlestick"
                    height={250}
                    width="100%"
                />
            </div>
        );
};
