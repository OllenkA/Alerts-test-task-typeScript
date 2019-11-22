import React from 'react';
import './../App.css';
import {connect} from "react-redux";
import {addWindow, IStyles, IArrayAlerts} from "../redux/reducer";
import {AppStateType} from "../redux/store";
import Popup from "./Popup";
import {Dispatch} from "redux";


interface IMapStateProps {
    alerts: Array<IArrayAlerts>
}

interface IMapDispatchProps {
    addWind: (styles: IStyles) => void
}

type CommonProps = IMapStateProps & IMapDispatchProps

const MainContent = ({alerts, addWind}: CommonProps) => {

    return <main>
        <div className="main">
            {alerts.map(
                (al, i) => (<button
                    key={i}
                    className='buttons' style={al.styles}
                    onClick={() => {
                        addWind(al.styles)
                    }}>
                    {al.title}
                </button>))}
        </div>
        <Popup/>
    </main>
};

const mapStateToProps = (state: AppStateType): IMapStateProps => ({alerts: state.alert.alerts});
const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchProps => {
    return {
        addWind: (styles: IStyles) => dispatch(addWindow(styles))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);