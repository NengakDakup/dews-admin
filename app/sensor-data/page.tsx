import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import TableThree from "@/components/Tables/TableThree";
export const metadata: Metadata = {
  title: "Profile Page | Next.js E-commerce Dashboard Template",
  description: "This is Profile page for TailAdmin Next.js",
  // other metadata
};

const Profile = () => {
  return (
    <>
      <Breadcrumb pageName="Sensor Data" />

      <TableThree />
    </>
  );
};

export default Profile;
