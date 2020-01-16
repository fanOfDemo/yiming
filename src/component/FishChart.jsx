import React from "react";

import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line"; //折线图是line,饼图改为pie,柱形图改为bar
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";

class FishChart extends React.Component {
  componentDidMount() {
    let myChart = echarts.init(document.getElementById("main")); //初始化echarts
    myChart.setOption(this.getOption());
  }
  getOption = () => {
    let option = {
      title: {
        text: "鱼和熊掌不可兼得",
        x: "center"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        name: "熊掌",

        data: ["0", "1", "2", "3"]
      },
      yAxis: {
        name: "鱼",
        type: "value"
      },
      series: [
        {
          name: "鱼",
          type: "line", //这块要定义type类型，柱形图是bar,饼图是pie
          data: [600, 500, 300, 0]
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div>
        <div
          id="main"
          option={this.getOption()}
          theme="Imooc"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    );
  }
}

export default  FishChart;