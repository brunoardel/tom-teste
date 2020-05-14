import React, { Component } from "react";
import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";

class Menu extends Component {
  /**
   *  @param {String} name Icon name
   *  @param {String} text place name
   *  @param {Number} size Icon size
   *  @param {String} color Icon color
   *  @param {String} type Icon type
   *  @param {String} placeType Place type to look up
   
   */
  getItem = (name, text, size, color, type, placeType) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate("MapView", {
          placeType: placeType,
          placeName: text
        })
      }
    >
      <View style={styles.iconStyle}>
        <Icon
          name={name}
          size={size}
          reverse
          color={color}
          type={type}
          raised
        />
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {this.getItem("beer", "Bares", 40, "#f50", "font-awesome", "bar")}
          {this.getItem("bank", "Bancos", 40, "#031068", "font-awesome", "banco")}
          {this.getItem("coffee","Cafés", 40,"#300423","font-awesome","cafe")}
          {this.getItem("md-fitness", "Academias", 40, "#0B6CFB", "ionicon", "academia")}
          {this.getItem("bus","Ônibus",40,"#056C6B","font-awesome","onibus")}
          {this.getItem("hotel","Hotéis",40,"#0A23A6","font-awesome","hotel")}
          {this.getItem("local-pharmacy","Farmácias",40,"#f50","materialicons","farmacia")}
          {this.getItem("movie", "Cinemas", 40, "#000000", "materialicons", "cinema")}
          {this.getItem("favorite", "Favoritos", 40, "#f66", "materialicons")}
        </View>
      </View>
    );
  }
}

export default Menu;
