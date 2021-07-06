import * as axios from "axios";

const instance = axios.create({
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {"API-KEY": "2d125ff6-566c-49e6-b2b5-ccdcd757752f"}
})

export const usersAPI = {
  getUsers:(currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  getOneUser:(userId) => {
    return profileAPI.getProfile(userId)
    console.warn("You use the old version for getProfile Method : ./src/api/api.js")
    //return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  unFollow:(id)=> {
    return instance.delete(`follow/${id}`)
  },
  follow:(id) => {
    return instance.post(`follow/${id}`)
  }
}

export const authAPI = {
  me:() => {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login:(email,password,rememberMe= false) => {
    return instance.post(`auth/login`,{ email,password,rememberMe });
  },
  logout:() => {
    return instance.delete(`auth/login`);
  }
}

export const profileAPI = {
  getProfile:(userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus:(userId)=>{
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus:(status)=>{
    return instance.put(`profile/status`,{status}).then((response) => response.data);
  }
}
