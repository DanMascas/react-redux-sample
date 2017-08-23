import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var styletextarea = {
      height: '300px',
      width: '100%',
      wordBreak: 'break-word'
    };
    var styletext = {
      color: 'black',
    };
    return (
      <div>
        <form>
          <TextInput
            name="title"
            label="Titlu"
            type='text'
            value={this.props.film.title}
            onChange={this.props.onChange}/>
          <TextInput
            name="year"
            label="An"
            type='text'
            value={this.props.film.year}
            onChange={this.props.onChange}/>
          <TextArea
            name="description"
            label="Descriere"
            rows="4"
            value={this.props.film.description}
            onChange={this.props.onChange}/>
          <TextInput
            name="poster"
            label="Poster"
            type='text'
            value={this.props.film.poster}
            onChange={this.props.onChange}/>
          <TextInput
            name="trailer"
            label="Trailer"
            type='text'
            value={this.props.film.trailer}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

FilmForm.propTypes = {
  film: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default FilmForm;

