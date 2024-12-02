import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { LoadingOverlay } from "@mantine/core";
import Layout from "../components/Layout";

const Home = lazy(() => import("../pages/Home"));

enum UserRole {
  Buyer = "BUYER",
  Seller = "SELLER",
  Manager = "MANAGER",
  Admin = "ADMIN",
}

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingOverlay visible={true} />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
