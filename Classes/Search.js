import {recipes} from "../assets/js/recipes.js";

let keywords = document.querySelector(".searchInput input").value;

export default class Search {

    static searchByKeywords() {
        let recipesIds = [];
        let tagsKeywords = this.searchByTags()

        keywords = keywords.split(" ")

        if (tagsKeywords) {
            keywords.push(...tagsKeywords);
            console.log(keywords)

        }
        recipes.forEach(recipe => {
            let isValidKeyword = [];
            keywords.forEach(keyword => {
                //si le nom de la recette qui a pour index le mot clef existe ...
                if (recipe.name.toLowerCase().indexOf(keyword) !== -1 && !recipesIds.includes(recipe.id) && keyword.length > 2 || keyword == "") {
                    isValidKeyword.push(true);
                } else {
                    isValidKeyword.push(false);
                }
            })
            if (isValidKeyword.every(x => x == true)) {
                recipesIds.push(recipe.id)
            }
        })
        return recipesIds
    }

    static searchByTags() {
        let searchTags = document.querySelectorAll(".activeTagsContainer span");

        let tagsKeywords = [];

        searchTags.forEach(tagKeyword => {
            tagsKeywords.push(tagKeyword);
        })
        return tagsKeywords
    }


    static openDropDownLists() {
        let dropDownBtns = document.querySelectorAll("button");

        dropDownBtns.forEach(dropdownBtn => {
            dropdownBtn.addEventListener('click', () => {
                if (dropdownBtn.firstElementChild.classList.contains("fa-chevron-down")) {
                    dropdownBtn.innerHTML = `<i class=\"fas fa-chevron-up\"></i>`
                    dropdownBtn.nextElementSibling.style.display = "flex";
                    // Search.getIngrUsteSearchTags(dropdownBtn.parentElement.classList[1])
                } else {
                    dropdownBtn.innerHTML = "<i class=\"fas fa-chevron-down\"></i>"
                    dropdownBtn.nextElementSibling.style.display = "none";
                }
            })
        })
    }

    static openDropDownByClickingInput() {
        let tagsInput = document.querySelectorAll(".dropDown input");
        tagsInput.forEach(tagInput => {
            tagInput.addEventListener('click', () => {
                if (tagInput.nextElementSibling.firstElementChild.classList.contains("fa-chevron-down")) {
                    tagInput.nextElementSibling.nextElementSibling.style.display = "flex"
                    tagInput.parentElement.querySelector('button').innerHTML = "<i class=\"fas fa-chevron-up\"></i>"
                //     Search.getIngrUsteSearchTags(tagInput.parentElement.classList[1])
                //     console.log(tagInput.parentElement.classList[1])
                }
            })
        })
    }

    static getIngrUsteSearchTags(type) {
        let tagsList = [];
        let dropDownLists = document.querySelectorAll('.dropDown ul');
        dropDownLists.forEach(dropDownList => {
            recipes.forEach(recipe => {
                recipe[type].forEach(ingrUste => {
                    if (!tagsList.includes(ingrUste)) {
                        tagsList.push(ingrUste)
                    }
                })
            })
            // for (let oneingredient of ingredientsList) {
            //     dropDownList.insertAdjacentHTML("afterbegin", `<li>${oneingredient}</li>`)
            // }
            // let elements = document.querySelectorAll('li');
            // elements.forEach(element => {
            //     element.onclick = ('click', (e)=> {
            //         document.querySelector(".activeTagsContainer").insertAdjacentHTML("beforeend", `<span class="ingredient">${e.target.innerText}</span>`)
            //     })
            // })
        })
        console.log(tagsList)

    }

    static getSearchTags(type) {
        let typeTags = [];

                        recipes.forEach(recipe => {
                            typeTags.push(recipe[type])
                        })
                        console.log(typeTags)

                    // console.log(typeTags)
                    // for (let oneTypeTag of typeTags) {
                    //     dropDownList.insertAdjacentHTML("afterbegin", `<li>${oneTypeTag}</li>`)
                    // }
                    // let elements = document.querySelectorAll(".type li");
                    // elements.forEach(element => {
                    //     element.onclick = ('click', (e) => {
                    //         document.querySelector(".activeTagsContainer").insertAdjacentHTML("beforeend", `<span class="ingredient">${e.target.innerText}</span>`)
                    //     })
                    // })
        //         }
    }
}
