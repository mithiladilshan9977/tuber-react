
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import './App.css'
import { TextDetails } from './TextDetails'
import { UserForm } from './UserForm'
import { UploadFiles } from './UploadFiles'
import { useMultistepForm } from './useMultistepForm'
import { useState } from 'react'
import WhatAreTheQuestions from './WhatAreTheQuestions'
import OftenToGetPaid from './OftenToGetPaid'
import CorrectIcon from './assets/correct_58wovqb649og_512.png'
import AppleStore from './assets/appstore.jpeg'
import TuberMan from './assets/tuberman.jpeg'
import GoBackArrow from './assets/gobackarrow.png'

import GoogleAppStore from './assets/googleplaystore.jpeg'
import MainLogoTuber from './assets/mainLogo.jpeg'
import { OTPcheck } from './OTPcheck'
import DoINeedToDropOff from './DoINeedToDropOff'
import HowHeavyIsTheParcel from './HeavyIsTheParcel'
import DrivingRange from './DrivingRange'
import SpecialInsuarance from './SpecialInsuarace'
import DriveOldCar from './DriveOldCar'
import JobsCanIGet from './JobsCanIget'
import MapApplication from './MapApplication'
 
 
function App() {

  const [step1Data, setStep1Data] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    termsAndConditions: false,
  });

  const [step2Data, setStep2Data] = useState({
    dateOfBirth: "",
    driverLicenseNo: "",
    city: "",
    password: "",
    ConfirmPassword:""
  });

  const [step3Data, setStep3Data] = useState({
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    year: "",
    vehiclePlate:"",
  });

  const [step4Data, setStep4Data] = useState({
    ABN: "",
    businessName: "",
    GST: "",
    streetAddress: "",
    suberb:"",
    postalCode: "",
    state:"",
    country:"",
  });
 
 const {steps,currentStepIndex,step,isFirstStep,back,next,renderOTPform,isLastStep}=useMultistepForm( [
 
  <UserForm formData={step1Data} setFormData={setStep1Data}/> ,  <AddressForm formData={step2Data} setFormData={setStep2Data}/> ,<AccountForm formData={step3Data} setFormData={setStep3Data}/>,<TextDetails formData={step4Data} setFormData={setStep4Data}/>,<UploadFiles/>,<OTPcheck/> 

]);


const [showDiv, setShowDiv] = useState(false);
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
 
const handleNextClick1  = () => {
 

  if(!step1Data.firstName){
    setErrorMessage('Please enter your first name');
    setShowErrorMessage(true);
     
  }
  else if(!step1Data.lastName){
    setErrorMessage('Please enter your last name');
    setShowErrorMessage(true);
  }
  else if(!step1Data.email){
    setErrorMessage('Please enter your E-mail address');
    setShowErrorMessage(true);
  }
  
  
  else{
    setErrorMessage('');
      setShowErrorMessage(false);
      sessionStorage.setItem('step1Data', JSON.stringify(step1Data));
      setShowDiv(true);
  }

  
 
};


const handleNextClick2  = () => {
 
 if(!step2Data.dateOfBirth){
  setErrorMessage('Please enter your birth date');
  setShowErrorMessage(true);
 }
 else if(!step2Data.driverLicenseNo){
  setErrorMessage('Please enter your driver license No');
  setShowErrorMessage(true);
 }

 else if(!step2Data.city){
  setErrorMessage('Please select your city driver in');
  setShowErrorMessage(true);
 }

 else if(!step2Data.password){
  setErrorMessage('Please enter a password');
  setShowErrorMessage(true);
 }
 else if(!step2Data.ConfirmPassword){
  setErrorMessage('Please re-enter your password');
  setShowErrorMessage(true);
 }
 else if(step2Data.password != step2Data.ConfirmPassword){
  setErrorMessage('Passwords not matching');
  setShowErrorMessage(true);
 }
 
 else{
  setErrorMessage('');
  setShowErrorMessage(false);
  sessionStorage.setItem("step2Data", JSON.stringify(step2Data));
 
  setShowDiv(false);
  next();
}
 }
 

const GoNextAfterOTPConfirmation  = () => {
 
 
  setShowDiv(false);
  next();
}





  

