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
import Button from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Home({ navigation }) {
  const [data, isLoading] = useFetch("/rooms");

  const [userToken, setUserToken] = useContext(AuthContext);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>{userToken}</Text> */}
        <TouchableOpacity
          onPress={() => {
            setUserToken(null);
          }}
        >
          <Button title="deconnexion" />
        </TouchableOpacity>
        <View style={style.container}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item._id}
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
