import React from "react";
import BodyComponent from "./BodyComponent";
import SuggestedComponent from "./SuggestedComponent";

const FeedComponent = () => {
  return (
    <div className="feed--content">
      <div className="feed-main">
        <div className="feed-head">
          <div className="head--item pst--btn">
            <button className="hover:border-zinc-400 hover:text-neutral-400 hover:bg-white ease-in duration-300">
              Share what's on your mind right now!
            </button>
          </div>

          <div className="head--item">

            <div className="item--left">

            <div className="create--btn">
              <button>
                <i className="fa-thin fa-square-plus" />

                <span className="text-subtitle"> Create</span>
                
              </button>
            </div>
            <div className="login--btn">
              <button>
              <i className="fa-sharp-duotone fa-thin fa-arrow-left-to-bracket " />
              <span className="text-subtitle"> Sign In</span>
             

              </button>
            </div>

            </div>
            
          </div>
        </div>
      </div>
      <div className="feed-body">
        <BodyComponent></BodyComponent>
        <SuggestedComponent></SuggestedComponent>
      </div>
     
    </div>
  );
};

export default FeedComponent;
