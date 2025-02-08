import { ImSpinner8 } from "react-icons/im";

interface Props {
  customStyles?: string;
}

const Spinner = ({ customStyles }: Props) => {
  return (
    <ImSpinner8
      className={`text-black text-2xl mx-auto animate-spin ${customStyles}`}
    />
  );
};

export default Spinner;
