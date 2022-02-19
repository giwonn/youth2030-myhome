export default {
  api: {
    baseUrl: process.env.NODE_ENV === 'production' ? '' : 'localhost:80/api'
  },
};
