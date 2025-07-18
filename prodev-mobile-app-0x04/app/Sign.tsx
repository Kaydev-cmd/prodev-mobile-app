import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/_joinstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Sign = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.iconSection}>
            <Ionicons name="arrow-back" size={25} />
            <Image source={require("@/assets/images/logo-green.png")} />
          </View>
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Sign in to your</Text>
            <Text style={styles.titleText}>Account</Text>
            <Text style={styles.subText}>
              Enter your email address and password to sign in.
            </Text>
          </View>

          {/* Form Group */}
          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                style={styles.formControl}
                keyboardType="email-address"
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Password</Text>
              <View
                style={{
                  position: "relative",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput style={[styles.formPasswordControl, { flex: 1 }]} />
                <FontAwesome
                  name="eye-slash"
                  size={24}
                  color="#7E7B7B"
                  style={{ position: "absolute", right: 10 }}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Sign;
