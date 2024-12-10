import { usePathname } from "next/navigation";
import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

// const currentPath = usePathname();

const Breadcrumb = () => {
  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
    </CBreadcrumb>
  );
};

export default Breadcrumb;
