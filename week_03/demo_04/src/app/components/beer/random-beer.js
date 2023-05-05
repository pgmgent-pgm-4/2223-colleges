import { useEffect, useState } from "react";
import { useFetch } from "../../hooks";

const BEER_API = 'https://random-data-api.com/api/beer/random_beer';

const RandomBeer = () => {
  const [data, isLoading, error] = useFetch(BEER_API);
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);


  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(BEER_API)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => setError(error))
  //     .finally(() => {
  //       setIsLoading(false)
  //     });
  // }, []);

  // const getData = async () => {
  //   try {
  //     setIsLoading(true);

  //     const response = await fetch(BEER_API);
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      {error && <p>{error.toString()}</p>}
      {isLoading && <p>LOADING....</p>}
      {data && 
        <>
          <h3>{data.name}</h3>
          <span className="">{data.alcohol}</span>
        </>
      }
    </div>
  )
};

export default RandomBeer;