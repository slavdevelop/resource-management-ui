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
      auth: credentials
    })
    .then(data => data);

  return result;
};
