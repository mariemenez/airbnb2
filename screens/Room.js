import { View, Text, ActivityIndicator } from "react-native";
import useFetch from "../hooks/useFetch";
import RoomCard from "../components/RoomCard";
import MapView from "react-native-maps";
import style from "../style";

export default function Room({ route }) {
  const [data, isLoading] = useFetch(`/rooms/${route.params.id}`);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <RoomCard title={data.title} image={data.photos[1].url} />
      <Text>{data.description}</Text>
      <MapView
        style={style.mapSize}
        initialRegion={{
          latitude: data.location[1],
          longitude: data.location[0],
          latitudeDelta: 0.006,
          longitudeDelta: 0.006,
        }}
      />
    </View>
  );
}
