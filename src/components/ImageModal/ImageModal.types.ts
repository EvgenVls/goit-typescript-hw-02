export interface ImageModalProps {
  obj: {
    urls: {
      regular: string;
    };
    description_alt: string;
    description: string;
    likes: number;
  };
  modalIsOpen: boolean;
}
