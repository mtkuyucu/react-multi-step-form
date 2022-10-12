import { FormWrapper } from "./FormWrapper";

export function AddressForm() {
  return (
    <FormWrapper title={"Address Details"}>
      <label>Address</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
      <label>State</label>
      <input required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </FormWrapper>
  );
}
