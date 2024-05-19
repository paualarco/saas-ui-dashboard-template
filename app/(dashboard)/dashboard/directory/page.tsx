import { Metadata } from "next";

import { ScrollArea } from "@/components/ui/scroll-area";

import { ItemsTable } from "@/components/tables/directory-items-table/items-table";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default async function TaskPage() {
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          {/* <BreadCrumb items={breadcrumbItems} /> */}

          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <ItemsTable />
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
