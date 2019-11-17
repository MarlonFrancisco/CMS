import { Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { IContent, IMember } from "../../../../typings/interfaces";

export default function({ data }) {
    const options = {
        options: {},
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                    },
                },
            },
        },
        series: [],
        labels: [],
    };

    if (data.members) {
        data.members.map((member: IMember) => {
            const contents = data.contents.filter(
                (content: IContent) => content.assignedTo === member._id,
            );
            options.labels.push(member.name);
            options.series.push(contents.length);
        });
    }
    return (
        <Grid item xs={12} md={4}>
            <Paper>
                <Chart
                    options={options}
                    series={options.series}
                    type="donut"
                />
            </Paper>
        </Grid>
    );
}
