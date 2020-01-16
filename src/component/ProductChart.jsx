import React from "react";

import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar"; //折线图是line,饼图改为pie,柱形图改为bar
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";

class ProductChart extends React.Component {
  componentDidMount() {
    let myChart = echarts.init(document.getElementById("productChart")); //初始化echarts
    myChart.setOption(this.getOption());
  }
  getOption = () => {
    let option = {
      title: {
        text: "机会成本",
        x: "center"
      },
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        name: "A",
        data: ["0", "1", "2", "3"]
      },
      yAxis: {
        name: "B",
        type: "value"
      },
      series: [
        {
          name: "机会成本",
          type: "bar", //这块要定义type类型，柱形图是bar,饼图是pie
          data: ["A", "B", "C", "D"]
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div>
        <div
          id="productChart"
          option={this.getOption()}
          theme="Imooc"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    );
  }
}

export default ProductChart;