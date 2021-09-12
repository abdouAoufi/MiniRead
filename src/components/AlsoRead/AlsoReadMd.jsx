import React from "react";

function AlsoReadMd(props) {
  return (
    <div className="mt-6 ">
      <h2 className="text-md font-semibold uppercase text-primary ">
        {props.headTitle}
      </h2>
      <div className="">
        {props.posts?.map((post) => {
          return (
            <p key={post._id} className="block text-sm mt-2 text-black-light">
              {post.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default AlsoReadMd;
