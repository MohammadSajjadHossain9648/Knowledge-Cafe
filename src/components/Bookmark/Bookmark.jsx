import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white_color mt-4 p-4 border rounded-md">
            <h1>{title}</h1>
        </div>
    );
};


Bookmark.PropTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;