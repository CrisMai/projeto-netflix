import React from "react";
import './Header.css';

export default () => {
    return (
        <header className="black">
            <div className="header--logo">
                <a href="/">
                <img src="https://upload.wikimedia.org/wikimedia/commons/0/0f/Logo_Netiflix.png" alt="Nettflix" />
                </a>

                <div className="header--user">
                    <a href="/">
                        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                    </a>
                </div>

            </div>
        </header>
    )
}