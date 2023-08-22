import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdOutlineWebAsset } from "react-icons/md";
import { IoSwapVertical } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
function App() {
  const [count, setCount] = useState(0);
  const [viewChange, setViewChange] = useState("Bridge");
  const [screenHeight, setScreenHeight] = React.useState(
    window.innerHeight - 70
  );

  React.useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight - 70);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="flex-container">
        <aside
          style={{
            height: `${screenHeight}px`,
          }}
        >
          <Flex
            flexDirection={"column"}
            // pl={"1rem"}
            height={`${screenHeight}px` - 70}
            pt={"1rem"}
            // justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Flex
              justifyContent={"start"}
              alignItems={"center"}
              cursor={"pointer"}
              w={"100%"}
              p={2}
              gap={2}
              borderBottom={"1px solid #e2e8f0"}
              _hover={{
                bg: "gray.100",
              }}
              onClick={() => {
                setViewChange("Assets");
              }}
            >
              <MdOutlineWebAsset size={20} />
              <Text fontSize={"20px"}>Assets</Text>
            </Flex>
            <Flex
              justifyContent={"start"}
              alignItems={"center"}
              cursor={"pointer"}
              w={"100%"}
              mt={"1rem"}
              p={2}
              gap={2}
              _hover={{
                bg: "gray.100",
              }}
              onClick={() => {
                setViewChange("Bridge");
              }}
            >
              <IoSwapVertical size={20} />
              <Text fontSize={"20px"}>Bridge</Text>
            </Flex>
            <Flex
              justifyContent={"start"}
              alignItems={"center"}
              cursor={"pointer"}
              w={"100%"}
              p={2}
              gap={2}
              _hover={{
                bg: "gray.100",
              }}
              onClick={() => {
                setViewChange("Transactions");
              }}
            >
              <AiOutlineTransaction size={20} />
              <Text fontSize={"20px"}>Transactions</Text>
            </Flex>

            <Flex
              justifyContent={"start"}
              alignItems={"center"}
              position={"absolute"}
              bottom={"0"}
              cursor={"pointer"}
              w={"100%"}
              p={2}
              gap={2}
              _hover={{
                bg: "gray.100",
              }}
              onClick={() => {
                setViewChange("Support");
              }}
            >
              <BiSupport size={20} />
              <Text fontSize={"20px"}>Support</Text>
            </Flex>
          </Flex>
        </aside>
        <main>
          <div className="content">
            {viewChange === "Bridge" ? (
              <>
                <Box
                  w={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"start"}
                  alignItems={"start"}
                  p={"2rem"}
                  background={"rgba(255,255,255,.05)"}
                  boxShadow={" 0 0 10px rgba(0,0,0,0.25)"}
                  backdropFilter={"blur(10px)"}
                  borderRadius={"10px"}
                  maxW={"400px"}
                  ml={"2rem"}
                >
                  <Heading fontSize={"20px"}>Albino Bridge</Heading>
                  <Text color={"gray.500"} fontSize={".9rem"} mt={3}>
                    The safest and fastest way to bridge cross chain assets to
                    the Albino chain.
                  </Text>
                  <Heading
                    fontSize={"1rem"}
                    color={"brand.100"}
                    mt={3}
                    cursor={"pointer"}
                    textDecoration={"underline"}
                  >
                    Fast Withdraw / Deposits
                  </Heading>
                  <Heading
                    fontSize={"1rem"}
                    color={"brand.100"}
                    mt={4}
                    cursor={"pointer"}
                    fontWeight={"400"}
                  >
                    On Ramp Transfers
                  </Heading>
                  <Heading
                    fontSize={"1rem"}
                    color={"brand.100"}
                    mt={4}
                    cursor={"pointer"}
                    fontWeight={"400"}
                  >
                    User guide
                  </Heading>
                  <Heading
                    fontSize={"1rem"}
                    color={"brand.100"}
                    mt={4}
                    cursor={"pointer"}
                    fontWeight={"400"}
                  >
                    FAQ
                  </Heading>
                </Box>
                <Box
                  w={"100%"}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  background={"rgba(255,255,255,.05)"}
                  boxShadow={" 0 0 10px rgba(0,0,0,0.25)"}
                  backdropFilter={"blur(10px)"}
                  borderRadius={"10px"}
                >
                  Bridge
                </Box>
              </>
            ) : viewChange === "Assets" ? (
              <Box>Assets</Box>
            ) : viewChange === "Transactions" ? (
              <Box>Transactions</Box>
            ) : viewChange === "Support" ? (
              <Box>Support</Box>
            ) : null}
          </div>

          {/* <div className="content">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <PlayerCard />
            </Box>
          </div> */}
        </main>
      </div>
    </>
  );
}

export default App;
