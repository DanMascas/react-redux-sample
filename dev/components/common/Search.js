import React, {Component} from 'react';
export default class Search extends Component {
    render() {
        const {filterVal, filterUpdate}=this.props;
        var stylediv = {
              marginLeft: 30
        };
        return (
            <div style={stylediv}>
                <form>
                    <input
                        type="text"
                        ref="filterInput"
                        placeholder="Cauta film"
                        value={filterVal}
                        onChange={() => {
                            filterUpdate(this.refs.filterInput.value)
                        }}
                    />
                </form>
            </div>
        )
    }
}