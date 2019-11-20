import React from 'react';
import './../App.css';
import {connect} from "react-redux";
import {addWindow, IAddWindow, IStyles, ADD_WINDOW} from "../redux/reducer";
import {AppStateType} from "../redux/store";
import Popup from "./Popup";

interface IArrayAlerts {
    id: number
    title: 'Success' | 'Warning' | 'Error'
    styles: { border: string }
}

interface IProps {
    alerts: Array<IArrayAlerts>
    addWindow: (styles: {border: string}) => void
}

// export interface IAddWindow {
//     type: typeof ADD_WINDOW
//     styles: IStyles
//     // popUpAlerts: Array<IArrayPopUpAlerts>
// }


// interface IReducerState {
//     alerts: Array<IArrayAlerts>
// }
const MainContent = (props: IProps) => {

    return <main>
        <div className="main">
            {props.alerts.map(
                (al, i) => (<button
                    key={i}
                    className='buttons' style={al.styles}
                    onClick={() => {
                        props.addWindow(al.styles)
                    }}>
                    {al.title}
                </button>))}
        </div>
        <Popup/>
    </main>
};

const mapStateToProps = (state: AppStateType) => ({alerts: state.alert.alerts});

export default connect(mapStateToProps, {addWindow})(MainContent);