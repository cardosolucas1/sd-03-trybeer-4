const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkxVQ0FTIiwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTYwMzg0MzUwNCwiZXhwIjoxNjA0NDQ4MzA0fQ.q7tlJwTEozqi0hQmabqKUA_hmHe1hI7W4FyNQxdE29g';

export const loginUserMock = () => ({
  data: {
    role: 'client',
    token,
    email: "test@example.com",
    name: "Usuário"
  },
});

export const createUserMockReturn = () => ({
  message: 'User criado com sucesso',
  status: 201,
  token,
});

export const postUpdateUserMock = (name, email) => ({
  token,
  message: "Atualizado com sucesso",
  name,
  email,
});

export const getProductsMock = () => (
  [
    {
      "id" : 1,
      "name" : "Skol Lata 250ml",
      "price" : 2.20,
      "url_image" : "Skol Lata 350ml.jpg"
    },
    {
      "id" : 2,
      "name" : "Heineken 600ml",
      "price" : 7.50,
      "url_image" : "Heineken 600ml.jpg"
    },
    {
      "id" : 3,
      "name" : "Antarctica Pilsen 300ml",
      "price" : 2.49,
      "url_image" : "Antarctica Pilsen 300ml.jpg"
    },
    {
      "id" : 4,
      "name" : "Brahma 600ml",
      "price" : 7.50,
      "url_image" : "Brahma 600ml.jpg"
    },
    {
      "id" : 5,
      "name" : "Skol 269ml",
      "price" : 2.19,
      "url_image" : "Skol 269ml.jpg"
    },
    {
      "id" : 6,
      "name" : "Skol Beats Senses 313ml",
      "price" : 4.49,
      "url_image" : "Skol Beats Senses 313ml.jpg"
    },
    {
      "id" : 7,
      "name" : "Becks 330ml",
      "price" : 4.99,
      "url_image" : "Becks 330ml.jpg"
    },
    {
      "id" : 8,
      "name" : "Brahma Duplo Malte 350ml",
      "price" : 2.79,
      "url_image" : "Brahma Duplo Malte 350ml.jpg"
    },
    {
      "id" : 9,
      "name" : "Becks 600ml",
      "price" : 8.89,
      "url_image" : "Becks 600ml.jpg"
    },
    {
      "id" : 10,
      "name" : "Skol Beats Senses 269ml",
      "price" : 3.57,
      "url_image" : "Skol Beats Senses 269ml.jpg"
    },
    {
      "id" : 11,
      "name" : "Stella Artois 275ml",
      "price" : 3.49,
      "url_image" : "Stella Artois 275ml.jpg"
    }
  ]
);


export const getOrdersMock =  () => [
  {
    id: 1,
    saleDate: new Date(),
    totalPrice: 19.90,
  },
  {
    id: 2,
    saleDate: new Date(),
    totalPrice: 15.20,
  },
  {
    id: 3,
    saleDate: new Date(),
    totalPrice: 150.70,
  },
  {
    id: 4,
    saleDate: new Date(),
    totalPrice: 166.30,
  }
];

export const getOrderListMock = () => [
  {
    id: 1,
    totalPrice: 49.9,
    deliveryAddress: "Rua 15, Manaus",
    deliveryNumber: 10,
    status: 'delivered',
  },
  {
    id: 2,
    totalPrice: 196.9,
    deliveryAddress: "Rua 15, Manaus",
    deliveryNumber: 10,
    status: 'delivered',
  },
];


// export const getOrderData = async (id) => {
//   const { saleItems, saleInfo } = await axios({
//     baseURL: `${url}admin/orders/${id}`,
//     method: 'get',
//   })
//     .then((result) => result.data)
//     .catch(({ err }) => err);
//   return { saleItems, saleInfo };
// };

// export const markOrderAsDelivered = async (id) => {
//   await axios({
//     baseURL: `${url}admin/orders/${id}`,
//     method: 'post',
//   });
// };

export const postNewOrderMock = () => ({
  data: {
    message: 'Compra efetuada com sucesso'
  }
});




