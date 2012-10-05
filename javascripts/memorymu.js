// Related Image Memory Game
// copyright Stephen Chapman, 28th February 2006, 22nd May 2010
// you may copy this script provided that you retain the copyright notice
(function() {
var back = 'graphics\/back.gif';
var tile = [['graphics\/img0.gif','graphics\/img0a.gif'],
['graphics\/img1.jpeg','graphics\/img1a.jpeg'],
['graphics\/img2.jpeg','graphics\/img2a.jpeg'],
['graphics\/img3.jpeg','graphics\/img3a.jpeg'],
['graphics\/img4.jpeg','graphics\/img4a.jpeg'],
['graphics\/img5.jpeg','graphics\/img5a.jpeg'],
['graphics\/img6.jpeg','graphics\/img6a.jpeg'],
['graphics\/img7.jpeg','graphics\/img7a.jpeg'],
['graphics\/img8.jpeg','graphics\/img8a.jpeg'],
['graphics\/img9.jpeg','graphics\/img9a.jpeg'],
['graphics\/img10.jpeg','graphics\/img10a.jpeg'],
['graphics\/img11.jpeg','graphics\/img11a.jpeg'],
['graphics\/img12.jpeg','graphics\/img12a.jpeg'],
['graphics\/img13.jpeg','graphics\/img13a.jpeg'],
['graphics\/img14.jpeg','graphics\/img14a.jpeg']];

function randOrd(a, b){return (Math.round(Math.random())-0.5);}
var im = []; var tilen = []; for (var i = 0; i < 15; i++) {im[i] = new Image(); im[i].src = tile[i]; tilen[i] = []; tilen[i][0] = '<img src="'+tile[i][0]+'" width="60" height="60" alt="tile" \/>'; tilen[i][1]=i; tilen[i+15] = []; tilen[i+15][0] = '<img src="'+tile[i][1]+'" width="60" height="60" alt="tile" \/>'; tilen[i+15][1]=i;} function displayBack(i) {document.getElementById('t'+i).innerHTML = '<img src="'+back+'" width="60" height="60" alt="back" \/>'; document.getElementById('t'+i).onclick=function(){disp(i)};} var ch1, ch2, tmr, tno, tid, cid, cnt; function begin() {for (var i = 0; i <= 29 ;i++) displayBack(i);clearInterval(tid);tmr = tno = cnt = 0;tilen.sort( randOrd );cntr(); tid = setInterval(cntr, 1000);} function cntr() {var min = Math.floor(tmr/60);var sec = tmr%60;document.getElementById('cnt').value = min+':'+ (sec<10 ? '0' : '') + sec;tmr++;} function disp(sel) {if (tno>1) {clearTimeout(cid); conceal();}document.getElementById('t'+sel).innerHTML = tilen[sel][0];if (tno==0) ch1 = sel;else {ch2 = sel;  cid = setTimeout(conceal, 900);}tno++;} function conceal() {tno = 0; if (tilen[ch1][1] != tilen[ch2][1]) {displayBack(ch1);displayBack(ch2);} else cnt++; if (cnt >= 15) clearInterval(tid);} function createGame(nm) {var d = document.createElement('div');d.align = 'center';var t = document.createElement('table');t.cellpadding = 0;t.cellspacing = 0;t.borders = 0;for (var a = 0; a <= 5; a++) {t.insertRow(a);for (var b = 0; b <= 4; b++) {t.rows[a].insertCell(b);t.rows[a].cells[b].className = 'blk';t.rows[a].cells[b].id = 't'+((5*a)+b);t.rows[a].cells[b].align = 'center';}}d.appendChild(t);var f = document.createElement('form');f.id = 'mem';var bt = document.createElement('input');bt.type = 'button';bt.id = 'cnt';bt.value = '0.00';bt.onclick = begin;f.appendChild(bt);d.appendChild(f);document.getElementById(nm).appendChild(d);} createGame('memory'); begin(); })();