import { Link } from "react-router-dom";

function OpenSearch() {
    return (
        <div className="open-search">
            <Link to="/search" className="close-search" >Add a book</Link>
        </div>
    );
};

export default OpenSearch;