import axios from "axios";
const server = `http://localhost:8000`
export const getfashion = num => axios.get(`${server}/admin/dlearn/fashion2?num=${num}`)
export const postfashion = req => axios.post(`${server}/admin/dlearn/fashion`,req)