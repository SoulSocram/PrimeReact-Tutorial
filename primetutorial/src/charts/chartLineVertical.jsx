import React, {  useState  } from "react";

import {  Chart  } from 'primereact/chart';

const ChartLineVertical = () => {

    const darkTheme = {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#e3f2fd',
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#e3f2fd'
                },
                grid: {
                    color: '#343e4d'
                }
            },
            y: {
                ticks: {
                    color: '#e3f2fd'
                },
                grid: {
                    color: '#343e4d'
                }
            }
        }
    };
    
    const whiteTheme = {
        aintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#e3f2fd',
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#e3f2fd'
                },
                grid: {
                    color: '#121212'
                }
            },
            y: {
                ticks: {
                    color: '#e3f2fd'
                },
                grid: {
                    color: '#121212'
                }
            }
        }
    }    

    let color = darkTheme;

    const [data] = useState({
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Meta',
                data: [100, 150, 195, 75, 45],
                fill: false,
                borderColor: '#c904fa',
                tension: .4
            },
            {
                label: 'Valor Realizado',
                data: [101, 130, 150, 85, 50],
                fill: true,
                borderColor: '#028fc2',
                backgroundColor: 'rgb(2, 143, 194, .2)',
                tension: .4
            }
        ]
    });

    return (
        <div className="card">
            <Chart type="line" data={data} options={color}></Chart>
        </div>
    )
}

export default ChartLineVertical;