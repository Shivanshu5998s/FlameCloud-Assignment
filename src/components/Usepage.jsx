import {
  ModalFooter,
  Button,
  ModalBody,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Select } from "chakra-react-select";
import dbMembers from "../db.json";

function Usepage({ isOpen, onClose, data }) {
  const [showData, setshowData] = useState({});
  const [members, setMembers] = useState(dbMembers.members);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.100" maxH="750px" overflow={"scroll"}>
          <ModalHeader>SOP Access</ModalHeader>

          <ModalBody>
            {data?.data?.map((el, index) => (
              <Box key={index}>
                <Text
                  mb="2"
                  fontSize={"xl"}
                  color="blue.500"
                  fontWeight="bolder"
                >
                  {el.name}
                </Text>
                <Box bg="#fff" rounded="5" p="2" onClick={() => setshowData(!showData)}>
                  <Text fontSize="10">TEAMMATES</Text>
                  <Select
                    isMulti
                    onChange={() => setMembers(el.teams)}
                    options={dbMembers.members}
                    placeholder="Select Members"
                    closeMenuOnSelect={false}
                    outline="none"
                    border="none"
                    size="md"
                    variant="unstyled"
                  />
                </Box>
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


export default Usepage;