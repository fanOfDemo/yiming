import React from "react";
import FishChart from '../component/FishChart';
import ProductChart from "../component/ProductChart";
import HelloTypeScript from "../pages/HelloTypeScript.tsx"
class Home extends React.Component {
  componentDidMount(){
    
  }

  
  render() {
    return (
      <div>
        <FishChart />
        <ProductChart />
        <HelloTypeScript/>
        
      </div>
    );
  }
}

export default Home;