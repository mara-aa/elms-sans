## FontBakery report

fontbakery version: 1.0.0







## Check results



<details><summary>[24] ElmsSans-BoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 fsSelection value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-fsselection">opentype/fsselection</a></summary>
    <div>







* 🔥 **FAIL** <p>fsSelection Bold flag False does not match font style BoldItalic</p>
 [code: bad-BOLD]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>Font is italic, so post.italicAngle should be non-zero.</p>
 [code: zero-italic]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking head.macStyle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-mac-style">opentype/mac_style</a></summary>
    <div>







* 🔥 **FAIL** <p>head macStyle BOLD bit should be set.</p>
 [code: bad-BOLD]





</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font names are correct <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-font-names">googlefonts/font_names</a></summary>
    <div>







* 🔥 **FAIL** <p>Font names are incorrect:</p>
<table>
<thead>
<tr>
<th align="left">nameID</th>
<th align="left">current</th>
<th align="left">expected</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Family Name</td>
<td align="left"><strong>Elms Sans Bold</strong></td>
<td align="left"><strong>Elms Sans</strong></td>
</tr>
<tr>
<td align="left">Subfamily Name</td>
<td align="left"><strong>Italic</strong></td>
<td align="left"><strong>Bold Italic</strong></td>
</tr>
<tr>
<td align="left">Full Name</td>
<td align="left">Elms Sans Bold Italic</td>
<td align="left">Elms Sans Bold Italic</td>
</tr>
<tr>
<td align="left">Postscript Name</td>
<td align="left">ElmsSans-BoldItalic</td>
<td align="left">ElmsSans-BoldItalic</td>
</tr>
<tr>
<td align="left">Typographic Family Name</td>
<td align="left"><strong>Elms Sans</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
<tr>
<td align="left">Typographic Subfamily Name</td>
<td align="left"><strong>Bold Italic</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
</tbody>
</table>
 [code: bad-names]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 452 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 388:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 466:
multiply</p>
<p>Width = 460:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 435:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 910, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=320.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=234.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=246.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* a (U+0061): X=440.5,Y=481.5 (should be at x-height 480?)

* a (U+0061): X=355.0,Y=-1.5 (should be at baseline 0?)

* aacute (U+00E1): X=355.0,Y=-1.5 (should be at baseline 0?)

* abreve (U+0103): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EAF (U+1EAF): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EB7 (U+1EB7): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EB1 (U+1EB1): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EB5 (U+1EB5): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni01CE (U+01CE): X=355.0,Y=-1.5 (should be at baseline 0?)

* acircumflex (U+00E2): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EA5 (U+1EA5): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EAD (U+1EAD): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EA7 (U+1EA7): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EAB (U+1EAB): X=355.0,Y=-1.5 (should be at baseline 0?)

* adieresis (U+00E4): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni01DF (U+01DF): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1EA1 (U+1EA1): X=355.0,Y=-1.5 (should be at baseline 0?)

* agrave (U+00E0): X=355.0,Y=-1.5 (should be at baseline 0?)

* amacron (U+0101): X=355.0,Y=-1.5 (should be at baseline 0?)

* aogonek (U+0105): X=355.0,Y=-1.5 (should be at baseline 0?)

* aring (U+00E5): X=355.0,Y=-1.5 (should be at baseline 0?)

* atilde (U+00E3): X=355.0,Y=-1.5 (should be at baseline 0?)

* ae (U+00E6): X=142.5,Y=-1.5 (should be at baseline 0?)

* ae (U+00E6): X=531.5,Y=-2.0 (should be at baseline 0?)

* ae (U+00E6): X=304.5,Y=-2.0 (should be at baseline 0?)

* ccedilla (U+00E7): X=228.0,Y=-278.0 (should be at descender -280?)

* d (U+0064): X=440.5,Y=481.5 (should be at x-height 480?)

* d (U+0064): X=355.0,Y=-1.5 (should be at baseline 0?)

* dcaron (U+010F): X=355.0,Y=-1.5 (should be at baseline 0?)

* dcroat (U+0111): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1E0D (U+1E0D): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1E0F (U+1E0F): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni0229 (U+0229): X=221.0,Y=-278.0 (should be at descender -280?)

* g (U+0067): X=440.5,Y=481.5 (should be at x-height 480?)

* g (U+0067): X=355.0,Y=-1.5 (should be at baseline 0?)

* gbreve (U+011F): X=355.0,Y=-1.5 (should be at baseline 0?)

* gcaron (U+01E7): X=355.0,Y=-1.5 (should be at baseline 0?)

* gcircumflex (U+011D): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni0123 (U+0123): X=355.0,Y=-1.5 (should be at baseline 0?)

* gdotaccent (U+0121): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni1E21 (U+1E21): X=355.0,Y=-1.5 (should be at baseline 0?)

* uni01E5 (U+01E5): X=355.0,Y=-1.5 (should be at baseline 0?)

* h (U+0068): X=338.0,Y=480.5 (should be at x-height 480?)

* m (U+006D): X=328.0,Y=481.5 (should be at x-height 480?)

* n (U+006E): X=335.0,Y=480.5 (should be at x-height 480?)

* q (U+0071): X=440.5,Y=481.5 (should be at x-height 480?)

* q (U+0071): X=355.0,Y=-1.5 (should be at baseline 0?)

* r (U+0072): X=466.5,Y=478.0 (should be at x-height 480?)

* scedilla (U+015F): X=193.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=154.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=350.0,Y=-0.5 (should be at baseline 0?)

* uacute (U+00FA): X=350.0,Y=-0.5 (should be at baseline 0?)

* uni0289 (U+0289): X=390.0,Y=-0.5 (should be at baseline 0?)

* ubreve (U+016D): X=350.0,Y=-0.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=350.0,Y=-0.5 (should be at baseline 0?)

* udieresis (U+00FC): X=350.0,Y=-0.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=350.0,Y=-0.5 (should be at baseline 0?)

* ugrave (U+00F9): X=350.0,Y=-0.5 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=350.0,Y=-0.5 (should be at baseline 0?)

* umacron (U+016B): X=350.0,Y=-0.5 (should be at baseline 0?)

* uogonek (U+0173): X=350.0,Y=-0.5 (should be at baseline 0?)

* uring (U+016F): X=350.0,Y=-0.5 (should be at baseline 0?)

