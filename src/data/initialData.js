export const INITIAL_MENU = [
  // Coffee
  {
    id: 'm1',
    name: 'Gold Leaf Hazelnut Cappuccino',
    category: 'Coffee',
    price: 180,
    rating: 4.9,
    description: 'Double espresso shot infused with roasted hazelnut syrup, micro-foamed milk & edible 24k gold leaf dusting.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },
  {
    id: 'm2',
    name: 'Belgian Caramel Macchiato',
    category: 'Coffee',
    price: 190,
    rating: 4.8,
    description: 'Freshly pulled espresso layered over steamed vanilla milk, topped with house-made salted caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },
  {
    id: 'm3',
    name: 'Iced Spanish Latte',
    category: 'Coffee',
    price: 170,
    rating: 4.7,
    description: 'Chilled espresso poured over sweetened condensed milk and ice spheres with cinnamon powder.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&auto=format&fit=crop&q=80',
    popular: false,
    dietary: 'Vegetarian'
  },

  // Breakfast
  {
    id: 'm4',
    name: 'Truffle Avocado Sourdough Toast',
    category: 'Breakfast',
    price: 240,
    rating: 4.9,
    description: 'Artisanal sourdough toast topped with smashed Haas avocado, poached organic eggs, microgreens & white truffle oil.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },
  {
    id: 'm5',
    name: 'Fluffy Berry Brioche French Toast',
    category: "Breakfast",
    price: 220,
    rating: 4.8,
    description: 'Thick caramelized brioche slice served with fresh raspberry compote, whipped mascarpone & maple syrup.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80',
    popular: false,
    dietary: 'Vegetarian'
  },

  // Pizza
  {
    id: 'm6',
    name: 'Truffle Mushroom Wood-Fired Pizza',
    category: 'Pizza',
    price: 340,
    rating: 4.9,
    description: 'Hand-tossed sourdough pizza base topped with wild porcini mushrooms, fontina cheese, fresh thyme & truffle oil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },
  {
    id: 'm7',
    name: 'Neapolitan Burrata Margherita',
    category: 'Pizza',
    price: 320,
    rating: 4.8,
    description: 'San Marzano tomato marinara base, fresh basil leaves, extra virgin olive oil, and a creamy whole burrata cheese ball.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },

  // Burger
  {
    id: 'm8',
    name: 'Smoked Halloumi & Brioche Burger',
    category: 'Burger',
    price: 260,
    rating: 4.7,
    description: 'Grilled halloumi cheese slab, caramelized balsamic onions, avocado relish & truffle mayo in a toasted butter brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },

  // Pasta
  {
    id: 'm9',
    name: 'Pistachio Cream Rigatoni',
    category: 'Pasta',
    price: 290,
    rating: 4.9,
    description: 'Bronze-die rigatoni pasta tossed in velvety Sicilian pistachio cream sauce, sun-dried tomatoes & grated Parmigiano.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6288028?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },
  {
    id: 'm10',
    name: 'Signature Pink Sauce Penne',
    category: 'Pasta',
    price: 270,
    rating: 4.8,
    description: 'Penne pasta tossed in a harmonious blend of spicy arrabbiata marinara & rich parmesan cream with herbs.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },

  // Desserts
  {
    id: 'm11',
    name: 'Death By Chocolate Mousse Cake',
    category: 'Desserts',
    price: 210,
    rating: 5.0,
    description: '70% Valrhona dark chocolate ganache cake slice topped with edible gold leaf & warm cocoa drizzle.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },
  {
    id: 'm12',
    name: 'Classic Venetian Tiramisu Jar',
    category: 'Desserts',
    price: 190,
    rating: 4.9,
    description: 'House-baked ladyfinger biscuits soaked in reserve espresso, layered with whipped mascarpone cream & dark cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80',
    popular: true,
    dietary: 'Vegetarian'
  },

  // Beverages
  {
    id: 'm13',
    name: 'Wild Berry Passionfruit Cooler',
    category: 'Beverages',
    price: 160,
    rating: 4.7,
    description: 'Sparkling mineral water infused with fresh passionfruit pulp, smashed raspberries & slapped mint leaves.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    popular: false,
    dietary: 'Vegetarian'
  }
];

export const INITIAL_EVENTS = [
  {
    id: 'e1',
    title: 'Acoustic Sunset Sessions',
    category: 'Live Music',
    date: 'Every Friday',
    time: '07:30 PM Onwards',
    description: 'Unwind with smooth acoustic guitar performances by local Nashik artists under warm warm café ambient lights.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    badge: 'Popular'
  },
  {
    id: 'e2',
    title: 'Open Mic & Poetry Night',
    category: 'Open Mic',
    date: 'Wednesday 24th',
    time: '06:30 PM Onwards',
    description: 'A platform for writers, poets, and storytellers to express their passion over hot artisanal coffees.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80',
    badge: 'Upcoming'
  },
  {
    id: 'e3',
    title: 'Barista Latte Art Workshop',
    category: 'Workshop',
    date: 'Sunday Morning',
    time: '10:00 AM - 12:00 PM',
    description: 'Learn the secrets of milk texturing and latte art pouring from master coffee roasters.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    badge: 'Limited Seats'
  }
];

export const INITIAL_GALLERY = [
  {
    id: 'g1',
    title: 'Warm Sunlit Interior',
    category: 'Cafe Vibe',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80',
    tall: true
  },
  {
    id: 'g2',
    title: 'Artisanal Latte Art',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80',
    tall: false
  },
  {
    id: 'g3',
    title: 'Death by Chocolate Cake',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    tall: false
  },
  {
    id: 'g4',
    title: 'Wood-Fired Pizza Feast',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tall: true
  },
  {
    id: 'g5',
    title: 'Cozy Outdoor Patio Deck',
    category: 'Cafe Vibe',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
    tall: false
  },
  {
    id: 'g6',
    title: 'Berry Brioche Toast',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80',
    tall: false
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'w1',
    title: 'Fresh Organic Ingredients',
    description: 'We source daily fresh organic produce and artisanal cheeses directly from local sustainable farms.',
    icon: 'Leaf'
  },
  {
    id: 'w2',
    title: 'Master Pastry Chefs',
    description: 'Our culinary team is trained in classical European pastry crafting and stone-baked Italian techniques.',
    icon: 'Award'
  },
  {
    id: 'w3',
    title: 'Fast & Attentive Service',
    description: 'Experience seamless hospitality with average table service under 12 minutes.',
    icon: 'Clock'
  },
  {
    id: 'w4',
    title: 'Reserve Grade Coffee Beans',
    description: '100% Arabica beans micro-roasted weekly to highlight delicate chocolate and fruity undertones.',
    icon: 'Coffee'
  },
  {
    id: 'w5',
    title: 'Live Acoustic Nights',
    description: 'Relax to soothing acoustic tunes and poetry sessions every weekend evening.',
    icon: 'Music'
  },
  {
    id: 'w6',
    title: 'High-Speed Fiber WiFi',
    description: 'Dedicated high-speed connectivity for digital nomads, remote meetings, and casual browsing.',
    icon: 'Wifi'
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: 't1',
    name: 'Ananya Deshmukh',
    role: 'Food & Lifestyle Critic',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'Luscious Layers is hands-down the most gorgeous café in Nashik. The Gold Leaf Cappuccino paired with the Death By Chocolate cake is an absolute culinary work of art!'
  },
  {
    id: 't2',
    name: 'Rohan Mehta',
    role: 'Architect & Coffee Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'The interior aesthetics and natural lighting feel straight out of a European design journal. The wood-fired Truffle Mushroom pizza is to die for.'
  },
  {
    id: 't3',
    name: 'Priya Shinde',
    role: 'Local Resident',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'We booked a birthday table here, and the staff made it unforgettable! Seamless online reservation and warm hospitality.'
  }
];

export const INITIAL_SETTINGS = {
  cafeName: 'Luscious Layers',
  tagline: 'Good Food • Good Coffee • Good Vibes',
  address: 'Shop No. 5, Ground Floor, Rushiraj Annex Apt, Opp Kathiyawad, D\'Souza Colony, College Road, Nashik, MH 422005',
  phone: '+91 77220 82092',
  email: 'hello@lusciouslayers.com',
  openingHours: 'Everyday: 09:30 AM – 11:00 PM',
  heroHeadline: 'Life Begins After Coffee',
  heroSubheadline: 'Crafted with Passion, Served with Love',
  heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&auto=format&fit=crop&q=80',
  instagram: 'https://www.instagram.com/lusciouslayersnsk/?hl=en',
  facebook: 'https://facebook.com/lusciouslayers',
  googleMaps: 'https://maps.google.com/?q=Luscious+Layers+College+Road+Nashik'
};
