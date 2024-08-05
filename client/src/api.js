
export const getURL = () => {
  return process.env.NODE_ENV === 'production' ? 'https://dashboard.mediatelcommunication.com' : 'http://localhost:1337';
}

const getPageContent = async () => {
  const URL = getURL();

  const response = await fetch(`${URL}/api/page?populate=deep`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 4997714daad2fe159ab05c9712ef56615fd3874eb3be0e2ba5ea0d041cc24a46601bb30094aa0135b87524c4b86628792f6093b574f7b4c5a63239ed5c186222095953e9d038a299be9bfe5b7b596af685fea47704e662e33ce6c86313279d7dc401f110d6e34fb41175e68f8a9c199aefa82afef95b0f0b7b22d44c475eb3fd',
    },
  });
  const data = await response.json();
  return data;
}

export default getPageContent;