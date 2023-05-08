import { PostListItem } from "../components/posts";
import { useFetch } from "../hooks";

const NEWS_API = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

const PostsPage = () => {
  const [data, isLoading, error] = useFetch(NEWS_API);

  return (
    <div className={`container`}>
      <h1>Blog</h1>
      {isLoading ? <p>LOADING</p> : null}
      <div className={`row`}>
        {data && data.articles.map((post, index) => <PostListItem key={index} id={index} post={post} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
      </div>
    </div>
  )
};

export default PostsPage;