import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme.text_button
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
    marginBottom: "10%",
  },
  submitButton: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    marginTop: 30,
    borderRadius: 30,
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
  viewTablet: {
    width: '50%',
    alignSelf: 'center'
  },
  submitText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.theme.text_button,
  },
  validation: {
    paddingLeft: 20,
    marginBottom: -10,
    marginTop: -10,
    color: Colors.theme.text_error,
  },
  seccondButton: {
    flexDirection: 'row',
    borderRadius: 30,
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
