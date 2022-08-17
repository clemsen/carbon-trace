import StyleInformationModal from "./InformationModal.style";

interface PropsType {
  description: string;
}

const InformationModal = ({ description }: PropsType) => {
  return <StyleInformationModal>{description}</StyleInformationModal>;
};

export default InformationModal;
