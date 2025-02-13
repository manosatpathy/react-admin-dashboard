import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "img",
    headerName: "Image",
    flex: 1,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    flex: 2,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    flex: 1,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    flex: 1,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
};

export default Products;
