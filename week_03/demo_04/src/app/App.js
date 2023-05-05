import './App.css';
import { RandomBeer } from './components/beer';
import { MakeupList } from './components/makeup';
import { useFetch } from './hooks';

const MAKEUP_API = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

function App() {
  const [data, isLoading, error] = useFetch(MAKEUP_API);

  return (
    <div className="App">
      <MakeupList data={data} />
      <RandomBeer />
    </div>
  );
}

export default App;
