import React, { useContext, useState, useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import Logo from "../../assets/images/Logo.png";
import AuthContext from "../../contexts/auth";
import { LoadingIndicator } from "../../components/atomes/Loading";
import { FloatingLabelInput } from "../../components/atomes/FloatingInputLabel";
import { validateEmail } from "../../utils/utils";


export default function Login({ navigation }) {
  const { user, login } = useContext(AuthContext);

  const [isSubmiting, setSubmiting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    cpf: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    cpf: "",
    msg: ""
  });

  async function onLoginPress() {
    setSubmiting(true);
    var email = form.email.trim();
    var cpf = form.cpf.trim();

    var hasError = false;
    var validations = [];


    if (!cpf) {
      hasError = true;
      validations["cpf"] = "Campo obrigatório";
    } else {
      if (cpf.length < 14) {
        hasError = true;
        validations["cpf"] = "CPF inválido";
      };
    };

    if (!email) {
      hasError = true;
      validations["email"] = "Campo obrigatório";
    } else {
      if (!validateEmail(email)) {
        hasError = true;
        validations["email"] = "E-mail inválido";
      }
    }

    if (hasError) {
      setSubmiting(false);
      return setValidation(validations);
    }
    await login(form.email, form.cpf).then((doc) => {
      if (doc) {
        setSubmiting(false);
        setForm({
          email: "",
          cpf: "",
        })
        navigation.navigate("Home");
      } else {
        setValidation({
          msg: "E-mail ou CPF inválido, tente novamente em alguns instantes",
        });
        setSubmiting(false);
      }
    })
  }

  useEffect(() => {
    setValidation({
      email: "",
      cpf: "",
    })
  }, [form]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>

      <View style={!!validation?.email ? styles.inputError : styles.input}>
        <FloatingLabelInput
          label="E-mail"
          text={form.email}
          value={form.email}
          returnKeyType="next"
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          onChangeText={(email) => setForm({ ...form, email })}
        />
      </View>

      {!!validation?.email && (
        <Text style={styles.validation}>{validation?.email}</Text>
      )}

      <View style={!!validation?.cpf ? styles.inputError : styles.input}>
        <FloatingLabelInput
          label="CPF"
          secureText={true}
          maskCpf
          text={form.cpf}
          value={form.cpf}
          returnKeyType="send"
          autoCapitalize={"none"}
          onChangeText={(cpf) => setForm({ ...form, cpf })}
        />
      </View>


      {!!validation?.cpf && (
        <Text style={styles.validation}>{validation?.cpf}</Text>
      )}

      {!!validation.msg && (
        <Text style={styles.validation}>{validation?.msg}</Text>
      )}

      <TouchableOpacity
        style={styles.submitButton}
        disabled={isSubmiting}
        onPress={onLoginPress}
      >
        <LoadingIndicator isLoading={isSubmiting} />
        {!isSubmiting && <Text style={styles.submitText}>Entrar</Text>}
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.seccondButton}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.textSeccondButton}>Criar conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};