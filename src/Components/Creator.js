import React, { useState, useEffect,useCallback} from "react";
import '../App.css';
import { useLocation } from "react-router-dom";
import {InfinitySpin} from 'react-loader-spinner';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaUser,FaPlus, FaGraduationCap,FaBrush, FaBriefcase, FaLanguage, FaTools,FaPersonBooth, FaProjectDiagram} from "react-icons/fa";

import { HexColorPicker } from 'react-colorful';

export default function Creator() {

  const [content, setcontent] = useState('per');

  const { state } = useLocation();
  const extraData = state?.extraData;

  
  const [cph, setCPH] = useState({ value: 0, tag: '',flag: '',OF:false });

  const [imageDataUri, setIData] = useState("");

  const [bold, setBold] = useState(false);
  const [ACTE, setACTe] = useState(false);
  const [firsttime1, setfirsttime1] = useState(false);
  const [firsttime2, setfirsttime2] = useState(false);
  const [firsttime3, setfirsttime3] = useState(false);
  const [firsttime4, setfirsttime4] = useState(false);
  const [squeeze, setSqueeze] = useState(false);

  const [pagenos, setPagenos] = useState('Default');
  const [RImage, setRimage] = useState(false);

  const MaxThres = 848;
  const [StyleType, setstyleType] = useState('');
  const [Theme1,settheme1] = useState("#000000");
  const [Theme2,settheme2] = useState("#ffffff");
  const [Theme3,settheme3] = useState("#000000");
  const [Theme4,settheme4] = useState("#000000");
  const [Theme5,settheme5] = useState("#000000");
  const [Theme6,settheme6] = useState("#000000");
  const [Theme7,settheme7] = useState("#000000");
  const [Theme8,settheme8] = useState("#000000");
  const [Theme9,settheme9] = useState("#000000");
  const [Theme10,settheme10] = useState("#000000");

  const [S1, setS1] = useState(1);
  const [S2, setS2] = useState(20);
  const [S3, setS3] = useState(1);
  const [S4, setS4] = useState(15);
  const [S5, setS5] = useState(15);
  const [S6, setS6] = useState(15);
  const [S7, setS7] = useState(15);
  //stuff for edu
  const [bcall, setBcall] = useState("#ffffff");
  const [contbg, setContbg] = useState("#ffffff");
  const [colorTE,setColorTE] = useState("#000000");
  const [bball, setBball] = useState(false);
  const [btall, setBtall] = useState(false);
  const [blall, setBlall] = useState(false);
  const [brall, setBrall] = useState(false);


 
  const [ExtIndex, setextIndex] = useState(0);

  const [extStateArray, setExtStateArray] = useState([
    {
      btext: false,
      bbext: false,
      brext: false,
      blext: false,
      bradext: 1,
      BCExt: "#000000",
      ExtCol: "#000000",
      ExtIndex: 0,
      ETBSp: 0,
      ELRSp: 0,
      ETBM: 0,
      ELRM: 0,
      EAlign: "left",
    },
    // Add more items as needed
  ]);

  const ButtonOrder = 
    {
      div1: 'per',
      div2: 'edu',
      div3: 'work',
      div4: 'lan',
      div5: 'skills',
      div6: 'IpSk',
      div7: 'proj',
      div8: 'extra',
      div9: 'pdf',
      
     
    };
    // Add more items as needed
  
  const iconMapping = {
    per: FaUser,
    edu: FaGraduationCap,
    work: FaBriefcase,
    lan: FaLanguage,
    IpSk: FaPersonBooth,
    skills: FaTools,
    proj: FaProjectDiagram,
    pdf:FaBrush,
    extra:FaPlus,
  };
  const status = {
    per: 'Personal Details',
    edu: 'Educational Background',
    work: 'Work Experience',
    lan: 'Language Skills',
    IpSk: 'Interpersonal Skills',
    skills: 'Technical Skills',
    proj: 'Projects',
    pdf:'Styling',
    extra:'Added Sections',
  };
  const [bradall, setBradall] = useState(0);
  const [p1all, setP1all] = useState(10);
  const [p2all, setP2all] = useState(10);
  const [p3IC, setP3IC] = useState(0);

  const [languagesInput, setLanguagesInput] = useState('');
  const [skillsInput, setSkillsInput] = useState('');
  const [IpskInput, setipskInput] = useState('');
  const ProficiencyLevels = [
    'A1 - Beginner',
    'A2 - Elementary',
    'B1 - Intermediate',
    'B2 - Upper Intermediate',
    'C1 - Advanced',
    'C2 - Proficient',
    'Native',
  ];
  const skill_view_type = [
    'Default',
    'Box'
  ]
  const skill_view_typeIP = [
    'Default',
    'Bullets',
    'Box'
  ]
  const PageNumbers = [
    'Default',
    'Fit'
  ]
  const [SVT, setSvt] = useState("Default");
  const [languages, setLanguages] = useState([]);
  const [languages2, setLanguages2] = useState([]);
  const [skills, setSkills] = useState([]);
  const [IPskills, setIpSkills] = useState([]);
  const [selectedProficiency, setSelectedProficiency] = useState(ProficiencyLevels[0]);

  const sectionType = true;
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorPickerOpen1, setColorPickerOpen1] = useState(false);
  const [colorPickerOpen2, setColorPickerOpen2] = useState(false);
  const [colorPickerOpen3, setColorPickerOpen3] = useState(false);
  const [colorPickerOpen4, setColorPickerOpen4] = useState(false);
  const [colorPickerOpen5, setColorPickerOpen5] = useState(false);
  const [colorPickerOpen6, setColorPickerOpen6] = useState(false);
  const [colorPickerOpen7, setColorPickerOpen7] = useState(false);
  const [colorPickerOpen8, setColorPickerOpen8] = useState(false);
  const [colorPickerOpen9, setColorPickerOpen9] = useState(false);
  const [colorPickerOpen10, setColorPickerOpen10] = useState(false);
  const [colorPickerOpen11, setColorPickerOpen11] = useState(false);
  const [colorPickerOpen12, setColorPickerOpen12] = useState(false);
  const [firsttimee, setFTE] = useState(true);
  const [firsttimew, setFTW] = useState(true);
  const [firsttimesk, setFTS] = useState(true);
  const [firsttimeIsk, setFTIS] = useState(true);
  const [firsttimel, setFTL] = useState(true);
  const [firsttimep, setFTP] = useState(true);
  const [colorPickerExt, setColorPickerExt] = useState(false);
  const [pageDivsArray1, setPageDivsArray1] = useState([]);
  const [pageDivsArray2, setPageDivsArray2] = useState([]);
  const [page1, setPage1] = useState();
  const [page2, setPage2] = useState();
  const [selected_font, setFont] = useState('Arial');
  const [loading, setLoading] = useState(false);

  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });

 
  const [ChosenTemplate, setchosenTemplate] = useState('current');
  
  const eduh1 = 125;
  const edudivh = 94;
  const workh1 = 118;
  const workdivh = 90;
  const lanhe1 = 52;
  const landivh = 25;
  const Skillh1 = 140;
  const IPSKh1 = 100;
  const projh1 = 80;
  const projdivh = 70;
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
    // Define separate state variables for each section
    const [personalDetails, setPersonalDetails] = useState({
      name: '',
      dob: '',
      contactNumber: '',
      emailAddress: '',
      address: '',
      linkedin:'',
      aboutme: '',
      nationality: '',
      gender: '',
      addPicture: false,
      picture: null,
    });
  
    const [educationalBackground, setEducationalBackground] = useState([
      {
        degreeName: '',
        institution: '',
        duration: '',
        address: '',
        website: '',
        grade: '',
        addBold: '',
        addText1: '',
        addText2: '',
        addText3: ''
      },
    ]);
    const [edu22, setEdu2] = useState([
      {
        degreeName: '',
        institution: '',
        duration: '',
        address: '',
        website: '',
        grade: '',
        addBold: '',
        addText1: '',
        addText2: '',
        addText3: ''
      },
    ]);
    
  
    const [workExperience, setWorkExperience] = useState([
      {
      jobTitle: '',
      company: '',
      duration: '',
      country: '',
      description: '',
    }
  ]);
  const [work2, setWork2] = useState([
    {
    jobTitle: '',
    company: '',
    duration: '',
    country: '',
    description: '',
  }
]);
  const [Projects, setprojects] = useState([
    {
    Title: '',
    duration: '',
    description: '',
  }
  ]);
  const [Projects2, setprojects2] = useState([
    {
    Title: '',
    duration: '',
    description: '',
  }
  ]);


  const [prevProjectsLength, setPrevProjectsLength] = useState(Projects.length);

  
  const [extra,setExtra] = useState([
  
  ]);
  const [extra2,setExtra2] = useState([
  
  ]);
  const handleCheckboxChange = (checkboxName) => {
    switch (checkboxName) {
      case 'bball':
        setBball(!bball);
        break;
      case 'btall':
        setBtall(!btall);
        break;
      case 'blall':
        setBlall(!blall);
        break;
      case 'brall':
        setBrall(!brall);
        break;
      case 'Bold':
        setBold(!bold);
      break;
      case 'ACTE':
        setACTe(!ACTE);
      break; 
      case 'RIMG':
        setRimage(!RImage);
      break;  
      default:
        break;
    }
  };

  const handleInputChangeBR = (val) => {
    const inputValue = val
    // Ensure the input only contains numbers
    if (/^\d*$/.test(inputValue)) {
      setBradall(Number(inputValue));
    }
  }; 

 

  const handleChangeEst = (e, sectionIndex) => {
    const { name, checked} = e.target;
     
      setCheckboxState(name, checked, sectionIndex);

  };
  const handleChangeEstN = (e, sectionIndex) => {
    const { name, value } = e.target;
      setNumberState(name, value, sectionIndex);
    
  };
  const handleEAlignment = (e, sectionIndex) => {
    const value = e.target.value;
    setExtStateArray(prevState => {
      const newStateArray = [...prevState];
      newStateArray[sectionIndex].EAlign = value;
      return newStateArray;
    });
  };
  
  const handleChangeECol = (color, sectionIndex) => {
    setExtStateArray(prevState => {
      const newStateArray = [...prevState];
      newStateArray[sectionIndex].ExtCol = color;
      return newStateArray;
    });
  };

  useEffect(() => {
  if(extraData!==''){
    setACTe(true);
    if (extraData === "Europass"){
      //set the states to match the resume type
      settheme1("#c1c1c1");
      settheme2("#d8d8d8");
      settheme3("#252525");
      settheme4("#000000");
      settheme5("#000000");
      settheme6("#000000");
      settheme7("#878787");
      setContbg("#ffffff");
      setBcall("#ffffff");
      settheme8("#000000");
      settheme9("#000000");
      setS1(3);
      setS2(20);
      setS3(3);
      setS4(15);
      setS5(15);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(false);
      setBrall(false);
      setBradall(1);
      setP1all(10);
      setP3IC(30);
      setP2all(25);
    }
      
     
     if(extraData === "Youtube"){
      settheme1("#ff0000");
      settheme2("#fcfcfc");
      settheme3("#808080");
      settheme4("#000000");
      settheme5("#000000");
      settheme6("#000000");
      settheme7("#808080");
      setContbg("#ff0000");
      setBcall("#ffffff");
      settheme8("#000000");
      settheme9("#000000");
      setS1(2);
      setS2(20);
      setS3(2);
      setS4(15);
      setS5(15);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(false);
      setBrall(false);
      setBradall(1);
      setP1all(10);
      setP3IC(30);
      setP2all(25);
     }
     if(extraData === "Programming"){
      settheme1("#bcbcbc");
      settheme2("#404040");
      settheme3("#e6d36c");
      settheme4("#9f009d");
      settheme5("#a641a8");
      settheme6("#69dfff");
      settheme7("#fa966a");
      setContbg("#3a3a3a");
      setBcall("#404040");
      settheme8("#00d1ff");
      settheme9("#a4b8ff");
      setS1(1);
      setS2(20);
      setS3(1);
      setS4(15);
      setS5(15);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(false);
      setBrall(false);
      setBradall(1);
      setP1all(10);
      setP3IC(30);
      setP2all(25);
     }
     if(extraData === "Amazon"){
      settheme1("#fa8f00");
      settheme2("#1b1c24");
      settheme3("#d7b13f");
      settheme4("#ffc619");
      settheme5("#ffb800");
      settheme6("#000000");
      settheme7("#131313");
      setContbg("#211f32");
      setBcall("#ffffff");
      settheme8("#ffffff");
      settheme9("#fcb500");
      setS1(3);
      setS2(20);
      setS3(2);
      setS4(15);
      setS5(15);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(true);
      setBrall(true);
      setBradall(1);
      setP1all(10);
      setP3IC(10);
      setP2all(15);
     }
  }
}, []); 
  useEffect(() => {
     if (ChosenTemplate === "Professional"){
      //set the states to match the resume type
      settheme1("#c1c1c1");
      settheme2("#d8d8d8");
      settheme3("#252525");
      settheme4("#000000");
      settheme5("#000000");
      settheme6("#000000");
      settheme7("#878787");
      setContbg("#ffffff");
      setBcall("#ffffff");
      settheme8("#000000");
      settheme9("#000000");
      setS1(3);
      setS2(20);
      setS3(3);
      setS4(15);
      setS5(14);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(false);
      setBrall(false);
      setBradall(1);
      setP1all(8);
      setP3IC(30);
      setP2all(25);
    }
      
     
     else if(ChosenTemplate === "YT"){
      settheme1("#ff0000");
      settheme2("#fcfcfc");
      settheme3("#808080");
      settheme4("#000000");
      settheme5("#000000");
      settheme6("#000000");
      settheme7("#ffffff");
      setContbg("#ff0000");
      setBcall("#ffffff");
      settheme8("#000000");
      settheme9("#000000");
      setS1(2);
      setS2(20);
      setS3(2);
      setS4(15);
      setS5(15);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(false);
      setBrall(false);
      setBradall(1);
      setP1all(9);
      setP3IC(15);
      setP2all(20);
     }
     else if(ChosenTemplate === "Programming"){
      settheme1("#bcbcbc");
      settheme2("#404040");
      settheme3("#e6d36c");
      settheme4("#9f009d");
      settheme5("#a641a8");
      settheme6("#69dfff");
      settheme7("#fa966a");
      setContbg("#3a3a3a");
      setBcall("#404040");
      settheme8("#00d1ff");
      settheme9("#a4b8ff");
      setS1(1);
      setS2(20);
      setS3(1);
      setS4(15);
      setS5(14);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(false);
      setBrall(false);
      setBradall(1);
      setP1all(8);
      setP3IC(30);
      setP2all(25);
     }
     else if(ChosenTemplate ==="Amazon"){
      settheme1("#fa8f00");
      settheme2("#1b1c24");
      settheme3("#d7b13f");
      settheme4("#ffc619");
      settheme5("#ffb800");
      settheme6("#f78d11");
      settheme7("#ffffff");
      setContbg("#211f32");
      setBcall("#ffffff");
      settheme8("#ffffff");
      settheme9("#fcb500");
      setS1(3);
      setS2(20);
      setS3(2);
      setS4(15);
      setS5(15);
      setS6(15);
      setS7(15);
      setBtall(true);
      setBball(true);
      setBlall(true);
      setBrall(true);
      setBradall(1);
      setP1all(9);
      setP3IC(9);
      setP2all(15);
     }
  }, [ChosenTemplate]);

  useEffect(() => {
    if(pagenos === "Fit"){
   setSqueeze(true);
  
    }
    else if(pagenos === "Default"){
      setSqueeze(false);
    }
  }, [pagenos]);

  useEffect(() => {
    // Apply styles after the component has been mounted or when state changes
    applyStyles();
  }, [extStateArray, ExtIndex]);

  useEffect(() => {
   const bolder = document.querySelectorAll('.parah1');
   if(bold){
    bolder.forEach((element) => {
      element.style.fontWeight = "bold";
    });
   }
   else{
   bolder.forEach((element) => {
    element.style.fontWeight = "normal";
  });
}
  }, [bold]);

  useEffect(()=>{

  if(RImage){
    
    
      const profilePictureElement = document.getElementById("proP");
      if (profilePictureElement){  
      profilePictureElement.querySelector('image').setAttribute('href', imageDataUri);

      // Apply rounded styling to the circular div
      const rectangleImageElement = document.getElementById('rectImage');
    if (rectangleImageElement) {
        rectangleImageElement.style.display = 'none';
        const rectanglePictureElement = document.querySelector('.RectanglePicture');
      if (rectanglePictureElement) {
        rectanglePictureElement.style.display = 'none';
      }
    }
      const circlePictureElement = document.querySelector('.CirclePicture');
      if (circlePictureElement) {
        circlePictureElement.style.display = 'flex';
        circlePictureElement.style.width = '150px';
        circlePictureElement.style.height = '150px';
      }}
    
    
  }
  else if(!RImage){
 
   
    const circlePictureElement = document.querySelector('.CirclePicture');
    if(circlePictureElement){
      circlePictureElement.style.display = 'none';
    }
    const rectangleImageElement = document.getElementById('rectImage');

    if (rectangleImageElement) {
      
    rectangleImageElement.style.display = 'flex';
    
    rectangleImageElement.src = imageDataUri;
    const rectanglePictureElement = document.querySelector('.RectanglePicture');
    if (rectanglePictureElement) {
      rectanglePictureElement.style.margin = '1px';
      rectanglePictureElement.style.display = 'flex';
      rectanglePictureElement.style.width = '130px';
      rectanglePictureElement.style.height = '150px';
    }
  
}
  }
 
  },[RImage,personalDetails.picture])

  const setCheckboxState = (name, checked, sectionIndex) => {
    setextIndex(sectionIndex);
  
    // Check if the array is empty (initial state)
    if (extStateArray.length === 0) {
      setExtStateArray([{
        btext: false,
        bbext: false,
        brext: false,
        blext: false,
        bradext: 1,
        BCExt: "#000000",
        ExtCol: "#000000",
        ExtIndex: 0,
        ETBSp: 0,
        ELRSp: 0,
        ELRSpc: 0,
        ETBM: 0,
        ELRM: 0,
        EAlign: "left",
      }]);
    }
  
    setExtStateArray(prevState => {
      const newStateArray = [...prevState];
      const currentItem = newStateArray[sectionIndex];
  
      // Check if the current item exists, if not, add it
      if (!currentItem) {
        newStateArray[sectionIndex] = {
          btext: false,
          bbext: false,
          brext: false,
          blext: false,
          bradext: 1,
          BCExt: "#000000",
          ExtCol: "#000000",
          ExtIndex: 0,
          ETBSp: 0,
          ELRSp: 0,
          ELRSpc: 0,
          ETBM: 0,
          ELRM: 0,
          EAlign: "left",
        };
      }
  
      // Update the specific checkbox state
      newStateArray[sectionIndex][name] = checked;
  
      return newStateArray;
    });
  
    // Apply styles to the corresponding element
  };
  

  

  const setNumberState = (name, value, sectionIndex) => {
    setextIndex(sectionIndex);
  
    setExtStateArray(prevState => {
      const newStateArray = [...prevState];
      const currentItem = newStateArray[sectionIndex];
  
      // Check if the current item exists, if not, add it
      if (!currentItem) {
        newStateArray[sectionIndex] = {
          btext: false,
          bbext: false,
           brext: false,
          blext: false,
           bradext: 1, BCExt: "#000000",
          ExtCol: "#000000", ExtIndex: 0,
          ETBSp: 0,ELRSp: 0,ETBM: 0,ELRM: 0,ELRSpc: 0,
          EAlign: "left",
        };
      }
  
      // Update the specific number input state
      switch (name) {
        case "bradext":
          newStateArray[sectionIndex].bradext = value;
          break;
        // Handle other number inputs
        case "TB":
          newStateArray[sectionIndex].ETBSp = value;
          break;
        case "LR":
          newStateArray[sectionIndex].ELRSp = value;
          break;
          case "LRC":
            newStateArray[sectionIndex].ELRSpc = value;
            break;  
        case "TBM":
          newStateArray[sectionIndex].ETBM = value;
          break;
        case "LRM":
          newStateArray[sectionIndex].ELRM = value;
          break;
        default:
          break;
      }
  
      return newStateArray;
    });
  
    // Apply styles to the corresponding element
  };
  
  
  const applyStyles = () => {
   
      for (let i = 0; i <= ExtIndex; i++) {
        // Get the corresponding element using the sectionIndex
       
        const element = document.getElementById(`Empty-conter${i}`);
        const element2 = document.querySelector(`.E-cont${i}`);
        const element3 = document.getElementById(`.Item_E${i}`);
        
        
        // Check if the element exists before applying styles
        if (element && element2 && element3 && extStateArray[i]) {
        
          const {
            btext,
            bbext,
            brext,
            blext,
            bradext,
            BCExt,
            ExtCol,
            ETBSp,
            ELRSp,
            ELRSpc,
            ETBM,
            ELRM,
            EAlign,
          } = extStateArray[i];
    
          // Apply styles based on the state
          element.style.borderStyle = "hidden";
          element.style.display = "flex";
          element2.style.marginTop = "7px";
          element2.style.marginBottom = "7px";
          element2.style.borderTopStyle = btext ? "solid" : "hidden";
          element2.style.borderBottomStyle = bbext ? "solid" : "hidden";
          element2.style.borderLeftStyle = blext ? "solid" : "hidden";
          element2.style.borderRightStyle = brext ? "solid" : "hidden";
          element2.style.borderWidth = `${bradext}px`;
          element2.style.borderColor = `${ExtCol}`;
          element2.style.alignItems = `${EAlign}`;
          element2.style.textAlign = `${EAlign}`;
          element2.style.justifyContent = `${EAlign}`;
          element3.style.paddingTop = `${ETBSp}px`;
          element3.style.paddingBottom = `${ETBSp}px`;
          element3.style.paddingLeft = `${ELRSp}px`;
          element3.style.paddingRight = `${ELRSp}px`;
          element3.style.paddingLeft = `${ELRSpc}px`;
          element3.style.paddingRight = `${ELRSpc}px`;
          element.style.paddingTop = `${ETBM}px`;
          element.style.paddingBottom = `${ETBM}px`;
          element.style.paddingLeft = `${ELRM}px`;
          element.style.marginRight = `${ELRM}px`;
         
        }
      }
   
   
  };
  
  
  useEffect(() => {
    const handleResize = () => {
      // Update the color picker position on window resize
      setCirclePosition({
        top: circlePosition.top + window.scrollY,
        left: circlePosition.left + window.scrollX,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [circlePosition]);

  const handleInputChangep = (val,name) => {
    const inputValue = val;
    
    // Ensure the input only contains numbers
    if (/^\d*$/.test(inputValue)) {
      switch (name) {
        case 'P1':
          setP1all(inputValue);
          break;
        case 'P2':
          setP2all(inputValue);
          break;
        case 'P3':
          setP3IC(inputValue);
          break;  
        default:
          break;
      }
    }
  }; 

 const handleSVTChange = (value) => {
  setSvt(value);
};


const handleSVTChangeIP = (value) => {
  //accordingly make changes
  setstyleType(value);
  updateTemplate("IpSk","Default")
};


  const toggleColorPicker = (e, colorPickerIndex) => {
    setCirclePosition({
      top: e.clientY + window.scrollY,
      left: e.clientX + window.scrollX,
    });
    setColorPickerOpen(false);
    setColorPickerOpen1(false);
    setColorPickerOpen2(false);
    setColorPickerOpen3(false);
    setColorPickerOpen4(false);
    setColorPickerOpen5(false);
    setColorPickerOpen6(false);
    setColorPickerOpen7(false);
    setColorPickerOpen8(false);
    setColorPickerOpen9(false);
    setColorPickerOpen10(false);
    setColorPickerOpen11(false);
    setColorPickerOpen12(false);
    setColorPickerExt(false);

    switch (colorPickerIndex) {
      case "ET":
        setColorPickerOpen(!colorPickerOpen);
        break;
      case 1:
        setColorPickerOpen1(!colorPickerOpen1);
        break;
      case 2:
        setColorPickerOpen2(!colorPickerOpen2);
        break;
      case 3:
        setColorPickerOpen3(!colorPickerOpen3);
        break;
      case 4:
        setColorPickerOpen4(!colorPickerOpen4);
        break;
      case 5:
        setColorPickerOpen5(!colorPickerOpen5);
        break;
      case 6:
        setColorPickerOpen6(!colorPickerOpen6);
        break;
      case 7:
        setColorPickerOpen7(!colorPickerOpen7);
        break;
      case 8:
        setColorPickerOpen8(!colorPickerOpen8);
        break;
      case 9:
        setColorPickerOpen9(!colorPickerOpen9);
        break;
      case 10:
        setColorPickerOpen10(!colorPickerOpen10);
          break;  
      case 11:
        setColorPickerOpen11(!colorPickerOpen11);
      break
      case 12:
        setColorPickerOpen12(!colorPickerOpen12);  
      break;    
      case 'E':
        setColorPickerExt(!colorPickerExt);
        break;
      default:
        // Handle default case if needed
    }
  };
  function styling (){
     
  const FTC = document.querySelectorAll('.para,.subH,.S5,.skill_point,.S4,.S6,.parah1,.parap1,.ski,.addText');    
  FTC.forEach((element) => {
    element.style.fontFamily = selected_font;
  });

   
  const ph1 = document.querySelectorAll('.parah1');    
  ph1.forEach((element) => {
    element.style.color = Theme8;
  });

   
  const Ifo1 = document.querySelectorAll('.S6');    
  Ifo1.forEach((element) => {
    element.style.color = Theme9;
  });

   
  const Ifo2 = document.querySelectorAll('.ski');    
  Ifo2.forEach((element) => {
    element.style.color = Theme10;
  });

   
  const pp1 = document.querySelectorAll('.parap1');    
  pp1.forEach((element) => {
    element.style.color = Theme3;
  });

   
  const bc1 = document.querySelectorAll('.th');
  const BBc = document.querySelectorAll('.Education_cont,.Language_cont,.Work-container,.Project-cont,.Skills-cont,.Project-cont2,.ipsk_cont');
     
  bc1.forEach((element) => {
    element.style.borderColor = Theme1;
  });
  bc1.forEach((element) => {
    element.style.borderWidth = S1+'px';
  }); 
  BBc.forEach((element) => {
    element.style.borderBottomColor = Theme1;
    element.style.paddingLeft=p3IC+'px';
    element.style.paddingRight=p3IC+'px';
   
  });
  if(ACTE){
    for (let i = 0; i < extra.length; i++){
      if(extra.Items){
        for(let j =0; j<extra.Items.length; j++){
          const elementE = document.getElementById(`.Item_E${j}`);
          if(elementE){
          elementE.style.borderColor = Theme1;
        }
        }
      }
      }
  }

   
 

  const Allc1 = document.querySelectorAll('.th2');
     
  Allc1.forEach((element) => {
    element.style.backgroundColor = Theme2;
  });

     

  const Allls = document.querySelectorAll('.LS');
     
  Allls.forEach((element) => {
    element.style.color = Theme5;
  });
 
  const AllcsH = document.querySelectorAll('.subH');
     
  AllcsH.forEach((element) => {
    element.style.color = Theme6;
  });

  const Alls5 = document.querySelectorAll('.S5,.skill_point,.addText,.ski');
     
  Alls5.forEach((element) => {
    element.style.color = Theme7;
  });
 
  const Alln = document.querySelectorAll('.name');
  Alln.forEach((element) => {
    element.style.fontSize= S2+'px';
    element.style.color = Theme4;
  });

  const sh = document.querySelectorAll('.subH,.parah1');
  sh.forEach((element) => {
    element.style.fontSize = `${S4}px`;
  });
 


  const tet = document.querySelectorAll('.S5,.skill_point,.ski,.link,.linker,.linkedIn,.high,.bold,.parap1');
  tet.forEach((element) => {
    element.style.fontSize= `${S5}px`;
  });

  const italS6 = document.querySelectorAll('.S6');
  italS6.forEach((element) => {
    element.style.fontSize=`${S6}px`;
  });


  const italab = document.querySelectorAll('.Abme');
  italab.forEach((element) => {
    element.style.paddingLeft=`${S7}px`;
  });


 const behind = document.querySelectorAll('.insidecont')
 behind.forEach((element) => {
  element.style.backgroundColor = bcall;
});
  const italic = document.querySelectorAll('.Edu,.Lan_outer,.Work,.Projects,.Skills,.Edu2,.Lan2,.Work2,.Projects2,.Skills2,.outsider');
  italic.forEach((element) => {
    element.style.paddingTop=p1all+'px';
    element.style.paddingBottom=p1all+'px';
    element.style.paddingLeft=p2all+'px';
    element.style.paddingRight=p2all+'px';
    element.style.borderRadius=bradall+'px';
    element.style.borderBottomStyle = bball ? 'solid' : 'hidden';
    element.style.borderBottomWidth = bball ? S3+'px' : '0';
    element.style.borderBottomColor = bball ? Theme1 : 'transparent';
    element.style.backgroundColor = contbg;
   
  
    element.style.borderTopStyle = btall ? 'solid' : 'hidden';
    element.style.borderTopWidth = btall ? S3+'px' : '0';
    element.style.borderTopColor = btall ? Theme1 : 'transparent';
  
    element.style.borderLeftStyle = blall ? 'solid' : 'hidden';
    element.style.borderLeftWidth = blall ? S3+'px' : '0';
    element.style.borderLeftColor = blall ? Theme1 : 'transparent';
  
    element.style.borderRightStyle = brall ? 'solid' : 'hidden';
    element.style.borderRightWidth = brall ? S3+'px' : '0';
    element.style.borderRightColor = brall ? Theme1 : 'transparent';
  });

   if(ACTE){
     for (let i = 0; i < extra.length; i++){
       const elementE = document.querySelector(`.E-cont${i}`);
       const elementEm = document.querySelectorAll(`.MainEdiv`);
             elementEm.forEach((element) => {
               element.style.paddingLeft=p3IC+'px';
               element.style.paddingRight=p3IC+'px';
             });
           if(elementE){
            elementE.style.backgroundColor = contbg;
             elementE.style.paddingTop=p1all+'px';
             elementE.style.paddingBottom=p1all+'px';
             
             elementE.style.paddingLeft=p2all+'px';
             elementE.style.paddingRight=p2all+'px';
             elementE.style.borderRadius=bradall+'px';
             elementE.style.borderBottomStyle = bball ? 'solid' : 'hidden';
             elementE.style.borderBottomWidth = bball ? S3+'px' : '0';
             elementE.style.borderBottomColor = bball ? Theme1 : 'transparent';
     
             elementE.style.borderTopStyle = btall ? 'solid' : 'hidden';
             elementE.style.borderTopWidth = btall ? S3+'px' : '0';
             elementE.style.borderTopColor = btall ? Theme1 : 'transparent';
     
             elementE.style.borderLeftStyle = blall ? 'solid' : 'hidden';
             elementE.style.borderLeftWidth = blall ? S3+'px' : '0';
             elementE.style.borderLeftColor = blall ? Theme1 : 'transparent';
     
             elementE.style.borderRightStyle = brall ? 'solid' : 'hidden';
             elementE.style.borderRightWidth = brall ? S3+'px' : '0';
             elementE.style.borderRightColor = brall ? Theme1 : 'transparent';
             
         }
      
   }
   }
 
   const lefter = document.querySelector('.leftside');
  if(lefter){
    lefter.style.borderRightWidth =  S3+'px';
    lefter.style.borderRightColor =  Theme1;
  }
  if(SVT === "Box"){
    // Hide all elements with class "slash"
    const slashElements = document.querySelectorAll('.slash');
    slashElements.forEach((slashElement) => {
      slashElement.style.display = 'none';
    });
    
    // Adjust styles for elements with class "ski"
    const skiElements = document.querySelectorAll('.ski');
    skiElements.forEach((skiElement) => {
      skiElement.style.borderRadius = '5px';
      skiElement.style.fontFamily = `${selected_font}`;
      skiElement.style.fontStyle = "normal";
      skiElement.style.padding = "3px";
      skiElement.style.border = '0.5px solid #000'; // Set border thickness and color
    });
    }
    if(SVT === "Default"){
      // Hide all elements with class "slash"
      const slashElements = document.querySelectorAll('.slash');
      slashElements.forEach((slashElement) => {
        slashElement.style.display = 'flex';
      });
      
      // Adjust styles for elements with class "ski"
      const skiElements = document.querySelectorAll('.ski');
      skiElements.forEach((skiElement) => {
        skiElement.style.borderRadius = '0px';
        skiElement.style.backgroundColor = `none`;
        skiElement.style.padding = "4px";
        skiElement.style.fontStyle = "italic";
        skiElement.style.border = 'none'; // Set border thickness and color
      });
      }

 
  }

  useEffect(() => {
    // Remove previous styling if any
    document.querySelectorAll('.main_container').forEach(container => {
      container.classList.remove('box_style', 'bullet_style');
    });
  
    // Apply styling based on StyleType
    document.querySelectorAll('.main_container').forEach(container => {
      if (StyleType === 'Box') {
        container.classList.add('box_style');
      } else if (StyleType === 'Bullets') {
        container.classList.add('bullet_style');
      }
    });
  }, [StyleType]);

useEffect(() => {
 styling()
}, [selected_font,Theme8,Theme9,Theme10,Theme3,Theme1,S1,Theme2,Theme4,Theme5,Theme6,Theme7,S2,S4,S5,S6,S7,bcall,bball,btall,blall,brall,S3,Theme1,p1all,p2all,bradall,contbg,p3IC,SVT,StyleType,skills]);


 useEffect(() => {
  
  if(cph.tag === "Edu"){
    setEducationalBackground((prevBackground) => [
      ...prevBackground,
      {
        degreeName: '',
        institution: '',
        address: '',
        website: '',
        duration: '',
        grade: '',
      },
    ]);
    if(cph.OF){
      setEdu2((prevBackground) => [
        ...prevBackground,
        {
          degreeName: '',
          institution: '',
          address: '',
          website: '',
          duration: '',
          grade: '',
        },
      ]);
    }
  }
  if(cph.tag === "Lan"){
    if (languagesInput.trim() !== '') {
      const newLanguage = `${languagesInput} (${selectedProficiency})`;

      setLanguages([...languages, newLanguage]);
      if(cph.OF){
        setLanguages2([...languages2, newLanguage]);
      }
      setLanguagesInput('');
    }
  }
  if(cph.tag === "Work"){
    setWorkExperience((prevExp) => [
      ...prevExp,
      {
        jobTitle: '',
        company: '',
        duration: '',
        country: '',
        description: '',
      },
    ]);
    if(cph.OF){
      setWork2((prevExp) => [
        ...prevExp,
        {
          jobTitle: '',
          company: '',
          duration: '',
          country: '',
          description: '',
        },
      ]);
    }
  }
  if(cph.tag === "Project"){
      setprojects((prevproj) => [
        ...prevproj,
        {
          Title: '',
          duration: '',
          description: '',
        },
      ]);
    if(cph.OF){
      setprojects2((prevproj) => [
        ...prevproj,
        {
          Title: '',
          duration: '',
          description: '',
        },
      ]);
    }
  }
  if(cph.tag === "Edu1"){
    updateTemplate(cph.flag,"Default");
  }
  if(cph.tag === "Lan1"){
    updateTemplate(cph.flag,"Default");
  }
  if(cph.tag === "Project1"){
    updateTemplate(cph.flag,"Default");
  }
  if(cph.tag === "Skill1"){
    updateTemplate(cph.flag,"Default");
  }
  if(cph.tag === "Work1"){
    updateTemplate(cph.flag,"Default");
  }
  if(cph.tag === "Extra1"){
    updateTemplate(cph.flag,"Default");
  }
 }, [cph]);

 useEffect(() => {

 if(!squeeze){
  if(cph.OF){
    const page = document.getElementById("p2");
    if(page){page.style.display = "flex";}
    
  //  pageDivsArray2.forEach((element, index) => {

//
  //  });
  
    returnDiv2(); 
  }
 }
  
  
 }, [pageDivsArray2]);

 useEffect(() => {
  updateTemplate("D","D");
   
   
  }, [pageDivsArray1]);

function addDiv(newDiv,flag){
  
  if (flag) {

    setPageDivsArray2([...pageDivsArray2, newDiv]);
  }
  if (cph.OF) {
 
     setPageDivsArray2([...pageDivsArray2, newDiv]);
   }
  else if(!flag && !cph.OF) {
    
    setPageDivsArray1([...pageDivsArray1, newDiv]);
  }
} 


function returnDiv (){
    setPage1(
      <div className="th" id="resume">
 
        <div id="Upper" className="th2" style={{backgroundColor:Theme2}}>
           <div className="RectanglePicture" style={{ width: '0', height: '0' }}>
  <img
    className="rectangleImage"
    id="rectImage"
    style={{padding: '10px' }}
  />
</div>

<div className="CirclePicture" style={{ width: '0', height: '0' }}>
  <svg
    className="profilepicture"
    id="proP"
    width="150"
    height="150"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 150 150"
  >
    <circle cx="75" cy="75" r="55" fill="url(#profileImage)" />
    <image
      href=""
      width="150"
      height="150"
      x="0"
      y="0"
      clipPath="url(#profileClip)"
    />
    <defs>
      <clipPath id="profileClip">
        <circle cx="75" cy="75" r="55" />
      </clipPath>
      <linearGradient id="profileImage">
        {/* Add gradient if needed */}
      </linearGradient>
    </defs>
  </svg>
</div>



            <div className="Abme">
               <div className="prof">
               <text className="name" style={{fontSize:S2+ 'px'}}></text> </div>
               <div className="info1">
               <text id="nationality" className="parah1" >Nationality:</text> <text  id="Nation" className="parap1" ></text>
               <text id="DOB" className="parah1" >Date of Birth: </text><text  id="Birth" className="parap1"  ></text>
               <text id="gender" className="parah1" > Gender: </text> <text  id="Sex" className="parap1"></text></div>
             <div className="info2"><text id="phone-number" className="parah1" >Contact: </text> <text  id="Phn" className="parap1"></text>
             <text id="email" className="parah1" >Email Address: </text> <text  className="link"  id="mail" ></text></div>
             <div className="spacer">
               <div className="adres"><text id="address" className="parah1" > Address: </text>  <text id="pata" className="parap1"></text></div>
               <div className="adress"><text className="parah1" > LinkedIn Profile: </text>  <text id="linker" className="linkedIn"></text></div>
               <div><text id="AbtMe" className="parah1" >About Me: </text> <text  id="aboutMe" className="parap1"></text></div></div>
            
            </div>
    
        </div>
        {!squeeze ? (
      <div className="insidecont" style={{paddingLeft: 'p3ICpx', paddingRight: 'p3ICpx'}}>
        {pageDivsArray1.map((div, divIndex) => (
          <div key={divIndex} style={{width: '100%'}}>
            {div}
          </div>
        ))}
      </div>
    ) : (
      <div className="insidecont" style={{display: 'flex', flexDirection: 'row', paddingLeft: 'p3ICpx', paddingRight: 'p3ICpx'}}>
        <div style={{width: '50%',height:'100%',borderRightStyle:'solid'}} className="leftside">
          {pageDivsArray1.map((div, divIndex) => (
            <div key={`left-${divIndex}`} style={{width: '100%'}}>
              {div}
            </div>
          ))}
        </div>

        <div style={{width: '50%'}}>
          {pageDivsArray2.map((div, divIndex) => (
            <div key={`right-${divIndex}`} style={{width: '100%',height:'100%'}}>
              {div}
            </div>
          ))}
        </div>
      </div>
    )}
       </div>
    );

}

function returnDiv2(){
  setPage2(
    <div className="th" id="resumep2">
       <div className="insidecont2" style={{paddingLeft:p3IC+'px', paddingRight:p3IC+'px',height:"100%",display:"flex",flexDirection:"column",paddingTop:"20px"}}>
    {pageDivsArray2.map((divsp2, index) => (
      <div key={index} style={{width:"100%"}}>
        {divsp2}
      </div> 
    ))}
    </div>
  </div>   
  );

}





useEffect(() => {
 updateTemplate("Work","Deafult");

 }, [workExperience]);

useEffect(() => {
 updateTemplate("Project","Deafult");
 }, [Projects]);

 useEffect(() => {
 updateTemplate("Edu","Deafult");   
 }, [educationalBackground]);
 useEffect(() => {
   updateTemplate("Personal","Deafult");
  
   }, [personalDetails]);
   useEffect(()=>{
  appendonP2("Project", "Default")
   },[Projects2]);
 useEffect(() => {
   updateTemplate("Lan","Deafult");
   }, [languages]);
    
useEffect(() => {
   updateTemplate("Skills","Deafult");
}, [skills]);

useEffect(() => {
  updateTemplate("IpSk","Deafult");
}, [IPskills]);

 useEffect(() => {
   updateTemplate("Extra","Deafult");
   }, [extra]);
                    

  useEffect(() => {
  
    if (personalDetails.picture) {
   
      // Render the image here since personalDetails.picture is now updated.
      const profilePictureElement = document.getElementById("profilePicture");
      if (profilePictureElement) {
        profilePictureElement.src = URL.createObjectURL(personalDetails.picture);
      }
    }
  }, [personalDetails.picture]);

async function appendonP2(from,type) {
  if(cph.OF){

   
      let edu2 = [];
      if(pageDivsArray2.length > 0){
        const hasEducationDiv = pageDivsArray2.some(div => {
          return div.props && div.props.className === "Education_cont";
        });
      
        // If any div has the class name "Education_cont", set edu to 3
        if (hasEducationDiv) {
          edu2 = educationalBackground;
        }
        else {
          edu2 = edu22;
        }
      }
      const edu2h = edu2.map((edu, index) => `
      <div class="Education" id="Education">
      <div class="degreename">
      <text class="subH" id="DName"  style={{ fontSize: '${S4}px' }}>${edu.degreeName}</text> </div>
      <div id="idg">
      <text id="institute" class="S6"  style={{ fontSize: '${S6}px' }}>${edu.institution}</text>
      <text class="S5" style={{ fontSize: '${S5}px' }}>[${edu.duration}]</text>
        </div>
      <div class="idg"><text class="subH"  style={{ fontSize: '${S4}px' }}><strong>Address:</strong> </text> <text class="S5" style={{ fontSize: '${S5}px' }}>${edu.address}</text> </div>
      <div class="idg"><text class="subH" style={{ fontSize: '${S4}px' }}><strong>Website:</strong> </text><text class="linker" id="linker" style={{ fontSize: '${S5}px'}}>${edu.website}</text> </div>
      <div class="high"><div class="BaddText">&#8226;</div><text class="subH" style={{ fontSize: '${S5}px'}}>${edu.addText1}</text> </div>
      <div class="high"><div class="BaddText">&#8226;</div><text class="subH" style={{ fontSize: '${S5}px'}}>${edu.addText2}</text> </div>
      <div class="high"><div class="BaddText">&#8226;</div><text class="subH" style={{ fontSize: '${S5}px'}}>${edu.addText2}</text> </div>
      <div class="idg"><text class="subH"  style={{ fontSize: '${S5}px'}}>${edu.addBold}</text> </div>
      </div>`
     );
      if(pageDivsArray2.length === 0){
        const newPage = (
          <div className="Edu2" id="page2d1" >
            
          </div>
        );
        
        setPageDivsArray2([...pageDivsArray2, newPage]); 
      }
      if(document.querySelector('.Edu2')){ 
        document.querySelector('.Edu2').innerHTML = edu2h.join('');
      }
    

        let work22 = [];
        if(pageDivsArray2.length > 0){
          const hasworkDiv = pageDivsArray2.some(div => {
            return div.props && div.props.className === "Work-container";
          });
        
          // If any div has the class name "Education_cont", set edu to 3
          if (hasworkDiv) {
            work22 = workExperience;
          }
          else {
            work22 = work2;
          }
        }
        const Job2Html = work22.map((exp, index) => `
        <div id="Job" class="Job">
          <text id="jobTitle" class="subH" style={{ fontSize: '${S4}px' }}>${exp.jobTitle}</text>
          <div id="idg">
          <text id="institute" class="S6" style={{ fontSize: '${S6}px' }}>${exp.company}</text>
          <text id="Duration" class="S5"  style={{ fontSize: '${S5}px' }}>[${exp.duration}]</text>
          </div>
          <div class="idg"><text class="subH"  style={{ fontSize: '${S4}px' }}><strong>Location:</strong> </text><text id="Country" class="S5" style={{ fontSize: '${S5}px' }}>${exp.country}</text></div>
          <text id="Description" class="S5"style={{ fontSize: '${S5}px' }}>${exp.description}</text>
        </div>`
      );
      if(pageDivsArray2.length === 0){
        const newPagew = (
          <div className="Work2" id="page2d1">
            
          </div>
        );
        
        setPageDivsArray2([...pageDivsArray2, newPagew]); 
      }
      if(document.querySelector('.Work2')){ 
        document.querySelector('.Work2').innerHTML = Job2Html.join('');
      }
        
    
  
    let lang22 = [];
    if(pageDivsArray2.length > 0){
      const hasLanDiv = pageDivsArray2.some(div => {
        return div.props && div.props.className === "Language_cont";
      });
    
      if (hasLanDiv) {
        lang22 = languages;
      }
      else {
        lang22 = languages2;
      }
    }
    const LanguageHtml2 = lang22.map((lan, index) => {
      // Split the string at the "(" character
        const parts = lan.split('(');
        const language = parts[0].trim();
        const proficiency = parts[1].replace(')', '').trim();
    
        // Create the HTML structure with language and proficiency in separate <t> elements
        return `
          <div id="idg">
            <t id="bold" class="subH" style={{ fontSize: '${S4}px' }}>${language}</t>
            <t class="S5" style={{ fontSize: '${S5}px' }}>(${proficiency})</t>
          </div>
        `;
       
    });
      if(pageDivsArray2.length === 0){
        const newPagel = (
          <div className="Lan2" id="page2d1">
            
          </div>
        );
        
        setPageDivsArray2([...pageDivsArray2, newPagel]); 
      }
      if(document.querySelector('.Lan2')){ 
        document.querySelector('.Lan2').innerHTML = LanguageHtml2.join('');
      }

      if(from === "Skills"){
      
        const SkillHtml = skills.map((skill, index) => {
          // Check if the current skill is the last item in the array
          const isLastSkill = index === skills.length - 1;
        
          // Create the HTML structure with or without the <text>/ </text> part based on the threshold
          if (isLastSkill) {
            return `
              <div class="skill-box">
                <div class="ski">${skill}</div>
              </div>
            `;
          } else {
            return `
            <div class="skill-box">
              <div class="ski" >${skill}</div>
              <div class="slash">/</div>
            </div>
          `;
          }
        }).join('');
  
       
        if(document.querySelector('.Skills')){
          document.querySelector('.Skills').innerHTML=SkillHtml; 
         }
      } 
      if(from === "IpSk"){
      
        const IPSkillHtml = IPskills.map((skill, index) => {
          // Check if the current skill is the last item in the array
          const isLastSkill = index === IPskills.length - 1;
        
          // Create the HTML structure with or without the <text>/ </text> part based on the threshold
          if (isLastSkill) {
            return `
              <div class="skill-box">
                <div class="ski">${skill}</div>
              </div>
            `;
          } else {
            return `
            <div class="skill-box">
              <div class="ski" >${skill}</div>
              <div class="slash">/</div>
            </div>
          `;
          }
        }).join('');
  
       
        if(document.querySelector('.IPSkills')){
          document.querySelector('.IPSkills').innerHTML=IPSkillHtml; 
         }
      } 
  
      
        let pro22 = [];
        let direct = false;
        if(pageDivsArray2.length > 0){
          const hasProjDiv = pageDivsArray2.some(div => {
            return div.props && div.props.className === "Project-cont";
          });
        
          // If any div has the class name "Education_cont", set edu to 3
          if (hasProjDiv) {
            pro22 = Projects;
            direct = true;
          }
          else {
            pro22 = Projects2;
          }
        }
        const Projects2Html =  pro22.map((pro, index) => {
          return `
               <div id="Proj" class="Proj">
                   <div id="idg">
                       <text id="jobTitle" class="subH" style={{ fontSize: '${S4}px' }}>${pro.Title}</text>
                       ${pro.duration !== '' ? `<text id="Duration" class="S5" style={{ fontSize: '${S5}px' }}>[${pro.duration}]</text>` : ''}
                    </div>
                   <text id="Description" class="S5" style={{ fontSize: '${S5}px' }}>${pro.description}</text>
               </div>
           `;
       });
          if (pageDivsArray2.length === 0) {
       
              const newPagep = (
                <div className="Project-cont2">
                  <div className="Projects2" id="page2d1">
                  </div>
                  </div>
              );
              setPageDivsArray2([...pageDivsArray2, newPagep]);   
          } 
          
          
        
         if(document.querySelector('.Projects2')){ 
           document.querySelector('.Projects2').innerHTML = Projects2Html.join('');
         }
         if(direct){
          if(document.querySelector('.Projects')){ 
            document.querySelector('.Projects').innerHTML = Projects2Html.join('');
          }
         }
         
          

        
}
   
}



async function updateTemplate(from,type) {
  
  
  try {
      returnDiv();
      if(document.getElementById("Nation")){
        document.getElementById("Nation").textContent = personalDetails.nationality;
      }  
      if(document.querySelector('.name')){
        document.querySelector('.name').textContent = `${personalDetails.name}`;
      }
      if(document.getElementById("Birth")){
        document.getElementById("Birth").textContent = personalDetails.dob;
      }
      if(document.getElementById("mail")){
        document.getElementById("mail").textContent = personalDetails.emailAddress;
      }
      if(document.getElementById("Phn")){
        document.getElementById("Phn").textContent = personalDetails.contactNumber;
      }
      if(document.getElementById("aboutMe")){
        document.getElementById("aboutMe").textContent = personalDetails.aboutme;
      }
      if(document.getElementById("Sex")){
        document.getElementById("Sex").textContent = personalDetails.gender;
      }
      if(document.getElementById("pata")){
        document.getElementById("pata").textContent = personalDetails.address;
      }
      if(document.querySelector(".linkedIn")){
        document.querySelector(".linkedIn").textContent = personalDetails.linkedin;
      }
    
        
      
      //now add check here to see where subdiv goes
      const educationHtml = educationalBackground.map((edu, index) => `
      <div class="Education" id="Education">
          <div class="degreename">
              <text class="subH" id="DName" >${edu.degreeName}</text>
          </div>
          <div id="idg">
              <text id="institute" class="S6" >${edu.institution}</text>
              ${edu.duration !== '' ? `<text class="S5">[${edu.duration}]</text>` : ''}
          </div>
          <div class="idg">
              <text class="subH" ><strong>Address:</strong></text>
              <text class="S5" >${edu.address}</text>
          </div>
          <div class="idg">
              <text class="subH" ><strong>Website:</strong></text>
              <text class="link" >${edu.website}</text>
          </div>
          ${edu.addText1 !== '' && edu.addText1 !== undefined ? `<div class="high"><div class="BaddText">&#8226;</div><text class="addText" id="addText${index + 1}" >${edu.addText1}</text></div>` : ''}
          ${edu.addText2 !== '' && edu.addText2 !== undefined ? `<div class="high"><div class="BaddText">&#8226;</div><text class="addText" id="addText${index + 2}" >${edu.addText2}</text></div>` : ''}
          ${edu.addText3 !== ''&& edu.addText3 !== undefined  ? `<div class="high"><div class="BaddText">&#8226;</div><text class="addText" id="addText${index + 3}" >${edu.addText3}</text></div>` : ''}
          <div class="forBold">
          ${edu.addBold !== '' && edu.addBold !== undefined ? `<div class="forBold"><text id="Bold${index + 1}" class="subH" >${edu.addBold}</text></div>` : ''}
          </div>
          </div>`
         ).join('');
  
    
        if(document.querySelector('.Edu')){
          document.querySelector('.Edu').innerHTML = educationHtml;
        }
    

      const JobHtml = workExperience.map((exp, index) => `
      <div id="Job" class="Job">
        <text id="jobTitle" class="subH">${exp.jobTitle}</text>
        <div id="idg">
        <text id="institute" class="S6" >${exp.company}</text>
        <text id="Duration" class="S5"  >[${exp.duration}]</text>
        </div>
        <div class="idg"><text class="subH" ><strong>Location:</strong> </text><text id="Country" class="S5">${exp.country}</text></div>
        <text id="Description" class="S5">${exp.description}</text>
      </div>`
    ).join('');
   
  
    if(document.querySelector('.Work')){
      document.querySelector('.Work').innerHTML=JobHtml;
    }
  

    const LanguageHtml = languages.map((lan, index) => {
      // Split the string at the "(" character
        const parts = lan.split('(');
        const language = parts[0].trim();
        const proficiency = parts[1].replace(')', '').trim();
    
        // Create the HTML structure with language and proficiency in separate <t> elements
        return `
          <div id="idg", class="languageinside">
            <t id="bold" class="subH" >${language}</t>
            <t class="S5" id="divend">[${proficiency}]</t>
          </div>
        `;
       
    }).join('');

  
    
       if(document.querySelector('.Lan')){
        document.querySelector('.Lan').innerHTML=LanguageHtml;
      
    }
 

     
    if(from === "Skills"){
      const SkillHtml = skills.map((skill, index) => {
        // Check if the current skill is the last item in the array
        const isLastSkill = index === skills.length - 1;
      
        // Create the HTML structure with or without the <text>/ </text> part based on the threshold
        if (isLastSkill) {
          return `
            <div class="skill-box">
              <div class="ski">${skill}</div>
            </div>
          `;
        } else {
          return `
          <div class="skill-box">
            <div class="ski">${skill}</div>
            <div class="slash">/</div>
          </div>
        `;
        }
      }).join('');

     
      if(document.querySelector('.Skills')){
        document.querySelector('.Skills').innerHTML=SkillHtml; 
       }
    }  
  
      
    const IPSkillHtml = `
  <div class="outsider">
    ${IPskills.map((ipsk, index) => {
      let classes = 'main_container'; // Initialize classes variable
    
      if (StyleType === 'Box') {
        classes += ' box_style'; // Add box_style class if StyleType is Box
      } else if (StyleType === 'Bullets') {
        classes += ' bullet_style'; // Add bullet_style class if StyleType is Bullets
      }
    
      let slash = ''; // Initialize slash variable
      if (StyleType === 'Default' && index < IPskills.length - 1) {
        slash = ' /'; // Add slash if StyleType is Default and not the last item
      }
    
      return `
        <div class="${classes}">
          <div class="bullet_if_required"></div>
          <div class="skill_point">${ipsk}${slash}</div>
        </div>
      `;
    }).join('')}
  </div>
`;
    

     
      if(document.querySelector('.Ipsk')){
        document.querySelector('.Ipsk').innerHTML=IPSkillHtml; 
       }
    
    
     

        const ProjectHtml = Projects.map((pro, index) => {
          return `
          <div id="Proj" class="Proj">
              <div id="idg">
                  <text id="jobTitle" class="subH">${pro.Title}</text>
                  ${pro.duration !== '' ? `<text id="Duration" class="S5">[${pro.duration}]</text>` : ''}
              </div>
              <text id="Description" class="S5">${pro.description}</text>
          </div>
      `;
  
        });
        
          if (document.querySelector('.Projects')) {
            document.querySelector('.Projects').innerHTML = ProjectHtml.join('');
          }
         
        
          if(extra.length > 0){
            for (let i = 0; i < extra.length; i++) {
              
              const ExtraHtml = `
  <div class="Extra${i}" id="Empty_Inner">
    ${extra[i].Title !== '' ? `<div><h3 class="LS">${extra[i].Title}</h3></div>` : ''}
    <div class="E-cont${i}" id="EMT"> 
      ${extra[i].Items.map((item, itemIndex) => {
        const style = `
          color: ${item.Item_color};
          font-size: ${item.Item_size};
          font-weight: ${item.Item_font};
        `;
        return `
          <div id="Item_E${itemIndex}" class="EItem">
            ${item.Item_heading !== null && item.Item_heading !== undefined ? `<div class="subH" style="font-size: ${S4}px; font-weight: bold;">${item.Item_heading}</div>` : ''}
              <div class="flexcont"><div class="S5" style="${style}" id="Afth">${item.Item_text}</div></div>
            ${item.Item_link !== null && item.Item_link !== undefined ? `<div class="link">${item.Item_link}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  </div>
`;



            
              if(document.getElementById(`Empty-conter${i}`)){
                document.getElementById(`Empty-conter${i}`).innerHTML=ExtraHtml; 
              }
             
            }
          }
        
   styling();
    applyStyles();
      
      if(cph.OF){
        appendonP2(from,type);
      }
      if(squeeze){
        appendonP2('update','sqeeze');
      }
    
      if (personalDetails.picture) {
        const reader = new FileReader();
        reader.onload = function () {
          const imageDataUri1 = reader.result;
          setIData(imageDataUri1)
          // Load the image into the rectangle div
          const rectangleImageElement = document.getElementById('rectImage');
          if (rectangleImageElement) {
            rectangleImageElement.src = imageDataUri1;
            rectangleImageElement.style.margin = '10px';
            const rectanglePictureElement = document.querySelector('.RectanglePicture');
            if (rectanglePictureElement) {
              rectanglePictureElement.style.width = '130px';
              rectanglePictureElement.style.height = '150px';
            }
          }
        };
        reader.readAsDataURL(personalDetails.picture);
      }
      

           
   
  
  } catch (error) {
    console.error('Error updating template:', error);
  }
}



const handleFontChange = (e) => {
  setFont(e.target.value);
};



  const handleAddLanguage = () => {
    let temp = false;
    if(cph.value+landivh+20 > MaxThres){
      temp = true;
    }
    setCPH({ value: cph.value + landivh, tag: "Lan",flag:"",OF:temp });
    
  };
  const handleRemLanguage = () => {
    // Create a copy of the skills array excluding the last element
    const updatedLanguage = [...languages.slice(0, -1)];
    const updatedLanguage2 = [...languages2.slice(0, -1)];
    // Update the skills state with the new array
    setLanguages(updatedLanguage);
    setLanguages2(updatedLanguage2);
  };
  
  const handleAddSkill = () => {
    if (skillsInput.trim() !== '') {
      setSkills([...skills, skillsInput]);
      setSkillsInput('');
    }
  };
  const handleRemSkill = () => {
    // Create a copy of the skills array excluding the last element
    const updatedSkills = [...skills.slice(0, -1)];
    // Update the skills state with the new array
    setSkills(updatedSkills);
  };

  const handleAddSkillIP = () => {
    if (IpskInput.trim() !== '') {
      setIpSkills([...IPskills, IpskInput]);
      setipskInput('');
    }
  };
  const handleRemSkillIP = () => {
    // Create a copy of the skills array excluding the last element
    const updatedSkills = [...IPskills.slice(0, -1)];
    // Update the skills state with the new array
    setIpSkills(updatedSkills);
  };
  
  

  const handlePersonalDetailsChange = (e) => {
    const { name, value, type, checked, files } = e.target;
  
    if (type === "checkbox") {
   
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        [name]: checked,
        picture: checked && files && files.length > 0 ? files[0] : personalDetails.picture,
      }));
    } else {
 
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
        picture: files && files.length > 0 ? files[0]: personalDetails.picture,
      }));
    }
  };
  
  const handleEduDetailsChange = (e, index,from) => {
   
   
    if(from === 'b' && firsttime1){
      setCPH({ value: cph.value + 15})
      setfirsttime1(false);
    }
    if(from === 't1' && firsttime2){
      setCPH({ value: cph.value + 15})
      setfirsttime2(false);
    }
    if(from === 't2' && firsttime3){
      setCPH({ value: cph.value + 15})
      setfirsttime3(false);
    }
    if(from === 't3' && firsttime4){
      setCPH({ value: cph.value + 15})
      setfirsttime4(false);
    }
    
    const { name, value } = e.target;
    setEducationalBackground((prevBackground) => {
      const updatedBackground = [...prevBackground];
      updatedBackground[index] = {
        ...updatedBackground[index],
        [name]: value,
      };
      return updatedBackground;
    });
    if(cph.OF){
      setEdu2((prevBackground) => {
        const updatedBackground = [...prevBackground];
        updatedBackground[edu22.length+index-educationalBackground.length] = {
          ...updatedBackground[edu22.length+index-educationalBackground.length],
          [name]: value,
        };
        return updatedBackground;
      });
    }
  };
  

  const handleAddEducation = () => {
    
    let temp = false;
    if(cph.value+edudivh+98 > MaxThres){
      temp = true;
    }
    if(squeeze){setCPH({ value: cph.value + edudivh, tag: "Edu",flag:"",OF:temp});}
    else{setCPH({ value: cph.value + edudivh, tag: "Edu",flag:"",OF:temp});}
    
  };
  

  const handleWorkDetailsChange = (e,index) => {
    const { name, value } = e.target;
    setWorkExperience((prevExp) => {
      const updatedExperience = [...prevExp];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [name]: value,
      };
      return updatedExperience;
    });
    if(cph.OF){
      setWork2((prevExp) => {
        const updatedExperience = [...prevExp];
        updatedExperience[work2.length+index-workExperience.length] = {
          ...updatedExperience[work2.length+index-workExperience.length],
          [name]: value,
        };
        return updatedExperience;
      });
    }
  };

  const handleAddExp = () => {
    let temp = false;
    if(cph.value+workdivh+98 > MaxThres){
      temp = true;
    }
    if(squeeze){setCPH({ value: cph.value + workdivh, tag: "Work",flag:"",OF:temp});
  }
    else{setCPH({ value: cph.value + workdivh, tag: "Work",flag:"",OF:temp});
  }
     };

  const handleProjectsChange = (e,index) => {
    const { name, value } = e.target;
   
      setprojects((prevproj) => {
      const updatedProj = [...prevproj];
      updatedProj[index] = {
        ...updatedProj[index],
        [name]: value,
      };
      return updatedProj;
    });
    if (cph.OF) {
      setprojects2((prevproj2) => {
        const updatedProj2 = [...prevproj2];
        const projects2Index = Projects2.length+index-Projects.length; // Calculate the correct index for projects2
        updatedProj2[projects2Index] = {
          ...updatedProj2[projects2Index],
          [name]: value,
        };
        return updatedProj2;
      });
    } 
  };

  const handleAddProject = () => {
    let temp = false;
    if(cph.value+projdivh+88 > MaxThres){
      temp = true;
    }
    if(squeeze){ setCPH({ value: cph.value + projdivh, tag: "Project",flag:"",OF:temp});
  }
    else{ setCPH({ value: cph.value + projdivh, tag: "Project",flag:"",OF:temp});
  }
     };

  useEffect(() => {
    // Check if a new project has been added
    if (Projects.length > prevProjectsLength) {
        updateTemplate("Project", "Add");
        setPrevProjectsLength(Projects.length); // Update the previous length
    }
}, [Projects, prevProjectsLength,updateTemplate]);
  

  // Function to add a page to the PDF
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
  
    if (p2 && pageDivsArray2.length > 0 && !squeeze) {
      pdf.addPage(); // Add a new page before adding p2
      await addPage(p2, 2);
    }
  
    if (!p1 && !p2) {
      console.warn("No content to save in the PDF");
      return;
    }
  
    pdf.save('Custom_CV.pdf');
    setLoading(false);
  }


  
  
  


const SavePDF = () => {
  saveAsPDF();
}



const handleExtraSectionChange = (e, index) => {
  const { name, value } = e.target;
  const updatedExtra = [...extra];
  updatedExtra[index][name] = value;
  setExtra(updatedExtra);
  if(cph.OF){
    const updatedExtra2 = [...extra2];
      updatedExtra2[extra2.length+index-extra.length][name] = value;
    setExtra2(updatedExtra2);
  }
};

const handleTextPropertyChange = (e, sectionIndex, itemIndex) => {
  const { name, value } = e.target;

  setExtra((prevItems) => {
    const updatedExperience = [...prevItems];
    const updatedSection = { ...updatedExperience[sectionIndex] };

    if (updatedSection.Items && updatedSection.Items[itemIndex]) {
      // Update the property of the specific item within the section
      updatedSection.Items[itemIndex] = {
        ...updatedSection.Items[itemIndex],
        [name]: value,
      };
    }

    updatedExperience[sectionIndex] = updatedSection;
    return updatedExperience;
  });
  if(cph.OF){
    setExtra2((prevItems) => {
      const updatedExperience1 = [...prevItems];
      const updatedSection1 = { ...updatedExperience1[extra2.length+sectionIndex-extra.length] };
  
      if (updatedSection1.Items && updatedSection1.Items[itemIndex]) {
        // Update the property of the specific item within the section
        updatedSection1.Items[itemIndex] = {
          ...updatedSection1.Items[itemIndex],
          [name]: value,
        };
      }
   
      updatedExperience1[extra2.length+sectionIndex-extra.length] = updatedSection1;
      return updatedExperience1;
    });
  }

  };

const handleAddSec = (curr,next) => {
        let count = extra.length;
        let temp3 = false;
       
        
        if(cph.value+workh1+120 > MaxThres){
          temp3 = true;
        }
         setCPH({ value: cph.value + workh1, tag: "Extra1",flag:"Extra",OF:temp3 });
         
          addDiv(
           <div id={"Empty-conter"+count} className="MainEdiv">
          </div>
          );
        
        setExtra((prevExp) => [
          ...prevExp,
          {
            Title:'',
            Items:[],
          },
        ]);
        if(cph.OF){
          setExtra2((prevExp) => [
            ...prevExp,
            {
              Title:'',
              Items:[],
            },
          ]);
        }
       
        
        setcontent('extra');
       
        updateTemplate("Extra"); 
};
const divSetter = (from) => {
  setcontent(from);
  
switch(from){
  
  case 'edu':
    if(firsttimee){
      setFTE(false);
      let temp = false;
        if(cph.value+eduh1+98 > MaxThres){
         temp = true;
         }
         if(squeeze){ setCPH({ value: cph.value + eduh1, tag: "Edu1" ,flag:from,OF:temp});
        }
         else{ setCPH({ value: cph.value + eduh1, tag: "Edu1" ,flag:from,OF:temp});
        }
        
          addDiv(
            <div className="Education_cont">
            <div><h3 className="LS">Education and Training</h3></div>
            <div className="Edu">
               
             </div>
           </div>,temp
          );
    }
    
  break;
  case 'work':
    if(firsttimew){
      setFTW(false)
      let temp3 = false;
        if(cph.value+workh1+98 > MaxThres){
         temp3 = true;
       }
       if(squeeze){setCPH({ value: cph.value + workh1, tag: "Work1",flag:from,OF:temp3 });
      }
       else{setCPH({ value: cph.value + workh1, tag: "Work1",flag:from,OF:temp3 });
      }
          addDiv(
            <div className="Work-container">
              <div><h3 className="LS">Work Experience</h3></div>
               <div className="Work">
                  
                </div>
           </div>,temp3
          );
    }
    
  break;
  case 'lan':
  if(firsttimel){
    setFTL(false); 
    let temp2 = false;
    if(cph.value+lanhe1+78 > MaxThres){
     temp2 = true;
      }
     setCPH({ value: cph.value + lanhe1, tag: "Lan1",flag:from,OF:temp2 });
   
       addDiv(
         <div className="Language_cont">
         <div><h3 className="LS">Language Skills</h3></div>
         <div className="Lan_outer">
           <div className="Lan">

           </div>
            
          </div>
     </div>,temp2
       );
  }
  break;
  case 'skills':
    if(firsttimesk){
      setFTS(false);
      let temp5 = false;
         if(cph.value+Skillh1+100 > MaxThres){
           temp5 = true;
         }
         if(squeeze){ setCPH({ value: cph.value + Skillh1*1.7, tag: "Skill1",flag:from,OF:temp5});
        }
         else{ setCPH({ value: cph.value + Skillh1, tag: "Skill1",flag:from,OF:temp5});
        }
          addDiv(
            <div className="Skills-cont" >
            <div><h3 className="LS">Technical Skills</h3></div>
             <div className="Skills">
              
              </div>
         </div>,temp5
          ); 
    }
   
  break;

  case 'IpSk':
    if(firsttimeIsk){
      console.group("Div setter IPSK and true")
      setFTIS(false);
      let temp5_1 = false;
         if(cph.value+IPSKh1+100 > MaxThres){
           temp5_1 = true;
         }
         if(squeeze){ setCPH({ value: cph.value + IPSKh1*1.7, tag: "IpSk1",flag:from,OF:temp5_1});
        }
         else{ setCPH({ value: cph.value + IPSKh1, tag: "IpSk1",flag:from,OF:temp5_1});
        }
          addDiv(
            <div className="ipsk_cont">
            <div><h3 className="LS">Interpersonal Skills</h3></div>
             <div className="Ipsk">
              
              </div>
         </div>,temp5_1
          ); 
    }
   
  break;

  case 'proj':
    if(firsttimep){
      setFTP(false);
      let temp4 = false;
      if(cph.value+projh1+78 > MaxThres){
        temp4 = true;
      }
      setCPH({ value: cph.value + projh1, tag: "Project1",flag:from,OF:temp4 });
        addDiv(
         <div className="Project-cont" >
          <div><h3 className="LS">Projects</h3></div>

          <div className="Projects" >
            
           </div>
      </div>,temp4
        ); 
    }
   
  break;

  default:
 //pass
  break;
}
updateTemplate(from,"Default");
}
  
  const handleHandTClick = (section,index) => {
    // Create a new object with the desired data
    
    const newItem = {
      link:false,
      heading: true,
      text:true,
      Item_heading: '',
      Item_link:'',
      Item_text: '',
      Item_text1: '',
      Item_text2: '',
      Item_font: '',
      Item_size: '',
      Item_color: '',
    };
  
    // Check if the section has an 'Items' array, and if not, create it
    if (!section.Items) {
      section.Items = [];
    }
    if(cph.OF){
      if(!extra2[extra2.length+index-extra.length].Items){
        extra2[extra2.length+index-extra.length].Items = [];
      }
    }
  
    // Append the new item to the 'Items' array of the current section
    section.Items.push(newItem);
    if(cph.OF) {extra2[extra2.length+index-extra.length].Items.push(newItem);}
    
  
    // Update the state
    setExtra((prevExtra) => [...prevExtra]);
    if(cph.OF){
    setExtra2((prevExtra) => [...prevExtra]);
    }
  };
  

  const handleTonlyClick = (section,index) => {
  
    const newItem = {
      link:false,
      heading: false,
      text:true,
      Item_text: '',
      Item_text1: '',
      Item_text2: '',
      Item_link: '',
      Item_font: '',
      Item_size: '',
      Item_color: '',
    };
  
    // Check if the section has an 'Items' array, and if not, create it
    if (!section.Items) {
      section.Items = [];
    }
    if(cph.OF){
      if(!extra2[extra2.length+index-extra.length].Items){
        extra2[extra2.length+index-extra.length].Items = [];
      }
    }
  
    // Append the new item to the 'Items' array of the current section
    section.Items.push(newItem);
    if(cph.OF){ extra2[extra2.length+index-extra.length].Items.push(newItem);}
   

    // Update the state
    setExtra((prevExtra) => [...prevExtra]);
   if(cph.OF){
    setExtra2((prevExtra) => [...prevExtra]);
    }
  };
  const handleLinkClick = (section,index) => {
  
    const newItem = {
      link:true,
      text:false,
      heading:false,
      Item_text: '',
      Item_text1: '',
      Item_text2: '',
      Item_link: '',
      Item_font: '',
      Item_size: '',
      Item_color: '',
    };
  
    // Check if the section has an 'Items' array, and if not, create it
    if (!section.Items) {
      section.Items = [];
    }
    if(cph.OF){
      if(!extra2[extra2.length+index-extra.length].Items){
        extra2[extra2.length+index-extra.length].Items = [];
      }
    }
  
    // Append the new item to the 'Items' array of the current section
    section.Items.push(newItem);
    if(cph.OF){ extra2[extra2.length+index-extra.length].Items.push(newItem);}
   

    // Update the state
    setExtra((prevExtra) => [...prevExtra]);
   if(cph.OF){
    setExtra2((prevExtra) => [...prevExtra]);
    }
  };


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
  </div>
) : null}

      <div className="left-section" id="left">
      <div className="NavigationButs">
      {Object.values(ButtonOrder).map((value, index) => {
        const IconComponent = iconMapping[value];
        return (
          <div key={index} onClick={(e)=>divSetter(value)} className="round_button" title={status[value]}>
            <IconComponent />
          </div>
        );
      })}
      </div>
        {sectionType ? (
          <div style={{marginRight:"auto", marginLeft:"auto", maxWidth:"80%"}}>
            {content === 'per' && (
              <div>
                { <div>
            <h2>Personal Details</h2>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={personalDetails.name} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input type="date" className="DOBer" name="dob" value={personalDetails.dob} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <input type="text" name="gender" value={personalDetails.gender} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input type="text" name="contactNumber" value={personalDetails.contactNumber} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                <input type="email" name="emailAddress" value={personalDetails.emailAddress} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Nationality:</label>
                <input type="text" name="nationality" value={personalDetails.nationality} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input type="text" name="address" value={personalDetails.address} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>LinkedIn:</label>
                <input type="email" name="linkedin" value={personalDetails.linkedin} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>About Me:</label>
                <input type="text" name="aboutme" value={personalDetails.aboutme} onChange={handlePersonalDetailsChange} />
              </div>
              <div className="form-group">
                <label>Add Picture:</label>
                   <input
                     type="checkbox"
                     name="addPicture"
                     checked={personalDetails.addPicture}
                     onChange={handlePersonalDetailsChange}
                   />
                 </div>
                 {personalDetails.addPicture && (
                   <div className="form-group">
                     <label>Upload Picture:</label>
                     <input type="file" 
                      name="picture"
                      accept="image/*" 
                      onChange={handlePersonalDetailsChange} />

                </div>
              )}
              <div className="form-group">
              <label>Resume Type:</label>
              <select
              className="Select"
                      name="pagenos"
                      value={pagenos}
                      onChange={(e) => setPagenos(e.target.value)}
                    >
                      {PageNumbers.map((level, index) => (
                        <option key={index} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
              </div>
              <div className="SecBut">
               <button type="button" className="SECBUT" style={{ padding: "7px 20px"}} onClick={() => handleAddSec("per","edu")}>
                    Add Section
                  </button></div>
            </form>
          </div>}
              </div>
            )}
            {content === 'edu' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                { <div>
              {educationalBackground.map((edu, index) => (
             <div key={index}>
               <h2>Educational Background {index + 1}</h2>
               <form>
                 <div className="form-group1">
                   <label>Degree Title:</label>
                   <input
                     type="text"
                     name="degreeName"
                     value={edu.degreeName}
                     onChange={(e) => handleEduDetailsChange(e, index,'d')}
                   />
                 </div>

                <div className="form-group1">
                  <label>Name of Institute:</label>
                  <input type="text" 
                  name="institution"
                  value={edu.institution} 
                  onChange={(e) =>  handleEduDetailsChange(e, index,'d')} />
                </div>

                <div className="form-group1">
                  <label>Duration of Studies:</label>
                  <input type="text"
                   name="duration"
                    value={edu.duration}
                     onChange={(e) => handleEduDetailsChange(e, index,'d')} />
                </div>

                <div className="form-group1">
                  <label>Institution Address:</label>
                  <input type="text" 
                  name="address"
                   value={edu.address} 
                   onChange={(e) => handleEduDetailsChange(e, index,'d')} />
                   </div>
                   <div className="form-group1">
                   <label>Institution Webpage::</label>
                 <input type="text" 
                 name="website"
                 value={edu.website} 
                 onChange={(e) =>  handleEduDetailsChange(e, index,'d')} />
                 </div>
                 <div className="form-group1">
      
                  <label>Additional info:</label>
                  <input type="text" 
                  placeholder="Honors"
                  name="addBold"
                  value={edu.addBold} 
                  onChange={(e) =>  handleEduDetailsChange(e, index,'b')} />
                </div>
                <div className="form-group1">
      
                  <input type="text" 
                  placeholder="Degree Highlight"
                  name="addText1"
                  value={edu.addText1} 
                  onChange={(e) =>  handleEduDetailsChange(e, index,'t1')} />
                </div>
                <div className="form-group1">
      
                  <input type="text" 
                  placeholder="Degree Highlight"
                  name="addText2"
                  value={edu.addText2} 
                  onChange={(e) =>  handleEduDetailsChange(e, index,'t2')} />
                </div>
                <div className="form-group1">
      
                  <input type="text" 
                  placeholder="Degree Highlight"
                  name="addText3"
                  value={edu.addText3} 
                  onChange={(e) =>  handleEduDetailsChange(e, index,'t3')} />
                </div>
                
                 <div className="form-group1">
                   <button type="button" className="AddBut" onClick={() => handleAddEducation()}>+</button>
                 </div>
               </form>
             </div>
           ))}
           <div className="SecBut">
               <button type="button" className="SECBUT" style={{ padding: "7px 20px"}} onClick={() => handleAddSec('edu',"work")}>
                    Add Section
                  </button>
            </div>
      
            </div>}
              </div>
            )}
            {content === 'work' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                {  <div>
              {workExperience.map((exp, index) => (
             <div key={index}>
               <h2>Work Experience {index + 1}</h2>
               <form>
                 <div className="form-group1">
                   <label>Job Title:</label>
                   <input
                     type="text"
                     name="jobTitle"
                     value={exp.jobTitle}
                     onChange={(e) => handleWorkDetailsChange(e, index)}
                   />
                 </div>

                <div className="form-group1">
                  <label>Name of Job Provider:</label>
                  <input type="text" 
                  name="company"
                  value={exp.company} 
                  onChange={(e) =>  handleWorkDetailsChange(e, index)} />
                </div>

                <div className="form-group1">
                  <label>Duration of Position:</label>
                  <input type="text"
                   name="duration"
                    value={exp.duration}
                     onChange={(e) => handleWorkDetailsChange(e, index)} />
                </div>

                <div className="form-group1">
                  <label>Location:</label>
                  <input type="text"
                   name="country"
                    value={exp.country}
                     onChange={(e) => handleWorkDetailsChange(e, index)} />
                </div>

                <div className="form-group1">
                  <label>Description of Job:</label>
                  <textarea
                  name="description"
                  className="TA"
                   value={exp.description} 
                   onChange={(e) => handleWorkDetailsChange(e, index)} />

                 <div className="form-group1">
                   <button type="button" className="AddBut" onClick={() => handleAddExp()}>+</button>
                 </div>
                 </div>
               </form>
             </div>
           ))}
           <div className="SecBut">
                <button type="button" className="SECBUT" style={{ padding: "7px 20px"}} onClick={() => handleAddSec('work',"lan")}>
                    Add Section
                  </button></div>
      
            </div>}
              </div>
            )}
            {content === 'lan' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                { <div>
                <h2>Languages</h2>
                
                  <div className="form-group">
                    <label>Language: </label>
                    <input
                      type="text"
                      name="language"
                      value={languagesInput}
                      style={{marginTop:"7px", marginBottom:"10px"}}
                      onChange={(e) => setLanguagesInput(e.target.value)}
                    />
                    <label>Proficiency Level:</label>
                    <select
                      name="proficiency"
                      className="Select"
                      style={{marginTop:"7px", marginBottom:"10px"}}
                      value={selectedProficiency}
                      onChange={(e) => setSelectedProficiency(e.target.value)}
                    >
                      {ProficiencyLevels.map((level, index) => (
                        <option key={index} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <div className="Buttons1">
                   <div className="lefttside"> <button type="button" className="AddBut" style={{padding:"4px 7px"}} onClick={handleRemLanguage}>-</button></div> 
                   <div className="rightside"> <button type="button" className="AddBut" onClick={handleAddLanguage}>+</button></div>
                  
                  </div>
                  </div>
                  
                  <div className="SecBut">
               <button type="button" className="SECBUT" style={{ padding: "7px 20px"}} onClick={() => handleAddSec('lan',"skills")}>
                    Add Section
                  </button></div>
                
              </div>}
              </div>
            )}

            {content === 'IpSk' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                { <div>
                  <h2>Interpersonal Skills</h2>
                  <form>
                    <div className="form-group">
                      <label>Skill Name: </label>
                      <input
                        type="text"
                        name="skill"
                        value={IpskInput}
                        onChange={(e) => setipskInput(e.target.value)}
                      />
                      <div className="form-group1">
                <div className="Buttons1">
                    <div className="leftside"><button type="button" className="AddBut2" onClick={handleRemSkillIP}>-</button></div>
                    <div className="rightside"><button type="button" className="AddBut2" onClick={handleAddSkillIP}>+</button></div>
                  
                </div>
                </div>
                         </div>
                    <select
                  style={{ maxWidth:"300px",width:"110%", padding: '7px', borderRadius: '4px', marginBottom:'10px' }}
                  value={StyleType}
                 onChange={(e)=>handleSVTChangeIP(e.target.value)}
                     >
                  {skill_view_typeIP.map((skill, index) => (
                  <option key={index} value={skill}>
                  {skill}
                   </option> 
                 ))}
                  </select>
                   
                    <div className="SecBut">
               <button type="button" className="SECBUT" style={{ padding: "7px 20px"}} onClick={() => handleAddSec('IpSk',"proj")}>
                    Add Section
                  </button></div>
                  </form>
                </div>}
              </div>
            )}

            {content === 'skills' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                { <div>
                  <h2>Skills</h2>
                  <form>
                    <div className="form-group">
                      <label>Skill Name: </label>
                      <input
                        type="text"
                        name="skill"
                        value={skillsInput}
                        onChange={(e) => setSkillsInput(e.target.value)}
                      />
                      <div className="form-group1">
                <div className="Buttons1">
                    <div className="leftside"><button type="button" className="AddBut2" onClick={handleRemSkill}>-</button></div>
                    <div className="rightside"><button type="button" className="AddBut2" onClick={handleAddSkill}>+</button></div>
                  
                </div>
                </div>
                         </div>
                    <select
                  style={{ maxWidth:"300px",width:"110%", padding: '7px', borderRadius: '4px',marginBottom:"10px"}}
                  value={SVT}
                 onChange={(e)=>handleSVTChange(e.target.value)}
                     >
                  {skill_view_type.map((skill, index) => (
                  <option key={index} value={skill}>
                  {skill}
                   </option> 
                 ))}
                  </select>
                  
                    <div className="SecBut">
               <button type="button" className="SECBUT" style={{ padding: "7px 20px"}} onClick={() => handleAddSec('skills',"proj")}>
                    Add Section
                  </button></div>
                  </form>
                </div>}
              </div>
            )}
            {content === 'proj' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                {<div>
                  {Projects.map((proj, index) => (
                 <div key={index}>
                   <h2>Project {index + 1}</h2>
                   <form>
                     <div className="form-group1">
                       <label>Project Title:</label>
                       <input
                         type="text"
                         name="Title"
                         value={proj.Title}
                         onChange={(e) => handleProjectsChange(e, index)}
                       />
                     </div>
    
                    <div className="form-group1">
                      <label>Duration of Project:</label>
                      <input type="text"
                       name="duration"
                        value={proj.duration}
                         onChange={(e) => handleProjectsChange(e, index)} />
                    </div>
    
                    <div className="form-group1">
                      <label>Description of Project:</label>
                      <textarea
                      className="TA"
                      name="description"
                       value={proj.description} 
                       onChange={(e) => handleProjectsChange(e, index)} />
     
                       <button type="button" className="AddBut2" onClick={() => handleAddProject()}>+</button>
                     
                     </div>
                   </form>
                 </div>
               ))}
               
               <div className="form-group1">
               <div className="SecBut" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div className="SecBut"> 
                  <button type="button" style={{ padding: "7px 20px", marginLeft: "auto" }} onClick={() => handleAddSec('proj',"pdf")}>
                    Add Section
                  </button>
                </div>
    </div>
                </div>
          
                </div>}
              </div>
            )}

             {content === 'pdf' && (
              <div style={{marginLeft:"auto",marginRight:"auto"}}>
                {<div>
                  <h3>Customize Tools:</h3>
                  <div style={{display:"flex", flexDirection:"column"}}>
         <div style={{display:"block"}}>
          <h4>Theme colors</h4>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
         <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle1"
            title="Outside Border"
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
          type="none"
          className="colorer"
          value={Theme1}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme1(e.target.value)}
          />
          </div>
          {colorPickerOpen1 && (
            <div className="color-picker-container" 
            
            style={{
              top: circlePosition.top+120,
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
             title="Personal information background"
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
          type="none"
          value={Theme2}
          className="colorer"
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme2(e.target.value)}
          />
          </div>
           {colorPickerOpen2 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
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
             title="Personal information inputs"
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
          type="none"
          value={Theme3}
          className="colorer"
          style={{marginLeft:"2px",padding:"5px", marginTop:"15px", width:"55px", height:"10px"}}
          onChange={(e) => settheme3(e.target.value)}
          />
          </div>
           {colorPickerOpen3 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={Theme3}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC3 = document.querySelector(".color-circle3");
               CC3.style.backgroundColor=color;
               settheme3(color)
             }}
           />
           </div>)}
            
            <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle6"
            title="Name color"
            onClick={(e)=>toggleColorPicker(e,6)}
            style={{
              backgroundColor:Theme4,
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid black',
              margin:'10px'
            }}
          ></div>
          <input
          type="none"
          className="colorer"
          value={Theme4}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme4(e.target.value)}
          />
          </div>
          {colorPickerOpen6 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
            <HexColorPicker
             color={Theme4}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC6 = document.querySelector(".color-circle6");
               CC6.style.backgroundColor=color;
               settheme4(color)
             }}
           />
           </div>)}
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
          <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle7"
            title="Section headings"
            onClick={(e)=>toggleColorPicker(e,7)}
            style={{
              backgroundColor:Theme5,
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid black',
              margin:'10px'
            }}
          ></div>
          <input
          type="none"
          className="colorer"
          value={Theme5}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme5(e.target.value)}
          />
          </div>
          {colorPickerOpen7 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
            <HexColorPicker
             color={Theme5}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC7 = document.querySelector(".color-circle7");
               CC7.style.backgroundColor=color;
               settheme5(color)
             }}
           />
           </div>)}

          <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle8"
            title="Section identifiers"
            onClick={(e)=>toggleColorPicker(e,8)}
            style={{
              backgroundColor:Theme6,
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid black',
              margin:'10px'
            }}
          ></div>
          <input
          type="none"
          className="colorer"
          value={Theme6}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme6(e.target.value)}
          />
          </div>
          {colorPickerOpen8 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
            <HexColorPicker
             color={Theme6}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC8 = document.querySelector(".color-circle8");
               CC8.style.backgroundColor=color;
               settheme6(color)
             }}
           />
           </div>)}
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
         <div style={{display:"flex", flexDirection:"row"}}>
          <div
            className="color-circle9"
            title="Section inputs"
            onClick={(e)=>toggleColorPicker(e,9)}
            style={{
              backgroundColor:Theme7,
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              border: '1px solid black',
              margin:'10px'
            }}
          ></div>
          <input
          type="none"
          className="colorer"
          value={Theme7}
          style={{marginLeft:"2px",marginTop:"15px", padding:"5px", width:"55px", height:"10px"}}
          onChange={(e) => settheme7(e.target.value)}
          />
          </div>
          {colorPickerOpen9 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
            <HexColorPicker
             color={Theme7}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC9 = document.querySelector(".color-circle9");
               CC9.style.backgroundColor=color;
               settheme7(color)
             }}
           />
           </div>)}

           <div style={{display:"flex", flexDirection:"row"}}>
            <div
             className="color-circle4"
             title="Section container"
             onClick={(e)=>toggleColorPicker(e,4)}
             style={{
               backgroundColor:contbg,
               width: '25px',
               height: '25px',
               borderRadius: '50%',
               border: '1px solid black',
               margin:'10px'
             }}
           ></div>
           <input
          type="none"
          value={contbg}
          className="colorer"
          style={{marginLeft:"2px",padding:"5px", marginTop:"15px", width:"55px", height:"10px"}}
          onChange={(e) => setContbg(e.target.value)}
          />
          </div>
           {colorPickerOpen4 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={contbg}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC4 = document.querySelector(".color-circle4");
               CC4.style.backgroundColor=color;
               setContbg(color)
             }}
           />
           </div>)}
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
           <div style={{display:"flex", flexDirection:"row"}}>
            <div
             className="color-circle5"
             onClick={(e)=>toggleColorPicker(e,5)}
             style={{
               backgroundColor:bcall,
               width: '25px',
               height: '25px',
               borderRadius: '50%',
               border: '1px solid black',
               margin:'10px'
             }}
           ></div>
           <input
          type="none"
          value={bcall}
          className="colorer"
          style={{marginLeft:"2px",padding:"5px", marginTop:"15px", width:"55px", height:"10px"}}
          onChange={(e) => setBcall(e.target.value)}
          />
          </div>
           {colorPickerOpen5 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={bcall}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC5 = document.querySelector(".color-circle5");
               CC5.style.backgroundColor=color;
               setBcall(color)
             }}
           />
           </div>)}
           <div style={{display:"flex", flexDirection:"row"}}>
            <div
             className="color-circle10"
             title="Personal information identifier"
             onClick={(e)=>toggleColorPicker(e,10)}
             style={{
               backgroundColor:Theme8,
               width: '25px',
               height: '25px',
               borderRadius: '50%',
               border: '1px solid black',
               margin:'10px'
             }}
           ></div>
           <input
          type="none"
          value={Theme8}
          className="colorer"
          style={{marginLeft:"2px",padding:"5px", marginTop:"15px", width:"55px", height:"10px"}}
          onChange={(e) => settheme8(e.target.value)}
          />
          </div>
           {colorPickerOpen10 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={Theme8}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC10 = document.querySelector(".color-circle10");
               CC10.style.backgroundColor=color;
               settheme8(color)
             }}
           />
           </div>)}
           </div>
           <div style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
           
           <div style={{display:"flex", flexDirection:"row"}}>
            <div
             className="color-circle11"
             title="Italic text color"
             onClick={(e)=>toggleColorPicker(e,11)}
             style={{
               backgroundColor:Theme9,
               width: '25px',
               height: '25px',
               borderRadius: '50%',
               border: '1px solid black',
               margin:'10px'
             }}
           ></div>
           <input
          type="none"
          value={Theme9}
          className="colorer"
          style={{marginLeft:"2px",padding:"5px", marginTop:"15px", width:"55px", height:"10px"}}
          onChange={(e) => settheme9(e.target.value)}
          />
          </div>
           {colorPickerOpen11 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={Theme9}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC11 = document.querySelector(".color-circle11");
               CC11.style.backgroundColor=color;
               settheme9(color)
             }}
           />
           </div>)}
          
           <div style={{display:"flex", flexDirection:"row"}}>
            <div
             className="color-circle12"
             title="Skills Color"
             onClick={(e)=>toggleColorPicker(e,12)}
             style={{
               backgroundColor:Theme10,
               width: '25px',
               height: '25px',
               borderRadius: '50%',
               border: '1px solid black',
               margin:'10px'
             }}
           ></div>
           <input
          type="none"
          value={Theme10}
          className="colorer"
          style={{marginLeft:"2px",padding:"5px", marginTop:"15px", width:"55px", height:"10px"}}
          onChange={(e) => settheme10(e.target.value)}
          />
          </div>
           {colorPickerOpen12 && (
            <div className="color-picker-container" 
            style={{
              top: circlePosition.top+120,
              left: circlePosition.left+140,
            }}
            >
           <HexColorPicker
             color={Theme10}                                  
             onChange={(color) => {
               // Update the color in your state here
               const CC12 = document.querySelector(".color-circle12");
               CC12.style.backgroundColor=color;
               settheme10(color)
             }}
           />
           </div>)}
           </div>

          </div>
       
        <div style={{alignContent:"left", textAlign:"start"}}>
       <h4>Theme Sizes:</h4>
       <div style={{alignContent:"center", textAlign:"center",height:"100%"}}>
       <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S1:</label>
        
       <input type="number"  value={S1} style={{ width: "55px" }}min="1" max="40"step="1"
       onChange={(e) => setS1(e.target.value)}/> 
       </div>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S2:</label>
        <input type="number" value={S2} style={{ width: "55px" }}min="1" max="40"step="1"
        onChange={(e) => setS2(e.target.value)}/>
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S3:</label>
        <input type="number" value={S3} style={{ width: "55px" }}min="1" max="40"step="1"
        onChange={(e) => setS3(e.target.value)}/>
        </div>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S4:</label>
        <input type="number" value={S4} style={{ width: "55px" }}min="1" max="40"step="1"
        onChange={(e) => setS4(e.target.value)}/>
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S5:</label>
        <input type="number" value={S5} style={{ width: "55px" }}min="1" max="40"step="1"
        onChange={(e) => setS5(e.target.value)}/>
        </div>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S6:</label>
        <input type="number" value={S6} style={{ width: "55px" }}min="1" max="40"step="1"
        onChange={(e) => setS6(e.target.value)}/>
        </div>
        </div>
        <div style={{display:"flex", flexDirection:"row",margin:"5px"}}>
        <label className="labelstoChange">S7:</label>
        <input type="number" value={S7} style={{ width: "55px" }}min="1" max="40"step="1"
        onChange={(e) => setS7(e.target.value)}/>
        </div>
        </div>
        </div>
        </div>
        <h4>Font Families:</h4>
         <select
           style={{ maxWidth:"300px",width:"100%", padding: '7px', borderRadius: '4px' }}
           value={selected_font}
           onChange={handleFontChange}
         >
           {fontOptions.map((font, index) => (
             <option key={index} value={font}>
               {font}
             </option>
        ))}

      </select>
        
        <h4>Page Boundaries:</h4>
        <div className="Borders" style={{ width: '100%', padding: '7px', display: 'flex', flexDirection: 'row',marginTop:"10px" }}>
        <label className="labelstoChange">
          Top
          <input type="checkbox" checked={btall} onChange={() => handleCheckboxChange('btall')} />
        </label>
        <label className="labelstoChange">
          Bottom
          <input type="checkbox" checked={bball} onChange={() => handleCheckboxChange('bball')} />
        </label>
        <label className="labelstoChange">
          Left
          <input type="checkbox" checked={blall} onChange={() => handleCheckboxChange('blall')} />
        </label>
        <label className="labelstoChange">
          Right
          <input type="checkbox" checked={brall} onChange={() => handleCheckboxChange('brall')} />
        </label>
      </div>

      <h4>Additional Tuning:</h4>
      <div className="Borders" style={{ width: '100%', padding: '7px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px' }}>
  <label className="labelstoChange" >
    Make Identifiers Bold
    <input type="checkbox" style={{marginRight:"4px"}} checked={bold} onChange={() => handleCheckboxChange('Bold')} />
  </label>
  <label className="labelstoChange" >
    Change Added Sections
    <input type="checkbox" checked={ACTE} onChange={() => handleCheckboxChange('ACTE')} />
  </label>
  <label className="labelstoChange">
    Make Image Round
    <input type="checkbox" style={{marginRight:"4px"}} checked={RImage} onChange={() => handleCheckboxChange('RIMG')} />
  </label>
</div>



      <div className="pddinAll" style={{padding:"4px",margin:"3px"}}>
       <label className="labelstoChange" style={{marginRight:"5px"}}>
          Radius
          <input type="number" style={{marginRight:"4px"}}  min="1" max="40"step="1" value={bradall} onChange={(e) => handleInputChangeBR(e.target.value)} />
        </label>
      
        <label className="labelstoChange">
          Spacing Vertical
          <input type="number" style={{marginRight:"4px"}} min="1" max="40"step="1" value={p1all} onChange={(e) => handleInputChangep(e.target.value, "P1")} />
        </label>
        <label className="labelstoChange">
          Spacing Horizontal
          <input type="number" style={{marginRight:"4px"}}  min="1" max="40"step="1" value={p3IC} onChange={(e) => handleInputChangep(e.target.value, "P3")} />
        </label>
        <label className="labelstoChange">
          Spacing (Content)
          <input type="number" style={{marginRight:"4px"}}  min="1" max="40"step="1" value={p2all} onChange={(e) => handleInputChangep(e.target.value, "P2")} />
        </label>
        
      </div>
      <div>
      <h4>Choose Existing:</h4>
        <select
        style={{maxWidth:"300px",width:"100%", padding:"7px",borderRadius:"4px"}}
          value={ChosenTemplate}
          onChange={(e) => setchosenTemplate(e.target.value)}
        >
          <option value="default"></option>
          <option value="YT">YT</option>
          <option value="Amazon">Amazon</option>
          <option value="Programming">Programming</option>
          <option value="Professional">Professional</option>
        </select>
      </div>
                <div style={{marginTop:"10px"}}><button type="button" onClick={() => SavePDF()}>Save as PDF</button></div>
               </div>}
              </div>
            )}

            {content === 'extra' && (
              <div>
                {<div>    
                  {extra.map((section, sectionIndex) => (
                   <div key={sectionIndex}>
                      <form>
                      
                        <div className="form-group1">
                          <label>Section Title:</label>
                          <input
                            type="text"
                            name="Title"
                            placeholder="You can leave this empty if you want"
                            value={section.Title}
                            onChange={(e) => handleExtraSectionChange(e, sectionIndex)}
                          />
                        </div>
                        <div className={"Borders" + sectionIndex} style={{ width: '100%', padding: '7px', display: 'flex', flexDirection: 'row', marginTop: "10px" }}>
                        <label>
                          Top
                          <input type="checkbox" name="btext" checked={extStateArray[sectionIndex]?.btext || false} onChange={(e) => handleChangeEst(e, sectionIndex)} />
                        </label>
                        <label>
                          Bottom
                          <input type="checkbox" name="bbext" checked={extStateArray[sectionIndex]?.bbext || false} onChange={(e) => handleChangeEst(e, sectionIndex)} />
                        </label>
                        
                        <label>
                          Left
                          <input type="checkbox" name="blext" checked={extStateArray[sectionIndex]?.blext || false} onChange={(e) => handleChangeEst(e, sectionIndex)} />
                        </label>
                        <label>
                          Right
                          <input type="checkbox" name="brext" checked={extStateArray[sectionIndex]?.brext || false} onChange={(e) => handleChangeEst(e, sectionIndex)} />
                        </label>
                      </div>


                              <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "100%",marginLeft:"7px"}}>
                             <label style={{ marginBottom: "10px" }}>
                               Border Thickness:
                               <input
                                 type="number"
                                 name="bradext"
                                 style={{ width: "55px", marginLeft: "51px" }}
                                 min="1"
                                 max="40"
                                 step="1"
                                 value={extStateArray[sectionIndex]?.bradext || 0}
                                 onChange={(e) => handleChangeEstN(e, sectionIndex)}
                               />
                             </label>
                           
                             <label style={{ marginBottom: "10px" }}>
                               Spacing Top-Bottom:
                               <input
                                 type="number"
                                 name="TB"
                                 style={{ width: "55px", marginLeft: "26px" }}
                                 min="1"
                                 max="100"
                                 step="1"
                                 value={extStateArray[sectionIndex]?.ETBSp || 0}
                                 onChange={(e) => handleChangeEstN(e, sectionIndex)}
                               />
                             </label>
                           
                             <label style={{ marginBottom: "10px" }}>
                               Spacing Left-Right:
                               <input
                                 type="number"
                                 name="LR"
                                 style={{ width: "55px", marginLeft: "40px" }}
                                 min="1"
                                 max="100"
                                 step="1"
                                 value={extStateArray[sectionIndex]?.ELRSp || 0}
                                 onChange={(e) => handleChangeEstN(e, sectionIndex)}
                               />
                             </label>
                             
                           
                             <label style={{ marginBottom: "10px" }}>
                               Spacing Left-Right (Content Only):
                               <input
                                 type="number"
                                 name="LRC"
                                 style={{ width: "55px", marginLeft: "40px" }}
                                 min="1"
                                 max="100"
                                 step="1"
                                 value={extStateArray[sectionIndex]?.ELRSpc || 0}
                                 onChange={(e) => handleChangeEstN(e, sectionIndex)}
                               />
                             </label>
                           
                             <label style={{ marginBottom: "10px" }}>
                               Margin Top-Bottom:
                               <input
                                 type="number"
                                 name="TBM"
                                 style={{ width: "55px", marginLeft: "31px" }}
                                 min="1"
                                 max="100"
                                 step="1"
                                 value={extStateArray[sectionIndex]?.ETBM || 0}
                                 onChange={(e) => handleChangeEstN(e, sectionIndex)}
                               />
                             </label>
                           
                             <label style={{ marginBottom: "10px" }}>
                               Margin Left-Right:
                               <input
                                 type="number"
                                 name="LRM"
                                 style={{ width: "55px", marginLeft: "46px" }}
                                 min="1"
                                 max="100"
                                 step="1"
                                 value={extStateArray[sectionIndex]?.ELRM || 0}
                                 onChange={(e) => handleChangeEstN(e, sectionIndex)}
                               />
                             </label>
                           </div>


                              <div style={{ width: '100%', padding: '7px', display: 'flex', flexDirection: 'row'}}>
                              <label>Alignment:</label>
                                <select
                                  name="Item_size"
                                  value={extStateArray[sectionIndex]?.EAlign || 0}
                                  onChange={(e) => handleEAlignment(e, sectionIndex)}
                                  style={{marginLeft:"10px"}}
                                >
                                  <option value="left">left</option>
                                  <option value="right">right</option>
                                  <option value="center">center</option>
                                 
                                 
                                </select>
                              </div>
                              <div style={{ width: '100%', padding: '7px', display: 'flex', flexDirection: 'row',marginBottom:"10px" }}>
                                <label>Border Color:</label>
                                <div
                                  className={`color-circle${sectionIndex}`}
                                  onClick={(e)=>toggleColorPicker(e,"E")}
                                  
                                  style={{
                                    backgroundColor: 'transparent',
                                    width: '25px',
                                    height: '25px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    marginLeft:"20px",
                                    cursor: 'pointer',
                                  }}
                                ></div>
                                {colorPickerExt && (
                                  <div className="color-picker-container" 
                                  style={{
                                    top: circlePosition.top+120,
                                    left: circlePosition.left+140,
                                  }}
                                  >
                                 <HexColorPicker
                                   color={extStateArray[sectionIndex]?.BCExt || 0}                                  
                                   onChange={(color) => {
                                    // Update the color in your state here
                                    const CC5 = document.querySelector(`.color-circle${sectionIndex}`);
                                    CC5.style.backgroundColor=color;
                                    handleChangeECol(color, sectionIndex);
                                  }}
                                   name="Item_color"
                                 />
                                 </div>
                               )}
                               </div>
                              
                       
                        <div className="form-group1">
                          <button type="button" style={{margin:"3px"}} onClick={(e)=>handleHandTClick(section,sectionIndex)}>Heading and Text</button>
                          <button type="button" style={{margin:"3px"}} onClick={(e)=>handleTonlyClick(section,sectionIndex)}>Text Only</button>
                          <button type="button" style={{margin:"3px"}} onClick={(e)=>handleLinkClick(section,sectionIndex)}>Insert a Link</button>
                        </div>
                        <div>

                         <div className="HandT">
                          
                            {section.Items && section.Items.map((item, itemIndex) => (
                              <div key={itemIndex}>
                               {item.heading && (  <div>
                                <label>Heading:</label>
                                <input
                                  className="inputer"
                                  type="text"
                                  name="Item_heading"
                                  value={item.Item_heading}
                                  onChange={(e) => handleTextPropertyChange(e, sectionIndex, itemIndex)}
                                  />
                                  </div>)}
                                  {item.text && ( <div> <label>Text: </label>
                                <input
                                  className="inputer"
                                  type="text"
                                  name="Item_text"
                                  value={item.Item_text}
                                  onChange={(e) => handleTextPropertyChange(e, sectionIndex, itemIndex)}
                                /></div>)}
                              
                                {item.link && ( <div> <label>Insert link: </label>
                                <input
                                  className="inputer"
                                  type="text"
                                  name="Item_link"
                                  value={item.Item_link}
                                  onChange={(e) => handleTextPropertyChange(e, sectionIndex, itemIndex)}
                                /></div>)}
                                <label>Font Weight(t):</label>
                                <select
                                  name="Item_font"
                                  onChange={(e) => handleTextPropertyChange(e, sectionIndex, itemIndex)}
                                >
                                  <option value="normal"> </option>
                                  <option value="normal">normal</option>
                                  <option value="bold">bold</option>
                                </select>
                                <label>Size(t):</label>
                                <select
                                  name="Item_size"
                                  value={item.Item_size}
                                  onChange={(e) => handleTextPropertyChange(e, sectionIndex, itemIndex)}
                                >
                                  <option value="10px"> </option>
                                  <option value="10px">10px</option>
                                  <option value="12px">12px</option>
                                  <option value="14px">14px</option>
                                  <option value="16px">16px</option>
                                  <option value="18px">18px</option>
                                  <option value="20px">20px</option>
                                  <option value="22px">22px</option>
                                  <option value="24px">24px</option>
                                  <option value="28px">28px</option>
                                  <option value="36px">36px</option>
                                  <option value="48px">48px</option>
                                 
                                </select>
                               

                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column',marginBottom:"10px" }}>
                                <label>Color(t):</label>
                                <div
                                  className="color-circle"
                                  onClick={(e)=>toggleColorPicker(e,"ET")}
                                  style={{
                                    backgroundColor: colorTE,
                                    width: '25px',
                                    height: '25px',
                                    borderRadius: '50%',
                                    border: '1px solid black',
                                    
                                  }}
                                ></div>
                                {colorPickerOpen && (
                                  
                                 <HexColorPicker
                                   color={item.Item_color}                                  
                                   onChange={(color) => {
                                     // Update the color in your state here
                                     setColorTE(color);
                                     handleTextPropertyChange({ target: { name: 'Item_color', value: color } }, sectionIndex, itemIndex);
                                   }}
                                   name="Item_color"
                                 />
                                
                                 
                               )}
                                </div>
                                  </div>
                                ))}
                                
                             
                           </div>
                           
                                 </div>
                                </form>
                              </div>
                              
                            ))}
                           
                          </div>}
                          <div className="SecBut" style={{ width: '100%', height: '98vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {extra.length === 0 ? (
        <div style={{ textAlign: 'center', fontSize:"20px",fontFamily:"cursive"}}>No Added Sections</div>
      ) : (
        <div></div>
      )}
    </div>
                           
                        </div>
                      )}
                        </div>
                  ) : (
          <div></div>
        )}
       
          
        
        
      </div>
      <div className="right-section">
        
        <div className="a4-sized-view" id="p1">
          {page1}
        </div>
        <div className="a4-sized-view" id="p2" style={{marginTop:"10px",display:"none"}}>
          {page2}
        </div>
     
      </div>
    </div>
  );
  
                  
}
