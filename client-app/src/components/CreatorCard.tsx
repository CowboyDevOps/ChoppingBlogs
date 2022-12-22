import defaultPhoto from "../images/defaultPhoto.jpeg";
import { CreatorType } from "../lib/types";
export type CreatorCardType = {
  creator: CreatorType;
};
export const CreatorCard = ({ creator }: CreatorCardType) => {
  return (
    <div className="w-96 h-32 flex items-center rounded-xl bg-gray-50 mt-16">
      <img
        className="w-24 h-24 ml-5"
        src={creator.image ? creator.image : defaultPhoto}
        alt="creator photo"
      />
      <div className="h-full flex flex-col justify-center ml-5">
        <h2>{creator.name}</h2>
        <h3>{creator.stack}</h3>
      </div>
    </div>
  );
};
export default CreatorCard;
