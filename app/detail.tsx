import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
export default function Detail() {
  const params = useLocalSearchParams();
  // ฟังก์ชั่นเปิดแอปโทรศัพท์
  const handleCalApp = () => {
    const phoneNumber = params.phone as string;
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  // ฟังก์ชั่นเปิดแผนที่
  const handleOpenMapApp = () => {
    // สร้างตัวแปรเพื่อเปิด Google Map
    const googleMap = `https://maps.google.com/?q=${params.latitude},${params.longitude}`;

    // สร้างตัวแปรเพื่อเปิด Apple Map
    const appleMap = `https://maps.apple.com/?q=${params.name}?&ll=${params.latitude},${params.longitude}`;
    Linking.canOpenURL(googleMap).then((supported) => {
      if (supported) {
        Linking.openURL(googleMap);
      } else {
        Linking.openURL(appleMap);
      }
    });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={{ uri: params.image_url as string }}
        style={{ width: "100%", height: 200 }}
      />
      {/* แสดงรายละเอียด */}
      <View style={{ padding: 10, gap: 10 }}>
        <Text
          style={{
            fontFamily: "Kanit_700Bold",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {params.name as string}
        </Text>
        <Text
          style={{
            fontFamily: "Kanit_400Regular",
            fontSize: 16,
            color: "#ABABAB",
          }}
        >
          {params.description as string}
        </Text>
        <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 16 }}>
          {params.district as string}
        </Text>
        <TouchableOpacity
          onPress={handleCalApp}
          style={{
            marginTop: 10,
            paddingVertical: 15,
            backgroundColor: "#14dc35",
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Kanit_400Regular",
              fontSize: 16,
              color: "#fff",
            }}
          >
            {" "}
            📞{params.phone as string}
          </Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: "Kanit_400Regular", fontSize: 16 }}>
          แผนที่ร้าน
        </Text>
        <MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={{
            latitude: parseFloat(params.latitude as string),
            longitude: parseFloat(params.longitude as string),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Marker
          coordinate={{
            latitude: parseFloat(params.latitude as string),
            longitude: parseFloat(params.longitude as string),
          }}
          title={params.name as string}
          description={params.district as string}
          onPress={handleOpenMapApp}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  shopImg: { width: "100%", height: 200 },
});
