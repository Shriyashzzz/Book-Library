import { Book } from "./book.js";

export let myLibrary = loadInitialProjects();
export function loadInitialProjects() {
  if (localStorage.getItem("myBooks")) {
    const parsed = JSON.parse(localStorage.getItem("myBooks"));
    return parsed.map((b) => Object.assign(new Book(), b));
  } else {
    return [];
  }
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("myBooks", JSON.stringify(myLibrary));
});
