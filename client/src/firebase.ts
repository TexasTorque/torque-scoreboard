//const PROD_SERVER_ADRESS = "https://test.onrender.com";
const TEST_SERVER_ADRESS: string = "http://localhost:3001";

const serverAdresses = {
  'production': TEST_SERVER_ADRESS,
  'development': TEST_SERVER_ADRESS,
  'test': TEST_SERVER_ADRESS
};

const api = (x: string): string => serverAdresses[process.env.NODE_ENV] + "/" + x;

export {}