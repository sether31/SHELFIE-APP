import 'dotenv/config';
import appJson from './app.json';

export default {
  ...appJson,
  expo: {
    ...appJson.expo,
    extra: {
      backendUrl: process.env.BACKEND_URL,
    },
  },
};
