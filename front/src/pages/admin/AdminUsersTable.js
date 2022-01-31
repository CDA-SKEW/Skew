import React from "react";
// import UsersTable from "components/admin/UsersTable";
import AdminLayout from "layouts/AdminLayout";
import UsersTable from "components/admin/UsersTable";

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