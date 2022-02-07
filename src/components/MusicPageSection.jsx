import React from "react";

class MusicPageSection extends React.Component {
  render() {
    return (
      <div
        id="container-div"
        style={{
          backgroundColor: this.props.bgColor,
          paddingTop: this.props.paddingTop,
        }}
      >
        <div id="title-div">
          <h2 id="title">{this.props.title}</h2>
        </div>
        <div id="music-div">
          <iframe
            src={this.props.musicLink}
            width="100%"
            height="590px"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default MusicPageSection;
