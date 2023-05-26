import React from "react";
import { Link } from "react-router-dom";
import { filmPagePath } from "../components/paths";

export default class ListElem extends React.Component {
    render() {
        const elem = this.props.elem;
        return (
            <li className="films__item card item">
                <h2 className="">Star Wars - {elem.title}</h2>
                <p className="" >Release date: {elem.release_date}</p>
                <p className="" >Legend: {elem.opening_crawl}</p>
                <Link to={filmPagePath + '/1'}>Look more</Link>
            </li >
        )
    }
}