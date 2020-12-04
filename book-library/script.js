const modal = document.querySelector('#modal');
const form = document.querySelector('.modal-form');
const submit = document.querySelector('.submit-btn');
const addBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('#close');

let myLibrary = JSON.parse(localStorage.getItem('library')) || [];

class Book {
  constructor(title, author, pages, status, isbn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.isbn = isbn;
  }
}

function addBookToLibrary() {
  const list = document.getElementById('book-list');
  // Create row for book 
  const row = document.createElement('tr');

  // row.setAttribute('data-index', `${Date.now()}`);
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').checked;
  const isbn = document.querySelector('#isbn').value;

  // Insert column 
  row.innerHTML = `
  <td>${title}</td>
  <td>${author}</td>
  <td>${pages}</td>
  <td>${status ? 'Read' : 'Not Read'}</td>
  <td>${isbn}</td>
  <td><i class="fas fa-trash-alt delete"></i></td>
  `;
  list.appendChild(row);

  const book = new Book(title, author, pages, status, isbn);
  // book.id = {${id}};
  myLibrary.push(book);
  localStorage.setItem('library', JSON.stringify(myLibrary));
  formClose();

  // Delete Book
  // list.addEventListener('click', e => {
  //   if (e.target.classList.contains('delete')) {
  //     e.target.parentElement.parentElement.remove();
  //   }
  //   myLibrary.forEach((item, index) => {
  //     if (item.isbn === e.target.parentElement.previousElementSibling.textContent) {
  //       myLibrary.splice(index, 1);
  //     }
  //   });
  //   localStorage.setItem('library', JSON.stringify(myLibrary));
  // });

};


window.addEventListener('load', () => {

  myLibrary.forEach((book) => {
    const list = document.getElementById('book-list');
    // Create row for book 
    const row = document.createElement('tr');

    // Insert column 
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.status ? 'Read' : 'Not Read'}</td>
    <td>${book.isbn}</td>
    <td><i class="fas fa-trash-alt delete"></i></td>
    `;
    list.appendChild(row);

    // Delete Book
    list.addEventListener('click', e => {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
      }
      myLibrary.forEach((item, index) => {
        if (item.isbn === e.target.parentElement.previousElementSibling.textContent) {
          myLibrary.splice(index, 1);
        }
      });
      localStorage.setItem('library', JSON.stringify(myLibrary));
    });
  });
});

function formClose() {
  modal.classList.remove('show');
  addBtn.classList.remove('animate');
  form.reset();
}

// ===Event listeners ===
// Click add button to toggle modal
addBtn.addEventListener('click', () => {
  modal.classList.toggle('show');
  addBtn.classList.toggle('animate');
  form.reset();
});

// Click close button on the modal to close modal
closeBtn.addEventListener('click', formClose);

// Click submit button to add details to the array
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

//===Optional event to close modal when click outside the modal===
//===Disable/Enable as needed
// window.addEventListener('click', (e) => {
//   if (e.target == modal) {
//     formClose();
//   } else {
//     false;
//   };
// });

/*========if two icons used for toggle
let clicked = true;
function formToggle() {
  // Change icon
  if (!clicked) {
    clicked = true;
    btn.querySelector('i.fas').classList.add('fa-plus');
    btn.querySelector('i.fas').classList.remove('fa-times');
  } else {
    clicked = false;
    btn.querySelector('i.fas').classList.add('fa-times');
    btn.querySelector('i.fas').classList.remove('fa-plus');
  }
} */