import { Link } from "react-router-dom";

import notFoundImage from "./assets/NotFoundImage.webp";
import { WrapperNotFound } from "./styles";

export default function NotFound() {
  return (
    <WrapperNotFound>
      <img width="300" src={notFoundImage} alt="On my Way Sticker" />
      <p>The planet you are looking for does not exist in this galaxy!!!</p>
      <p>
        Click <Link to="/">here</Link> to search again
      </p>
    </WrapperNotFound>
  );
}
