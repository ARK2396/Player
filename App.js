import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React ,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Orientation from 'react-native-orientation';


export default class App extends Component {
  constructor(props) {
    super(props);
    // console.disableYellowBox = true;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    this.state = {
      device: DeviceInfo.isTablet() ? "tablet" : "mobile"
    };
  }

  componentDidMount() {
     if (this.state.device === "mobile") {
       Orientation.lockToPortrait;
     } else {
       Orientation.unlockAllOrientations();
     }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Music Player!</Text>
      <StatusBar style="auto" />
    </View>
    )
  }
}
registerRootComponent(App);
