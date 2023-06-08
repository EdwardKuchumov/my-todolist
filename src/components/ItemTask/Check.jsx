import { VscPass, VscCircleLarge } from "react-icons/vsc";


export const Check = ({isComplited}) => {
          console.log(isComplited)
  return (
    <button>
          {isComplited === true ? <VscPass />: <VscCircleLarge />}
      
    </button>
  );
};
