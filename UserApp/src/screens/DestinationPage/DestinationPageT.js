import React, { useState } from "react";
export function destination(props) {
function submitDest()
    {
        return "success";
    }
  return (
    <>
      <label>
        Current Location:
        <input type="text"  />
      </label>
      <label>
        Destination Location:
        <input type="text"  />
      </label>
      <button onClick={submitDest}>Submit</button>
    </>
  );
}