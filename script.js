const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions");

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
//Filters through the fruit options for those that include the input characters and then stores those fruits in a new array.
function search(str) {
  let filteredFruit = [];
  suggestions.classList.add("has-suggestions");
  if (str.length) {
    filteredFruit = fruit.filter((keyword) => {
      return keyword.toLowerCase().includes(str.toLowerCase());
    });
    // Calls this function passing in the new array of filtered fruit
    showSuggestions(filteredFruit);
  }
}

//When a user types into the search bar, this function is called which calls the search function on whatever is typed.
function searchHandler(e) {
  search(e.target.value);
}

//Takes the array of filtered fruit and maps a list item for each element in the array. Each list item has an onclick attribute which calls the useSuggestion function.
function showSuggestions(filteredFruits) {
  let fruitSuggestions = filteredFruits.map((item) => {
    return "<li onclick=useSuggestion(this)>" + item + "</li>";
  });

  //Wraps all of the list elements created above in an unordered list element
  suggestions.innerHTML = "<ul>" + fruitSuggestions.join("") + "</ul>";
}

//When a user clicks on a suggested item, the search bar is filled with that suggestion and the dropdown disappears.
function useSuggestion(item) {
  input.value = item.target.innerHTML;
  suggestions.innerText = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
