import apiToken from './apiToken'
import axios from 'axios'
export const postRequest = async ({ url, data }) => {
  const response = await apiToken.post(url, data)
  return response.data
}

export const getRequest = async ({ url }) => {
  const response = await apiToken.get(url)
  return response.data
}

export const deleteRequest = async ({ url }) => {
  const response = await apiToken.delete(url)
  return response.data
}

export const login = async ({ url, data }) => {
  const response = await axios.post(url, data)
  if(!response.data.error){
    console.log(response)
    console.log(response.data)
    localStorage.setItem('team_token', response.data)
  }
  if(response.data.error){
    alert(response.data.error)
  }
  return response.data
}
