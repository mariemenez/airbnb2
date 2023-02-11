import { Text, View } from "react-native";
import style from "../style";

const Button = ({ title }) => {
  return (
    <View style={style.button}>
      <Text style={style.buttonText}>{title}</Text>
    </View>
  );
};

export default Button;
