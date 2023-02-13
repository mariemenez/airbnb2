import { useContext, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import style from "../style";
import Button from "../components/Button";
import { AuthContext } from "../AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userToken, setUserToken] = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      const tokenRecu = response.data.token;
      setUserToken(tokenRecu);
      // console.log(userToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Formulaire pour sign in</Text>
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          style={style.textInput}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          autoCapitalize="none"
          style={style.textInput}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Button title="signIn" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button title="se deconnecter" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
