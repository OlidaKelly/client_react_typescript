import React from "react";
import './WilderCard.css';
import { IWilder } from "../../interfaces";

interface IProps {
  wilders: IWilder;   
}

const CardWilder = ({wilders}: IProps) => (
    <div className="WilderCard">
      <img src={wilders.image} alt="avatar" />
      <h3>
        {wilders.name}, {wilders.city}
      </h3>
      <p className="description">{wilders.description}</p>
      <h3>Wild Skills</h3>
      <div className="skills-container">
        {wilders.skills.map((skill) => (
          <div className="skills">
            <p>{skill.title}</p>
            <span className="votes">{skill.votes}</span>
          </div>
        ))}
      </div>
    </div>
  ) 

export default CardWilder;