import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { defaultPath, filmsPagePath } from '../components/paths';
import { getFilm } from '../components/requests';
import ListElem from '../modules/ListElem';

export default class FilmPage extends React.Component {
    constructor(props) {
        super(props);
        // { id } = useParams();
        // getFilm(useParams()).then((res) => this.setState({ elem: res }));
        this.state = {
            elem: []
        }
    }
    render() {

        return (
            <div className='container'>
                <Link className='films__back-link' to={filmsPagePath}>
                    {'<- To list'}
                </Link>
                
            </div>
        )
    }

}
