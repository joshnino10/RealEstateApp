import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomInput from "../../Component/CustomInput/CustomInput";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [agreeError, setAgreeError] = useState("");

  const handleSubmit = () => {
    setEmailError("");
    setPasswordError("");
    setAgreeError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (!agree) {
      setAgreeError("You must agree to continue");
      valid = false;
    }

    if (!valid) return;

    console.log("Signin Successful");
  };

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
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <CustomInput
            label="Password"
            leftIcon="lock-closed-outline"
            rightIcon="eye-outline"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

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
              By continuing you agree to our{" "}
              <Text style={styles.spanText}>
                Terms of Services
              </Text>{" "}
              and{" "}
              <Text style={styles.spanText}>
                Privacy Policy
              </Text>
            </Text>
          </TouchableOpacity>

          {agreeError ? (
            <Text style={styles.errorText}>{agreeError}</Text>
          ) : null}

          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.signin}>Signin</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.or}>Or</Text>
            <View style={styles.divider} />
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.SocialMedia}>
            <Image
              style={styles.img}
              source={require("../../assets/images/goggle icon.png")}
            />
            <Text style={styles.continue}>
              Continue with Google
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
    height: "64%",
  },

  formBox: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  forgetPassword: {
    textAlign: "right",
    color: "#1A934E",
    marginBottom: 10,
  },

  errorText: {
    color: "red",
    fontSize: 12,
   
    marginBottom: 10,
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

  spanText: {
    color: "#1A934E",
  },

  btn: {
    borderRadius: 10,
    height: 40,
    marginTop: 15,
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 1.2,
    shadowRadius: 4,
    justifyContent: "center",
    backgroundColor: "#1A934E",
  },

  signin: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },

  or: {
    marginHorizontal: 20,
    color: "#999",
    fontSize: 14,
  },

  SocialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "85%",
  },

  img: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  continue: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
  },
});