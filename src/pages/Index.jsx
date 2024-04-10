import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaLock, FaShare } from "react-icons/fa";

const Index = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
  ]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Simulate API call to process payment and create order
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and delivery address after successful checkout
      setCartItems([]);
      setDeliveryAddress("");

      toast({
        title: "Order Placed",
        description: "Your order has been successfully placed.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error processing payment:", error);
      toast({
        title: "Error",
        description: "An error occurred while processing your payment.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const handleShareCart = async () => {
    try {
      // Simulate API call to generate shareable cart link
      const shareableLink = await new Promise((resolve) => setTimeout(() => resolve("https://example.com/shared-cart/abc123"), 1000));

      // Display shareable link to the user
      toast({
        title: "Cart Shared",
        description: (
          <>
            Your cart has been shared. Link:{" "}
            <a href={shareableLink} target="_blank" rel="noopener noreferrer">
              {shareableLink}
            </a>
          </>
        ),
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sharing cart:", error);
      toast({
        title: "Error",
        description: "An error occurred while sharing your cart.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Secure Checkout
      </Heading>

      <VStack spacing={4} align="stretch">
        {cartItems.map((item) => (
          <Box key={item.id} borderWidth={1} borderRadius="md" padding={4}>
            <Text fontWeight="bold">{item.name}</Text>
            <Text>${item.price.toFixed(2)}</Text>
          </Box>
        ))}

        <Textarea placeholder="Delivery Address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />

        <Button leftIcon={<FaLock />} colorScheme="blue" onClick={handleCheckout} isLoading={loading} loadingText="Processing...">
          Secure Checkout
        </Button>

        <Button leftIcon={<FaShare />} variant="outline" onClick={handleShareCart}>
          Share Cart
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
