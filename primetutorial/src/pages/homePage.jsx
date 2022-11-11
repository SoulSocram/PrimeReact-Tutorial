import React, {  useState  } from "react";
import './homePage.css';

import { Dialog } from 'primereact/dialog';
 
import ChartLineVertical from '../charts/chartLineVertical';
import MenuBarHome from '../header/header';
import { Button } from 'primereact/button';

const HomePage = () => {

    const [  state, setState  ] = useState(false);

    return (
        <div className="HomePage">
            <Dialog visible={state} onHide={() => setState(false)}>
                // content
            </Dialog>

            <Button label="Show" onClick={() => setState(true)} />
        </div>
    )
}

export default HomePage;