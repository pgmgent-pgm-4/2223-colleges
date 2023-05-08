// Import external modules
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faList } from '@fortawesome/free-solid-svg-icons';

// Import internal modules
import { PostListGrid, PostListItem, PostListRow } from "../components/posts";
import { useFetch } from "../hooks";

const NEWS_API = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

const PostsPage = () => {
  const [data, isLoading, error] = useFetch(NEWS_API);
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className={`container`}>
      <h1>Blog</h1>
      {isLoading ? <p>LOADING</p> : null}
      <div>
        <button onClick={() => setIsGridView(!isGridView)}>
          {isGridView ? 
          <span><FontAwesomeIcon icon={faList} />Row View</span> : 
          <span><FontAwesomeIcon icon={faTableCellsLarge} />Grid View</span>  
          }
        </button>
        {isGridView && data && <PostListGrid posts={data.articles} className={`row`} />}
        {!isGridView && data && <PostListRow posts={data.articles} className={`row`} />}
      </div>
    </div>
  )
};

export default PostsPage;