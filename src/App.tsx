import { useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
  username: "",
  password: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateData(newData: Partial<FormData>) {
    setData((prevData) => ({ ...prevData, ...newData }));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, prev, next } =
    useMultistepForm([
      <UserForm data={data} updateData={updateData} />,
      <AddressForm />,
      <AccountForm />,
    ]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLastStep) {
      alert("Submitted");
    }
    next();
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        border: "1px solid #282c34",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={prev}>
              Back
            </button>
          )}
          {!isLastStep && <button type="submit">Next</button>}
          {isLastStep && <button type="submit">Finish</button>}
        </div>
      </form>
    </div>
  );
}

export default App;
