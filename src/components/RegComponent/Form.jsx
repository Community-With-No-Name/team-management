import React, { useState } from "react";
import { IndividualRegForm } from "./IndividualRegForm";
import { TeamRegForm } from "./TeamRegForm";
import teamIcon from "../../asset/signupForm/teamIcon.jpg";

export const Form = () => {
  const [ChangeForm, setChangeForm] = useState(false);

  return (
    <div className="formContainer">
      <div className="iconArea">
        <img src={teamIcon} alt="teamIcon" />
      </div>
      <div className="formArea">
        <div className="formBtn">
          <div className="indBtn" onClick={() => setChangeForm(false)}>
            Individual
          </div>
          <div className="teamBtn" onClick={() => setChangeForm(true)}>
            Team
          </div>
        </div>

        {ChangeForm ? <TeamRegForm /> : <IndividualRegForm />}
      </div>
    </div>
  );
};
