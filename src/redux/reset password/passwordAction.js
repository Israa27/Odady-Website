import {passwordResetPending, passwordResetSuccess, updatePasswordSuccess, passwordResetFail} from "./passwordSlice";

import { sendPassword, updateUserPassword } from "../../Helpers/api/PasswordApi";

export const sendPasswordReset = (email) => async (dispatch) => {
	try {
		dispatch(passwordResetPending());

		const { status, message } = await sendPassword(email);

		if (status === "success") {
			return dispatch(passwordResetSuccess({ message, email }));
		}

		dispatch(passwordResetFail(message));
	} catch (error) {
		dispatch(passwordResetFail(error.message));
	}
};
export const updatePassword = dataForm => async dispatch => {
	try {
		dispatch(passwordResetPending());

		const { status, message } = await updateUserPassword(dataForm);

		if (status === "success") {
			return dispatch( updatePasswordSuccess(message));
		}

		dispatch(passwordResetFail(message));
	} catch (error) {
		dispatch(passwordResetFail(error.message));
	}
};