const Header = () => {
    return (
        <div className="animate-fade-in">
            {/* Top bar */}
            <div className="bg-lime-300 bg-[url(/60-lines.png)] shadow-sm">
                <div className="mx-auto max-w-screen flex items-center justify-between px-3 sm:px-4 py-2">
                    <div className="w-20 sm:w-24" />
                    <div className="text-center font-bold text-base sm:text-lg tracking-wide">
                        COURSEY.CODES
                    </div>
                    <div className="w-20 sm:w-24 flex justify-end">
                        <a
                            href="https://github.com/MrPiThon/coursey-codes-next"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800 text-white px-2.5 sm:px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-300 text-xs sm:text-sm font-semibold active:scale-[0.98]"
                        >
                            Repo
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile-only message bar */}
            <div className="block md:hidden bg-gray-900 text-white text-center text-sm py-2 px-3">
                For the best viewing experience, please visit the website on your computer
            </div>
        </div>
    );
};

export default Header;
