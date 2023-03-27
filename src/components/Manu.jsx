import React, {useState} from 'react';
import classNames from 'classnames';

function Menu({onClick}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(!isMenuOpen);
        onClick()
    }

    return (
        <div className={"flex items-center text-lg text-gray-700 cursor-pointer"} onClick={handleClick}>
            {isMenuOpen? "Main" : <p>Stations</p>}
            <div
                className="w-9 h-10 flex flex-col justify-center items-end"
            >
                <div
                    className={classNames(
                        'w-3 h-0.5 rounded-full transition-all duration-300 bg-gray-700',
                        {'w-6 rotate-45 translate-y-0.5': isMenuOpen}
                    )}
                ></div>

                <div
                    className={classNames(
                        'w-6 h-0.5 rounded-full mt-1 transition-all duration-300 bg-gray-700',
                        {'-rotate-45 -translate-y-1 ': isMenuOpen}
                    )}
                ></div>
            </div>
        </div>
    );
}

export default Menu;
