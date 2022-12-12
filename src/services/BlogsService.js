import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"

class BlogsService {

  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('getting blogs', res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  setActiveBlog(blog) {
    AppState.activeProfile = blog
  }



}

export const blogsService = new BlogsService()