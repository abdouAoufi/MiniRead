import React from "react";

function Article() {
  return (
    <div className="">
      {/* ARTICLE CONTENT */}
      <div>
        <p className="tracking-wide text-secondary-dark font-normal text-sm">
          Trend
        </p>
        {/* TITLE */}
        <h1 className="mt-3 text-black-dark tracking-wider font-bold md:font-extrabold text-2xl ">
          Highway to Inferno: On the Road with the Oregon Proud Boys
        </h1>
      
     

        <p className="mt-2 text-black font-normal ">
          Law-and-order rebels. Freedom-loving fascists. What makes the far
          right tick?
        </p>

        {/* IMAGE */}
        <div className="my-3 w-full  rounded-md overflow-hidden ">
          <img
            src="https://miro.medium.com/max/2800/1*MmX0jjHnpxCX-Z7uV2cJ5w.png"
            alt="article header"
            className=" w-full"
          />
          <p className="text-sm font-light text-center text-black-light mt-1">
            Volume with the windows rolled down
          </p>
        </div>
        <p className="mt-2 text-black font-normal">
          Toby Keith’s daddy isn’t the only one. I’m idling on a sun-baked
          Oregon interstate just south of Portland, surrounded by lifted trucks
          carrying on the Keith tradition. The light summer breeze makes the
          countless flags dance in the shimmering heat. Trump 2020. Blue Lives
          Matter. American. Punisher. Gadsden. Confederate. I don’t have flags
          myself, but Toby Keith at full volume with the windows rolled down
          seems like a decent substitute. …
        </p>
        {/* IMAGE */}
        <div className="my-3 w-full  rounded-md overflow-hidden ">
          <img
            src="https://miro.medium.com/max/2800/1*Ws7mmN6YiwNqwA3xfWN4FA.png"
            alt="article header"
            className=" w-full"
          />
          <p className="text-sm font-light text-center text-black-light mt-1">
            Volume with the windows rolled down
          </p>
        </div>
        <p className="mt-2 text-black font-normal">
          And here comes press, wandering in to ask uncomfortable questions
          about the thing that just happened. The Proud Boys swarm, rush across
          the green of the State Capital lawn to challenge this new opponent.
          “Fake press!” someone shouts, and the cry catches on throughout the
          crowd that rapidly surrounds three of the journalists: “Hide behind
          your press pass!” “Bye, Antifa!” “We know what side you’re on!”
          Chandler Pappas, the man present when a fellow far-right protester
          Aaron “Jay” Danielson was shot and killed in Portland two weeks back,
          shoves a megaphone into a journalist’s face. “Tell me what happened to
          my partner wasn’t an execution!” he screams. Red-faced and furious.
        </p>
      </div>
    </div>
  );
}

export default Article;
