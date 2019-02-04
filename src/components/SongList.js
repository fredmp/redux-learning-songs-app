import React from 'react';

import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends React.Component {

  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

const mapDispatchToProps = {
  selectSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
