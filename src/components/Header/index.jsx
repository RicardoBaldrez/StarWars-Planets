import React from "react";

import { ReactComponent as ImageHeader } from "./assets/image-header.svg";
import { WrapperHeader } from "./styles";

export default function Header() {
  return (
    <WrapperHeader>
      <ImageHeader />
    </WrapperHeader>
  );
}
