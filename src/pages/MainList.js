import React from "react";
import { Link } from "react-router-dom";
import { filmsPagePath } from "../components/paths";

function MainList() {
    return (
        <article className="main-films">
            <div className="container" >
                <Link to={filmsPagePath}>
                    <div className="main-films__block" >
                        <div className="main-films__text-block" >
                            <h1 className="main-films__title">About films</h1>
                            <p className='main-films__text'>Lern more about firts trilogys</p>
                           
                        </div>
                    </div>
                </Link>
            </div>
        </article>

    );
}

export default MainList;
