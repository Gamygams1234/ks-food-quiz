import { useState } from "react";
import "./App.css";

const categories = ["Appetizers", "Greens", "Mains", "Burgers & Sandwiches", "Mac on Taps"];
const questions = [
  {
    category: "Appetizers",
    question: "Name the sauce that is served with the Chili Lime Fries?",
    options: ["Spicy Ranch", "Chipotle Mayo", "Garlic Aioli", "Jalapeño Cream"],
    correctAnswer: "Spicy Ranch",
  },
  {
    category: "Appetizers",
    question: "Name the beer that you feel pairs best with the Chili Lime Fries and why?",
    options: [
      "Red Trolley, for its caramel sweetness",
      "Follow the Sun, for its light crisp finish",
      "Wreck Alley, for its dark and rich coffee flavors",
      "Tower X IPA, for its strong bitterness",
    ],
    correctAnswer: "Follow the Sun, for its light crisp finish",
  },
  {
    category: "Appetizers",
    question: "Name the six garnishes/toppings that come with the harissa hummus?",
    options: [
      "Cilantro, Red Onion, Feta, Red Peppers Herb Oil, Mixed Olives",
      "Tomatoes, Cucumbers, Garlic, Spinach, Radishes, Flatbread",
      "Lemon Zest, Olive Oil, Rosemary, Carrots, Feta, Pretzels",
      "Pickles, Jalapeño, Hummus, Pita Bread, Cheese, Mixed Olives",
    ],
    correctAnswer: "Cilantro, Red Onion, Feta, Red Peppers Herb Oil, Mixed Olives",
  },
  {
    category: "Appetizers",
    question: "What Karl Beer is used for the brine on the Beer Pretzels?",
    options: ["Oktoberfest", "San Diego Lager", "Red Trolley Ale", "Boat Shoes Hazy IPA"],
    correctAnswer: "Red Trolley Ale",
  },
  {
    category: "Appetizers",
    question: "What two dips are served with the Beer Pretzels?",
    options: [
      "Spicy Siracha Mustard and Jalapeño Beer Cheese",
      "Truffle Aioli and Garlic Butter",
      "Spicy Mayo and BBQ Sauce",
      "Honey Mustard and Marinara",
    ],
    correctAnswer: "Spicy Siracha Mustard and Jalapeño Beer Cheese",
  },
  {
    category: "Appetizers",
    question: "List all the ingredients of the double truffle fries.",
    options: [
      "Parmesan, Garlic, Rosemary, White Truffle Oil, Truffle Aioli",
      "Cheddar Cheese, Bacon, Jalapeños, Sour Cream",
      "Truffle Oil, Parmesan, Basil, Garlic, Pecorino Romano",
      "Chili Flakes, Truffle Oil, Blue Cheese, Basil, Olive Oil",
    ],
    correctAnswer: "Parmesan, Garlic, Rosemary, White Truffle Oil, Truffle Aioli",
  },
  {
    category: "Appetizers",
    question: "What cheeses are served with the Roasted Brussels Sprouts?",
    options: ["Grated Pecorino-Romano, Feta", "Cheddar, Parmesan", "Goat Cheese, Feta", "Blue Cheese, Gruyere"],
    correctAnswer: "Grated Pecorino-Romano, Feta",
  },
  {
    category: "Appetizers",
    question: "What sauce is served with duck fat pretzel bites?",
    options: ["Truffle Aoli", "Garlic Aioli", "BBQ Sauce", "Spicy Mustard"],
    correctAnswer: "Truffle Aoli",
  },
  {
    category: "Appetizers",
    question: "What upsell option do we have for the Ahi Poke nachos? How much is it?",
    options: ["Avocado, $3.00", "Extra Tuna, $2.50", "Salmon, $4.00", "Aoli, $3.00"],
    correctAnswer: "Avocado, $3.00",
  },
  {
    category: "Appetizers",
    question: "What sauces are used in the Ahi Poke Nachos?",
    options: [
      "Spicy Fire Cracker Sauce, Cilantro Aioli",
      "Sriracha, Soy Sauce",
      "BBQ, Honey Mustard",
      "Truffle Oil, Garlic Aioli",
    ],
    correctAnswer: "Spicy Fire Cracker Sauce, Cilantro Aioli",
  },
  {
    category: "Appetizers",
    question: "How many ounces of chicken come with a serving of Buffalo Wings?",
    options: ["6 ounces", "8 ounces", "9 ounces", "12 ounces"],
    correctAnswer: "9 ounces",
  },
  {
    category: "Appetizers",
    question: "What sauce comes on the side of the buffalo wings?",
    options: ["Ranch", "Blue Cheese", "Honey Mustard", "BBQ"],
    correctAnswer: "Ranch",
  },
  {
    category: "Appetizers",
    question: "What are the two flavor options for wings?",
    options: ["Buffalo, Sweet Chili Garlic", "BBQ, Honey Mustard", "Teriyaki, Sriracha", "Garlic Parmesan, Spicy Mayo"],
    correctAnswer: "Buffalo, Sweet Chili Garlic",
  },
  {
    category: "Appetizers",
    question: "What cheese is sprinkled on top of the Asada Fries?",
    options: ["Cotija Cheese", "Cheddar Cheese", "Gorgonzola Cheese", "Feta Cheese"],
    correctAnswer: "Gorgonzola Cheese",
  },
  {
    category: "Appetizers",
    question: "What is served on the side of the black bean soup?",
    options: ["Cotija Cheese", "Garlic Bread", "Sour Cream", "Spoon"],
    correctAnswer: "Spoon",
  },
  {
    category: "Appetizers",
    question: "How many ounces come in each serving of soup?",
    options: ["8 ounces", "10 ounces", "12 ounces", "6 ounces"],
    correctAnswer: "8 ounces",
  },
  // Greens
  {
    category: "Greens",
    question: "What two salads are served as side?",
    options: [
      "Mixed Greens, Side Caesar",
      "Goat Cheese & Melon, Ahi Salad",
      "Mixed Greens, Chicken Chop Shop",
      "Caesar, Mixed Greens",
    ],
    correctAnswer: "Mixed Greens, Side Caesar",
  },
  {
    category: "Greens",
    question: "What is the dressing on the Goat Cheese & Melon Salad?",
    options: ["Cilantro Vinaigrette", "Herb Oil, Cilantro Vinaigrette", "Balsamic Dressing", "Ranch"],
    correctAnswer: "Herb Oil, Cilantro Vinaigrette",
  },
  {
    category: "Greens",
    question: "What are two protein options for the Goat Cheese & Melon Salad?",
    options: ["Grilled Chicken, Grilled Salmon", "Steak, Shrimp", "Fried Tofu, Grilled Chicken", "Salmon, Pork"],
    correctAnswer: "Grilled Chicken, Grilled Salmon",
  },
  {
    category: "Greens",
    question: "What dressing is served with the Mixed Green Salad?",
    options: ["Balsamic Vinaigrette", "Cilantro Vinaigrette", "Ranch", "Honey Mustard"],
    correctAnswer: "Balsamic Vinaigrette",
  },
  {
    category: "Greens",
    question: "What proteins are available to add to the Mixed Green Salad?",
    options: ["Grilled Chicken, Salmon", "Salmon, Tofu", "Chicken, Bacon", "Pork, Shrimp"],
    correctAnswer: "Grilled Chicken, Salmon",
  },
  {
    category: "Greens",
    question: "What cheese comes in the Chicken Chop Shop?",
    options: ["Gorgonzola", "Pecorino", "Goat Cheese", "Cheddar"],
    correctAnswer: "Gorgonzola",
  },
  {
    category: "Greens",
    question: "What dressing is served with the Chicken Chop Shop?",
    options: ["Ranch", "Chile Ranch", "Cilantro Vinaigrette", "Honey Mustard"],
    correctAnswer: "Chile Ranch",
  },
  {
    category: "Greens",
    question: "List the ingredients in the Chicken Chop Shop.",
    options: [
      "Grilled Chicken, Romaine Chopped Mixed Lettuce, Avocado, Gorgonzola, Shredded Carrots, Piquillo Pepper, Corn Tortilla, Beer Brined Bacon, Chili Ranch Dressing",
      "Chicken, Mixed Greens, Cabbage, Peppers, Bacon, Croutons, Tomato, Shredded Carrots, Piquillo Pepper, Cheddar Cheese,  Beer Brined Bacon, Chili Ranch Dressing",
      "Fried Chicken, Spinach, Kale, Tortilla, Avocado, Ranch, Tomato, Shredded Carrots, Piquillo Pepper, Cheddar Cheese",
      "Grilled Chicken, Romaine Chopped Mixed Lettuce, Parmesan, Avocado, Feta Cheese, Fried Onions, Shredded Carrots, Piquillo Pepper, Beer Brined Bacon, Chili Ranch Dressing",
    ],
    correctAnswer:
      "Grilled Chicken, Romaine Chopped Mixed Lettuce, Avocado, Gorgonzola, Shredded Carrots, Piquillo Pepper, Corn Tortilla, Beer Brined Bacon, Chili Ranch Dressing",
  },
  {
    category: "Greens",
    question: "What proteins are available to add to the Caesar Salad?",
    options: ["Grilled Chicken, Ahi", "Salmon, Pork", "Grilled Chicken, Salmon", "Fried Tofu, Grilled Chicken"],
    correctAnswer: "Grilled Chicken, Salmon",
  },
  {
    category: "Greens",
    question: "What is the cheese is served on the Side Caesar?",
    options: ["Pecorino", "Feta", "Cheddar", "Blue Cheese"],
    correctAnswer: "Pecorino",
  },
  {
    category: "Greens",
    question: "What dressings come on the Ahi Salad?",
    options: [
      "Fire Cracker Sauce, Cilantro Vinaigrette",
      "Balsamic Vinaigrette, Honey Mustard",
      "Fire Cracker Sauce, Citrus Vinigrette",
      "Cilantro Vinaigrette Truffle Oil",
    ],
    correctAnswer: "Fire Cracker Sauce, Citrus Vinigrette",
  },
  {
    category: "Greens",
    question: "What is the garnish on the Ahi Salad?",
    options: ["Fried Onion", "Sesame Seeds", "Pine Nuts", "Croutons"],
    correctAnswer: "Sesame Seeds",
  },

  // Mains
  {
    category: "Mains",
    question: "What two kinds of sausages come in Beer Sausage?",
    options: [
      "Chili Chicken Sausage, Cheddar Bratwurst",
      "Bratwurst, Kielbasa",
      "Andouille Sausage, Chicken",
      "Italian Sausage, Kielbasa",
    ],
    correctAnswer: "Chili Chicken Sausage, Cheddar Bratwurst",
  },
  {
    category: "Mains",
    question: "What kind of fish is beer battered for Fish N Chips?",
    options: ["Alaskan Cod", "Salmon", "Haddock", "Tilapia"],
    correctAnswer: "Alaskan Cod",
  },
  {
    category: "Mains",
    question: "What is the dipping sauce offered with our Fish N Chips?",
    options: ["Caper Remoulade", "Tartar Sauce", "Garlic Aioli", "BBQ Sauce"],
    correctAnswer: "Caper Remoulade",
  },
  {
    category: "Mains",
    question: "How many pieces come in Fish N Chips?",
    options: ["3", "4", "2", "5"],
    correctAnswer: "3",
  },
  {
    category: "Mains",
    question: "What kind of sauce comes on the Korean BBQ Rice Bowl?",
    options: ["Sesame Cilantro Aioli", "Soy Sauce", "Korean BBQ Sauce", "Spicy Mustard"],
    correctAnswer: "Korean BBQ Sauce",
  }, // Mains
  {
    category: "Mains",
    question: "What four proteins can be added to the Korean BBQ Rice Bowl?",
    options: [
      "Grilled Chicken, Pork, Ahi, Beyond Meat Patty",
      "Grilled Chicken, Ahi, Salmon, Shrimp",
      "Steak, Pork, Grilled Chicken, Tofu",
      "Ahi, Grilled Chicken, Salmon, Tofu",
    ],
    correctAnswer: "Grilled Chicken, Ahi, Beyond Meat Patty, Salmon",
  },
  {
    category: "Mains",
    question: "What type of tacos do we have?",
    options: [
      "Grilled Chicken, Fish, Carnitas",
      "Fish, Carne Asada, Grilled Chicken",
      "Grilled Chicken, Carne Asada, Blackened Mahi",
      "Blackened Mahi, Carne Asada, Pork Belly",
    ],
    correctAnswer: "Grilled Chicken, Carne Asada, Blackened Mahi",
  },
  {
    category: "Mains",
    question: "How many tacos are served on the Grilled Chicken Tacos?",
    options: ["3", "2", "4", "1"],
    correctAnswer: "3",
  },
  {
    category: "Mains",
    question: "How can we make the Grilled Chicken Tacos 'Gluten Sensitive'?",
    options: ["Use Corn Tortillas", "Remove the Cheese", "Use Lettuce Wraps", "Use Gluten-Free Sauce"],
    correctAnswer: "Use Lettuce Wraps",
  },
  {
    category: "Mains",
    question: "What upsell item can you add to the Grilled Chicken Tacos? How much is it?",
    options: ["Avocado for $3", "Extra Cheese for $1.50", "Fried Onions for $1", "Guacamole for $2.50"],
    correctAnswer: "Avocado for $3",
  },
  {
    category: "Mains",
    question: "What kind of fish comes in Fish Tacos?",
    options: ["Alaskan Cod", "Salmon", "Tuna", "Blackened Mahi"],
    correctAnswer: "Blackened Mahi",
  },
  {
    category: "Mains",
    question: "What are the sides that come with Grilled Fish Tacos?",
    options: ["Rice and Black Beans", "Fries and Salad", "Sweet Potato Fries and Rice", "None"],
    correctAnswer: "None",
  },
  {
    category: "Mains",
    question: "What two sauces come in Grilled Fish Tacos?",
    options: [
      "Sriracha Aioli, Cilantro Vinaigrette",
      "Avocado Sauce, Pico de Gallo",
      "Cilantro Lime Aioli, Salsa Verde",
      "Guajillo Salsa, Chipotle Sour Cream",
    ],
    correctAnswer: "Guajillo Salsa, Chipotle Sour Cream",
  },
  {
    category: "Mains",
    question: "List all the ingredients in the carne asada tacos.",
    options: [
      "Carne Asada, Cheese, Jalapeño, Gorgonzola, Onion, Guajillo Salsa, Chipotle Sour Cream, Pico de Gallo",
      "Carne Asada, Pickled Onion, Cilantro, Cotija, Guajillo Salsa, Chipotle Sour Cream, Cabbage, Pico de Gallo",
      "Steak, Guacamole, Cheese, Jalapeño, Onion, Pickled Onion, Cilantro, Cotija, Guajillo Salsa",
      "Beef, Tomato, Salsa, Lettuce, Cheese, Guacamole, Cheese, Jalapeño, Onion",
    ],
    correctAnswer:
      "Carne Asada, Pickled Onion, Cilantro, Cotija, Guajillo Salsa, Chipotle Sour Cream, Cabbage, Pico de Gallo",
  },
  {
    category: "Mains",
    question: "What two sauces come in ginger salmon?",
    options: [
      "Spicy Mustard, Firecracker Sauce",
      "Soy Sauce, Spicy Mayo",
      "Sesame Dressing, Teriyaki Sauce",
      "Lemon Butter Sauce, Firecracker Sauce",
    ],
    correctAnswer: "Spicy Mustard, Firecracker Sauce",
  },
  {
    category: "Mains",
    question: "How many pork chops come in the Beer Brined Pork Chops?",
    options: ["2", "1", "3", "4"],
    correctAnswer: "2",
  },
  {
    category: "Mains",
    question: "What Karl Core Beer do we use to brine the pork chops?",
    options: ["Red Trolley", "Aurora Hoppyalis", "Wreck Alley", "Oktoberfest"],
    correctAnswer: "Red Trolley",
  },
  {
    category: "Mains",
    question: "What two sauces are served with the Beer Brined Pork Chops?",
    options: [
      "Firecracker, Spicy Mustard Sauce",
      "Honey Sriracha, Spicy Mustard Sauce",
      "Soy Glaze, Jalapeño Aioli",
      "Cilantro Lime Aioli, Ranch",
    ],
    correctAnswer: "Firecracker, Spicy Mustard Sauce",
  },
  {
    category: "Mains",
    question: "What kinds of fries are served with the Ribeye Steak Frite?",
    options: ["Garlic Parmesan Truffle Fries", "Truffle Fries", "Sweet Potato Fries", "French Fries"],
    correctAnswer: "Garlic Parmesan Truffle Fries",
  },
  {
    category: "Mains",
    question: "How many ounces are in Ribeye?",
    options: ["12 oz", "16 oz", "8 oz", "10 oz"],
    correctAnswer: "12 oz",
  },
  {
    category: "Mains",
    question: "What kind of butter is served on top of the ribeye?",
    options: ["Herb Butter", "Garlic Butter", "Cilantro Butter", "Lemon Butter"],
    correctAnswer: "Herb Butter",
  },

  // Burgers & Sandwiches
  {
    category: "Burgers & Sandwiches",
    question: "What sauce is on the Pork Schnitzel Sliders?",
    options: ["Chipotle Aioli", "Cilantro Aioli", "Mustard Aioli", "Sriracha Mayo"],
    correctAnswer: "Chipotle Aioli",
  },
  {
    category: "Burgers & Sandwiches",
    question: "The patties on the burgers are all what weight?",
    options: ["7 oz", "6 oz", "8 oz", "10 oz"],
    correctAnswer: "7 oz",
  }, // Burgers & Sandwiches
  {
    category: "Burgers & Sandwiches",
    question: "Without otherwise prompting the kitchen, how are the burgers cooked?",
    options: ["Medium Well", "Medium", "Well Done", "Rare"],
    correctAnswer: "Medium Well",
  },
  {
    category: "Burgers & Sandwiches",
    question: "Can the Beyond Burger be substituted on any burger?",
    options: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What cheese is served on the Pub Burger?",
    options: ["Tillamook Cheddar", "Tillamook Pepper Jack", "Tillamook American Cheese", "Tillamook Swiss Cheese"],
    correctAnswer: "Tillamook Cheddar",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What ingredients come on the Food Truck Burger?",
    options: [
      "Caramelized Onions, Jalapeño, Avocado, Chipotle Aioli, Pickles, Korean BBQ Sauce, Gruyere, LT",
      "Crispy Onions, Lettuce, Bacon, BBQ Sauce",
      "Caramelized Onions, Pickeled Jalapeño, Korean BBQ Sauce, Gruyere, LT, Chipotle Mayo",
      "Caramelized Onions, Lettuce, Tomato, Pickles, Korean BBQ Sauce, Cheddar, LT",
    ],
    correctAnswer: "Caramelized Onions, Pickeled Jalapeño, Korean BBQ Sauce, Gruyere, LT, Chipotle Mayo",
  },
  {
    category: "Burgers & Sandwiches",
    question: "Which beer is used to brine the bacon?",
    options: ["Red Trolley", "Aurora Hoppyalis", "Oktoberfest", "Follow the Sun"],
    correctAnswer: "Follow the Sun",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What two sauces are served with the Cotija Avocado Turkey Burger?",
    options: [
      "Cilantro Aioli, Chipotle Aioli",
      "Sriracha Mayo, Avocado Aioli",
      "Pesto Aioli, Spicy Mayo",
      "Chili Aoil, Chili Citrus Sauce",
    ],
    correctAnswer: "Chili Aoil, Chili Citrus Sauce",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What is the side served with the Cotija Avocado Turkey Burger?",
    options: ["Fries", "Seasoned Watermelon", "Salad", "Coleslaw"],
    correctAnswer: "Seasoned Watermelon",
  },
  {
    category: "Burgers & Sandwiches",
    question: "How do we make the Beyond Burger a Vegan/Gluten Sensitive option?",
    options: [
      "Use Gluten-Free Bun and Remove Cheese",
      "Remove Avocado and Bacon",
      "Use Lettuce Wrap Instead of Bun",
      "Replace the Sauce with Ketchup",
    ],
    correctAnswer: "Use Lettuce Wrap Instead of Bun",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What type of bread is used for the Chipotle Pastrami Sandwich?",
    options: ["Tillamook Pepper Jack Ciabatta", "Artisan Brioche Bun", "San Diego Pretzel Bun", "Ciabatta"],
    correctAnswer: "Artisan Brioche Bun",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What cheese comes on the Pastrami Sandwich?",
    options: ["Swiss Cheese", "Tillamook Cheddar", "Mozzarella", "Tillamook Pepperjack"],
    correctAnswer: "Tillamook Pepperjack",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What sauce is served on the Mesquite Chicken Sandwich?",
    options: ["Cilantro Aioli", "Chili Aioli", "Sriracha Mayo", "Mustard Aioli"],
    correctAnswer: "Chili Aioli",
  },
  {
    category: "Burgers & Sandwiches",
    question: "What two cheeses are served on the 'Breakfast Karl Sandwich'?",
    options: [
      "Tillamook Pepper Jack, Aged Cheddar",
      "Tillamook Swiss, Cheddar",
      "Tillamook Pepper Jack, American",
      "Tillamook Cheddar, Swiss",
    ],
    correctAnswer: "Tillamook Pepper Jack, Aged Cheddar",
  },

  // Mac on Taps
  {
    category: "Mac on Taps",
    question: "What four cheeses are used in the Mac on Taps?",
    options: [
      "Mozzarella, Parmesan, Cheddar, Swiss",
      "Parmesan, Cheddar, Swiss, Jack",
      "Cheddar, Gruyere, Parmesan, Gorgonzola",
      "Mozzarella, Parmesan, Cheddar, Gouda",
    ],
    correctAnswer: "Cheddar, Gruyere, Parmesan, Gorgonzola",
  },
  {
    category: "Mac on Taps",
    question: "Name the type of breadcrumbs that are used on all Mac on Taps.",
    options: ["Panko", "Italian", "Gluten-Free", "Whole Wheat"],
    correctAnswer: "Panko",
  },
  {
    category: "Mac on Taps",
    question: "What are the other two ingredients mixed with the breadcrumbs?",
    options: ["Cheese and Butter", "Truffle Oil and Garlic", "Salt, Pepper and Parmesan", "Herbs and Garlic"],
    correctAnswer: "Salt, Pepper and Parmesan",
  },
  {
    category: "Mac on Taps",
    question: "How many ounces of noodles come in the Mac on Taps?",
    options: ["8 oz", "7 oz", "10 oz", "6 oz"],
    correctAnswer: "7 oz",
  },
  {
    category: "Mac on Taps",
    question: "What type of noodles are used in Mac on Tap?",
    options: ["Cavatappi", "Fusilli", "Rigatoni", "Elbow Macaroni"],
    correctAnswer: "Elbow Macaroni",
  },
  {
    category: "Mac on Taps",
    question: "Name the three main product allergens for the Mac on Taps.",
    options: ["Milk, Eggs, Soy", "Nuts, Shellfish, Gluten", "Dairy, Peanuts, Wheat", "Gluten, Soy, Eggs"],
    correctAnswer: "Milk, Eggs, Soy",
  }, // Mac on Taps (continued)
  {
    category: "Mac on Taps",
    question: "Name the three ingredients that make up the Piggy Bank Mac on Tap.",
    options: [
      "Black Forest Ham, Beer-Brined Bacon, Andouille Sausage",
      "Pepperoni, Bacon, Ham",
      "Pulled Pork, Chorizo, Andouille Sausage",
      "Bratwurst, Kielbasa, Beer-Brined Bacon",
    ],
    correctAnswer: "Black Forest Ham, Beer-Brined Bacon, Andouille Sausage",
  },
  {
    category: "Mac on Taps",
    question: "What beer cleanses the saltiness from the meats in Piggy Bank and why?",
    options: [
      "Red Trolley, for its caramel sweetness",
      "Follow the Sun, for its light crisp finish",
      "Wreck Alley, for its dark and rich coffee flavors",
      "Tower X IPA, for its strong bitterness",
    ],
    correctAnswer: "Follow the Sun, for its light crisp finish",
  },
  {
    category: "Mac on Taps",
    question: "Can the Mac on Taps be ordered without any Gorgonzola?",
    options: ["Yes", "No"],
    correctAnswer: "No",
  },
  {
    category: "Mac on Taps",
    question: "Name the three ingredients that make up the Tree Hugger.",
    options: [
      "Roasted Red Peppers, Crimini Mushrooms, Arugula",
      "Tofu, Zucchini, Spinach",
      "Caramelized Onions, Kale, Asparagus",
      "Broccoli, Tomatoes, Olives",
    ],
    correctAnswer: "Roasted Red Peppers, Crimini Mushrooms, Arugula",
  },
  {
    category: "Mac on Taps",
    question: "Name five sides. (There are twelve on the menu)",
    options: [
      "Coleslaw, Sweet Potato Fries, Mashed Potatoes, Grilled Zucchini, Caesar Salad",
      "Grilled Zucchini, Fried Pickles, Macaroni Salad, Caesar Salad, Waffle Fries",
      "French Fries, Onion Rings, Grilled Vegetables, Caesar Salad, Coleslaw",
      "Coleslaw, Mashed Potatoes, Steamed Rice, Caesar Salad, Corn on the Cob",
    ],
    correctAnswer: "Coleslaw, Sweet Potato Fries, Mashed Potatoes, Grilled Zucchini, Caesar Salad",
  },
  {
    category: "Mac on Taps",
    question: "What beer is used in the Beeramisu?",
    options: ["Wreck Alley Imperial Stout", "Red Trolley Ale", "Tower X IPA", "Boat Shoes Hazy IPA"],
    correctAnswer: "Wreck Alley Imperial Stout",
  },
  {
    category: "Mac on Taps",
    question: "True or False, Our Kid Menu items come with a free drink included?",
    options: ["True", "False"],
    correctAnswer: "True",
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const filteredQuestions = questions.filter((question) => question.category === selectedCategory);

  const handleCategorySelection = (category) => {
    setShowFeedback(false);
    setSelectedCategory(category);
    setCurrentQuestion(0); // Reset to the first question
  };
  const restartQuiz = () => {
    setSelectedCategory(null);
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswer(null);
    setShowFeedback(false);
  };

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    const isAnswerCorrect = filteredQuestions[currentQuestion].correctAnswer === answer;
    isAnswerCorrect && setScore(score + 1);
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setUserAnswer(null);
    setShowFeedback(false);
    filteredQuestions[currentQuestion + 1].options.sort(() => Math.random() - 0.5);
    setCurrentQuestion((prev) => prev + 1);
  };

  if (!selectedCategory) {
    return (
      <div className="category-selection">
        <h2>Select a category to start the quiz</h2>
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategorySelection(category)}>
            {category}
          </button>
        ))}
        <footer>
          <p>
            Owned by{" "}
            <a href="https://www.gamalielburgos.com/" target="_blank">
              Gamy Burgos
            </a>
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{filteredQuestions[currentQuestion].question}</h2>
      <div className="options">
        {filteredQuestions[currentQuestion].options
          //   .sort(() => Math.random() - 0.5) // Shuffle options randomly
          .map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={userAnswer === option ? "selected" : ""}
            >
              {option}
            </button>
          ))}
      </div>

      {showFeedback && (
        <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect
            ? "Correct!"
            : `Incorrect. The correct answer is ${filteredQuestions[currentQuestion].correctAnswer}.`}
        </div>
      )}

      {showFeedback && currentQuestion < filteredQuestions.length - 1 && (
        <button className="full-btn" onClick={handleNextQuestion}>
          Next
        </button>
      )}

      {!showFeedback && currentQuestion !== filteredQuestions.length - 1 && (
        <button className="home-button" onClick={restartQuiz}>
          Back to Home
        </button>
      )}
      {showFeedback && currentQuestion === filteredQuestions.length - 1 && (
        <div>
          <p>
            You Scored {score} out of {filteredQuestions.length}!
          </p>
          <button className="full-btn" onClick={restartQuiz}>
            Back To Home
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
