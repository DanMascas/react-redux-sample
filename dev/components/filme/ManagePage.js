import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManageFilmeList from './ManageFilmeList';
import * as actions from '../../actions/filmeActions';
import Search from '../common/Search';

class ManagePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText:''
        }
    }
    componentWillMount() {
        if (this.props.filme[0].id == '') {
            this.props.actions.loadFilme();
        }
    }
    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }
    render() {
        const filme = this.props.filme;
        var styleh1 = {
              marginLeft: 30
        };
        return (
            <div className="col-md-12">
                <h1 style={styleh1}>Manage Filme <Link to={'/manage/new'} className="btn btn-primary">+ Adauga film</Link></h1>
                <Search
                    filterVal={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <br/>
                <div className="col-md-4">
                    <ManageFilmeList 
                        filme={filme}
                        filter={this.state.filterText}
                    />
                </div>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
ManagePage.propTypes = {
    filme: PropTypes.array.isRequired,
    children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    if (state.filme.length > 0) {
        return {
            filme: state.filme
        };
    } else {
        return {
            filme: [{id: '', title: '', year: '',description: '',poster: '',trailer: ''}]
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePage);