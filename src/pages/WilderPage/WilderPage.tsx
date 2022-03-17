import React, {FC, useState, useEffect} from "react";
import axios from 'axios';
import "./WilderPage.css";
import WilderCard from "../../components/WilderCard/WilderCard";
import { IWilder } from "../../interfaces";

const WilderPage: FC = () => {
  
  const [wilders,setWilders] = useState<IWilder[]>([]);

  useEffect(() => {
      // const fetchData = async () =>{
      //   try {
      //       const result = await axios.get<{data: IWilder[]}>(`http://localhost:5000/api/wilder/read`).data.result as IWilder[];
      //       console.log(result);
      //       setWilders(result);
      //     } catch (error) {
      //       console.log(error);
      //     }
      // }
    const wildersData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/api/wilder/read`);
        console.log(result);
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    wildersData();

  }, []);

  // console.log(wilders);
  
  return ( 
    <div className="WilderPage">
      <h2>Wilders</h2>
      <div className="Cards-container">
        {wilders.map((wilder) => (
          <WilderCard key={wilder._id} wilders={wilder} />
        ))}
      </div>
    </div>
  );
}
  
export default WilderPage;
