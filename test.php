<?php
$baseURL = "https://pokeapi.co/api/v2/";

$url = $baseURL.'pokemon/';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$pkmArr = curl_exec($ch);

curl_close($ch);

printf($pkmArr);

?>
