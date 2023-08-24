import { FormWrapper } from "./FormWrapper";

export function UserForm(){
    return (
        <FormWrapper title="User Details">
        <label>First name</label>
        <input  autoFocus required type="text" />

        <label>Last name</label>
        <input  autoFocus required type="text" />

        <label>Age</label>
        <input   min={1} required type="number" />
        </FormWrapper>
   )
}