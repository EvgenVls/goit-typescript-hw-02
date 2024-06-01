import { useState, useEffect } from "react";
import { featchPhotos } from "../../unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import "./App.css";

function App() {
  const [photoCollection, setPhotoCollection] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [photoForModal, setPhotoForModal] = useState({});

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotoCollection([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos() {
      try {
        setLoader(true);
        setError(false);
        const data = await featchPhotos(query, page);
        setShowBtn(data.total_pages > page);

        setPhotoCollection((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getPhotos();
  }, [query, page]);

  const onShowModal = (photoId) => {
    setPhotoForModal(() => {
      return photoCollection.find((photo) => photo.id === photoId);
    });
    setShowModal(true);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photoCollection.length > 0 && (
        <ImageGallery items={photoCollection} openInModal={onShowModal} />
      )}
      {loader && <Loader />}
      {showBtn && !loader && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {showModal && (
        <ImageModal obj={photoForModal} modalIsOpen={setShowModal} />
      )}
    </>
  );
}

export default App;
