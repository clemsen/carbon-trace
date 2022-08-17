import { Tooltip } from "@mui/material";
import StyleInformationItem from "./InformationItem.style";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
          <InfoOutlinedIcon
            sx={{
              width: "16px",
              marginLeft: "8px",
              verticalAlign: "bottom",
            }}
          />
        </Tooltip>
      </div>
      <div className="info-item-value">{itemValue}</div>
    </StyleInformationItem>
  );
};

export default InformationItem;