const handleNextClick3  = () => {
   
  if(!step3Data.vehicleType){
    setErrorMessage('Please select your vehicle type');
    setShowErrorMessage(true);
   }
   else if(!step3Data.vehicleMake){
    setErrorMessage('Please select your vehicle make');
    setShowErrorMessage(true);
   }
   else if(!step3Data.vehicleModel){
    setErrorMessage('Please enter your vehicle model');
    setShowErrorMessage(true);
   }
   else if(!step3Data.year){
    setErrorMessage('Please enter year');
    setShowErrorMessage(true);
   }
   else if(!step3Data.vehiclePlate){
    setErrorMessage('Please enter your driving plate No');
    setShowErrorMessage(true);
   }else{
    setErrorMessage('');
  setShowErrorMessage(false)
    sessionStorage.setItem("step3Data", JSON.stringify(step3Data));
    // Call the next function to advance to the next step
    next();
   }



};




const handleNextClick4  = () => {

  if(!step4Data.ABN){
    setErrorMessage('Please your ABN');
    setShowErrorMessage(true);
   }
   else if (!step4Data.businessName){
    setErrorMessage('Please your business name');
    setShowErrorMessage(true);
   }

   else if (!step4Data.GST){
    setErrorMessage('Please select your GST');
    setShowErrorMessage(true);
   }

   else if (!step4Data.streetAddress){
    setErrorMessage('Please your street address');
    setShowErrorMessage(true);
   }

   else if (!step4Data.suberb){
    setErrorMessage('Please enter your suberb');
    setShowErrorMessage(true);
   }

   else if (!step4Data.postalCode){
    setErrorMessage('Please enter your postal code');
    setShowErrorMessage(true);
   }

   else if (!step4Data.state){
    setErrorMessage('Please select your state');
    setShowErrorMessage(true);
   }

   else if (!step4Data.country){
    setErrorMessage('Please selecy your country');
    setShowErrorMessage(true);
   }else{
    setErrorMessage('');
  setShowErrorMessage(false)
    sessionStorage.setItem("step4Data", JSON.stringify(step4Data));
    // Call the next function to advance to the next step
    next();
   }


  
};
const handleNextClick5 = () => {

  
  renderOTPform();
};
 

let buttonText;
let handleNextClick
let setHeadingText

if (currentStepIndex === 0) {
  console.log(currentStepIndex + "  0000000");
  buttonText = 'Become a tuber driver';
  handleNextClick = handleNextClick1;

} else if (currentStepIndex === 1) {
 

  buttonText = 'Next';
  handleNextClick = handleNextClick2;
} else if (currentStepIndex === 2){
  buttonText = 'Next';
  handleNextClick = handleNextClick3;
}
else  if( currentStepIndex === 3){
  buttonText = 'Confirm';
  handleNextClick = handleNextClick4;
}else  if( currentStepIndex === 4){
  buttonText = 'Confirm';
  handleNextClick = handleNextClick5;
}
else {
  buttonText = isLastStep ? 'Submit' : `Step ${currentStepIndex + 1}`;
}

// setting heading text

if(currentStepIndex ===0){
  setHeadingText ="Create your tuber account";
}else if(currentStepIndex === 1){
  setHeadingText ="Driver information";

}else if(currentStepIndex ===2){
  setHeadingText="Vehicle information";
}
else if(currentStepIndex ===3){
  setHeadingText="TAX DETAILS";
}
else if(currentStepIndex ===4){
  setHeadingText="UPLOAD REQUIRED DOCUMENTS";
}
 else{
  setHeadingText="";
 }
