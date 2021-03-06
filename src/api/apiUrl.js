const API = process.env.NODE_ENV==="production" ? "https://cwnn-api.herokuapp.com/team_management" : "http://localhost:8000/team_management"

const AUTH = `${API}/auth`

export const GET_USERS = `${AUTH}/`
export const LOGIN = `${AUTH}/login`
export const UPDATE_ACCOUNT = (matric) => `${AUTH}/update_account/${matric}`
export const CREATE_USER = `${AUTH}/create_user`

