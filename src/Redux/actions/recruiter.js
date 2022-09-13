import axios from "../../helpers/axios";
import { GET_DETAIL_RECRUITER_PENDING, GET_DETAIL_RECRUITER_SUCCESS, GET_DETAIL_RECRUITER_FAILED } from "store/types";

export const getDetailRecruiter = (id) => async (dispatch) => {
	try {
		dispatch({
			type: GET_DETAIL_RECRUITER_PENDING,
			payload: null,
		});

		const response = await axios({
			method: "get",
			url: `users/${id}`,
		});

		dispatch({
			type: GET_DETAIL_RECRUITER_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: GET_DETAIL_RECRUITER_FAILED,
			payload: error.message,
		});
	}
};

export const updateUser = (data) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`users`, data)
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

// export const updatePhoto = (data) => {
// 	return new Promise((resolve, reject) => {
// 		axios
// 			.put(`users/photo`, data)
// 			.then((res) => {
// 				resolve(res.data);
// 			})
// 			.catch((err) => {
// 				reject(err);
// 			});
// 	});
// };
