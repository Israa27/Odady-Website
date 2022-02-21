import axios from "axios"
const URL='http://localhost:3000/v1/';
const passwordURL=URL +'user/reset-password';
const updatePasswordURL = URL + "user/reset-password";

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

export const updateUserPassword = password => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.patch( updatePasswordURL, password);

			console.log(data);
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};