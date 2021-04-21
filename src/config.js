module.exports = {
  apiURL: process.env.NODE_ENV === 'development' ? "http://localhost:8000" : 'https://ccl-videos-backend.herokuapp.com',
  internalURL: "http://localhost:3000",
  bucket: "ccl-videos",
};
