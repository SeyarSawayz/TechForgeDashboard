import { Box } from "@mui/material";
import Headers from "../../components/Header";
import LineChart from "../../components/LineChart";
const Line = () => {
  return (
    <Box m="20px">
      <Headers title="Line Chart" subtitle="Simple line chart" />
      <Box height="65vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
