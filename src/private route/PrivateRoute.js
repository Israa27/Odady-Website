import React, { useEffect } from "react";
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Routes } from "react-router-dom";
import { loginSuccess } from "../redux/loginSlice";
import { getUserProfile } from "../redux/user/userAction";
import { getNewAccessToken} from "../Helpers/api/userLogin";
import Layouts from '../layouts/Layouts'

export const PrivateRoute = ({ children, ...rest }) => {
	const navigate=useNavigate();
	const dispatch = useDispatch();
	const  isAuth  = useSelector(state => state.login);
	

	useEffect(() => {

		!isAuth && JSON.parse(localStorage.getItem("token")) ;
	}, [dispatch]);;

	return (
		  
		 

			 isAuth ? <Layouts>{children}</Layouts>  :
		
			 Swal.fire({
				icon: 'error',
				title: 'عذرا لا يمكن الدخول الى صفحة قبل تسجيل الدخول',
				text: 'يرجى تسجيل الدخول  ',
				footer: '<a href="/">هل تريد الرجوع الى صفحة الرئيسة?</a>'
				
			  }).then(function() {
				window.location = "/login";
			})
		
			  

	)
};