const [isOpen, setIsOpen] = useState(false);

  const handleQuestionClick = () => {
    setIsOpen(!isOpen);
  };


  const [isOpen2, setIsOpen2] = useState(false);

  const handleOfftenQuestionClick = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const DropOffQuestionClick = () => {
    setIsOpen3(!isOpen3);
  };


  const [isOpen4, setIsOpen4] = useState(false);

  const HowHeavyTheParcelQuestionClick = () => {
    setIsOpen4(!isOpen4);
  };

  const [isOpen5, setIsOpen5] = useState(false);

  const DriveingRangeQuestionClick = () => {
    setIsOpen5(!isOpen5);
  };


  const [isOpen6, setIsOpen6] = useState(false);

  const SpecialInsuaranceQuestionClick = () => {
    setIsOpen6(!isOpen6);
  };


  const [isOpen7, setIsOpen7] = useState(false);

  const DriveOldCarQuestionClick = () => {
    setIsOpen7(!isOpen7);
  };


  const [isOpen8, setIsOpen8] = useState(false);

  const JobsCanIGetQuestionClick = () => {
    setIsOpen8(!isOpen8);
  };


  const [isOpen9, setIsOpen9] = useState(false);

  const MapApplicationQuestionClick = () => {
    setIsOpen9(!isOpen9);
  };




 
  return  (
    <div className="page-container">
      <div className="tuberheadingdiv">
          <img src={MainLogoTuber} alt="Tuber Logo" />
        </div>
      <div className="mainholder">

      {currentStepIndex !== 5 ? (
  <div className="left-side">
    
    <span className="spantags">Sign up to become</span>
    <span className="spantags">
      <span className="orange-text">TUBER</span> driver
    </span>
    {showDiv && (<>
          
          <div className="OTPheadingHolderInIndex2">
            <span className='MainheadingInRequirments'>Want to be your own boss?</span>
            <span className='MainheadingInRequirments'>Apply to become a tuber driver and start earning extra income</span>
          </div>

          <div className="spanTagsHolder">
            <span className='textWithImageIcons'> <img src={CorrectIcon} alt="correct icon"  className='corerctIcon'/>   Earn on your terms</span>
            <span className='textWithImageIcons'> <img src={CorrectIcon} alt="correct icon"  className='corerctIcon'/>  Set your own schedule</span>
            <span className='textWithImageIcons'> <img src={CorrectIcon} alt="correct icon"  className='corerctIcon'/>  Get paid weekly</span>
          </div>

          <h1 className="diliverDriverText">Drive.Deliver.Earn.</h1>

          <div className="GooglePalyStoreDivHolder">
            <span>Get TUBER driver app now</span>
            <div>
              <img src={GoogleAppStore} alt=""   />
              <img src={AppleStore} alt=""  />
            </div>
          </div>
          </>)}

    {!showDiv && (<>
      <div className="infoholder">
        
      {currentStepIndex === 0 ?  (
        <>
          <span className='requiremntsspan'>Requirments</span>
          <span className='normelText'>Age 18+</span>
          <span className='normelText'>Driving license</span>
          <span className='normelText'>Car(roadworthy, registered, and with a current CTP insurance policy)</span>
          <span className='normelText'>An Austrailan Business Number (ABN)</span>
          <span className='normelText'>Smartphone with IOS 12 /Android 6.0</span>
          <span className='normelText'>Right to work in Austraila</span>
          <span className='normelText'>It's your responsibility to keep your documents up to date if they expire</span>
            
            <h2>FAQs</h2>
             <div className="FAQsholder">
            <WhatAreTheQuestions isOpen={isOpen} handleQuestionClick={handleQuestionClick} />
            <OftenToGetPaid isOpen2={isOpen2} handleOfftenQuestionClick={handleOfftenQuestionClick} />
            <DoINeedToDropOff isOpen3={isOpen3} DropOffQuestionClick={DropOffQuestionClick} />
            <HowHeavyIsTheParcel isOpen4={isOpen4} HowHeavyTheParcelQuestionClick={HowHeavyTheParcelQuestionClick} />
            <DrivingRange isOpen5={isOpen5} DriveingRangeQuestionClick={DriveingRangeQuestionClick} />
            <SpecialInsuarance isOpen6={isOpen6} SpecialInsuaranceQuestionClick={SpecialInsuaranceQuestionClick} />
            <DriveOldCar isOpen7={isOpen7} DriveOldCarQuestionClick={DriveOldCarQuestionClick} />
            <JobsCanIGet isOpen8={isOpen8} JobsCanIGetQuestionClick={JobsCanIGetQuestionClick} />
            <MapApplication isOpen9={isOpen9} MapApplicationQuestionClick={MapApplicationQuestionClick} />
            
             </div>
          
        </>
      ) : (
        <>
          <div className="headingHolderInIndex2">
            <span className='MainheadingInRequirments'>Want to be your own boss?</span>
            <span className='MainheadingInRequirments'>Apply to become a tuber driver and start earning extra income</span>
          </div>

          <div className="spanTagsHolder">
            <span className='textWithImageIcons'> <img src={CorrectIcon} alt="correct icon"  className='corerctIcon'/>   Earn on your terms</span>
            <span className='textWithImageIcons'> <img src={CorrectIcon} alt="correct icon"  className='corerctIcon'/>  Set your own schedule</span>
            <span className='textWithImageIcons'> <img src={CorrectIcon} alt="correct icon"  className='corerctIcon'/>  Get paid weekly</span>
          </div>

          <h1 className="diliverDriverText">Drive.Deliver.Earn.</h1>

          <div className="GooglePalyStoreDivHolder">
            <span>Get TUBER driver app now</span>
            <div>
              <img src={GoogleAppStore} alt=""   />
              <img src={AppleStore} alt=""  />
            </div>
          </div>
        </>
      )}
    </div>
    </>)}
  </div>
):(
  <> 
  <div className="final-image-left-side">

    <img src={TuberMan} alt="" />
  </div>
  
  </>
)}

        <div className="centered-div">
          
        {currentStepIndex !== 5 ? (
    <div className="formWrapper">
      <form action="" className="formholder">
       
 
        <div className="stepsindicaterholder">
          <span>
            Step {currentStepIndex + 1}/{steps.length -1}
          </span>
        </div>
        <div className="stepsDivsIndicater">
          {steps.map((_, index) => (
            <span
              key={index}
              className={`colorStepsIndicater${index + 1} ${
                currentStepIndex >= index ? "active" : ""
              }`}
            ></span>
          ))}
          
        </div>



     

      <div className="titileholder">
        <span className="createaccounttitle">{setHeadingText}</span>
        

      </div>
      {showErrorMessage && <span className='ErrorMessage'>{errorMessage}</span>}
         
        {showDiv && (<>

          <div className="titileholder">
            <span className="createaccounttitle">Verify your phone </span>
            
        </div>

<div className="OTPtextHolder">
<span className="otptext">
            Enter the 4-digit verification code sent to
        </span>
        <span className="otpPhoneNumber">
            +97 100254 8799
        </span>

</div>
        

        <div className="OTPnumberHolder">
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1} />
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
        </div>

        <div className="resentTextHolder">
        <span className="resendText">Resend code in 0:14</span>

        </div>
           <button className='OTPConfirmBtn' type='button' onClick={GoNextAfterOTPConfirmation}>Confirm</button>
        
        </>)
        
        
        
        }

  {!showDiv && (<>{step}</>)}

         
         {!showDiv && (<>
         
          <div className="buttonholder">
          {!isFirstStep && (
            <button type="button" onClick={back} className="backbtn">
              Back
            </button>
          )}

          <button type="button" className="nextbtn" onClick={handleNextClick}>
            {buttonText}
          </button>
        </div>

         </>)}
        
        {!showDiv && (<>
        {currentStepIndex === 0 && (
          <p className="alreadyHaveAccount">
            Already have an account ?<a href="#" className="signLink">Sign in</a>
          </p>
        )}
        </>)}
        
      </form>
    </div>
  ) : (
    <>
                 <div className="finalPageHolderDiv">
                      
                      <div className="contentHolderDiv">
                        <span>Registration Successful !</span>

                        <h2>Welcome to </h2>
                        <img src={MainLogoTuber} alt="" />
                         <div className="textConetctHolder">
                         <p>We are pleased to inform you that your registration process has been completed successfully.
                           However, please be aware that your account is currently under review. 
                          You will receive an email notification once your account is active and ready to use.</p>
                          <p>We kindly advise you to Install the TUBER app on your mobile phone,
                             as it will allow you to fully enjoy all the features and benefits of our platform.</p>
                         </div>
                        
                         <div className="GooglePalyStoreDivHolder">
                  <span>Get TUBER driver app now</span>
                  <div className='appIconsHolders'>
                    <img src={GoogleAppStore} alt="google app"   />
                    <img src={AppleStore} alt="I phone app"  />
                  </div>


                </div>
                

                <div className="buttonholder">
          {!isFirstStep && (
            <button type="button" onClick={back} className="nextbtn">  
             Back to web site
            </button>
          )}

          <button type="button" className="finalFAQsbtn" onClick={handleNextClick}>
             FAQs
          </button>
        </div>

                      </div>
                    
                      
                 </div>
               
        </> 
  )}
        </div>
      </div>
    </div>
  );
}

