 

export function AccountForm(){
    return (
       
 

<>

<div className="titileholder">
        <span className="createaccounttitle">Vehicle information</span>
        </div>



          <select name="" id="" className="inputfields">

            <option value="">Select your vehicle type</option>
            <option value="">Toyota</option>
            <option value="">Lambo</option>
            <option value="">Lambo lanka</option>
            <option value="">Sri Lambo</option>
         </select>



         <select name="" id="" className="inputfields">

            <option value="">Vehical make</option>
            <option value="">type2</option>
            <option value="">India</option>
            <option value="">Sri lanka</option>
            <option value="">Sri lanka</option>
         </select>


         <input  autoFocus required type="text" placeholder="Vehicle model" className="inputfields"/>


         <input  autoFocus required type="text" placeholder="Year" className="inputfields"/>


         <input  autoFocus required type="number" placeholder="Enter your vehicle plate Number" className="inputfields"/>


        </>

    )
}