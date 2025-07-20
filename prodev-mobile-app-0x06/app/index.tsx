import { Redirect } from "expo-router";
import "../styles/global.css";

export default function Index() {
  return (
    <Redirect href="/(home)" />
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1 }}>
    //     <ImageBackground
    //       source={require("@/assets/images/hero-icon.png")}
    //       style={styles.backgroundImageContainer}
    //       resizeMode="cover"
    //     >
    //       <View style={styles.container}>
    //         <View style={styles.logoContainer}>
    //           <Image source={require("@/assets/images/Logo.png")} />
    //         </View>

    //         {/* Text Group */}
    //         <View style={styles.titleContainer}>
    //           <Text style={styles.titleText}>
    //             Find Your Favorite Places Here
    //           </Text>
    //           <View style={styles.titleSubTextContainer}>
    //             <Text style={styles.titleSubText}>
    //               The best prices for over 2
    //             </Text>
    //             <Text style={styles.titleSubText}>
    //               million properties worldwide
    //             </Text>
    //           </View>
    //         </View>

    //         {/* Button Group */}
    //         <View style={styles.buttonGroup}>
    //           <TouchableOpacity
    //             style={styles.buttonPrimary}
    //             onPress={() => router.push("/Join")}
    //           >
    //             <Text style={styles.buttonPrimaryText}>Join Here</Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             style={styles.buttonSecondary}
    //             onPress={() => router.push("/Sign")}
    //           >
    //             <Text style={styles.buttonSecondaryText}>Sign In</Text>
    //           </TouchableOpacity>
    //         </View>
    //         <View style={styles.buttonGroupSubText}>
    //           <Text
    //             style={styles.buttonSecondaryText}
    //             onPress={() => router.push("/")}
    //           >
    //             Continue to Home
    //           </Text>
    //         </View>
    //       </View>
    //     </ImageBackground>
    //     {/* <HomeRootLayout /> */}
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}
