
import React, {  useState  } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import {  InputSwitch  } from 'primereact/inputswitch';

const HeaderBar = () => {

    const [  checked, setChecked  ] = useState();

    const items = [
        {
            label: 'Dashboards',
            icon: 'pi pi-chart-bar',
            items: [
                {
                    label: 'Teste 1',
                    icon: 'pi pi-fw pi-chart-pie',
                }
            ]
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)}/>;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}

export default HeaderBar;
                 