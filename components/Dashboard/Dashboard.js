import React, { Component } from "react";
import { Container, Content } from "native-base";
import MenuItem from "../Menu/Menu";
import styles from "./styles";

class Dashboard extends Component {
  static navigationOptions = {
    headerTitle: "Pesquisar"
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <MenuItem navigation={navigation} />
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
