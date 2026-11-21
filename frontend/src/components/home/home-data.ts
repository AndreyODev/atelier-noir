export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "vestido-assimetrico-noir",
    name: "Vestido Assimétrico Noir",
    price: "R$ 1.299,00",
    image: "/images/product-dress-noir.jpg",
    imageAlt: "Vestido longo vermelho em uma modelo, diante de uma parede clara",
  },
  {
    id: "blazer-alfaiataria-premium",
    name: "Blazer Alfaiataria Premium",
    price: "R$ 1.899,00",
    image: "/images/product-blazer-editorial.jpg",
    imageAlt: "Jaqueta bomber em tom castanho, suspensa em um cabide",
  },
  {
    id: "blusa-gola-alta-elegance",
    name: "Blusa Gola Alta Elegance",
    price: "R$ 799,00",
    image: "/images/product-blouse-editorial.jpg",
    imageAlt: "Modelo com tricô claro diante de uma paisagem rochosa",
  },
  {
    id: "vestido-midi-essencial",
    name: "Vestido Midi Essencial",
    price: "R$ 1.499,00",
    image: "/images/product-midi.jpg",
    imageAlt: "Modelo com look claro em ambiente urbano",
  },
];

export const collections = [
  {
    eyebrow: "Nova coleção",
    title: "Essence",
    image: "/images/collection-essence.jpg",
    imageAlt: "Vestido claro em uma paisagem à beira-mar",
  },
  {
    eyebrow: "Coleções",
    title: "Noir",
    image: "/images/collection-noir.jpg",
    imageAlt: "Seleção de peças em tons neutros e pretos",
  },
  {
    eyebrow: "Inspiração",
    title: "Feminina",
    image: "/images/collection-feminina.jpg",
    imageAlt: "Modelo com casaco azul diante de uma arquitetura clássica",
  },
];
