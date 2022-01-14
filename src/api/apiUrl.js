const API = process.env.NODE_ENV==="production" ? "https://cwnn-api.herokuapp.com/api" : "http://localhost:8000/api"

const AUTH = `${API}/auth`

export const LOGIN = `${AUTH}/login`
export const REGISTER = `${AUTH}/register`

