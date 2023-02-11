<?php

    $json = '["html","css"]';
    var_dump($json);

    echo '<br>';

    $phpArray = json_decode($json)
    var_dump($phpArray);