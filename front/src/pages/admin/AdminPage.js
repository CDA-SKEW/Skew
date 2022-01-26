import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/core/AdminCardUsers";
import AdminListUsers from "components/core/AdminListUsers";
import AdminStat from "components/core/AdminStat";

const AdminPage = () => {
  return (
    <div>
      <AdminLayout>
        <AdminCardUsers />
        <AdminListUsers />
        <AdminStat />
      </AdminLayout>
    </div>
  );
};

export default AdminPage;
