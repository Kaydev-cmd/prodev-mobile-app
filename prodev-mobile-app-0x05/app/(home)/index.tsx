import { FILTERS } from "@/constants";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchGroupForm}>
          <View style={styles.searchControlGroup}>
            <View>
              <Text style={styles.searchFormText}>Where to?</Text>
              <TextInput
                style={{ ...styles.searchControl, ...styles.searchFormText }}
                placeholder="Location . Date . Add guest"
              />
            </View>
            <View style={styles.searchButton}>
              <Feather name="search" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: 72, backgroundColor: "white" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  style={{ flex: 1 }}
                  source={require("@/assets/images/mansion.png")}
                  resizeMode="contain"
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView style={styles.listingContainer}>
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show More</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
