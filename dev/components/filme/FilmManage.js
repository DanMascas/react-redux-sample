import React, {Component} from 'react';
import {Link} from 'react-router';
export default class FilmManage extends Component {
    render() {
        const {id, film}=this.props;
        var stylepoza = {
              width: '100%'
        };
        var stylelink = {
              textDecoration: 'none'
        };
        var styletitle = {
              textAlign: 'center'
        };
        return (
           	<div className="col-lg-6 col-md-6 col-sm-12">
		    	<div className="thumbnail">
		      		<Link to={'/manage/' + film.id} style={stylelink}>
		        		<img src={film.poster} alt={film.title} style={stylepoza}/>
		        		<div className="caption" style={styletitle} >
		          			<p><b>{film.title}</b></p>
		        		</div>
		      		</Link>
		    	</div>
		    </div>
        )
    }
}