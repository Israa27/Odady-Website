import axios from "axios"
const URL='https://fakestoreapi.com';
const RegisterURL='https://61edf167634f2f00170ced9e.mockapi.io/odday/api/ragister';
const loginURL =URL + '/auth/login';
const logoutURL=URL +'user/logout';
const userProfileURL=URL + '/users';
const newAccessTokenURL=URL +'token';

export const userRegister=dataForm => {
  return new Promise(async(resolve,reject)=>{
    try{
        const res= await axios.post(RegisterURL,dataForm);
        resolve(res.data);
        if (res.status === 201){
            let data = res.data;
            localStorage.setItem('user', JSON.stringify(data))
            
        }

    }catch(error){
        console.log(error.message);
        reject(error)
    }
  })
}
export const userLogin=dataForm => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginURL, dataForm);
      console.log(res)
      resolve(res.data);

      if (res.status === 200 ) {
        let data=res.data.token;
        console.log(res.status);
        localStorage.setItem("token",JSON.stringify(data));
      }
    } catch (error) {
      reject(error);
    }
  });
}


export const userLogout=async() => {
  try {
    await axios.delete(logoutURL,{
      headers:{
        Authorization:JSON.parse(localStorage.getItem("token"))
      }
    })
  }
  catch(error){
    console.log(error)
  }
}



export const getUser=() => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        reject("Token not found!");
      }

      const res = await axios.get(userProfileURL, {
        headers: {
          Authorization: token,
        },
      });

      resolve(res.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });

};

export const getNewAccessToken=() => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshToken } = JSON.parse(localStorage.getItem("token"));

      if (!refreshToken) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessTokenURL, {
        headers: {
          Authorization: refreshToken,
        },
      });

      if (res.status === 200) {
        localStorage.setItem(
          "token",
          JSON.stringify({ refreshToken: res.data.token })
        );
      }

      resolve(true);
    } catch (error) {
      if (error.message === 403) {
        localStorage.removeItem("token");
      }

      reject(false);
    }
  });

}
