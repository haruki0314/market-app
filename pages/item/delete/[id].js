import React, { useState } from "react";
import Image from "next/image";
import useAuth from "../../../utils/useAuth";
import Head from "next/head";

const DleteItem = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://market-app-g1bj.vercel.app/api/item/update/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
      console.log(jsonData);
      alert("item update success:" + jsonData);
    } catch (e) {
      console.log(e);
      alert("item update failed");
    }
  };
  const loginUser = useAuth();
  if (loginUser === props.singleItem.email) {
    return (
      <div>
        <Head>
          <title>アイテム消去</title>
        </Head>
        <h1 className="delete-page">アイテム消去</h1>
        <form onSubmit={handleSubmit}>
          <h2>{props.singleItem.title}</h2>
          <Image
            src={props.singleItem.image}
            width="750px"
            height="500px"
            alt="item-image"
          />

          <h3>\{props.singleItem.price}</h3>
          <p>{props.singleItem.price}</p>

          <button>消去</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>権限がありません</h1>
      </div>
    );
  }
};
export default DleteItem;

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
    `https://market-app-g1bj.vercel.app/api/delete/${context.query.id}`
  );
  const singleItem = await response.json();
  console.log(singleItem);
  return {
    props: singleItem,
  };
};
