const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-white_color mt-4 p-4 border rounded-md">
            <h1>{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;