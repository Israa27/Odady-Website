import React, { useEffect } from "react";
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";

import Layouts from '../layouts/Layouts'

export const PrivateRoute = ({ children }) => {
	//const navigate=useNavigate();
	const dispatch = useDispatch();
	const  isAuth  = useSelector(state => state.login);
	

	useEffect(() => {

		!isAuth && JSON.parse(localStorage.getItem("token")) ;
	}, [isAuth,dispatch]);;

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