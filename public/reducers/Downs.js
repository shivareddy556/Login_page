const instialValues={
    user:{}
}
const UserData=(state=instialValues,action)=>{
    switch(action.type){
        case "UserDetails" :return {...state,user:action.payload}
        default: return state;
    }
}
export default UserData;