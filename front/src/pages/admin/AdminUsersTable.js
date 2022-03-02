import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import UsersTable from "components/admin/UsersTable";
import { getListUsers } from "store/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";
import withAdmin from "components/auth/withAdmin";

const AdminUsersTable = () => {
  /*------------ listUsers import via Store-------------*/
  const user = useSelector((state) => state.admin.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUsers());
  }, []);

  return (
    <AdminLayout>
      <UsersTable user={user} />
    </AdminLayout>
  );
};

// export default withAdmin(AdminUsersTable);
export default AdminUsersTable;