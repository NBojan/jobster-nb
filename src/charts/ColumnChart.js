import React from "react";
import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ColumnChart = ({ data }) => {
    const chartConfigs = {
        type: "column2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
          chart: {
            subCaption: "Last 6 Months",
            xAxisName: "Months",
            yAxisName: "Applications",
            paletteColors: "#3b82f6",
            decimals: 0,
            theme: "fusion"
          },
          data
        }
    };
      
    return <ReactFC {...chartConfigs} className="chart"/>
}

export default ColumnChart;