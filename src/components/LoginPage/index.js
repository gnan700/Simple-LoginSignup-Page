import React,{useState} from "react";
import "./index.css";
import { generate } from "random-words";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { getUser, saveUser } from "../LocalStorageUtils";

function LoginPage() {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    

    const [wordsArray,setWordsArray] = useState(()=>{
        return generate({exactly: 10, join: " "});
    });

    const handleLogin = () => {
        const storedUser = getUser();
    
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigate("/UserPage")
        } else {
          alert('Invalid email or password');
        }
    }
    return (
        <div className="parentDiv">
         <div className='home'>
              
               <div className='head'>
                    <p style={{fontWeight: '800',fontSize: '1.5rem'}}>Signin to your PopX account</p>
                    <div style={{color:'#9A9DA0',height: '50px'}}>
                        {wordsArray}
                    </div>
                </div>
            <form style={{display:"flex",flexDirection:"column",marginTop:"2rem"}}>
             <Input
                type="email"
                label={"Email address"}
                state={email} 
                setState={setEmail} 
                placeholder={"email@gmail.com"}
                />

             <Input
                type="password"
                label={"Password"} 
                state={password} 
                setState={setPassword} 
                placeholder={"password"}/>
            </form>

               <div className='btn'>
                   <button className='btn3' onClick={handleLogin}>Login</button>
               </div>
              
                
        </div>


      </div>
    )
}

export default LoginPage;
