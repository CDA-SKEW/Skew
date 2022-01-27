import React from "react";
import UsersTable from "components/admin/UsersTable";
import AdminLayout from "layouts/AdminLayout";

const AdminUsersTable = () => {
  return (
    <div>
      <AdminLayout>
        <UsersTable />
      </AdminLayout>
    </div>
  );
};

export default AdminUsersTable;
