import axios from "axios"
import { MY_ITEM_FAILED, MY_ITEM_LOADER, MY_ITEM_SUCCESS } from "../Constants/MyItemsConstants"

export const getMyItems = (email) => async (dispatch) => {
    dispatch({ type: MY_ITEM_LOADER })
    try {
        const result = await axios.get(`http://localhost:5000/fruit/${email}`)
        dispatch({ type: MY_ITEM_SUCCESS, payload: result.data })
    }
    catch (error) {
        dispatch({ type: MY_ITEM_FAILED, payload: error.message })

    }
}