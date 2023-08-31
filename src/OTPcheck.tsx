import { useEffect, useState } from "react";


export function OTPcheck(){




const step1data = sessionStorage.getItem('step1Data');

    return (
        <>
     <div className="titileholder">
            <span className="createaccounttitle">Verify your phone </span>
        </div>

<div className="OTPtextHolder">
<span className="otptext">
            Enter the 6-digit verification code sent to
        </span>
        <span className="otpPhoneNumber">
            step1data.phoneNumber
        </span>

</div>
        

        <div className="OTPnumberHolder">
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1} />
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
            <input type="number"  className="OTPnumberFields" placeholder="_" maxLength={1}/>
        </div>

        <div className="resentTextHolder">
        {/* <span className="resendText">Resend codde in 0:14</span> */}
  
        </div>

    



        </>
    )
}