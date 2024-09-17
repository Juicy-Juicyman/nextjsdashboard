import { fetchAllCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { FormattedCustomersTable } from '@/app/lib/definitions';

export const metadata: Metadata = {
  title: 'customers',
};

export default async function Page() {
  try {
    const customers: FormattedCustomersTable[] = await fetchAllCustomers();

    return (
      <div>
        <CustomersTable customers={customers} />
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch customers:', error);
    return <div>Error fetching customers</div>;
  }
}
