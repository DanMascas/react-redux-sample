import React, {Component} from 'react';
import Film from './Film';
export default class FilmeFilter extends Component {
    cautareFilme(data, filter){
        const input = filter.toLowerCase();
        const names = data.filter((film, i) => {
            return (
                    (!film.title.toLowerCase().indexOf(input)
                    || !film.year.toLowerCase().indexOf(input)
                )
            )
                ;
        }).map((film, i) => {
            return (
                <Film
                    id={film.id}
                    key={i}
                    film={film}
                />
            );
        });
        return names;
    }
    render() {
        const {data, filter}=this.props;
        return (
            <div>
                {this.cautareFilme(data, filter)}
            </div>
        )
    }
}