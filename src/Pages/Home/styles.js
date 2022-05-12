import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({

  container: {
    height: 326,
    padding: 10,
    backgroundColor: Colors.theme.text_button,
  },
  cardText: {
    fontSize: 18,
    marginLeft: 7,
    marginBottom: 10,
    fontWeight: '700',
    color: Colors.theme.black,
    alignSelf: 'center'
  },
  firstLineCard: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textMiniButton: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.theme.black,
  },
  containerComponentCard: {
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
    paddingLeft: 20,
    borderColor: Colors.theme.black
  },
  componentCard: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.theme.black
  },
  description: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.theme.black
  },
})