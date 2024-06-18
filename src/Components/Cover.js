import React, { useState, useEffect} from "react";
import '../App.css';
import {InfinitySpin} from 'react-loader-spinner';
import html2canvas from 'html2canvas';
import { FaParagraph,FaPen, FaLine,FaFacebook,FaInstagram, FaSave, FaPlus,FaEnvelope,FaAddressCard,FaPhone,FaLinkedin,FaBlog,FaPinterest} from "react-icons/fa";
import jsPDF from 'jspdf';

import { HexColorPicker } from 'react-colorful';

export default function Cover(){

  const [Theme2,settheme2] = useState("#808080");
 
  const [Theme1,settheme1] = useState("#d7d7d7");
  const [Theme3,settheme3] = useState("#000000");

  const [colorPickerOpen1, setColorPickerOpen1] = useState(false);
  const [colorPickerOpen2, setColorPickerOpen2] = useState(false);
  const [colorPickerOpen3, setColorPickerOpen3] = useState(false);

  
  const [added, setAdded] = useState([]);
  const [selected_font, setFont] = useState('Arial');
  const [loading, setLoading] = useState(false);

  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });

 
  //heights to add to cph for more accurate counting
  const fontOptions = [
    'Arial',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Georgia',
    'Palatino',
    'Garamond',
    'Bookman',
    'Comic Sans MS',
    'Arial Black',
    'Tahoma',
    'Geneva',
    'Trebuchet MS',
    'Impact',
    'Copperplate',
    'Perpetua',
    'Didot',
    'Bodoni MT',
    'Lucida Bright',
    'Lucida Calligraphy',
    'Lucida Sans',
    'MS Sans Serif',
    'MS Serif',
  ];
  const ExtraAdded = [
    'Facebook',
    'Instagram',
    'Pinterest',
    'Blog'
  ]
    // Define separate state variables for each section
    const [personalDetails, setPersonalDetails] = useState({
      name: '',
      tp: '',
      Eml: '',
      adr: '',
      lin: '',
      Phn: '',
      dos: '',
      addressl1: '',
      addressl2: '',
      addressl3: '',
      addressl4: '',
      Nrp: '',
      paragraphs: [],
      extlinks:[]
    });
  
    const getIcon = (type) => {
      switch (type) {
        case 'Facebook':
          return <FaFacebook size={20} />;
        case 'Instagram':
          return <FaInstagram size={20} />;
        // Add more cases for other social media platforms if needed
        case 'Pinterest':
          return <FaPinterest size={20} />;
        case 'Blog':
          return <FaBlog size={20} />;  
        default:
          return null;
      }
    };
  
    const handleAddContact = () => {
      setAdded(prevAdded => [...prevAdded, { type: '' }]);
    };
    
    const handleFontChange = (e) => {
      setFont(e.target.value);
    };
    const handleSelectType = (index, value) => {
      const updatedAdded = [...added];
      updatedAdded[index] = { type: value }; // Update the added state
      setAdded(updatedAdded);
    
      // If the type is selected, add a corresponding initial link in the extlinks array
      if (value) {
        setPersonalDetails(prevState => ({
          ...prevState,
          extlinks: [...prevState.extlinks, { icon: getIcon(value), link: '' }] // Add a new item to the extlinks array
        }));
      }
    };

  const toggleColorPicker = (e, colorPickerIndex) => {
    setCirclePosition({
      top: e.clientY + window.scrollY,
      left: e.clientX + window.scrollX,
    });
    setColorPickerOpen1(false);
    setColorPickerOpen2(false);
    setColorPickerOpen3(false);
    switch (colorPickerIndex) {
      case 1:
        setColorPickerOpen1(!colorPickerOpen1);
        break;
      case 2:
        setColorPickerOpen2(!colorPickerOpen2);
        break;
     case 3:
       setColorPickerOpen3(!colorPickerOpen3);
       break;  

      default:
        // Handle default case if needed
    }
   
  };
useEffect(() => {
  // Function to update styles based on state variables
  const FTC = document.querySelectorAll('.UCLa,.INBT,.paraStyle,.lineStyle,.Bulletstyle');    
  FTC.forEach((element) => {
    element.style.fontFamily = selected_font;
  });
 
}, [selected_font]);


