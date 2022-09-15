import axios from "../../helpers/axios";

export const login = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`auth/login`, data)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const registerRecruiter = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`auth/register`, data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const registerJobSeeker = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`auth/register`, data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
