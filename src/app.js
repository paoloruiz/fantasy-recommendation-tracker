import React, { useState, useEffect } from "react";
import useKey from "./keyListener";

const SavedItems = props => {
  return (
    <div>
      <h3>Saved Items</h3>
      <span>
        {Array.from(props.savedItems).map(a => (
          <p key={a.id}>{a.title}</p>
        ))}
      </span>
    </div>
  );
};

const IsRecommendationDecider = props => {
  const [currentItem, setCurrentItem] = useState(0);
  const [savedItems, setSavedItems] = useState(new Set());

  useKey({ currentItem, setCurrentItem, setSavedItems, links: props.links });

  if (currentItem >= props.links.length) {
    return (
      <div>
        <span>You've seen them all!</span>
        <SavedItems savedItems={savedItems} />
      </div>
    );
  }

  const message =
    currentItem >= props.links.length ? (
      <span>You've seen them all!</span>
    ) : (
      <div>
        <span>J is yes, F is no, H/G is back</span>
        <br />
        <h3>Is this thread asking for a recommendation?</h3>
        <br />
        <span>{props.links[currentItem].title}</span>
      </div>
    );
  return (
    <div>
      {message}
      <br />
      <SavedItems savedItems={savedItems} />
    </div>
  );
};

export default IsRecommendationDecider;
