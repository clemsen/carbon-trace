import { Tooltip } from "@mui/material";
import StyleInformationItem from "./InformationItem.style";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface PropsType {
  itemName: string;
  itemValue: string;
  itemDescription?: string;
}

const InformationItem = ({
  itemName,
  itemValue,
  itemDescription,
}: PropsType) => {
  return (
    <StyleInformationItem>
      <div className="info-item-name">
        {itemName}
        {itemDescription && (
          <Tooltip title={itemDescription || ""}>
            <InfoOutlinedIcon
              sx={{
                width: "16px",
                marginLeft: "8px",
                verticalAlign: "bottom",
              }}
            />
          </Tooltip>
        )}
      </div>
      <div className="info-item-value">{itemValue}</div>
    </StyleInformationItem>
  );
};

export default InformationItem;
