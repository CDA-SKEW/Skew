import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import UsersTable from "components/admin/UsersTable";
import { getListUsers } from "store/actions/UsersActions";
import { useDispatch, useSelector } from "react-redux";

const AdminUsersTable = () => {
  /*------------ listUsers import via Store-------------*/
  const listUsers = useSelector((state) => state.admin.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUsers());
  }, []);

  return (
    <AdminLayout>
      <UsersTable listUsers={listUsers} />
    </AdminLayout>
  );
};

export default AdminUsersTable;
