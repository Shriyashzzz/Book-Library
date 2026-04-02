const myLibrary =[]

function Book(name, author, pages, already_read){
    if (!new.target) throw Error('Make sure to use new keyword to instansiate an object!')
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
}



let bookAddForm = document.getElementById(".addBookForm");
const mainContent = document.querySelector(".mainContent");

addBookSubmitbtn.addEventListener("click", function(e) {
    e.preventDefault();
    const book = new Book(
        document.querySelector("#book-name").value,
        document.querySelector("#book-author").value,
        document.querySelector("#book-pages").value,
        document.querySelector('input[name="finish-book"]:checked')?.value

    );
    addBookToLibrary(book);
    e.target.parentElement.reset();
   
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
    bookPagesP.textContent = `Pages: ${pages}`;
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
