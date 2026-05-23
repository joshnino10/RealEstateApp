import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/backgroundColor.png")}
      style={styles.background}
      resizeMode="cover"
      >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subTitle}>Join HomeConnect NG today</Text>
      </View>
     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height:'58%'
  },

  container: {
    marginTop:70,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText:{
    color:'white'
  },
  subTitle:{
    color:'white',
    marginTop:10
  }
});