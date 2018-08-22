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
  let recipe = {
    name: document.getElementById("recipeName").value,
    description: document.getElementById("recipeDesciption").value;
  }
}

function displayEditForm(){
  
}
