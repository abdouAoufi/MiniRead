import React from "react";
import Title from "../../../../../components/typographie/title/title";
import Subtitle from "../../../../../components/typographie/subtitle/Subtitle";
import { IMAGES } from "../../../../../assets";
import Button from "../../../../../components/layout@/button/button";

function result(props) {
  const status = props.status;
  let image = IMAGES.update;
  let retry = false;
  if (status >= 400) {
    image = IMAGES.error;
    retry = true;
  }
  return (
    <div className="text-center">
      <p className="text-lg text-black-light font-medium my-4">
        {" "}
        {props.result?.title}{" "}
      </p>
      <img src={image} height="45" className="my-4" />
      <Subtitle text={props.result?.message} />
      {retry ? (
        <div className="my-4">
          <Button text="Try again" click={props.retry} />
        </div>
      ) : null}
    </div>
  );
}

export default result;
