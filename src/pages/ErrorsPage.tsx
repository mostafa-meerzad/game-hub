import { Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorsPage = () => {
  const error = useRouteError();

  return (
    <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} py={"36"}>
      <Heading pb={"3 "}>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "this page doesn't exist"
          : "sorry. 😔 something went wrong on our end."}
      </Text>
    </Flex>
  );
};

export default ErrorsPage;
