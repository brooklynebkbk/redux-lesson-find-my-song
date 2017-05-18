import React, { Component } from "react";

// Redux Connect Allows us to inject props and action creators in our component via props
import { connect } from 'react-redux';

import * as actions from '../actions';

// Other Components
import SongCard from "./songCard";


class Main extends Component {
  constructor() {
    super();

    this.state = { songTitle: "" };
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {

  }

  handleSearchFieldChange({ target }) {

  }

  renderSongs() {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Search For A Song</label>
          <div className="form-group">
            <input
              placeholder="Search..."
              type="text"
              onChange={this.handleSearchFieldChange}
            />
            <button type="submit">Search</button>
          </div>
        </form>

        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-body">
              { this.renderSongs() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionCreators = {
    ...actions
}

const mapStateToProps = state => ({
    ...state.songs
});

export default connect(mapStateToProps,mapActionCreators)(Main);
