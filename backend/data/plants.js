const plants = [
  // ── Vegetables ──────────────────────────────────────────────────────────────
  {
    name: "Tomato", emoji: "🍅",
    temperature: { min: 18, max: 29 }, humidity: { min: 60, max: 80 }, light: { min: 6000, max: 10000 },
    description: "Thrives in warm temperatures with bright direct light and moderately high humidity.",
  },
  {
    name: "Cucumber", emoji: "🥒",
    temperature: { min: 20, max: 30 }, humidity: { min: 70, max: 90 }, light: { min: 6000, max: 10000 },
    description: "Loves warm, humid conditions and full sun. Great for summer gardens.",
  },
  {
    name: "Bell Pepper", emoji: "🫑",
    temperature: { min: 20, max: 32 }, humidity: { min: 50, max: 70 }, light: { min: 6000, max: 10000 },
    description: "Needs warm soil, full sun, and moderate humidity to produce sweet fruits.",
  },
  {
    name: "Lettuce", emoji: "🥬",
    temperature: { min: 7, max: 20 }, humidity: { min: 50, max: 70 }, light: { min: 2000, max: 5000 },
    description: "Cool-season crop that prefers mild temperatures and partial shade.",
  },
  {
    name: "Spinach", emoji: "🥬",
    temperature: { min: 5, max: 18 }, humidity: { min: 50, max: 70 }, light: { min: 2000, max: 5000 },
    description: "Cool-weather leafy green that bolts in heat. Ideal for spring and fall.",
  },
  {
    name: "Carrot", emoji: "🥕",
    temperature: { min: 10, max: 24 }, humidity: { min: 40, max: 65 }, light: { min: 4000, max: 8000 },
    description: "Root vegetable that prefers cool temperatures and well-drained soil.",
  },
  {
    name: "Potato", emoji: "🥔",
    temperature: { min: 10, max: 22 }, humidity: { min: 60, max: 80 }, light: { min: 4000, max: 8000 },
    description: "Cool-season crop that needs consistent moisture and indirect sunlight.",
  },
  {
    name: "Pumpkin", emoji: "🎃",
    temperature: { min: 18, max: 30 }, humidity: { min: 50, max: 70 }, light: { min: 7000, max: 10000 },
    description: "Warm-season vine that needs full sun and plenty of space.",
  },
  {
    name: "Broccoli", emoji: "🥦",
    temperature: { min: 7, max: 20 }, humidity: { min: 45, max: 65 }, light: { min: 4000, max: 8000 },
    description: "Cool-season brassica that prefers mild temperatures and moderate light.",
  },
  {
    name: "Garlic", emoji: "🧄",
    temperature: { min: 5, max: 24 }, humidity: { min: 30, max: 55 }, light: { min: 5000, max: 9000 },
    description: "Hardy bulb crop that tolerates cold and needs well-drained, dry soil.",
  },
  {
    name: "Onion", emoji: "🧅",
    temperature: { min: 10, max: 25 }, humidity: { min: 35, max: 60 }, light: { min: 5000, max: 9000 },
    description: "Bulb vegetable that prefers cool conditions and full sun.",
  },
  {
    name: "Zucchini", emoji: "🥒",
    temperature: { min: 18, max: 30 }, humidity: { min: 50, max: 70 }, light: { min: 6000, max: 10000 },
    description: "Prolific summer squash that loves warmth, sun, and moderate moisture.",
  },
  {
    name: "Eggplant", emoji: "🍆",
    temperature: { min: 22, max: 35 }, humidity: { min: 50, max: 70 }, light: { min: 6000, max: 10000 },
    description: "Heat-loving vegetable that needs long warm summers and full sun.",
  },
  {
    name: "Corn", emoji: "🌽",
    temperature: { min: 18, max: 32 }, humidity: { min: 50, max: 75 }, light: { min: 7000, max: 10000 },
    description: "Tall warm-season crop that needs full sun and consistent moisture.",
  },
  {
    name: "Sweet Potato", emoji: "🍠",
    temperature: { min: 21, max: 35 }, humidity: { min: 55, max: 75 }, light: { min: 6000, max: 10000 },
    description: "Tropical vine that thrives in heat, humidity, and bright sunlight.",
  },
  {
    name: "Cabbage", emoji: "🥬",
    temperature: { min: 5, max: 18 }, humidity: { min: 50, max: 70 }, light: { min: 4000, max: 8000 },
    description: "Hardy cool-season crop that tolerates frost and prefers moist soil.",
  },
  {
    name: "Cauliflower", emoji: "🥦",
    temperature: { min: 7, max: 20 }, humidity: { min: 50, max: 70 }, light: { min: 4000, max: 8000 },
    description: "Cool-season brassica that needs consistent moisture and mild temperatures.",
  },
  {
    name: "Pea", emoji: "🫛",
    temperature: { min: 7, max: 20 }, humidity: { min: 50, max: 70 }, light: { min: 4000, max: 8000 },
    description: "Cool-season legume that fixes nitrogen and prefers mild, moist conditions.",
  },
  {
    name: "Green Bean", emoji: "🫘",
    temperature: { min: 18, max: 30 }, humidity: { min: 50, max: 70 }, light: { min: 5000, max: 9000 },
    description: "Warm-season legume that needs full sun and regular watering.",
  },
  {
    name: "Radish", emoji: "🌱",
    temperature: { min: 5, max: 18 }, humidity: { min: 40, max: 65 }, light: { min: 3000, max: 7000 },
    description: "Fast-growing cool-season root crop, ready in as little as 3 weeks.",
  },

  // ── Herbs ───────────────────────────────────────────────────────────────────
  {
    name: "Basil", emoji: "🌿",
    temperature: { min: 20, max: 30 }, humidity: { min: 50, max: 70 }, light: { min: 5000, max: 8000 },
    description: "Culinary herb that loves warmth, bright light, and moderate humidity.",
  },
  {
    name: "Mint", emoji: "🌿",
    temperature: { min: 13, max: 24 }, humidity: { min: 60, max: 80 }, light: { min: 3000, max: 6000 },
    description: "Fast-growing herb that prefers moist soil and partial shade.",
  },
  {
    name: "Rosemary", emoji: "🌿",
    temperature: { min: 10, max: 28 }, humidity: { min: 20, max: 45 }, light: { min: 6000, max: 10000 },
    description: "Mediterranean herb that loves full sun and dry, well-drained conditions.",
  },
  {
    name: "Thyme", emoji: "🌿",
    temperature: { min: 10, max: 26 }, humidity: { min: 20, max: 45 }, light: { min: 6000, max: 10000 },
    description: "Drought-tolerant herb that thrives in dry, sunny conditions.",
  },
  {
    name: "Cilantro", emoji: "🌿",
    temperature: { min: 10, max: 22 }, humidity: { min: 40, max: 65 }, light: { min: 3000, max: 7000 },
    description: "Cool-season herb that bolts in heat. Best grown in spring or fall.",
  },
  {
    name: "Parsley", emoji: "🌿",
    temperature: { min: 10, max: 24 }, humidity: { min: 50, max: 70 }, light: { min: 3000, max: 7000 },
    description: "Biennial herb that prefers cool, moist conditions and partial sun.",
  },
  {
    name: "Dill", emoji: "🌿",
    temperature: { min: 15, max: 26 }, humidity: { min: 40, max: 65 }, light: { min: 5000, max: 9000 },
    description: "Feathery herb that needs full sun and well-drained soil.",
  },
  {
    name: "Chives", emoji: "🌿",
    temperature: { min: 10, max: 24 }, humidity: { min: 45, max: 70 }, light: { min: 4000, max: 8000 },
    description: "Hardy herb that tolerates cold and grows well in moderate light.",
  },
  {
    name: "Oregano", emoji: "🌿",
    temperature: { min: 12, max: 28 }, humidity: { min: 20, max: 45 }, light: { min: 6000, max: 10000 },
    description: "Mediterranean herb that thrives in hot, dry conditions with full sun.",
  },
  {
    name: "Sage", emoji: "🌿",
    temperature: { min: 10, max: 28 }, humidity: { min: 20, max: 45 }, light: { min: 6000, max: 10000 },
    description: "Woody herb that loves dry conditions and full sun. Highly drought-tolerant.",
  },
  {
    name: "Lemongrass", emoji: "🌾",
    temperature: { min: 20, max: 35 }, humidity: { min: 60, max: 85 }, light: { min: 6000, max: 10000 },
    description: "Tropical grass that thrives in heat and high humidity with full sun.",
  },

  // ── Flowers ─────────────────────────────────────────────────────────────────
  {
    name: "Lavender", emoji: "💜",
    temperature: { min: 15, max: 26 }, humidity: { min: 25, max: 50 }, light: { min: 6000, max: 10000 },
    description: "Loves sunny, dry conditions with good air circulation.",
  },
  {
    name: "Sunflower", emoji: "🌻",
    temperature: { min: 20, max: 35 }, humidity: { min: 35, max: 60 }, light: { min: 8000, max: 10000 },
    description: "Needs maximum sunlight and warm temperatures.",
  },
  {
    name: "Rose", emoji: "🌹",
    temperature: { min: 15, max: 28 }, humidity: { min: 40, max: 65 }, light: { min: 6000, max: 9000 },
    description: "Classic flowering shrub that needs full sun and moderate humidity.",
  },
  {
    name: "Marigold", emoji: "🌼",
    temperature: { min: 18, max: 32 }, humidity: { min: 35, max: 60 }, light: { min: 6000, max: 10000 },
    description: "Hardy annual that thrives in warm, sunny, moderately dry conditions.",
  },
  {
    name: "Orchid", emoji: "🌸",
    temperature: { min: 16, max: 24 }, humidity: { min: 60, max: 80 }, light: { min: 2000, max: 5000 },
    description: "Needs bright indirect light, warm temperatures, and high humidity.",
  },
  {
    name: "Peace Lily", emoji: "🌼",
    temperature: { min: 18, max: 27 }, humidity: { min: 50, max: 75 }, light: { min: 500, max: 2500 },
    description: "Tolerates low light and moderate humidity — great indoor plant.",
  },
  {
    name: "Jasmine", emoji: "🌸",
    temperature: { min: 16, max: 28 }, humidity: { min: 50, max: 70 }, light: { min: 5000, max: 9000 },
    description: "Fragrant climber that loves bright light and warm, humid conditions.",
  },
  {
    name: "Hibiscus", emoji: "🌺",
    temperature: { min: 20, max: 35 }, humidity: { min: 55, max: 80 }, light: { min: 6000, max: 10000 },
    description: "Tropical flower that thrives in heat, humidity, and full sun.",
  },
  {
    name: "Chrysanthemum", emoji: "🌸",
    temperature: { min: 10, max: 22 }, humidity: { min: 40, max: 65 }, light: { min: 5000, max: 9000 },
    description: "Cool-season flower that blooms in autumn and prefers mild temperatures.",
  },
  {
    name: "Tulip", emoji: "🌷",
    temperature: { min: 5, max: 18 }, humidity: { min: 40, max: 65 }, light: { min: 5000, max: 9000 },
    description: "Spring bulb that needs a cold dormancy period and mild spring conditions.",
  },
  {
    name: "Daisy", emoji: "🌼",
    temperature: { min: 10, max: 24 }, humidity: { min: 40, max: 65 }, light: { min: 5000, max: 9000 },
    description: "Cheerful flower that prefers cool to mild temperatures and full sun.",
  },
  {
    name: "Geranium", emoji: "🌸",
    temperature: { min: 13, max: 24 }, humidity: { min: 35, max: 60 }, light: { min: 5000, max: 9000 },
    description: "Popular bedding plant that loves full sun and moderate watering.",
  },
  {
    name: "Petunia", emoji: "🌺",
    temperature: { min: 15, max: 28 }, humidity: { min: 40, max: 65 }, light: { min: 6000, max: 10000 },
    description: "Colorful annual that thrives in warm, sunny conditions.",
  },
  {
    name: "Dahlia", emoji: "🌸",
    temperature: { min: 16, max: 28 }, humidity: { min: 50, max: 70 }, light: { min: 6000, max: 9000 },
    description: "Showy flower that needs full sun, warmth, and regular moisture.",
  },

  // ── Tropical & Houseplants ───────────────────────────────────────────────────
  {
    name: "Monstera", emoji: "🍃",
    temperature: { min: 18, max: 30 }, humidity: { min: 60, max: 80 }, light: { min: 1000, max: 5000 },
    description: "Adaptable tropical plant that thrives in indirect light and humid rooms.",
  },
  {
    name: "Pothos", emoji: "🌿",
    temperature: { min: 15, max: 30 }, humidity: { min: 40, max: 70 }, light: { min: 500, max: 4000 },
    description: "Nearly indestructible trailing plant that tolerates low light and neglect.",
  },
  {
    name: "Snake Plant", emoji: "🌵",
    temperature: { min: 15, max: 35 }, humidity: { min: 20, max: 50 }, light: { min: 500, max: 6000 },
    description: "Extremely tolerant plant that survives low light, drought, and neglect.",
  },
  {
    name: "Spider Plant", emoji: "🌿",
    temperature: { min: 15, max: 28 }, humidity: { min: 40, max: 70 }, light: { min: 2000, max: 6000 },
    description: "Resilient houseplant that thrives in indirect light and moderate humidity.",
  },
  {
    name: "Rubber Plant", emoji: "🌿",
    temperature: { min: 18, max: 30 }, humidity: { min: 40, max: 65 }, light: { min: 2000, max: 6000 },
    description: "Bold tropical plant that prefers bright indirect light and moderate humidity.",
  },
  {
    name: "ZZ Plant", emoji: "🌿",
    temperature: { min: 18, max: 32 }, humidity: { min: 25, max: 55 }, light: { min: 500, max: 4000 },
    description: "Drought-tolerant houseplant that thrives in low light and low humidity.",
  },
  {
    name: "Bird of Paradise", emoji: "🌺",
    temperature: { min: 18, max: 30 }, humidity: { min: 50, max: 75 }, light: { min: 5000, max: 10000 },
    description: "Dramatic tropical plant that needs bright light and high humidity.",
  },
  {
    name: "Anthurium", emoji: "🌸",
    temperature: { min: 18, max: 28 }, humidity: { min: 65, max: 85 }, light: { min: 1000, max: 4000 },
    description: "Tropical plant with glossy flowers that loves high humidity and indirect light.",
  },
  {
    name: "Bromeliad", emoji: "🌺",
    temperature: { min: 18, max: 30 }, humidity: { min: 55, max: 80 }, light: { min: 3000, max: 7000 },
    description: "Tropical epiphyte that thrives in warm, humid environments.",
  },
  {
    name: "Philodendron", emoji: "🍃",
    temperature: { min: 18, max: 30 }, humidity: { min: 55, max: 80 }, light: { min: 1000, max: 5000 },
    description: "Fast-growing tropical vine that loves indirect light and humid air.",
  },
  {
    name: "Dracaena", emoji: "🌿",
    temperature: { min: 15, max: 28 }, humidity: { min: 35, max: 60 }, light: { min: 1000, max: 5000 },
    description: "Versatile houseplant that tolerates low light and irregular watering.",
  },

  // ── Succulents & Cacti ───────────────────────────────────────────────────────
  {
    name: "Cactus", emoji: "🌵",
    temperature: { min: 18, max: 38 }, humidity: { min: 10, max: 35 }, light: { min: 7000, max: 10000 },
    description: "Loves intense light, heat, and very dry conditions. Extremely drought tolerant.",
  },
  {
    name: "Aloe Vera", emoji: "🌱",
    temperature: { min: 15, max: 32 }, humidity: { min: 10, max: 40 }, light: { min: 4000, max: 9000 },
    description: "Drought-resistant succulent that loves bright light and dry, warm conditions.",
  },
  {
    name: "Echeveria", emoji: "🌸",
    temperature: { min: 10, max: 30 }, humidity: { min: 10, max: 35 }, light: { min: 6000, max: 10000 },
    description: "Rosette succulent that needs bright light and infrequent watering.",
  },
  {
    name: "Jade Plant", emoji: "🌿",
    temperature: { min: 15, max: 30 }, humidity: { min: 15, max: 40 }, light: { min: 5000, max: 9000 },
    description: "Long-lived succulent tree that prefers dry conditions and bright light.",
  },
  {
    name: "Sedum", emoji: "🌱",
    temperature: { min: 5, max: 30 }, humidity: { min: 10, max: 40 }, light: { min: 6000, max: 10000 },
    description: "Hardy succulent ground cover that tolerates drought, heat, and cold.",
  },
  {
    name: "Agave", emoji: "🌵",
    temperature: { min: 15, max: 40 }, humidity: { min: 10, max: 30 }, light: { min: 7000, max: 10000 },
    description: "Drought-adapted succulent that thrives in hot, arid environments.",
  },
  {
    name: "Haworthia", emoji: "🌵",
    temperature: { min: 15, max: 28 }, humidity: { min: 15, max: 40 }, light: { min: 1000, max: 4000 },
    description: "Small succulent that tolerates low light — ideal for windowsills.",
  },

  // ── Ferns & Shade Plants ─────────────────────────────────────────────────────
  {
    name: "Fern", emoji: "🌿",
    temperature: { min: 15, max: 24 }, humidity: { min: 70, max: 95 }, light: { min: 500, max: 3000 },
    description: "Prefers cool, shady, and very humid environments — ideal for bathrooms.",
  },
  {
    name: "Boston Fern", emoji: "🌿",
    temperature: { min: 15, max: 24 }, humidity: { min: 75, max: 95 }, light: { min: 1000, max: 4000 },
    description: "Classic hanging fern that needs high humidity and indirect light.",
  },
  {
    name: "Maidenhair Fern", emoji: "🌿",
    temperature: { min: 15, max: 22 }, humidity: { min: 80, max: 95 }, light: { min: 500, max: 2500 },
    description: "Delicate fern that demands very high humidity and low light.",
  },
  {
    name: "Calathea", emoji: "🍃",
    temperature: { min: 18, max: 27 }, humidity: { min: 65, max: 85 }, light: { min: 500, max: 3000 },
    description: "Tropical plant known for patterned leaves — needs humidity and low light.",
  },
  {
    name: "Chinese Evergreen", emoji: "🍃",
    temperature: { min: 18, max: 30 }, humidity: { min: 45, max: 70 }, light: { min: 500, max: 3000 },
    description: "One of the most tolerant indoor plants — handles low light and irregular care.",
  },

  // ── Fruit Plants ─────────────────────────────────────────────────────────────
  {
    name: "Strawberry", emoji: "🍓",
    temperature: { min: 15, max: 26 }, humidity: { min: 55, max: 75 }, light: { min: 6000, max: 9000 },
    description: "Sweet fruit that needs full sun, moderate humidity, and well-drained soil.",
  },
  {
    name: "Blueberry", emoji: "🫐",
    temperature: { min: 10, max: 25 }, humidity: { min: 50, max: 70 }, light: { min: 6000, max: 9000 },
    description: "Acid-loving shrub that prefers cool conditions and full sun.",
  },
  {
    name: "Lemon Tree", emoji: "🍋",
    temperature: { min: 13, max: 30 }, humidity: { min: 45, max: 65 }, light: { min: 6000, max: 10000 },
    description: "Citrus tree that loves warmth, full sun, and moderate humidity.",
  },
  {
    name: "Fig Tree", emoji: "🍈",
    temperature: { min: 15, max: 32 }, humidity: { min: 40, max: 65 }, light: { min: 6000, max: 10000 },
    description: "Mediterranean tree that thrives in warm, dry conditions with full sun.",
  },
  {
    name: "Banana Plant", emoji: "🍌",
    temperature: { min: 22, max: 38 }, humidity: { min: 70, max: 90 }, light: { min: 6000, max: 10000 },
    description: "Tropical plant that needs heat, high humidity, and intense sunlight.",
  },
  {
    name: "Avocado", emoji: "🥑",
    temperature: { min: 15, max: 30 }, humidity: { min: 50, max: 70 }, light: { min: 6000, max: 10000 },
    description: "Subtropical tree that needs warmth, full sun, and well-drained soil.",
  },
  {
    name: "Grape Vine", emoji: "🍇",
    temperature: { min: 15, max: 30 }, humidity: { min: 30, max: 60 }, light: { min: 7000, max: 10000 },
    description: "Climbing vine that needs full sun, warmth, and relatively dry conditions.",
  },

  // ── Aquatic & Wet Conditions ──────────────────────────────────────────────────
  {
    name: "Water Lily", emoji: "🌸",
    temperature: { min: 20, max: 30 }, humidity: { min: 75, max: 100 }, light: { min: 6000, max: 10000 },
    description: "Aquatic plant that floats on water and needs full sun and warm conditions.",
  },
  {
    name: "Taro", emoji: "🌿",
    temperature: { min: 20, max: 35 }, humidity: { min: 75, max: 95 }, light: { min: 3000, max: 7000 },
    description: "Tropical wetland plant that loves heat, high humidity, and partial shade.",
  },
  {
    name: "Papyrus", emoji: "🌾",
    temperature: { min: 20, max: 35 }, humidity: { min: 80, max: 100 }, light: { min: 6000, max: 10000 },
    description: "Wetland sedge that thrives in boggy, hot, and very humid conditions.",
  },

  // ── Trees & Large Plants ──────────────────────────────────────────────────────
  {
    name: "Bamboo", emoji: "🎋",
    temperature: { min: 15, max: 35 }, humidity: { min: 55, max: 80 }, light: { min: 4000, max: 8000 },
    description: "Fast-growing grass that adapts to a wide range of warm, humid conditions.",
  },
  {
    name: "Palm Tree", emoji: "🌴",
    temperature: { min: 20, max: 38 }, humidity: { min: 50, max: 75 }, light: { min: 7000, max: 10000 },
    description: "Tropical tree that needs intense sunlight, heat, and moderate humidity.",
  },
  {
    name: "Olive Tree", emoji: "🫒",
    temperature: { min: 10, max: 30 }, humidity: { min: 20, max: 45 }, light: { min: 7000, max: 10000 },
    description: "Mediterranean tree that thrives in hot, dry climates with full sun.",
  },
  {
    name: "Bonsai", emoji: "🌳",
    temperature: { min: 15, max: 28 }, humidity: { min: 50, max: 70 }, light: { min: 3000, max: 7000 },
    description: "Miniature tree art form that needs careful light and humidity management.",
  },

  // ── Ground Cover & Grass ──────────────────────────────────────────────────────
  {
    name: "Clover", emoji: "🍀",
    temperature: { min: 8, max: 22 }, humidity: { min: 45, max: 70 }, light: { min: 4000, max: 8000 },
    description: "Hardy ground cover and nitrogen fixer that thrives in cool, moist conditions.",
  },
  {
    name: "Grass (Lawn)", emoji: "🌾",
    temperature: { min: 10, max: 28 }, humidity: { min: 40, max: 70 }, light: { min: 5000, max: 9000 },
    description: "Common turf grass that needs regular sunlight and moderate moisture.",
  },
  {
    name: "Wheatgrass", emoji: "🌾",
    temperature: { min: 15, max: 25 }, humidity: { min: 50, max: 70 }, light: { min: 4000, max: 8000 },
    description: "Fast-sprouting grass popular for juicing, needing cool temps and moderate light.",
  },

  // ── Climbers & Vines ──────────────────────────────────────────────────────────
  {
    name: "Ivy", emoji: "🌿",
    temperature: { min: 10, max: 24 }, humidity: { min: 45, max: 70 }, light: { min: 1000, max: 5000 },
    description: "Hardy climber that tolerates low light and cool, moderately humid conditions.",
  },
  {
    name: "Wisteria", emoji: "💜",
    temperature: { min: 10, max: 28 }, humidity: { min: 40, max: 65 }, light: { min: 6000, max: 10000 },
    description: "Vigorous climbing vine that needs full sun and produces stunning purple blooms.",
  },
  {
    name: "Passion Flower", emoji: "🌸",
    temperature: { min: 18, max: 32 }, humidity: { min: 55, max: 80 }, light: { min: 6000, max: 10000 },
    description: "Tropical climber that needs warmth, humidity, and lots of sunlight.",
  },

  // ── Specialty ────────────────────────────────────────────────────────────────
  {
    name: "Venus Flytrap", emoji: "🌱",
    temperature: { min: 15, max: 30 }, humidity: { min: 70, max: 90 }, light: { min: 5000, max: 9000 },
    description: "Carnivorous plant that needs high humidity, bright light, and distilled water.",
  },
  {
    name: "Pitcher Plant", emoji: "🌿",
    temperature: { min: 15, max: 28 }, humidity: { min: 75, max: 95 }, light: { min: 4000, max: 8000 },
    description: "Carnivorous bog plant that thrives in very high humidity and bright indirect light.",
  },
  {
    name: "Air Plant", emoji: "🌵",
    temperature: { min: 15, max: 30 }, humidity: { min: 50, max: 75 }, light: { min: 2000, max: 6000 },
    description: "Epiphyte that needs no soil, absorbs moisture from the air, and loves indirect light.",
  },
  {
    name: "Lucky Bamboo", emoji: "🎍",
    temperature: { min: 18, max: 30 }, humidity: { min: 50, max: 75 }, light: { min: 1000, max: 4000 },
    description: "Popular indoor plant that grows in water or soil with indirect light.",
  },
  {
    name: "Money Plant", emoji: "🌿",
    temperature: { min: 18, max: 30 }, humidity: { min: 40, max: 70 }, light: { min: 1000, max: 5000 },
    description: "Easy-care trailing plant that tolerates low light and irregular watering.",
  },
];

module.exports = plants;