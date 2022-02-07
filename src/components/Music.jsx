import React from "react";
import MusicPageSection from "./MusicPageSection";

class DanceMusic extends React.Component {
  render() {
    return (
      <div>
        <MusicPageSection
          title="Dance Music"
          bgColor="#b0658c"
          paddingTop="4px"
          musicLink="https://open.spotify.com/embed/playlist/2gmQ0znG7gGhlqktoTOM5W?utm_source=generator&theme=0"
        />
      </div>
    );
  }
}

export default DanceMusic;
