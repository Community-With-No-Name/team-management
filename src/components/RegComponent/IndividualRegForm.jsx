import React from "react";
import { SubmistBtn } from "../generalComponent/Btn";

export const IndividualRegForm = () => {
  const submitMemberForm = () => {
    console.log("form submited");
  };

  return (
    <form action="" method="post">
      <label htmlFor="full_name">Full Name</label>
      <input type="text" name="full_name" id="full_name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <SubmistBtn  value={"Add Member"} onClick={submitMemberForm} />
    </form>
  );
};
