import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SigninPage from "./components/SigninPage";
import TitleBox from "./components/TitleBox";
import MainLayout from "./layouts/MainLayout";
import axios, { AxiosResponse } from 'axios';


const App: React.FC = () => {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rpassword: string;
    facebbook?: string;
    linkedIn?: string;
    instagram?: string;
  }
  const user: User = {
    id: 1,
    firstName: '1',
    lastName: '1',
    email: '1',
    password: '1',
    rpassword: '1',
    facebbook: '1',
    linkedIn: '1',
    instagram: '1',
  };
  axios.post('http://localhost:8080/personne/user', user)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  function validateRegistrationForm(form: User): boolean {
    const { id, firstName, lastName, email, password, rpassword } = form;
    if (!id || !firstName || !lastName || !email || !password || !rpassword) {
      return false;
    }
    if (password !== rpassword) {
      return false;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  }
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        {/* GRID SYSTEM */}
        <Grid container height="90vh">
          <SigninPage />

          <TitleBox />
        </Grid>
        {/* GRID SYSTEM END */}
      </Box>
    </MainLayout>
  );
};

export default App;
