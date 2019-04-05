import React, { useState, useEffect } from "react";
import useKey from "./io/keyListener";
import fetchPosts, { getTime } from "./io/fetchPosts";
import dispatch from "./reducer";
import { getCurrentCount, setCurrentCount } from "./io/localStorageUtils";

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

const currentDayIndex = getCurrentCount();

const IsRecommendationDecider = props => {
  const [currentItem, setCurrentItem] = useState(0);
  const [savedItems, setSavedItems] = useState(new Set());
  const [posts, setPosts] = useState([]);
  const [dayIndex, setDayIndex] = useState(currentDayIndex);

  // TODO current count things
  useEffect(() => fetchPosts(dayIndex, setPosts), [dayIndex]);

  useKey({
    currentItem,
    setCurrentItem,
    savedItems,
    setSavedItems,
    dispatch,
    links: posts
  });

  if (currentItem >= posts.length && dayIndex < 1900 && currentItem > 0) {
    setCurrentItem(0);
    setCurrentCount(dayIndex + 1);
    setDayIndex(dayIndex + 1);
    dispatch({ type: "flush", params: { savedItems, setSavedItems } });
  }

  const message =
    currentItem >= posts.length ? (
      <span>You've seen them all!</span>
    ) : (
      <div>
        <span>
          J is yes, F is no, H/G is back, B is flush to local storage, Z is
          clear local storage
        </span>
        <br />
        <h3>Is this thread asking for a recommendation?</h3>
        <br />
        <span>
          <b>{posts[currentItem].title}</b>
        </span>
        <br />
        <br />
        <span>{posts[currentItem].selftext}</span>
      </div>
    );
  return (
    <div>
      <h3>{getTime(dayIndex)}</h3>
      {message}
      <br />
      <SavedItems savedItems={savedItems} />
    </div>
  );
};

export default IsRecommendationDecider;
