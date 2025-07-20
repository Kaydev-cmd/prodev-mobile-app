import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    height: 120,
    justifyContent: "center",
  },
  searchGroupForm: {
    // justifyContent: "center",
  },
  searchControlGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: "#E9E9E9",
    backgroundColor: "#fff",
  },
  searchFormText: {
    // color: "#E9E9E9",
  },
  searchControl: {},
  searchButton: {
    backgroundColor: "#FFA800",
    padding: 6,
    borderRadius: 50,
  },
  filterGroup: {},
  filterContainer: {},
  listingContainer: {},
  paginationContainer: {},
  showMoreButton: {},
  showMoreButtonText: {},
});

export { styles };
