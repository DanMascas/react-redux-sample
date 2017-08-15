import React, {Component} from 'react';
export default class Search extends Component {
    render() {
        const {filterVal, filterUpdate}=this.props;
        return (
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
        )
    }
}