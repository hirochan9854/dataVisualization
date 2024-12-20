dataset = [
  {
    title: "シュガーソングとビターステップ",
    sales: 172173,
    img: "https://www.sma.co.jp/images/15/7a5/34b4d254f5f263e56a87d8bbd0e26.jpg",
  },
  {
    title: "fake town baby",
    sales: 51400,
    img: "https://www.sma.co.jp/images/15/86d/ea4f94ec08829eca503d19065066f.jpg",
  },
  {
    title: "10% roll, 10% romance",
    sales: 36896,
    img: "https://www.sma.co.jp/images/15/f60/a64dbe1276bd5341dfe79a6d9ddd2.jpg",
  },
  {
    title: "Invisible Sensation",
    sales: 35069,
    img: "https://www.sma.co.jp/images/15/379/18d45bc2b6a1f7e4e55f59d89d5b3.jpg",
  },
  {
    title: "Catch up, latency",
    sales: 27028,
    img: "https://www.sma.co.jp/images/15/483/6bf17bfd515a44222779d285f7a5b.jpg",
  },
];

const width = 640;
const height = 480;

const svg = d3.create("svg").attr("width", width).attr("height", height);

const colors = ["#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff00"];

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 70)
  .attr("y", (data, index) => index * 80 + 30)
  .attr("width", (data) => data.sales / 500)
  .attr("fill", (data, index) => colors[index])
  .attr("height", 20);

svg
  .selectAll(".title")
  .data(dataset)
  .enter()
  .append("text")
  .classed("title", true)
  .attr("font-size", 14)
  .attr("x", 70)
  .attr("y", (data, index) => index * 80 + 24)
  .text((data, index) => `${index + 1}位${data.title}`)
  .attr("fill", "#fff");
svg
  .selectAll(".sales")
  .data(dataset)
  .enter()
  .append("text")
  .classed("num", true)
  .attr("font-size", 14)
  .attr("x", (data) => data.sales / 500 + 90)
  .attr("y", (data, index) => index * 80 + 46)
  .text((data) => `${data.sales}枚`)
  .attr("fill", "#fff");

svg
  .selectAll("image")
  .data(dataset)
  .enter()
  .append("image")
  .attr("x", 0)
  .attr("y", (data, index) => index * 80)
  .attr("width", 60)
  .attr("height", 60)
  .attr("xlink:href", (data) => data.img);

container.append(svg.node());
