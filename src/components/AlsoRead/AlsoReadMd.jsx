import React from "react";

function AlsoReadMd({ headTitle }) {
  return (
    <div className="mt-6 ">
      <h2 className="text-md font-semibold uppercase text-primary ">{headTitle}</h2>
      <div className="">
        <p className="inline-block text-sm mt-2 text-black-light">
          This Long-Awaited Technology May Finally Change the World
        </p>
        <p className="inline-block text-sm mt-2 text-black-light">
          Bored of VS Code? Try Lite-XL
        </p>
        <p className="inline-block text-sm mt-2 text-black-light">
          React Hooks: async function in the useEffect
        </p>
        <p className="inline-block text-sm mt-2 text-black-light">
          This Deceivingly Simple Digital Filing Method Is the Time-Saver I Need
        </p>
        <p className="inline-block text-sm mt-2 text-black-light">
          This Long-Awaited Technology May Finally Change the World
        </p>
      </div>
    </div>
  );
}

export default AlsoReadMd;
