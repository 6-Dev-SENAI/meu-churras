import React from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";

import Style from "./styles";

function Values() {
  return (
    <Content>
      <ChurrasTitle
        style={Style.title_style}
        text="Valor por Pessoa"
      ></ChurrasTitle>
    </Content>
  );
}

export default Values;
