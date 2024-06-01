import toast, { Toaster } from "react-hot-toast";
import { HiOutlineSearch } from "react-icons/hi";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchParam = form.elements.searchField.value;
    if (searchParam === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSearch(searchParam);

  };

  return (
    <header className={css.pageHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchBtn}>
          <HiOutlineSearch />
        </button>
        <input
          className={css.searchField}
          type="text"
          name="searchField"
          placeholder="Search images and photos"
        />
        <Toaster position="top-right" />
      </form>
    </header>
  );
}
