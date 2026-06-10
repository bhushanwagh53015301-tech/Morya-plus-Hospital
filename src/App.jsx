import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DepartmentDetailPage } from "@/pages/DepartmentDetailPage";
import { DepartmentsPage } from "@/pages/DepartmentsPage";
import { DoctorsPage } from "@/pages/DoctorsPage";
import { FacilitiesPage } from "@/pages/FacilitiesPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { HomePage } from "@/pages/HomePage";
import { InsurancePartnersPage } from "@/pages/InsurancePartnersPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appointment" element={<HomePage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/insurance-partners" element={<InsurancePartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </>
  );
}
