import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function() {
    const [data, setData] = useState({
        options: {},
        series: [6, 1, 7],
        labels: ["marlon", "ingrid", "nathaly"],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                    },
                },
            },
        },
    });
    return (
        <Grid item xs={12} md={6}>
            <Chart options={data} series={data.series} type="donut" width="400"/>
        </Grid>
    );
}
