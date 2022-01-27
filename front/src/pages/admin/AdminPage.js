import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";
import AdminListUsers from "components/admin/AdminListUsers";
import AdminUsersTable from "./AdminUsersTable";

const AdminPage = () => {
  return (
    <div>
      <AdminLayout>
        <AdminUsersTable />
        <AdminCardUsers />
        <AdminListUsers />
      </AdminLayout>
    </div>
  );
};

export default AdminPage;
