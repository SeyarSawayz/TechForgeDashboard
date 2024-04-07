import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
const Pie = () => {
  return (
    <Box margin="20px">
      <Header title="Pie Chart" subtitle="Pie chart about IT" />

      <Box height="60vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
