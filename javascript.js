const myLibrary =[]
displayBooks()


function Book(name, author, pages, already_read){
    if (!new.target) throw Error('Make sure to use new keyword to instansiate an object!')
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
    toggleRead = function(){
        if(already_read== "true"){
            this.already_read = "false"
        }else if(already_read== "false"){
            this.already_read = "true"
        }
    }
}




const formDialog = document.querySelector("#addBookDialog");
const bookAddForm = document.querySelector(".addBookForm");
const addBookSubmitbtn = document.querySelector(".submit-form-btn")
const closeFormButton = document.querySelector(".closeDialog-btn")

closeFormButton.addEventListener("click" ,() => {
    bookAddForm.reset();
})

bookAddForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const book = new Book(
        document.querySelector("#book-name").value,
        document.querySelector("#book-author").value,
        document.querySelector("#book-pages").value,
        document.querySelector('input[name="finish-book"]:checked')?.value

    );
    createDomArticle(book);
    e.target.reset();
    displayBooks();
    formDialog.close();

   
});






function createDomArticle(book) { 
    
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
    deleteBookBtn.addEventListener('click', (e) =>{
       deleteBook(e)
    } )

    article.setAttribute('data-id', book.id)
    div.classList.add("bookInfoContainer");
    div.append(bookAuthorP, bookPagesP, bookState);
    article.classList.add("card");
    article.append(h3, div, deleteBookBtn);
    myLibrary.push(article)
    console.log(myLibrary)
}



function displayBooks() {
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML = '' 
  
  myLibrary.forEach((book) => {
    mainContent.appendChild(book)
  })

  console.log(mainContent)

}


function deleteBook(e){
    const deleteArticle = e.target.closest('.card');
    console.log(deleteArticle.dataset.id)
    for(let i = 0 ;i < myLibrary.length ;i++){
        if (deleteArticle.id == myLibrary[i].id){
            myLibrary.splice(i,1);
        }
    }
    displayBooks()
}