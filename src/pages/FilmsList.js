import React from 'react';
import { Link } from 'react-router-dom';
import { defaultPath } from '../components/paths';
import { getFilmsList } from '../components/requests';
import ListElem from '../modules/ListElem';

export default class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        getFilmsList().then((res) => this.setState({ list: res }));
        this.state = {
            list: []
        }
    }
    render() {

        return (
            <div className='container'>
                <Link className='films__back-link' to={defaultPath}>
                    {'<- To main'}
                </Link>
                <ul className='list films__list'>
                    {this.state.list.map((elem) =>
                        <ListElem elem={elem} />
                    )}
                </ul>
            </div>
        )
    }

}
