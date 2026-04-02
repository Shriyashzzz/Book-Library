const myLibrary =[]

function Book(name, author, pages, already_read){
    if (!new.target) throw Error('Make sure to use new keyword to instansiate an object!')
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
}



const bookAddForm = document.querySelector(".addBookForm");
const mainContent = document.querySelector(".mainContent");
const addBookSubmitbtn = document.querySelector(".submit-form-btn")
const closeFormButton = document.querySelector(".closeDialog-btn")

closeFormButton.addEventListener("click" ,() => {
    bookAddForm.reset()
})

bookAddForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const book = new Book(
        document.querySelector("#book-name").value,
        document.querySelector("#book-author").value,
        document.querySelector("#book-pages").value,
        document.querySelector('input[name="finish-book"]:checked')?.value

    );
    addBookToLibrary(book);
    e.target.reset();

   
});

function addBookToLibrary(book) {
    myLibrary.push(book);
    insertBookInDom(book);
}




function insertBookInDom(book) { 
    const { name, author, pages, already_read } = book;  

    const article = document.createElement("article");
    const h3 = document.createElement('h3');
    const div = document.createElement("div");
    const bookAuthorP = document.createElement('p');
    const deleteBookBtn = document.createElement("button");
    const bookPagesP = document.createElement("p");
    const bookState = document.createElement("p");
    const svgImg = document.createElement('img');

    h3.textContent = name;
    bookAuthorP.textContent = `Author: ${author}`;
    bookPagesP.textContent = `Page: ${pages}`;
    bookState.textContent = `Status: ${already_read === "true" ? "Finished" : " Not Finished"}`;
    bookState.classList.add("bookStateP");
    svgImg.src = 'icons/delete.svg';
    svgImg.classList.add("icons", "deleteicon");
    deleteBookBtn.classList.add("book-delete-btn");
    deleteBookBtn.appendChild(svgImg);
    deleteBookBtn.addEventListener('click', () => article.remove());

    div.classList.add("bookInfoContainer");
    div.append(bookAuthorP, bookPagesP, bookState);
    article.classList.add("card");
    article.append(h3, div, deleteBookBtn);
    mainContent.appendChild(article);
}
