

export function OTPcheck(){
    return (
        <>
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
        <span className="resendText">Resend codde in 0:14</span>
  
        </div>

    



        </>
    )
}