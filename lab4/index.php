<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
<div class="container py-2">
    <div>
        <form action="" method="POST">
    <textarea class="form-control" style="resize: none" name="text" cols="10" rows="3" required
              placeholder="Enter text..."></textarea>
            <br>
            <input type="submit" name="submit" value="Submit" class="btn btn-primary">
        </form>
    </div>
    <?php
    define('FILES_DIR', __DIR__ . "/files/");

    if (isset($_POST['text']) && isset($_POST['submit'])) {
    	$text = $_POST['text'];
        $file = fopen(FILES_DIR . md5($text . time()), 'w');

        fwrite($file, htmlspecialchars($text));
        fclose($file);
    }

    if (isset($_POST['text']) && isset($_POST['name']) && isset($_POST['update'])) {
        $file = fopen(FILES_DIR . $_POST['name'], 'w');

        fwrite($file, htmlspecialchars($_POST['text']));
        fclose($file);
    }

    foreach (array_diff(scandir(FILES_DIR), ['..', '.']) as $item) {
        $fileName = FILES_DIR . $item;
        $file = fopen($fileName, 'r');
        $data = fread($file, filesize($fileName));
        echo <<< FILE
    <div class="border rounded p-2 my-2">
        <form action="" method="POST">
            <p>Name: $item</p>
            <input type="hidden" name="name" value="$item">
            <p><input type="submit" name="update" value="Update" class="btn btn-secondary"></p>
            <textarea  class="form-control" style="resize: none" name="text" id="$item" cols="10" rows="3">$data</textarea>
        </form>
    </div>
FILE;
        fclose($file);
    }
    ?>

</div>
</body>
</html>
