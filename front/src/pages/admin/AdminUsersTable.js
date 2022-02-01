import React from "react";
// import UsersTable from "components/admin/UsersTable";
import AdminLayout from "layouts/AdminLayout";
import UsersTable from "components/admin/UsersTable";
import { Box } from "@mui/system";

const AdminUsersTable = () => {
  return (
    <Box>
      <AdminLayout>
        <UsersTable />
      </AdminLayout>
    </Box>
  );
};

export default AdminUsersTable;
