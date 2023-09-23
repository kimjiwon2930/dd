import { useContext, useReducer, useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { styled } from "styled-components";
import { Themecontext } from "../context/Themecontext";
import Main from "./components/main";
// import { styled } from "styled-components";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-product":
      const product = action.payload.product;
      const newproduct = {
        id: state.count + 1,
        product,
        check: false,
      };
      return {
        count: state.count + 1,
        shoppinglist: [...state.shoppinglist, newproduct],
      };

    case "delete-product":
      return {
        count: state.count - 1,
        shoppinglist: state.shoppinglist.filter(
          (el) => el.id !== action.payload.key
        ),
      };

    case "check-product":
      return {
        count: state.count,
        shoppinglist: state.shoppinglist.map((list) => {
          if (list.id === action.payload.id) {
            return { ...list, check: !list.check };
          }
          return list;
        }),
      };

    default:
      return state;
  }
};

const initialvalue = {
  count: 0,
  shoppinglist: [
    // {
    //   id: Date.now(),
    //   product: "떡볶이",
    //   check: false,
    // },
  ],
};

// const handleKeyPress = (e) => {
//   if (e.key === "Enter") {

//   }
// };
const Shopping = () => {
  const data = useContext(Themecontext);
  console.log(data);

  const [product, setproduct] = useState("");
  const [shoppinginfo, dispatch] = useReducer(reducer, initialvalue);
  const { isdark } = useContext(Themecontext);

  return (
    <>
      <Header
        product={product}
        setproduct={setproduct}
        dispatch={dispatch}
        shoppinginfo={shoppinginfo}
      />

      <MainWrapper
        style={{
          backgroundColor: isdark ? "black" : "white",
          borderColor: isdark ? "white" : "black",
        }}
      >
        {shoppinginfo.shoppinglist.map((list) => {
          return (
            <Main
              key={list.id}
              id={list.id}
              product={list.product}
              dispatch={dispatch}
              check={list.check}
            />
          );
        })}
      </MainWrapper>
      <Footer />
    </>
  );
};
export default Shopping;

const MainWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;
