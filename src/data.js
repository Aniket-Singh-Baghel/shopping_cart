import jewellery from "./assets/jewellery.png";
import electronics from "./assets/electronics.png";
import grocery from "./assets/grocey.png";
import clothing from "./assets/fasion.png";
import tv from "./assets/appliances.png";
import deals from "./assets/deals.png";
import beauty from "./assets/beauty.png";
import kitchen from "./assets/kitchen.png";
import mobile from "./assets/mobile.png";
import banner01 from "./assets/banner-01.jpg";
import banner02 from "./assets/banner-02.jpg";
import banner03 from "./assets/banner-03.jpg";

export const MobilesAndTablets = [
  {
    title:
      "Apple iPhone 14 (Blue, 128 GB) 128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera A15 Bionic Chip, 6 Core Processor Processor",
    rating: "4.8",
    price: "58,999",
    img: "https://cellpoint.biz/uploads/media/2022/iphone_14.png",
  },
  {
    title:
      "Apple iPhone 14 Pro Max - Unboxed (Deep Purple, 256 GB) 17.02 cm (6.7 inch) Super Retina XDR Display 48MP + 12MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor ",
    rating: "4.6",
    price: "1,44,900",
    img: "https://www.designinfo.in/wp-content/uploads/2023/02/71yzJoE7WlL._SX679_-485x485-optimized.jpg",
  },
  {
    title:
      "Apple iPhone 14 Pro - Unboxed (Gold, 512 GB) 15.49 cm (6.1 inch) Super Retina XDR Display 48MP + 12MP + 12MP | 12MP Front Camera A16 Bionic Chip, 6 Core Processor Processor",
    rating: "4.7",
    price: "1,49,900",
    img: "https://images-cdn.ubuy.co.in/6554751e18026258542abdbc-restored-apple-iphone-14-pro-max.jpg",
  },
  {
    title:
      "Apple iPhone 13 (Starlight, 128 GB) 128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
    rating: "4.4",
    price: "51,999",
    img: "https://media.croma.com/image/upload/v1664009491/Croma%20Assets/Communication/Mobiles/Images/243460_0_n90peu.png",
  },
  {
    title:
      "Apple iPhone 15 Pro Max 17.02 cm (6.7 inch) Super Retina XDR Display 48MP + 12MP + 12MP | 12MP Front Camera A17 Pro Chip, 6 Core Processor Processor",
    rating: "4.5",
    price: "1,39,990",
    img: "https://www.cellpoint.biz/uploads/media/2023/iphone15_pro_max.png",
  },
  {
    title:
      "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)  (12 GB RAM)",
    rating: "4.5",
    price: "1,39,999",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70",
  },
  {
    title:
      "SAMSUNG Galaxy S24+ 5G (Cobalt Violet, 256 GB)  (12 GB RAM)",
    rating: "4.5",
    price: "79,999",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/g/r/-original-imahyvnu4jvpneha.jpeg?q=70",
  },
  {
    title:
      "SAMSUNG Galaxy S24 5G (Onyx Black, 512 GB)  (8 GB RAM)",
    rating: "4.5",
    price: "89,999",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/u/j/-original-imahyvnumgrdsxht.jpeg?q=70",
  },
];


export const Grocery = [
  {
    image: "https://example.com/apple.jpg",
    title: "Apple",
    price: 1.5,
  },
  {
    image: "https://example.com/banana.jpg",
    title: "Banana",
    price: 0.5,
  },
  {
    image: "https://example.com/carrot.jpg",
    title: "Carrot",
    price: 0.8,
  },
  {
    image: "https://example.com/milk.jpg",
    title: "Milk",
    price: 1.2,
  },
  {
    image: "https://example.com/bread.jpg",
    title: "Bread",
    price: 2.0,
  },
];

export const Fashion = [
  {
    category: "Men",
    styles: [
      {
        type: "Traditional",
        items: [
          {
            title: "Kurta",
            price: 25.0,
            image: "https://example.com/men-kurta.jpg",
          },
          {
            title: "Kurta",
            price: 25.0,
            image: "https://example.com/men-kurta.jpg",
          },
          {
            title: "Kurta",
            price: 25.0,
            image: "https://example.com/men-kurta.jpg",
          },
          {
            title: "Kurta",
            price: 25.0,
            image: "https://example.com/men-kurta.jpg",
          },
          {
            title: "Sherwani",
            price: 80.0,
            image: "https://example.com/men-sherwani.jpg",
          },
        ],
      },
      {
        type: "Western",
        items: [
          {
            title: "T-shirt",
            price: 15.0,
            image: "https://example.com/men-tshirt.jpg",
          },
          {
            title: "Jeans",
            price: 40.0,
            image: "https://example.com/men-jeans.jpg",
          },
        ],
      },
    ],
  },
  {
    category: "Women",
    styles: [
      {
        type: "Traditional",
        items: [
          {
            title: "Saree",
            price: 30.0,
            image: "https://example.com/women-saree.jpg",
          },
          {
            title: "Lehenga",
            price: 70.0,
            image: "https://example.com/women-lehenga.jpg",
          },
        ],
      },
      {
        type: "Western",
        items: [
          {
            title: "Dress",
            price: 50.0,
            image: "https://example.com/women-dress.jpg",
          },
          {
            title: "Skirt",
            price: 20.0,
            image: "https://example.com/women-skirt.jpg",
          },
        ],
      },
    ],
  },
];

export const items = [
  {
    image: deals,
    title: "Today's Deals",
  },
  {
    image: electronics,
    title: "Electronics",
  },
  {
    image: grocery,
    title: "Grocery",
  },
  {
    image: kitchen,
    title: "Home & Kitchen",
  },
  {
    image: tv,
    title: "TV & Appliances",
  },
  {
    image: mobile,
    title: "Mobile & tablets",
  },
  {
    image: beauty,
    title: "Beauty",
  },
  {
    image: jewellery,
    title: "Jewellery",
  },
  {
    image: clothing,
    title: "Fashion",
  },
];

export const AdBanner = [
  {
    destination: banner01,
    alt: "banner01",
  },
  {
    destination: banner02,
    alt: "banner02",
  },
  {
    destination: banner03,
    alt: "banner03",
  },
];
