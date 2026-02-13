// src/data/foodData.js
export const foodData = [
  // Tandoori Starters (Veg)
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Tandoori Starters",
    description:
      "Soft paneer pieces marinated in desi spices and roasted in tandoor – smoky and juicy",
    variants: [{ size: "8 pcs", price: 140 }],
    popular: true,
  },
  {
    id: 2,
    name: "Paneer Malai Tikka",
    category: "Tandoori Starters",
    description:
      "Creamy malai paneer tikka – super soft, mildly spiced and very rich",
    variants: [{ size: "8 pcs", price: 160 }],
    popular: true,
  },
  {
    id: 3,
    name: "Methi Malai Tikka",
    category: "Tandoori Starters",
    description:
      "Paneer tikka with fresh methi flavour in creamy marinade – different and tasty",
    variants: [{ size: "8 pcs", price: 150 }],
  },
  {
    id: 4,
    name: "Tandoori Soya Chaap",
    category: "Tandoori Starters",
    description:
      "Soya chaap marinated tandoori style – crispy outside, soft inside",
    variants: [{ size: "8 pcs", price: 100 }],
  },
  {
    id: 5,
    name: "Malai Soya Chaap",
    category: "Tandoori Starters",
    description: "Malai marinated soya chaap – very creamy and light on spices",
    variants: [{ size: "8 pcs", price: 120 }],
    popular: true,
  },
  {
    id: 6,
    name: "Soya Chaap Stuffed",
    category: "Tandoori Starters",
    description: "Soya chaap stuffed with paneer & spices, grilled till golden",
    variants: [{ size: "8 pcs", price: 140 }],
  },
  {
    id: 7,
    name: "Special Dahi Kebab",
    category: "Tandoori Starters",
    description:
      "Hung curd kebabs with nuts – crispy on top, melt in mouth inside",
    variants: [{ size: "Full", price: 120 }],
  },

  // Starters
  {
    id: 8,
    name: "Onion Bhajiya",
    category: "Starters",
    description:
      "Crispy onion fritters with desi spices – perfect tea time snack",
    variants: [{ size: "Full", price: 80 }],
    popular: true,
  },
  {
    id: 9,
    name: "Vegetable Pakora",
    category: "Starters",
    description: "Mixed veg pakora with gram flour batter – golden & crunchy",
    variants: [{ size: "Full", price: 100 }],
    popular: true,
  },
  {
    id: 9.1,
    name: "Aloo Tikki",
    category: "Starters",
    description: "Crispy potato patties with desi masala & mint chutney",
    variants: [
      { size: "Half (2 pcs)", price: 70 },
      { size: "Full (4 pcs)", price: 120 },
    ],
  },
  {
    id: 9.2,
    name: "Samosa",
    category: "Starters",
    description: "Crispy triangular pastry filled with spiced potatoes",
    variants: [
      { size: "2 pcs", price: 50 },
      { size: "4 pcs", price: 90 },
    ],
    popular: true,
  },
  {
    id: 9.3,
    name: "Spring Rolls",
    category: "Starters",
    description:
      "Crispy rolls stuffed with veggies & paneer – Indo-Chinese fusion",
    variants: [
      { size: "4 pcs", price: 100 },
      { size: "8 pcs", price: 180 },
    ],
  },
  {
    id: 9.4,
    name: "Corn Cheese Balls",
    category: "Starters",
    description: "Crispy corn & cheese balls – gooey melted cheese inside",
    variants: [
      { size: "6 pcs", price: 120 },
      { size: "12 pcs", price: 220 },
    ],
    popular: true,
  },

  // Paneer Main Course
  {
    id: 10,
    name: "Shahi Paneer",
    category: "Paneer Main Course",
    description:
      "Paneer cubes in rich creamy cashew-tomato gravy – royal taste",
    variants: [
      { size: "Half", price: 130 },
      { size: "Full", price: 220 },
    ],
    popular: true,
  },
  {
    id: 11,
    name: "Kadai Paneer",
    category: "Paneer Main Course",
    description:
      "Paneer with capsicum & onion in spicy kadai masala – full desi flavour",
    variants: [
      { size: "Half", price: 130 },
      { size: "Full", price: 200 },
    ],
    popular: true,
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    category: "Paneer Main Course",
    description: "Paneer in smooth buttery tomato gravy – everyone’s favourite",
    variants: [
      { size: "Half", price: 130 },
      { size: "Full", price: 200 },
    ],
    popular: true,
  },
  {
    id: 13,
    name: "Paneer Do Pyaza",
    category: "Paneer Main Course",
    description: "Lots of onion with paneer in tasty semi-dry gravy",
    variants: [
      { size: "Half", price: 130 },
      { size: "Full", price: 200 },
    ],
  },
  {
    id: 14,
    name: "Handi Paneer",
    category: "Paneer Main Course",
    description:
      "Paneer cooked in handi with whole garam masala – homely & aromatic",
    variants: [
      { size: "Half", price: 150 },
      { size: "Full", price: 220 },
    ],
  },
  {
    id: 15,
    name: "Paneer Lababdar",
    category: "Paneer Main Course",
    description: "Paneer in creamy tomato gravy with little cheese – very rich",
    variants: [
      { size: "Half", price: 130 },
      { size: "Full", price: 200 },
    ],
  },

  // Main Course Veg
  {
    id: 20,
    name: "Dal Fry",
    category: "Main Course Veg",
    description: "Simple yellow dal with desi tadka of garlic & jeera",
    variants: [
      { size: "Half", price: 50 },
      { size: "Full", price: 90 },
    ],
  },
  {
    id: 21,
    name: "Dal Tadka",
    category: "Main Course Veg",
    description: "Yellow dal with smoky tadka on top – goes great with roti",
    variants: [
      { size: "Half", price: 50 },
      { size: "Full", price: 100 },
    ],
    popular: true,
  },
  {
    id: 22,
    name: "Dal Makhani",
    category: "Main Course Veg",
    description: "Black dal slow cooked with butter & cream – restaurant style",
    variants: [
      { size: "Half", price: 90 },
      { size: "Full", price: 160 },
    ],
    popular: true,
  },
  {
    id: 23,
    name: "Mix Veg Dry",
    category: "Main Course Veg",
    description: "Fresh sabziyan stir-fried with Indian masala – light & tasty",
    variants: [
      { size: "Half", price: 80 },
      { size: "Full", price: 150 },
    ],
  },
  {
    id: 24,
    name: "Aloo Jeera",
    category: "Main Course Veg",
    description: "Aloo with jeera tadka – simple, quick and homely",
    variants: [
      { size: "Half", price: 50 },
      { size: "Full", price: 90 },
    ],
  },

  // Thali
  {
    id: 30,
    name: "Normal Thali",
    category: "Thali",
    description: "Basic thali – dal, sabzi, 4 roti, chawal, salad",
    variants: [{ size: "Full", price: 100 }],
  },
  {
    id: 31,
    name: "Deluxe Thali",
    category: "Thali",
    description:
      "Paneer sabzi + dal makhani + mix veg + roti/naan + rice + salad",
    variants: [{ size: "Full", price: 150 }],
    popular: true,
  },
  {
    id: 32,
    name: "Super Deluxe Thali",
    category: "Thali",
    description:
      "Full loaded – paneer, dal makhani, naan, rice, papad, sweet & more",
    variants: [{ size: "Full", price: 200 }],
    popular: true,
  },

  // Chinese Veg
  {
    id: 40,
    name: "Chilli Paneer Dry",
    category: "Chinese Veg",
    description: "Crispy paneer in spicy chilli sauce with capsicum & onion",
    variants: [
      { size: "Half", price: 70 },
      { size: "Full", price: 140 },
    ],
    popular: true,
  },
  {
    id: 41,
    name: "Chilli Paneer Gravy",
    category: "Chinese Veg",
    description: "Paneer in thick chilli garlic gravy – perfect with noodles",
    variants: [
      { size: "Half", price: 80 },
      { size: "Full", price: 150 },
    ],
  },
  {
    id: 42,
    name: "Veg Manchurian Dry",
    category: "Chinese Veg",
    description: "Crispy veg balls in spicy garlic sauce – dry version",
    variants: [
      { size: "Half", price: 50 },
      { size: "Full", price: 100 },
    ],
    popular: true,
  },
  {
    id: 43,
    name: "Veg Manchurian Gravy",
    category: "Chinese Veg",
    description: "Veg manchurian balls in hot & sour gravy",
    variants: [
      { size: "Half", price: 60 },
      { size: "Full", price: 120 },
    ],
  },
  {
    id: 44,
    name: "Veg Fried Rice",
    category: "Chinese Veg",
    description: "Veg fried rice with soy sauce & fresh veggies",
    variants: [{ size: "Full", price: 120 }],
    popular: true,
  },
  {
    id: 45,
    name: "Chilli Garlic Noodles",
    category: "Chinese Veg",
    description: "Hakka noodles tossed with lots of chilli & garlic",
    variants: [{ size: "Full", price: 150 }],
  },

  // Chinese Non-Veg
  {
    id: 50,
    name: "Chilli Chicken Dry",
    category: "Chinese Non-Veg",
    description:
      "Crispy chicken in spicy dry chilli sauce with onion & capsicum",
    variants: [
      { size: "4 pcs", price: 180 },
      { size: "8 pcs", price: 340 },
    ],
    popular: true,
  },
  {
    id: 51,
    name: "Chilli Chicken Gravy",
    category: "Chinese Non-Veg",
    description:
      "Chicken pieces in thick chilli gravy – goes best with fried rice",
    variants: [
      { size: "4 pcs", price: 200 },
      { size: "8 pcs", price: 380 },
    ],
    popular: true,
  },
  {
    id: 52,
    name: "Garlic Chilli Chicken",
    category: "Chinese Non-Veg",
    description: "Chicken stir-fried with extra garlic & green chilli kick",
    variants: [
      { size: "4 pcs", price: 180 },
      { size: "8 pcs", price: 340 },
    ],
  },

  // Rice & Biryani
  {
    id: 60,
    name: "Plain Rice",
    category: "Rice & Biryani",
    description: "Simple steamed rice",
    variants: [{ size: "Full", price: 30 }],
  },
  {
    id: 61,
    name: "Jeera Rice",
    category: "Rice & Biryani",
    description: "Jeera tadka wala chawal – light & fragrant",
    variants: [{ size: "Full", price: 40 }],
  },
  {
    id: 62,
    name: "Veg Pulao",
    category: "Rice & Biryani",
    description: "Veg pulao with mild spices & fresh vegetables",
    variants: [{ size: "Full", price: 50 }],
  },
  {
    id: 63,
    name: "Veg Biryani",
    category: "Rice & Biryani",
    description: "Layered veg biryani with raita on side",
    variants: [{ size: "Full", price: 70 }],
    popular: true,
  },

  // South Indian
  {
    id: 70,
    name: "Idli Sambhar",
    category: "South Indian",
    description: "Soft idlis with hot sambhar & chutney",
    variants: [{ size: "Full", price: 50 }],
  },
  {
    id: 71,
    name: "Masala Dosa",
    category: "South Indian",
    description: "Crispy dosa stuffed with aloo masala + sambhar & chutney",
    variants: [{ size: "Full", price: 70 }],
    popular: true,
  },
  {
    id: 72,
    name: "Paneer Masala Dosa",
    category: "South Indian",
    description: "Dosa with spicy paneer filling – desi twist",
    variants: [{ size: "Full", price: 100 }],
  },
  {
    id: 73,
    name: "Desi Tadka Special Dosa",
    category: "South Indian",
    description: "Our special loaded dosa with paneer, veggies & extra tadka",
    variants: [{ size: "Full", price: 250 }],
    popular: true,
  },

  // Breads
  {
    id: 80,
    name: "Tawa Roti",
    category: "Breads",
    description: "Fresh soft tawa roti",
    variants: [{ size: "Single", price: 5 }],
  },
  {
    id: 81,
    name: "Butter Naan",
    category: "Breads",
    description: "Hot butter naan straight from tandoor",
    variants: [{ size: "Single", price: 20 }],
    popular: true,
  },
  {
    id: 82,
    name: "Garlic Naan",
    category: "Breads",
    description: "Garlic butter naan – very aromatic",
    variants: [{ size: "Single", price: 25 }],
    popular: true,
  },
  {
    id: 83,
    name: "Lachha Paratha",
    category: "Breads",
    description: "Layered lachha paratha with ghee",
    variants: [{ size: "Single", price: 25 }],
  },

  // Non-veg Indian mains (expand as needed)
  {
    id: 90,
    name: "Chicken Tikka Masala",
    category: "Non-Veg Main Course",
    description: "Tandoori chicken tikka in creamy masala gravy",
    variants: [
      { size: "Half", price: 180 },
      { size: "Full", price: 320 },
    ],
  },
  {
    id: 91,
    name: "Butter Chicken",
    category: "Non-Veg Main Course",
    description: "Creamy butter chicken – our most loved dish",
    variants: [
      { size: "Half", price: 190 },
      { size: "Full", price: 350 },
    ],
    popular: true,
  },
  {
    id: 92,
    name: "Desi Mutton Masala",
    category: "Non-Veg Main Course",
    description: "Mutton cooked in thick onion-tomato desi masala",
    variants: [
      { size: "Half", price: 290 },
      { size: "Full", price: 580 },
    ],
  },
];

export default foodData;
