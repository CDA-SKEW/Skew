import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";
import AdminListUsers from "components/admin/AdminListUsers";

const AdminPage = () => {
  return (
    <div>
      <AdminLayout>
        <AdminCardUsers />
        <AdminListUsers />
      </AdminLayout>
    </div>
  );
};

export default AdminPage;
