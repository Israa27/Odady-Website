import axios from "axios"
import {BASE_URL} from '../Constants';
const passwordURL=BASE_URL +'user/reset-password';
const updatePasswordURL = BASE_URL + "/auth/change-password";

export const sendPassword=(email) => {
  return new Promise(async(resolve,reject)=>{
    try{
        const {data}= await axios.post(passwordURL,{email})
       
        resolve(data);
    }catch(error){
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
    ) {
      reject(error.response.data.message);
        
    }

        console.log(error.message);
        reject(error)
    }
  })
}

export const updateUserPassword = ({password1,password2,password3}) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch( updatePasswordURL, {
        old_password: password1,
        new_password1: password2,
        new_password2: password3
      });

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};