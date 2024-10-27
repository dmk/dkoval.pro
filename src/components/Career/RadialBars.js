import React, { useMemo, useState } from 'react';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleRadial } from '@visx/scale';
import { Text } from '@visx/text';
import { motion } from 'framer-motion';

const getTechName = (d) => d.name;
const getTechLevel = (d) => Number(d.experience_level);

const toRadians = (x) => (x * Math.PI) / 180;
const toDegrees = (x) => (x * 180) / Math.PI;

const margin = { top: 40, bottom: 40, left: 40, right: 40 };

export default function RadialBars({ data, width, height, showControls = true }) {
  // TODO: rotate on scroll (?)
  const [rotation, setRotation] = useState(0);

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radiusMax = Math.min(xMax, yMax) / 2;

  const innerRadius = radiusMax / 3;

  const xDomain = useMemo(
    () => data.map(getTechName),
    [data]
  );

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [-0.125 + rotation, 2 * Math.PI + rotation],
        domain: xDomain,
        padding: 0.2,
      }),
    [rotation, xDomain],
  );

  const yScale = useMemo(
    () =>
      scaleRadial({
        range: [innerRadius, radiusMax],
        domain: [0, 10],
      }),
    [innerRadius, radiusMax],
  );

  return (width < 500 || height < 500) ? null : (
    <>
      <svg width={width} height={height}>
        <Group top={yMax / 2 + margin.top} left={xMax / 2 + margin.left}>
          {/* Define a large radial gradient for the whole SVG */}
          <defs>
            <linearGradient id="programming-languages" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
            <linearGradient id="frameworks" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
            <linearGradient id="containerization-and-orchestration" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="operating-systems" gradientUnits="userSpaceOnUse" rotate="45" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#86198f" />
            </linearGradient>
            <linearGradient id="automation" gradientUnits="userSpaceOnUse" rotate="45" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
            <linearGradient id="monitoring" gradientUnits="userSpaceOnUse" rotate="45" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
            <linearGradient id="networking" gradientUnits="userSpaceOnUse" rotate="45" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#86198f" />
            </linearGradient>
          </defs>

          {data.map((d) => {
            const techName = getTechName(d);
            const startAngle = xScale(techName);
            const midAngle = startAngle + xScale.bandwidth() / 2;
            const endAngle = startAngle + xScale.bandwidth();

            const outerRadius = yScale(getTechLevel(d)) ?? 0;

            // convert polar coordinates to cartesian for drawing labels
            const textRadius = outerRadius + 8;
            const textX = textRadius * Math.cos(midAngle - Math.PI / 2);
            const textY = textRadius * Math.sin(midAngle - Math.PI / 2);

            return (
              <React.Fragment key={`bar-${techName}`}>
                <motion.g initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
                  <Arc
                    cornerRadius={8}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    outerRadius={outerRadius}
                    innerRadius={innerRadius}
                    fill={`url(#${d.category})`}
                    cursor='pointer'
                  />
                  <Text
                    x={textX}
                    y={textY}
                    dominantBaseline="end"
                    textAnchor="middle"
                    fontSize={14}
                    fontWeight="bold"
                    fill={`url(#${d.category})`}
                    style={{ cursor: "default", userSelect: "none" }}
                    angle={toDegrees(midAngle)}
                  >
                    {techName}
                  </Text>
                </motion.g>
              </React.Fragment>
            );
          })}
        </Group>
      </svg>
    </>
  );
}
