import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import{Adduser} from '../public/action/index'
function Loginpage(){
const  intialvalues= {email:"",password:""}
 const [formValues,setFormValues]=useState(intialvalues)
  const[formErrors,setFormErrors]=useState({})
  const[issubmit, setIssubmit]=useState(false)
  const state =useSelector((state)=>state);
  console.log(state);
  const dispatch=useDispatch();
  const handlechange=(e)=>{
    const{name,value}=e.target
      setFormValues({...formValues,[name]:value});
       setIssubmit(false)
  }
  const submithandler=(e)=>{
    e.preventDefault();
    dispatch(Adduser(formValues));
    // dispatch(Password(formValues));
    setFormErrors(validate(formValues))
    console.log(formValues)
    
    setFormValues({email:"",password:""}); 
    if(formValues.email !== "" && formValues.password !== ""){
      alert("formsubmitted successful")
  }
  else{
    alert("Please fill the all feilds")
  }

  }
  useEffect(()=>{
  if(Object.keys(formErrors).length===0 && issubmit){
  }
  },[formErrors])
  const validate=(values)=>{
    const errors={};
    const regex=/^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email){
      errors.email="Email is Required"
    }
    else if(regex.test(values.email)){
      errors.email="This is not a valid format"
    }
   
    if(!values.password){
      errors.password=" Password is Required"
    }
    else if(values.password> 8){
      errors.password="password must contain 4 char!!"
        }
        else if(values.password <10){
          errors.password="password cannot exceed more than 10 char!!"
            }
    return errors;
  };
  
  return(
        <div className="center">
            <div className="container">
        <h2>Login Form</h2>
      
        {/* <pre>{JSON.stringify(formValues,undefined)}</pre> */}
        <form onSubmit={submithandler}>
      
            <label ><b>Email</b></label>
            <div>
            <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder=" Enteremail"
            value={formValues.email}
            onChange={handlechange}
            />
            </div>
            <p>{formErrors.email}</p>
              <label><b>Password</b></label>
              <div>
              <input  type="password"
                name="password"
                autoComplete="off"
                placeholder="password"
                value={formValues.password}
                onChange={handlechange}
                />
             
                <p>{formErrors.password}</p>
                <button type="submit">Login</button>
              
              </div>

              {/* <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
              </div> */}
              </form>
              </div>
            </div>

       );
   }
export default Loginpage;