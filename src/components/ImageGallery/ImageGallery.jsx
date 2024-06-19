import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onOpenModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard imageData={item} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}
