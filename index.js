const food = require("./food.json");

const listAll = food;
console.log("****1****");
console.log(listAll);

const vegetables = food.filter((f) => f.category.includes("Vegetable"));
console.log("****2****");
console.log(vegetables);

const fruit = food.filter((f) => f.category.includes("Fruit"));
console.log("****3****");
console.log(fruit);

const protein = food.filter((f) => f.category.includes("Protein"));
console.log("****4****");
console.log(protein);

const nuts = food.filter((f) => f.category.includes("Nuts"));
console.log("****5****");
console.log(nuts);

const grains = food.filter((f) => f.category.includes("Grain"));
console.log("****6****");
console.log(grains);

const dairy = food.filter((f) => f.category.includes("Dairy"));
console.log("****7****");
console.log(dairy);

const above100Calories = food.filter((f) => f.calorie > 100);
console.log("****8****");
console.log(above100Calories);

const below100Calories = food.filter((f) => f.calorie < 100);
console.log("****9****");
console.log(below100Calories);

const sortedCalorie = food.sort((a, b) => b.calorie - a.calorie);
console.log("****10****");
console.log(sortedCalorie);

const sortedCab = food.sort((a, b) => a.cab - b.cab);
console.log("****11****");
console.log(sortedCab);