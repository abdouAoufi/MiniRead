import React, { useState } from "react";

function CompletingTags({ topic, addTopic, removeTopic }) {
  const idle = "ring-0";
  const active = "ring-1 ring-secondary";
  const [classes, setClasses] = useState(idle);
  const [checked, setChekced] = useState(false);

  const manageState = () => {
    if (!checked) {
      addTopic(topic);
      setClasses(active);
      setChekced(true);
    } else {
      removeTopic(topic);
      setClasses(idle);
      setChekced(false);
    }
  };
  return (
    <div
      onClick={manageState}
      className={`${classes} my-2 uppercase px-6 mr-2 py-2 text-md inline-block 
      text-black transition-colors duration-200  
      bg-black-lighterr rounded-3xl shadow cursor-pointer  `}
    >
      {topic}
    </div>
  );
}

export default CompletingTags;
