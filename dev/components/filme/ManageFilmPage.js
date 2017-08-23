import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filmeActions from '../../actions/filmeActions';
import FilmForm from './FilmForm';

class ManageFilmPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
      film: this.props.film,
      isEditing: false,
      saving: false,
    };
    this.toggleEdit=this.toggleEdit.bind(this);
    this.updateFilmState = this.updateFilmState.bind(this);
    this.saveFilm = this.saveFilm.bind(this);
    this.redirect = this.redirect.bind(this);
    this.deleteFilm = this.deleteFilm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.film.id != nextProps.film.id) {
        this.setState({film: nextProps.film});
    }
    this.setState({saving: false, isEditing: false});
  }

  toggleEdit(){
    this.setState({isEditing: !this.state.isEditing})
  }

  saveFilm(event){
        event.preventDefault();
        // this.setState({saving: true});
        this.props.actions.updateFilm(this.state.film);
  }
  redirect() {
    browserHistory.push('/manage');
  }
  deleteFilm() {
    this.props.actions.deleteFilm(this.state.film)
  }

  updateFilmState(event) {    
    const field = event.target.name;
    const film = this.state.film;
    film[field] = event.target.value;
    return this.setState({film: film})
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
    var stylebutton = {
      marginLeft: '10px'
    };
    if (this.state.isEditing) {
      return(
          <div className="col-md-8 col-md-offset-2">
            <h1>Edit Film</h1>
            <FilmForm
              film={this.state.film}
              onSave={this.saveFilm}
              onChange={this.updateFilmState}
            /> 
          </div>
        )
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.film.title}</h1>
        <br/>
        <div>
          <div className="col-md-4">
            <img style={styleposter} src={this.state.film.poster} />
          </div>
          <div className="col-md-8">
            <iframe style={styleiframe} src={this.state.film.trailer} frameBorder='0' allowFullScreen></iframe>
          </div>
        </div>
        <br/>
        <p style={styletext}><b>An: </b>{this.state.film.year}</p>
        <p style={styletext}><b>Nota imdb: </b>{this.state.film.year}</p>
        <p style={styletext}><b>Descriere: </b>{this.state.film.description}</p>
        <hr/>
        <button className="btn btn-info" onClick={this.toggleEdit}>Edit</button>
        <button style={stylebutton} className="btn btn-danger" onClick={this.deleteFilm}>Delete</button>
      </div>
    );
	}
}
ManageFilmPage.propTypes ={
  film: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
function getFilmById(filme, id) {
    let film = filme.find(film => film.id == id)
    return Object.assign({}, film)
  }
function mapStateToProps(state, ownProps) {  
  let film = {title: '', year: '', description: '', poster: '', trailer:''};
  const filmId = ownProps.params.id;
  if (filmId && state.filme.length > 0) {
    // film = Object.assign({}, state.filme.find(film => film.id == filmId))
    film = getFilmById(state.filme, ownProps.params.id);
  }
  return {film: film};
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFilmPage);