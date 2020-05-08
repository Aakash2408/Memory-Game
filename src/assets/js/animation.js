function flip(element) {
  if (element.nodeName === "DIV") {
    element.parentElement.classList.add("flipped");
  } else if (element.nodeName === "LI") {
    element.classList.add("flipped");
  }
}

function unflip(element) {
  if (element.nodeName === "DIV") {
    element.parentElement.classList.remove("flipped");
  } else if (element.nodeName === "LI") {
    element.classList.remove("flipped");
  }
}

function shake(element) {
  if (element.nodeName === "DIV") {
    element.parentElement.classList.add("shake");
  } else if (element.nodeName === "LI") {
    element.classList.add("shake");
  }
}

function unshake(element) {
  if (element.nodeName === "DIV") {
    element.parentElement.classList.remove("shake");
  } else if (element.nodeName === "LI") {
    element.classList.remove("shake");
  }
}

function highlight(element) {
  if (element.nodeName === "DIV") {
    element.classList.add("highlight");
  }
}

function unhighlight(element) {
  if (element.nodeName === "DIV") {
    element.classList.remove("highlight");
  }
}

export default {
  flip,
  unflip,
  shake,
  unshake,
  highlight,
  unhighlight
};
