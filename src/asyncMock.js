import catchow from "./images/chatchow.png";
import excellent from "./images/excellent.png";
import proplan from "./images/proplan.png";
import hueso from "./images/hueso.png";
import pelota from "./images/pelota.jpg";
import rueda from "./images/rueda.webp";
import rascador from "./images/rascador.webp";
import chapa from "./images/chapas.png";
import cama from "./images/cama.webp";

const products = [
  {
    id: "1",
    name: "Catchow",
    price: 1200,
    category: "alimento",
    img: catchow,
    stock: 5,
    description: "Catchow para gatos",
  },
  {
    id: "2",
    name: "Excellent",
    price: 1500,
    category: "alimento",
    img: excellent,
    stock: 12,
    description: "Excellent para perros",
  },
  {
    id: "3",
    name: "Pro Plan",
    price: 1600,
    category: "alimento",
    img: proplan,
    stock: 8,
    description: "Pro Plan para perros",
  },
  {
    id: "4",
    name: "Hueso de goma",
    price: 1100,
    category: "juguete",
    img: hueso,
    stock: 5,
    description: "Dispensador de alimento",
  },
  {
    id: "5",
    name: "Rueda interactiva",
    price: 3400,
    category: "juguete",
    img: rueda,
    stock: 5,
    description: "Diversión para tu michi!",
  },
  {
    id: "6",
    name: "Pelota desafío",
    price: 3000,
    category: "juguete",
    img: pelota,
    stock: 5,
    description: "Comer nunca fue tan divertido!",
  },
  {
    id: "7",
    name: "Rascador torre",
    price: 12500,
    category: "accesorio",
    img: rascador,
    stock: 5,
    description: "La torre que todo felino necesita",
  },
  {
    id: "8",
    name: "Medallas para mascotas",
    price: 750,
    category: "accesorio",
    img: chapa,
    stock: 5,
    description:
      "Medallas personalizadas, envianos su nombre y tu número. Cuidalo!",
  },
  {
    id: "9",
    name: "Cuchitas",
    price: 5500,
    category: "accesorio",
    img: cama,
    stock: 5,
    description: "Camas calentitas con tela antidesgarro",
  },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getProductById(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
}

export function getProductsByCategory(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
}
