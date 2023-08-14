import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.png';
import ColorSwitcher from "./ColorSwitcher.tsx";
const NavBar = () => {

    return (
        <>
            <HStack justifyContent={"space-between"} padding={"20px"}>
                <Image src={logo} boxSize={'60px'}/>
                <ColorSwitcher/>
            </HStack>
        </>
    )
}

export default NavBar;