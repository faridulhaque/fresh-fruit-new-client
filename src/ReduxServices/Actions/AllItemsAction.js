import { ALL_ITEM_ERROR, ALL_ITEM_LOADER, ALL_ITEM_RECEIVER } from "../Constants/allItemsConstants"
import axios from 'axios'

export const getAllItems = () => async (dispatch) => {
    dispatch({type: ALL_ITEM_LOADER})
    try {
        const result = await axios.get('https://fresh-fruit-new-server.onrender.com/fruits')
        dispatch({type: ALL_ITEM_RECEIVER, payload: result.data})
    }
    catch (error) {
        dispatch({type: ALL_ITEM_ERROR, payload: error.message})
    }
}