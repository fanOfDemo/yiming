import React from "react";
import FishChart from '../component/FishChart';
import ProductChart from "../component/ProductChart";
class Home extends React.Component {
  componentDidMount(){
    
  }

  
  render() {
    return (
      <div>
        <FishChart />
        <ProductChart />
      </div>
    );
  }
}

export default Home;