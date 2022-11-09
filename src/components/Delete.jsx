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
import dbdata from "../db.json";
const Delete = ({
  data,
  isOpen,
  onClose,
  title,
  index,
  deleVal,
  setData,
  delVal2,
}) => {
  return (
    <Modal w="100%" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#E2E8F0">
        <ModalHeader>{title}</ModalHeader>

        <ModalBody>
          <Text>
            Are you sure you want to delete this learning, this step can not be
            undone
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => {
              if (title === "Delete Category") {
                var dsa = dbdata.data?.filter((el, index) => {
                  if (index !== deleVal) {
                    return el;
                  }
                });
                setData({ data: dsa });
              } else {
                var fds = dbdata.data?.filter((el, index) => {
                  if (index !== deleVal) {
                    el.plans.filter((va, ind) => {
                      if (ind !== delVal2) {
                       console.log(va);
                      }
                    });
                  }
                });
                // setData({ data: fds });
                console.log(fds);
              }

              onClose();
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default Delete;
