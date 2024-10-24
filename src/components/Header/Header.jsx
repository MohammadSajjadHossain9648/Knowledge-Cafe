import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className="mt-10 mb-6 pb-8 flex justify-between items-center border-b border-shade_black_border_color">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <a href="#">
                <img className="h-8" src={profile} alt="user profile icon image" />
            </a>
        </div>
    );
};

export default Header;