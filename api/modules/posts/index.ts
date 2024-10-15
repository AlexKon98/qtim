import type { PostItem } from './types';

import FetchFactory from '../../factory';

class PostsModule extends FetchFactory {
  async getPosts() {
    return await this.call<Promise<Array<PostItem>>>('GET', '/qtim-test-work/posts/');
  }
}

export default PostsModule;
