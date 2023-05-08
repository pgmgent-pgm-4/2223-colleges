// Import custom modules
import PostListRowItem from "./post-list-row-item";

const PostListRow = ({posts, className}) => {
  return (
    <div className={`${className}`}>
      {posts && posts.map((post, index) => <PostListRowItem key={index} id={index} post={post} className={`col-xs-12`} />)}
    </div>
  )
};

export default PostListRow;