import './App.css';
import { Fragment } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import fetchImages from './services';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  function usePrevious(value, page) {
    const ref = useRef();
    useEffect(() => {
      ref.current = { value, page };
    }, [value, page]);
    return ref.current;
  }

  const prevState = usePrevious(value, page);
  
  useEffect(() => {
    if (!value) return;
    if (prevState.value !== value || prevState.page !== page) {
      setIsLoading(true);
      try {
        fetchImages(value, page).then(res => {
          setIsLoading(false);
          setImages([...images, ...res.hits]);
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [value, page, images]);

  // useEffect(() => {
  //   return;
  // }, [prevState.page, prevState.value]);

  const handleSubmit = value => {
    setValue(value);
  };

  const onLoadMoreClick = async () => {
    setPage(page + 1);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  return (
    <Fragment>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <Button onLoadMoreClick={onLoadMoreClick} />
      )}
      {isModalOpen && <Modal image={largeImageURL} onClose={toggleModal} />}
    </Fragment>
  );
}

export default App;
