import { ActionTypes } from "../constants/ActionTypes";

var initialState = {
    dashboard: null,
    message: null,
    trial: false,
    trial: false,
    writerDashboard: null,

}

const dashboardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_SCOUT_DASHBOARD_ATTEMPT:
            return { ...state, dashboard: null, message: null, trial: true }
        case ActionTypes.FETCH_SCOUT_DASHBOARD:
            return { ...state, dashboard: payload, message: null, trial: false }
        case ActionTypes.FETCH_SCOUT_DASHBOARD_FAIL:
            return { ...state, dashboard: null, message: payload, trial: false }


        case ActionTypes.FETCH_WRITER_DASHBOARD_ATTEMPT:
            return { ...state, writerDashboard: null, message: null, trial: true }
        case ActionTypes.FETCH_WRITER_DASHBOARD:
            return { ...state, writerDashboard: payload, message: null, trial: false }
        case ActionTypes.FETCH_WRITER_DASHBOARD_FAIL:
            return { ...state, writerDashboard: null, message: payload, trial: false }

        default:
            return state
    }
}


export default dashboardReducer