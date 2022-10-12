import { FormWrapper } from "./FormWrapper";

type UserFormData = {
  firstName: string;
  lastName: string;
  age: number;
};

type UserFormProps = {
  updateData: (data: Partial<UserFormData>) => void;
  data: UserFormData;
};

export function UserForm({ updateData, data }: UserFormProps) {
  return (
    <FormWrapper title={"User Details"}>
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={data.firstName}
        onChange={(e) => updateData({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={data.lastName}
        onChange={(e) => updateData({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        type="number"
        min={1}
        value={data.age}
        onChange={(e) => updateData({ age: parseInt(e.target.value) })}
      />
    </FormWrapper>
  );
}
