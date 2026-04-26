// import { Grid } from "@mui/material";
// import BlogCard from "../../src/components/dashboard/BlogCard";
// import SalesOverview from "../../src/components/dashboard/SalesOverview";
// import DailyActivity from "../../src/components/dashboard/DailyActivity";
// import AllProducts from "../../src/components/dashboard/AllProducts";
// import FullLayout from "../../src/layouts/FullLayout";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../src/theme/theme";
// export default function Index() {
//   const products = [
//     {
//       id: "1",
//       name: "Ganesh Jagadale",
//       post: "Web Designer",
//       pname: "Elite Admin",
//       priority: "Low",
//       pbg: "primary.main",
//       budget: "3.9",
//     },
//     {
//       id: "2",
//       name: "Jaykant",
//       post: "Project Manager",
//       pname: "Real Homes WP Theme",
//       priority: "Medium",
//       pbg: "secondary.main",
//       budget: "24.5",
//     },
//     {
//       id: "3",
//       name: "Tejas",
//       post: "Project Manager",
//       pname: "MedicalPro WP Theme",
//       priority: "High",
//       pbg: "error.main",
//       budget: "12.8",
//     },
//     {
//       id: "4",
//       name: "Suyog",
//       post: "Frontend Engineer",
//       pname: "Hosting Press HTML",
//       priority: "Critical",
//       pbg: "success.main",
//       budget: "2.4",
//     },
//   ];
//   return (
//     <ThemeProvider theme={theme}>
//       <style jsx global>{`
//         footer {
//           display: none;
//         }
//       `}</style>
//       <FullLayout>
//         <Grid container spacing={0}>
//           <Grid item xs={12} lg={12}>
//             <SalesOverview />
//           </Grid>
//           {/* ------------------------- row 1 ------------------------- */}
//           <Grid item xs={12} lg={4}>
//             <DailyActivity />
//           </Grid>
//           <Grid item xs={12} lg={8}>
//             <AllProducts products={products} />
//           </Grid>
//           <Grid item xs={12} lg={12}>
//             <BlogCard />
//           </Grid>
//         </Grid>
//       </FullLayout>
//     </ThemeProvider>
//   );
// }


import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const AdminLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 STATIC CREDENTIALS
    if (
      email === "ganeshjagadale5675@gmail.com" &&
      password === "G@nesh2026"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard"); // next page
    } else {
      setError("Invalid admin credentials ❌");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f6f8"
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Admin Login
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2" mt={1}>
              {error}
            </Typography>
          )}

          <Button
  type="submit"
  variant="contained"
  fullWidth
  sx={{
    mt: 2,
    backgroundColor: "blue",
    color: "black",
    "&:hover": {
      backgroundColor: "red",
    },
  }}
>
  Login
</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
