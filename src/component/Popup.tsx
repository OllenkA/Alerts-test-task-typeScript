import React from 'react';
import './../App.css';
import {connect} from "react-redux";
import {addWindow, IArrayPopUpAlerts} from "../redux/reducer";
import {AppStateType} from "../redux/store";


interface IPopup {
    popUpAlerts: Array<IArrayPopUpAlerts>;
}

const Popup: React.FC<IPopup> = (props) => {
    return <aside className="pop">
        {props.popUpAlerts.map((pop) => {
            return <section key={pop.id} className='popup' style={pop.styles}>
                {pop.text}
            </section>
        })}

    </aside>
};

const mapStateToProps = (state: AppStateType) => ({
    popUpAlerts: state.alert.popUpAlerts,
});

export default connect(mapStateToProps, {addWindow})(Popup);