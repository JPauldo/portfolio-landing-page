function setId(id) {
  document.getElementById(id).addEventListener("click", linkToProject(id));
}

function linkToProject(id) {
  if (id == "project-main") {
    window.open("https://jpauldo.github.io/prework-study-guide/", '_blank');
  }
  else if (id == "project-2") {
    window.open("https://jpauldo.github.io/horiseon-accessibility-update/", '_blank');
  }
  else if (id == "project-3") {
    window.open("https://us.lifelovingfoods.com/wp-content/uploads/2020/12/under-construction-gif-11.gif", '_blank');
  }
  else if (id == "project-4") {
    window.open("https://i.giphy.com/media/J4JOGkQr4aJlSPqqJz/giphy.webp", '_blank');
  }
  else if (id == "project-5") {
    window.open("https://media.tenor.com/_F7ydXWp7CsAAAAC/thats-so-raven-im-working-on-it.gif", '_blank');
  }
}
