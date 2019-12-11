import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";

const CATEGORY = [
  "CourseA",
  "CourseB",
  "CourseC"
];

const CourseA = [
    {
        id: 1,
        name: "A for astronomy"
      }
];

const CourseB = [
    {
        id: 1,
        name: "Datatypes"
      },
      {
        id: 2,
        name: "Loops"
      },
      {
        id: 3,
        name: "Branches"
      }
];

const CourseC = [
    {
        id: 1,
        name: "Basic Math Skills"
      },
      {
        id: 2,
        name: "Mostly algebra"
      },
      {
        id: 3,
        name: "Multiply polynomials"
      },
      {
        id: 4,
        name: "Find the roots"
      },
      {
        id: 5,
        name: "Rational polynomials"
      }
];

class Course extends Component {
  state = {
    currentIndex: 0
  };

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 20,
            color: this.state.currentIndex === i ? "#F08C4F" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_CourseA = () => {
    return CourseA.map((item, i) => {
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

  renderItemList_CourseB = () => {
    return CourseB.map((item, i) => {
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

  renderItemList_CourseC = () => {
    return CourseC.map((item, i) => {
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

  renderItemList = () => {
    
    switch (this.state.currentIndex)
    {
        case 0:
            return this.renderItemList_CourseA();
        case 1:
            return this.renderItemList_CourseB();
        case 2:
            return this.renderItemList_CourseC();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#63CBA7",
            flexDirection: "row",
            alignItems:"center"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          
        </View>
        {/* headerScrollHorizontal */}

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

export default Course;
