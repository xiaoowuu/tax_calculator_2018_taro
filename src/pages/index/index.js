import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import EditItem from "../../components/editItem/editItem"
import check from "../../image/check.png"
import "./index.css"

export default class Index extends Component {

  config = {
    navigationBarTitleText: "首页"
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className="container">
        <View className="items">
          <EditItem title={"税前月薪"} placeholder={"请输入"} inputType={"number"} />
          <EditItem title={"社保个人缴纳"} placeholder={"请输入"} inputType={"number"} />
          <EditItem title={"公积金个人缴纳"} placeholder={"请输入"} inputType={"number"} />
        </View>
        <View className="float-button" onClick={this.commit}>
          <Image className="float-button-icon" src={check} />
        </View>
      </View>
    )
  }

  commit() {
    console.log("commit")
  }
}