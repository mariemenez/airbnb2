import { Text, View, Image, TouchableOpacity } from "react-native";
import style from "../style";
const RoomCard = ({ title, image }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={{ uri: image }} style={style.roomImage} />
    </View>
  );
};

export default RoomCard;
