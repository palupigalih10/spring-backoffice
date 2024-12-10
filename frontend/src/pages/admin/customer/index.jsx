import AdminLayout from "@/components/layouts/AdminLayout";

const Page = () => {
  return <h1>Customer list is here</h1>;
};

Page.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;

