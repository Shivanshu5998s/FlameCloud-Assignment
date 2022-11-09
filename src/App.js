import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { SmallAddIcon } from "@chakra-ui/icons";
import dbData from "./db.json";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Create from "./components/Create";
import axios from "axios";
import Setplan from "./components/Setplan";
import Usepage from "./components/Usepage";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(dbData);
  const createoverlay = useDisclosure();

  return (
    <Box px={[2, 4, 14]} py={[2, 4, 14]} maxW="1600px" m="auto">
      <Text fontSize={[10, 14]}>SOP</Text>
      <Flex justifyContent="space-between" pb="5">
        <Text fontSize={[17, 25]} fontWeight="bolder">
          Action Plans
        </Text>
        <Flex gap={3}>
          <Button
            leftIcon={<FaUserFriends />}
            colorScheme="blue"
            variant="outline"
            onClick={onOpen}
            fontSize={[10]}
            size={["xs", "sm"]}
            display={["none", "block", "block"]}
          >
            Manage Access
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={onOpen}
            fontSize={[10]}
            size={["sm", "sm"]}
            display={["block", "none", "none"]}
          >
            <FaUserFriends />
          </Button>
          <Button
            fontSize={[10]}
            leftIcon={<SmallAddIcon bg="blue.400" rounded={2} />}
            colorScheme="blue"
            size={["xs", "sm"]}
            display={["none", "block", "block"]}
            onClick={() => {
              createoverlay.onOpen();
            }}
          >
            New Plan
          </Button>
          <Create
            onClose={createoverlay.onClose}
            isOpen={createoverlay.isOpen}
            title={"Plan Name"}
            add={"main"}
            setData={setData}
            data={data}
          />
          <Button
            fontSize={[10]}
            colorScheme="blue"
            size={["sm", "sm"]}
            display={["block", "none", "none"]}
            onClick={() => {
              createoverlay.onOpen();
            }}
          >
            <SmallAddIcon rounded={2} />
          </Button>
        </Flex>
      </Flex>
      {data?.data?.map((el, index) => (
        <Setplan
          data={el}
          key={index}
          num={index}
          setData={setData}
          onOpen={onOpen}
        />
      ))}
      <Usepage onClose={onClose} isOpen={isOpen} data={data} />
    </Box>
  );
}

export default App;
