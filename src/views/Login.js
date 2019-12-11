import React, { Component } from "react";
import {
  View,
  Platform,
  Animated,
  Keyboard
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Input from "../components/Input";
import Button from "../components/Button";

class Login extends Component {
  onPressCompleteRegister = () => {
    this.props.navigation.navigate("Home");
  };

  componentWillMount() {
    this.formPosition = new Animated.Value(0);
    this.animatedTitleTopMargin = new Animated.Value(20);
    this.animatedTitleSize = new Animated.Value(70);

    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );

    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  keyboardWillShow = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.formPosition, {
        duration: duration,
        toValue: -hp("5.25%")
      }),
      Animated.timing(this.animatedTitleTopMargin, {
        duration: duration,
        toValue: 0
      }),
      Animated.timing(this.animatedTitleSize, {
        duration: duration,
        toValue: 50
      })
    ]).start();
  };

  keyboardWillHide = event => {
    if (Platform.OS == "android") {
      duration = 100;
    } else {
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.formPosition, {
        duration: duration,
        toValue: 0
      }),
      Animated.timing(this.animatedTitleTopMargin, {
        duration: duration,
        toValue: 20
      }),
      Animated.timing(this.animatedTitleSize, {
        duration: duration,
        toValue: 70
      })
    ]).start();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6"
        }}
      >
        <Animated.View
        style={{
          height: hp("18%"),
          justifyContent: "center",
          paddingHorizontal: hp("2.5%"),
          marginTop: this.animatedTitleTopMargin
         
          // marginTop: Platform.OS == "android" ? hp("3.75%") : null
        }}
        >
            <Animated.Text
            style={{
              fontSize: 30,
              fontWeight: "400",
              alignItems:"center",
              // opacity: this.animatedTitleOpacity
              opacity: 1
            }}>
            All Your School And Related Activites
            </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: this.animatedTitleTopMargin,
            flexDirection: "row",
            alignItems:"center"
            // marginTop: Platform.OS == "android" ? hp("3.75%") : null
          }}
        >
          <Animated.Text
            style={{
              fontSize: 15,
              fontWeight: "100",
              width: wp("30%"),
              // opacity: this.animatedTitleOpacity
              opacity: 1
            }}
          >
            Fall
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: 15,
              fontWeight: "100",
              width: wp("30%"),
              // opacity: this.animatedTitleOpacity
              opacity: 1
            }}
          >
            Spring
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: 15,
              width: wp("30%"),
              fontWeight: "100",
              // opacity: this.animatedTitleOpacity
              opacity: 1
            }}
          >
            Summer
          </Animated.Text>
          
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: this.formPosition
          }}
        >
          {/* form */}
          <Input label="Your name" placeholder="Enter your Full name" />
          <Input label="Your email address" placeholder="Email address" />
          
        </Animated.View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%")
          }}
        >
          
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                paddingBottom: hp("5%")
              }}
            >
              <Button
                fullWidth
                onPress={this.onPressCompleteRegister}
                backgroundColor="#F08C4F"
                text="Submit"
              />
            </View>
          
        </View>
      </View>
    );
  }
}

export default Login;
