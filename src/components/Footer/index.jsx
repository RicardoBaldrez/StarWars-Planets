import React from "react";

import { ReactComponent as FooterImage } from "./assets/image-footer.svg";
import { ReactComponent as SeparatorImage } from "./assets/separator-image.svg";
import { WrapperFooter, InfoCompany, WrapperSeparator } from "./styles";

export default function Footer() {
  return (
    <WrapperFooter>
      <InfoCompany>
        STARWARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
        reservados
      </InfoCompany>
      <WrapperSeparator>
        <SeparatorImage />
      </WrapperSeparator>
      <FooterImage />
    </WrapperFooter>
  );
}
