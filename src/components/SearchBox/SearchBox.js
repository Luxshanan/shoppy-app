import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBox extends Component {
    state = { searchTerm: "" }
    onProductSearch = (e) => {
        e.preventDefault()
        window.location.href = '/searchResult?search=' + this.state.searchTerm
    }
    render() {
        const { onProductSearch } = this.props;
        return (
            <div>
                <form className="form-inline my-2 my-lg-0" onSubmit={e => this.onProductSearch(e)}>
                    <div className="input-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                            onChange={(e) => this.setState({ searchTerm: e.target.value })} />
                        <button type="submit" className="btn btn-primary my-2 my-sm-0">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>

            </div>

        );
    }
}

export default SearchBox;