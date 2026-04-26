import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import AllProducts from "../../src/components/dashboard/AllProducts";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useRouter } from "next/router";
import theme from "../../src/theme/theme";
export default function Index() {
    const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLoggedIn");
    if (!isAdmin) {
      router.push("/admin");
    }
  }, []);

  const products = [
    {
      id: "1",
      name: "Ganesh Jagadale",
      post: "Web Designer",
      pname: "Elite Admin",
      priority: "Low",
      pbg: "primary.main",
      budget: "3.9",
    },
    {
      id: "2",
      name: "Jaykant",
      post: "Project Manager",
      pname: "Real Homes WP Theme",
      priority: "Medium",
      pbg: "secondary.main",
      budget: "24.5",
    },
    {
      id: "3",
      name: "Tejas",
      post: "Project Manager",
      pname: "MedicalPro WP Theme",
      priority: "High",
      pbg: "error.main",
      budget: "12.8",
    },
    {
      id: "4",
      name: "Suyog",
      post: "Frontend Engineer",
      pname: "Hosting Press HTML",
      priority: "Critical",
      pbg: "success.main",
      budget: "2.4",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <AllProducts products={products} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
