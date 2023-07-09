import BookShelvess from "./BookShelves";

function BookCollection ({ bookshelfs, books, onUpdate }) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        bookshelfs.map((bookshelf) =>
                            <BookShelvess
                                key={bookshelf.value}
                                bookshelf={bookshelf}
                                books={books}
                                onUpdate={onUpdate}
                            />)
                    }
                </div>
            </div>
        </div >
    );
}

export default BookCollection