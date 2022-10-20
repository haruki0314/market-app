const ReadAllitems = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="h1-style">こんにちは</h1>
      {props.allItems.map((item) => (
        <div key={item._id}>
          <img src={item.image} />
          <h2>{item.price}</h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall");
  console.log(response);
  const allItems = await response.json();
  return {
    props: allItems,
  };
};
export default ReadAllitems;
