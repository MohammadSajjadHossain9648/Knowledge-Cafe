import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div>
            <div className="py-4 px-7 text-lg font-bold text-blue_violet_color border border-blue_violet_color bg-shade_blue_violet_color rounded-md">Spent time on read : {readingTime} min</div>

            <div className="mt-5 p-6 bg-shade_black_bg_color rounded-md">
                <h1 className="text-lg font-bold">Bookmarked Blogs : {bookmarks.length}</h1>
                <div>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;