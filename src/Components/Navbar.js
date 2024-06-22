import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";

export default function Navbar()

{
    const navigate = useNavigate();

    const community=(event)=>{
      event.preventDefault();
      navigate('/Creator');
          }
     
    const templates=(event)=>{
      event.preventDefault();
      navigate('/Templates');
          }      

    const cover=(event)=>{
        event.preventDefault();
        navigate('/Cover');
            }

return (
      <div className="nav">
   
      <h4 onClick={community} className="NavBut2">+</h4>
      <h4 onClick={cover} className="NavBut2">L</h4>
           

     <h2 href="/" 
      onClick={(e) => {
      e.preventDefault();
      window.location.href='/yourcustomdocs';
      }} 
     className = "SiteTitle">YourCustomDocs</h2>
            
      <h4 className="NavBut3" onClick={templates}>Templates</h4>

       
        </div>
);

}       