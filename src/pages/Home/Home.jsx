import React from "react";
import Tags from "../../components/Tags/TagsHome";
import { TAGS } from "../../assets/assets";

function Home() {
  return (
    <div>
      {/* INNER CONTAINER */}
      <div className="p-4">
        <p className="text-black-light font-light text-lg">
          You're may be inressted by{" "}
        </p>
        <Tags tags={TAGS} />
      </div>
    </div>
  );
}

export default Home;
