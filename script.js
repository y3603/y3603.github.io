        $(function () {

            // 入力した文字を保存する配列
            let inputList = [];

            // A・X・C・Dボタン
            $(".key-button").on("click", function () {

                // 6個以上なら入力しない
                if (inputList.length >= 6) {
                    return;
                }

                // ボタンの文字を取得
                let value = $(this).text();

                // 配列に追加
                inputList.push(value);

                // 表示を更新
                updateDisplay();
            });

            // 取り消しボタン
            $("#undo").on("click", function () {

                // 最後の1文字を削除
                inputList.pop();

                // 表示を更新
                updateDisplay();
            });

            // クリアボタン
            $("#clear").on("click", function () {

                // 配列を空にする
                inputList = [];

                // 表示を更新
                updateDisplay();
            });

            // 表示更新処理
            function updateDisplay() {

                // 入力結果を表示
                $(".result-item").each(function (index) {

                    $(this).text(inputList[index] || "");

                });

                // 入力数を表示
                $("#message").text(inputList.length + " / 6");

                // 6個入力したら完了表示
                if (inputList.length >= 6) {

                    $("#message").text("入力完了！");

                }
            }

        });
