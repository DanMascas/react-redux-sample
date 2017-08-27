import React from 'react';
import {Link} from 'react-router';

export class HomePage extends React.Component {
    render() {
    	var stylePoza= {
	    	height: '400px',
	    	width:'100%'
	    };
	    var styleDivPoza= {
	    	paddingRight:'0px',
	    	paddingLeft:'0px',
	    };
	    var styleDivText= {
	     	textAlign:'center',
	     	fontSize:'20px',
	     	fontWeight:'bold',
	     	paddingTop:'40px',
	    	paddingBottom:'40px',
	    	fontFamily:'Arial',
	    	backgroundColor:'#d1f9e1'
	    };
        return (
        	<div>
	            <div className="row">
	            	<br/>
	            	<div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDRmOTZlOTEtNDdkMS00Yjg4LWJlYjgtZjA2NzkwZjMyNTk2XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQzMTE1NjQwNl5BMl5BanBnXkFtZTgwNTM0NjM5MjI@._V1_SY1000_SX655_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza}className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                 <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxOTk2NTkxNF5BMl5BanBnXkFtZTgwOTUyOTM3MTI@._V1_.jpg"  alt="Responsive image"/>
	                </div>
	            </div>
	            <div style={styleDivText} className="row">
	            	<h1>Libraria ta de filme</h1>
	                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ursus mauris mollis sit amet.</p>
	                <p> Aenean commodo, nisi eu ullamcorper Donec tristique sollicitudin augue. </p>
	                <p>Sed lobortis convallis sem, ut aliquet justo malesuada vel. Nullam non venenatis purus, et posuere ligula.</p>
	            </div>
	            <div className="row">
	            	<div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDRmOTZlOTEtNDdkMS00Yjg4LWJlYjgtZjA2NzkwZjMyNTk2XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQzMTE1NjQwNl5BMl5BanBnXkFtZTgwNTM0NjM5MjI@._V1_SY1000_SX655_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                <div style={styleDivPoza}className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"  alt="Responsive image"/>
	                </div>
	                 <div style={styleDivPoza} className="col-lg-2 col-md-2">
	                	<img style={stylePoza} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxOTk2NTkxNF5BMl5BanBnXkFtZTgwOTUyOTM3MTI@._V1_.jpg"  alt="Responsive image"/>
	                </div>
	            </div>
            </div>
        );
    }
}

export default HomePage;