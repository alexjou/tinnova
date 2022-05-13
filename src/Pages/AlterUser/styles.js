import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme.text_button
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    margin: 16,
    borderColor: Colors.theme.gray_border,
    borderBottomWidth: 1,
    borderRadius: 8,
    height: 56,
  },
  inputError: {
    paddingHorizontal: 12,
    margin: 16,
    borderBottomWidth: 1,
    borderColor: Colors.theme.border_error,
    borderRadius: 8,
    height: 56,
  },
  validation: {
    paddingLeft: 20,
    marginBottom: -10,
    marginTop: -10,
    color: Colors.theme.text_error,
  },
  subContainer: {
    marginTop: 5,
    padding: 10,
    paddingTop: 0,
    borderRadius: 12,
  },
  containerButton: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstButton: {
    width: '90%',
    margin: 10,
    padding: 10,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme.default,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  textFirstButton: {
    margin: 5,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.theme.text_button,
  },
  seccondButton: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 24,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.theme.background,
    borderWidth: 2,
    borderColor: Colors.theme.default,
  },
  textSeccondButton: {
    margin: 5,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.theme.default,
  },
});
