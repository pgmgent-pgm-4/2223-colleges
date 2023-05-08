import { PostListGrid, PostListItem, PostListRow } from "../components/posts";
import { useFetch } from "../hooks";

const NEWS_API = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

const PostsPage = () => {
  const [data, isLoading, error] = useFetch(NEWS_API);

  return (
    <div className={`container`}>
      <h1>Blog</h1>
      {isLoading ? <p>LOADING</p> : null}
      <div>
        {/* {data && <PostListGrid posts={data.articles} className={`row`} />} */}
        {data && <PostListRow posts={data.articles} className={`row`} />}
      </div>
    </div>
  )
};

export default PostsPage;