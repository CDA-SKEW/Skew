import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";
import { Box } from "@mui/material";

const AdminPage = () => {
  return (
    <Box>
      <AdminLayout>
        <AdminCardUsers />
      </AdminLayout>
    </Box>
  );
};

export default AdminPage;
