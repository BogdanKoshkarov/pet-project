import httpService from './http.service';

const googleEndpoint = 'https://www.googleapis.com/oauth2/v2/userinfo';

const googleService = {
  get: async (accessToken) => {
    try {
      const {data} = await httpService.get(googleEndpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      console.error('Error fetching user data from Google:', error);
      throw error;
    }
  },
};

export default googleService;
