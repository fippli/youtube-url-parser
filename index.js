/** 
 * Parse url strings for embedding youtube videos
 */
const getVideoId = (url) => {
  try {
    const start = url.indexOf("watch?v=") + 8;
    const end = url.indexOf("&");
    if (end === -1) {
      return url.substring(start);
    }
    return url.substring(start, end);
  } catch (error) {
    console.error(error);
    return null;
  }
}

const getEmbeddableLink = (url) => {
  return `https://www.youtube.com/embed/${getVideoId(url)}`;
}

module.exports = {
  getVideoId: getVideoId,
  getEmbeddableLink: getEmbeddableLink,
}
