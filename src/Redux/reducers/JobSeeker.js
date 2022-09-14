import { GET_DETAIL_SEEKER_PENDING, GET_DETAIL_SEEKER_SUCCESS, GET_DETAIL_SEEKER_FAILED } from "../types";

const initialState = {
	isLoading: false,
	isError: false,
	data: [],
	error: null,
	pagination: [],
};

const detailWorkerReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DETAIL_SEEKER_PENDING:
			return { ...state, isLoading: true };
		case GET_DETAIL_SEEKER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload.data,
			};
		case GET_DETAIL_SEEKER_FAILED:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default detailWorkerReducer;
