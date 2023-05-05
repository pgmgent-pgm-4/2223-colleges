import { useEffect, useState } from 'react';
import './App.css';
import { RandomBeer } from './components/beer';
import { Header } from './components/layout';
import { MakeupList, MakeupSearchForm } from './components/makeup';
import { useFetch } from './hooks';

const MAKEUP_API = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

function App() {
  const [data, isLoading, error] = useFetch(MAKEUP_API);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchStr) => {
    setFilteredData(data.filter(p => p.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1))
  }

  const handleRating = (rating) => {
    setFilteredData(data.filter(p => p.rating >= rating))
  }

  return (
    <div className="app">
      <Header />
      <MakeupSearchForm onSearch={handleSearch} onRating={handleRating} />
      {data && <MakeupList data={filteredData} />}
      <RandomBeer />
    </div>
  );
}

export default App;
