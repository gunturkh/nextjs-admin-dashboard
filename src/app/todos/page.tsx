import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TodosTable from "@/components/Tables/TodosTable";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { HydrationBoundary, QueryClient, dehydrate, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos } from "@/utils/requests";
import { useState } from "react";


export const metadata: Metadata = {
  title: "Next.js Todos",
  description:
    "This is Next.js Todos page for Dashboard",
};
export async function getInitialProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const TodosPage = async () => {

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DefaultLayout>
        <Breadcrumb pageName="Todos" />

        <div className="flex flex-col gap-10">
          <TodosTable />
        </div>
      </DefaultLayout>
    </HydrationBoundary>
  );
};

export default TodosPage;
