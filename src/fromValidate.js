export function validationBook() {
  const authorName = document.getElementById("book-author");
  const bookName = document.getElementById("book-name");
  let validateNoNumArr = [authorName];
  checkMinEmpty(authorName, bookName);

  function checkMinEmpty(...elements) {
    elements.forEach((element) => {
      element.addEventListener("input", (event) => {
        const showErrorP = document.querySelector(
          `#${element.id} + .showError`,
        );
        if (element.validity.valueMissing) {
          userHelp(showErrorP, `${element.name}  cannot be empty!`);
          element.setCustomValidity(`${element.name}  cannot be empty!`);
        } else if (element.validity.tooShort) {
          userHelp(
            showErrorP,
            `${element.name}  needs to be more than  2 characters long!`,
          );
          element.setCustomValidity(
            `${element.name}  needs to be more than  2 characters long!`,
          );
        } else if (validateNoNumArr.includes(element)) {
          validateNoNumbers(element);
        } else {
          userHelp(showErrorP, "That works");
          element.setCustomValidity(``);
        }
      });
    });
  }
}

function validateNoNumbers(element) {
  const checkRegex = /^[a-zA-Z\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/;
  const showErrorP = document.querySelector(`#${element.id} + .showError`);
  if (!checkRegex.test(element.value)) {
    userHelp(showErrorP, `${element.name}  cannot have numbers!`);
    element.setCustomValidity(`${element.name}  cannot have numbers!`);
  } else {
    userHelp(showErrorP, "That works");
    element.setCustomValidity(``);
  }
}

function userHelp(showErrorP, errorMessage) {
  showErrorP.textContent = errorMessage;
}
