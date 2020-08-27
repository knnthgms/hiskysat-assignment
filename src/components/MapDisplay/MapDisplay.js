import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import CountryMap from "../../data/location";
import "./MapDisplay.css";

class MapDisplay extends React.Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  };

  // componentDidUpdate = (props) => {
  //   let newCountry = props.details.Country;
  //   const { lat, long } = CountryMap.find((w) => (w.name = newCountry));
  //   this.setState({
  //     newCenter: {
  //       lat,
  //       long,
  //     },
  //   });
  //   // this.geocodeAddress(this.props.details);
  // };

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
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

  // geocodeAddress(details) {
  //   const { CompanyName, Address, City, PostalCode, Country } = details;
  //   const address = [CompanyName, Address, City, PostalCode, Country].join(" ");
  //   console.log(window.google.maps.Geocoder);
  //   const geocoder = new window.google.maps.Geocoder();
  //   geocoder.geocode({ address }, (results, status) => {
  //     console.log(results, status);
  //     if (status === "OK") {
  //       resultsMap.setCenter(results[0].geometry.location);
  //       new google.maps.Marker({
  //         map: resultsMap,
  //         position: results[0].geometry.location,
  //       });
  //     } else
  //       alert("Geocode was not successful for the following reason: " + status);
  //   });
  // }

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

  render() {
    const lat = CountryMap.find((w) => w.name === this.props.details.Country)
      .lat;
    const lng = CountryMap.find((w) => w.name === this.props.details.Country)
      .long;
    console.log(this.props.details.Id);
    return (
      <div className="map-display" style={{ width: 500 }}>
        <div className="title">{this.props.listType}</div>
        <Map
          className="map"
          google={this.props.google}
          onClick={this.onMapClicked}
          center={{
            lat,
            lng,
          }}
          style={{
            position: "relative",
            height: 295,
            width: 480,
            marginLeft: 10,
            marginRight: 10,
          }}
          zoom={5}
        >
          <Marker
            name={this.props.details}
            onClick={this.onMarkerClick}
            position={{ lat, lng }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div className="infoWindow">
              <span className="infoWindow-compname">
                {this.props.details.CompanyName}
              </span>
              <span className="infoWindow-contname">
                {this.props.details.ContactName}
              </span>
              <span className="infoWindow-conttitle">
                {this.props.details.ContactTitle}
              </span>
              <span className="infoWindow-contnum">
                {this.props.details.Phone}
              </span>
              <span className="infoWindow-contnum">
                {this.props.details.Fax}
              </span>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
const containerStyle = {
  position: "relative",
  width: 300,
  height: 500,
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  // apiKey: "AIzaSyBLkLHCF7Le_IxAmB3DC32eAQIyQ7ERFdM",
  //   LoadingContainer: LoadingContainer,
  version: 3.31,
  containerStyle: containerStyle,
})(MapDisplay);
