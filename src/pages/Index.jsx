import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, useToast } from "@chakra-ui/react";
import { FaCreditCard } from "react-icons/fa";

const Index = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit the form data to the server
    if (cardNumber && cardName && expiryDate && cvv) {
      // Submit the form data to the server (not implemented in this example)
      console.log("Form submitted:", { cardNumber, cardName, expiryDate, cvv });
      // Show success toast
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Reset form fields
      setCardNumber("");
      setCardName("");
      setExpiryDate("");
      setCvv("");
    } else {
      // Show error toast if any field is empty
      toast({
        title: "Error",
        description: "Please fill in all the fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>
        <FaCreditCard style={{ display: "inline-block", marginRight: "8px" }} />
        Enter Credit Card Info
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="cardNumber">
            <FormLabel>Card Number</FormLabel>
            <Input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" />
          </FormControl>
          <FormControl id="cardName">
            <FormLabel>Cardholder Name</FormLabel>
            <Input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="John Doe" />
          </FormControl>
          <FormControl id="expiryDate">
            <FormLabel>Expiry Date</FormLabel>
            <Input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" />
          </FormControl>
          <FormControl id="cvv">
            <FormLabel>CVV</FormLabel>
            <Input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="123" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Index;
