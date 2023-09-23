const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  // clear suggestions when input is deleted
  if (str === "") return showSuggestions([]);

  results = fruit.filter((val) =>
    val.toLowerCase().includes(str.toLowerCase())
  );
  return results;
}

function searchHandler(e) {
  showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
  // clear suggestions
  suggestions.innerHTML = "";
  // narrow results array down to max of 6 items
  results ? (slicedResults = results.slice(0, 6)) : (slicedResults = []);
  // loop over new array and add them to ul
  for (fruitItem of slicedResults) {
    // matching letters bold
    const regExp = new RegExp(`${inputVal}`, "i");
    const boldFruit = fruitItem.replace(regExp, "<strong>$&</strong>");

    const listItem = document.createElement("li");
    listItem.innerHTML = boldFruit;
    suggestions.append(listItem);
  }
}

function useSuggestion(e) {
  let targetFruit;
  e.target.nodeName === "STRONG"
    ? (targetFruit = e.target.parentElement.textContent)
    : (targetFruit = e.target.textContent);

  input.value = targetFruit;
  // clear suggestions
  showSuggestions([]);
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
