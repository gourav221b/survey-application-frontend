import api from "../../api/api";
import { HTTPCONSTANT } from "../../constants/httpConstants";
import { ROLES } from "../../constants/RoleConstants";
import { Authorization, generateObject, setCookie, stringifyData } from "../../functions";
import { ActionTypes } from "../constants/ActionTypes";

export const uploadStory = (data) => async (dispatch) => {
    console.log(data)
    var config = {
        method: 'post',
        // data: JSON.stringify({ "genre": { "data": ["test"] }, "geography": "India", "uploaded_by": "source.one@gmail.com", "language": "english" }),
        data: data,
        headers:
        {
            'Content-Type': 'application/json',
        }
    };

    try {
        dispatch({ type: ActionTypes.UPLOAD_STORY_ATTEMPT })

        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.STORY_UPLOAD, enrichedConfig);
        console.log((response?.data));
        //console.log(JSON.stringify(response));
        if (response?.data?.status !== 'False') {

            dispatch({ type: ActionTypes.UPLOAD_STORY_SUCCESS })

        }
        else if (response?.data?.status === 'False') {
            dispatch({
                type: ActionTypes.UPLOAD_STORY_FAIL,
                payload: response?.data?.detail
            })
        }




        // navigate('/dashboard',from, { replace: true });
    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'Bad Request'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'Couldnt Upload Story! Try again later'
                }
            )
        }

    }
}
export const fetchStory = () => async (dispatch) => {
    var config = {
        method: 'get',
        headers:
        {
            'Content-Type': 'application/json',
        },
    };

    localStorage.removeItem('currentStatus')
    try {
        dispatch({ type: ActionTypes.FETCH_ALL_STORIES_ATTEMPT })

        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.FETCH_ALL_STORY, enrichedConfig);
        console.log((response));
        if (response?.data) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_SUCCESS,
                    payload: response?.data?.reverse()
                }
            )
        }
    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'Bad Reequest'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'Something went wrong! Try again later'
                }
            )
        }

    }
}

export const uploadWriterStory = (data) => async (dispatch) => {

    // for (let pair of data) {
    //     console.log(pair[0], " ", pair[1])
    // }
    var config = {
        method: 'post',
        // data: JSON.stringify({ "genre": { "data": ["test"] }, "geography": "India", "uploaded_by": "source.one@gmail.com", "language": "english" }),
        data: data,
        headers:
        {
            'Content-Type': 'application/json',
        }
    };

    try {
        dispatch({ type: ActionTypes.UPLOAD_STORY_ATTEMPT })

        const enrichedConfig = Authorization(config)
        console.log(enrichedConfig)
        const response = await api(HTTPCONSTANT.WRITER_STORY_UPLOAD, enrichedConfig);
        console.log((response?.data));
        //console.log(JSON.stringify(response));
        if (response?.data?.status !== 'False') {

            dispatch({ type: ActionTypes.UPLOAD_STORY_SUCCESS })

        }
        else if (response?.data?.status === 'False') {
            dispatch({
                type: ActionTypes.UPLOAD_STORY_FAIL,
                payload: response?.data?.detail
            })
        }




        // navigate('/dashboard',from, { replace: true });
    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'Bad Request'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.UPLOAD_STORY_FAIL,
                    payload: 'Couldnt Upload Story! Try again later'
                }
            )
        }

    }
}

export const fetchWriterStory = (formData = {}) => async (dispatch) => {
    var config = {
        method: 'get',
        headers:
        {
            'Content-Type': 'application/json',
        },
        params: formData,
    };

    localStorage.removeItem('currentStatus')
    try {
        dispatch({ type: ActionTypes.FETCH_ALL_STORIES_ATTEMPT })

        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.FETCH_WRITER_STORY, enrichedConfig);
        console.log((response?.data));
        if (response?.data) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_WRITER_STORIES_SUCCESS,
                    payload: response?.data?.reverse()
                }
            )
        }
    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'Bad Reequest'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_STORIES_FAIL,
                    payload: 'Something went wrong! Try again later'
                }
            )
        }

    }
}
export const setState = (state) => async (dispatch) => {
    dispatch(
        {
            type: ActionTypes.SET_STATUS,
            payload: state
        }
    )
}
export const unsetState = () => async (dispatch) => {
    dispatch(
        {
            type: ActionTypes.UNSET_STATUS
        }
    )
}
export const fetchProjects = () => async (dispatch) => {
    var config = {
        method: 'get',
        headers:
        {
            'Content-Type': 'application/json',
        }
    };


    try {
        dispatch({ type: ActionTypes.FETCH_ALL_PROJECTS_ATTEMPT })

        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.FETCH_ALL_PROJECTS, enrichedConfig);
        console.log((response));
        if (response?.data) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_PROJECTS_SUCCESS,
                    payload: response?.data
                }
            )
        }
    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_PROJECTS_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_PROJECTS_FAIL,
                    payload: 'Bad Reequest'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_PROJECTS_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.FETCH_ALL_PROJECTS_FAIL,
                    payload: 'Something went wrong! Try again later'
                }
            )
        }

    }
}

export const setCurrentStory = (story) => async (dispatch) => {

    dispatch(
        {
            type: ActionTypes.SET_CURRENT_STORY,
            payload: story
        }
    )
}

export const clearCurrentStory = () => async (dispatch) => {
    dispatch(
        {
            type: ActionTypes.SET_CURRENT_STORY,
            payload: null
        }
    )
}

export const setNewFile = (file) => async (dispatch) => {
    dispatch(
        {
            type: ActionTypes.SET_NEW_FILE,
            payload: file
        }
    )
}
export const deleteNewFile = () => async (dispatch) => {
    dispatch(
        {
            type: ActionTypes.SET_NEW_FILE,
            payload: null
        }
    )
}


export const revertToWriter = (file, author, data) => async (dispatch) => {

    var config = {
        method: 'post',
        data: JSON.stringify({
            file: file,
            commented_by: localStorage.getItem("username"),
            uploaded_by: author,
            reviewer_comment: data
        }),
        headers:
        {
            'Content-Type': 'application/json',
        }
    };

    try {
        dispatch({ type: ActionTypes.UPLOAD_STORY_ATTEMPT })

        const enrichedConfig = Authorization(config)
        const response = await api(HTTPCONSTANT.REVERT_TO_WRITER, enrichedConfig);
        console.log(response);



        dispatch({ type: ActionTypes.REVERT_TO_WRITER, payload: response?.data })

        // navigate('/dashboard',from, { replace: true });
    } catch (err) {

        if (!err?.response) {
            dispatch(
                {
                    type: ActionTypes.REVERT_TO_WRITER_FAIL,
                    payload: 'No Server Response'
                }
            )
        } else if (err.response?.status === 400) {
            dispatch(
                {
                    type: ActionTypes.REVERT_TO_WRITER_FAIL,
                    payload: 'Bad Request'
                }
            )
        } else if (err.response?.status === 401) {
            dispatch(
                {
                    type: ActionTypes.REVERT_TO_WRITER_FAIL,
                    payload: 'You Donot Have Authorization'
                }
            )
        } else {
            dispatch(
                {
                    type: ActionTypes.REVERT_TO_WRITER_FAIL,
                    payload: 'Couldnt Revert back! Try again later'
                }
            )
        }

    }
}

export const clearMessage = () => async (dispatch) => {
    dispatch(
        {
            type: ActionTypes.CLEAR_MESSAGE
        }
    )
}