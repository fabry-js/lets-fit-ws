import React, { useContext, useState } from "react";
import {
  Button,
  Center,
  Container,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import { executeLogin } from "../../utils/firebase";
import { UserContext } from "../../contextes/AuthProvider";
const Login = () => {
  const { actualUser } = useContext(UserContext);
  const history = useHistory();

  if(actualUser) {
    history.replace("/");
  }

  const [showPasswordText, setShowPasswordText] = useState<boolean>(false);
  const toast = useToast();
  const showLoggedSuccessfullyToast = () =>
    toast({
      title: "Login Eseguito con successo! 🎉",
      description: "Fantastico!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  const showCouldNotBeLoggedInToast = () =>
    toast({
      title: "Oh no no, password o username errati!😢",
      description: "Mannaggia, puoi riprovare per favore? Graziee!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  const onSubmit = async (data: any) => {
    await executeLogin(data.email, data.password)
      .then(() => {
        showLoggedSuccessfullyToast();
        history.push("/");
      })
      .catch(() => showCouldNotBeLoggedInToast());
  };
  const { register, handleSubmit } = useForm();
  return (
    <>
      <TopNavBar />
      <Container mt="8">
        <Stack spacing={3}>
          <Center>
            <Image boxSize="150px" src="../../res/logo.png" />
          </Center>
          <Center>
            <Text fontSize="3xl">Log-In</Text>
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              border="2px"
              borderColor="green.500"
              placeholder="E-Mail"
              size="lg"
              name="email"
              ref={register}
            />
            <InputGroup>
              <Input
                type={showPasswordText ? "text" : "password"}
                border="2px"
                mt="1"
                borderColor="green.500"
                placeholder="Password"
                size="lg"
                name="password"
                ref={register}
                autoFocus
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  mt="4"
                  variant="outline"
                  onClick={() => setShowPasswordText(!showPasswordText)}
                >
                  {showPasswordText ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              size="lg"
              border="2px"
              borderColor="green.500"
              variant="outline"
              type="submit"
              mt="1"
              width="100%"
            >
              Andiamo! 🚀
            </Button>
          </form>
          <Text fontSize="p">
            Password Dimenticata? <Link to="/forgotpassword">Clicca qui!</Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
