import React from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

const style = {
  width: 500,
  height: 450,
  marginLeft: 15,
};
class MapDisplay extends React.Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  };

  componentDidUpdate = (props) => {
    console.log(this.props);
    this.geocodeAddress(this.props.details);
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  // function initMap() {
  //     const map = new google.maps.Map(document.getElementById("map"), {
  //       zoom: 8,
  //       center: { lat: -34.397, lng: 150.644 }
  //     });
  //     const geocoder = new google.maps.Geocoder();
  //     document.getElementById("submit").addEventListener("click", () => {
  //       geocodeAddress(geocoder, map);
  //     });
  //   }

  geocodeAddress(details) {
    const { CompanyName, Address, City, PostalCode, Country } = details;
    const address = [CompanyName, Address, City, PostalCode, Country].join(" ");
    console.log(window.google.maps.Geocoder);
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      console.log(results, status);
      // if (status === "OK") {
      //   resultsMap.setCenter(results[0].geometry.location);
      //   new google.maps.Marker({
      //     map: resultsMap,
      //     position: results[0].geometry.location,
      //   });
      // } else
      //   alert("Geocode was not successful for the following reason: " + status);
    });
  }

  //   geocodeAddress(geocoder, resultsMap) {
  //     // const address = document.getElementById("address").value;
  //     const {
  //       CompanyName,
  //       Address,
  //       City,
  //       PostalCode,
  //       Country,
  //     } = this.props.details;
  //     const address = [CompanyName, Address, City, PostalCode, Country].join(" ");
  //     geocoder.geocode({ address }, (results, status) => {
  //       if (status === "OK") {
  //         resultsMap.setCenter(results[0].geometry.location);
  //         new google.maps.Marker({
  //           map: resultsMap,
  //           position: results[0].geometry.location,
  //         });
  //       } else
  //         alert("Geocode was not successful for the following reason: " + status);
  //     });
  //   }

  //   render() {
  //     return (
  //       <div className="map-display" style={{ width: 500 }}>
  //         <div className="title">{this.props.listType}</div>
  //         <Map google={this.props.google} zoom={15} style={style} />
  //       </div>
  //     );
  //   }
  render() {
    if (!this.props.loaded) return <div>Loading...</div>;
    const {
      CompanyName,
      Address,
      City,
      PostalCode,
      Country,
    } = this.props.details;

    console.log(CompanyName);
    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: "100%", position: "relative", width: "100%" }}
        zoom={14}
      >
        <Marker
          name="SOMA"
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          name="Dolores park"
          onClick={this.onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <Marker name="Current location" onClick={this.onMarkerClick} />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  //   LoadingContainer: LoadingContainer,
  version: 3.31,
})(MapDisplay);
