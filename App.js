import { View, Text, Image } from "react-native";
import MainScreen from "./src/assets/screens/mainScreen";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <Image
          source={require("./src/assets/images/background.png")}
          style={{
            width: "100%",
            height: "100%",
            position:'absolute',
          }}
        />
          <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)']}
          style={{ height: '100%', width: '100%', position: 'absolute' }}
        />
     <MainScreen/>
    </View>
  );
}
