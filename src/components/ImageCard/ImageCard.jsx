import css from "./ImageCard.module.css";

export default function ImageCard({ id, url, descr, openInModal }) {
  return (
    <div className={css.imageTumb}>
      <img
        className={css.image}
        src={url.small}
        alt={descr}
        onClick={() => openInModal(id)}
      />
    </div>
  );
}
