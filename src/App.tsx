 
 
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import './App.css'
import { UserForm } from './UserForm'
import { useMultistepForm } from './useMultistepForm'

function App() {
 
 const {steps,currentStepIndex,step,isFirstStep,back,next,isLastStep}=useMultistepForm( [
 
  <UserForm/> , <AddressForm/> ,<AccountForm/>

])
let buttonText;
if (currentStepIndex === 0) {
  buttonText = 'Become a tuber driver';
} else if (currentStepIndex === 1) {
  buttonText = 'Next';
} else if (currentStepIndex === 2){
  buttonText = 'Confirm';
}
else {
  buttonText = isLastStep ? 'Finish' : `Step ${currentStepIndex + 1}`;
}

 
  
  return  (
    <div className="page-container">
      <div className="tuberheadingdiv">
          <span className="nametuber">Tuber</span>
        </div>
      <div className="mainholder">
        

        <div className="left-side">
       <span className='spantags'>Sign up to become</span>
       <span className='spantags'>Tuber driver</span>

       <span className='requiremntsspan'>Requirments</span>
    <div className='infoholder'>
    <p>Age 18+</p>
        <p>Driving license</p>
        <p>Car(roadworthy, registered, and with a current CTP insurance policy)</p>
        <p>An Austrailan Business Number (ABN)</p>
        <p>Smartphone with IOS 12 /Android 6.0</p>
        <p>Right to work in Austraila</p>
        <p>It's your responsibility to keep your documents up to date if they expire</p>
    </div>
        
      </div>

        <div className="centered-div">
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
              {!isFirstStep && <button type="button" onClick={back}>Back  </button>}

              <button type="button"  className='nextbtn' onClick={next}>
                {buttonText}
              </button>

    
            </div>
            <p>Already have an account ?<a href="#">Sign in</a> </p>
          </form>
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

