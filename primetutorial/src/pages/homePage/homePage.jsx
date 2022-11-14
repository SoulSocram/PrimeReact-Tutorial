import React, {  useState  } from "react";
import './homePage.css';

import { Dialog } from 'primereact/dialog';
 
import HeaderBar from '../../header/header';
import Dashboard1 from '../../dashboard/dashboard1';
import { Button } from 'primereact/button';

const HomePage = () => {

    const [  state, setState  ] = useState(false);

    return (
        <div className="homePage flex flex-column w-screen h-screen">
            <HeaderBar/>
            <Dashboard1/>
        </div>
    )
}

export default HomePage;