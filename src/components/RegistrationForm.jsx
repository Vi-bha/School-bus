import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
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
  const [studentID, setStudentID] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please read the notes and check the box before submitting.");
      return;
    }
    // Handle form submission logic here, e.g., send data to backend
    console.log(formData);
    // Simulate backend processing and get student ID
    const generatedStudentID = generateStudentID(formData);
    setStudentID(generatedStudentID);
    // Clear the form after submission
    clearForm();
  };

  const generateStudentID = (formData) => {
    // Simulate generating a unique student ID
    const firstNameInitial = formData.studentFirstName.charAt(0).toUpperCase();
    const lastNameInitial = formData.lastName.charAt(0).toUpperCase();
    const randomID = Math.floor(1000 + Math.random() * 9000);
    return `${firstNameInitial}${lastNameInitial}${randomID}`;
  };

  const clearForm = () => {
    setFormData({
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
    setIsChecked(false);
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
                  label="Date of Birth"
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
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="class-label">Class</InputLabel>
                  <Select
                    labelId="class-label"
                    label="Class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                  >
                    {[...Array(12).keys()].map((num) => (
                      <MenuItem key={num + 1} value={num + 1}>
                        {num + 1}
                      </MenuItem>
                    ))}
                    <MenuItem value="LKG">LKG</MenuItem>
                    <MenuItem value="UKG">UKG</MenuItem>
                  </Select>
                </FormControl>
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="I have read the note"
                  style={{ justifyContent: "center", display: "flex" }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isChecked} // Disable the button if the checkbox is not checked
              style={{
                marginTop: "1.5rem",
                marginBottom: "1rem",
                background: isChecked ? "#404040" : undefined, // Apply background color when checkbox is checked
              }}
            >
              Submit
            </Button>
            {studentID && (
              <Typography variant="body1" align="center">
                <span style={{ color: "green" }}>
                  Form Submitted Successfully.
                </span>{" "}
                Your Student ID is:{" "}
                <strong style={{ color: "black", fontWeight: "bold" }}>
                  {studentID}
                </strong>{" "}
                <br />
                You will receive a payment link shortly.
              </Typography>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegistrationForm;

