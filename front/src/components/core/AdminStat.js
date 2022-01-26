import * as React from "react";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Box } from "@mui/system";
import { themeAdmin } from "configs/theme";

const data = [
  { dpt: "Ile De France", registered: 4000 },
  { dpt: "Pays De La Loire", registered: 2500 },
  { dpt: "Auvergne", registered: 1000 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Box
        sx={{
          backgroundColor: themeAdmin.palette.background.paper,
          borderRadius: "12px",
          border: "1px solid #3c4752",
        }}
      >
        <Chart data={chartData} rotated>
          <ArgumentAxis />
          <ValueAxis max={3} />
          <BarSeries valueField="registered" argumentField="dpt" />
          <Title text="Top Départements" />
          <Animation />
        </Chart>
      </Box>
    );
  }
}
