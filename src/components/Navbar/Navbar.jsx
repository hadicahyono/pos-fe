import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  ButtonGroup,
  Button,
  useColorMode,
  Avatar,
  AvatarBadge,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/userAction";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, role } = useSelector((state) => {
    return {
      email: state.userReducer.email,
      role: state.userReducer.role,
    };
  });

  return (
    <Box bg={colorMode === "light" ? "gray.50" : "gray.700"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
      >
        <Flex align="center">
          <Link fontWeight="bold" onClick={() => navigate("/")}>
            POS Web App
          </Link>
        </Flex>

        <Flex align="center">
          <Box
            display={{ base: "block", md: "none" }}
            onClick={toggleColorMode}
          ></Box>
          {props.loading ? (
            <Spinner />
          ) : email && !props.loading ? (
            <Menu>
              <MenuButton>
                <Avatar name={email} size="md">
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </MenuButton>
              <MenuList textColor="black">
                {role === "admin" ? (
                  <div>
                    <MenuItem>Products Management</MenuItem>
                    <MenuItem>Transactions Management</MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem>Cart </MenuItem>
                    <MenuItem>Transactions</MenuItem>
                    <MenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </MenuItem>
                  </div>
                )}

                <MenuDivider />
                <MenuItem onClick={() => dispatch(logoutAction())}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <ButtonGroup>
              <Link to="/login">
                <Button
                  type="button"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Link>
              <Link to="/regis">
                <Button
                  type="button"
                  colorScheme={"blue"}
                  variant="outline"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </Link>
            </ButtonGroup>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
