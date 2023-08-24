import { FormWrapper } from "./FormWrapper";

export function AddressForm(){
    return (
        <FormWrapper title="Address">
        <label>Street name</label>
        <input  autoFocus required type="text" />

        <label>City name</label>
        <input  autoFocus required type="text" />

        <label>Zip</label>
        <input  autoFocus required type="text" />

        </FormWrapper>
    )
}