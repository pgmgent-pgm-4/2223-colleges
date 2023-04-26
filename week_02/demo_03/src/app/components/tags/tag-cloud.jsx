import TagCloudItem from "./tag-cloud-item";

const TagCloud = ({ data }) => {
  return (
    <div className="tag-cloud">
      {data &&
      data.map(tag => <TagCloudItem key={tag.id} data={tag}/>)}
    </div>
  )
};

export default TagCloud;