import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";

const kind = [
    {
        id: 1,
        name: "CourseA"
      },
      {
        id: 2,
        name: "CourseB"
      },
      {
        id: 3,
        name: "CourseC"
      },
      {
        id: 4,
        name: "Homeworks"
      },
      {
        id: 5,
        name: "Sports"
      },
      {
        id: 6,
        name: "Work"
      },
      {
        id: 7,
        name: "Food"
      },
      {
        id: 8,
        name: "Apartment"
      },
      {
        id: 9,
        name: "Car"
      },
      {
        id: 10,
        name: "Movies"
      },
      {
        id: 11,
        name: "Laundry"
      },
      {
        id: 12,
        name: "Friends"
      },
      {
        id: 13,
        name: "Family"
      },
      {
        id: 14,
        name: "Github"
      }
];

class TimeandMoney extends Component {
  state = {
    currentIndex: 0
  };

  renderItemList = () => {
    return kind.map((item, i) => {
        return (
          <ItemList
            onPress={() =>
              this.props.navigation.navigate("Detail", {
                detailName: item.name,
              })
            }
            key={item.id}
            name={item.name}
          />
        );
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default TimeandMoney;
