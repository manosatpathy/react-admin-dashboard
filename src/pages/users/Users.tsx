import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { useState } from "react";
import Add from "./../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "img",
    headerName: "Avatar",
    flex: 1,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar logo" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First Name",
    flex: 1,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last Name",
    flex: 1,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    flex: 2,
    editable: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    flex: 1,
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
