import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { useState } from "react";
import Add from "./../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar logo" />;
    },
  },
  { field: "firstName", type: "string", headerName: "First Name", width: 150 },
  { field: "lastName", type: "string", headerName: "Last Name", width: 150 },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 250,
    editable: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
};

export default Users;
