import { View, Text, ActivityIndicator } from "react-native";
import useFetch from "../hooks/useFetch";
import RoomCard from "../components/RoomCard";
export default function Room({ route }) {
  const [data, isLoading] = useFetch(`/rooms/${route.params.id}`);
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <RoomCard title={data.title} image={data.photos[1].url} />
      <Text>{data.description}</Text>
    </View>
  );
}
