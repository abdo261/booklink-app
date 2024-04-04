import { authAction } from "../slices/authSlice";
import { request } from "../../utils/request";
import {toast} from 'react-toastify'
export const loginUser = (user,cb) => {
  return async (dispatch) => {
    dispatch(authAction.setErrors(null));
    dispatch(authAction.setLoading(true));
    await request.post("/login", user)
    .then((res) => {
      console.log(res.data);
      dispatch(authAction.setErrors(null));
      const {user,token}= res.data
      dispatch(authAction.login({user,token}))
      if(user.remumber){
        localStorage.setItem('userInfo',JSON.parse({user,token}))
      }
      toast.success(res.data.message)
      cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch(authAction.setErrors(err.response.data));
      toast.error(err.response.data.error,{
        autoClose:false
      })
    })
    .finally(() => {
      dispatch(authAction.setLoading(false));
    });

  };
};
export const RegisterUser =  (user,cb) => {
  return async (dispatch) => {
    dispatch(authAction.setErrors(null));
    dispatch(authAction.setLoading(true));
   await request.post("/register", user)
    .then((res) => {
      console.log(res.data);
      dispatch(authAction.setErrors(null));
      toast.success(res.data.message)
      cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch(authAction.setErrors(err.response.data));
      toast.error("Validation failed. Please review the form and correct any errors.",{
        autoClose:false
      })
    })
    .finally(() => {
      dispatch(authAction.setLoading(false));
    });

  };
};
