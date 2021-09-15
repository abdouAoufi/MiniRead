import React from "react";
import { ICONS } from "../../assets/assets";

/* 
{
    "content": {
        "data": {
            "paragraph_1": "When products are made for you, you never realise how their design can be exclusionary towards people of color.",
            "imageUrl_1": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    },
    "postinfo": {
        "timeReading": "5 min",
        "topic": "Design",
        "likes": "257",
        "comments": []
    },
    "_id": "6141048a68be832b2c12b0e1",
    "creator": "613998ea9b0ae7d836cade11",
    "tags": [
        {
            "name": "Design",
            "_id": "6141048a68be832b2c12b0e2"
        }
    ],
    "title": "Six Designs That White People Never Notice Are Racist",
    "summary": "When products are made for you, you never realise how their design can be exclusionary towards people of color.",
    "conclusion": "Designers have an important role in fighting discrimination, and making products that work for everyone. This is just one of the reasons we need more diversity in the design world, as well as raising awareness in the field for issues such as racism and sexism.",
    "imageHeaderUrl": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "createdAt": "2021-09-14T20:22:34.304Z",
    "updatedAt": "2021-09-14T20:22:34.304Z",
    "__v": 0
}
*/

function Article({ post }) {
  
  return (
    <div className="lg:mr-8">
      {/* ARTICLE CONTENT */}
      <div>
        <p className="tracking-wide text-secondary-dark font-normal text-sm">
          Trend{" "}
          <span>
            <img
              src={ICONS.trend}
              alt="trends"
              className="ml-2 w-6 h-6 inline-block"
            />
          </span>
        </p>
        {/* TITLE */}
        <h1 className="mt-3 text-black-dark tracking-wider font-bold md:font-medium text-4xl ">
          {post?.title}
        </h1>

        <p className="mt-4 text-black font-normal ">{post?.summary}</p>

        {/* IMAGE */}
        <div className="my-3 w-full  rounded-md overflow-hidden ">
          <img
            src={post?.content.data.imageUrl_1}
            alt="article header"
            className=" w-full"
          />
          <p className="text-sm font-light text-center text-black-light mt-1">
            {post?.title}
          </p>
        </div>
        <p className="mt-2 text-black font-normal">
          {post?.content.data.paragraph_1}
        </p>
        {/* IMAGE */}
      </div>
    </div>
  );
}

export default Article;
