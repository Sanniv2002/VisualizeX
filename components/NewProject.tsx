import { useEffect } from "react";
import { projectProps, MAX_PROJECTS } from "./Projects";

interface Props {
  newProject: projectProps;
  setProps: React.Dispatch<
    React.SetStateAction<projectProps>
  >;
  float: boolean;
  setFloat: React.Dispatch<React.SetStateAction<boolean>>;
  setProjects: React.Dispatch<React.SetStateAction<projectProps[]>>;
  Projects: projectProps[];
}

export default function NewProject(props: Props) {

    const coolProjectNames = [
        "CodeCrafters",
        "TechTonic",
        "CyberSphere",
        "PixelPulse",
        "DataDynasty",
        "FutureForge",
        "CodeCanvas",
        "ByteBlaze",
        "CodeComet",
        "PixelPioneer",
        "TechTerra",
        "CodeChronicle",
        "ByteBurst",
        "TechTide",
        "CodeCrusade",
        "PixelPantheon",
        "CodeCatalyst",
        "ByteBrigade",
        "TechTempest",
        "CodeCraze",
        "PixelPalace",
        "CodeCraft",
        "TechTrek",
        "ByteBlast",
        "CodeChampion",
        "PixelParadise",
        "CodeCollective",
        "TechTrend",
        "ByteBoom",
        "CodeConquer",
        "PixelPassion",
        "PubJoy",
        "SwiftWing",
        "DataDart",
        "ByteForge",
        "CodeNinja",
        "PixelForge",
        "CodePulse",
        "PixelSpark",
        "ByteWave",
        "CodeWizard",
        "PixelNest",
        "TechPixel",
        "ByteWorks",
        "CodeBliss",
        "TechZest",
        "PixelWise",
        "ByteSwift",
        "CodeHive",
        "TechVibe",
        "RedShift",
    ];

  useEffect(() => {
    
      const name = coolProjectNames[Math.floor(Math.random() * coolProjectNames.length)]
    props.setProps({ name: name, description: "", CreatedAt: new Date().toString() });
  }, []);

  return (
    <div className="w-96 h-96 rounded-xl bg-gray-800 flex flex-col p-8">
      <h2 className="text-white text-lg font-semibold text-center pb-4">
        Create a new project
      </h2>
      <h2 className="text-white text-sm mb-2">Name</h2>
      <input
        onChange={(e) =>
          props.setProps({
            name: e.target.value,
            description: props.newProject.description,
            CreatedAt: props.newProject.CreatedAt
          })
        }
        className="bg-gray-700 p-2 rounded-lg text-gray-300"
        type="text"
        maxLength={12}
      />
      <h2 className="text-white text-sm mb-2 mt-3">Description</h2>
      <textarea
        maxLength={40}
        onChange={(e) =>
          props.setProps({
            name: props.newProject.name,
            description: e.target.value,
            CreatedAt: props.newProject.CreatedAt
          })
        }
        rows={3}
        className="bg-gray-700 p-2 rounded-lg text-gray-300 mb-10"
      />
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => props.setFloat(!props.float)}
          className="p-2 bg-red-600 text-white text-md rounded-md hover:bg-red-500 transition-colors duration-300"
        >
          Cancel
        </button>
        <button onClick={() => { if(props.newProject.name && !props.newProject.name.startsWith(" ")){
             props.setProps({
                name: props.newProject.name,
                description: props.newProject.description,
                CreatedAt: new Date().toString()
             })
             props.setProjects([...props.Projects, props.newProject])
             props.setFloat(!props.float);
        }
        }} className="p-2 bg-blue-700 text-white text-md rounded-md hover:bg-blue-600 transition-colors duration-300">
          Create
        </button>
      </div>
    </div>
  );
}
