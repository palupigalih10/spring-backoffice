import { CContainer } from "@coreui/react";
import { Header, Sidebar, Footer } from "@/components/partials";
import { Provider } from "react-redux";
import admin from "@/app/storage/admin";
import route from "@/app/routes/route";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/coreui/scss/style.scss";

const AdminLayout = ({ children }) => {
  return (
    <Provider store={admin}>
      <div id="root">
        <Sidebar navigation={route.admin} />
        <div className="wrapper d-flex flex-column min-vh-199">
          <Header />
          <div className="body flex-grow-1">
            <CContainer className="px-4 pb-4" lg>
              {children}
            </CContainer>
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default AdminLayout;
