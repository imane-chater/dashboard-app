import { useState } from "react";
import { toast } from "react-toastify";
import InputNormal from "./inputs/InputNormal";
import InputSelect from "./inputs/InputSelect";
import { useNavigate } from "react-router-dom";

export default function FormAddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const productInfo = { name, price, category, quantity };

    fetch("https://api-dashboard-app.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then(() => {
        toast.success("Add Product successfully.");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Error: " + err.message);
      });
  };

  const options = [
    "Electronics",
    "Clothing",
    "Books",
    "Beauty and Personal Care",
    "Toys and Games",
    "Health and Wellness",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <InputNormal
        type="text"
        name="name"
        label="Name of product"
        value={name}
        handleChange={setName}
      />
      <InputNormal
        type="number"
        name="price"
        label="Price of product"
        value={price}
        handleChange={setPrice}
      />
      <InputSelect
        value={category}
        handleChange={setCategory}
        name="Category"
        options={options}
      />
      <InputNormal
        type="number"
        name="quantity"
        label="Quantity"
        value={quantity}
        handleChange={setQuantity}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
