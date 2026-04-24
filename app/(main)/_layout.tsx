
import TabBar from "@/src/components/layout/TabBar";
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="home" options={{ title: "Início" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favoritos" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />

    </Tabs>
  );
}