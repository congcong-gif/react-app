import HTTP from "./http"

export default function login(data) {
    return function (dispatch) {
     return   HTTP.post("/user/login",data).then(res=>{
            console.log('登录信息',res);
            if (res.data.code == 0) {
                dispatch({
                    type:"LOGIN",
                    user:data.username
                })
            }
            return res.data
        })
    }
}