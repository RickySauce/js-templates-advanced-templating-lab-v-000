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
    description: document.getElementById("recipeDesciption").value,
    ingredients: [
      document.getElementById("recipeIngredient1").value,
      document.getElementById("recipeIngredient2").value,
      document.getElementById("recipeIngredient3").value,
      document.getElementById("recipeIngredient4").value,
      document.getElementById("recipeIngredient5").value
    ]
  }
   let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
   let html = template(recipe)
}

function displayEditForm(){

}
