import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openInModal }) {
  return (
    <ul className={css.imageList}>
      {items.map(({ id, urls, description }) => (
        <li className={css.imageListItem} key={id}>
          <ImageCard
            id={id}
            url={urls}
            descr={description}
            openInModal={openInModal}
          />
        </li>
      ))}
    </ul>
  );
}
