import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "japan",
    color: "hsl(351, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 189,
      },
      {
        x: "helicopter",
        y: 180,
      },
      {
        x: "boat",
        y: 204,
      },
      {
        x: "train",
        y: 160,
      },
      {
        x: "subway",
        y: 299,
      },
      {
        x: "bus",
        y: 125,
      },
      {
        x: "car",
        y: 203,
      },
      {
        x: "moto",
        y: 56,
      },
      {
        x: "bicycle",
        y: 242,
      },
      {
        x: "horse",
        y: 60,
      },
      {
        x: "skateboard",
        y: 97,
      },
      {
        x: "others",
        y: 33,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(125, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 6,
      },
      {
        x: "helicopter",
        y: 89,
      },
      {
        x: "boat",
        y: 261,
      },
      {
        x: "train",
        y: 83,
      },
      {
        x: "subway",
        y: 108,
      },
      {
        x: "bus",
        y: 60,
      },
      {
        x: "car",
        y: 229,
      },
      {
        x: "moto",
        y: 280,
      },
      {
        x: "bicycle",
        y: 294,
      },
      {
        x: "horse",
        y: 35,
      },
      {
        x: "skateboard",
        y: 92,
      },
      {
        x: "others",
        y: 265,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(291, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 87,
      },
      {
        x: "helicopter",
        y: 222,
      },
      {
        x: "boat",
        y: 253,
      },
      {
        x: "train",
        y: 153,
      },
      {
        x: "subway",
        y: 6,
      },
      {
        x: "bus",
        y: 14,
      },
      {
        x: "car",
        y: 57,
      },
      {
        x: "moto",
        y: 98,
      },
      {
        x: "bicycle",
        y: 109,
      },
      {
        x: "horse",
        y: 116,
      },
      {
        x: "skateboard",
        y: 258,
      },
      {
        x: "others",
        y: 184,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(76, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 188,
      },
      {
        x: "helicopter",
        y: 159,
      },
      {
        x: "boat",
        y: 211,
      },
      {
        x: "train",
        y: 49,
      },
      {
        x: "subway",
        y: 224,
      },
      {
        x: "bus",
        y: 158,
      },
      {
        x: "car",
        y: 182,
      },
      {
        x: "moto",
        y: 140,
      },
      {
        x: "bicycle",
        y: 198,
      },
      {
        x: "horse",
        y: 225,
      },
      {
        x: "skateboard",
        y: 175,
      },
      {
        x: "others",
        y: 144,
      },
    ],
  },
];

export default function LineCharts() {
  const theme = useTheme();
  return (
    <Box sx={{ height: "75vh" }}>
      {" "}
      <ResponsiveLine
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="catmullRom"
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Transportation",
          legendOffset: 45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendOffset: -50,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
