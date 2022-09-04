import axios from "axios"
import { DELETE_MY_ITEM_FAILED, DELETE_MY_ITEM_LOADER, DELETE_MY_ITEM_SUCCESS, MY_ITEM_FAILED, MY_ITEM_LOADER, MY_ITEM_SUCCESS } from "../Constants/MyItemsConstants"

export const getMyItems = (email) => async (dispatch) => {
    dispatch({ type: MY_ITEM_LOADER })
    try {
        const result = await axios.get(`https://fresh-fruit-new-server.onrender.com/fruit/${email}`)
        dispatch({ type: MY_ITEM_SUCCESS, payload: result.data })
    }
    catch (error) {
        dispatch({ type: MY_ITEM_FAILED, payload: error.message })

    }
}
export const deleteMyItem = (id) => async (dispatch) => {
    dispatch({type: DELETE_MY_ITEM_LOADER})
    try{
        const result = await axios.delete(`https://fresh-fruit-new-server.onrender.com/fruit/del/${id}`)
        dispatch({type: DELETE_MY_ITEM_SUCCESS, payload: result.data})
    }
    catch(error){
        dispatch({ type: DELETE_MY_ITEM_FAILED, payload: error.message})
    }
}

// decreasing value one by one by clicking on decrease button form myItems modal or update modal

// export const updateMyItem = async (id) =>{
//     const result = await axios
// } 