import React, { Component } from "react";
import { Alert, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Radio } from "@/rn-design";
const RadioButton = Radio.Button;
const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    radioContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    innerStyle: {
        height: 50
    }
});

export default class DemoTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioData: [
                { text: "商家评分", value: "1", disabled: false },
                { text: "个人评分", value: "2", disabled: false }
            ],
            selected: 2
        };
    }

    componentDidMount() {}

    render() {
        // console.log(RadioButton);
        return (
            <View>
                <View style={styles.content}>
                    <View>
                        <Text>测试Radio</Text>
                    </View>
                    <Radio
                        style={styles.radioContent}
                        dataOption={this.state.radioData}
                        options={{ value: "value", text: "content", disabled: "disabled" }}
                        selectedValue={this.state.selected}
                        disabledAll={false}
                        innerStyle={styles.innerStyle}
                        onChange={(item) => {
                            // console.log(item);
                        }}
                        // txtColor="#ff552e"
                    />
                </View>
                {/* <RadioButton /> */}
            </View>
        );
    }
}
