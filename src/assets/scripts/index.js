var blocks = {};

$(function () {
  initBlocks();
});

function initBlocks() {
  for (var key in blocks) {
    if (blocks[key]) {
      blocks[key].init();
    }
  }
}

var app = angular.module('app', [
  'ui.router'
]);


app.run(function(){
  console.log("APP RUN");
});