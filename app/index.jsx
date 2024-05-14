import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
      // contentContainerStyle={{
      //   height: '100%',
      // }}
      >
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-center text-sm  mt-7 font-pregular">
              Where creative meets innovation : embark on a journey of endless
              possibilities with Aora.
            </Text>
            <CustomButton
            title="Continue with Email"
            handlePress={()=> router.push('/sign-in')}
            containerStyles="mt-7 w-full" 
            textStyles={
              "text-primary font-semibold text-lg"
            }/>
                      
        </View>
      </ScrollView>
      <StatusBar 
      backgroundColor="#161622"
      style="light"
      />
    </SafeAreaView>
  );
}