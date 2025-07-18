import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/_joinstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const join = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.iconSection}>
            <Ionicons name="arrow-back" size={25} />
            <Image source={require("@/assets/images/logo-green.png")} />
          </View>
          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create your</Text>
            <Text style={styles.titleText}>Account</Text>
            <Text style={styles.subText}>
              Enter your details to create a new account.
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

            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Re-enter Password</Text>
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

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Divider Group */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          {/* Sign Up Group */}
          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity>
              <View style={styles.secondaryButton}>
                <Image source={require("@/assets/images/google.png")} />
                <Text style={styles.secondaryButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.secondaryButton}>
                <Image source={require("@/assets/images/facebook.png")} />
                <Text style={styles.secondaryButtonText}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default join;
