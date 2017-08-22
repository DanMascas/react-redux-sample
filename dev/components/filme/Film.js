import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Film extends Component {
    render() {
        const {id, film}=this.props;
        var stylepoza = {
              width: 100
        };
        var stylelink = {
              textDecoration: 'none'
        };
        var styletitle = {
              textAlign: 'center'
        };
        return (
            // <div>
            //     <Link to={'/filme/' + film.id}>{film.title}</Link>
            // </div>
           	<div className="col-lg-4 col-md-4 col-sm-3">
		    	<div className="thumbnail">
		      		<Link to={'/filme/' + film.id} style={stylelink}>
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