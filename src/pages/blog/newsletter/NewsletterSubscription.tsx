import React from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

interface NewsletterSubscriptionProps {}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = () => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const onSubmit = (data: {
    email: string,
    userName: string
  }) => {
    const { email, userName } = data;
    axios.post("http://localhost:5000/ns-sub", {
      email,
      userName
    }).then((res) => {
      if (res.data.message === "successful") {
        toast({
          title: "Email Iscritta con successo!",
          isClosable: true,
          duration: 2000,
          status: "success"
        })
      } else if (res.data.error === "user-already-subscribed") {
        toast({
          title: "Email già iscritta nel nostro sistema!",
          isClosable: true,
          duration: 2000,
          status: "error"
        })
      }
    })
  };
  return (
    <Box p="7%">
      <Text>
        Heyla, 👋! Se sei interessat* alla nostra newsletter settimanale,
        inserisci qui la tua email e il tuo nome!
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Input name
          ="userName" ref={register} placeholder="Nome" required />
          <Input name
          ="email" ref={register} placeholder="E-Mail" required />
          <Button mt="2%" type="submit" value="submit">
            Iscrivimi!
          </Button>
        </div>
      </form>
      <Text mt="2%" fontSize="small" fontStyle="italic">
        Promettiamo di non mandare mai e-mail di spam.
      </Text>
    </Box>
  );
};

export default NewsletterSubscription;