useEffect(() => {
  // Function to update styles based on state variables
  const t1 = document.getElementById('UCLUp');  
  if(t1){
    t1.style.backgroundColor = Theme1;
  } 
   
}, [Theme1]);
useEffect(() => {
  // Function to update styles based on state variables
  const t2 = document.getElementById('middle');  
  if(t2){
    t2.style.backgroundColor = Theme2;
  } 
   
}, [Theme2]);
useEffect(() => {
  // Function to update styles based on state variables
  const t3 = document.getElementById('UCLPo');  
  if(t3){
    t3.style.color = Theme3;
  } 
   
}, [Theme3]);

function handleAddPara(type) {
  const newPara = { type: type, value: '' }; // Create new item with type and empty value
  setPersonalDetails({
    ...personalDetails,
    paragraphs: [...personalDetails.paragraphs, newPara] // Append new item
  });
}

function handleInputChange(index, value) {
  const textarea = document.getElementById(`textarea-${index}`);
  if(textarea){
    textarea.style.height = "auto"; // Reset height to auto to recalculate the scroll height
    textarea.style.height = textarea.scrollHeight + "px"; // Set the new height
  
  }
 
  const newParagraphs = [...personalDetails.paragraphs]; // Copy existing paragraphs
  newParagraphs[index].value = value; // Update value at specified index
  setPersonalDetails({ ...personalDetails, paragraphs: newParagraphs }); // Update state
}
const handlePersonalDetailsChange = (e) => {
  const { name, value} = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
     }));
  
};
const handleLinkChange = (index, e) => {
  const updatedLinks = [...personalDetails.extlinks];
  updatedLinks[index] = {
    ...updatedLinks[index], // Maintain other properties of the object
    link: e.target.value // Update the link property
  };
  setPersonalDetails({
    ...personalDetails,
    extlinks: updatedLinks
  });
};


