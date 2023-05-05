import { useState } from "react";

const MakeupSearchForm = ({className, onSearch, onRating}) => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState(3);

  const handleSearch = (ev) => {
    const txt = ev.currentTarget.value;
    setSearch(txt);

    if(typeof onSearch === 'function') {
      onSearch(txt);
    }
  }

  const handleRating = (ev) => {
    const rating = ev.currentTarget.value;
    setRating(rating);

    if(typeof onRating === 'function') {
      onRating(rating);
    }
  }

  return (
    <div className={`${className}`}>
      <form>
        <div className="mb-3">
          <label htmlFor="txtSearch" className="form-label">Search</label>
          <input type="text" className="form-control" id="txtSearch" aria-describedby="emailHelp" onChange={(ev) => handleSearch(ev)} />
          <div id="emailHelp" className="form-text">Write your search here.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="rangeRating" className="form-label">Rating</label>
          <input type="range" className="form-range" id="rangeRating" step={1} max={5} defaultValue={rating} onChange={(ev) => handleRating(ev)}></input>
        </div>
        
      </form>
    </div>
  )
};

export default MakeupSearchForm;