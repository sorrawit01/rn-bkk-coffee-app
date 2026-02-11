// types.ts จะสร้าง type ขึ้นมากใหม่แนปกับข้อมูลใน database

// แนปกับตาราง coffee_shops
export type CoffeeShop = {
  id: string;
  name: string;
  district: string;
  description: string;
  latitude: number;
  longitude: number;
  image_url: string;
  phone: string;
};
