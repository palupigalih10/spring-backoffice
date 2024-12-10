// "use client";
import dynamic from "next/dynamic";
// import Header from "@/components/partials/Header";
// import HeaderDropdown from "@/components/partials/HeaderDropdown";
// import Breadcrumb from "@/components/partials/Breadcrumb";
// import Sidebar from "@/components/partials/Sidebar";
// import SidebarNav from "@/components/partials/SidebarNav";
// import Footer from "@/components/partials/Footer";

const Header = dynamic(() => import("@/components/partials/Header"));
const HeaderDropdown = dynamic(() =>
  import("@/components/partials/HeaderDropdown")
);
const Breadcrumb = dynamic(() => import("@/components/partials/Breadcrumb"));
const Sidebar = dynamic(() => import("@/components/partials/Sidebar"));
const SidebarNav = dynamic(() => import("@/components/partials/SidebarNav"));
const Footer = dynamic(() => import("@/components/partials/Footer"));

export { Header, HeaderDropdown, Breadcrumb, Sidebar, SidebarNav, Footer };
