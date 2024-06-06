import axios from "axios"
import { constants } from "../utils/constans"

export const getAllData = async()=>{
    const response = await axios.get(constants.urlApi + "/api/blogger")
    return response.data
}