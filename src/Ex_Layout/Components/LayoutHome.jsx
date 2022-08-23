import React from "react";
import LayoutContent from "./LayoutContent";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutNav from "./LayoutNav";
export default function LayoutHome() {
  return (
    <div className="bg-dark">
      <p>LayoutHome</p>
      <LayoutHeader></LayoutHeader>
      <div className="row">
        <div className="col-lg-5 col-md-4">
          <LayoutNav></LayoutNav>
        </div>
        <div className="col-lg-7 col-md-8">
          <LayoutContent></LayoutContent>
        </div>
      </div>
      <LayoutFooter></LayoutFooter>
    </div>
  );
}
