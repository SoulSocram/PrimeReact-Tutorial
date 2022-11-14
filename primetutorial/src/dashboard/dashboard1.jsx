import React from "react";

import ChartLineVertical from "../charts/chartLineVertical";
import ChartDoughnut from "../charts/chartDoughnut";

const Dashboard1 = () => {
    return(
        <div className="dashboard1 w-full flex-grow-1">
            <div className="cards w-full p-3 flex grid">
                <div className="card m-2 border-round col bg-primary w-11rem h-4rem p-3 flex justify-content-between align-items-center">
                    <i className="pi pi-dollar" style={{'fontSize': '1.5em'}}></i><h3>500.888,00</h3>
                </div>
                <div className="card m-2 border-round col bg-primary w-11rem h-4rem p-3 flex justify-content-between align-items-center">
                    <i className="pi pi-dollar" style={{'fontSize': '1.5em'}}></i><h3>500.888,00</h3>
                </div>
                <div className="card m-2 border-round col bg-primary w-11rem h-4rem p-3 flex justify-content-between align-items-center">
                    <i className="pi pi-dollar" style={{'fontSize': '1.5em'}}></i><h3>500.888,00</h3>
                </div>
                <div className="card m-2 border-round col bg-primary w-11rem h-4rem p-3 flex justify-content-between align-items-center">
                    <i className="pi pi-dollar" style={{'fontSize': '1.5em'}}></i><h3>500.888,00</h3>
                </div>
            </div>
            <div className="charts">
                <div className="col-6 p-3">
                    <ChartLineVertical/>
                </div>
                <div className="col-6 p-3">
                    <ChartDoughnut/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard1;