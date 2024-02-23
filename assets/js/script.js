
// 给数组内所有元素添加事件
const addEvent = function (elements, event, func) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(event, func);
  }
};

const left = document.querySelector('.left');
const right = document.querySelector('.right');
window.addEventListener('DOMContentLoaded', function () {
  left.style.transform = 'translateX(-100%)';
  right.style.transform = 'translateX(100%)';
})

// 小屏幕导航栏
const opennav = document.querySelector('.open-nav-btn');
const closebtn = document.querySelector('.closebtn');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
opennav.addEventListener('click', function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
})

closebtn.addEventListener('click', function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
});




/* 下拉固定导航栏 */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else header.classList.remove('active');
})


// 图片抖动

const shakeElements = document.querySelectorAll("[data-shake]");
const shake = function (e) {

  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const shakePosY = ((e.offsetX - centerX) / centerX) * 10;
  const shakePosX = ((e.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${shakePosX}deg) rotateY(${shakePosY - (shakePosY * 2)}deg)`;
}

addEvent(shakeElements, "mousemove", shake);

addEvent(shakeElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});


/* 切换栏实现 */
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

tabItems.forEach(function (li, index) {
  li.onclick = function () {
    tabItems.forEach(function (item) {
      item.classList.remove('active-btn')
    });

    this.classList.add('active-btn');

    tabContents.forEach(function (content) {
      content.classList.remove('current')
    })

    tabContents[index].classList.add('current');

  }
})




//       创建高德地图
var map = new AMap.Map('gaodemap', {
  viewMode: '2D',
  rotateEnable: true,
  resizeEnable: true, //是否监控地图容器尺寸变化
  zoom: 18,
  layers: [
    // 卫星
    new AMap.TileLayer.Satellite(),
    // 路网
    new AMap.TileLayer.RoadNet()
  ],
  center: [114.406447, 30.464645],
});
// 创建marker
const position = new AMap.LngLat(114.406447, 30.464645); // Marker经纬度
const marker = new AMap.Marker({
  position: position,

});
map.add(marker);

var ControlBar;
AMap.plugin('AMap.ControlBar', function () { // 异步加载插件
  ControlBar = new AMap.ControlBar(); // 工具条方向盘实例化
  map.addControl(ControlBar);
});

// 鼠标
const cursors = document.querySelectorAll("[data-cursor]");
const hovered = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];
console.log(cursors);
window.addEventListener('mousemove', function (e) {
  const posx = e.clientX;
  const posy = e.clientY;
  cursors[0].style.left = posx + 'px';
  cursors[0].style.top = posy + 'px';
  setTimeout(function () {
    cursors[1].style.left = posx + 'px';
    cursors[1].style.top = posy + 'px';
  }, 85)
})
addEvent(hovered, "mouseover", function () {
  for (let i = 0; i < cursors.length; i++) {
    cursors[i].classList.add("hovered");
  }
});
addEvent(hovered, "mouseout", function () {
  for (let i = 0; i < cursors.length; i++) {
    cursors[i].classList.remove("hovered");
  }
});

