import { FORM_DATA_ERROR, FORM_DATA_LOADER, FORM_DATA_SENDER } from "../Constants/formConstants";
import { ALL_ITEM_ERROR, ALL_ITEM_LOADER, ALL_ITEM_RECEIVER } from "../Constants/allItemsConstants"
import { DELETE_MY_ITEM_FAILED, DELETE_MY_ITEM_LOADER, DELETE_MY_ITEM_SUCCESS } from "../Constants/deleteMyItemConstants";
import { combineReducers } from "redux";
import { MY_ITEM_LOADER, MY_ITEM_SUCCESS } from "../Constants/MyItemsConstants";

const initialStateForm = {
    formData: [],
    isFormLoading: false,
    formError: null
}
const initialStateAllItem = {
    allItemData: [],
    isAllItemLoading: false,
    allItemError: null
}
const initialStateMyItem = {
    myItemData: [],
    isMyItemLoading: false,
    myItemError: null
}
const initialStateMyItemDel = {
    myData: [],
    isMyDataLoading: false,
    myDataError: null
}


export const FormDataReducer = (state = initialStateForm, action) => {
    // reducing form data sending from form.js 
    switch (action.type) {
        case FORM_DATA_LOADER:
            return {
                ...state,
                isFormLoading: true
            }
        case FORM_DATA_SENDER:
            return {
                ...state,
                isFormLoading: false,
                formData: action.payload,
                formError: null
            }
        case FORM_DATA_ERROR:
            return {
                ...state,
                isFormLoading: false,
                formData: [],
                formError: action.payload
            }


        default:
            return state;
    }
}
export const myItemReducer = (state = initialStateMyItem, action) => {
    switch (action.type) {


        // delete my item reducing
        case MY_ITEM_LOADER:
            return {
                ...state,
                isMyItemLoading: true
            }
        case MY_ITEM_SUCCESS:
            return {
                ...state,
                isMyItemLoading: false,
                myItemData: action.payload,
                myItemError: null
            }
        case ALL_ITEM_ERROR:
            return {
                ...state,
                isMyItemLoading: false,
                myItemData: [],
                myItemError: action.payload
            }
        default:
            return state;
    }
}
export const allItemReducer = (state = initialStateAllItem, action) => {
    switch (action.type) {


        // delete my item reducing
        case ALL_ITEM_LOADER:
            return {
                ...state,
                isAllItemLoading: true
            }
        case ALL_ITEM_RECEIVER:
            return {
                ...state,
                isAllItemLoading: false,
                allItemData: action.payload,
                allItemError: null
            }
        case ALL_ITEM_ERROR:
            return {
                ...state,
                isAllItemLoading: false,
                allItemData: [],
                allItemError: action.payload
            }
        default:
            return state;
    }
}
export const myItemDeleteReducer = (state = initialStateMyItemDel, action) => {
    switch (action.type) {


        // delete my item reducing
        case DELETE_MY_ITEM_LOADER:
            return {
                ...state,
                isMyDataLoading: true
            }
        case DELETE_MY_ITEM_SUCCESS:
            return {
                ...state,
                isMyDataLoading: false,
                myData: action.payload,
                myDataError: null
            }
        case DELETE_MY_ITEM_FAILED:
            return {
                ...state,
                isMyDataLoading: false,
                myData: [],
                myDataError: action.payload
            }
        default:
            return state;
    }
}
