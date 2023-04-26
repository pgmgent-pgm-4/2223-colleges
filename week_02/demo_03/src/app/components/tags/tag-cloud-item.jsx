const TagCloudItem = ({ data }) => {
  return (
    <div className="tag-cloud__item">
      { data.name }
    </div>
  )
};

export default TagCloudItem;