async function saveAsPDF() {

  setLoading(true);
  const p1 = document.getElementById("p1");
  const p2 = document.getElementById("p2");
  const pdf = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  });

  // Function to add a page to the PDF
  const addPage = async (content, page) => {
    if (content) {
      const th1Div = document.querySelector(".th");
      if (!th1Div) {
        console.error("Element with class 'th1' not found");
        return;
      }

      const rect = th1Div.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const canvas = await html2canvas(content, {
        width: width, // Set the width to match the th1 div width
        height: height, // Set the height to match the th1 div height
        scale: 6, // Increase the scale for better resolution
        useCORS: true, // Enable cross-origin resource sharing
        allowTaint: true,
        logging: false, // Disable logging to improve performance
      });

      const imageData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format for better quality
      pdf.addImage(imageData, 'JPEG', 0, 0, 210, 297); // Adjust the dimensions to fit the A4 page

      const links = document.querySelectorAll('.link,.linkedIn');
      let p1Rect = p1.getBoundingClientRect(); // Get position of p1
      if (page === 2) {
        p1Rect = p2.getBoundingClientRect();
      }
      links.forEach(linkElement => {
        const linkText = linkElement.textContent;

        // Calculate position of link relative to p1
        const linkRect = linkElement.getBoundingClientRect();
        const x = linkRect.left - p1Rect.left >= 0 ? linkRect.left - p1Rect.left : 0;
        const y = linkRect.top - p1Rect.top >= 0 ? linkRect.top - p1Rect.top : 0;

        // Calculate width and height based on linkRect properties
        const width = linkRect.width;
        const height = linkRect.height;

        // Add the clickable link with cursor change functionality
        pdf.link(x / 3.809, y / 3.809, width / 3.809, height / 3.809, { url: linkText, type: 'annotation' });
      });
    }
  };

  if (p1) {
    await addPage(p1, 1);
  }

  pdf.save('Custom_Cover_Letter.pdf');
  setLoading(false);
}
   

  return (
    <div className="creator">
      {loading ? (
  <div className="loading-overlay" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.8)', // Adjust the background color and opacity as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <InfinitySpin type="TailSpin" color="#00BFFF" height={80} width={80} />
    <p style={{ marginTop: '10px' }}>Generating PDF</p>
  </div>
) : null}

      <div className="left-section" id="left">
      <h2 style={{marginRight:"auto", marginLeft:"auto"}}>Information</h2>
          <div style={{marginRight:"auto", marginLeft:"auto", maxWidth:"80%",justifyContent:"center"}}>
            
            
            <form 
            style={{marginRight:"auto", marginLeft:"auto",justifyContent:"center",alignItems:"center"}}
            >
              <div className="form-group">
                <input type="div" name="name" className="inf" placeholder="Name" value={personalDetails.name} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="tp"  className="inf"placeholder="Target Position"   value={personalDetails.tp} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="Eml" className="inf" placeholder="email" value={personalDetails.Eml} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="adr" className="inf" placeholder="Address"  value={personalDetails.adr} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="lin"  className="inf"placeholder="Link to LinkedIn profile"  value={personalDetails.lin} onChange={handlePersonalDetailsChange} />
              </div>
              
              <div className="form-group">
                <input type="number" name="Phn" className="inf" placeholder="Contact Number" value={personalDetails.Phn} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="addressl1" className="inf" placeholder="Address Line 1" value={personalDetails.addressl1} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="addressl2" className="inf" placeholder="Address Line 2" value={personalDetails.addressl2} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="addressl3" className="inf" placeholder="Address Line 3" value={personalDetails.addressl3} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="addressl4" className="inf" placeholder="Address Line 4" value={personalDetails.addressl4} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" name="Nrp" className="inf" placeholder="Name of Recipient" value={personalDetails.Nrp} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <input type="div" placeholder="Date" className="inf" name="dos" value={personalDetails.dos} onChange={handlePersonalDetailsChange} />
              </div>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
         <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle1"
            onClick={(e)=>toggleColorPicker(e,1)}
            style={{
              backgroundColor:Theme1,
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid black',
              margin:'10px'
            }}
          ></div>
          <input
         
          className="colorer"
          value={Theme1}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme1(e.target.value)}
          />
          </div>
          {colorPickerOpen1 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top-120,
              left: circlePosition.left+140,
            }}
            >
            <HexColorPicker
             color={Theme1}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC1 = document.querySelector(".color-circle1");
               CC1.style.backgroundColorr=color;
               settheme1(color)
             }}
           />
           </div>
           )}

            <div style={{display:"flex", flexDirection:"row"}}>
            <div
             className="color-circle2"
             onClick={(e)=>toggleColorPicker(e,2)}
             style={{
               backgroundColor:Theme2,
               width: '25px',
               height: '25px',
               borderRadius: '50%',
               border: '1px solid black',
               margin:'10px'
             }}
           ></div>
           <input
          
          value={Theme2}
          className="colorer"
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme2(e.target.value)}
          />
          </div>
           {colorPickerOpen2 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top-120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={Theme2}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC2 = document.querySelector(".color-circle2");
               CC2.style.backgroundColor=color;
               settheme2(color)
             }}
           />
           </div>)}
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
         <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle3"
            onClick={(e)=>toggleColorPicker(e,3)}
            style={{
              backgroundColor:Theme3,
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid black',
              margin:'10px'
            }}
          ></div>
          <input
          type="text"
          className="colorer"
          value={Theme3}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme3(e.target.value)}
          />
          </div>
          {colorPickerOpen3 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top-220,
              left: circlePosition.left+140
            }}
            >
            <HexColorPicker
             color={Theme3}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC3 = document.querySelector(".color-circle3");
               CC3.style.backgroundColorr=color;
               settheme3(color)
             }}
           />
           </div>
           )}

           </div>
              <div>
              {personalDetails.paragraphs.map((para, index) => (
                <div key={index}>
                  {para.type === "para" ? (
                    <textarea
                    id={`textarea-${index}`}
                    className="TApara"
                      value={para.value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  ) : (
                    <input
                    className="inf"
                      type="text"
                      value={para.value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="ExtraAdder">
            {added.length > 0 && (
        <div className="ExtraAdder">
          {added.map((item, index) => (
         <div key={index}>
           <select className="inf" id="infddl" value={item.type} onChange={(e) => handleSelectType(index, e.target.value)}>
             <option value=""> </option>
             {ExtraAdded.map((option) => (
               <option key={option} value={option}>
                 {option}
               </option>
             ))}
           </select>
           <input className="inf" id="inflink" value={personalDetails.extlinks[index]?.link} onChange={(e) => handleLinkChange(index, e)} />
         </div>           
           ))}
        </div>
      )}
            </div>
            <h4 
             style={{ marginBottom:'2px' }}
            >Font:</h4>
         <select
           style={{ maxWidth:"300px",width:"110%", padding: '7px', borderRadius: '4px',marginBottom:'10px' }}
           value={selected_font}
           onChange={handleFontChange}
         >
           {fontOptions.map((font, index) => (
             <option key={index} value={font}>
               {font}
             </option>
        ))}

      </select>
              <div className="ButtonContCO">
              <div className="CoBut" type="button" onClick={(e) => handleAddContact()} title="Insert Additional Link">
                <FaPlus/>
              </div>
              <div className="CoBut"  type="button" onClick={() => handleAddPara("para")} title="Add Paragraph">
                <FaParagraph/>
              </div>
              <div className="CoBut"  type="button" onClick={() => handleAddPara("line")} title="Add Line">
                <FaLine/>
              </div>
              <div className="CoBut"  type="button" onClick={() => handleAddPara("bullet")} title="Add Bullet">
                <FaPen/>
              </div>
              <div className="CoBut"  type="button" onClick={() => saveAsPDF()} title="Save as PDF">
                <FaSave/>
              </div>
                  </div>
            </form>
          </div>
          
       
          
        
        
      </div>
      <div className="right-section">
        <div className="a4-sized-view" id="p1">
        <div className="th" id="cover_letter">
 
 <div id="UCLUp">
        <div id="UCLNa" className="UCLn">{personalDetails.name}</div>
        <div id="UCLPo" className="UCLp">{personalDetails.tp}</div>
 </div>      
       

 <div id="middle" className="UCLmid">

   <div className="UCLIL">
    <FaEnvelope size={20} />
     <div id="eml"  className="link" >{personalDetails.Eml}</div>
   </div>

 <div className="UCLIL">
    <FaAddressCard size={20}/>
    <div id="adr" className="UCLad" >{personalDetails.adr}</div>
 </div>

<div className="UCLIL">
   <FaLinkedin size={20}/>
   <div id="lkn" className="link" >{personalDetails.lin}</div>
</div >
 
 <div className="UCLIL">
   <FaPhone size={20}/>
   <div id="phn" className="UCLphn" >{personalDetails.Phn}</div>
 </div>
 {personalDetails.extlinks.map((item, index) => (
    <div className="UCLIL" key={index}>
      {React.cloneElement(item.icon, { size: 20 })}
      <div className="link" id="lkn">{item.link}</div>
    </div>
  ))}

 </div>
 
 <div className="UCLparas">
   <div className="UCLa">To:</div>
   <div id="to" className="UCLa" >{personalDetails.Nrp}</div>
 <div id="to" className="UCLa" >{personalDetails.addressl1}</div>
 <div id="to1" className="UCLa" >{personalDetails.addressl2}</div>
 <div id="to2" className="UCLa" >{personalDetails.addressl3}</div>
 <div id="to2" className="UCLa" >{personalDetails.addressl4}</div>
 <div id="to2" className="UCLda" >{personalDetails.dos}</div>
 <div></div>
 </div>

 <div className="paras" >
 {personalDetails.paragraphs.map((item, index) => {
    // Determine the class name based on the item type
    let className;
    switch (item.type) {
      case 'para':
        className = "paraStyle";
        break;
      case 'line':
        className = "lineStyle";
        break;
      case 'bullet':
        className = "bulletStyle";
        break;
      default:
        className = ""; // Default class or handle unexpected types
    }

    // Return a div with the appropriate class name and display the item's value
    return (
      <div key={index} className={className}>
        {item.value}
      </div>
    );
  })}
</div>
<div className="Salutations">
<div className="INBT">Sincerely,</div>
  <div className="INBT">{personalDetails.name}</div>
</div>
</div>
        </div>

      </div>
    </div>
  );
  
                  
}
