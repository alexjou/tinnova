import React, { useState, useEffect, useContext } from "react";
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { FloatingLabelInput } from "../../components/atomes/FloatingInputLabel";
import { LoadingIndicator } from "../../components/atomes/Loading";
import { validateEmail } from "../../utils/utils";
import AuthContext from "../../contexts/auth";


export default function SignIn({ route, navigation }) {
  const { updateUser, createUser } = useContext(AuthContext);

  const data = route?.params;
  console.log('props: ', data)
  const [isSubmiting, setSubmiting] = useState(false);

  const [form, setForm] = useState({
    name: data?.name || "",
    cpf: data?.cpf || "",
    email: data?.email || "",
    phone: data?.phone || "",
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    msg: ""
  });

  async function onUpdatePress() {
    setSubmiting(true);
    var name = form.name.trim();
    var email = form.email.trim();
    var cpf = form.cpf.trim();
    var phone = form.phone.trim();

    var hasError = false;
    var validations = [];

    if (!name || name.length < 3) {
      hasError = true;
      validations["name"] = "Campo deve conter 3 caracteres ou mais";
    };

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

    if (!phone) {
      hasError = true;
      validations["phone"] = "Campo obrigatório";
    } else {
      if (phone.length < 12) {
        hasError = true;
        validations["phone"] = "Telefone inválido";
      }
    }

    if (hasError) {
      setSubmiting(false);
      return setValidation(validations);
    }

    if (!data) {
      const result = await createUser(form);
      if (result) {
        setSubmiting(false);
        setForm({
          name: "",
          cpf: "",
          email: "",
          phone: "",
        })
        navigation.navigate("Home");
      } else {
        setSubmiting(false);
        return setValidation({
          msg: "Erro ao salvar, tente novamente em alguns instantes",
        });
      }
    } else {
      const result = await updateUser(form, data.id);
      if (result) {
        setSubmiting(false);
        navigation.navigate("Home");
      } else {
        setSubmiting(false);
        return setValidation({
          msg: "Erro ao salvar, tente novamente em alguns instantes",
        });
      }
    }
  };
  useEffect(() => {
    setValidation({
      name: "",
      email: "",
      cpf: "",
      phone: "",
    })
  }, [form])

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>Criar Conta</Text>
        </View>

        <View style={styles.subContainer}>
          <View style={!!validation.name ? styles.inputError : styles.input}>
            <FloatingLabelInput
              label="Nome completo (sem abreviações)"
              text={form?.name}
              value={form?.name}
              onChangeText={(name) => setForm({ ...form, name })}
              returnKeyType="next"
              keyboardType={"email-address"}
              secureTextEntry={false}
            />
          </View>

          {!!validation.name && (
            <Text style={styles.validation}>{validation.name}</Text>
          )}

          <View style={!!validation.email ? styles.inputError : styles.input}>
            <FloatingLabelInput
              label="E-mail"
              text={form?.email}
              value={form?.email}
              onChangeText={(email) => setForm({ ...form, email })}
              returnKeyType="next"
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              secureTextEntry={false}
            />
          </View>

          {!!validation.email && (
            <Text style={styles.validation}>{validation.email}</Text>
          )}

          <View style={!!validation.cpf ? styles.inputError : styles.input}>
            <FloatingLabelInput
              label="CPF"
              maskCpf
              secureTextEntry={false}
              text={form?.cpf}
              value={form?.cpf}
              onChangeText={(cpf) =>
                setForm({ ...form, cpf })
              }
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              returnKeyType="next"
            />
          </View>

          {!!validation.cpf && (
            <Text style={styles.validation}>{validation.cpf}</Text>
          )}

          <View style={!!validation.phone ? styles.inputError : styles.input}>
            <FloatingLabelInput
              label="Celular"
              maskCell
              text={form?.phone}
              secureTextEntry={false}
              value={form?.phone}
              onChangeText={(phone) => setForm({ ...form, phone: phone.replace(/-/, "") })}
              returnKeyType="next"
              keyboardType={"phone-pad"}
            />
          </View>

          {!!validation.phone && (
            <Text style={styles.validation}>{validation.phone}</Text>
          )}

          <View style={styles.containerButton}>
            <TouchableOpacity
              disabled={isSubmiting}
              style={styles.firstButton}
              onPress={() => onUpdatePress()}
            >
              <LoadingIndicator isLoading={isSubmiting} />
              {!isSubmiting && (
                <Text style={styles.textFirstButton}>{data ? "Atualizar" : "Cadastrar"}</Text>
              )}
            </TouchableOpacity>

            {!!validation.msg && (
              <Text style={styles.validation}>{validation?.msg}</Text>
            )}

            <TouchableOpacity
              style={styles.seccondButton}
              onPress={() => { data ? navigation.navigate("Home") : navigation.pop() }}
            // onPress={() => setSubmiting(false)}
            >
              <Text style={styles.textSeccondButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}