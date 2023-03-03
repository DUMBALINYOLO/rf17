import react, { useRef, useState, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";
import d from "./d";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
const skillData = [
  { skill: "Desgin", correct: 8, total: 10 },
  { skill: "Analytics", correct: 12, total: 18 },
  { skill: "Composites", correct: 10, total: 70 },
  { skill: "Carbin Fiber", correct: 9, total: 20 },
  { skill: "Robotics", correct: 9, total: 15 },
  { skill: "3d Printing", correct: 7, total: 17 }
];

const generateSkillColors = (skills) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

  // Shuffle the colors array to ensure that the colors are randomly assigned
  const shuffledColors = shuffle(colors);

  // Create an object that maps each skill to a unique color
  const skillColors = {};
  skills.forEach((skill, index) => {
    skillColors[skill] = shuffledColors[index];
  });

  return skillColors;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i, name: "Python" })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
      }))
  };
}

export default function Graph({ data }) {
  const forceRef = useRef();

  useEffect(() => {
    // forceRef.current.d3Force("gravity").strength(0.05);
    // forceRef.current.d3Force("charge").strength(-300);
    // forceRef.current.d3Force("link").distance(250);
    //forceRef.current.d3Force("charge").distanceMax(150);
  }, []);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  let skills = [];
  for (let skill of skillData) {
    skills.push(skill.skill);
  }
  const skillColors = generateSkillColors(skills);
  let nodesGlobal = skillData.map(({ skill, correct, total }) => ({
    id: skill,
    name: skill,
    visibility: true,
    val: total * 10,
    color: skillColors[skill]
  }));

  useEffect(() => {
    let nodes = skillData.map(({ skill, correct, total }) => ({
      id: skill,
      name: skill,
      visibility: true,
      val: total * 10,
      color: skillColors[skill]
    }));
    setGraphData({
      nodes: nodes,
      links: []
    });
  }, []);

  return (
    <div className="relative shadow-lg   border rounded-lg  bg-cover bg-left flex justify-center p-2   p-2 max-h-[90vh]   overflow-hidden">
      <ForceGraph3D
        height={500}
        nodeOpacity={1}
        backgroundColor={"rgba(0,0,0,0)"}
        nodeThreeObjectExtend={true}
        nodeThreeObject={(node) => {
          const sprite = new SpriteText(` ${node.id}
${node.val}`);

          sprite.color = "#FFFFFF";
          sprite.backgroundColor = "#00000";
          sprite.textHeight = 12;
          sprite.position.x -= 20;
          sprite.position.y = 50;

          return sprite;
        }}
        graphData={graphData}
      />
    </div>
  );
}
