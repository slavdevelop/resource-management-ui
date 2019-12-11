import axios from 'axios';

export const credentials = {
  username: 'hard',
  password: 'hard'
};

export const baseUrl = 'http://hiring.rewardgateway.net';
export const empListUrl = `${baseUrl}/list`;

export const getEmpList = async () => {
  const result = await axios
    .get(empListUrl, {
      auth: credentials,
      headers: {
        'Access-Control-Request-Methods': '*',
        'Access-Control-Request-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin': 'localhost, 127.0.0.1, ::1'
      }
    })
    .then(data => data);

  return result;
};
