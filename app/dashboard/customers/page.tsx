import { FormattedCustomersTable } from "@/app/lib/definitions";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'customers',
  };

  const customers: FormattedCustomersTable[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      image_url: "/path/to/image.jpg",
      total_invoices: 10,
      total_pending: "$500",
      total_paid: "$1000",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane@example.com",
      image_url: "/path/to/image.jpg",
      total_invoices: 8,
      total_pending: "$200",
      total_paid: "$600",
    },
    // Add more customer objects here...
  ];
  

export default function Page() {
    return (
        <div>
            <CustomersTable customers={customers} />
        </div>
    )
}