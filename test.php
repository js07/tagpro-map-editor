<?php
header('Content-Type: text/plain;charset=UTF-8');
$servers = array(
 'maptest.newcompte.fr',
 'maptest2.newcompte.fr',
 'maptest3.newcompte.fr',
 'oceanic.newcompte.fr');
if(isset($_POST['logic']) && isset($_POST['layout']) && isset($_POST['server']) && isset($servers[$_POST['server']]))
{
 $sys = sys_get_temp_dir();
 ignore_user_abort();
 $json = tempnam($sys, 'mj');
 $png = tempnam($sys, 'mp');
 file_put_contents($json, $_POST['logic']);
 file_put_contents($png, base64_decode($_POST['layout']));
 if(($curl = curl_init('http://' . $servers[$_POST['server']] . '/testmap'))
  && curl_setopt($curl, CURLOPT_USERAGENT, 'RondingTagProMapEditor/1.0 (+http://map-editor.tagpro.eu)')
  && curl_setopt($curl, CURLOPT_RETURNTRANSFER, true)
  && curl_setopt($curl, CURLOPT_POST, true)
  && curl_setopt($curl, CURLOPT_POSTFIELDS, array(
  'logic' => new CURLFile($json, 'application/json', 'map.json'),
  'layout' => new CURLFile($png, 'image/png', 'map.png')))
  && curl_exec($curl) !== false
  && ($result = curl_getinfo($curl, CURLINFO_REDIRECT_URL)) !== false)
  echo $result;
 unlink($json);
 unlink($png);
}
?>
