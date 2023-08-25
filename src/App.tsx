 
 
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
 
 
function App() {
 
 const {steps,currentStepIndex,step,isFirstStep,back,next,isLastStep}=useMultistepForm( [
 
  <UserForm/> , <AddressForm/> ,<AccountForm/>,<TextDetails/>,<UploadFiles/> 

])
let buttonText;
if (currentStepIndex === 0) {
  buttonText = 'Become a tuber driver';
} else if (currentStepIndex === 1) {
  buttonText = 'Next';
} else if (currentStepIndex === 2){
  buttonText = 'Next';
}
else  if( currentStepIndex === 3){
  buttonText = 'Confirm';
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
          <span className="nametuber">Tuber</span>
        </div>
      <div className="mainholder">
        

        <div className="left-side">

        <span className="spantags">Sign up to become</span>
          <span className="spantags">
            <span className="orange-text">TUBER</span> driver
          </span>

       <span className='requiremntsspan'>Requirments</span>
       <div className="infoholder">
      {currentStepIndex === 0 ? (
        <>
                  
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
               <span className='normelText'>Want to be your own boss?</span>
                <span className='normelText'>Apply to become a tuber driver and start earning extra income</span>
                <span className='normelText'>Earn on your terms</span>
                <span className='normelText'>Set your own schedule</span>
                <span className='normelText'>Get paid weekly</span>
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

              <button type="button"  className='nextbtn' onClick={next}>
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

