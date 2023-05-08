// Import custom modules

import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';


const PostListGridItem = ({id, post, className}) => {
  return (
    <div className={`${className}`}>
      <article className={`card`}>
        <img src={post.urlToImage} className="card-img-top" alt={post.title} />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
          <Link className="btn btn-primary" to={`${ROUTES.Posts}/${id}`}>More info</Link>
        </div>
      </article>
    </div>
  )
};

export default PostListGridItem;