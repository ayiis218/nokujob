import axios from "../../helpers/axios";
import { GET_DETAIL_SEEKER_PENDING, GET_DETAIL_SEEKER_SUCCESS, GET_DETAIL_SEEKER_FAILED } from "store/types";

export const getDetailJobSeeker = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_DETAIL_SEEKER_PENDING,
			payload: null,
		});

		const response = await axios({
			method: "get",
			url: `profile`,
		});

		dispatch({
			type: GET_DETAIL_SEEKER_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: GET_DETAIL_SEEKER_FAILED,
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
