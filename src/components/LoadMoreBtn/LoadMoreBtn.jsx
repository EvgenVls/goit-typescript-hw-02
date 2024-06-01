import css from "./LoadMore.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <button className={css.loadMoreBtn} onClick={handleClick}>
      Load more
    </button>
  );
}
