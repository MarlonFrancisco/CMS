import { Grid } from "@material-ui/core";
import React from "react";
import Chart from "react-apexcharts";

export default function() {
    const options = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
    };
    const series = [
        {
            name: "marlon",
            data: [2, 5, 1, 3, 5, 7, 1, 4, 1, 1, 1, 4],
        },
        {
            name: "nathaly",
            data: [5, 3, 7, 2, 4, 1, 5, 6, 8, 9, 3, 4],
        },
        {
            name: "ingrid",
            data: [6, 7, 12, 1, 3, 7, 4, 9, 7, 5, 2, 6],
        },
    ];

    return (
        <Grid item xs={12} md={6}>
            <Chart type="line" series={series} options={options} />
        </Grid>
    );
}
