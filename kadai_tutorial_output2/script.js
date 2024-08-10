$(function() {

  let cng_item = '';  // 変更された項目 test

  $('.button-more').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });

  $('.button-more').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });

   // カルーセル
   $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時の処理
  $('#submit').on('click', function(event) {
    // formタグによる送信を拒否
    event.preventDefault();

    cng_item = 'submit';  // test

    // 入力チェックをした結果をresultに格納
    let result = inputChech();

    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    // エラーが無かったらフォームを送信する
    if (error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。')
    } else {  
      // エラーメッセージを表示する
      alert(message); 
    }
  });

  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#name').blur(function () {
    cng_item = 'name';  // test
    inputChech();
  });
  $('#furigana').blur(function () {
    cng_item = 'furigana';  // test
    inputChech();
  });
  $('#email').blur(function () {
    cng_item = 'email';  // test
    inputChech();
  });
  $('#tel').blur(function () {
    inputChech();
  });
  $('#message').blur(function () {
    cng_item = 'message';  // test
    inputChech();
  });
  // 演習start
  $('#prefecture').blur(function () {
    cng_item = 'prefecture';  // test
    inputChech();
  });
  // 演習end
  $('#agree').blur(function () {
    cng_item = 'agree';  // test
    inputChech();
  });

  // お問い合わせフォームの入力チェック
  function inputChech() {
    // エラーのチェック結果
    let result;
 
    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前のチェック
    if (cng_item == 'submit' || cng_item == 'name') {   // test
      if ($('#name').val() == '') {
       // エラーあり
        $('#name').css('background-color','#f79999');
       error = true;
       message += 'お名前を入力してください。\n';
      } else {
       // エラーなし
       $('#name').css('background-color','#fafafa');
      }
    }   // test
    
    // フリガナのチェック
    if (cng_item == 'submit' || cng_item == 'furigana') {   // test
      if ($('#furigana').val() == '') {
       // エラーあり
       $('#furigana').css('background-color','#f79999');
       error = true;
       message += 'フリガナを入力してください。\n';
     } else {
       // エラーなし
       $('#furigana').css('background-color','#fafafa');
     }
    }    // test

    // メールアドレスのチェック
    if (cng_item == 'submit' || cng_item == 'email') {   // test
      if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
       // エラーあり
       $('#email').css('background-color','#f79999');
       error = true;
       message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
     } else {
       // エラーなし
       $('#email').css('background-color','#fafafa');
     }
    }    // test
    
    // 電話番号のチェック
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
      // エラーあり
      $('#tel').css('background-color','#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
      $('#tel').css('background-color','#fafafa');
    }

    // お問い合わせのチェック
    if (cng_item == 'submit' || cng_item == 'message') {   // test
      if ($('#message').val() == '') {
       // エラーあり
       $('#message').css('background-color','#f79999');
       error = true;
       message += 'お問い合わせを入力してください。\n';
     } else {
       // エラーなし
       $('#message').css('background-color','#fafafa');
     }
    }    // test

    // 演習start
    // 都道府県のチェック
    if (cng_item == 'submit' || cng_item == 'prefacture') {   // test
      if ($('#prefecture').val() == '') {
       // エラーあり
       $('#prefecture').css('background-color','#f79999');
       error = true;
       message += '都道府県を選択してください。\n';
     } else {
       // エラーなし
       $('#prefecture').css('background-color','#fafafa');
     }   
    }     // test
    // 演習end

    // 個人情報のチェックボックスのチェック
    if (cng_item == 'submit' || cng_item == 'agree') {   // test
      if ($('#agree').prop('checked') == false) {
       error = true;
       message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
     }
    }    // test

    // エラーの有無で送信ボタンを切り替え
    // if (error == true) {
    //   $('#submit').attr('src', 'images/button-submit.png');
    // } else {
    //   console.log(error);
    //   $('#submit').attr('src' , 'images/button-submit-blue.png');
    // }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;

  }

});
