// https://api.pushshift.io/reddit/search/submission/?size=200&subreddit=fantasy&after=1388534400&before=1388620800
const START_TIME = 1388534400;
const STEP = 86400;

export function getTime(i) {
  const d = new Date(0);
  d.setUTCSeconds(START_TIME + STEP * i);
  return d.toDateString();
}

const getFetcherURL = i =>
  `https://api.pushshift.io/reddit/search/submission/?size=200&subreddit=fantasy&after=${START_TIME +
    STEP * i}&before=${START_TIME + STEP * (i + 1)}`;

export default (i, setPosts) => {
  fetch(getFetcherURL(i))
    .then(response => response.json())
    .then(json => {
      setPosts(
        json.data
          .map(item => {
            if (item.is_self) {
              return item;
            }
            return null;
          })
          .filter(item => !!item)
      );
    })
    .catch(e => {
      console.error(e);
    });
};
