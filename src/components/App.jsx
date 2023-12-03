import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import getImages from '../API/API';

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);

  const getQuery = formSearch => {
    if (formSearch.trim() === '') {
      alert('Please, enter request');
      return;
    }

    setQuery(formSearch);
    setPage(1);
    setResults([]);
    setTotalImages(0);
  };
  useEffect(() => {
    if (query) {
      const updateGallery = async () => {
        try {
          setLoading(true);
          const data = await getImages(query, page);

          setResults(prevState => [...prevState, ...data.hits]);
          setTotalImages(data.totalHits);
        } catch {
          alert('Something went wrong');
        } finally {
          setLoading(false);
        }
      };
      updateGallery();
    }
  }, [page, query]);

  const loadMore = async () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar getQuery={getQuery} />
      <ImageGallery array={results} />
      {results.length < totalImages && <Button onClick={loadMore} />}

      {loading && <Loader />}
    </>
  );
};
export default App;
// import React, { Component } from 'react';
// export class App extends Component {
//   state = {
//     results: [],
//     query: '',
//     page: 1,
//     totalImages: 0,

//     loading: false,
//   };

//   getQuery = formSearch => {
//     if (formSearch.trim() === '') {
//       alert('Please, enter request');
//       return;
//     }
//     this.setState({ query: formSearch, page: 1, results: [], totalImages: 0 });
//   };

//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.query !== this.state.query ||
//       prevState.page !== this.state.page
//     ) {
//       this.updateGallery();
//     }
//   }
//   updateGallery = async () => {
//     try {
//       this.setState({ loading: true });
//       const data = await getImages(this.state.query, this.state.page);

//       this.setState(prevState => ({
//         results: [...prevState.results, ...data.hits],
//         totalImages: data.totalHits,
//       }));
//     } catch {
//       alert('Something went wrong');
//     } finally {
//       this.setState({ loading: false });
//     }
//   };
//   loadMore = async () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { results, loading, totalImages } = this.state;
//     return (
//       <>
//         <Searchbar getQuery={this.getQuery} />
//         <ImageGallery array={results} />
//         {results.length < totalImages && <Button onClick={this.loadMore} />}

//         {loading && <Loader />}
//       </>
//     );
//   }
// }
