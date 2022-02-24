import React, { useState } from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";
import Topping from "../../components/topping";

import Style from "./styles";

import { Dimensions, ScrollView, View } from "react-native";

import Imgs from "./img";

const defaultState = {
  name: "Item",
  values: {
    weight: 0,
    price: 0,
  },
};

function Topings({ route, navigation }) {
  const height = (Dimensions.get("window").height / 100) * 69;

  const [guarana, setGuarana] = useState({ ...defaultState });
  const [coca, setCoca] = useState({ ...defaultState });
  const [suco, setSuco] = useState({ ...defaultState });
  const [corona, setCorona] = useState({ ...defaultState });
  const [cerveja, setCerveja] = useState({ ...defaultState });
  const [energetico, setEnergetico] = useState({ ...defaultState });
  const [pao, setPao] = useState({ ...defaultState });
  const [sal, setSal] = useState({ ...defaultState });
  const [carvao, setCarvao] = useState({ ...defaultState });
  const [petisco, setPetisco] = useState({ ...defaultState });
  const [fosforo, setFosforo] = useState({ ...defaultState });
  const [gelo, setGelado] = useState({ ...defaultState });

  const { paying, food } = route.params;

  const next = () => {
    navigation.navigate("Payment", {
      paying,
      food,
      topings: {
        guarana,
        coca,
        suco,
        corona,
        cerveja,
        energetico,
        pao,
        sal,
        carvao,
        petisco,
        fosforo,
        gelo,
      },
    });
  };

  return (
    <Content>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",

          height: height,
        }}
      >
        <ChurrasTitle text="Algum opicional da lista?" />

        <ScrollView style={Style.scrollContainer} horizontal={false}>
          <Topping
            img={Imgs[0]}
            title="Guaraná"
            price={5.79}
            unity="2L"
            state={{ value: guarana, setValue: setGuarana }}
          />
          <Topping
            img={Imgs[1]}
            title="Coca-Cola"
            price={8.49}
            unity="2L"
            state={{ value: coca, setValue: setCoca }}
          />
          <Topping
            img={Imgs[2]}
            title="Suco"
            price={7.79}
            unity="1L"
            state={{ value: suco, setValue: setSuco }}
          />
          <Topping
            img={Imgs[3]}
            title="Corona"
            price={7.99}
            unity="1un"
            state={{ value: corona, setValue: setCorona }}
          />
          <Topping
            img={Imgs[4]}
            title="Heineken"
            price={5.39}
            unity="1un"
            state={{ value: cerveja, setValue: setCerveja }}
          />
          <Topping
            img={Imgs[5]}
            title="Energético"
            price={6.59}
            unity="1un"
            state={{ value: energetico, setValue: setEnergetico }}
          />
          <Topping
            img={Imgs[6]}
            title="Pão de Alho"
            price={9.29}
            unity="1pct"
            state={{ value: pao, setValue: setPao }}
          />
          <Topping
            img={Imgs[7]}
            title="Sal Grosso"
            price={3.39}
            unity="1pct"
            state={{ value: sal, setValue: setSal }}
          />
          <Topping
            img={Imgs[8]}
            title="Carvão"
            price={13.9}
            unity="2kg"
            state={{ value: carvao, setValue: setCarvao }}
          />
          <Topping
            img={Imgs[9]}
            title="Petiscos"
            price={22.96}
            unity="1pct"
            state={{ value: petisco, setValue: setPetisco }}
          />
          <Topping
            img={Imgs[10]}
            title="Acendedor"
            price={12.6}
            unity="1pct"
            state={{ value: fosforo, setValue: setFosforo }}
          />
          <Topping
            img={Imgs[11]}
            title="Gelo"
            price={11.0}
            unity="1pct"
            state={{ value: gelo, setValue: setGelado }}
          />
        </ScrollView>

        <ButtonComponent title="Avançar" next={next} />
      </View>
    </Content>
  );
}

export default Topings;
