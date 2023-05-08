// Import external modules
import { useParams } from "react-router-dom";

// Import internal modules
import { useFetch } from "../hooks";
import { useEffect } from "react";
import { useState } from "react";

const NEWS_API = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

const PostDetailsPage = () => {
  const [post, setPost] = useState(null);

  const { postId } = useParams();
  const [data, isLoading, error] = useFetch(NEWS_API);

  useEffect(() => {
    if (data !== null) {
      setPost(data.articles[postId]);
    }
    
  }, [data, postId]);

  return (
    <>
      <h1>Post Details</h1>
      {post && 
        <article>
          <h1>{post.title}</h1>
        </article>
      }
    </>
  )
};

export default PostDetailsPage;