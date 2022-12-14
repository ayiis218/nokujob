import axios from "axios";
import Cookies from "js-cookie";


const interceptor = axios.create({
	baseURL: `${process.env.REACT_APP_API_URL}`,
});

interceptor.interceptors.request.use(
	function (config) {
		config.headers = {
			Authorization: `Bearer ${Cookies.get("token")}`,
		};
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

interceptor.interceptors.request.use(function (config) {
	return config;
});

export default interceptor;
