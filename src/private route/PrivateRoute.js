import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess } from "../redux/loginSlice";
import { getUserProfile } from "../redux/userAction";
import { getNewAccessToken} from "../Helpers/api/userLogin";


export const PrivateRoute = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.login);
	const { user } = useSelector(state => state.user);

	useEffect(() => {
        const updateAccessJWT = async () => {
			const result = await getNewAccessToken();
			result && dispatch(loginSuccess());
		};

		!user._id && dispatch(getUserProfile());

		!JSON.parse(localStorage.getItem("token")) && updateAccessJWT();

		!isAuth && JSON.parse(localStorage.getItem("token")) && dispatch(loginSuccess());
	}, [dispatch, isAuth, user._id]);;

	return (
			 isAuth ? children : <Navigate to="/login" />
		 
	)
};