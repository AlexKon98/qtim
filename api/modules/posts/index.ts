import type { PostItem } from './types';

import FetchFactory from '../../factory';

class PostsModule extends FetchFactory {
  async getPosts() {
    return await this.call<Promise<Array<PostItem>>>('GET', '/posts/');
  }
}

export default PostsModule;
