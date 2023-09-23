import { styled } from "styled-components";
import { Themecontext } from "../../context/Themecontext";
import { useContext } from "react";

export const Footer = () => {
  const { isdark, setisdark } = useContext(Themecontext);

  const toggletheme = () => {
    setisdark(!isdark);
  };

  return (
    <Footerwrapper
      style={{
        backgroundColor: isdark ? "black" : "white",
        color: isdark ? "white" : "black",
        borderColor: isdark ? "white" : "black",
      }}
    >
      <button onClick={toggletheme}>다크/나이트</button>
    </Footerwrapper>
  );
};

const Footerwrapper = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
