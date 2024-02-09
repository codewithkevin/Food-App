import { View, Text, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation() as any;

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(6))),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(6.5))),
      360
    );

    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-yellow-400">
      <StatusBar barStyle="light-content" />

      {/*logo image with rings*/}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding }}
        >
          <LottieView
            source={require("../../assets/Loaders/welcome.json")}
            autoPlay
            loop
            style={{
              width: hp(15),
              height: wp(30),
            }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-3">
        <Text
          style={{
            fontSize: hp(7),
          }}
          className="font-bold text-white tracking-widest"
        >
          Foody
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className="text-white tracking-widest font-semibold"
        >
          Food is always right
        </Text>
      </View>
    </View>
  );
};
export default WelcomeScreen;
