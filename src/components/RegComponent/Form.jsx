import React, { useState, useEffect } from "react";
import { IndividualRegForm } from "./IndividualRegForm";
import { TeamRegForm } from "./TeamRegForm";
import { Link } from "react-router-dom";

export const Form = ({ changeForm }) => {
  const [ChangeForm, setChangeForm] = useState(false);

  useEffect(() => {
    setChangeForm(changeForm);
  }, [changeForm]);

  const active = ChangeForm ? "teamActive" : "memberActive";

  return (
    <div className="formContainer">
      <div className="formArea">
        <div className="formBtn">
          <Link to="/register/member" className={`${active} indBtn`}>
            Individual
          </Link>
          <Link to="/register/team" className={`${active} teamBtn`}>
            Team
          </Link>
        </div>

        {ChangeForm ? <TeamRegForm /> : <IndividualRegForm />}
      </div>
    </div>
  );
};
