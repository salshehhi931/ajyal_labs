var headline = document.getElementById("headline");
var button1 = document.getElementById("button1");
var listitems = document.getElementById("list").getElementsByTagName("li");

for (i = 0; i < listitems.length; i++) {
  listitems[i].addEventListener("click", activateItem);
}
function activateItem() {
  headline.innerHTML = this.innerHTML;
}
button1.addEventListener("click", createNewItem);
function createNewItem() {
  //   var span = document.createElement("span");
  //   var txt = document.createTextNode("New item");
  //   span.appendChild(txt);
}
