import Navbar from "../navbars/Navbar";
import ProductForm from "../productForm/ProductForm";
import ProductList from "../productList/ProductList.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <ProductForm />

        <hr />

        <ProductList />
      </div>
    </>
  );
}
