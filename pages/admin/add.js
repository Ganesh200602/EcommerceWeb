// import React, { useState } from "react";
// import FullLayout from "../../src/layouts/FullLayout";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../src/theme/theme";
// import {
//   Grid,
//   Stack,
//   TextField,
//   Checkbox,
//   FormGroup,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   FormLabel,
//   FormControl,
//   Button,
// } from "@mui/material";
// import BaseCard from "../../src/components/baseCard/BaseCard";
// const Add = () => {
//   const [form, setForm] = useState({});
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//     console.log(form);
//   };
//   const submitForm = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//         <style jsx global>{`
//           footer {
//             display: none;
//           }
//         `}</style>
//         <FullLayout>
//           <Grid container spacing={0}>
//             <Grid item xs={12} lg={12}>
//               <BaseCard title="Form Layout">
//                 <Stack spacing={3}>
//                   <TextField
//                     onChange={handleChange}
//                     value={form.title ? form.title : ""}
//                     name="title"
//                     label="Title"
//                     variant="outlined"
//                   />
//                   <TextField
//                     onChange={handleChange}
//                     value={form.slug ? form.slug : ""}
//                     name="slug"
//                     label="Slug"
//                     variant="outlined"
//                   />

//                   <TextField
//                     onChange={handleChange}
//                     value={form.size ? form.size : ""}
//                     name="size"
//                     label="Size"
//                     variant="outlined"
//                   />
//                   <TextField
//                     onChange={handleChange}
//                     value={form.size ? form.size : ""}
//                     name="size"
//                     label="Color"
//                     variant="outlined"
//                   />

//                   <TextField
//                     onChange={handleChange}
//                     value={form.description ? form.description : ""}
//                     name="description"
//                     label="Description"
//                     multiline
//                     rows={4}
//                   />
//                 </Stack>
//                 <br />
//                 <Button onClick={submitForm} variant="outlined" mt={2}>
//                   Submit
//                 </Button>
//               </BaseCard>
//             </Grid>
//           </Grid>
//         </FullLayout>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Add;


import React, { useState } from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import {
  Grid,
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    desc: "",
    img: "",
    category: "tshirt",
    size: "",
    color: "",
    price: "",
    avaQty: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Product added successfully ✅");
      setForm({
        title: "",
        slug: "",
        desc: "",
        img: "",
        category: "tshirt",
        size: "",
        color: "",
        price: "",
        avaQty: "",
      });
    } else {
      alert("Error adding product ❌");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>

      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <BaseCard title="Add Product">
              <Stack spacing={3}>
                <TextField name="title" label="Title" value={form.title} onChange={handleChange} />
                <TextField name="slug" label="Slug" value={form.slug} onChange={handleChange} />
                <TextField name="img" label="Image URL" value={form.img} onChange={handleChange} />

                {/* CATEGORY DROPDOWN */}
                <FormControl fullWidth>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    name="category"
                    value={form.category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value="tshirt">T-Shirt</MenuItem>
                    <MenuItem value="hoodies">Hoodies</MenuItem>
                    <MenuItem value="mugs">Mugs</MenuItem>
                    <MenuItem value="stickers">Stickers</MenuItem>
                  </Select>
                </FormControl>

                <TextField name="size" label="Size" value={form.size} onChange={handleChange} />
                <TextField name="color" label="Color" value={form.color} onChange={handleChange} />
                <TextField name="price" label="Price" type="number" value={form.price} onChange={handleChange} />
                <TextField
                  name="avaQty"
                  label="Available Quantity"
                  type="number"
                  value={form.avaQty}
                  onChange={handleChange}
                />

                <TextField
                  name="desc"
                  label="Description"
                  multiline
                  rows={4}
                  value={form.desc}
                  onChange={handleChange}
                />
              </Stack>

              <br />
              <Button variant="outlined" onClick={submitForm}>
                Submit
              </Button>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default Add;
