import React, { useEffect } from "react";
import AdminLayout from "layouts/AdminLayout";
import JobsTable from "components/admin/JobsTable";
import { getListJobs } from "store/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";
import withAdmin from "components/auth/withAdmin";

const AdminJobs = () => {
  /*------------ listJobs import via Store-------------*/
  const job = useSelector((state) => state.admin.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListJobs());
  }, []);

  return (
    <AdminLayout>
      <JobsTable job={job} />
    </AdminLayout>
  );
};

// export default withAdmin(AdminJobs);
export default AdminJobs;
