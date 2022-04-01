<?xml version="1.0" ?><xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"><xsl:output method="text" indent="no"/><xsl:template match="/data"><![CDATA[<div data-wrapper=true style="font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;">
<div>
<div class=x_keyboardFocusClass style="">
<div class=x_keyboardFocusClass style="font-family:&quot;Segoe UI&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:9pt;"><span style="font-size:10pt;">Hei,&#160;]]><xsl:choose><xsl:when test="contact/firstname"><xsl:value-of select="contact/firstname" /></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose><![CDATA[,&#160;</span></div>

<div style=""><br>
<span style="font-size:10pt;"><font class=x_keyboardFocusClass face="Segoe UI, Helvetica Neue, sans-serif">Dalībnieku nauda palīdz segt biedrības ikdienas izdevumus un piedalīties dažādos projektos. Gadu laikā ir panāktas vairākas pozitīvas pārmaiņas pilsētā, par būtiskākajiem sasniegumiem var izlasīt </font><a href="https://www.pilsetacilvekiem.lv/sasniegtais/" style="font-family:&quot;Segoe UI&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:11pt;">https://www.pilsetacilvekiem.lv/sasniegtais/</a><font face="Segoe UI, Helvetica Neue, sans-serif">.</font></span></div>

<div style=""><br>
<span style="font-size:10pt;"><font class=x_keyboardFocusClass face="Segoe UI, Helvetica Neue, sans-serif">Biedri un atbalstītāji mēnesī maksā 2 €. Tev ir uzkrājies parāds ]]><xsl:choose><xsl:when test="contact/pc_debt"><xsl:value-of select="contact/pc_debt" /></xsl:when><xsl:otherwise></xsl:otherwise></xsl:choose><![CDATA[.</font><font class=x_keyboardFocusClass face="Segoe UI, Helvetica Neue, sans-serif">&#160;Priecāsimies, ja Tu to samaksāsi. Tas būtu ļoti optimāls atbalsts kopējām aktivitātēm, lai pilsētā valdītu uz cilvēkiem orientēta, kvalitatīva publiskā ārtelpa, kurā ikvienam būtu droši un patīkami uzturēties.</font></span></div>

<div style=""><br>
<span style="font-size:10pt;"><font face="Segoe UI, Helvetica Neue, sans-serif">Pārskaitījumam biedrības bankas kontā noderēs šis:</font></span></div>

<ul class=x_keyboardFocusClass style="font-family:&quot;Segoe UI&quot;,&quot;Helvetica Neue&quot;,sans-serif;font-size:9pt;">
	<li style="list-style-position:inside;"><span style="font-size:10pt;">Saņēmējs: <strong> APVIENĪBA PILSĒTA CILVĒKIEM BIEDRĪBA</strong></span></li>
	<li style="list-style-position:inside;"><span style="font-size:10pt;">Reģistrācijas nr.: 40008268906</span></li>
	<li style="list-style-position:inside;"><span style="font-size:10pt;">AS Swedbank, Swift kods: HABALV22</span></li>
	<li style="list-style-position:inside;"><span style="font-size:10pt;">Konta nr.: <strong> LV04HABA0551044255904</strong></span></li>
	<li class=x_keyboardFocusClass style="list-style-position:inside;"><span style="font-size:10pt;">Maksājuma mērķis: <strong>Dalībnieka nauda</strong>&#160;(maksājot no ārvalstu bankām, lūdzam norādīt arī personas kodu)</span></li>
</ul>

<div>&#160;</div>

<div><span style="font-size:10pt;"><span style="font-family:&quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, sans-serif;">&quot;Pilsēta cilvēkiem&quot; valde</span></span></div>
</div>
</div>
</div>


]]></xsl:template></xsl:stylesheet>