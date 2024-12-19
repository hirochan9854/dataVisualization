const width = 640;
const height = 480;

const svg = d3.create("svg").attr("viewBox", `0 0 ${width} ${height}`);
const xBaseline = 120;
const yBaseline = 40;
let i = 0;

d3.json("./data.json")
  .then((dataset) => {
    const max = d3.max(dataset, (data) => data.val);
    const min = d3.min(dataset, (data) => data.val);
    const scale = d3.scaleLinear().domain([0, max]).range([0, 400]);

    const g = svg
      .selectAll(".item")
      .data(dataset)
      .enter()
      .append("g")
      .classed("item", true)
      .attr("transform", (data, index) => `translate(0, ${index * 100})`);

    g.append("rect")
      .attr("x", xBaseline)
      .attr("y", yBaseline)
      .attr("width", 0)
      .attr("height", 20)
      .attr("fill", "#ff0000")
      .transition() /* アニメーションの設定を開始する合図 */
      .duration(1000) /*何秒かけてアニメーションするか */
      .delay((data) => data.val * 10) /*何秒遅らせるか */
      .ease(d3.easeCubicIn) /*イージングの種類 */
      .attr("width", (data) => scale(data.val)); /* アニメーション終了時の値 */

    g.append("text")
      .classed("label", true)
      .attr("font-size", "14")
      .attr("x", xBaseline)
      .attr("y", yBaseline - 6)
      .text((data) => data.label);

    g.append("text")
      .classed("value", true)
      .attr("font-size", "14")
      .attr("x", (data) => scale(data.val))
      .attr("y", yBaseline + 14)
      .text((data) => data.val);

    g.append("image")
      .attr("href", (data) => data.url)
      .attr("width", 100)
      .attr("y", 10);
    container.append(svg.node());
  })
  .catch((error) => {});
