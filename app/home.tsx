import { supabase } from "@/services/supabase";
import { CoffeeShop } from "@/types";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  // สร้าง State เพื่อเก็บข้อมูล coffee_shops ที่ดึงมาจากฐานข้อมูล
  const [shops, setshops] = useState<CoffeeShop[]>([]);

  // ดึงข้อมูล coffe_shops จากฐานข้อมูล และเก็บใน State ที่สร้างไว้
  useEffect(() => {
    const fetchCoffeeShops = async () => {
      const { data, error } = await supabase
        .from("coffee_shops")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        Alert.alert(
          "คำตอบ",
          "เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่อีกครั้ง",
        );
      } else {
        setshops(data);
      }
    };
    // เรียกให้ฟังก์ชั่นดึงข้อมูลให้ทำงาน
    fetchCoffeeShops();
  }, []);

  // สร้าง Component สําหรับแสดงข้อมูลใน FlatList
  const renderShopItem = ({ item }: { item: CoffeeShop }) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() =>
        router.push({
          pathname: "/detail",
          params: {
            id: item.id,
            name: item.name,
            district: item.district,
            description: item.description,
            latitude: item.latitude,
            longitude: item.longitude,
            image_url: item.image_url,
            phone: item.phone,
          },
        })
      }
    >
      <Image
        source={{ uri: item.image_url }}
        style={{ width: 100, height: 100, borderRadius: 5 }}
      />
      <View style={{ marginLeft: 10, justifyContent: "center" }}>
        <Text style={styles.shopname}>{item.name}</Text>
        <Text style={styles.shopdistrict}> 🚩{item.district}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={true}
        data={shops} // กำหนดข้อมูลใน FlatList
        keyExtractor={(item) => item.id} // กำหนด key ใน FlatList
        renderItem={renderShopItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
  },
  shopname: {
    fontFamily: "Kanit_700Bold",
    fontSize: 17,
    color: "#333333",
  },
  shopdistrict: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#333333",
  },
});
