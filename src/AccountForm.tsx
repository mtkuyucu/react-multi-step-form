import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
  return (
    <FormWrapper title={"Account Information"}>
      <label>Username</label>
      <input autoFocus required type="text" />
      <label>Password</label>
      <input required type="password" />
    </FormWrapper>
  );
}
