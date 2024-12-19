const width = 640;
const height = 480;

const svg = d3.create("svg").attr("width", width).attr("height", height);

const colors = ["#D4C0B3", "#F5DB06", "#0165B9", "#038F2A", "#F5F5F3"];

d3.json("./data.json").then((dataset) => {
  const max = d3.max(dataset, (data) => data.sales);
  const scale = d3.scaleLinear().domain([0, max]).range([0, 700]);

  const g = svg
    .selectAll(".item")

    .data(dataset)
    .enter()
    .append("g")
    .classed("item", true)
    .attr("transform", (data, index) => `translate(0, ${index * 50})`);

  g.append("rect")
    .attr("x", 70)
    .attr("y", (data, index) => index * 80 + 30)
    .attr("width", 0)
    .attr("fill", (data, index) => colors[index])
    .attr("height", 60)
    .transition() /* アニメーションの設定を開始する合図 */
    .duration(1000) /*何秒かけてアニメーションするか */
    .delay((data, index) => index * 400) /*何秒遅らせるか */
    .ease(d3.easeCubicIn) /*イージングの種類 */
    .attr("width", (data) => scale(data.sales)); /* アニメーション終了時の値 */

  g.append("text")
    .classed("label", true)
    .classed("title", true)
    .attr("font-size", 14)
    .attr("x", 70)
    .attr("y", (data, index) => index * 80 + 24)
    .text((data, index) => `${index + 1}位${data.title}`)
    .attr("fill", "#fff");

  g.append("text")
    .classed("sales", true)
    .attr("font-size", 14)
    .attr("x", 70)
    .attr("y", (data, index) => index * 80 + 46)
    .text((data) => `${data.sales}枚`)
    .attr("fill", "#fff")
    .transition() /* アニメーションの設定を開始する合図 */
    .duration(1000) /*何秒かけてアニメーションするか */
    .delay((data, index) => index * 400) /*何秒遅らせるか */
    .ease(d3.easeCubicIn) /*イージングの種類 */
    .attr("x", (data) => scale(data.sales) + 80); /* アニメーション終了時の値 */

  g.append("image")
    .attr("x", 0)
    .attr("y", (data, index) => index * 80 + 20)
    .attr("width", 60)
    .attr("height", 60)
    .attr("href", (data) => data.img);

  container.append(svg.node());
});
