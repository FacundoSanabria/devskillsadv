import axios from "axios";
import { API } from "./Endpoints";

async function getToken(){
    const data = {
        username: 'sarah',
        password: 'connor',
    }
    let res = await axios.post(API.GET_TOKEN, data)
    if(res.status = 200){
        return res.data;
    }
}

export const axiosInterceptors = ()=>{
    axios.interceptors.request.use(
        async request => {
            if(request.url === API.GET_TOKEN){ // previene bucles infinitos
                return request;
            }
            if(!window.sessionStorage.getItem("token")){
                const data = {
                    username: 'sarah',
                    password: 'connor',
                }
                await axios.post(API.GET_TOKEN, data)
                .then(res=>{
                    console.log(res.data.token);
                    window.sessionStorage.setItem('token', res.data.token);
                })
                .catch(err =>{
                    console.log(err); 
                })
                request.headers['Authorization'] = 'Bearer '+ window.sessionStorage.getItem("token");
                return request;
            }
            request.headers['Authorization'] = 'Bearer '+ window.sessionStorage.getItem("token");
            return request;
        },
        error => {
            return Promise.reject(error);
        }
    ) 
 
    axios.interceptors.response.use(
        undefined, 
        async err => {
            const originalConfig = err.config;
            if(err.response.status === 401 && err.response.data.message === 'The token has expired'){
                console.log("token vencido, request new token");
                const data = {
                    username: 'sarah',
                    password: 'connor',
                }
                await axios.post(API.GET_TOKEN, data)
                .then(res=>{
                    console.log(res.data.token);
                    window.sessionStorage.setItem('token', res.data.token);
                    console.log("token cargado")
                })
                .catch(err =>{
                    console.log(err); 
                })
                originalConfig.headers['Authorization'] = 'Bearer '+ window.sessionStorage.getItem("token");
                return axios(originalConfig);
            }
            return Promise.reject(err);
        }
    )  
}