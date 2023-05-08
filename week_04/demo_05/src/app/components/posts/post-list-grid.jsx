// Import custom modules
import PostListGridItem from "./post-list-grid-item";

const PostListGrid = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post, index) => <PostListGridItem key={index} id={index} post={post} className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} />)}
    </div>
  )
};

export default PostListGrid;