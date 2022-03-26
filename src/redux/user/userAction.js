import {getUserFail,getUserSuccess,getUserPending} from './userSlice';
import { getUser} from '../../Helpers/api/userLogin';
export const getUserProfile=()=>async(dispatch)=>{
    try{
        dispatch(getUserPending());
        const data =  await getUser();
    
        if(data)
           return dispatch(getUserSuccess(data));
        
        dispatch(getUserFail("User Not Found"))
    }
    catch(error){
        dispatch(getUserFail(error))

    }

}