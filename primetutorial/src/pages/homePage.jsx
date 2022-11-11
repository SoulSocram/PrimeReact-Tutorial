import React, {  useState  } from "react";
import './homePage.css';

import {  Chart  } from 'primereact/chart';

const HomePage = () => {
    
    const [data] = useState({
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Meta',
                data: [100, 150, 195, 75, 45],
                fill: false,
                borderColor: '#7d0e7c',
                tension: .4
            },
            {
                label: 'Valor Realizado',
                data: [101, 130, 150, 85, 50],
                fill: true,
                borderColor: '#4122d7',
                backgroundColor: 'rgb(65, 34, 215, .2)',
                tension: .4
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#f8b7ff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#f8b7ff'
                    },
                    grid: {
                        color: '#1305fb'
                    }
                },
                y: {
                    ticks: {
                        color: '#f8b7ff'
                    },
                    grid: {
                        color: '##1305fb'
                    }
                }
            }
        };

        let multiAxisOptions = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
            multiAxisOptions
        }
    }

    const {  basicOptions, multiAxisOptions  } = getLightTheme();


    return (
        <div className="card">
            <Chart type="line" data={data} options={basicOptions}></Chart>
        </div>
    )
}

export default HomePage;