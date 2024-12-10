import AdminLayout from "@/components/layouts/AdminLayout";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CForm,
  CFormInput,
  CFormSelect,
  CTooltip,
} from "@coreui/react";
import { Button } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  return (
    <CRow>
      <CCol sm={8}>
        <FormCreate />
      </CCol>
    </CRow>
  );
};

const FormCreate = () => {
  return (
    <CCard>
      <CCardHeader as="h5">Create Product Category</CCardHeader>
      <CCardBody></CCardBody>
      <CCardFooter>
        <div className="d-grid d-md-flex gap-2 justify-content-md-end">
          <CTooltip content="Save Data" placement="top">
            <Button
              type="button"
              color="primary"
              icon={<FontAwesomeIcon icon={faFloppyDisk} />}
            >
              Save
            </Button>
          </CTooltip>
          <CTooltip content="Reset Form" placement="top">
            <Button
              type="button"
              className="text-white"
              color="danger"
              icon={<FontAwesomeIcon icon={faRotateLeft} />}
            >
              Reset
            </Button>
          </CTooltip>
        </div>
      </CCardFooter>
    </CCard>
  );
};

Page.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
