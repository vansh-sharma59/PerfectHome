import React from "react";
import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <HashLoader color="#754400" size={65} />
    </div>
  );
}

export default Loading;
