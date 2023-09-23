import { styled } from "styled-components";
import { Themecontext } from "../../context/Themecontext";
import { useContext } from "react";

export const Header = ({ product, setproduct, dispatch, shoppinginfo }) => {
  const { isdark } = useContext(Themecontext);
  return (
    <Wrapper
      style={{
        backgroundColor: isdark ? "black" : "white",
        color: isdark ? "white" : "black",
        borderColor: isdark ? "white" : "black",
      }}
    >
      <h2>쇼핑 리스트</h2>
      <p>장바구니 갯수:{shoppinginfo.count}</p>
      <Div>
        <input
          type="text"
          placeholder="품목을 입력해주세요"
          value={product}
          onChange={(e) => setproduct(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "add-product", payload: { product } });
            setproduct("");
          }}
        >
          추가
        </button>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const Div = styled.div`
  display: flex;
`;
