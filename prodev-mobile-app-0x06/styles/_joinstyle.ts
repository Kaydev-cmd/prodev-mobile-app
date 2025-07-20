import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  titleTextGroup: {
    marginTop: 20,
  },
  titleText: {
    fontWeight: 700,
    fontSize: 39,
  },
  subText: {
    fontWeight: 400,
    fontSize: 12,
    color: "#7E7B7B",
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 400,
    color: "#7E7B7B",
    marginBottom: 7,
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordControl: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: 300,
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 400,
  },
  signUpGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "absolute",
    left: 77,
    right: 76,
    bottom: 33,
  },
  signUpTitleText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#FFA800",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#E6E6E6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: 500,
    fontVariant: ["small-caps"],
    color: "#C2C2C2",
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "#34967C",
    marginTop: 9,
  },
});

export { styles };
