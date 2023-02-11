import { ActionTypes } from "../constants/ActionTypes";

var initialState = {
    uploaded: false,
    trial: false,
    message: '',
    state: '',

    stories: [],
    writerStories: [],
    projects: [],
    currentStory: null,
    file: null

}

const registerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.UPLOAD_STORY_ATTEMPT:
            return { ...state, trial: true, uploaded: false, message: 'Uploading Story....' }
        case ActionTypes.UPLOAD_STORY_SUCCESS:
            return { ...state, trial: false, uploaded: true, message: "Story Uploaded successfully" }
        case ActionTypes.UPLOAD_STORY_FAIL:
            return { ...state, trial: false, uploaded: false, message: payload }




        case ActionTypes.FETCH_ALL_STORIES_ATTEMPT:
            return { ...state, trial: true }
        case ActionTypes.FETCH_ALL_STORIES_SUCCESS:
            return { ...state, trial: false, stories: payload }

        case ActionTypes.FETCH_ALL_WRITER_STORIES_SUCCESS:
            return { ...state, trial: false, writerStories: payload }

        case ActionTypes.FETCH_ALL_STORIES_FAIL:
            return { ...state, trial: false, message: payload }

        case ActionTypes.SET_STATUS: return { ...state, state: payload }
        case ActionTypes.UNSET_STATUS: return { ...state, state: '' }

        case ActionTypes.SET_CURRENT_STORY: return { ...state, currentStory: payload }

        case ActionTypes.SET_CURRENT_FILE: return { ...state, file: payload }

        case ActionTypes.FETCH_ALL_PROJECTS_ATTEMPT: return { ...state, trial: true }
        case ActionTypes.FETCH_ALL_PROJECTS_SUCCESS: return { ...state, trial: false, projects: payload }
        case ActionTypes.FETCH_ALL_PROJECTS_FAIL: return { ...state, trial: false, message: payload }

        case ActionTypes.REVERT_TO_WRITER: return { ...state, message: payload }

        case ActionTypes.CLEAR_MESSAGE: return { ...state, message: '' }






        default:
            return state
    }
}


export default registerReducer