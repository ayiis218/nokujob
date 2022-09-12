import { combineReducers } from "redux";
import JobSeeker from "./JobSeeker";
import recruiter from "./Recruiter";

const rootReducer = combineReducers({ JobSeeker, recruiter });

export default rootReducer;
