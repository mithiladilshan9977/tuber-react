
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
import GoogleAppStore from './assets/googleplaystore.jpeg'
import MainLogoTuber from './assets/mainLogo.jpeg'
import { OTPcheck } from './OTPcheck'
 
 
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
 
 const {steps,currentStepIndex,step,isFirstStep,back,next,isLastStep}=useMultistepForm( [
 
  <UserForm formData={step1Data} setFormData={setStep1Data}/> ,<OTPcheck/>, <AddressForm formData={step2Data} setFormData={setStep2Data}/> ,<AccountForm formData={step3Data} setFormData={setStep3Data}/>,<TextDetails formData={step4Data} setFormData={setStep4Data}/>,<UploadFiles/> 

]);



const handleNextClick1  = () => {

  sessionStorage.setItem("step1Data", JSON.stringify(step1Data));
  // Call the next function to advance to the next step
  next();
};
const handleNextClick2  = () => {

  sessionStorage.setItem("step2Data", JSON.stringify(step2Data));
  // Call the next function to advance to the next step
  next();
};

const handleNextClick3  = () => {

  sessionStorage.setItem("step3Data", JSON.stringify(step3Data));
  // Call the next function to advance to the next step
  next();
};
const handleNextClick4  = () => {

  sessionStorage.setItem("step4Data", JSON.stringify(step4Data));
  // Call the next function to advance to the next step
  next();
};

let buttonText;
let handleNextClick

if (currentStepIndex === 0) {
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
}
else {
  buttonText = isLastStep ? 'Submit' : `Step ${currentStepIndex + 1}`;
}

 
const [isOpen, setIsOpen] = useState(false);

  const handleQuestionClick = () => {
    setIsOpen(!isOpen);
  };


  const [isOpen2, setIsOpen2] = useState(false);

  const handleOfftenQuestionClick = () => {
    setIsOpen2(!isOpen2);
  };

 
  return  (
    <div className="page-container">
      <div className="tuberheadingdiv">
          <img src={MainLogoTuber} alt="Tuber Logo" />
        </div>
      <div className="mainholder">
        

        <div className="left-side">

        <span className="spantags">Sign up to become</span>
          <span className="spantags">
            <span className="orange-text">TUBER</span> driver
          </span>

       
       <div className="infoholder">
      {currentStepIndex === 0 ? (
        <>
        <span className='requiremntsspan'>Requirments</span>
                  
                <span className='normelText'>Age 18+</span>
                <span className='normelText'>Driving license</span>
                <span className='normelText'>Car(roadworthy, registered, and with a current CTP insurance policy)</span>
                <span className='normelText'>An Austrailan Business Number (ABN)</span>
                <span className='normelText'>Smartphone with IOS 12 /Android 6.0</span>
                <span className='normelText'>Right to work in Austraila</span>
                <span className='normelText'>It's your responsibility to keep your documents up to date if they expire</span>


                   <WhatAreTheQuestions isOpen={isOpen} handleQuestionClick={handleQuestionClick} />
                   <OftenToGetPaid isOpen2={isOpen2} handleOfftenQuestionClick={handleOfftenQuestionClick} />

                   
        </>
      ) :(
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
      )
      
    
    }

       </div>
       
        
      </div>

        <div className="centered-div">
          <div className="formWrapper">
          <form action="" className='formholder'>
            <div className="stepsindicaterholder">
            <span>
             Step {currentStepIndex + 1}/{steps.length}
            </span>
            </div>
            <div className="stepsDivsIndicater">
            {steps.map((_, index) => (
          <span
            key={index}
            className={`colorStepsIndicater${index + 1} ${currentStepIndex >= index ? 'active' : ''}`}
          ></span>
        ))}
            </div>
            
            {step}
            <div className='buttonholder'>
              {!isFirstStep && <button type="button" onClick={back} className='backbtn'>Back  </button>}

              <button type="button"  className='nextbtn' onClick={handleNextClick}>
                {buttonText}
              </button>

           


    
            </div>
            {currentStepIndex === 0 && (
  <p className='alreadyHaveAccount'>
    Already have an account ?<a href="#" className='signLink'>Sign in</a>
  </p>
)}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App




















 
 
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

