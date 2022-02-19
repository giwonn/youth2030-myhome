export default {
  api: {
    baseUrl: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'
  },
};
