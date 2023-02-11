import api from "../../api/api";
import { Authorization, eraseAuth, getCookie } from "../../functions";
import { ActionTypes } from "../constants/ActionTypes";
import useAuth from '../../hooks/useAuth';
import { ROLES } from "../../constants/RoleConstants";
import { setCookie, eraseCookie } from '../../functions/index'
import { HTTPCONSTANT } from "../../constants/httpConstants";

export const fetchDashboard = () => async (dispatch) => {

    var config = {
        method: 'get',
        headers:
        {
            'Content-Type': 'application/json',
        },
    };

    try {
        dispatch(
            {
                type: ActionTypes.FETCH_SCOUT_DASHBOARD_ATTEMPT
            }
        )
        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.FETCH_SCOUT_DASHBOARD, enrichedConfig
        );
        // console.log(response?.data);
        if (response?.data) {

            dispatch(
                {
                    type: ActionTypes.FETCH_SCOUT_DASHBOARD,
                    payload: response?.data
                }
            )

        }

    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.FETCH_SCOUT_DASHBOARD_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.FETCH_SCOUT_DASHBOARD_FAIL,
                    payload: 'Check Credentials and Try Again'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.FETCH_SCOUT_DASHBOARD_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.FETCH_SCOUT_DASHBOARD_FAIL,
                    payload: 'Login Failed'
                }
            )
        }

    }
}


export const fetchWriterDashboard = () => async (dispatch) => {

    var config = {
        method: 'get',
        headers:
        {
            'Content-Type': 'application/json',
        },
    };

    try {
        dispatch(
            {
                type: ActionTypes.FETCH_WRITER_DASHBOARD_ATTEMPT
            }
        )
        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.FETCH_WRITER_DASHBOARD, enrichedConfig);
        console.log(response?.data);
        if (response?.data) {

            dispatch(
                {
                    type: ActionTypes.FETCH_WRITER_DASHBOARD,
                    payload: response?.data
                }
            )

        }

    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.FETCH_WRITER_DASHBOARD_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.FETCH_WRITER_DASHBOARD_FAIL,
                    payload: 'Check Credentials and Try Again'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.FETCH_WRITER_DASHBOARD_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.FETCH_WRITER_DASHBOARD_FAIL,
                    payload: 'Login Failed'
                }
            )
        }

    }
}