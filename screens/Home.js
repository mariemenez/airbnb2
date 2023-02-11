import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import style from "../style";
import useFetch from "../hooks/useFetch";
import RoomCard from "../components/RoomCard";

export default function Home({ navigation }) {
  const [data, isLoading] = useFetch("/rooms");

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Room", { id: item._id });
                }}
              >
                <RoomCard title={item.title} image={item.photos[1].url} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
