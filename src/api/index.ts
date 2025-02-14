/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// External Components
import axios from 'axios';

const awaitTimeout = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const BACKEND_API_URL = 'https://api.analytics.epns.io/apis/analytics';
const ANALYTICS_API_BASE = 'https://backend.epns.io/apis/v1';
// const BACKEND_API_URL = 'https://api.analytics.push.org/apis/analytics';
// const ANALYTICS_API_BASE = 'https://backend.push.org/apis/v1';

export async function loadKPIData() {
  return axios
    .all([
      axios.post(`${BACKEND_API_URL}/get_notifs_sent`),
      axios.post(`${BACKEND_API_URL}/get_total_subscribers_count`),
      axios.post(`${BACKEND_API_URL}/get_total_channel_count`),
    ])
    .then(
      axios.spread((...responses) => {
        const [
          totalNotifsSentResponse,
          totalSubscribersCountResponse,
          totalChannelCountResponse,
        ] = responses || [];

        return {
          totalNotifsSent: totalNotifsSentResponse.data,
          totalSubscribersCount: totalSubscribersCountResponse.data,
          totalChannelCount: totalChannelCountResponse.data,
        };
      })
    )
    .catch((errors) => {
      throw Error(errors);
    });
}

export async function getBlogData(limit = 4) {
  const requrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ethereum-push-notification-service/';

  // await awaitTimeout(50000);

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const blogs = apiResponse?.data.items;
      return blogs.slice(0, limit);
    })
    .catch((error) => {
      throw Error(error);
    });
}

export async function sendEmailToMailingList({ email }) {
  const details = {
    name: '',
    email: email,
    list: 'YPwxHS892tH8Nhs13wzKqWbQ',
    api_key: 'TdzMcZVNTn1mjtAJHBpB',
    boolean: true,
  };

  let formBody = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch('https://tools.push.org/sendy/subscribe', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody,
  }).then((response) => {
    return response.text();
  });
}

export async function sendEmailToChainMailingList({ email }) {
  const details = {
    name: '',
    email: email,
    list: 'lh9Lq2FicS763EGk8Fhh763zZQ',
    api_key: 'TdzMcZVNTn1mjtAJHBpB',
    boolean: true,
  };

  let formBody = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch('https://tools.push.org/sendy/subscribe', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody,
  }).then((response) => {
    return response.text();
  });
}

export async function getChannels(page) {
  const requrl = `https://backend.push.org/apis/v1/channels?page=${page}&limit=9&sort=subscribers&order=desc`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const channels = apiResponse?.data?.channels;
      return channels;
    })
    .catch((error) => {
      throw Error(error);
    });
}

export const getChannelsSearch = async (page, query) => {
  const requrl = `https://backend.push.org/apis/v1/channels/search?page=${page}&limit=9&order=desc&query=${query}`;

  return axios
    .get(requrl)
    .then((apiResponse) => {
      const channels = apiResponse?.data?.channels;
      return channels;
    })
    .catch((error) => {
      throw Error(error);
    });
};

export const getNotifications = async ({
  startDate,
  endDate,
  channel,
  chain,
}) => {
  try {
    const res = await axios.get(
      `${ANALYTICS_API_BASE}/analytics/notification`,
      {
        params: {
          startDate,
          endDate,
          channel,
          source: chain,
        },
      }
    );
    // console.log('notifications', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in notification', e);
    return null;
  }
};

export const getSubscribers = async ({
  startDate,
  endDate,
  channel,
  chain,
}) => {
  try {
    const res = await axios.get(`${ANALYTICS_API_BASE}/analytics/subscriber`, {
      params: {
        startDate,
        endDate,
        channel,
        source: chain,
      },
    });
    //console.log('subscribers on chain', chain, res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in subscribers', e);
    return null;
  }
};

export const subscribeToSpace = async (formData) => {
  const requestOptions = { 'Content-Type': 'application/json' };
  try {
    const res = await axios.post(
      `${ANALYTICS_API_BASE}/w2w/waitlist`,
      formData,
      requestOptions
    );
    return res;
  } catch (e) {
    // console.log('Error occured in subscribers', e);
    // console.log(e?.response.data?.error.info);
    return e;
  }
};
