import React from "react";
import { Link } from "react-router-dom";
import Loading from "../layout@/loading/Loading";

function AlsoReadMd(props) {
  return (
    <div className="mt-6 p-2">
      <h2 className="text-md font-semibold uppercase text-primary ">
        {props.headTitle}
      </h2>
      <div className="">
        {props.posts ? (
          props.posts?.map((post) => {
            return (
              <Link
                to={`/article/${post._id}`}
                key={post._id}
                className="block text-sm mt-2 text-black-light"
              >
                {post.title}
              </Link>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default AlsoReadMd;
