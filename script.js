document.addEventListener("DOMContentLoaded", function () {
  const myLibrary = [];
  const showBtn = document.getElementById("show-dialog");
  const delBtn = document.getElementById("del-dialog");
  const dialog = document.getElementById("dialog");
  const CloseBtn = document.querySelector("#close");
  const AddBtn = document.querySelector("#add");
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const bookList = document.getElementById("book-list");

  // Function to create and display a book entry in the table
  function displayBook(book) {
    const tableRow = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    tableRow.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    tableRow.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    tableRow.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.read ? "Tak" : "Nie";
    tableRow.appendChild(readCell);

    bookList.appendChild(tableRow);
  }

  // Function to add a book to the library and update the table
  function addBookToLibrary(title, author, pages, read) {
    const book = {
      title: title,
      author: author,
      pages: pages,
      read: read,
    };
    myLibrary.push(book); 
    displayBook(book); 
  }

  // Event listeners for button clicks
  showBtn.addEventListener("click", function () {
    dialog.showModal();
  });

  CloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  AddBtn.addEventListener("click", function () {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value); 
    const read = confirm("Czy napewno dodać książke?");
// delete a book and update the table
  function deleteBook(index){
    console.log("Received index:", index); 
    if (confirm(`Delete ${myLibrary[index].title}`) === true) {
      myLibrary.splice(index, 1);
    bookList.innerHTML = "";
    myLibrary.forEach(displayBook);
  }
  }
  delBtn.addEventListener("click", () => {
    const index = parseInt(event.target.dataset.index); // Assuming index is stored in a data-index attribute
  
    deleteBook(index);
  });
  // Event listeners for button clicks
  showBtn.addEventListener("click", function () {
  dialog.showModal();
  });


    addBookToLibrary(title, author, pages, read);

    // Clear input fields after adding the book
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";

    const output = document.querySelector("output");
    output.textContent = "Ksiązka została dodana!";
  });

  
  console.log(myLibrary);
});
