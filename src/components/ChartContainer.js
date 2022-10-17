import { useState } from "react";
import { useSelector } from "react-redux";
import { ColumnChart, AreaChart } from "../charts";

const ChartContainer = () => {
    const [colChart, setColChart] = useState(true);
    const { monthlyApp } = useSelector(store => store.allJobs);
    const data = monthlyApp.map(item => {
        return {label: item.date, value: item.count}
    })

    if(monthlyApp.length < 1){
        return (
            <div className="title ta-center">
                <h3 className="fw-400 capitalize">monthly applications</h3>
                <p className="err-msg">No applications in the last 6 months.</p>
            </div>
        )
    }
    return (  
        <div className="monthly-cont">
            <div className="title ta-center">
                <h3 className="fw-400 capitalize">monthly applications</h3>
                <button type="button" className="btn btn-m btn-prim capitalize" onClick={() => setColChart(!colChart)}>
                    {colChart ? "area chart" : "column chart"}
                </button>
            </div>
            {colChart ? <ColumnChart data={data} /> : <AreaChart data={data} /> }     
        </div>
    );
}

export default ChartContainer;