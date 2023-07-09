import "./css/App.css";
import BookCollection  from "./components/BookCollection";
import SearchBooks from "./components/SearchBook";
import OpenSearch from "./components/Search";
import * as BooksAPI from "./api/BooksAPI";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";


const bookshelfs = [
  { name: "Currently Reading", value: "currentlyReading" },
  { name: "Want To Read", value: "wantToRead" },
  { name: "Read", value: "read" },
];

function App() {

  const [books, setBooks] = useState([]);

  const updateBookShelf = (book, newShelf) => {
    const updateBook = async () => {
      let isNewBook = true;
      await BooksAPI.update(book, newShelf);

      let newBooks = books.map(b => {
        if (b.id === book.id) {
          isNewBook = false;
          return { ...b, shelf: newShelf };
        }
        return b;
      });

      if (isNewBook) {
        book.shelf = newShelf;
        newBooks = [...newBooks, book];
      }

      setBooks(newBooks);
    }
    updateBook();
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await BooksAPI.getAll();
      setBooks(books);
    }
    getAllBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <BookCollection
                bookshelfs={bookshelfs}
                books={books}
                onUpdate={updateBookShelf}
              />
              <OpenSearch />
            </div>
          }
        />
        <Route
          path="/search"
          element={<SearchBooks books={books} onUpdate={updateBookShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
