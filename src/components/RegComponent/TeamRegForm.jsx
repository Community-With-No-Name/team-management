import React from "react";
import { SubmistBtn } from "../generalComponent/Btn";

export const TeamRegForm = () => {
  const submitTeamForm = () => {
    console.log("form submited");
  };

  return (
    <form action="" method="post">
      <label htmlFor="team_name">Team Name</label>
      <input type="text" name="team_name" id="team_name" />

      <label htmlFor="team_secret">Team Secret</label>
      <input type="text" name="team_secret" id="team_secret" />

      <label htmlFor="team_discriptions ">Team discription</label>
      <input type='text'
        name="team_discription "
        id="team_discription"
       ></input>

      <SubmistBtn value={"Add Team"} onClick={submitTeamForm} />
    </form>
  );
};
