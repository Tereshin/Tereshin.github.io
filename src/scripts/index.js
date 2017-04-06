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