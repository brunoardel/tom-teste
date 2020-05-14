import React, { Component } from "react";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from "./styles";

export default class Search extends Component {


  render () {
    return (
      <GooglePlacesAutocomplete
        placeholder='Pesquisar aqui...'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key 
        listViewDisplayed={false}    // true/false/undefined
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          this.props.notifyChange(details.geometry.location);
        }
        }

        query={{
          key: '',
          language: 'en'
        }}

        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={300}

        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 1,
            marginBottom: 15
          }
        }}

      />
    );
  }
}
