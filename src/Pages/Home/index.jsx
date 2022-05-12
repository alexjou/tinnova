import React, { useContext, useState } from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import AuthContext from "../../contexts/auth";
import { formataCPF, formatPhone } from "../../utils/utils";

export default function Home({ navigation }) {
  const { allUsers, signOut, user } = useContext(AuthContext);

  const logOff = async () => {
    await signOut().then((doc) => { if (doc) { navigation.navigate("Login") } })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cardText}>Olá {user?.name}!</Text>
      <View style={styles.firstLineCard}>
        <Text style={styles.cardText}>Usuários Cadastrados</Text>

        <TouchableOpacity onPress={() => { logOff() }}>
          <Text style={styles.textMiniButton}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allUsers && allUsers?.map((item, index) => (
          <TouchableOpacity onPress={() => navigation.navigate("SignIn", item)} key={index} style={styles.containerComponentCard}>
            <View style={styles.componentCard}>
              <Text style={styles.title}>Nome</Text>
              <Text style={styles.description}>{item.name || "-"}</Text>
            </View>

            <View style={styles.componentCard}>
              <Text style={styles.title}>CPF</Text>
              <Text style={styles.description}>{formataCPF(item.cpf) || "-"}</Text>
            </View>

            <View style={styles.componentCard}>
              <Text style={styles.title}>E-mail</Text>
              <Text style={styles.description}>{item.email || "-"}</Text>
            </View>

            <View style={styles.componentCard}>
              <Text style={styles.title}>Celular</Text>
              <Text style={styles.description}>{formatPhone(item.phone) || "-"}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
};
