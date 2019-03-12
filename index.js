/*
Parse url strings for embedding youtube videos
*/
const getVideoId = (url) => {
  const start = url.indexOf("watch?v=") + 8;
  const end = url.indexOf("&");
  return url.substring(start, end);
}

const getEmbeddableLink = (url) => {
  return `https://www.youtube.com/embed/${getVideoId(url)}`;
}

module.exports = {
  getVideoId: getVideoId,
  getEmbeddableLink: getEmbeddableLink,
}