export default App




















 
 

function setTheErrorMessage(arg0: string) {
  throw new Error('Function not implemented.')
}
// import { AccountForm } from './AccountForm'
// import { AddressForm } from './AddressForm'
// import './App.css'
// import { UserForm } from './UserForm'
// import { useMultistepForm } from './useMultistepForm'

// function App() {
 
//  const {steps,currentStepIndex,step,isFirstStep,back,next,isLastStep}=useMultistepForm( [
 
//   <UserForm/> , <AddressForm/> ,<AccountForm/>

// ])


  
//   return   <div className="page-container">
    
    
//     <div className='tuberheadingdiv'>
//       <span className='nametuber'>Tuber</span>
      
//       </div> <div className="centered-div">
//     <form action="">
//       <div style={{
//         position:"absolute",
//         top:".5rem",
      
//         right:".5rem"
//       }}>
//             {currentStepIndex + 1}/{steps.length}
//       </div>
//       {step}
//       <div style={{
//         marginTop:"1rem",
//         display:"flex",
       
//         gap:".5rem",
//         justifyContent:"flex-end"
//       }}>
//         {!isFirstStep && <button  type='submit' onClick={back}>Back</button>} 
//         <button type='button' onClick={next}>
//            {isLastStep ? "Finish" : "Next"}</button>
//       </div>
//     </form>
//   </div>
//   </div>
// }

// export default App

