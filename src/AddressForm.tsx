
export function AddressForm(){
    return (
        < >
 
 <div className="titileHolderStep2">
    <p className="innerText">Driver information</p>
 </div>
        <input  autoFocus required type="date" placeholder="Date of birth" className="inputfields"/>

 
        <input  autoFocus required type="text" placeholder="Driver license No" className="inputfields"/>

 
         <select name="" id="" className="inputfields">

            <option value="">City you'll drive in</option>
            <option value="">Sri lanka</option>
            <option value="">India</option>
            <option value="">Sri lanka</option>
            <option value="">Sri lanka</option>
         </select>
         <div className="titileHolderStep2">
         <p>Create password</p>
 </div>

         
         <input type="password" placeholder="Password" className="inputfields"/>
         <input type="password" placeholder="Confirm password" className="inputfields"/>


        </>
    )
}