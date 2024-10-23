const Header = () => {
    return (
        <div className="mt-6 mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <a href="#">
                <img className="h-8" src="../../../public/user.svg" alt="user icon image" />
            </a>
        </div>
    );
};

export default Header;