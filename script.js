// const container = d3.select("#container");

// const li = d3.selectAll("li");
// //スタイルを変更
// li.style("color", "#f00");

// //属性を変更
// container.attr("class", "hoge");

// d3.selectAll("li").text("変更しました。");

// d3.select("#container").insert("h2", "ul").text("新規見出し");

// const dataset = ["りんご", "みかん", "バナナ"];

// d3.select("#container")
//   .selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text((data) => data);

// svg要素を生成し変数に代入しておく
const dataset = [10, 30, 20, 40];
const svg = d3.create("svg").attr("width", 640).attr("height", 496);

// svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", (data, index) => index * 30)
//   .attr("y", 0)
//   .attr("width", 20)
//   .attr("height", (data) => data)
//   .attr("fill", "#ff0000");

// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .attr("x", (data, index) => index * 30)
//   .attr("y", (data) => data + 16)
//   .text((data) => data);

// container.append(svg.node());

// svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", 0)
//   .attr("y", (data, index) => index * 30)
//   .attr("width", (data) => data)
//   .attr("height", 20)
//   .attr("rx", 0)
//   .attr("fill", "#ff0000");

// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .attr("x", (data) => data)
//   .attr("y", (data, index) => 17 + index * 30)
//   .text((data) => data);

// // #containerに追加する（直接id名でいけるっぽい）
// container.append(svg.node()); svg

// svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", (data, index) => index * 30)
//   .attr("y", (data) => 480 - data)
//   .attr("width", 20)
//   .attr("height", (data) => data)
//   .attr("fill", "#ff0000");

// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .attr("x", (data, index) => index * 30)
//   .attr("y", (data) => 480 - data)
//   .text((data) => data);

// container.append(svg.node());

// svg
//   .selectAll("circle")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("x", (data, index) => 180 + index * 40)
//   .attr("y", (data) => 240 - data / 2)
//   .attr("width", (data) => data)
//   .attr("height", (data) => data)
//   .attr("rx", 100)
//   .attr("fill", "#ff0000");

// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .attr("x", (data, index) => 180 + index * 40 + data / 2 - 10)
//   .attr("y", (data) => 248)
//   .text((data) => data);

// container.append(svg.node());

const dataset2 = [
  25.0, 44.0, 95.0, 144.0, 173.0, 377.5, 144.0, 156.5, 98.5, 116.5, 70.5, 60.0,
];

svg
  .selectAll("rect")
  .data(dataset2)
  .enter()
  .append("rect")
  .attr("x", (data, index) => index * 40)
  .attr("y", (data) => 480 - data)
  .attr("width", 20)
  .attr("height", (data) => data)
  .attr("fill", "#0000ff");

svg
  .selectAll("text")
  .data(dataset2)
  .enter()
  .append("text")
  .attr("x", (data, index) => index * 40)
  .attr("y", (data) => 480 - data)
  .text((data) => data);

svg
  .selectAll(".month")
  .data(dataset2)
  .enter()
  .append("text")
  .attr("class", "month")
  .attr("x", (data, index) => index * 40)
  .attr("y", (data) => 496)
  .text((data, index) => `${index + 1}月`);

container.append(svg.node());
