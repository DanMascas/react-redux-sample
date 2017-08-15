import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import FilmeFilter from './FilmeFilter';

// const FilmeList = ({filme}) => {
//     return (
//         <ul className="list-group">
//             {filme.map(film =>
//                 <li className="list-group-item" key={film.id}><Link to={'/filme/' + film.id}>{film.title}</Link></li>
//             )}
//         </ul>
//     );
// };

class FilmeList extends React.Component{
	render(){
		const {filme, filter} = this.props;
		return(
			<FilmeFilter 
				data={filme}
				filter={filter}
			/>
		)
	}
}

FilmeList.propTypes = {
    filme: PropTypes.array.isRequired
};

export default FilmeList;