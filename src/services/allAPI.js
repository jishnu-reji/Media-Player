import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

//upload video - store video in http://localhost:3000/videos
export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}

//get video api call by view
export const getAllVideosAPI = async() =>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}

export const saveHistoryAPI = async (videoDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

export const getHistoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

export const removeHistoryAPI = async (videoId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})   //while using DELETE method give body as an empty object
}

export const removeVideoAPI = async (videoId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

export const addCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

export const removeCategoryAPI = async (categoryId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}

export const getAVideoAPI = async (videoId) =>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}

export const getSingleCategoryAPI = async (categoryId) =>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}

export const updateCategoryAPI = async (categoryId,updatedCategoryDetails) =>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
}