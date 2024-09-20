import axios from "axios"
import { constants } from "../utils/constans"

export const getAllCards = async()=>{
    const response = await axios.get(constants.urlApi + "/api/cards")
    return response.data
}