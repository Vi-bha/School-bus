import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    studentFirstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    class: "",
    division: "",
    guardianName: "",
    guardianMobile: "",
    alternateMobile: "",
    pickupAddress: "",
    dropAddress: "",
    emergencyMobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: "1rem", textAlign: "center" }}
          >
            Transport Requisition Form
          </Typography>
          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Student Name"
                  name="studentFirstName"
                  value={formData.studentFirstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Date of Birth (DD/MM/YYYY)"
                  name="dob"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  select
                  label="Class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                >
                  {[...Array(12).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Guardian Name"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Guardian Mobile"
                  name="guardianMobile"
                  value={formData.guardianMobile}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Alternate Mobile"
                  name="alternateMobile"
                  value={formData.alternateMobile}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Pick-up Address"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Drop Address"
                  name="dropAddress"
                  value={formData.dropAddress}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Emergency Mobile"
                  name="emergencyMobile"
                  value={formData.emergencyMobile}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "1.5rem", marginBottom: "1rem" }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegistrationForm;
