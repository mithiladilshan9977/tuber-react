import { FormWrapper } from "./FormWrapper";

export function AccountForm(){
    return (
        <FormWrapper title="Account details">


       <label>Email name</label>
        <input  autoFocus required type="text" />

        <label>Password name</label>
        <input  autoFocus required type="text" />   
        </FormWrapper>
    )
}