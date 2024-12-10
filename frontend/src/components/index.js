import dynamic from "next/dynamic";
import PropTypes from "prop-types";

export const Datatable = dynamic(() => import("@components/Datatable"));
export const Button = dynamic(() => import("@components/Button"));
