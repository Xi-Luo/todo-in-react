import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000/"

// axios.interceptors.response.use(res => res.data, err => Promise.reject(err))

const request = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 5000
})

request.interceptors.request.use(config => config, err => Promise.reject(err))
request.interceptors.response.use(res => res, err => Promise.reject(err))

export default request