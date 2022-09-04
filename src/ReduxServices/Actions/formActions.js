import axios from "axios";
import { FORM_DATA_ERROR, FORM_DATA_LOADER, FORM_DATA_SENDER } from "../Constants/formConstants";


export const sendingFormData = (data) => async (dispatch) => {
    
    dispatch({ type: FORM_DATA_LOADER })
    try {
        const result = axios.post("https://fresh-fruit-new-server.onrender.com/formData", data)
        dispatch({ type: FORM_DATA_SENDER, payload: result.data })
    }
    catch (error) {
        dispatch({ type: FORM_DATA_ERROR, payload: error.message })
    }
}