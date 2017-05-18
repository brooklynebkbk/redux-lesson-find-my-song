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
      e.preventDefault() // Prevent Page From Reloading
      this.props.getSongs(this.state.songTitle); // Call api with song title
  }

  handleSearchFieldChange({ target }) {
    this.setState({ songTitle: target.value });
  }

  renderSongs() {
    const { songs } = this.props;
    if(songs && songs.length > 0) return songs.map((songs, key) => {
        return <SongCard key={key} {...songs} />
    })
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
