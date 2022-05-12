import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Colors from "../../../constants/Colors";
import styles from "./styles";
import EyeOn from "../../../assets/images/eyeOn.png";
import EyeOff from "../../../assets/images/eyeOff.png";

export class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    pwd: true,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  handlePwdFalse = () => this.setState({ pwd: false });
  handlePwdTrue = () => this.setState({ pwd: true });

  render() {
    const {
      label,
      text,
      edit,
      secureText,
      maskCell,
      maskCpf,
      error,
      style,
      ...props
    } = this.props;
    const { isFocused, pwd } = this.state;

    const labelStyle = {
      position: "absolute",
      left: 0,
      top: isFocused || text ? 0 : 12,
      fontSize: isFocused || text ? 16 : 18,
      fontWeight: '500',
      color: error
        ? Colors.theme.text_error
        : !text
          ? !isFocused
            ? Colors.theme.text
            : Colors.theme.text_selected
          : Colors.theme.text_selected,
    };
    return (
      <View style={styles.container}>
        <Text style={labelStyle}>{label}</Text>
        {!maskCpf ?
          !maskCell ? (
            !secureText ? (
              <TextInput
                {...props}
                style={style ? style : styles.input}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                blurOnSubmit
              />
            ) : (
              <TextInput
                {...props}
                style={style ? style : styles.input}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                blurOnSubmit
                secureTextEntry={pwd}
              />
            )
          )
            : (
              <TextInputMask
                {...props}
                style={styles.input}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                blurOnSubmit
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                }}
              />
            ) : (
            <TextInputMask
              {...props}
              style={styles.input}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
              type={'cpf'}
              secureTextEntry={pwd}
            />
          )}

        {secureText && (
          <TouchableOpacity
            onPress={pwd ? this.handlePwdFalse : this.handlePwdTrue}
          >
            <View style={{ bottom: "20%" }}>
              {!pwd ? <Image source={EyeOff} /> : <Image source={EyeOn} />}
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
