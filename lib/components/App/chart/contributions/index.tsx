import { Grid } from "@material-ui/core";
import React from "react";
import Chart from "react-apexcharts";
import { IContents, IMembers } from "../../../../models/home";

export default function({ data }) {
    const series = [];

    if (data.members) {
        data.members.map((member: IMembers) => {
            const labelsDate = [];
            const contentsUser = data.contents.filter(
                (content: IContents) => content.assignedTo === member._id,
            );
            const filterDate = contentsUser.map((content: IContents) => {
                return new Date(content.publish).getMonth();
            });
            const countTest =
                series.length && !filterDate.length
                    ? series[series.length - 1].data.length - 1
                    : filterDate.sort()[filterDate.length - 1];
            for (let c = 0; c <= countTest; c++) {
                labelsDate[c] = !filterDate.length
                    ? 0
                    : filterDate.filter((month: number) => month === c).length;
            }
            series.push({ name: member.name, data: labelsDate });
        });
    }
    const options = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
    };

    return (
        <Grid item xs={12} md={6}>
            <Chart type="line" series={series} options={options} />
        </Grid>
    );
}
