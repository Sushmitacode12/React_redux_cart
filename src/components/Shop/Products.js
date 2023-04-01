import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_Products = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "MY First Book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "MY Second Book I ever wrote",
    },
    {
      id: "p3",
      price: 7,
      title: "My Third Book",
      description: "MY Third Book I ever wrote",
    },
  ];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_Products.map((product) => {
          return (
            <div key={product.id}>
              <ProductItem
                id={product.id}
                price={product.price}
                title={product.title}
                description={product.description}
              />
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;