import PropTypes from 'prop-types';
import bookmarks_icon from '../../assets/bookmarks_icon.svg'

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='space-y-4'>
            <img className="h-80 w-full rounded-md" src={cover} alt="blog image" />
            <div>
                <div className="my-8 flex justify-between items-center">
                    <figcaption className="flex items-center justify-center">
                        <img className="h-12 w-12 rounded-full" src={author_img} alt="author profile picture" />
                        <div className="font-medium ml-3">
                            <p className="text-xl font-bold">{author}</p>
                            <p className="text-sm font-semibold text-shade_black_color">
                                {posted_date}
                            </p>
                        </div>
                    </figcaption>
                    <div className="flex">
                        <p className="font-medium text-shade_black_color mr-2">{reading_time} min read</p>
                        <button onClick={() => handleAddToBookmarks(blog)}>
                            <img src={bookmarks_icon} alt="bookmarks icon image" />
                        </button>
                    </div>
                </div>
                <h1 className="sm: w-full md:w-4/5 lg:w-3/4 text-3xl font-bold">{title}</h1>
                <div className="my-4">
                    {
                        hashtags.map((hashtag, idx) => <span key={idx} className="font-semibold text-shade_black_color mr-3"><a href="#">#{hashtag}</a></span>)
                    }
                </div>
                <button onClick={() => handleMarkAsRead(id, reading_time)} className="btn font-semibold text-blue_violet_color border-b border-blue_violet_color">Mark as read</button>

                <div className='my-8 border border-shade_black_border_color' />
            </div>
        </div>
    );
};


Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;