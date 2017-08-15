import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Film extends Component {
    render() {
        const {id, film}=this.props;
        return (
            <div>
                <Link to={'/filme/' + film.id}>{film.title}</Link>
            </div>
        )
    }
}