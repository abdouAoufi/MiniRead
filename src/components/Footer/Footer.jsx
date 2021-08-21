import React from "react";

function Footer() {
  return (
    <div>
      <footer className="p-6 bg-gray-100 text-black-light">
        <div className="hidden container md:grid grid-cols-2 mx-auto gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-lg text-black-dark">Getting started</h2>
            <div className=" text-sm text-coolGray-600">
              <p>
                Medium is an open platform where 170 million readers come to
                find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface. Learn more
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-lg text-black-dark">Core Concepts</h2>
            <div className=" text-sm text-black-light">
              <p>
                Medium is an open platform where 170 million readers come to
                find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface. Learn more
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-lg text-black-dark">Customization</h2>
            <div className=" text-sm text-coolGray-600">
              <p>
                Medium is an open platform where 170 million readers come to
                find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface. Learn more
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="text-coolGray-600">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
