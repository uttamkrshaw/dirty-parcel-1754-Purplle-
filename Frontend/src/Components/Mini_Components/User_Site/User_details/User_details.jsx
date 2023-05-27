import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, useDisclosure
} from '@chakra-ui/react'
import {useSelector} from "react-redux"

function User_details() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = useSelector((store)=>store.UserReducer.user)
    return (
        <>
            <Button variant="link" onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>USER DETAILS</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default User_details