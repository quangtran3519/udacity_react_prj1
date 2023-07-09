import Book from "./Book";


function BookShelvess ({ bookshelf, books, onUpdate })  {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books
                            .filter((book) => book.shelf === bookshelf.value)
                            .map((book) => <Book key={book.id} book={book} onUpdate={onUpdate} />)
                    }
                </ol>
            </div>
        </div>
    );
};

export default BookShelvess
