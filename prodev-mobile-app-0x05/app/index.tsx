import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/hero-icon.png")}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Text Group */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Find Your Favorite Places Here
              </Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>
                  The best prices for over 2
                </Text>
                <Text style={styles.titleSubText}>
                  million properties worldwide
                </Text>
              </View>
            </View>

            {/* Button Group */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => router.push("/join")}
              >
                <Text style={styles.buttonPrimaryText}>Join Here</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => router.push("/Sign")}
              >
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonGroupSubText}>
              <Text style={styles.buttonSecondaryText}>Continue to Home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
