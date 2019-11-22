import { Dispatch } from "redux";

export const ADD_WINDOW = 'ADD_WINDOW';
const DELETE_POP_UP = 'DELETE_POP_UP';

export interface IAddWindow {
    type: typeof ADD_WINDOW
    styles: IStyles
}

export interface IStyles {
    border: string
}

interface IDeletePopUp {
    type: typeof DELETE_POP_UP
}

export interface IReducerState {
    alerts: Array<IArrayAlerts>
    popUpAlerts: Array<IArrayPopUpAlerts> /*IArrayPopUpAlerts[]*/
}

export interface IArrayPopUpAlerts {
    id: number
    text?: string
    styles: { border: string }
}

export interface IArrayAlerts {
    id: number
    title: 'Success' | 'Warning' | 'Error'
    styles: IStyles
}

const initialState: IReducerState = {
    alerts: [
        {id: 1, title: 'Success', styles: {border: '2px solid green'}},
        {id: 2, title: 'Warning', styles: {border: '2px solid yellow'}},
        {id: 3, title: 'Error', styles: {border: '2px solid red'}}
    ],
    popUpAlerts: []
};

const alertReducer = (state = initialState, action: IAddWindow | IDeletePopUp): IReducerState => {
    switch (action.type) {
        case ADD_WINDOW: {
            let newPopup = {
                id: state.popUpAlerts.length,
                styles: action.styles,
                text: 'yo'
            };
            return {
                ...state,
                popUpAlerts: [...state.popUpAlerts, newPopup]
            }
        }
        case DELETE_POP_UP: {
            let newArray = state.popUpAlerts.filter(pop => (pop.id ));
            return {
                ...state,
                popUpAlerts: newArray
            }
        }
        default:
            return state;
    }
};

// export const addWindowTC = (title: string) => async(dispatch: Dispatch) => {
// };

// export const getPosts = () => async (dispatch) => {
//     const result = await api.getPosts();
//     if(result.status === 200) {
//         dispatch(setPost(result.data))
//     }
// };

export const addWindow = (styles: IStyles): IAddWindow => ({type: ADD_WINDOW, styles});
// export const deletePopUp = () => ({type: DELETE_POP_UP});

export default alertReducer;