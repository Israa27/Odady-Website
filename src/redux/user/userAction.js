import {getUserFail,getUserSuccess,getUserPending} from './userSlice';
import { getUser} from '../../Helpers/api/userLogin';
export const getUserProfile=()=>async(dispatch)=>{
    try{
        dispatch(getUserPending());
        const data =  await getUser();
    
        if(data.user && data.user._id)
           return dispatch(getUserSuccess(data.user));
        
        dispatch(getUserFail("User Not Found"))
    }
    catch(error){
        dispatch(getUserFail(error))

    }

}