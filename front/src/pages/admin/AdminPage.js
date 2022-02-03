import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";

const AdminPage = () => {
  return (
    <AdminLayout>
      <AdminCardUsers />
    </AdminLayout>
  );
};

export default AdminPage;
