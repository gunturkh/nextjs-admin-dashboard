import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TodosTable from "@/components/Tables/TodosTable";

export const metadata: Metadata = {
  title:
    "Next.js Dashboard ",
  description: "This is Next.js Home for Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <TodosTable />
      </DefaultLayout>
    </>
  );
}
