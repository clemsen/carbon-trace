import { Tooltip } from "@mui/material";
import StyleInformationItem from "./InformationItem.style";

interface PropsType {
  itemName: string;
  itemValue: string;
}

const InformationItem = ({ itemName, itemValue }: PropsType) => {
  return (
    <StyleInformationItem>
      <div className="info-item-name">
        {itemName}
        <Tooltip title="sqlfvgn qskldnvqks vmoqsidnv qsdvmoiqs vljsv sjv sif lsdf vldf visdfv sdl vidsfv ">
          <img src="/images/information.png" alt="information" />
        </Tooltip>
      </div>
      <div className="info-item-value">{itemValue}</div>
    </StyleInformationItem>
  );
};

export default InformationItem;
