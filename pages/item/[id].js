import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ReadSingleItem = (props) => {
  return (
    <div className="grid-container-si">
      <Head>
        <h1>{props.singleItem.title}</h1>
      </Head>
      <div>
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
        <Link href={`/item/update/${props.singleItem._id}`}>
          <a>アイテム編集</a>
        </Link>
        <Link href={`/item/delete/${props.singleItem._id}`}>
          <a>アイテム消去</a>
        </Link>
      </div>
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
