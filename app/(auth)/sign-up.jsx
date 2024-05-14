import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async() => {
    if (!form.username || !form.email || !form.password) {
      Alert("All fields are required");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(
        form.email,
        form.password,
        form.username
      )

      router.replace("/home");
      
    } catch (error) {
      Alert.alert("Error", error.message);

    }
    finally {
      setIsSubmitting(false);
    }
    // createUser()


  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl font-psemibold text-semibold text-white mt-10">
            Create an account
          </Text>
          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry={true}
          />
          <CustomButton
            title="Sign Up"
            containerStyles={`mt-7`}
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View
          className="justify-center pt-5 flex-row gap-2"
          >
            <Text
            className="text-lg text-gray-100 font-pregular"
            >
               Already  have an account?{" "}
             
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
