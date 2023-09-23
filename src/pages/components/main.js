import { useContext } from "react";
import { styled } from "styled-components";
import { Themecontext } from "../../context/Themecontext";

const Main = ({ product, id, dispatch, check }) => {
  // const del = () => {
  //   const deleteproduct = shoppinglist.filter((el) => el.id !== list.id);
  //   dispatch(deleteproduct);
  // };
  const { isdark } = useContext(Themecontext);
  return (
    <Wrapper>
      <span
        style={{
          textDecoration: check ? "Line-through" : "none",
          color: check ? "gray" : "black",
          color: isdark ? "white" : "black",
        }}
        onClick={() => {
          dispatch({ type: "check-product", payload: { id } });
        }}
      >
        {product}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-product", payload: { id } });
        }}
      >
        삭제
      </button>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
`;
