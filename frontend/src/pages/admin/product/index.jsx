import AdminLayout from "@/components/layouts/AdminLayout";

const Page = () => {
  return <h1>Here to manage products</h1>;
};

Page.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
