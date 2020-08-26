import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapDisplay extends React.Component {
  render() {
    const style = { height: 300, width: 300 };
    return (
      <>
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 35.5496939,
            lng: -120.7060049,
          }}
          style={style}
        />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  version: 3.31,
})(MapDisplay);
