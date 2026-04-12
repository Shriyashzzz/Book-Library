export class Book {
  constructor(name, author, pages, already_read) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
  }

  toggleRead() {
    if (this.already_read == "Finished") {
      this.already_read = "Not Finished";
    } else if (this.already_read == "Not Finished") {
      this.already_read = "Finished";
    }
  }
}
