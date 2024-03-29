// Import custom modules

import { Link } from "react-router-dom";

import { ROUTES } from '../../routes';


const PostListRowItem = ({id, post, className}) => {
  return (
    <div className={`${className}`}>
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={post.urlToImage} className="img-fluid rounded-start" alt={post.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <Link className="btn btn-primary" to={`${ROUTES.Posts}/${id}`}>More info</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
};

export default PostListRowItem;