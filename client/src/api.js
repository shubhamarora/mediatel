export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
}

export const getURL = () => {
  return isProduction() ? 'https://dashboard.mediatelcommunication.com' : 'http://localhost:1337';
}

const getToken = () => {
  return isProduction() ? '432b44fbba156bc7136d380a8caa94c7b8ac44e8909b804ce0baa9fc460e4a0dc17d3a8a70ecf14e2878570cc79087be0c62d22dfdd22c7fd256209b2320e07ebb87a0a25840727959b3c735590f9e2de96e84e5f91540f7d249b605b2b616f338c641c3b1aade7cb2044778db90ac720dc28936b1baadc0466b3801f87e4199' : '4997714daad2fe159ab05c9712ef56615fd3874eb3be0e2ba5ea0d041cc24a46601bb30094aa0135b87524c4b86628792f6093b574f7b4c5a63239ed5c186222095953e9d038a299be9bfe5b7b596af685fea47704e662e33ce6c86313279d7dc401f110d6e34fb41175e68f8a9c199aefa82afef95b0f0b7b22d44c475eb3fd';
}

const getPageContent = async () => {
  const URL = getURL();

  const response = await fetch(`${URL}/api/page?populate=deep`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + getToken(),
    },
  });
  const data = await response.json();
  return data;
}

export default getPageContent;