function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this)
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)


}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe(){
  let ingredientsArray = document.getElementsByName("ingredients")
  let  newIngredients = []
  for (let i = 0; i < ingredientsArray.length; i++){
    if (ingredientsArray[i] !== ""){
    newIngredients.push(ingredientsArray[i].innerText)
    }
  }

  let recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("desciption").value,
    ingredients: newIngredients
  }
   let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
   let html = template(recipe)
   document.getElementById('main').innerHTML = html
}

function displayEditForm(){

}
