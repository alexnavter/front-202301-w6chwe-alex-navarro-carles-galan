import { RobotStructure } from "../../types";
import RobotStyled from "./RobotStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    name,
    image,
    specs: { speed, endurance, creationDate },
  },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <RobotStyled className="robot">
        <h1 className="robot__name">{name}</h1>
        <img
          className="robot__photo"
          src={image}
          alt="robot with extended arms"
        />
        <ul className="robot__specs">
          <li className="robot__speed">{speed}</li>
          <li className="robot__endurance">{endurance}</li>
          <li className="robot__creation-Data">{creationDate}</li>
        </ul>
        <div className="robots__actions">
          <button></button>
          <button></button>
        </div>
      </RobotStyled>
    </>
  );
};
export default RobotCard;
