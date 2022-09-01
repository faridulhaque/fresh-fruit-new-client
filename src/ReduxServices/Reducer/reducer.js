import { FORM_DATA_ERROR, FORM_DATA_LOADER, FORM_DATA_SENDER } from "../Constants/formConstants";
import { ALL_ITEM_ERROR, ALL_ITEM_LOADER, ALL_ITEM_RECEIVER } from "../Constants/allItemsConstants"

const initialStateForm = {
    data: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialStateForm, action) => {
    // reducing form data sending from form.js 
    switch (action.type) {
        case FORM_DATA_LOADER:
            return {
                ...state,
                isLoading: true
            }
        case FORM_DATA_SENDER:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            }
        case FORM_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                data: [],
                error: action.payload
            }
        // getting data for all items 
        case ALL_ITEM_LOADER:
            return {
                ...state,
                data: [],
                isLoading: true,
                error: null
            }
        case ALL_ITEM_RECEIVER:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            }
        case ALL_ITEM_ERROR:
            return {
                ...state,
                data: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
export default reducer;