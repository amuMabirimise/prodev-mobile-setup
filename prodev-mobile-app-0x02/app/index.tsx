import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image
                source={require("@/assets/images/Logo.png")}
                style={styles.logo}
              />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>
                The best prices for over 2 million properties worldwide
              </Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Join here
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.continueTextContainer}>
                <Text style={styles.continueText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  companyLogo: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 30,
  },
  textLarge: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textSmall: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  transparentButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 5,
  },
  continueTextContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  continueText: {
    color: "white",
  },
});
