import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";
import { getListUsers } from "store/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  
  /*------------ listUsers import via Store-------------*/
  const listUsers = useSelector((state) => state.admin.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUsers());
  }, []);
  return (
    <AdminLayout>
      <AdminCardUsers listUsers={listUsers} />
    </AdminLayout>
  );
};

export default AdminPage;
