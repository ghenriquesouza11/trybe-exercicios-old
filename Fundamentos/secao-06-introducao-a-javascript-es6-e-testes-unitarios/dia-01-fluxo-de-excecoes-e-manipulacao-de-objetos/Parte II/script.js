const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(orderInfo) {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = `${orderInfo.order.delivery.deliveryPerson}`;
  const name = `${orderInfo.name}`;
  const phoneNumber = `${orderInfo.phoneNumber}`;
  const street = `${orderInfo.address.street}`;
  const number = `${orderInfo.address.number}`;
  const apartment = `${orderInfo.address.apartment}`;
  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, N°: ${number}, AP: ${apartment}`);
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const margueritaPrice = order.order.pizza.marguerita.price * order.order.pizza.marguerita.amount;
  const pepperoniPrice = order.order.pizza.pepperoni.price * order.order.pizza.pepperoni.amount;
  const drinks = order.order.drinks.coke.type;
  const drinksPrice = order.order.drinks.coke.price * order.order.drinks.coke.amount;
  const orderTotal = margueritaPrice + pepperoniPrice + drinksPrice;
  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${orderTotal}`);
};

orderModifier(order);
