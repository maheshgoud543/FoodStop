import { useState } from "react";
import Logo from "../../assets/logo.jsx";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const LandingPage = () => {
  const [openDialog, setopenDialog] = useState(false);
  const [openSignUpDialog, setSignUpDialog] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setopenDialog(true);
  };
  const handeleClose = () => {
    setopenDialog(false);
    setSignUpDialog(false);
  };
  const handleSignUp = () => {
    setSignUpDialog(true);
  };

  const handleLoginSubmit = () => {
    setopenDialog(false);
    navigate("/home");
  };
  const handleSignUpSumit = () => {
    setSignUpDialog(false);
    navigate("/home");
  };
  return (
    <div>
      <nav>
        <Logo />
        <p className="title">Food Stop</p>
        <div className="login_buttons">
          <button onClick={handleLogin}>Login</button>
          <Dialog onClose={handeleClose} open={openDialog}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please Log into your Accoount
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              ></TextField>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="password"
                label="Password"
                type="Password"
                fullWidth
                variant="standard"
              ></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLoginSubmit}>Login</Button>
            </DialogActions>
          </Dialog>
          <button onClick={handleSignUp}>SignUp</button>
          <Dialog onClose={handeleClose} open={openSignUpDialog}>
            <DialogTitle>SignUp</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please Log into your Accoount
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Full Name"
                type="name"
                fullWidth
                variant="standard"
              ></TextField>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              ></TextField>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="password"
                label="Password"
                type="Password"
                fullWidth
                variant="standard"
              ></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignUpSumit}>Sign Up</Button>
            </DialogActions>
          </Dialog>
        </div>
      </nav>
      <div className="info">
        <p>
          Visit various restaurants, share your reviews, and post videos or
          images of your dining experiences to help others discover great places
          to eat. By sharing, you'll also get a chance to win exclusive coupons!
          Let others see your recommendations and inspire them to dine at the
          best spots.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
