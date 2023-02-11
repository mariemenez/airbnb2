import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import style from "../style";
import useFetch from "../hooks/useFetch";
import RoomCard from "../components/RoomCard";

export default function Home() {
  const [data, isLoading] = useFetch("/rooms");

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Text>Je suis la page home</Text>
          {data.map((item) => {
            return <RoomCard title={item.title} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
