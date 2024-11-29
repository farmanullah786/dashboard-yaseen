// Component Imports

import { ColumnDef } from "@tanstack/react-table";
import CompanyListActions from "./company-list-actions";
import { ClientDataTable } from "@/components/data-table/client-data-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";

export type ICompany = {
  customerName: string;
  company: string;
  phoneNumber: string;
  email: string;
};

export const dummyData: ICompany[] = [
  {
    customerName: "John Doe",
    company: "Tech Solutions Ltd.",
    phoneNumber: "+1-123-456-7890",
    email: "john.doe@example.com",
  },
  {
    customerName: "Jane Smith",
    company: "Innovatech Inc.",
    phoneNumber: "+1-987-654-3210",
    email: "jane.smith@example.com",
  },
  {
    customerName: "Alice Johnson",
    company: "FutureTech Co.",
    phoneNumber: "+44-20-7946-0958",
    email: "alice.johnson@example.com",
  },
  {
    customerName: "Bob Brown",
    company: "Green Energy Systems",
    phoneNumber: "+61-2-1234-5678",
    email: "bob.brown@example.com",
  },
  {
    customerName: "Charlie Davis",
    company: "AI Ventures",
    phoneNumber: "+91-98765-43210",
    email: "charlie.davis@example.com",
  },
  {
    customerName: "John Doe",
    company: "Tech Solutions Ltd.",
    phoneNumber: "+1-123-456-7890",
    email: "john.doe@example.com",
  },
  {
    customerName: "Jane Smith",
    company: "Innovatech Inc.",
    phoneNumber: "+1-987-654-3210",
    email: "jane.smith@example.com",
  },
  {
    customerName: "Alice Johnson",
    company: "FutureTech Co.",
    phoneNumber: "+44-20-7946-0958",
    email: "alice.johnson@example.com",
  },
  {
    customerName: "Bob Brown",
    company: "Green Energy Systems",
    phoneNumber: "+61-2-1234-5678",
    email: "bob.brown@example.com",
  },
  {
    customerName: "Charlie Davis",
    company: "AI Ventures",
    phoneNumber: "+91-98765-43210",
    email: "charlie.davis@example.com",
  },
  {
    customerName: "John Doe",
    company: "Tech Solutions Ltd.",
    phoneNumber: "+1-123-456-7890",
    email: "john.doe@example.com",
  },
  {
    customerName: "Jane Smith",
    company: "Innovatech Inc.",
    phoneNumber: "+1-987-654-3210",
    email: "jane.smith@example.com",
  },
  {
    customerName: "Alice Johnson",
    company: "FutureTech Co.",
    phoneNumber: "+44-20-7946-0958",
    email: "alice.johnson@example.com",
  },
  {
    customerName: "Bob Brown",
    company: "Green Energy Systems",
    phoneNumber: "+61-2-1234-5678",
    email: "bob.brown@example.com",
  },
  {
    customerName: "Charlie Davis",
    company: "AI Ventures",
    phoneNumber: "+91-98765-43210",
    email: "charlie.davis@example.com",
  },
];

export const columns: ColumnDef<ICompany>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <CompanyListActions company={row.original} />,
  },
];

const CompanyList = () => {
  return <ClientDataTable columns={columns} data={dummyData || []} />;
};

export default CompanyList;
