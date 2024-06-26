"use client";
import { directoryItemsApi } from "@/app/api/api";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";

export function ItemsTable() {
  const { data, isLoading } = directoryItemsApi.useListDirectoryItemsQuery({
    limit: 10,
    offset: 0,
    parent_id: undefined,
  });

  return (
    <div className="h-full flex-1 flex-col space-y-8 md:flex">
      <DataTable
        data={data?.items ?? []}
        columns={columns}
        isLoading={isLoading}
      />
    </div>
  );
}
