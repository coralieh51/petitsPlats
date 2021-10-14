import {recipes} from "../assets/js/recipes.js";

const container = document.querySelector('.cardsContainer');

export default class Recipe {

    static display(idsArray) {
        recipes.forEach(recipe => {
            if (!idsArray || idsArray.includes(recipe.id)) {
                container.insertAdjacentHTML("beforeend",

                    `<div class="cardRecipe">
                <figure>
                    <div class="recipeImg"></div>
                    <figcaption>
                        <h2>${recipe.name}${recipe.id}</h2>
                        <div class="time"><i class="far fa-clock"></i>${recipe.time} min</div>
                        <ul id="${recipe.id}"></ul>
                        <p>${recipe.description}</p>
                    </figcaption>
                </figure>
            </div>`)
                const ingredientsList = document.getElementById(`${recipe.id}`);
                recipe.ingredients.forEach(ingredient => {
                    let separator = ":";
                    if (!ingredient.unit) {
                        ingredient.unit = "";
                    }
                    if (!ingredient.quantity) {
                        ingredient.quantity = "";
                        separator = ""
                    }
                    ingredientsList.insertAdjacentHTML('beforeend',
                        `<li>${ingredient.ingredient} ${separator} ${ingredient.quantity} ${ingredient.unit}
                </li>`)
                })
            }
        })
    }
}


