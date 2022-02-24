const cowPersonQuantity = {
  men: 0.15,
  women: 0.085,
  kid: 0.055,
};

const pigPersonQuantity = {
  men: 0.25,
  women: 0.165,
  kid: 0.15,
};

const chickPersonQuantity = {
  men: 0.25,
  women: 0.165,
  kid: 0.15,
};

const prices = {
  cow: 45,
  pig: 18,
  chick: 16,
};

function TotalFood(type = "", peopleQuantity = { men: 0, women: 0, kid: 0 }) {
  let personQuantity = {
      men: 0,
      women: 0,
      kid: 0,
    },
    price = 0;

  switch (type) {
    case "cow":
      {
        personQuantity = { ...cowPersonQuantity };
        price = prices.cow;
      }
      break;

    case "pig":
      {
        personQuantity = { ...pigPersonQuantity };
        price = prices.pig;
      }
      break;
    case "chick":
      {
        personQuantity = { ...chickPersonQuantity };
        price = prices.chick;
      }
      break;
    default:
      return { value: 0, price: 0 };
  }

  let weight = 0;

  Object.keys(peopleQuantity).map(
    (person) => (weight += peopleQuantity[person] * personQuantity[person])
  );

  let total = price * weight;

  return {
    weight: weight.toFixed(2),
    price: total.toFixed(2),
  };
}

export default TotalFood;
