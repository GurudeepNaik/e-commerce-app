import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "../../redux/counterSlice";
import { View, Text, Button } from "react-native";
import { RootState } from "@/redux/store";

const HomeScreen = () => {
  const count = useSelector((state: RootState) => selectCount(state)); // Add state typing if using TS
  const dispatch = useDispatch();

  return (
    <View className="flex-1 items-center justify-center bg-[#604AE6]">
      <Text>Redux Example</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default HomeScreen;
