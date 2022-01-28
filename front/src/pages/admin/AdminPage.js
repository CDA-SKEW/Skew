import React from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";

const AdminPage = () => {
  return (
    <div>
      <AdminLayout>
        <AdminCardUsers />
      </AdminLayout>
    </div>
  );
};

export default AdminPage;
