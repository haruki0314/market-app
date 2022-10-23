import React from "react";
import Image from "next/image";

const ReadSingleItem = (props) => {
  return (
    <div>
      <h1>ReadSingleItem</h1>
      <Image
        src={props.singleItem.image}
        width="750px"
        height="500px"
        alt="item-image"
      />
      <h1>{props.singleItem.title}</h1>
      <h2>\{props.singleItem.price}</h2>
      <hr />
      <p>{props.singleItem.description}</p>
    </div>
  );
};
export default ReadSingleItem;

// export const getServerSideProps = (context) => {
//   const response = fetch(`http://localhost:3030/api/item/${context.query.id}`);
//   //   const singleItem = await response.json();
//   //   console.log(context);
//   //   return {
//   //     props: singleItem,
//   //   };
// };
export const getServerSideProps = async (context) => {
  //   alert("a");
  const response = await fetch(
    `http://localhost:3000/api/item/${context.query.id}`
  );
  const singleItem = await response.json();
  console.log(singleItem);
  return {
    props: singleItem,
  };
};
