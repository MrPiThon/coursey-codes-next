const Header = () => {
    return (
        <div className="bg-lime-300 bg-[url(/60-lines.png)] shadow-sm">
            <div className="flex items-center justify-between px-4 py-2">
                {/* Left spacer (keeps center text centered) */}
                <div className="w-24"></div>

                {/* Center text */}
                <div className="text-center font-bold text-lg tracking-wide">
                    COURSEY.CODES
                </div>

                {/* Right GitHub link */}
                <div className="w-24 flex justify-end">
                    <a
                        href="https://github.com/MrPiThon/coursey-codes-next"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-300 text-sm font-semibold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008 10.95c.585.108.8-.25.8-.562v-2.016c-3.262.71-3.95-1.574-3.95-1.574-.533-1.354-1.3-1.716-1.3-1.716-1.063-.727.08-.71.08-.71 1.175.083 1.792 1.204 1.792 1.204 1.046 1.79 2.742 1.273 3.41.973.105-.757.41-1.273.747-1.566-2.604-.297-5.342-1.302-5.342-5.797 0-1.282.457-2.332 1.205-3.154-.12-.298-.522-1.494.113-3.11 0 0 .983-.315 3.225 1.205a11.3 11.3 0 015.875 0c2.24-1.52 3.225-1.205 3.225-1.205.635 1.616.233 2.812.113 3.11.748.822 1.205 1.872 1.205 3.154 0 4.505-2.74 5.497-5.352 5.79.422.36.8 1.08.8 2.177v3.223c0 .31.215.667.807.554A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Repo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
