import React, { useEffect, useReducer, useRef } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
  useColorScheme,
} from "react-native";

import { NavigationContainer, useTheme } from "@react-navigation/native";

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Svg, { Path } from "react-native-svg";

import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";

import { Icon } from "@/components/Icon";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { cn } from "@/utils/cn";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs tabBar={(props) => <AnimatedTabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: "You",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name={focused ? "cart" : "cart-outline"}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="category"
          options={{
            title: "Category",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name={focused ? "menu" : "menu-outline"}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </NavigationContainer>
  );
};

const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useColorScheme() ?? "light";

  const reducer = (state: any, action: { x: number; index: number }) => {
    return [...state, { x: action.x, index: action.index }];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({ index }) => index === activeIndex)!.x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <View
      style={[{ paddingBottom: bottom }]}
      className={cn(
        "bg-secondary",
        theme === "dark" ?? "bg-secondary-dark"
      )}
    >
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
      >
        <Path
          fill={Colors[theme].background}
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const { options } = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  const ref = useRef(null);
  const theme = useColorScheme() ?? "light";
  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[animatedComponentCircleStyles]}
        className={cn("flex-1 rounded-full bg-secondary",theme==="dark"??"bg-secondary-dark")}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {options.tabBarIcon ? (
          options.tabBarIcon({
            focused: true,
            color: Colors[theme].primaryForeground,
            size: 24,
          })
        ) : (
          <Text>?</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default App;
