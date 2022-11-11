import React, {  useState  } from "react";

import {  Chart  } from 'primereact/chart';

export class Charts {
    getDarkTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }
}

