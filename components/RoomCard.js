import { Text, View, Image } from "react-native";
import style from "../style";
export default function RoomCard({ title }) {
  return (
    <View>
      <Text>{title}</Text>
      {/* <Image source={{ uri: item.photos[1].url }} style={style.roomImage} /> */}
      <RoomCard />
    </View>
  );
}