* utilde (U+0169): X=350.0,Y=-0.5 (should be at baseline 0?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=200.5,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=333.0,Y=699.0 (should be at cap-height 700?)

* four (U+0034): X=350.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=484.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=350.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=390.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=524.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=390.0,Y=1.0 (should be at baseline 0?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=324.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=436.0,Y=718.0 (should be at ascender 720?)

* integral (U+222B): X=309.0,Y=-1.0 (should be at baseline 0?)

* arrowup (U+2191): X=447.0,Y=719.0 (should be at ascender 720?)

* uni0327 (U+0327): X=78.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=78.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;438.0,729.0&gt;--&lt;447.0,719.0&gt;&gt; -&gt; L&lt;&lt;447.0,719.0&gt;--&lt;707.0,409.0&gt;&gt;

* one (U+0031): L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;386.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;338.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;556.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;242.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;257.0,349.0&gt;--&lt;240.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;257.0,349.0&gt;--&lt;240.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;257.0,349.0&gt;--&lt;240.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;865.0,254.0&gt;-&lt;865.0,254.0&gt;-&lt;861.5,237.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;371.0,496.0&gt;--&lt;375.0,496.0&gt;&gt;

* nine (U+0039) contains a short segment L&lt;&lt;331.0,204.0&gt;--&lt;326.0,204.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;377.0,496.0&gt;--&lt;381.0,496.0&gt;&gt;

* nine.lf contains a short segment L&lt;&lt;347.0,204.0&gt;--&lt;342.0,204.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;488.0,700.0&gt;--&lt;493.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;399.0,425.0&gt;-&lt;402.0,424.0&gt;-&lt;404.0,424.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;134.0,329.0&gt;-&lt;135.0,339.0&gt;-&lt;137.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;273.0,350.0&gt;-&lt;271.0,339.0&gt;-&lt;270.0,329.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;438.0,729.0&gt;--&lt;447.0,719.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-MediumItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>Font is italic, so post.italicAngle should be non-zero.</p>
 [code: zero-italic]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 460 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 396:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 435:
multiply</p>
<p>Width = 440:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 412:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 900, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=323.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=227.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=231.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* uni1EB1 (U+1EB1): X=443.0,Y=722.0 (should be at ascender 720?)

* uni1EB1 (U+1EB1): X=505.0,Y=722.0 (should be at ascender 720?)

* uni1EB1 (U+1EB1): X=443.0,Y=722.0 (should be at ascender 720?)

* ccedilla (U+00E7): X=225.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=219.0,Y=-278.0 (should be at descender -280?)

* h (U+0068): X=309.0,Y=478.5 (should be at x-height 480?)

* m (U+006D): X=298.5,Y=479.0 (should be at x-height 480?)

* n (U+006E): X=307.5,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=436.0,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=178.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=140.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=356.5,Y=1.5 (should be at baseline 0?)

* uacute (U+00FA): X=356.5,Y=1.5 (should be at baseline 0?)

* uni0289 (U+0289): X=405.5,Y=1.5 (should be at baseline 0?)

* ubreve (U+016D): X=356.5,Y=1.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=356.5,Y=1.5 (should be at baseline 0?)

* udieresis (U+00FC): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=356.5,Y=1.5 (should be at baseline 0?)

* ugrave (U+00F9): X=356.5,Y=1.5 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=356.5,Y=1.5 (should be at baseline 0?)

* umacron (U+016B): X=356.5,Y=1.5 (should be at baseline 0?)

* uogonek (U+0173): X=356.5,Y=1.5 (should be at baseline 0?)

* uring (U+016F): X=356.5,Y=1.5 (should be at baseline 0?)

* utilde (U+0169): X=356.5,Y=1.5 (should be at baseline 0?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordfeminine (U+00AA): X=310.0,Y=698.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=199.5,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=330.0,Y=699.0 (should be at cap-height 700?)

* period (U+002E): X=56.0,Y=2.0 (should be at baseline 0?)

* period (U+002E): X=144.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=76.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=164.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=56.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=144.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=230.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=318.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=404.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=492.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=63.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=151.0,Y=2.0 (should be at baseline 0?)

* question (U+003F): X=396.0,Y=718.0 (should be at ascender 720?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=305.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=440.0,Y=718.0 (should be at ascender 720?)

* uni0327 (U+0327): X=78.0,Y=-278.0 (should be at descender -280?)

* uni03060300: X=422.0,Y=722.0 (should be at ascender 720?)

* uni03060300: X=484.0,Y=722.0 (should be at ascender 720?)

* uni03060300: X=422.0,Y=722.0 (should be at ascender 720?)

* cedilla (U+00B8): X=78.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;354.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;338.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;524.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;227.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* ae (U+00E6) contains a short segment B&lt;&lt;859.0,254.0&gt;-&lt;859.0,254.0&gt;-&lt;856.0,239.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;379.0,419.0&gt;--&lt;380.0,419.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;154.0,333.0&gt;-&lt;155.0,341.0&gt;-&lt;157.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;262.0,350.0&gt;-&lt;261.0,341.0&gt;-&lt;260.0,333.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;496.0,667.0&gt;--&lt;496.0,667.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-ThinItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>Font is italic, so post.italicAngle should be non-zero.</p>
 [code: zero-italic]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 424 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 360:
notequal, equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 351:
multiply</p>
<p>Width = 390:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 920, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=341.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=222.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=517.5,Y=-1.0 (should be at baseline 0?)

* S (U+0053): X=335.0,Y=1.5 (should be at baseline 0?)

* Sacute (U+015A): X=335.0,Y=1.5 (should be at baseline 0?)

* Scaron (U+0160): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=201.0,Y=-278.0 (should be at descender -280?)

* Scircumflex (U+015C): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0218 (U+0218): X=335.0,Y=1.5 (should be at baseline 0?)

* uni1E62 (U+1E62): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* ae (U+00E6): X=557.5,Y=1.0 (should be at baseline 0?)

* c (U+0063): X=489.0,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=249.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=243.0,Y=-278.0 (should be at descender -280?)

* f (U+0066): X=311.5,Y=698.0 (should be at cap-height 700?)

* uni0123 (U+0123): X=482.0,Y=719.0 (should be at ascender 720?)

* r (U+0072): X=404.0,Y=478.5 (should be at x-height 480?)

* s (U+0073): X=236.5,Y=478.0 (should be at x-height 480?)

* scedilla (U+015F): X=196.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=123.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=532.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=564.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=96.0,Y=-279.0 (should be at descender -280?)

* y (U+0079): X=71.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=96.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=71.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=96.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=71.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=96.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=71.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=96.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=71.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=96.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=71.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=96.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=71.0,Y=-279.0 (should be at descender -280?)

* ordmasculine (U+00BA): X=486.5,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=616.0,Y=699.0 (should be at cap-height 700?)

* question (U+003F): X=151.5,Y=-2.0 (should be at baseline 0?)

* question (U+003F): X=180.0,Y=-2.0 (should be at baseline 0?)

* questiondown (U+00BF): X=105.5,Y=-0.5 (should be at baseline 0?)

* quotedblright (U+201D): X=165.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=232.5,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=260.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=327.5,Y=719.5 (should be at ascender 720?)

* quoteright (U+2019): X=165.0,Y=699.0 (should be at cap-height 700?)

* quoteright (U+2019): X=232.5,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=370.0,Y=699.0 (should be at cap-height 700?)

* sterling (U+00A3): X=477.0,Y=718.0 (should be at ascender 720?)

* uni0312 (U+0312): X=228.0,Y=719.0 (should be at ascender 720?)

* uni0327 (U+0327): X=88.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=88.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=165.0,Y=699.0 (should be at cap-height 700?)

* uni02BC (U+02BC): X=232.5,Y=719.5 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;193.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;302.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;363.0,700.0&gt;--&lt;444.0,700.0&gt;&gt; -&gt; L&lt;&lt;444.0,700.0&gt;--&lt;444.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;444.0,700.0&gt;--&lt;444.0,700.0&gt;&gt; -&gt; L&lt;&lt;444.0,700.0&gt;--&lt;472.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;155.0,700.0&gt;--&lt;191.0,700.0&gt;&gt; -&gt; L&lt;&lt;191.0,700.0&gt;--&lt;191.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;191.0,700.0&gt;--&lt;191.0,700.0&gt;&gt; -&gt; L&lt;&lt;191.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;231.0,613.0&gt;--&lt;663.0,609.0&gt;&gt; -&gt; L&lt;&lt;663.0,609.0&gt;--&lt;664.0,609.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): B&lt;&lt;655.0,603.5&gt;-&lt;685.0,552.0&gt;-&lt;685.0,488.0&gt;&gt;/L&lt;&lt;685.0,488.0&gt;--&lt;722.0,700.0&gt;&gt; = 9.900020183153895

* OE (U+0152): L&lt;&lt;599.0,0.0&gt;--&lt;636.0,212.0&gt;&gt;/B&lt;&lt;636.0,212.0&gt;-&lt;614.0,148.0&gt;-&lt;566.0,96.5&gt;&gt; = 9.07038762533261
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-SemiBoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>Font is italic, so post.italicAngle should be non-zero.</p>
 [code: zero-italic]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 456 among a set of 4 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 392:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 451:
multiply</p>
<p>Width = 450:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 424:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 905, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=322.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=231.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=238.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* a (U+0061): X=449.0,Y=479.0 (should be at x-height 480?)

* a (U+0061): X=364.5,Y=1.0 (should be at baseline 0?)

* aacute (U+00E1): X=364.5,Y=1.0 (should be at baseline 0?)

* abreve (U+0103): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EAF (U+1EAF): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EB7 (U+1EB7): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EB1 (U+1EB1): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EB5 (U+1EB5): X=364.5,Y=1.0 (should be at baseline 0?)

* uni01CE (U+01CE): X=364.5,Y=1.0 (should be at baseline 0?)

* acircumflex (U+00E2): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EA5 (U+1EA5): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EAD (U+1EAD): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EA7 (U+1EA7): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EAB (U+1EAB): X=364.5,Y=1.0 (should be at baseline 0?)

* adieresis (U+00E4): X=364.5,Y=1.0 (should be at baseline 0?)

* uni01DF (U+01DF): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EA1 (U+1EA1): X=364.5,Y=1.0 (should be at baseline 0?)

* agrave (U+00E0): X=364.5,Y=1.0 (should be at baseline 0?)

* amacron (U+0101): X=364.5,Y=1.0 (should be at baseline 0?)

* aogonek (U+0105): X=364.5,Y=1.0 (should be at baseline 0?)

* aring (U+00E5): X=364.5,Y=1.0 (should be at baseline 0?)

* atilde (U+00E3): X=364.5,Y=1.0 (should be at baseline 0?)

* ccedilla (U+00E7): X=226.0,Y=-278.0 (should be at descender -280?)

* d (U+0064): X=449.0,Y=479.0 (should be at x-height 480?)

* d (U+0064): X=364.5,Y=1.0 (should be at baseline 0?)

* dcaron (U+010F): X=364.5,Y=1.0 (should be at baseline 0?)

* dcroat (U+0111): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1E0D (U+1E0D): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1E0F (U+1E0F): X=364.5,Y=1.0 (should be at baseline 0?)

* uni0229 (U+0229): X=220.0,Y=-278.0 (should be at descender -280?)

* g (U+0067): X=449.0,Y=479.0 (should be at x-height 480?)

* g (U+0067): X=364.5,Y=1.0 (should be at baseline 0?)

* gbreve (U+011F): X=364.5,Y=1.0 (should be at baseline 0?)

* gcaron (U+01E7): X=364.5,Y=1.0 (should be at baseline 0?)

* gcircumflex (U+011D): X=364.5,Y=1.0 (should be at baseline 0?)

* uni0123 (U+0123): X=364.5,Y=1.0 (should be at baseline 0?)

* gdotaccent (U+0121): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1E21 (U+1E21): X=364.5,Y=1.0 (should be at baseline 0?)

* uni01E5 (U+01E5): X=364.5,Y=1.0 (should be at baseline 0?)

* h (U+0068): X=323.5,Y=479.5 (should be at x-height 480?)

* n (U+006E): X=321.5,Y=479.5 (should be at x-height 480?)

* q (U+0071): X=449.0,Y=479.0 (should be at x-height 480?)

* q (U+0071): X=364.5,Y=1.0 (should be at baseline 0?)

* r (U+0072): X=310.0,Y=481.5 (should be at x-height 480?)

* r (U+0072): X=451.0,Y=479.0 (should be at x-height 480?)

* scedilla (U+015F): X=186.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=147.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=353.5,Y=0.5 (should be at baseline 0?)

* uacute (U+00FA): X=353.5,Y=0.5 (should be at baseline 0?)

* uni0289 (U+0289): X=398.5,Y=0.5 (should be at baseline 0?)

* ubreve (U+016D): X=353.5,Y=0.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=353.5,Y=0.5 (should be at baseline 0?)

* udieresis (U+00FC): X=353.5,Y=0.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=353.5,Y=0.5 (should be at baseline 0?)

* ugrave (U+00F9): X=353.5,Y=0.5 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=353.5,Y=0.5 (should be at baseline 0?)

* umacron (U+016B): X=353.5,Y=0.5 (should be at baseline 0?)

* uogonek (U+0173): X=353.5,Y=0.5 (should be at baseline 0?)

* uring (U+016F): X=353.5,Y=0.5 (should be at baseline 0?)

* utilde (U+0169): X=353.5,Y=0.5 (should be at baseline 0?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=199.5,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=331.5,Y=699.0 (should be at cap-height 700?)

* four (U+0034): X=349.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=467.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=349.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=389.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=507.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=389.0,Y=1.0 (should be at baseline 0?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=315.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=438.0,Y=718.0 (should be at ascender 720?)

* uni0327 (U+0327): X=78.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=78.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;438.0,734.0&gt;--&lt;487.0,675.0&gt;&gt; -&gt; L&lt;&lt;487.0,675.0&gt;--&lt;707.0,412.0&gt;&gt;

* one (U+0031): L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;370.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;338.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;540.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;235.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;247.0,349.0&gt;--&lt;225.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;247.0,349.0&gt;--&lt;225.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;247.0,349.0&gt;--&lt;225.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;862.0,254.0&gt;-&lt;862.0,254.0&gt;-&lt;858.5,238.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* tbar (U+0167) contains a short segment L&lt;&lt;246.0,205.0&gt;--&lt;245.0,197.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;472.0,700.0&gt;--&lt;484.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;389.0,422.0&gt;--&lt;392.0,421.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;144.0,331.0&gt;-&lt;145.0,340.0&gt;-&lt;147.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;268.0,350.0&gt;-&lt;266.0,340.0&gt;-&lt;265.0,331.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-ExtraLightItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>Font is italic, so post.italicAngle should be non-zero.</p>
 [code: zero-italic]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 437 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 373:
notequal, equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 374:
multiply</p>
<p>Width = 403:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 912, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=336.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=223.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=507.5,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=209.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* uni01DF (U+01DF): X=275.0,Y=698.0 (should be at cap-height 700?)

* uni01DF (U+01DF): X=592.0,Y=698.0 (should be at cap-height 700?)

* ae (U+00E6): X=546.5,Y=-0.5 (should be at baseline 0?)

* c (U+0063): X=482.5,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=241.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=235.0,Y=-278.0 (should be at descender -280?)

* uni022B (U+022B): X=262.0,Y=698.0 (should be at cap-height 700?)

* uni022B (U+022B): X=579.0,Y=698.0 (should be at cap-height 700?)

* uni1E51 (U+1E51): X=410.0,Y=699.0 (should be at cap-height 700?)

* uni0254 (U+0254): X=37.0,Y=2.0 (should be at baseline 0?)

* oslash (U+00F8): X=206.0,Y=1.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=206.0,Y=1.0 (should be at baseline 0?)

* r (U+0072): X=410.0,Y=479.5 (should be at x-height 480?)

* scedilla (U+015F): X=188.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=127.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=74.0,Y=-279.0 (should be at descender -280?)

* y (U+0079): X=535.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=587.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=119.0,Y=-279.0 (should be at descender -280?)

* y (U+0079): X=74.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=74.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=119.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=74.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=74.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=119.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=74.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=74.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=119.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=119.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=74.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=74.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=119.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=119.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=74.0,Y=-279.0 (should be at descender -280?)

* ordmasculine (U+00BA): X=391.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=520.0,Y=699.0 (should be at cap-height 700?)

* comma (U+002C): X=41.5,Y=1.5 (should be at baseline 0?)

* semicolon (U+003B): X=61.5,Y=1.5 (should be at baseline 0?)

* question (U+003F): X=352.0,Y=698.0 (should be at cap-height 700?)

* question (U+003F): X=160.5,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=206.0,Y=1.0 (should be at baseline 0?)

* quotesinglbase (U+201A): X=48.5,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=48.5,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=161.5,Y=1.5 (should be at baseline 0?)

* quotedblright (U+201D): X=177.5,Y=721.5 (should be at ascender 720?)

* quotedblright (U+201D): X=283.5,Y=721.5 (should be at ascender 720?)

* quoteright (U+2019): X=177.5,Y=721.5 (should be at ascender 720?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* registered (U+00AE): X=325.0,Y=701.0 (should be at cap-height 700?)

* dollar (U+0024): X=220.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=343.0,Y=699.0 (should be at cap-height 700?)

* dollar (U+0024): X=386.0,Y=698.0 (should be at cap-height 700?)

* sterling (U+00A3): X=465.0,Y=718.0 (should be at ascender 720?)

* uni03040300: X=301.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=85.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=85.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=177.5,Y=721.5 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;185.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;314.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;355.0,700.0&gt;--&lt;456.0,700.0&gt;&gt; -&gt; L&lt;&lt;456.0,700.0&gt;--&lt;456.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;456.0,700.0&gt;--&lt;456.0,700.0&gt;&gt; -&gt; L&lt;&lt;456.0,700.0&gt;--&lt;484.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;151.0,700.0&gt;--&lt;197.0,700.0&gt;&gt; -&gt; L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt; -&gt; L&lt;&lt;197.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* G (U+0047) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;518.0,370.0&gt;--&lt;521.0,390.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;827.0,354.0&gt;--&lt;827.0,354.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;876.0,271.0&gt;-&lt;876.0,271.0&gt;-&lt;873.0,257.5&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;176.0,269.0&gt;--&lt;160.0,269.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;176.0,269.0&gt;--&lt;160.0,269.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;176.0,269.0&gt;--&lt;160.0,269.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;133.0,360.0&gt;--&lt;133.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;456.0,700.0&gt;--&lt;456.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;139.0,360.0&gt;--&lt;139.0,360.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt;

* braceleft (U+007B) contains a short segment L&lt;&lt;69.0,335.0&gt;--&lt;84.0,335.0&gt;&gt;

* braceright (U+007D) contains a short segment L&lt;&lt;510.0,284.0&gt;--&lt;495.0,284.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;334.0,400.0&gt;-&lt;340.0,399.0&gt;-&lt;346.0,397.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;404.0,700.0&gt;--&lt;405.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;461.0,691.0&gt;--&lt;460.0,690.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;670.0,618.0&gt;--&lt;669.0,614.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;669.0,614.0&gt;--&lt;670.0,614.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-LightItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>Font is italic, so post.italicAngle should be non-zero.</p>
 [code: zero-italic]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 451 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 387:
notequal, equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 397:
multiply</p>
<p>Width = 417:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 903, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=329.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=222.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=497.5,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=215.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* ae (U+00E6): X=535.5,Y=-1.5 (should be at baseline 0?)

* c (U+0063): X=476.0,Y=478.5 (should be at x-height 480?)

* ccedilla (U+00E7): X=232.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=226.0,Y=-278.0 (should be at descender -280?)

* uni0254 (U+0254): X=28.0,Y=-1.0 (should be at baseline 0?)

* oslash (U+00F8): X=205.0,Y=-2.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=205.0,Y=-2.0 (should be at baseline 0?)

* r (U+0072): X=415.0,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=179.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=129.0,Y=-278.0 (should be at descender -280?)

* ordmasculine (U+00BA): X=295.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=424.0,Y=699.0 (should be at cap-height 700?)

* period (U+002E): X=47.5,Y=-1.5 (should be at baseline 0?)

* period (U+002E): X=118.0,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=67.5,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=138.0,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=47.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=118.0,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=190.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=261.0,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=334.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=405.0,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=67.5,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=138.0,Y=-1.5 (should be at baseline 0?)

* quotedblleft (U+201C): X=253.0,Y=702.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=378.0,Y=702.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=175.0,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=293.0,Y=719.5 (should be at ascender 720?)

* quoteleft (U+2018): X=253.0,Y=702.0 (should be at cap-height 700?)

* quoteright (U+2019): X=175.0,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=217.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=339.0,Y=698.0 (should be at cap-height 700?)

* dollar (U+0024): X=279.0,Y=1.0 (should be at baseline 0?)

* sterling (U+00A3): X=453.0,Y=718.0 (should be at ascender 720?)

* uni0327 (U+0327): X=81.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=81.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=175.0,Y=719.5 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;177.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;326.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;347.0,700.0&gt;--&lt;468.0,700.0&gt;&gt; -&gt; L&lt;&lt;468.0,700.0&gt;--&lt;468.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;468.0,700.0&gt;--&lt;468.0,700.0&gt;&gt; -&gt; L&lt;&lt;468.0,700.0&gt;--&lt;496.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;147.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* G (U+0047) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;510.0,374.0&gt;--&lt;515.0,398.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;818.0,348.0&gt;--&lt;818.0,348.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;866.0,263.0&gt;-&lt;866.0,263.0&gt;-&lt;863.0,249.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;128.0,360.0&gt;--&lt;128.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;468.0,700.0&gt;--&lt;468.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;134.0,360.0&gt;--&lt;134.0,360.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;351.0,408.0&gt;-&lt;354.0,408.0&gt;-&lt;357.0,407.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;182.0,327.0&gt;-&lt;183.0,338.0&gt;-&lt;185.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;255.0,350.0&gt;-&lt;253.0,338.0&gt;-&lt;252.0,327.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;245.0,317.0&gt;--&lt;244.0,310.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;394.0,700.0&gt;--&lt;395.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;474.0,686.0&gt;--&lt;474.0,686.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;676.0,627.0&gt;--&lt;674.0,619.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;674.0,619.0&gt;--&lt;675.0,619.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[1] Family checks</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure VFs have 'ital' STAT axis. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-STAT-ital-axis">opentype/STAT/ital_axis</a></summary>
    <div>







* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Bold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-RegularItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Medium.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-BoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-HeavyItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraLight.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-MediumItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Heavy.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ThinItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Thin.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Light.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraLightItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Regular.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-LightItalic.ttf has no STAT table</p>
 [code: no-stat]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-Bold.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 452 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 388:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 466:
multiply</p>
<p>Width = 460:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 435:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 910, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=369.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=283.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=295.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* a (U+0061): X=355.5,Y=481.5 (should be at x-height 480?)

* a (U+0061): X=355.5,Y=-1.5 (should be at baseline 0?)

* aacute (U+00E1): X=355.5,Y=-1.5 (should be at baseline 0?)

* abreve (U+0103): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EAF (U+1EAF): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EB7 (U+1EB7): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EB1 (U+1EB1): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EB5 (U+1EB5): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni01CE (U+01CE): X=355.5,Y=-1.5 (should be at baseline 0?)

* acircumflex (U+00E2): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EA5 (U+1EA5): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EAD (U+1EAD): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EA7 (U+1EA7): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EAB (U+1EAB): X=355.5,Y=-1.5 (should be at baseline 0?)

* adieresis (U+00E4): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni01DF (U+01DF): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1EA1 (U+1EA1): X=355.5,Y=-1.5 (should be at baseline 0?)

* agrave (U+00E0): X=355.5,Y=-1.5 (should be at baseline 0?)

* amacron (U+0101): X=355.5,Y=-1.5 (should be at baseline 0?)

* aogonek (U+0105): X=355.5,Y=-1.5 (should be at baseline 0?)

* aring (U+00E5): X=355.5,Y=-1.5 (should be at baseline 0?)

* atilde (U+00E3): X=355.5,Y=-1.5 (should be at baseline 0?)

* ae (U+00E6): X=142.0,Y=-1.5 (should be at baseline 0?)

* ae (U+00E6): X=532.0,Y=-2.0 (should be at baseline 0?)

* ae (U+00E6): X=305.0,Y=-2.0 (should be at baseline 0?)

* ccedilla (U+00E7): X=277.0,Y=-278.0 (should be at descender -280?)

* d (U+0064): X=355.5,Y=481.5 (should be at x-height 480?)

* d (U+0064): X=355.5,Y=-1.5 (should be at baseline 0?)

* dcaron (U+010F): X=355.5,Y=-1.5 (should be at baseline 0?)

* dcroat (U+0111): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1E0D (U+1E0D): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1E0F (U+1E0F): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni0229 (U+0229): X=270.0,Y=-278.0 (should be at descender -280?)

* g (U+0067): X=355.5,Y=481.5 (should be at x-height 480?)

* g (U+0067): X=355.5,Y=-1.5 (should be at baseline 0?)

* gbreve (U+011F): X=355.5,Y=-1.5 (should be at baseline 0?)

* gcaron (U+01E7): X=355.5,Y=-1.5 (should be at baseline 0?)

* gcircumflex (U+011D): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni0123 (U+0123): X=355.5,Y=-1.5 (should be at baseline 0?)

* gdotaccent (U+0121): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni1E21 (U+1E21): X=355.5,Y=-1.5 (should be at baseline 0?)

* uni01E5 (U+01E5): X=355.5,Y=-1.5 (should be at baseline 0?)

* h (U+0068): X=253.5,Y=480.5 (should be at x-height 480?)

* m (U+006D): X=243.5,Y=481.5 (should be at x-height 480?)

* n (U+006E): X=250.0,Y=480.5 (should be at x-height 480?)

* q (U+0071): X=355.5,Y=481.5 (should be at x-height 480?)

* q (U+0071): X=355.5,Y=-1.5 (should be at baseline 0?)

* r (U+0072): X=382.0,Y=478.0 (should be at x-height 480?)

* scedilla (U+015F): X=242.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=203.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=350.0,Y=-0.5 (should be at baseline 0?)

* uacute (U+00FA): X=350.0,Y=-0.5 (should be at baseline 0?)

* uni0289 (U+0289): X=390.0,Y=-0.5 (should be at baseline 0?)

* ubreve (U+016D): X=350.0,Y=-0.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=350.0,Y=-0.5 (should be at baseline 0?)

* udieresis (U+00FC): X=350.0,Y=-0.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=350.0,Y=-0.5 (should be at baseline 0?)

* ugrave (U+00F9): X=350.0,Y=-0.5 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=350.0,Y=-0.5 (should be at baseline 0?)

* umacron (U+016B): X=350.0,Y=-0.5 (should be at baseline 0?)

* uogonek (U+0173): X=350.0,Y=-0.5 (should be at baseline 0?)

* uring (U+016F): X=350.0,Y=-0.5 (should be at baseline 0?)

* utilde (U+0169): X=350.0,Y=-0.5 (should be at baseline 0?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=77.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=210.0,Y=699.0 (should be at cap-height 700?)

* four (U+0034): X=350.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=484.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=350.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=390.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=524.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=390.0,Y=1.0 (should be at baseline 0?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=324.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=309.0,Y=718.0 (should be at ascender 720?)

* integral (U+222B): X=309.0,Y=-1.0 (should be at baseline 0?)

* arrowup (U+2191): X=320.0,Y=719.0 (should be at ascender 720?)

* uni0327 (U+0327): X=127.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=127.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;310.0,729.0&gt;--&lt;320.0,719.0&gt;&gt; -&gt; L&lt;&lt;320.0,719.0&gt;--&lt;635.0,409.0&gt;&gt;

* one (U+0031): L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;263.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;215.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;433.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;118.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* exclam (U+0021): L&lt;&lt;183.0,720.0&gt;--&lt;181.0,199.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;60.0,199.0&gt;--&lt;58.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;181.0,225.0&gt;--&lt;183.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;58.0,-296.0&gt;--&lt;60.0,225.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;439.0,163.0&gt;--&lt;437.0,403.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;568.0,164.0&gt;--&lt;439.0,163.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;195.0,349.0&gt;--&lt;179.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;195.0,349.0&gt;--&lt;179.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;195.0,349.0&gt;--&lt;179.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;820.0,254.0&gt;-&lt;820.0,254.0&gt;-&lt;819.5,237.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;283.0,496.0&gt;--&lt;288.0,496.0&gt;&gt;

* nine (U+0039) contains a short segment L&lt;&lt;295.0,204.0&gt;--&lt;290.0,204.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;289.0,496.0&gt;--&lt;294.0,496.0&gt;&gt;

* nine.lf contains a short segment L&lt;&lt;311.0,204.0&gt;--&lt;306.0,204.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;364.0,700.0&gt;--&lt;370.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;324.0,425.0&gt;-&lt;327.0,424.0&gt;-&lt;330.0,424.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;76.0,329.0&gt;-&lt;76.0,339.0&gt;-&lt;76.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;211.0,350.0&gt;-&lt;211.0,339.0&gt;-&lt;212.0,329.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;310.0,729.0&gt;--&lt;320.0,719.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-Medium.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 460 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 396:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 435:
multiply</p>
<p>Width = 440:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 412:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 900, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=372.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=276.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=280.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* uni1EB1 (U+1EB1): X=316.0,Y=722.0 (should be at ascender 720?)

* uni1EB1 (U+1EB1): X=378.0,Y=722.0 (should be at ascender 720?)

* uni1EB1 (U+1EB1): X=316.0,Y=722.0 (should be at ascender 720?)

* ccedilla (U+00E7): X=274.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=268.0,Y=-278.0 (should be at descender -280?)

* h (U+0068): X=225.0,Y=478.5 (should be at x-height 480?)

* m (U+006D): X=214.5,Y=479.0 (should be at x-height 480?)

* n (U+006E): X=223.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=351.5,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=227.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=189.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=356.0,Y=1.5 (should be at baseline 0?)

* uacute (U+00FA): X=356.0,Y=1.5 (should be at baseline 0?)

* uni0289 (U+0289): X=405.0,Y=1.5 (should be at baseline 0?)

* ubreve (U+016D): X=356.0,Y=1.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=356.0,Y=1.5 (should be at baseline 0?)

* udieresis (U+00FC): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=356.0,Y=1.5 (should be at baseline 0?)

* ugrave (U+00F9): X=356.0,Y=1.5 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=356.0,Y=1.5 (should be at baseline 0?)

* umacron (U+016B): X=356.0,Y=1.5 (should be at baseline 0?)

* uogonek (U+0173): X=356.0,Y=1.5 (should be at baseline 0?)

* uring (U+016F): X=356.0,Y=1.5 (should be at baseline 0?)

* utilde (U+0169): X=356.0,Y=1.5 (should be at baseline 0?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordfeminine (U+00AA): X=187.0,Y=698.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=76.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=207.0,Y=699.0 (should be at cap-height 700?)

* period (U+002E): X=56.0,Y=2.0 (should be at baseline 0?)

* period (U+002E): X=144.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=76.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=164.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=56.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=144.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=230.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=318.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=404.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=492.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=63.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=151.0,Y=2.0 (should be at baseline 0?)

* question (U+003F): X=270.0,Y=718.0 (should be at ascender 720?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=305.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=313.0,Y=718.0 (should be at ascender 720?)

* uni0327 (U+0327): X=127.0,Y=-278.0 (should be at descender -280?)

* uni03060300: X=295.0,Y=722.0 (should be at ascender 720?)

* uni03060300: X=357.0,Y=722.0 (should be at ascender 720?)

* uni03060300: X=295.0,Y=722.0 (should be at ascender 720?)

* cedilla (U+00B8): X=127.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;231.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;215.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;401.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;104.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* exclam (U+0021): L&lt;&lt;155.0,720.0&gt;--&lt;153.0,181.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;61.0,181.0&gt;--&lt;59.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;153.0,243.0&gt;--&lt;155.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;59.0,-296.0&gt;--&lt;61.0,243.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;465.0,168.0&gt;--&lt;464.0,455.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* ae (U+00E6) contains a short segment B&lt;&lt;815.0,254.0&gt;-&lt;815.0,254.0&gt;-&lt;814.5,239.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;66.0,360.0&gt;--&lt;66.0,360.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;305.0,419.0&gt;--&lt;306.0,419.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;96.0,333.0&gt;-&lt;95.0,341.0&gt;-&lt;95.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;200.0,350.0&gt;-&lt;200.0,341.0&gt;-&lt;201.0,333.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;379.0,667.0&gt;--&lt;379.0,667.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[22] ElmsSans-RegularItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font names are correct <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-font-names">googlefonts/font_names</a></summary>
    <div>







* 🔥 **FAIL** <p>Font names are incorrect:</p>
<table>
<thead>
<tr>
<th align="left">nameID</th>
<th align="left">current</th>
<th align="left">expected</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Family Name</td>
<td align="left"><strong>Elms Sans Regular</strong></td>
<td align="left"><strong>Elms Sans</strong></td>
</tr>
<tr>
<td align="left">Subfamily Name</td>
<td align="left">Italic</td>
<td align="left">Italic</td>
</tr>
<tr>
<td align="left">Full Name</td>
<td align="left"><strong>Elms Sans Regular Italic</strong></td>
<td align="left"><strong>Elms Sans Italic</strong></td>
</tr>
<tr>
<td align="left">Postscript Name</td>
<td align="left"><strong>ElmsSans-RegularItalic</strong></td>
<td align="left"><strong>ElmsSans-Italic</strong></td>
</tr>
<tr>
<td align="left">Typographic Family Name</td>
<td align="left"><strong>Elms Sans</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
<tr>
<td align="left">Typographic Subfamily Name</td>
<td align="left"><strong>Regular Italic</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
</tbody>
</table>
 [code: bad-names]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 464 among a set of 4 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 400:
notequal, equal</p>
<p>Width = 420:
multiply</p>
<p>Width = 430:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;472.0,700.0&gt;--&lt;472.0,700.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 895, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=324.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=223.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=487.5,Y=-2.0 (should be at baseline 0?)

* Scedilla (U+015E): X=223.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* ccedilla (U+00E7): X=224.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=218.0,Y=-278.0 (should be at descender -280?)

* uni0123 (U+0123): X=478.0,Y=699.0 (should be at cap-height 700?)

* r (U+0072): X=281.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=421.0,Y=481.5 (should be at x-height 480?)

* scedilla (U+015F): X=171.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=133.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=199.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=329.0,Y=699.0 (should be at cap-height 700?)

* question (U+003F): X=390.0,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=172.0,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=302.0,Y=718.0 (should be at ascender 720?)

* quoteright (U+2019): X=172.0,Y=718.0 (should be at ascender 720?)

* ampersand (U+0026): X=389.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=295.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=442.0,Y=718.0 (should be at ascender 720?)

* uni0312 (U+0312): X=269.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=78.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=78.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=172.0,Y=718.0 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;472.0,700.0&gt;--&lt;472.0,700.0&gt;&gt; -&gt; L&lt;&lt;472.0,700.0&gt;--&lt;472.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;338.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;338.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;508.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;220.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;315.0,380.0&gt;--&lt;315.0,380.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;315.0,380.0&gt;--&lt;315.0,380.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;315.0,380.0&gt;--&lt;315.0,380.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;857.0,254.0&gt;-&lt;857.0,254.0&gt;-&lt;854.0,240.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;164.0,335.0&gt;-&lt;165.0,342.0&gt;-&lt;167.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;257.0,350.0&gt;-&lt;255.0,342.0&gt;-&lt;254.0,335.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;384.0,700.0&gt;--&lt;385.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;472.0,700.0&gt;--&lt;472.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;472.0,700.0&gt;--&lt;472.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;487.0,682.0&gt;--&lt;487.0,682.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-SemiBold.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 456 among a set of 4 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 392:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 451:
multiply</p>
<p>Width = 450:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 424:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 905, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=371.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=280.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=287.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* a (U+0061): X=364.5,Y=479.0 (should be at x-height 480?)

* a (U+0061): X=364.5,Y=1.0 (should be at baseline 0?)

* aacute (U+00E1): X=364.5,Y=1.0 (should be at baseline 0?)

* abreve (U+0103): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EAF (U+1EAF): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EB7 (U+1EB7): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EB1 (U+1EB1): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EB5 (U+1EB5): X=364.5,Y=1.0 (should be at baseline 0?)

* uni01CE (U+01CE): X=364.5,Y=1.0 (should be at baseline 0?)

* acircumflex (U+00E2): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EA5 (U+1EA5): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EAD (U+1EAD): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EA7 (U+1EA7): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EAB (U+1EAB): X=364.5,Y=1.0 (should be at baseline 0?)

* adieresis (U+00E4): X=364.5,Y=1.0 (should be at baseline 0?)

* uni01DF (U+01DF): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1EA1 (U+1EA1): X=364.5,Y=1.0 (should be at baseline 0?)

* agrave (U+00E0): X=364.5,Y=1.0 (should be at baseline 0?)

* amacron (U+0101): X=364.5,Y=1.0 (should be at baseline 0?)

* aogonek (U+0105): X=364.5,Y=1.0 (should be at baseline 0?)

* aring (U+00E5): X=364.5,Y=1.0 (should be at baseline 0?)

* atilde (U+00E3): X=364.5,Y=1.0 (should be at baseline 0?)

* ccedilla (U+00E7): X=275.0,Y=-278.0 (should be at descender -280?)

* d (U+0064): X=364.5,Y=479.0 (should be at x-height 480?)

* d (U+0064): X=364.5,Y=1.0 (should be at baseline 0?)

* dcaron (U+010F): X=364.5,Y=1.0 (should be at baseline 0?)

* dcroat (U+0111): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1E0D (U+1E0D): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1E0F (U+1E0F): X=364.5,Y=1.0 (should be at baseline 0?)

* uni0229 (U+0229): X=269.0,Y=-278.0 (should be at descender -280?)

* g (U+0067): X=364.5,Y=479.0 (should be at x-height 480?)

* g (U+0067): X=364.5,Y=1.0 (should be at baseline 0?)

* gbreve (U+011F): X=364.5,Y=1.0 (should be at baseline 0?)

* gcaron (U+01E7): X=364.5,Y=1.0 (should be at baseline 0?)

* gcircumflex (U+011D): X=364.5,Y=1.0 (should be at baseline 0?)

* uni0123 (U+0123): X=364.5,Y=1.0 (should be at baseline 0?)

* gdotaccent (U+0121): X=364.5,Y=1.0 (should be at baseline 0?)

* uni1E21 (U+1E21): X=364.5,Y=1.0 (should be at baseline 0?)

* uni01E5 (U+01E5): X=364.5,Y=1.0 (should be at baseline 0?)

* h (U+0068): X=239.5,Y=479.5 (should be at x-height 480?)

* n (U+006E): X=236.5,Y=479.5 (should be at x-height 480?)

* q (U+0071): X=364.5,Y=479.0 (should be at x-height 480?)

* q (U+0071): X=364.5,Y=1.0 (should be at baseline 0?)

* r (U+0072): X=225.0,Y=481.5 (should be at x-height 480?)

* r (U+0072): X=367.0,Y=479.0 (should be at x-height 480?)

* scedilla (U+015F): X=235.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=196.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=353.0,Y=0.5 (should be at baseline 0?)

* uacute (U+00FA): X=353.0,Y=0.5 (should be at baseline 0?)

* uni0289 (U+0289): X=398.0,Y=0.5 (should be at baseline 0?)

* ubreve (U+016D): X=353.0,Y=0.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=353.0,Y=0.5 (should be at baseline 0?)

* udieresis (U+00FC): X=353.0,Y=0.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=353.0,Y=0.5 (should be at baseline 0?)

* ugrave (U+00F9): X=353.0,Y=0.5 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=353.0,Y=0.5 (should be at baseline 0?)

* umacron (U+016B): X=353.0,Y=0.5 (should be at baseline 0?)

* uogonek (U+0173): X=353.0,Y=0.5 (should be at baseline 0?)

* uring (U+016F): X=353.0,Y=0.5 (should be at baseline 0?)

* utilde (U+0169): X=353.0,Y=0.5 (should be at baseline 0?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=76.5,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=208.5,Y=699.0 (should be at cap-height 700?)

* four (U+0034): X=349.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=467.0,Y=1.0 (should be at baseline 0?)

* four (U+0034): X=349.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=389.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=507.0,Y=1.0 (should be at baseline 0?)

* four.lf: X=389.0,Y=1.0 (should be at baseline 0?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=314.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=311.0,Y=718.0 (should be at ascender 720?)

* uni0327 (U+0327): X=127.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=127.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;308.0,734.0&gt;--&lt;368.0,675.0&gt;&gt; -&gt; L&lt;&lt;368.0,675.0&gt;--&lt;634.0,412.0&gt;&gt;

* one (U+0031): L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;247.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;215.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;417.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;111.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* exclam (U+0021): L&lt;&lt;169.0,720.0&gt;--&lt;167.0,190.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;61.0,190.0&gt;--&lt;59.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;167.0,234.0&gt;--&lt;169.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;59.0,-296.0&gt;--&lt;61.0,234.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;452.0,166.0&gt;--&lt;450.0,429.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;569.0,167.0&gt;--&lt;452.0,166.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;185.0,349.0&gt;--&lt;163.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;185.0,349.0&gt;--&lt;163.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;185.0,349.0&gt;--&lt;163.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;817.0,254.0&gt;-&lt;817.0,254.0&gt;-&lt;816.5,238.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* tbar (U+0167) contains a short segment L&lt;&lt;210.0,205.0&gt;--&lt;210.0,197.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;349.0,700.0&gt;--&lt;360.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;314.0,422.0&gt;--&lt;318.0,421.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;86.0,331.0&gt;-&lt;85.0,340.0&gt;-&lt;85.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;206.0,350.0&gt;-&lt;206.0,340.0&gt;-&lt;206.0,331.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-ExtraLight.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 437 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 373:
notequal, equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 374:
multiply</p>
<p>Width = 403:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 912, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=385.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=272.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=508.0,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=258.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* uni01DF (U+01DF): X=152.0,Y=698.0 (should be at cap-height 700?)

* uni01DF (U+01DF): X=468.0,Y=698.0 (should be at cap-height 700?)

* ae (U+00E6): X=546.5,Y=-0.5 (should be at baseline 0?)

* c (U+0063): X=398.5,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=290.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=284.0,Y=-278.0 (should be at descender -280?)

* uni022B (U+022B): X=140.0,Y=698.0 (should be at cap-height 700?)

* uni022B (U+022B): X=456.0,Y=698.0 (should be at cap-height 700?)

* uni1E51 (U+1E51): X=287.0,Y=699.0 (should be at cap-height 700?)

* uni0254 (U+0254): X=37.0,Y=2.0 (should be at baseline 0?)

* oslash (U+00F8): X=206.0,Y=1.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=206.0,Y=1.0 (should be at baseline 0?)

* r (U+0072): X=325.0,Y=479.5 (should be at x-height 480?)

* scedilla (U+015F): X=237.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=176.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=123.0,Y=-279.0 (should be at descender -280?)

* y (U+0079): X=450.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=502.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=168.0,Y=-279.0 (should be at descender -280?)

* y (U+0079): X=123.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=123.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=168.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=123.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=123.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=168.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=123.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=123.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=168.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=168.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=123.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=123.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=168.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=168.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=123.0,Y=-279.0 (should be at descender -280?)

* ordmasculine (U+00BA): X=267.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=397.0,Y=699.0 (should be at cap-height 700?)

* comma (U+002C): X=41.0,Y=1.5 (should be at baseline 0?)

* semicolon (U+003B): X=61.0,Y=1.5 (should be at baseline 0?)

* question (U+003F): X=229.0,Y=698.0 (should be at cap-height 700?)

* question (U+003F): X=160.5,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=205.5,Y=1.0 (should be at baseline 0?)

* quotesinglbase (U+201A): X=48.0,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=48.0,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=161.0,Y=1.5 (should be at baseline 0?)

* quotedblright (U+201D): X=50.5,Y=721.5 (should be at ascender 720?)

* quotedblright (U+201D): X=156.5,Y=721.5 (should be at ascender 720?)

* quoteright (U+2019): X=50.5,Y=721.5 (should be at ascender 720?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* registered (U+00AE): X=201.0,Y=701.0 (should be at cap-height 700?)

* dollar (U+0024): X=220.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=220.0,Y=699.0 (should be at cap-height 700?)

* dollar (U+0024): X=263.0,Y=698.0 (should be at cap-height 700?)

* sterling (U+00A3): X=338.0,Y=718.0 (should be at ascender 720?)

* uni03040300: X=178.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=134.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=134.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=50.5,Y=721.5 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;191.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;62.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;232.0,700.0&gt;--&lt;333.0,700.0&gt;&gt; -&gt; L&lt;&lt;333.0,700.0&gt;--&lt;333.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;333.0,700.0&gt;--&lt;333.0,700.0&gt;&gt; -&gt; L&lt;&lt;333.0,700.0&gt;--&lt;361.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;28.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* ae (U+00E6): L&lt;&lt;410.0,243.0&gt;--&lt;269.0,242.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;129.0,720.0&gt;--&lt;127.0,159.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;86.0,159.0&gt;--&lt;84.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;127.0,265.0&gt;--&lt;129.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;84.0,-296.0&gt;--&lt;86.0,265.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;117.0,621.0&gt;--&lt;561.0,618.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;481.0,571.0&gt;--&lt;117.0,572.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* G (U+0047) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;453.0,370.0&gt;--&lt;453.0,390.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;828.0,271.0&gt;-&lt;828.0,271.0&gt;-&lt;827.5,257.5&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;333.0,700.0&gt;--&lt;333.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;263.0,400.0&gt;-&lt;270.0,399.0&gt;-&lt;276.0,397.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;281.0,700.0&gt;--&lt;281.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;339.0,691.0&gt;--&lt;339.0,690.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;561.0,618.0&gt;--&lt;561.0,614.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;561.0,614.0&gt;--&lt;561.0,614.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[23] ElmsSans-Heavy.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font names are correct <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-font-names">googlefonts/font_names</a></summary>
    <div>







* 🔥 **FAIL** <p>Font names are incorrect:</p>
<table>
<thead>
<tr>
<th align="left">nameID</th>
<th align="left">current</th>
<th align="left">expected</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Family Name</td>
<td align="left">Elms Sans Heavy</td>
<td align="left">Elms Sans Heavy</td>
</tr>
<tr>
<td align="left">Subfamily Name</td>
<td align="left">Regular</td>
<td align="left">Regular</td>
</tr>
<tr>
<td align="left">Full Name</td>
<td align="left"><strong>Elms Sans Heavy</strong></td>
<td align="left"><strong>Elms Sans Heavy Regular</strong></td>
</tr>
<tr>
<td align="left">Postscript Name</td>
<td align="left"><strong>ElmsSans-Heavy</strong></td>
<td align="left"><strong>ElmsSansHeavy-Regular</strong></td>
</tr>
<tr>
<td align="left">Typographic Family Name</td>
<td align="left"><strong>Elms Sans</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
<tr>
<td align="left">Typographic Subfamily Name</td>
<td align="left"><strong>Heavy</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
</tbody>
</table>
 [code: bad-names]



* ⚠️ **WARN** <p>Regular missing from full name</p>
 [code: lacks-regular]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check the OS/2 usWeightClass is appropriate for the font's best SubFamily name. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-weightclass">googlefonts/weightclass</a></summary>
    <div>







* 🔥 **FAIL** <p>Best SubFamily name is 'Heavy'. Expected OS/2 usWeightClass is 400, got 800.</p>
 [code: bad-value]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 448 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 384:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 482:
multiply</p>
<p>Width = 470:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 447:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 915, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=368.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=287.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=302.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* ae (U+00E6): X=141.5,Y=-1.0 (should be at baseline 0?)

* ae (U+00E6): X=689.0,Y=-2.0 (should be at baseline 0?)

* ae (U+00E6): X=534.5,Y=-1.5 (should be at baseline 0?)

* ae (U+00E6): X=305.5,Y=-1.5 (should be at baseline 0?)

* ccedilla (U+00E7): X=278.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=271.0,Y=-278.0 (should be at descender -280?)

* h (U+0068): X=268.0,Y=482.0 (should be at x-height 480?)

* j.ss01: X=148.0,Y=722.0 (should be at ascender 720?)

* n (U+006E): X=263.5,Y=482.0 (should be at x-height 480?)

* scedilla (U+015F): X=250.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=210.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=347.0,Y=-2.0 (should be at baseline 0?)

* uacute (U+00FA): X=347.0,Y=-2.0 (should be at baseline 0?)

* uni0289 (U+0289): X=383.0,Y=-2.0 (should be at baseline 0?)

* ubreve (U+016D): X=347.0,Y=-2.0 (should be at baseline 0?)

* ucircumflex (U+00FB): X=347.0,Y=-2.0 (should be at baseline 0?)

* udieresis (U+00FC): X=347.0,Y=-2.0 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=347.0,Y=-2.0 (should be at baseline 0?)

* ugrave (U+00F9): X=347.0,Y=-2.0 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=347.0,Y=-2.0 (should be at baseline 0?)

* umacron (U+016B): X=347.0,Y=-2.0 (should be at baseline 0?)

* uogonek (U+0173): X=347.0,Y=-2.0 (should be at baseline 0?)

* uring (U+016F): X=347.0,Y=-2.0 (should be at baseline 0?)

* utilde (U+0169): X=347.0,Y=-2.0 (should be at baseline 0?)

* y (U+0079): X=252.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=252.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=252.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=252.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=252.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=252.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=252.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=78.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=211.0,Y=699.0 (should be at cap-height 700?)

* four (U+0034): X=352.0,Y=2.0 (should be at baseline 0?)

* four (U+0034): X=500.0,Y=2.0 (should be at baseline 0?)

* four (U+0034): X=352.0,Y=2.0 (should be at baseline 0?)

* four.lf: X=392.0,Y=2.0 (should be at baseline 0?)

* four.lf: X=540.0,Y=2.0 (should be at baseline 0?)

* four.lf: X=392.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=333.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=307.0,Y=718.0 (should be at ascender 720?)

* arrowup (U+2191): X=315.0,Y=721.0 (should be at ascender 720?)

* uni0327 (U+0327): X=127.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=127.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;311.0,725.0&gt;--&lt;315.0,721.0&gt;&gt; -&gt; L&lt;&lt;315.0,721.0&gt;--&lt;635.0,406.0&gt;&gt;

* one (U+0031): L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;279.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;215.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;449.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;126.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* exclam (U+0021): L&lt;&lt;197.0,720.0&gt;--&lt;195.0,208.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;60.0,208.0&gt;--&lt;58.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;195.0,216.0&gt;--&lt;197.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;58.0,-296.0&gt;--&lt;60.0,216.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;568.0,162.0&gt;--&lt;426.0,161.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;205.0,349.0&gt;--&lt;194.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;205.0,349.0&gt;--&lt;194.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;205.0,349.0&gt;--&lt;194.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;173.0,349.0&gt;--&lt;155.0,349.0&gt;&gt;

* uni0244 (U+0244) contains a short segment L&lt;&lt;796.0,313.0&gt;--&lt;796.0,294.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;822.0,254.0&gt;-&lt;822.0,254.0&gt;-&lt;821.5,236.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;380.0,303.0&gt;--&lt;380.0,303.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;380.0,130.0&gt;--&lt;380.0,130.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;333.0,428.0&gt;-&lt;337.0,427.0&gt;-&lt;341.0,426.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;66.0,327.0&gt;-&lt;66.0,338.0&gt;-&lt;66.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;66.0,350.0&gt;-&lt;66.0,361.0&gt;-&lt;66.0,371.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;217.0,371.0&gt;-&lt;217.0,361.0&gt;-&lt;217.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;217.0,350.0&gt;-&lt;217.0,338.0&gt;-&lt;218.0,327.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;311.0,725.0&gt;--&lt;315.0,721.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[22] ElmsSans-HeavyItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font names are correct <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-font-names">googlefonts/font_names</a></summary>
    <div>







* 🔥 **FAIL** <p>Font names are incorrect:</p>
<table>
<thead>
<tr>
<th align="left">nameID</th>
<th align="left">current</th>
<th align="left">expected</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Family Name</td>
<td align="left">Elms Sans Heavy</td>
<td align="left">Elms Sans Heavy</td>
</tr>
<tr>
<td align="left">Subfamily Name</td>
<td align="left">Italic</td>
<td align="left">Italic</td>
</tr>
<tr>
<td align="left">Full Name</td>
<td align="left">Elms Sans Heavy Italic</td>
<td align="left">Elms Sans Heavy Italic</td>
</tr>
<tr>
<td align="left">Postscript Name</td>
<td align="left"><strong>ElmsSans-HeavyItalic</strong></td>
<td align="left"><strong>ElmsSansHeavy-Italic</strong></td>
</tr>
<tr>
<td align="left">Typographic Family Name</td>
<td align="left"><strong>Elms Sans</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
<tr>
<td align="left">Typographic Subfamily Name</td>
<td align="left"><strong>Heavy Italic</strong></td>
<td align="left"><strong>N/A</strong></td>
</tr>
</tbody>
</table>
 [code: bad-names]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check the OS/2 usWeightClass is appropriate for the font's best SubFamily name. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-weightclass">googlefonts/weightclass</a></summary>
    <div>







* 🔥 **FAIL** <p>Best SubFamily name is 'Heavy Italic'. Expected OS/2 usWeightClass is 400, got 800.</p>
 [code: bad-value]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 448 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 384:
equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 482:
multiply</p>
<p>Width = 470:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 447:
notequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 915, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=319.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=238.0,Y=-278.0 (should be at descender -280?)

* Scedilla (U+015E): X=253.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* ae (U+00E6): X=141.5,Y=-1.0 (should be at baseline 0?)

* ae (U+00E6): X=688.5,Y=-2.0 (should be at baseline 0?)

* ae (U+00E6): X=534.0,Y=-1.5 (should be at baseline 0?)

* ae (U+00E6): X=305.0,Y=-1.5 (should be at baseline 0?)

* ccedilla (U+00E7): X=229.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=222.0,Y=-278.0 (should be at descender -280?)

* h (U+0068): X=352.5,Y=482.0 (should be at x-height 480?)

* j.ss01: X=275.0,Y=722.0 (should be at ascender 720?)

* n (U+006E): X=348.5,Y=482.0 (should be at x-height 480?)

* scedilla (U+015F): X=201.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=161.0,Y=-278.0 (should be at descender -280?)

* u (U+0075): X=346.5,Y=-2.0 (should be at baseline 0?)

* uacute (U+00FA): X=346.5,Y=-2.0 (should be at baseline 0?)

* uni0289 (U+0289): X=382.5,Y=-2.0 (should be at baseline 0?)

* ubreve (U+016D): X=346.5,Y=-2.0 (should be at baseline 0?)

* ucircumflex (U+00FB): X=346.5,Y=-2.0 (should be at baseline 0?)

* udieresis (U+00FC): X=346.5,Y=-2.0 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=346.5,Y=-2.0 (should be at baseline 0?)

* ugrave (U+00F9): X=346.5,Y=-2.0 (should be at baseline 0?)

* uhungarumlaut (U+0171): X=346.5,Y=-2.0 (should be at baseline 0?)

* umacron (U+016B): X=346.5,Y=-2.0 (should be at baseline 0?)

* uogonek (U+0173): X=346.5,Y=-2.0 (should be at baseline 0?)

* uring (U+016F): X=346.5,Y=-2.0 (should be at baseline 0?)

* utilde (U+0169): X=346.5,Y=-2.0 (should be at baseline 0?)

* y (U+0079): X=252.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=252.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=252.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=252.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=252.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=252.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=252.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=201.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=335.0,Y=699.0 (should be at cap-height 700?)

* four (U+0034): X=352.0,Y=2.0 (should be at baseline 0?)

* four (U+0034): X=501.0,Y=2.0 (should be at baseline 0?)

* four (U+0034): X=352.0,Y=2.0 (should be at baseline 0?)

* four.lf: X=392.0,Y=2.0 (should be at baseline 0?)

* four.lf: X=541.0,Y=2.0 (should be at baseline 0?)

* four.lf: X=392.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=233.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=383.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=334.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=434.0,Y=718.0 (should be at ascender 720?)

* arrowup (U+2191): X=442.0,Y=721.0 (should be at ascender 720?)

* uni0327 (U+0327): X=78.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=78.0,Y=-278.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;439.0,725.0&gt;--&lt;442.0,721.0&gt;&gt; -&gt; L&lt;&lt;442.0,721.0&gt;--&lt;707.0,406.0&gt;&gt;

* one (U+0031): L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;402.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;338.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;572.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;249.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;267.0,349.0&gt;--&lt;255.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;267.0,349.0&gt;--&lt;255.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;267.0,349.0&gt;--&lt;255.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;235.0,349.0&gt;--&lt;217.0,349.0&gt;&gt;

* uni0244 (U+0244) contains a short segment L&lt;&lt;851.0,313.0&gt;--&lt;848.0,294.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;867.0,254.0&gt;-&lt;867.0,254.0&gt;-&lt;863.5,236.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;193.0,283.0&gt;--&lt;199.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,288.0&gt;--&lt;199.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;199.0,289.0&gt;--&lt;200.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;403.0,130.0&gt;--&lt;403.0,130.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;409.0,428.0&gt;-&lt;413.0,427.0&gt;-&lt;416.0,426.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;124.0,327.0&gt;-&lt;125.0,338.0&gt;-&lt;128.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;128.0,350.0&gt;-&lt;129.0,361.0&gt;-&lt;132.0,371.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;283.0,371.0&gt;-&lt;280.0,361.0&gt;-&lt;278.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;278.0,350.0&gt;-&lt;276.0,338.0&gt;-&lt;275.0,327.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;439.0,725.0&gt;--&lt;442.0,721.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-Thin.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 424 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 360:
notequal, equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 351:
multiply</p>
<p>Width = 390:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 920, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=390.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=271.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=517.5,Y=-1.0 (should be at baseline 0?)

* S (U+0053): X=335.0,Y=1.5 (should be at baseline 0?)

* Sacute (U+015A): X=335.0,Y=1.5 (should be at baseline 0?)

* Scaron (U+0160): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=250.0,Y=-278.0 (should be at descender -280?)

* Scircumflex (U+015C): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0218 (U+0218): X=335.0,Y=1.5 (should be at baseline 0?)

* uni1E62 (U+1E62): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* ae (U+00E6): X=557.0,Y=1.0 (should be at baseline 0?)

* c (U+0063): X=405.0,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=298.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=292.0,Y=-278.0 (should be at descender -280?)

* f (U+0066): X=188.5,Y=698.0 (should be at cap-height 700?)

* uni0123 (U+0123): X=355.0,Y=719.0 (should be at ascender 720?)

* r (U+0072): X=319.5,Y=478.5 (should be at x-height 480?)

* s (U+0073): X=152.5,Y=478.0 (should be at x-height 480?)

* scedilla (U+015F): X=245.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=172.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=447.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=479.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=145.0,Y=-279.0 (should be at descender -280?)

* y (U+0079): X=120.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=145.0,Y=-279.0 (should be at descender -280?)

* yacute (U+00FD): X=120.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=145.0,Y=-279.0 (should be at descender -280?)

* ycircumflex (U+0177): X=120.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=145.0,Y=-279.0 (should be at descender -280?)

* ydieresis (U+00FF): X=120.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=145.0,Y=-279.0 (should be at descender -280?)

* uni1EF5 (U+1EF5): X=120.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=145.0,Y=-279.0 (should be at descender -280?)

* ygrave (U+1EF3): X=120.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=145.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=120.0,Y=-279.0 (should be at descender -280?)

* ordmasculine (U+00BA): X=363.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=493.0,Y=699.0 (should be at cap-height 700?)

* question (U+003F): X=152.0,Y=-2.0 (should be at baseline 0?)

* question (U+003F): X=180.0,Y=-2.0 (should be at baseline 0?)

* questiondown (U+00BF): X=105.5,Y=-0.5 (should be at baseline 0?)

* quotedblright (U+201D): X=42.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=105.5,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=137.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=200.5,Y=719.5 (should be at ascender 720?)

* quoteright (U+2019): X=42.0,Y=699.0 (should be at cap-height 700?)

* quoteright (U+2019): X=105.5,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=247.0,Y=699.0 (should be at cap-height 700?)

* sterling (U+00A3): X=350.0,Y=718.0 (should be at ascender 720?)

* uni0312 (U+0312): X=101.0,Y=719.0 (should be at ascender 720?)

* uni0327 (U+0327): X=137.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=137.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=42.0,Y=699.0 (should be at cap-height 700?)

* uni02BC (U+02BC): X=105.5,Y=719.5 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;179.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;70.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;240.0,700.0&gt;--&lt;321.0,700.0&gt;&gt; -&gt; L&lt;&lt;321.0,700.0&gt;--&lt;321.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;321.0,700.0&gt;--&lt;321.0,700.0&gt;&gt; -&gt; L&lt;&lt;321.0,700.0&gt;--&lt;349.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;32.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;81.0,700.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;123.0,613.0&gt;--&lt;556.0,609.0&gt;&gt; -&gt; L&lt;&lt;556.0,609.0&gt;--&lt;557.0,609.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): B&lt;&lt;549.0,603.5&gt;-&lt;588.0,552.0&gt;-&lt;599.0,488.0&gt;&gt;/L&lt;&lt;599.0,488.0&gt;--&lt;599.0,700.0&gt;&gt; = 9.752424941653764

* OE (U+0152): L&lt;&lt;599.0,0.0&gt;--&lt;599.0,212.0&gt;&gt;/B&lt;&lt;599.0,212.0&gt;-&lt;588.0,148.0&gt;-&lt;549.0,96.5&gt;&gt; = 9.752424941653764
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* ae (U+00E6): L&lt;&lt;436.0,252.0&gt;--&lt;278.0,251.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;123.0,720.0&gt;--&lt;121.0,152.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;98.0,152.0&gt;--&lt;96.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;121.0,272.0&gt;--&lt;123.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;96.0,-296.0&gt;--&lt;98.0,272.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;511.0,582.0&gt;--&lt;123.0,584.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[21] ElmsSans-Light.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 451 among a set of 2 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 387:
notequal, equal</p>
<p>Width = 464:
plusminus, logicalnot</p>
<p>Width = 397:
multiply</p>
<p>Width = 417:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 903, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=378.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=271.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=497.5,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=264.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* ae (U+00E6): X=536.0,Y=-1.5 (should be at baseline 0?)

* c (U+0063): X=392.0,Y=478.5 (should be at x-height 480?)

* ccedilla (U+00E7): X=281.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=275.0,Y=-278.0 (should be at descender -280?)

* uni0254 (U+0254): X=28.0,Y=-1.0 (should be at baseline 0?)

* oslash (U+00F8): X=206.0,Y=-2.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=206.0,Y=-2.0 (should be at baseline 0?)

* r (U+0072): X=330.5,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=228.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=178.0,Y=-278.0 (should be at descender -280?)

* ordmasculine (U+00BA): X=172.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=301.0,Y=699.0 (should be at cap-height 700?)

* period (U+002E): X=47.5,Y=-1.5 (should be at baseline 0?)

* period (U+002E): X=118.5,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=67.5,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=138.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=47.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=118.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=190.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=261.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=334.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=405.5,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=67.5,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=138.5,Y=-1.5 (should be at baseline 0?)

* quotedblleft (U+201C): X=129.0,Y=702.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=254.0,Y=702.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=47.5,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=166.5,Y=719.5 (should be at ascender 720?)

* quoteleft (U+2018): X=129.0,Y=702.0 (should be at cap-height 700?)

* quoteright (U+2019): X=47.5,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=216.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=216.0,Y=698.0 (should be at cap-height 700?)

* dollar (U+0024): X=279.0,Y=1.0 (should be at baseline 0?)

* sterling (U+00A3): X=327.0,Y=718.0 (should be at ascender 720?)

* uni0327 (U+0327): X=130.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=130.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=47.5,Y=719.5 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* one (U+0031): L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;203.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;53.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;223.0,700.0&gt;--&lt;344.0,700.0&gt;&gt; -&gt; L&lt;&lt;344.0,700.0&gt;--&lt;344.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;344.0,700.0&gt;--&lt;344.0,700.0&gt;&gt; -&gt; L&lt;&lt;344.0,700.0&gt;--&lt;373.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;24.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;91.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* exclam (U+0021): L&lt;&lt;135.0,720.0&gt;--&lt;133.0,165.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;73.0,165.0&gt;--&lt;71.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;133.0,259.0&gt;--&lt;135.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;71.0,-296.0&gt;--&lt;73.0,259.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;112.0,628.0&gt;--&lt;565.0,627.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;450.0,560.0&gt;--&lt;112.0,559.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* G (U+0047) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;444.0,374.0&gt;--&lt;444.0,398.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;820.0,263.0&gt;-&lt;820.0,263.0&gt;-&lt;819.5,249.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;65.0,360.0&gt;--&lt;65.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;344.0,700.0&gt;--&lt;344.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;71.0,360.0&gt;--&lt;71.0,360.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;279.0,408.0&gt;-&lt;282.0,408.0&gt;-&lt;285.0,407.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;124.0,327.0&gt;-&lt;123.0,338.0&gt;-&lt;123.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;193.0,350.0&gt;-&lt;193.0,338.0&gt;-&lt;194.0,327.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;189.0,317.0&gt;--&lt;189.0,310.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;271.0,700.0&gt;--&lt;271.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;353.0,686.0&gt;--&lt;353.0,686.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;565.0,627.0&gt;--&lt;565.0,619.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;565.0,619.0&gt;--&lt;566.0,619.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[22] ElmsSans-Regular.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure the font supports case swapping for all its glyphs. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#case-mapping">case_mapping</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs lack their case-swapping counterparts:</p>
<table>
<thead>
<tr>
<th align="left">Glyph present in the font</th>
<th align="left">Missing case-swapping counterpart</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">U+0242: LATIN SMALL LETTER GLOTTAL STOP</td>
<td align="left">U+0241: LATIN CAPITAL LETTER GLOTTAL STOP</td>
</tr>
<tr>
<td align="left">U+0243: LATIN CAPITAL LETTER B WITH STROKE</td>
<td align="left">U+0180: LATIN SMALL LETTER B WITH STROKE</td>
</tr>
<tr>
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
</tr>
<tr>
<td align="left">U+024C: LATIN CAPITAL LETTER R WITH STROKE</td>
<td align="left">U+024D: LATIN SMALL LETTER R WITH STROKE</td>
</tr>
<tr>
<td align="left">U+A78D: LATIN CAPITAL LETTER TURNED H</td>
<td align="left">U+0265: LATIN SMALL LETTER TURNED H</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs have no contours even though they were expected to have some:</p>
<pre><code>- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eth	Expected: 2

- Glyph name: thorn	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: eng	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: ohorn	Expected: 2

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: Uhorn	Expected: 1

- Glyph name: uhorn	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: hookabovecomb	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: arrowleft	Expected: 1

- Glyph name: arrowright	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1

- Glyph name: Eng	Expected: 1

- Glyph name: Ohorn	Expected: 2 or 3

- Glyph name: Uhorn	Expected: 1

- Glyph name: approxequal	Expected: 2

- Glyph name: arrowboth	Expected: 1

- Glyph name: arrowdown	Expected: 1

- Glyph name: arrowupdn	Expected: 1

- Glyph name: asciitilde	Expected: 1

- Glyph name: currency	Expected: 2

- Glyph name: eng	Expected: 1

- Glyph name: eth	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: lslash	Expected: 1

- Glyph name: ohorn	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: thorn	Expected: 2

- Glyph name: uhorn	Expected: 1

- Glyph name: uni0181	Expected: 3

- Glyph name: uni0187	Expected: 1

- Glyph name: uni0188	Expected: 1

- Glyph name: uni018A	Expected: 2

- Glyph name: uni018F	Expected: 2

- Glyph name: uni0190	Expected: 1

- Glyph name: uni0193	Expected: 1

- Glyph name: uni0194	Expected: 2

- Glyph name: uni0196	Expected: 1

- Glyph name: uni019D	Expected: 1

- Glyph name: uni01A4	Expected: 2

- Glyph name: uni01A5	Expected: 2

- Glyph name: uni01AC	Expected: 1

- Glyph name: uni01AD	Expected: 1

- Glyph name: uni01AE	Expected: 1

- Glyph name: uni01B1	Expected: 1

- Glyph name: uni01B2	Expected: 1

- Glyph name: uni01B3	Expected: 1

- Glyph name: uni01B4	Expected: 1

- Glyph name: uni01B7	Expected: 1

- Glyph name: uni01EE	Expected: 2

- Glyph name: uni01EF	Expected: 2

- Glyph name: uni0242	Expected: 1

- Glyph name: uni024B	Expected: 2

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni0292	Expected: 1

- Glyph name: uni02B9	Expected: 1

- Glyph name: uni031B	Expected: 1

- Glyph name: uni0335	Expected: 1

- Glyph name: uni1E9E	Expected: 1

- Glyph name: uni1EA2	Expected: 3

- Glyph name: uni1EA3	Expected: 3

- Glyph name: uni1EA8	Expected: 4

- Glyph name: uni1EA9	Expected: 4

- Glyph name: uni1EB2	Expected: 4

- Glyph name: uni1EB3	Expected: 4

- Glyph name: uni1EBA	Expected: 2

- Glyph name: uni1EBB	Expected: 3

- Glyph name: uni1EC2	Expected: 3

- Glyph name: uni1EC3	Expected: 4

- Glyph name: uni1EC8	Expected: 2

- Glyph name: uni1EC9	Expected: 2

- Glyph name: uni1ECE	Expected: 3

- Glyph name: uni1ECF	Expected: 3

- Glyph name: uni1ED4	Expected: 4

- Glyph name: uni1ED5	Expected: 4

- Glyph name: uni1EDA	Expected: 3 or 4

- Glyph name: uni1EDB	Expected: 3

- Glyph name: uni1EDC	Expected: 3 or 4

- Glyph name: uni1EDD	Expected: 3

- Glyph name: uni1EDE	Expected: 3 or 4

- Glyph name: uni1EDF	Expected: 3

- Glyph name: uni1EE0	Expected: 3 or 4

- Glyph name: uni1EE1	Expected: 3

- Glyph name: uni1EE2	Expected: 3 or 4

- Glyph name: uni1EE3	Expected: 3

- Glyph name: uni1EE6	Expected: 2

- Glyph name: uni1EE7	Expected: 2

- Glyph name: uni1EE8	Expected: 2

- Glyph name: uni1EE9	Expected: 2

- Glyph name: uni1EEA	Expected: 2

- Glyph name: uni1EEB	Expected: 2

- Glyph name: uni1EEC	Expected: 2

- Glyph name: uni1EED	Expected: 2

- Glyph name: uni1EEE	Expected: 2

- Glyph name: uni1EEF	Expected: 2

- Glyph name: uni1EF0	Expected: 2

- Glyph name: uni1EF1	Expected: 2

- Glyph name: uni1EF6	Expected: 2

- Glyph name: uni1EF7	Expected: 2

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni2196	Expected: 1

- Glyph name: uni2198	Expected: 1

- Glyph name: uni2199	Expected: 1

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: uniA78B	Expected: 1

- Glyph name: uniA78C	Expected: 1
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 usWinAscent & usWinDescent. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#family-win-ascent-and-descent">family/win_ascent_and_descent</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.usWinAscent value should be equal or greater than 1228, but got 920 instead</p>
 [code: ascent]



* 🔥 **FAIL** <p>OS/2.usWinDescent value should be equal or greater than 296, but got 280 instead</p>
 [code: descent]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking Vertical Metric Linegaps. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#linegaps">linegaps</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoLineGap is not equal to 0.</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
For Google Fonts, all messages from this check are considered FAILs.</p>
 [code: OS/2]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Font contains '.notdef' as its first glyph? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#mandatory-glyphs">mandatory_glyphs</a></summary>
    <div>







* 🔥 **FAIL** <p>The '.notdef' glyph should contain a drawing, but it is blank.</p>
 [code: notdef-is-blank]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Checking OS/2 Metrics match hhea Metrics. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#os2-metrics-match-hhea">os2_metrics_match_hhea</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2 sTypoAscender (720) and hhea ascent (920) must be equal.</p>
 [code: ascender]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 🔥 **FAIL** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">FAIL messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Mandatory orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following mark characters are missing from the font: ̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: failed-language-shaping]



* ⚠️ **WARN** <p>GF_Phonetics_SinoExt glyphset:</p>
<table>
<thead>
<tr>
<th align="left">WARN messages</th>
<th align="left">Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ŀ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ŀ</td>
<td align="left">ca_Latn (Catalan)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ſ</td>
<td align="left">de_Latn (German) and fr_Latn (French)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ʻ</td>
<td align="left">en_Latn (English)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ɵ</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ɵ</td>
<td align="left">ig_Latn (Igbo)</td>
</tr>
<tr>
<td align="left">Auxiliary orthography codepoints:</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: e̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: E̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: é̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: É̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: è̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: È̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ê̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ě̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: o̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: O̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ó̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ò̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ô̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: Ǒ̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: s̩</td>
<td align="left"></td>
</tr>
<tr>
<td align="left">The following auxiliary characters are missing from the font: S̩</td>
<td align="left">yo_Latn (Yoruba)</td>
</tr>
</tbody>
</table>
 [code: warning-language-shaping]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- uni0328
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>OS/2.sTypoLineGap is &quot;200&quot; it should be 0</p>
 [code: bad-OS/2.sTypoLineGap]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 464 among a set of 4 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
less, greater</p>
<p>Width = 400:
notequal, equal</p>
<p>Width = 420:
multiply</p>
<p>Width = 430:
divide</p>
<p>Width = 600:
approxequal</p>
<p>Width = 436:
lessequal</p>
<p>Width = 416:
greaterequal</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;349.0,700.0&gt;--&lt;349.0,700.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 895, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- eight.dnom

- eight.lf

- eight.numr

- eight.tf

- five.dnom

- five.lf

- five.numr

- five.tf

- four.dnom

- four.lf

- four.numr

- four.tf

- i.loclTRK

- nine.dnom

- nine.lf

- nine.numr

- nine.tf

- one.dnom

- one.lf

- one.numr

- one.tf

- periodcentered.loclCAT

- periodcentered.loclCAT.case

- seven.dnom

- seven.lf

- seven.numr

- seven.tf

- six.dnom

- six.lf

- six.numr

- six.tf

- three.dnom

- three.lf

- three.numr

- three.tf

- two.dnom

- two.lf

- two.numr

- two.tf

- uni004A0301

- uni006A0301

- uni013B.loclMAH

- uni013C.loclMAH

- uni0145.loclMAH

- uni0146.loclMAH

- uni03000304

- uni03010304

- uni03020300

- uni03020301

- uni03020303

- uni03020309

- uni03040300

- uni03040301

- uni03060300

- uni03060301

- uni03060303

- uni03060309

- uni0326.loclMAH

- zero.dnom

- zero.lf

- zero.numr

- zero.tf

- zero.zero
</code></pre>
 [code: unreachable-glyphs]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Validate size, and resolution of article images, and ensure article page has minimum length and includes visual assets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-article-images">googlefonts/article/images</a></summary>
    <div>







* ⚠️ **WARN** <p>Family metadata at fonts/ttf does not have an article.</p>
 [code: lacks-article]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check for codepoints not covered by METADATA subsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-metadata-unreachable-subsetting">googlefonts/metadata/unreachable_subsetting</a></summary>
    <div>







* ⚠️ **WARN** <p>The following codepoints supported by the font are not covered by
any subsets defined in the font's metadata file, and will never
be served. You can solve this by either manually adding additional
subset declarations to METADATA.pb, or by editing the glyphset
definitions.</p>
<ul>
<li>U+02D8 BREVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi</li>
<li>U+02DB OGONEK: try adding one of: canadian-aboriginal, yi</li>
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: cherokee, math, coptic, tifinagh</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: syriac, malayalam, tai-le, canadian-aboriginal, hebrew, coptic, todhri, duployan, old-permic, tifinagh, math</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, sunuwar, gothic, tifinagh, cherokee, thai, caucasian-albanian</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: math, symbols</li>
<li>U+2195 UP DOWN ARROW: try adding one of: math, symbols</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: math, symbols</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: math, symbols</li>
<li>U+2202 PARTIAL DIFFERENTIAL: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25CA LOZENGE: try adding one of: math, symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: tai-le, old-permic, bengali, masaram-gondi, pahawh-hmong, gujarati, tifinagh, tamil, mahajani, zanabazar-square, bassa-vah, khojki, hanunoo, meetei-mayek, tai-tham, thaana, wancho, duployan, mandaic, devanagari, phags-pa, gurmukhi, music, math, malayalam, kannada, mende-kikakui, buhid, new-tai-lue, sinhala, brahmi, coptic, caucasian-albanian, soyombo, adlam, modi, myanmar, syriac, batak, sogdian, psalter-pahlavi, osage, canadian-aboriginal, tagalog, cham, balinese, limbu, manichaean, tagbanwa, thai, nko, kayah-li, marchen, hanifi-rohingya, saurashtra, elbasan, kaithi, rejang, tirhuta, lepcha, takri, tibetan, mongolian, oriya, armenian, miao, javanese, chakma, gunjala-gondi, khmer, tai-viet, sundanese, lao, newa, symbols, khudawadi, yi, syloti-nagri, sharada, bhaiksuki, siddham, kharoshthi, warang-citi, hebrew, ahom, buginese, telugu, dogra, grantha</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ĭ i̇ i̒ ĭ̛ i̛̇ i̛̊ i̛̋ i̛̒ ĭ̦ i̦̇ i̦̊ i̦̋ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ i̧̒ ĭ̱ i̱̇</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* Ccedilla (U+00C7): X=373.0,Y=-278.0 (should be at descender -280?)

* uni0228 (U+0228): X=272.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=487.5,Y=-2.0 (should be at baseline 0?)

* Scedilla (U+015E): X=272.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=305.0,Y=-278.0 (should be at descender -280?)

* ccedilla (U+00E7): X=273.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=267.0,Y=-278.0 (should be at descender -280?)

* uni0123 (U+0123): X=355.0,Y=699.0 (should be at cap-height 700?)

* r (U+0072): X=197.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=336.5,Y=481.5 (should be at x-height 480?)

* scedilla (U+015F): X=220.0,Y=-278.0 (should be at descender -280?)

* uni0163 (U+0163): X=182.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* ordmasculine (U+00BA): X=76.0,Y=699.0 (should be at cap-height 700?)

* ordmasculine (U+00BA): X=205.0,Y=699.0 (should be at cap-height 700?)

* question (U+003F): X=263.0,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=45.5,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=175.5,Y=718.0 (should be at ascender 720?)

* quoteright (U+2019): X=45.5,Y=718.0 (should be at ascender 720?)

* ampersand (U+0026): X=389.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=110.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=260.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=295.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=315.0,Y=718.0 (should be at ascender 720?)

* uni0312 (U+0312): X=146.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=127.0,Y=-278.0 (should be at descender -280?)

* cedilla (U+00B8): X=127.0,Y=-278.0 (should be at descender -280?)

* uni02BC (U+02BC): X=45.5,Y=718.0 (should be at ascender 720?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;349.0,700.0&gt;--&lt;349.0,700.0&gt;&gt; -&gt; L&lt;&lt;349.0,700.0&gt;--&lt;349.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;215.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;385.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;97.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* exclam (U+0021): L&lt;&lt;141.0,720.0&gt;--&lt;139.0,172.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;61.0,172.0&gt;--&lt;59.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;139.0,252.0&gt;--&lt;141.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;59.0,-296.0&gt;--&lt;61.0,252.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;419.0,548.0&gt;--&lt;106.0,547.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;812.0,254.0&gt;-&lt;812.0,254.0&gt;-&lt;811.5,240.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;66.0,360.0&gt;--&lt;66.0,360.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;105.0,335.0&gt;-&lt;105.0,342.0&gt;-&lt;105.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;195.0,350.0&gt;-&lt;195.0,342.0&gt;-&lt;195.0,335.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;261.0,700.0&gt;--&lt;261.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;349.0,700.0&gt;--&lt;349.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;349.0,700.0&gt;--&lt;349.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;367.0,682.0&gt;--&lt;367.0,682.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-meta-script-lang-tags">googlefonts/meta/script_lang_tags</a></summary>
    <div>







* ⚠️ **WARN** <p>This font file does not have a 'meta' table.</p>
 [code: lacks-meta-table]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>




### Summary

| 💥 ERROR | ☠ FATAL | 🔥 FAIL | ⚠️ WARN | ⏩ SKIP | ℹ️ INFO | ✅ PASS | 🔎 DEBUG | 
| ---|---|---|---|---|---|---|---|
| 0 | 0 | 159 | 186 | 1685 | 81 | 1410 | 0 | 
| 0% | 0% | 5% | 5% | 48% | 2% | 40% | 0% | 



**Note:** The following loglevels were omitted in this report:


* SKIP
* INFO
* PASS
* DEBUG
