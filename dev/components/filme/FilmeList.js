import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import FilmeFilter from './FilmeFilter';

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