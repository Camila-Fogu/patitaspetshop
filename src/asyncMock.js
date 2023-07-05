const products = [
  {
    id: "1",
    name: "Catchow",
    price: 11000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "2",
    name: "Excelent",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "3",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "4",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "5",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "6",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "7",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "8",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
  {
    id: "9",
    name: "Catchow",
    price: 1000,
    category: "alimento",
    img: "",
    stock: 5,
    description: "Descripcion de Catchow",
  },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getProductsById(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
}
