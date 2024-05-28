import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { useMap } from "react-map-gl/dist/esm/exports-maplibre";
import Dashboard from "../components/Dashboard";
import Map from "../components/Map";

export default function App() {
  const { current: map } = useMap();

  console.log(map);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex
          minH="100vh"
          flexDir={"row"}
          minW={"100vw"}
          justifyContent={"space-between"}
          zIndex={1}
          maxH={"100vh"}
        >
          <Box flex={1}>
            <Map />
          </Box>
          <Box
            borderRadius={"5px 0 0 5px"}
            boxShadow={"-12px 0px 5px -3px rgba(0,0,0,0.25);"}
            maxW={"400px"}
            flex={1}
            zIndex={2}
          >
            <Dashboard />
          </Box>
        </Flex>
        {/* <ColorModeSwitcher position={"absolute"} top={0} left={0} zIndex={3} /> */}
      </Box>
    </ChakraProvider>
  );
}
