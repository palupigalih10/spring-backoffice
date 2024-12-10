import React, { Suspense } from "react";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
// import routes from "../routes";

const AppContent = ({ content }) => {
  return (
    <CContainer className="px-4" lg>
      {content}
    </CContainer>
  );
};

export default React.memo(AppContent);
