import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filmeActions from '../../actions/filmeActions';

class FilmPage extends React.Component {
	constructor(props){
		super(props);
		this.state={
			film: this.props.film
		}
	}
	render() {
        var styleposter = {
            width: '100%',
            height:'350px'
        };
        var styleiframe = {
            width: '100%',
            height: '350px'
        };
        var styletext = {
            fontSize: '16px'
        };
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.props.film.title}</h1>
                <br/>
                <div>
                  <div className="col-md-4">
                    <img style={styleposter} src={this.props.film.poster} />
                  </div>
                  <div className="col-md-8">
                    <iframe style={styleiframe} src={this.props.film.trailer} frameBorder='0' allowFullScreen></iframe>
                  </div>
                </div>
                <br/>
                <p style={styletext}><b>An: </b>{this.props.film.year}</p>
                <p style={styletext}><b>Nota imdb: </b>{this.props.film.nota}</p>
                <p style={styletext}><b>Descriere: </b>{this.props.film.description}</p>
            </div>
        );
	}
}
FilmPage.propTypes ={
	film: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {  
  let film = {title: '', year: '', description: '', poster: '', trailer:'',nota:''};
  const filmId = ownProps.params.id;
  if (state.filme.length > 0) {
    film = Object.assign({}, state.filme.find(film => film.id == filmId))
  }
  return {film: film};
}

export default connect(mapStateToProps)(FilmPage);