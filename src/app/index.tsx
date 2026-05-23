import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../Component/CustomInput/CustomInput";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



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

      <View style={styles.formBackground}>
        <View style={styles.formBox}>

          <CustomInput label="Email Address"
            leftIcon="mail-outline"
            value={email}
            onChangeText={setEmail}
            placeholder="yourname@example.com"
          />

          <CustomInput label="Password"
            leftIcon="lock-closed-outline"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your password"
          />

        </View>


      </View>


     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height:'59%'
  },

  container: {
    marginTop:80,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText:{
    fontSize:20,
    color:'white'
  },
  subTitle:{
    fontSize:14,
    color:'white',
    marginTop:12
  },
  formBackground:{
    marginTop:20,
    borderRadius:20,
    backgroundColor:'white',
    marginHorizontal:30,
    height:'70%'

  },
  formBox:{
  paddingHorizontal:16,
  marginTop:20
  }
});