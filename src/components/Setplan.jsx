import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { DragHandleIcon, SmallAddIcon } from "@chakra-ui/icons";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useState } from "react";
import Delete from "./Delete";
import Create from "./Create";
const Setplan = ({ setData, data, onOpen, num }) => {
  const [option, setoption] = useState("");
  const useag = useDisclosure();
  const Pointer = useDisclosure();
  const [deleVal, setDeleVal] = useState();
  const [deleVal2, setDeleVal2] = useState();

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton rounded={5}>
            <Box flex="1" px="2">
              <Flex gap={2} alignItems="center">
                <DragHandleIcon fontSize="12" />
                <Text>{data?.name}</Text>
              </Flex>
            </Box>

            <Menu>
              <MenuButton
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{
                  bg: "transparent",
                  transform: "scale(0.98)",
                }}
                as={Button}
                rightIcon={<HiEllipsisVertical />}
              ></MenuButton>
              <MenuList>
                <MenuItem>Edit Category</MenuItem>
                <MenuItem onClick={onOpen}>Manage Access</MenuItem>
                <MenuItem
                  onClick={() => {
                    useag.onOpen();
                    setoption("Delete Category");
                    setDeleVal(num);
                  }}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {data?.plans?.map((el, id) => (
            <Accordion key={id} allowMultiple position="relative">
              <AccordionItem>
                <Box position="absolute" top="2" left="-2">
                  <SmallAddIcon />
                </Box>
                <AccordionButton>
                  <Flex
                    alignItems="center"
                    gap={5}
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Flex alignItems="center" gap={5}>
                      <DragHandleIcon fontSize="12" />
                      <Text>{el.plan}</Text>
                    </Flex>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  {el.pointer?.map((val, index) => (
                    <Box position="relative" key={index}>
                      <Box
                        position="absolute"
                        bg="#CBD5E0"
                        w="1px"
                        h={el.pointer?.length - 1 === index ? "2rem" : "4rem"}
                        left="-3"
                        top="-3"
                      ></Box>
                      <Box bg="#E2E8F0" mb="2" p="2" rounded="5">
                        <Box
                          bg="#CBD5E0"
                          w="12px"
                          position="absolute"
                          h="1px"
                          top="5"
                          left="-3"
                        ></Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Flex alignItems="center" gap={2}>
                            <DragHandleIcon fontSize="12" />
                            <Text>{val.text}</Text>
                          </Flex>

                          <Menu>
                            <MenuButton
                              bg="transparent"
                              _hover={{ bg: "transparent" }}
                              _active={{
                                bg: "transparent",
                                transform: "scale(0.98)",
                              }}
                              as={Button}
                              rightIcon={<HiEllipsisVertical />}
                            ></MenuButton>
                            <MenuList>
                              <MenuItem>Edit Category</MenuItem>
                              <MenuItem>Manage Access</MenuItem>
                              <MenuItem
                                onClick={() => {
                                  useag.onOpen();
                                  setDeleVal2(index);
                                  setoption("Delete Sub Category");
                                }}
                              >
                                Delete
                              </MenuItem>
                            </MenuList>
                            <Delete
                              onClose={useag.onClose}
                              isOpen={useag.isOpen}
                              title={option}
                              deleVal={deleVal}
                              data={data}
                              setData={setData}
                              deleVal2={deleVal2}
                            />
                          </Menu>
                        </Flex>
                      </Box>
                    </Box>
                  ))}

                  <Flex gap="5">
                    <Button
                      leftIcon={<SmallAddIcon />}
                      onClick={() => {
                        Pointer.onOpen();
                      }}
                    >
                      Add Pointer
                    </Button>
                    <Create
                      onClose={Pointer.onClose}
                      isOpen={Pointer.isOpen}
                      title={"Pointer Name"}
                    />
                    <Button leftIcon={<SmallAddIcon />}>On Hover</Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Setplan;