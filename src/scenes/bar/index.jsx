import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
const Bar = () => {
  return (
    <Box margin="20px">
      <Header title="Bar Chart" subtitle="Simple Bar chart" />
      <Box height="65vh">
        <BarChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default Bar;
