let conv = document.getElementById("convert-btn");
conv.addEventListener("click", Conve);

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function pascalCase(str) {
  return (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");
}

function snakeCase(str) {
  const strArr = str.split(" ");
  const snakeArr = strArr.reduce((acc, val) => {
    return acc.concat(val.toLowerCase());
  }, []);
  return snakeArr.join("_");
}

function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function Conve() {
  let inp = document.getElementById("text").value;

  document.getElementById("camel-case").innerText = camelize(inp);
  document.getElementById("pascal-case").textContent = pascalCase(inp);
  document.getElementById("snake-case").textContent = snakeCase(inp);
  document.getElementById("screaming-snake-case").textContent =
    snakeCase(inp).toUpperCase();
  document.getElementById("kebab-case").textContent = kebabCase(inp);
  document.getElementById("screaming-kebab-case").textContent =
    kebabCase(inp).toUpperCase();
}
