import React ,{useState} from 'react';
import "./index.css";
import { Checkbox } from 'antd';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';
import { getUser, saveUser } from '../LocalStorageUtils';


function SignupPage(){

    const navigate = useNavigate();

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phoneNumber,setPhoneNumber] = useState("");
    const[password,setPassword] = useState("");
    const[companyName,setCompanyName] = useState("");
    const[isAgency, setIsAgency] = useState(false);

    const handleSignup = () => {
      if (!name || !email || !password || !companyName || !phoneNumber) {
        alert('All fields are mandatory');
        return;
      }
  
      const storedUser = getUser();
  
      // Check if the email is already registered
      if (storedUser && storedUser.email === email) {
        alert('Email already registered');
      } else {
        
        const newUser = {
          name,
          email,
          password,
          companyName,
          phoneNumber,
          isAgency,
        };
        navigate("/UserPage")
  
        saveUser(newUser);
        // Redirect to the user page or trigger login after registration
    
    }
    };
  
    return(
        <div className='parentDiv'>
          <div className='home'>
             <div className='head'>
                    <p style={{fontWeight: '800',fontSize: '1.5rem'}}>Create your PopX account</p>
             </div>
             <form style={{display:"flex",flexDirection:"column",marginTop:"1rem"}}>
             <Input
                type="text"
                label={"Full Name"}
                state={name} 
                setState={setName} 
                placeholder={"full name"}
                />

             <Input
                type="number"
                label={"Phone Number"} 
                state={phoneNumber} 
                setState={setPhoneNumber} 
                placeholder={"+91 0000000000"}/>

             <Input
                type="email"
                label={"Email address"} 
                state={email} 
                setState={setEmail} 
                placeholder={"email@gmail.com"}/>

             <Input
                type="password"
                label={"Password"} 
                state={password} 
                setState={setPassword} 
                placeholder={"password"}/>

             <Input
                type="text"
                label={"Company Name"} 
                state={companyName} 
                setState={setCompanyName} 
                placeholder={"company name"}/>

   

                <div>
                    <p>Are you an Agency?</p>
                    <Checkbox checked={isAgency} onChange={() => setIsAgency(!isAgency)} >Yes</Checkbox>
                    <Checkbox checked={!isAgency} onChange={() => setIsAgency(!isAgency)} >No</Checkbox>
                </div>
             </form>
            <div className='btn'>
            <button className='btn1' onClick={handleSignup}>Create Account</button>
            </div>
          </div>
        </div>
    )
}

export default SignupPage;