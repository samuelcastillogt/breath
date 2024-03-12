import axios from "axios"

export const getAllData = async()=>{
    const urls = []
    const response = await axios.get("https://www.googleapis.com/blogger/v3/blogs/6453803480920778505/pages?key=AIzaSyCUbCHfwnO1P8oRvK1iHASDBaByyvPuEmE")
    response.data.items.forEach((i)=> urls.push({url: i.url, title: i.title}))
    console.log(urls)
    return urls
}