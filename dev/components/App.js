import React, {PropTypes} from 'react';
import Header from './common/Header';
// import '../stiluri/index.css';


export class App extends React.Component {
    render() {
        var style = {
              marginTop: 30
        };
        return (
            // <div className="container-fluid">
            <div>
                <div className='row'>
                    <Header location={this.props}/>
                </div>
	            <div className='row' style={style}>
	            	{this.props.children}
	            </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;