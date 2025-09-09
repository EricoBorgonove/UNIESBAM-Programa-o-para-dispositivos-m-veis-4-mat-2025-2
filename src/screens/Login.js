import { Image, Text, View, StyleSheet, Button, Alert, TextInput } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/images/amd.png")} />

      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite sua senha"
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Entrar"
            onPress={() => {
              Alert.alert("Login Realizado");
            }}
            color="#1e90ff"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Criar Usuário"
            onPress={() => {
              Alert.alert("Novo Usuário");
            }}
            color="#32cd32"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000ff",
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d7c9c9ff",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#f0eeeeff",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 10,
  },
  input: {
    width: "85%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#1c1c1c",
    color: "#fff",
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "80%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Login;
