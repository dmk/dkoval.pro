import React, { useMemo, useState } from 'react';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleRadial } from '@visx/scale';
import { Text } from '@visx/text';
import { motion } from 'framer-motion';
import { Technology } from './types';
import GradientDefs from './GradientDefs';

interface RadialBarsProps {
  data: Technology[];
  width: number;
  height: number;
}

const getTechName = (d: Technology) => d.name;
const getTechLevel = (d: Technology) => Number(d.experience_level);

const toRadians = (x: number) => (x * Math.PI) / 180;
const toDegrees = (x: number) => (x * 180) / Math.PI;

const margin = { top: 40, bottom: 40, left: 40, right: 40 };

export default function RadialBars({ data, width, height }: RadialBarsProps) {
  // TODO: rotate on scroll (?)
  const [rotation, setRotation] = useState<number>(0);

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radiusMax = Math.min(xMax, yMax) / 2;

  const innerRadius = radiusMax / 3;

  // Memoize xDomain to avoid recomputation on every render
  const xDomain = useMemo(() => data.map(getTechName), [data]);

  // Memoize xScale and yScale for better performance
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

  // Render nothing if dimensions are too small
  if (width < 500 || height < 500) return null;

  return (
    <>
      <svg width={width} height={height}>
        <Group top={yMax / 2 + margin.top} left={xMax / 2 + margin.left}>
          {/* Define a large radial gradient for the whole SVG */}
          <GradientDefs />

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
                <motion.g initial={{ scale: 1 }} whileHover={{ scale: 1.03 }}>
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
