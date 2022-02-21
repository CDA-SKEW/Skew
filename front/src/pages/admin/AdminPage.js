import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import AdminCardUsers from "components/admin/AdminCardUsers";
import withAdmin from "components/auth/withAdmin";

import {
  getListUsers,
  getListJobs,
  getListMessages,
} from "store/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  /*------------ listUsers import via Store-------------*/
  const listUsers = useSelector((state) => state.admin.listUsers);
  const listJobs = useSelector((state) => state.admin.listJobs);
  const listMessages = useSelector((state) => state.admin.listMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUsers());
    dispatch(getListJobs());
    dispatch(getListMessages());
  }, []);

  return (
    <AdminLayout>
      <AdminCardUsers
        listUsers={listUsers}
        listJobs={listJobs}
        listMessages={listMessages}
      />
    </AdminLayout>
  );
};

export default withAdmin(AdminPage);
// export default AdminPage;