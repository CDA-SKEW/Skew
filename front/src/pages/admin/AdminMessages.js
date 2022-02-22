
import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import MessagesTable from "components/admin/MessagesTable";
import { getListMessages } from "store/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";
import withAdmin from "components/auth/withAdmin";

const AdminMessages = () => {
  /*------------ listMessages import via Store-------------*/
  const listMessages = useSelector((state) => state.admin.listMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMessages());
  }, []);
  
  return (
    <AdminLayout>
      <MessagesTable listMessages={listMessages} />
    </AdminLayout>
  );
};

// export default withAdmin(AdminMessages);
export default AdminMessages;