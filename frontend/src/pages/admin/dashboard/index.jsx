import AdminLayout from "@/components/layouts/AdminLayout";

const Page = () => {
  return <h1>Welcome to dashboard</h1>;
};

Page.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
