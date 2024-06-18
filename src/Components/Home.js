import { useNavigate } from "react-router-dom";

import Fabula from '../Images/l4.PNG'
import logo from '../Images/logo.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaYoutube,FaTwitter,FaFacebook,FaInstagram } from 'react-icons/fa';
import Search from '../Images/l3.PNG'
export default function Home(){
    const navigate = useNavigate();
    const resume=(event)=>{
        event.preventDefault();
        navigate('/Creator');
            }
    const contact=(event)=>{
      event.preventDefault();
      //
          }
    const privacy=(event)=>{
      event.preventDefault();
      navigate('/Privacy');
          } 
    const terms=(event)=>{
      event.preventDefault();
      navigate('/TC');
                } 
     const faqs=(event)=>{
       event.preventDefault();
       //
           } 
                                     
       
      const Letter=(event)=>{
        event.preventDefault();
        navigate('/Cover');
            }  
        const toaster = ()=>{
            toast.info("Coming Soon!")
            }
                
    return(
    <div className="HomeMain">
     <div className="Homebox">
        <div className="Top1">
            <div style={{ backgroundImage: `url(${Fabula})` }} className="FImage1"></div>
        <div className="Top1text">
            <h2>Create Custom Cirriculum Vitalae and Cover Letters</h2>
            <t>100% free and easy to use</t>
        </div>
        </div>
      <div className="boxcont">
        <div className="Homeboxbut">
          
            <div className="CLPic" onClick={resume}> Create My Resume</div>
            <div className="CVPic" onClick={Letter}>Create My Cover Letter</div>
            <div className="Gtext">Your ideal professional documents just a click away</div>

    </div>
     </div>
     <div className="Top2_text">
        <div className="Top1text">
            <h2>Just add your details and work the magic</h2>
            <t className="parat">Our user friendly tool will help you in creating any type of CV and Cover Letter you can imagine, with the variety of options we provide you are sure to catch the eye of job providers all around the world</t>
        </div>
        <div style={{ backgroundImage: `url(${Search})` }} className="FImage2"></div>
    
     
     </div>
     <div className="footer">
 <div>
  <ul>
  <li className="row">
    <img src={logo}
    alt="Shaka Was Here"
    style={{height:"150px",width:"110px",marginRight:"35px",padding:"0px"}}></img>
    </li> 
    </ul>
  </div>

  <div className="row">
  <ul className="liststyle">
  <li className="smi" onClick={toaster}><FaYoutube style={{cursor:"pointer", width:"25px", height:"35px"}}/></li>      
  <li className="smi" onClick={toaster}><FaFacebook  style={{cursor:"pointer", width:"25px", height:"35px"}}/></li>
  <li className="smi" onClick={toaster}><FaTwitter style={{cursor:"pointer", width:"25px", height:"35px"}}/></li>
  <li className="smi" onClick={toaster}><FaInstagram style={{cursor:"pointer", width:"25px", height:"35px"}}/></li>
      </ul>
  </div>

  <div className="row">
    <ul className="liststyle">
    <li onClick={(e) => contact(e)}><a href="/contact">Contact us</a></li>
    <li onClick={(e) => privacy(e)}><a href="/privacy">Privacy Policy</a></li>
    <li onClick={(e) => terms(e)}><a href="/terms">Terms &amp; Conditions</a></li>
    <li onClick={(e) => faqs(e)}><a href="/faqs">FAQs</a></li>
     
    </ul>
  </div>

  <div className="row">
    <p style={{marginLeft:"13px",marginBottom:"10px"}}>Copyright © 2024 CustomCV - All rights reserved</p>
  </div>
</div>
      </div>
     
<ToastContainer />
       </div>
    
    );
}