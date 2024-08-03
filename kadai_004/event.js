$(window).on({
  'load': () => {
    console.log('loadイベントが発生しました');
  },
  'scroll': () => {
    console.log('scrollイベントが発生しました');
  }
});