import {
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string | undefined;
}

const PreviewModal = ({ isOpen, onClose, imgSrc }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent
          minW={{ base: "95%", lg: "80%" }}
          px={{ base: 0, lg: 6 }}
          pt={10}
          pb={{ base: 4, lg: 8 }}
          my={0}
          mt={{ base: "32", md: "20", lg: 5 }}
          borderRadius={"2xl"}
        >
          <ModalCloseButton />
          <ModalBody>
            {imgSrc && <Image src={imgSrc} borderRadius={"xl"} />}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default PreviewModal;
