import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/core/AdminCardUsers";
import AdminListUsers from "components/core/AdminListUsers";

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
