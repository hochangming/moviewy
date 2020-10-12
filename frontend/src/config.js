const configs = {
    development: {
      SERVER_URI: 'http://localhost:5000',
    },
    production: {
      SERVER_URI: 'https://moviewy.herokuapp.com',
    },
  };
  
  let config = configs[process.env.NODE_ENV];

  export default config;