import { Button, Container } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../helper";

const Verification = () => {
  const location = useLocation();
  console.log("from Verification ->", location);

  const handleSubmit = async () => {
    try {
      let token = location.search.split("=")[1];
      let { data } = await axios.patch(
        API_URL + `/users/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.success) {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="">
      <h2 style={{ fontSize: "50px" }}>Verify your account</h2>
      <Button
        className="btn btn-outline-primary"
        type="button"
        onClick={handleSubmit}
      >
        Verify
      </Button>
    </Container>
  );
};

export default Verification;
