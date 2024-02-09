import MapOne from "@/components/Maps/MapOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar Page | Next.js E-commerce Dashboard Template",
  description: "This is Calendar page for TailAdmin Next.js",
  // other metadata
};

const CalendarPage = () => {
  return (
    <>
      <MapOne />
    </>
  );
};

export default CalendarPage;
