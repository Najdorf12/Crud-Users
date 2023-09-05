import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function UsersForm( { addUser , userSelected, editUser }) {
 
  const {register, handleSubmit, reset , formState:{ errors }} = useForm();

  useEffect(()=> {
    if(userSelected !== null){
      reset(userSelected);
    }  else {
      reset( {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        birthday:""
      })
    }0
  },[userSelected])

  
  const submit = data => {
    
    if(userSelected !== null){
      editUser(data);
    }else{
      addUser(data);
    }
  };

  return (
    <>
   
      <section className="form-container">
        <form onSubmit={ handleSubmit(submit)}>
          
          <div className="input-container">
            <label htmlFor="user-first-name"> First Name </label>
            <input 
                id="user-first-name"
                type="text"
                 {...register("first_name", { 
                  required:{
                    value: true,
                    message: "Name is required"
                  } 
                })} 
                />
                <p className="error"> {errors.first_name?.message} </p>
          </div>
          

          <div className="input-container">
            <label htmlFor="user-last-name"> Last Name </label>
           <input 
           id="user-name" 
           type="text"
            {...register("last_name", { 
              required:{
                value: true,
                message: "Name is required"
              } 
            })} 
            />
            <p className="error"> {errors.last_name?.message} </p>
          </div>
          

          <div className="input-container">
            <label htmlFor="user-email"> Email </label>
            <input
             id="user-email" 
             type="email"
              {...register("email", { 
                required:{
                  value: true,
                  message: "Email is required"
                } 
              })} 
              />
              <p className="error"> {errors.email?.message} </p>
          </div>
          

          <div className="input-container">
            <label htmlFor="user-password"> Password </label>
            <input 
            id="user-password" 
            type="password" 
            {...register("password", { 
              required:{
                value: true,
                message: "Password is required"
              } 
            })} 
            />
             <p className="error"> {errors.password?.message} </p>
          </div>
         

          <div className="input-container">
            <label htmlFor="user-birthday"> Birthday </label>
            <input 
            id="user-birthday" 
            type="text" 
            {...register("birthday", { 
              required:{
                value: true,
                message: "Birthday is required"
              } 
            })} 
            />
            <p className="error"> {errors.birthday?.message} </p>
          </div>
        
          <button onClick={ submit } className="btn-form"> SEND </button>
       
        </form>
      </section>
    </>
  );
}
