import { $fetch, type FetchOptions } from 'ofetch';

import PostsModule from '~/api/modules/posts';

interface IApiInstance {
  posts: PostsModule
}

export default defineNuxtPlugin(() => {
  const fetchOptions: FetchOptions = {
    baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work',
    // credentials: 'include',
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    posts: new PostsModule(apiFetcher)
  };

  return {
    provide: {
      api: modules
    }
  };
});
