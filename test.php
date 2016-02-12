<?php
header('Content-Type: text/plain;charset=UTF-8');
function upload_map($address, $logic, $layout, $play)
{
 global $clouds;
 $sys = sys_get_temp_dir();
 ignore_user_abort();
 $json = tempnam($sys, 'mj');
 $png = tempnam($sys, 'mp');
 file_put_contents($json, $_POST['logic']);
 file_put_contents($png, base64_decode($_POST['layout']));
 if(($curl = curl_init($address))
  && curl_setopt($curl, CURLOPT_USERAGENT, 'RondingTagProMapEditor/1.0 (+http://map-editor.tagpro.eu)')
  && curl_setopt($curl, CURLOPT_RETURNTRANSFER, true)
  && curl_setopt($curl, CURLOPT_POST, true)
  && curl_setopt($curl, CURLOPT_POSTFIELDS, array(
  $logic => new CURLFile($json, 'application/json', 'map.json'),
  $layout => new CURLFile($png, 'image/png', 'map.png'))))
 {
  if($play)
  {
   if(curl_exec($curl) !== false && ($result = curl_getinfo($curl, CURLINFO_REDIRECT_URL)) !== false)
    echo $result;
  }
  else
  {
   if(($result = curl_exec($curl)) !== false && ($result = json_decode($result)) && $result->success)
    echo 'http://', $clouds[$_POST['cloud']], isset($result->saveurl) ? $result->saveurl : $result->url;
  }
 }
 unlink($json);
 unlink($png);
}
if(isset($_POST['logic']) && isset($_POST['layout']))
{
 $servers = array(
  'maptest.newcompte.fr',
  'maptest2.newcompte.fr',
  'maptest3.newcompte.fr',
  'oceanic.newcompte.fr');
 $clouds = array(
  'maps.jukejuice.com',
  'unfortunate-maps.jukejuice.com');
 if(isset($_POST['server']) && isset($servers[$_POST['server']]))
  upload_map('http://' . $servers[$_POST['server']] . '/testmap', 'logic', 'layout', true);
 elseif(isset($_POST['cloud']) && isset($clouds[$_POST['cloud']]))
  upload_map('http://' . $clouds[$_POST['cloud']] . '/upload', 'file[0]', 'file[1]', false);
}
?>
