import AdminLayout from "@/components/layouts/AdminLayout";
import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import { Button, Datatable } from "@/components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  return (
    <>
      <CCard>
        <CCardHeader as="h5">List Product Category</CCardHeader>
        <CCardBody>
          <div className="d-flex justify-content-end">
            <ProductCategoryAction />
          </div>
          <CategoryTable />
        </CCardBody>
      </CCard>
    </>
  );
};

const ProductCategoryAction = () => {
  return (
    <div className="d-grid d-md-flex gap-2">
      <Button
        color="primary"
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      >
        Search
      </Button>
      <Button
        className="text-white"
        color="success"
        href="product-category/create"
        icon={<FontAwesomeIcon icon={faCirclePlus} />}
      >
        Create
      </Button>
    </div>
  );
};

const CategoryTable = () => {
  const columns = [
    {
      accessorKey: "rowNumber",
      header: "#",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "name",
      header: "Category Name",
    },
    {
      accessorKey: "path",
      header: "Path",
    },
  ];
  const data = [
    { name: "John Doe", path: 25 },
    { name: "Jane Smith", path: 30 },
    { name: "Sam Wilson", path: 22 },
    { name: "John Doe", path: 25 },
    { name: "Jane Smith", path: 30 },
    { name: "Sam Wilson", path: 22 },
    { name: "John Doe", path: 25 },
    { name: "Jane Smith", path: 30 },
    { name: "Sam Wilson", path: 22 },
    { name: "John Doe", path: 25 },
    { name: "Jane Smith", path: 30 },
    { name: "Sam Wilson", path: 22 },
    { name: "John Doe", path: 25 },
    { name: "Jane Smith", path: 30 },
    { name: "Sam Wilson", path: 22 },
    { name: "John Doe", path: 25 },
    { name: "Jane Smith", path: 30 },
    { name: "Sam Wilson", path: 22 },
  ];

  return <Datatable columns={columns} data={data} hover />;
};

Page.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
