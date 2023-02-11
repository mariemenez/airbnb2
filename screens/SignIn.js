import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import style from "../style";
import Button from "../components/Button";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <View>
        <Text>Formulaire pour sign in</Text>
      </View>
      <View>
        <TextInput
          style={style.textInput}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={style.textInput}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <TouchableHighlight
        onPress={() => {
          alert("ok");
        }}
      >
        <Button title="signIn" />
      </TouchableHighlight>
    </SafeAreaView>
  );
}
