import React, { Component } from 'react';
import SearchBar from '../src/searchBar';
import Script from 'react-load-script';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      query: ''
    };

  }

/**
 * HandleScriptLoad
 * Props it accepts:
 * placesOption (object)
 * fields (array)
 */

  handleScriptLoad = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      this.props.placesOption,
    );

    this.autocomplete.setFields(this.props.fields);

    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }
  
/**
 * HandlePlaceSelect
 * Returns:
 * Address long name
 * The whole address
 * 
 * to the parent component
 */
  handlePlaceSelect = () => {
    const addressObject = this.autocomplete.getPlace();
    console.log(addressObject);
    
    const address = addressObject.address_components;

    if (address) {
        this.props.callbackFromParent(address[0].long_name, addressObject.formatted_address);
    }
  }

/**
 * accepts
 * GOOGLE API KEY
 */

  render() {
    return (
      <div>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <SearchBar id="autocomplete" placeholder="" hinttext="Search City"
          containerStyle={this.props.containerStyle}
          inputStyle = {this.props.inputStyle}
          inputContainer = {this.props.inputContainer}
        />
      </div>
    );
  }
}

export default Search;
