import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import JobsTable from "components/admin/JobsTable";
import { getListJobs } from "store/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";

const AdminJobs = () => {
  /*------------ listJobs import via Store-------------*/
  const listJobs = useSelector((state) => state.admin.listJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListJobs());
  }, []);

  return (
    <AdminLayout>
      <JobsTable listJobs={listJobs} />
    </AdminLayout>
  );
};

export default AdminJobs;
