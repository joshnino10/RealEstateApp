import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import CustomInput from "../../Component/CustomInput/CustomInput";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

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
          <CustomInput
            label="Email Address"
            leftIcon="mail-outline"
            value={email}
            onChangeText={setEmail}
            placeholder="yourname@example.com"
          />

          <CustomInput
            label="Password"
            leftIcon="lock-closed-outline"
            rightIcon="eye-outline"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />

          <Text style={styles.forgetPassword}>
            Forgotten Password?
          </Text>

          <TouchableOpacity
            style={styles.agreeContainer}
            onPress={() => setAgree(!agree)}
          >
            <View style={styles.checkBox}>
              {agree && (
                <Ionicons
                  name="checkmark"
                  size={14}
                  color="#1A934E"
                />
              )}
            </View>

            <Text style={styles.agreeText}>
              By continuing you agree to our <Text style={styles.spanText}>Terms of Services </Text>
              and <Text style={styles.spanText}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "59%",
  },

  container: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeText: {
    fontSize: 20,
    color: "white",
  },

  subTitle: {
    fontSize: 14,
    color: "white",
    marginTop: 12,
  },

  formBackground: {
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 30,
    height: "60%",
  },

  formBox: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  forgetPassword: {
    textAlign: "right",
    color: "#1A934E",
    marginBottom: 20,
  },

  agreeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },

  checkBox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },

  agreeText: {
    flex: 1,
    fontSize: 12,
    color: "#999797",
   
  },
  spanText:{
    color:'#1A934E'
  }
});