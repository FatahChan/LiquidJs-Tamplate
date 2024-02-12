// modify this liquid object
const liquidObject = {
  text: "Hello from Liquid"
};

document.addEventListener("DOMContentLoaded", function () {
  // Get the body element
  const body = document.body;

  // Get the inner HTML of the body element
  const pageTemplate = body.innerHTML;

  // new Liquid Instance
  const engine = new liquidjs.Liquid();

  // Render the template and set the HTML content of the body element
  engine.parseAndRender(pageTemplate, liquidObject).then((rendered) => {
    body.innerHTML = rendered;
  });
});