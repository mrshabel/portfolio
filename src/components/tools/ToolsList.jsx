import ToolsCard from "./ToolsCard";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFirebase,
} from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";

const ToolsList = () => {
  return (
    <section className="flex flex-wrap gap-3 p-2">
      <ToolsCard name="html" icon={<AiFillHtml5 />} />
      <ToolsCard name="css" icon={<DiCss3Full />} />
      <ToolsCard name="javascript" icon={<BiLogoJavascript />} />
      <ToolsCard name="tailwind css" icon={<BiLogoTailwindCss />} />
      <ToolsCard name="react js" icon={<BiLogoReact />} />
      <ToolsCard name="node js" icon={<BiLogoNodejs />} />
      <ToolsCard name="mongodb" icon={<BiLogoMongodb />} />
      <ToolsCard name="express js" icon={<BiLogoNodejs />} />
      <ToolsCard name="firebase" icon={<BiLogoFirebase />} />
      <ToolsCard name="supabase" icon={<RiSupabaseFill />} />
    </section>
  );
};

export default ToolsList;
