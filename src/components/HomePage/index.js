import React,{useState} from 'react';
import "./index.css";
import{ generate} from 'random-words';
import { useNavigate } from 'react-router-dom';

function Homepage (){

    const navigate = useNavigate();

    const [wordsArray,setWordsArray] = useState(()=>{
        return generate({exactly: 10, join: " "});
    });

    return(
       <div className="parentDiv">
         <div className='home'>
               <div className='box'>
               <div className='head'>
                    <p style={{fontWeight: '800',fontSize: '1.5rem'}}>Welcome to PopX</p>
                    <div style={{color:'#9A9DA0',height: '50px'}}>
                        {wordsArray}
                    </div>
                </div>
               
               <div className='btn'>
                   <button className='btn1' onClick={()=>{
                         navigate("/SignupPage")
                   }}>Create Account</button>
                   <button className='btn2' onClick={()=>{
                      navigate("/LoginPage")
                   }}>Already Registered? Login</button>
               </div>
               </div>
                
        </div>


      </div>
      
    )
}

export default Homepage;