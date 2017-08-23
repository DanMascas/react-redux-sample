import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ManageFilmeFilter from './ManageFilmeFilter';

class ManageFilmeList extends React.Component{
	render(){
		const {filme, filter} = this.props;
		return(
			<ManageFilmeFilter 
				data={filme}
				filter={filter}
			/>
		)
	}
}

ManageFilmeList.propTypes = {
    filme: PropTypes.array.isRequired
};

export default ManageFilmeList;