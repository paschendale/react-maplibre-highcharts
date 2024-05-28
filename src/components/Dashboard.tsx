import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Chart from "./Chart";

export default function Dashboard() {
  const options: Highcharts.Options = {
    title: {
      text: "A line chart",
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <Flex flexDir={"column"} justifyContent={"space-between"} h={"100%"}>
      <Box p={3} bgColor={"gray.700"}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Dashboard
        </Text>
      </Box>
      <Box maxH={"100%"} overflowY={"auto"}>
        <Chart options={options} />
        <Chart options={options} />
        <Chart options={options} />
      </Box>
      <Flex
        p={3}
        bgColor={"gray.700"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text fontSize={"sm"}>Powered by </Text> &nbsp;
        <Image src="/favicon.png" alt="Logo" h={10} />
      </Flex>
    </Flex>
  );
}
