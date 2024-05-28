import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Chart(props: { options: Highcharts.Options }) {
  Highcharts.setOptions(theme);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={props.options} />
    </div>
  );
}

const theme: Highcharts.Options = {
  colors: ["#A9CF54", "#C23C2A", "#FFFFFF", "#979797", "#FBB829"],
  chart: {
    backgroundColor: "var(--chakra-colors-chakra-body-bg)",
    style: {
      color: "white",
    },
  },
  legend: {
    enabled: true,
    align: "right",
    verticalAlign: "bottom",
    itemStyle: {
      color: "#C0C0C0",
    },
    itemHoverStyle: {
      color: "#C0C0C0",
    },
    itemHiddenStyle: {
      color: "#444444",
    },
  },
  title: {
    style: {
      color: "#FFFFFF",
    },
  },
  tooltip: {
    backgroundColor: "#1C242D",
    borderColor: "#1C242D",
    borderWidth: 1,
    borderRadius: 0,
    style: {
      color: "#FFFFFF",
    },
  },
  subtitle: {
    style: {
      color: "#666666",
    },
  },
  // xAxis: {
  //   gridLineColor: "#2E3740",
  //   gridLineWidth: 1,
  //   labels: {
  //     style: {
  //       color: "#525252",
  //     },
  //   },
  //   lineColor: "#2E3740",
  //   tickColor: "#2E3740",
  //   title: {
  //     style: {
  //       color: "#FFFFFF",
  //     },
  //     text: {},
  //   },
  // },
  // yAxis: {
  //   gridLineColor: "#2E3740",
  //   gridLineWidth: 1,
  //   labels: {
  //     style: {
  //       color: "#525252",
  //     },
  //     lineColor: "#2E3740",
  //     tickColor: "#2E3740",
  //     title: {
  //       style: {
  //         color: "#FFFFFF",
  //       },
  //       text: {},
  //     },
  //   },
  // },
};
