import React ,{useState}from 'react';
import "./index.css";
import { generate } from 'random-words';
import image from "../assets/loginImg1.png";
import { getUser} from '../LocalStorageUtils';


function UserPage({name,email}){

    const user = getUser();


    const [wordsArray, setWordsArray] = useState(() => {
  return `👋 Welcome back, ${getUser()?.name || "User"}! You can manage your account settings here.`;
});

    return(
        <div className="parentDiv">
         <div className='home1'>
            <header>
                <p style={{fontWeight: '800', borderBottom: "1px solid black", padding:"10px"}}>Account Settings</p>
            </header>
            <section style={{display: "flex",justifyContent:"start",gap:"1rem" ,padding: "10px",alignItems:"start"}}>
                
                <div><img src={image} alt="image" style={{borderRadius:"70%",width: "50px",height:"50px"}}/></div>
                <div>
                    <p style={{fontSize:"0.8rem",fontWeight:"800"}}>{user.name}</p>
                    <p style={{fontSize:"0.8rem",fontWeight:"400"}}>{user.email}</p>
                </div>
            </section>
            <footer style={{padding: "10px",borderBottomStyle:"dotted",color:"#9A9DA0"}}>
                    <div style={{color:'black',height: '100px'}}>
                        {wordsArray}
                    </div>

            </footer>
                                
               </div>
                
        </div>
    )
}

export default UserPage;