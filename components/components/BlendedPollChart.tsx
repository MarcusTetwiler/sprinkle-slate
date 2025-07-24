import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BlendedPollChart = () => {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr("width", 300)
      .attr("height", 150);

    const data1 = [30, 40, 35, 50, 60];
    const data2 = [25, 30, 33, 45, 55];
    const x = d3.scaleLinear().domain([0, data1.length - 1]).range([30, 270]);
    const y = d3.scaleLinear().domain([0, 70]).range([120, 20]);

    const line = d3.line<number>()
      .x((_, i) => x(i))
      .y(d => y(d));

    svg.selectAll("*").remove();
    svg.append("path")
      .datum(data1)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg.append("path")
      .datum(data2)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, []);

  return <svg ref={ref}></svg>;
};

export default BlendedPollChart;
