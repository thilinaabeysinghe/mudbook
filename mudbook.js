var page = new tabris.Page({
  topLevel: true,
  title: "MudBook"
});
new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "Send Mud Photos to Facebook friends"
}).appendTo(page);
page.open();