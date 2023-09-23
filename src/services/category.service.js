import httpService from './http.service';

const categoryEndpoint = '/category/';

const categoryService = {
  get: async () => {
    const request = await httpService.get(categoryEndpoint);
    return request.data;
  },
};

export default categoryService;
