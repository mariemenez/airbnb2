import { View, Text, Image } from "react-native";
import style from "../style";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <View>
      <Image source={logo} style={style.headerLogo} />
    </View>
  );
};

export default Header;
