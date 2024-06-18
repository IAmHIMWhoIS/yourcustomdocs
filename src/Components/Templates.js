import { useNavigate } from "react-router-dom";
export default function Templtes(){
    const navigate = useNavigate();
    const handleDivClick = (extraData) => {
        navigate('/Creator', { state: { extraData } });
      };  
     


    return(
    <div className="TemplatesCont">

     <div className="Amazon" title="Amazon" onClick={(e) => handleDivClick("Amazon")}>
     <div className="circularA">
        <div className="imagewala"></div>
        <div className="deets">
        <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
        </div>
     </div>
     <div className="boxesA">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesA">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesA">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>

     <div className="Youtube" title="Youtube" onClick={(e) => handleDivClick("Youtube")}>
     <div className="circularY">
     <div className="imagewala"></div>
     <div className="deets">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>
     <div className="boxesY">
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesY">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesY">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>

     <div className="Europass" title="Europass" onClick={(e) => handleDivClick("Europass")}>
     <div className="circularE">
     <div className="imagewala"></div>
     <div className="deets">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>
     <div className="boxesE">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesE">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesE">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>

     <div className="Programming" title="Programming" onClick={(e) => handleDivClick("Programming")}>
     <div className="circularP">
     <div className="imagewala"></div>
     <div className="deets">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>
     <div className="boxesP">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesP">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     <div className="boxesP">
     <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
    <div className="lines"></div>
     </div>
     </div>

 
    </div>
    );
}