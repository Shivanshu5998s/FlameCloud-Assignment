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
  Input,
} from "@chakra-ui/react";
const Create = ({ isOpen, onClose, title, add, setData, data }) => {
  return (
    <Modal w="100%" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#E2E8F0">
        <ModalHeader>{title}</ModalHeader>

        <ModalBody pt="-1">
          <Text fontSize={[10]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            minima, possimus, at nulla eos delectus nobis ducimus velit?
          </Text>
          <Box my="3" rounded="5" p="2" bg="#fff">
            <Text fontSize="10">NAME</Text>
            <Input
              className="addme"
              variant="unstyled"
              placeholder={
                title === "Pointer Name" ? "Name Pointer" : "Name Your Plan"
              }
            />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
           
            colorScheme="blue"
            onClick={() => {
              if (add === "main") {
                const query = document.querySelector(".addme").value;
                data.data.push({ name: query });

                onClose();
              }
            }}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default Create;
