import bookmarks_icon from '../../assets/bookmarks_icon.svg'

const Blog = ({blog}) => {
    const {cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div>
            <figure className="rounded-md">
                <img className="w-full h-84" src={cover} alt="blog image" />
            </figure>
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
                        <a href="#">
                            <img src={bookmarks_icon} alt="bookmarks icon image" />
                        </a>
                    </div>
                </div>
                <h1 className="sm: w-full md:w-3/4 text-3xl font-bold">{title}</h1>
                <div className="my-4">
                    {
                        hashtags.map(hashtag => <span className="font-semibold text-shade_black_color mr-3"><a href="#">#{hashtag}</a></span>)
                    }
                </div>
                <button className="btn font-semibold text-blue_violet_color border-b border-blue_violet_color">Mark as read</button>

                <div className='my-8 border border-shade_black_border_color' />
            </div>
        </div>
    );
};

export default Blog;