## FontBakery report

fontbakery version: 1.0.0







## Check results



<details><summary>[19] ElmsSans-Italic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;546.0,700.0&gt;--&lt;546.0,700.0&gt;&gt; has the same coordinates as a previous segment.

* arrowdown (U+2193): L&lt;&lt;342.0,43.0&gt;--&lt;342.0,43.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;814.0,332.0&gt;--&lt;813.0,332.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;801.0,262.0&gt;--&lt;801.0,262.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 909, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=309.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=672.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=324.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=324.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=487.5,Y=-2.0 (should be at baseline 0?)

* Scedilla (U+015E): X=223.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=226.0,Y=-278.0 (should be at descender -280?)

* uni1EB3 (U+1EB3): X=390.5,Y=700.5 (should be at cap-height 700?)

* uni1EB3 (U+1EB3): X=472.5,Y=702.0 (should be at cap-height 700?)

* uni1EB5 (U+1EB5): X=451.0,Y=720.5 (should be at ascender 720?)

* ccedilla (U+00E7): X=224.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=224.0,Y=-278.0 (should be at descender -280?)

* eth (U+00F0): X=444.0,Y=722.0 (should be at ascender 720?)

* uni0123 (U+0123): X=476.0,Y=699.0 (should be at cap-height 700?)

* r (U+0072): X=281.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=421.0,Y=481.5 (should be at x-height 480?)

* scedilla (U+015F): X=171.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF7 (U+1EF7): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=390.0,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=172.0,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=295.0,Y=718.0 (should be at ascender 720?)

* quoteright (U+2019): X=172.0,Y=718.0 (should be at ascender 720?)

* ampersand (U+0026): X=389.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=226.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=376.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=295.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=442.0,Y=718.0 (should be at ascender 720?)

* gravecomb (U+0300): X=163.0,Y=699.0 (should be at cap-height 700?)

* gravecomb (U+0300): X=257.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=261.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=355.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=222.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=316.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=320.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=414.0,Y=699.0 (should be at cap-height 700?)

* hookabovecomb (U+0309): X=286.0,Y=699.0 (should be at cap-height 700?)

* uni0312 (U+0312): X=269.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=78.0,Y=-278.0 (should be at descender -280?)

* uni03060309: X=263.5,Y=700.5 (should be at cap-height 700?)

* uni03060309: X=345.5,Y=702.0 (should be at cap-height 700?)

* uni03060303: X=364.0,Y=720.5 (should be at ascender 720?)

* grave (U+0060): X=163.0,Y=699.0 (should be at cap-height 700?)

* grave (U+0060): X=257.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=222.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=316.0,Y=699.0 (should be at cap-height 700?)

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
<pre><code>* arrowboth (U+2194): L&lt;&lt;316.0,35.0&gt;--&lt;106.0,292.0&gt;&gt; -&gt; L&lt;&lt;106.0,292.0&gt;--&lt;102.0,297.0&gt;&gt;

* arrowboth (U+2194): L&lt;&lt;801.0,262.0&gt;--&lt;801.0,262.0&gt;&gt; -&gt; L&lt;&lt;801.0,262.0&gt;--&lt;801.0,262.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;342.0,43.0&gt;--&lt;342.0,43.0&gt;&gt; -&gt; L&lt;&lt;342.0,43.0&gt;--&lt;342.0,43.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;153.0,342.0&gt;--&lt;153.0,342.0&gt;&gt; -&gt; L&lt;&lt;153.0,342.0&gt;--&lt;154.0,342.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;546.0,700.0&gt;--&lt;546.0,700.0&gt;&gt; -&gt; L&lt;&lt;546.0,700.0&gt;--&lt;546.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;328.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;139.0,315.0&gt;--&lt;139.0,315.0&gt;&gt; -&gt; L&lt;&lt;139.0,315.0&gt;--&lt;148.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;76.0,315.0&gt;--&lt;139.0,315.0&gt;&gt; -&gt; L&lt;&lt;139.0,315.0&gt;--&lt;139.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;338.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;479.0,700.0&gt;--&lt;479.0,700.0&gt;&gt; -&gt; L&lt;&lt;479.0,700.0&gt;--&lt;498.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;328.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;328.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;168.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt; -&gt; L&lt;&lt;309.0,700.0&gt;--&lt;328.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;144.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt; -&gt; L&lt;&lt;207.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;139.0,315.0&gt;--&lt;139.0,315.0&gt;&gt; -&gt; L&lt;&lt;139.0,315.0&gt;--&lt;148.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;76.0,315.0&gt;--&lt;139.0,315.0&gt;&gt; -&gt; L&lt;&lt;139.0,315.0&gt;--&lt;139.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;120.0,264.5&gt;-&lt;153.0,298.0&gt;-&lt;205.0,321.0&gt;&gt;/B&lt;&lt;205.0,321.0&gt;-&lt;149.0,311.0&gt;-&lt;116.0,335.0&gt;&gt; = 13.735503535944503

* whimsy: B&lt;&lt;567.0,308.0&gt;-&lt;526.0,301.0&gt;-&lt;480.0,314.0&gt;&gt;/B&lt;&lt;480.0,314.0&gt;-&lt;526.0,295.0&gt;-&lt;554.0,266.0&gt;&gt; = 6.662000055778863
</code></pre>
 [code: found-jaggy-segments]



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

* one.osf contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;309.0,700.0&gt;--&lt;309.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;139.0,315.0&gt;--&lt;139.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;56.0,162.0&gt;--&lt;56.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;139.0,315.0&gt;--&lt;139.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;56.0,162.0&gt;--&lt;56.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;207.0,700.0&gt;--&lt;207.0,700.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;164.0,335.0&gt;-&lt;165.0,342.0&gt;-&lt;167.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;257.0,350.0&gt;-&lt;255.0,342.0&gt;-&lt;254.0,335.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;458.0,700.0&gt;--&lt;459.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;546.0,700.0&gt;--&lt;546.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;546.0,700.0&gt;--&lt;546.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;561.0,682.0&gt;--&lt;561.0,682.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;810.0,341.0&gt;--&lt;810.0,341.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;795.0,253.0&gt;--&lt;795.0,253.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;795.0,253.0&gt;--&lt;794.0,253.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;773.0,235.0&gt;--&lt;773.0,235.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;342.0,43.0&gt;--&lt;342.0,43.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;342.0,43.0&gt;--&lt;342.0,43.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;327.0,61.0&gt;--&lt;327.0,61.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;430.0,43.0&gt;--&lt;430.0,43.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;430.0,43.0&gt;--&lt;429.0,43.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;138.0,254.0&gt;--&lt;138.0,254.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;153.0,342.0&gt;--&lt;153.0,342.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;153.0,342.0&gt;--&lt;154.0,342.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;174.0,360.0&gt;--&lt;175.0,360.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;106.0,292.0&gt;--&lt;102.0,297.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;813.0,332.0&gt;--&lt;814.0,332.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;814.0,332.0&gt;--&lt;813.0,332.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;801.0,262.0&gt;--&lt;801.0,262.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;801.0,262.0&gt;--&lt;801.0,262.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;801.0,262.0&gt;--&lt;785.0,248.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;785.0,248.0&gt;--&lt;784.0,248.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;544.0,651.0&gt;--&lt;543.0,651.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;436.0,39.0&gt;--&lt;436.0,39.0&gt;&gt;
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

<details><summary>[18] ElmsSans-BoldItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
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
<td align="left">Bold Italic</td>
<td align="left">Bold Italic</td>
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







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 916, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;311.0,32.0&gt;--&lt;133.0,253.0&gt;&gt; -&gt; L&lt;&lt;133.0,253.0&gt;--&lt;102.0,292.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;375.0,0.0&gt;--&lt;367.0,10.0&gt;&gt; -&gt; L&lt;&lt;367.0,10.0&gt;--&lt;106.0,320.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;102.0,297.0&gt;--&lt;114.0,307.0&gt;&gt; -&gt; L&lt;&lt;114.0,307.0&gt;--&lt;480.0,622.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;831.0,292.0&gt;--&lt;819.0,281.0&gt;&gt; -&gt; L&lt;&lt;819.0,281.0&gt;--&lt;453.0,-33.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;509.0,729.0&gt;--&lt;517.0,719.0&gt;&gt; -&gt; L&lt;&lt;517.0,719.0&gt;--&lt;777.0,409.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;503.0,700.0&gt;--&lt;525.0,674.0&gt;&gt; -&gt; L&lt;&lt;525.0,674.0&gt;--&lt;718.0,444.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;679.0,222.0&gt;--&lt;405.0,-8.0&gt;&gt; -&gt; L&lt;&lt;405.0,-8.0&gt;--&lt;374.0,-34.0&gt;&gt;

* one (U+0031): L&lt;&lt;174.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;388.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;142.0,315.0&gt;--&lt;142.0,315.0&gt;&gt; -&gt; L&lt;&lt;142.0,315.0&gt;--&lt;175.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;78.0,315.0&gt;--&lt;142.0,315.0&gt;&gt; -&gt; L&lt;&lt;142.0,315.0&gt;--&lt;142.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;314.0,700.0&gt;--&lt;455.0,700.0&gt;&gt; -&gt; L&lt;&lt;455.0,700.0&gt;--&lt;455.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;455.0,700.0&gt;--&lt;455.0,700.0&gt;&gt; -&gt; L&lt;&lt;455.0,700.0&gt;--&lt;528.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;146.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;243.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;174.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;388.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;174.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;388.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;174.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt; -&gt; L&lt;&lt;315.0,700.0&gt;--&lt;388.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;146.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;243.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;146.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;243.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;146.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;243.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;146.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt; -&gt; L&lt;&lt;210.0,700.0&gt;--&lt;243.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;142.0,315.0&gt;--&lt;142.0,315.0&gt;&gt; -&gt; L&lt;&lt;142.0,315.0&gt;--&lt;175.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;78.0,315.0&gt;--&lt;142.0,315.0&gt;&gt; -&gt; L&lt;&lt;142.0,315.0&gt;--&lt;142.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;120.0,264.5&gt;-&lt;153.0,298.0&gt;-&lt;205.0,321.0&gt;&gt;/B&lt;&lt;205.0,321.0&gt;-&lt;149.0,311.0&gt;-&lt;117.5,342.0&gt;&gt; = 13.735503535944503

* whimsy: B&lt;&lt;621.5,325.0&gt;-&lt;581.0,313.0&gt;-&lt;536.0,321.0&gt;&gt;/B&lt;&lt;536.0,321.0&gt;-&lt;585.0,307.0&gt;-&lt;614.0,281.0&gt;&gt; = 5.864797913380504
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;263.0,349.0&gt;--&lt;246.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;263.0,349.0&gt;--&lt;246.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;263.0,349.0&gt;--&lt;246.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;865.0,254.0&gt;-&lt;865.0,254.0&gt;-&lt;861.5,237.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;371.0,496.0&gt;--&lt;375.0,496.0&gt;&gt;

* nine (U+0039) contains a short segment L&lt;&lt;331.0,204.0&gt;--&lt;326.0,204.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;455.0,700.0&gt;--&lt;455.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;315.0,700.0&gt;--&lt;315.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;377.0,496.0&gt;--&lt;381.0,496.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;371.0,496.0&gt;--&lt;375.0,496.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;371.0,496.0&gt;--&lt;375.0,496.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;371.0,496.0&gt;--&lt;375.0,496.0&gt;&gt;

* nine.lf contains a short segment L&lt;&lt;347.0,204.0&gt;--&lt;342.0,204.0&gt;&gt;

* nine.osf contains a short segment L&lt;&lt;331.0,204.0&gt;--&lt;326.0,204.0&gt;&gt;

* nine.tf contains a short segment L&lt;&lt;331.0,204.0&gt;--&lt;326.0,204.0&gt;&gt;

* nine.tosf contains a short segment L&lt;&lt;331.0,204.0&gt;--&lt;326.0,204.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;142.0,315.0&gt;--&lt;142.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;167.0,223.0&gt;--&lt;169.0,223.0&gt;&gt;

* nine.dnom contains a short segment L&lt;&lt;149.0,92.0&gt;--&lt;147.0,92.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;235.0,608.0&gt;--&lt;237.0,608.0&gt;&gt;

* nine.numr contains a short segment L&lt;&lt;217.0,477.0&gt;--&lt;215.0,477.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;142.0,315.0&gt;--&lt;142.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;167.0,223.0&gt;--&lt;169.0,223.0&gt;&gt;

* uni2089 (U+2089) contains a short segment L&lt;&lt;149.0,92.0&gt;--&lt;147.0,92.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;210.0,700.0&gt;--&lt;210.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;235.0,608.0&gt;--&lt;237.0,608.0&gt;&gt;

* uni2079 (U+2079) contains a short segment L&lt;&lt;217.0,477.0&gt;--&lt;215.0,477.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;494.0,700.0&gt;--&lt;499.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;399.0,425.0&gt;-&lt;402.0,424.0&gt;-&lt;404.0,424.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;143.0,329.0&gt;-&lt;144.0,339.0&gt;-&lt;146.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;282.0,350.0&gt;-&lt;280.0,339.0&gt;-&lt;279.0,329.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;509.0,729.0&gt;--&lt;517.0,719.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;831.0,292.0&gt;--&lt;819.0,281.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;375.0,0.0&gt;--&lt;367.0,10.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;102.0,297.0&gt;--&lt;114.0,307.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;779.0,218.0&gt;--&lt;779.0,218.0&gt;&gt;
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

<details><summary>[18] ElmsSans-ThinItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 600 among a set of 12 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
greater</p>
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
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=309.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=672.0,Y=702.0 (should be at cap-height 700?)

* Acircumflex (U+00C2): X=305.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=555.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=527.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=333.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=305.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=305.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=555.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=527.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=333.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=305.0,Y=722.0 (should be at ascender 720?)

* Ccedilla (U+00C7): X=341.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=341.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=517.5,Y=-1.0 (should be at baseline 0?)

* S (U+0053): X=335.0,Y=1.5 (should be at baseline 0?)

* Sacute (U+015A): X=335.0,Y=1.5 (should be at baseline 0?)

* Scaron (U+0160): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=201.0,Y=-278.0 (should be at descender -280?)

* Scircumflex (U+015C): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0218 (U+0218): X=335.0,Y=1.5 (should be at baseline 0?)

* uni1E62 (U+1E62): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0162 (U+0162): X=207.0,Y=-278.0 (should be at descender -280?)

* uni1EB3 (U+1EB3): X=443.5,Y=699.5 (should be at cap-height 700?)

* ae (U+00E6): X=557.5,Y=1.0 (should be at baseline 0?)

* c (U+0063): X=489.0,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=249.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=249.0,Y=-278.0 (should be at descender -280?)

* eth (U+00F0): X=519.0,Y=701.0 (should be at cap-height 700?)

* uni0229 (U+0229): X=339.0,Y=2.0 (should be at baseline 0?)

* uni0229 (U+0229): X=368.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=339.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=368.0,Y=2.0 (should be at baseline 0?)

* f (U+0066): X=311.5,Y=698.0 (should be at cap-height 700?)

* uni0123 (U+0123): X=487.0,Y=719.0 (should be at ascender 720?)

* r (U+0072): X=404.0,Y=478.5 (should be at x-height 480?)

* s (U+0073): X=236.5,Y=478.0 (should be at x-height 480?)

* scedilla (U+015F): X=196.0,Y=-278.0 (should be at descender -280?)

* germandbls (U+00DF): X=275.0,Y=699.0 (should be at cap-height 700?)

* germandbls (U+00DF): X=518.0,Y=699.0 (should be at cap-height 700?)

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

* uni1EF7 (U+1EF7): X=96.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=71.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=96.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=71.0,Y=-279.0 (should be at descender -280?)

* question (U+003F): X=151.5,Y=-2.0 (should be at baseline 0?)

* question (U+003F): X=180.0,Y=-2.0 (should be at baseline 0?)

* questiondown (U+00BF): X=105.5,Y=-0.5 (should be at baseline 0?)

* quotedblright (U+201D): X=165.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=232.5,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=256.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=323.5,Y=719.5 (should be at ascender 720?)

* quoteright (U+2019): X=165.0,Y=699.0 (should be at cap-height 700?)

* quoteright (U+2019): X=232.5,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=176.0,Y=1.0 (should be at baseline 0?)

* section (U+00A7): X=233.5,Y=699.0 (should be at cap-height 700?)

* section (U+00A7): X=361.5,Y=699.0 (should be at cap-height 700?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=370.0,Y=699.0 (should be at cap-height 700?)

* sterling (U+00A3): X=477.0,Y=718.0 (should be at ascender 720?)

* arrowright (U+2192): X=457.0,Y=-2.0 (should be at baseline 0?)

* arrowleft (U+2190): X=357.0,Y=-2.0 (should be at baseline 0?)

* uni0312 (U+0312): X=228.0,Y=719.0 (should be at ascender 720?)

* uni0327 (U+0327): X=88.0,Y=-278.0 (should be at descender -280?)

* uni03060309: X=409.5,Y=699.5 (should be at cap-height 700?)

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

* one.dnom: L&lt;&lt;123.0,315.0&gt;--&lt;123.0,315.0&gt;&gt; -&gt; L&lt;&lt;123.0,315.0&gt;--&lt;136.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;87.0,315.0&gt;--&lt;123.0,315.0&gt;&gt; -&gt; L&lt;&lt;123.0,315.0&gt;--&lt;123.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;363.0,700.0&gt;--&lt;444.0,700.0&gt;&gt; -&gt; L&lt;&lt;444.0,700.0&gt;--&lt;444.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;444.0,700.0&gt;--&lt;444.0,700.0&gt;&gt; -&gt; L&lt;&lt;444.0,700.0&gt;--&lt;472.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;155.0,700.0&gt;--&lt;191.0,700.0&gt;&gt; -&gt; L&lt;&lt;191.0,700.0&gt;--&lt;191.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;191.0,700.0&gt;--&lt;191.0,700.0&gt;&gt; -&gt; L&lt;&lt;191.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;193.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;302.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;193.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;302.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;193.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;274.0,700.0&gt;--&lt;274.0,700.0&gt;&gt; -&gt; L&lt;&lt;274.0,700.0&gt;--&lt;302.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;166.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;166.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;166.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;155.0,700.0&gt;--&lt;191.0,700.0&gt;&gt; -&gt; L&lt;&lt;191.0,700.0&gt;--&lt;191.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;191.0,700.0&gt;--&lt;191.0,700.0&gt;&gt; -&gt; L&lt;&lt;191.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;123.0,315.0&gt;--&lt;123.0,315.0&gt;&gt; -&gt; L&lt;&lt;123.0,315.0&gt;--&lt;136.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;87.0,315.0&gt;--&lt;123.0,315.0&gt;&gt; -&gt; L&lt;&lt;123.0,315.0&gt;--&lt;123.0,315.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;238.0,613.0&gt;--&lt;670.0,609.0&gt;&gt; -&gt; L&lt;&lt;670.0,609.0&gt;--&lt;671.0,609.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;501.0,95.0&gt;--&lt;68.0,99.0&gt;&gt; -&gt; L&lt;&lt;68.0,99.0&gt;--&lt;67.0,99.0&gt;&gt;
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

* whimsy: B&lt;&lt;496.5,245.0&gt;-&lt;457.0,244.0&gt;-&lt;411.0,261.0&gt;&gt;/B&lt;&lt;411.0,261.0&gt;-&lt;451.0,241.0&gt;-&lt;477.5,216.5&gt;&gt; = 6.282492088161336
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

<details><summary>[17] ElmsSans-SemiBoldItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 913, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;313.0,33.0&gt;--&lt;121.0,271.0&gt;&gt; -&gt; L&lt;&lt;121.0,271.0&gt;--&lt;102.0,294.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;376.0,0.0&gt;--&lt;327.0,59.0&gt;&gt; -&gt; L&lt;&lt;327.0,59.0&gt;--&lt;107.0,322.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;102.0,297.0&gt;--&lt;172.0,357.0&gt;&gt; -&gt; L&lt;&lt;172.0,357.0&gt;--&lt;482.0,623.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;836.0,293.0&gt;--&lt;766.0,234.0&gt;&gt; -&gt; L&lt;&lt;766.0,234.0&gt;--&lt;456.0,-33.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;509.0,734.0&gt;--&lt;559.0,675.0&gt;&gt; -&gt; L&lt;&lt;559.0,675.0&gt;--&lt;778.0,412.0&gt;&gt;

* one (U+0031): L&lt;&lt;172.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;368.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;141.0,315.0&gt;--&lt;141.0,315.0&gt;&gt; -&gt; L&lt;&lt;141.0,315.0&gt;--&lt;166.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;78.0,315.0&gt;--&lt;141.0,315.0&gt;&gt; -&gt; L&lt;&lt;141.0,315.0&gt;--&lt;141.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;322.0,700.0&gt;--&lt;463.0,700.0&gt;&gt; -&gt; L&lt;&lt;463.0,700.0&gt;--&lt;463.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;463.0,700.0&gt;--&lt;463.0,700.0&gt;&gt; -&gt; L&lt;&lt;463.0,700.0&gt;--&lt;518.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;145.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;234.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;172.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;368.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;172.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;368.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;172.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt; -&gt; L&lt;&lt;313.0,700.0&gt;--&lt;368.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;145.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;234.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;145.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;234.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;145.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;234.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;145.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt; -&gt; L&lt;&lt;209.0,700.0&gt;--&lt;234.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;141.0,315.0&gt;--&lt;141.0,315.0&gt;&gt; -&gt; L&lt;&lt;141.0,315.0&gt;--&lt;166.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;78.0,315.0&gt;--&lt;141.0,315.0&gt;&gt; -&gt; L&lt;&lt;141.0,315.0&gt;--&lt;141.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;120.0,264.5&gt;-&lt;153.0,298.0&gt;-&lt;205.0,321.0&gt;&gt;/B&lt;&lt;205.0,321.0&gt;-&lt;149.0,311.0&gt;-&lt;117.0,339.5&gt;&gt; = 13.735503535944503

* whimsy: B&lt;&lt;603.5,319.5&gt;-&lt;563.0,309.0&gt;-&lt;517.0,318.0&gt;&gt;/B&lt;&lt;517.0,318.0&gt;-&lt;565.0,303.0&gt;-&lt;594.0,276.0&gt;&gt; = 6.283822058321921
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;251.0,349.0&gt;--&lt;229.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;251.0,349.0&gt;--&lt;229.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;251.0,349.0&gt;--&lt;229.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;862.0,254.0&gt;-&lt;862.0,254.0&gt;-&lt;858.5,238.0&gt;&gt;

* eng (U+014B) contains a short segment L&lt;&lt;380.0,-85.0&gt;--&lt;379.0,-85.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;463.0,700.0&gt;--&lt;463.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;313.0,700.0&gt;--&lt;313.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;141.0,315.0&gt;--&lt;141.0,315.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;141.0,315.0&gt;--&lt;141.0,315.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;209.0,700.0&gt;--&lt;209.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;476.0,700.0&gt;--&lt;488.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;389.0,422.0&gt;--&lt;392.0,421.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;150.0,331.0&gt;-&lt;151.0,340.0&gt;-&lt;153.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;274.0,350.0&gt;-&lt;272.0,340.0&gt;-&lt;271.0,331.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;781.0,228.0&gt;--&lt;781.0,228.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;558.0,635.0&gt;--&lt;558.0,634.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;453.0,40.0&gt;--&lt;453.0,39.0&gt;&gt;
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

<details><summary>[19] ElmsSans-LightItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 600 among a set of 12 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 552:
greater</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 906, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=309.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=672.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=329.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=329.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=497.5,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=215.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=219.0,Y=-278.0 (should be at descender -280?)

* uni1EB5 (U+1EB5): X=457.0,Y=719.0 (should be at ascender 720?)

* uni01E1 (U+01E1): X=263.0,Y=701.0 (should be at cap-height 700?)

* uni01E1 (U+01E1): X=596.0,Y=701.0 (should be at cap-height 700?)

* uni01E1 (U+01E1): X=263.0,Y=701.0 (should be at cap-height 700?)

* uni1EA3 (U+1EA3): X=434.0,Y=718.0 (should be at ascender 720?)

* ae (U+00E6): X=535.5,Y=-1.5 (should be at baseline 0?)

* c (U+0063): X=476.0,Y=478.5 (should be at x-height 480?)

* ccedilla (U+00E7): X=232.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=232.0,Y=-278.0 (should be at descender -280?)

* uni1EBB (U+1EBB): X=404.0,Y=718.0 (should be at ascender 720?)

* uni1EC9 (U+1EC9): X=220.0,Y=718.0 (should be at ascender 720?)

* uni0199 (U+0199): X=209.0,Y=698.5 (should be at cap-height 700?)

* uni1ECF (U+1ECF): X=418.0,Y=718.0 (should be at ascender 720?)

* uni1EDF (U+1EDF): X=418.0,Y=718.0 (should be at ascender 720?)

* uni0254 (U+0254): X=28.0,Y=-1.0 (should be at baseline 0?)

* oslash (U+00F8): X=205.0,Y=-2.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=205.0,Y=-2.0 (should be at baseline 0?)

* r (U+0072): X=415.0,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=179.0,Y=-278.0 (should be at descender -280?)

* uni1EE7 (U+1EE7): X=413.0,Y=718.0 (should be at ascender 720?)

* uni1EED (U+1EED): X=413.0,Y=718.0 (should be at ascender 720?)

* uni1EF7 (U+1EF7): X=394.0,Y=718.0 (should be at ascender 720?)

* period (U+002E): X=47.5,Y=-1.5 (should be at baseline 0?)

* period (U+002E): X=118.0,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=67.5,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=138.0,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=47.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=118.0,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=227.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=298.0,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=407.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=478.0,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=67.5,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=138.0,Y=-1.5 (should be at baseline 0?)

* quotedblleft (U+201C): X=365.0,Y=702.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=253.0,Y=702.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=175.0,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=287.0,Y=719.5 (should be at ascender 720?)

* quoteleft (U+2018): X=253.0,Y=702.0 (should be at cap-height 700?)

* quoteright (U+2019): X=175.0,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=228.5,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=371.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=217.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=339.0,Y=698.0 (should be at cap-height 700?)

* dollar (U+0024): X=279.0,Y=1.0 (should be at baseline 0?)

* sterling (U+00A3): X=453.0,Y=718.0 (should be at ascender 720?)

* gravecomb (U+0300): X=157.0,Y=699.0 (should be at cap-height 700?)

* gravecomb (U+0300): X=230.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=256.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=329.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=217.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=291.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=316.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=390.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=81.0,Y=-278.0 (should be at descender -280?)

* uni03060303: X=387.0,Y=719.0 (should be at ascender 720?)

* grave (U+0060): X=157.0,Y=699.0 (should be at cap-height 700?)

* grave (U+0060): X=230.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=217.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=291.0,Y=699.0 (should be at cap-height 700?)

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

* one (U+0031): L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;320.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;134.0,315.0&gt;--&lt;134.0,315.0&gt;&gt; -&gt; L&lt;&lt;134.0,315.0&gt;--&lt;144.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;80.0,315.0&gt;--&lt;134.0,315.0&gt;&gt; -&gt; L&lt;&lt;134.0,315.0&gt;--&lt;134.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;347.0,700.0&gt;--&lt;468.0,700.0&gt;&gt; -&gt; L&lt;&lt;468.0,700.0&gt;--&lt;468.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;468.0,700.0&gt;--&lt;468.0,700.0&gt;&gt; -&gt; L&lt;&lt;468.0,700.0&gt;--&lt;490.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;147.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;212.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;177.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;320.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;177.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;320.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;177.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt; -&gt; L&lt;&lt;298.0,700.0&gt;--&lt;320.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;151.0,700.0&gt;--&lt;206.0,700.0&gt;&gt; -&gt; L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt; -&gt; L&lt;&lt;206.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;151.0,700.0&gt;--&lt;206.0,700.0&gt;&gt; -&gt; L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt; -&gt; L&lt;&lt;206.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;151.0,700.0&gt;--&lt;206.0,700.0&gt;&gt; -&gt; L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt; -&gt; L&lt;&lt;206.0,700.0&gt;--&lt;216.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;147.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt; -&gt; L&lt;&lt;202.0,700.0&gt;--&lt;212.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;134.0,315.0&gt;--&lt;134.0,315.0&gt;&gt; -&gt; L&lt;&lt;134.0,315.0&gt;--&lt;144.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;80.0,315.0&gt;--&lt;134.0,315.0&gt;&gt; -&gt; L&lt;&lt;134.0,315.0&gt;--&lt;134.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;543.5,287.0&gt;-&lt;503.0,282.0&gt;-&lt;457.0,296.0&gt;&gt;/B&lt;&lt;457.0,296.0&gt;-&lt;501.0,277.0&gt;-&lt;528.5,249.5&gt;&gt; = 6.428051795138864
</code></pre>
 [code: found-jaggy-segments]



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

* one (U+0031) contains a short segment L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;128.0,360.0&gt;--&lt;128.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;468.0,700.0&gt;--&lt;468.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;298.0,700.0&gt;--&lt;298.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;134.0,360.0&gt;--&lt;134.0,360.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;128.0,360.0&gt;--&lt;128.0,360.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;128.0,360.0&gt;--&lt;128.0,360.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;128.0,360.0&gt;--&lt;128.0,360.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;134.0,315.0&gt;--&lt;134.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;58.0,162.0&gt;--&lt;58.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;126.0,547.0&gt;--&lt;126.0,547.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;206.0,700.0&gt;--&lt;206.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;134.0,315.0&gt;--&lt;134.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;58.0,162.0&gt;--&lt;58.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;202.0,700.0&gt;--&lt;202.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;126.0,547.0&gt;--&lt;126.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;351.0,407.0&gt;-&lt;357.0,405.0&gt;-&lt;362.0,404.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;182.0,327.0&gt;-&lt;183.0,338.0&gt;-&lt;185.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;255.0,350.0&gt;-&lt;253.0,338.0&gt;-&lt;252.0,327.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;245.0,317.0&gt;--&lt;244.0,310.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;461.0,700.0&gt;--&lt;461.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;541.0,686.0&gt;--&lt;540.0,686.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;704.0,627.0&gt;--&lt;703.0,619.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;703.0,619.0&gt;--&lt;703.0,619.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;809.0,334.0&gt;--&lt;809.0,333.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;781.0,252.0&gt;--&lt;780.0,252.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;609.0,84.0&gt;--&lt;601.0,84.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;601.0,84.0&gt;--&lt;601.0,84.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;331.0,47.0&gt;--&lt;332.0,47.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;411.0,34.0&gt;--&lt;411.0,33.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;411.0,33.0&gt;--&lt;411.0,33.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;65.0,84.0&gt;--&lt;67.0,92.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;67.0,92.0&gt;--&lt;66.0,92.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;130.0,266.0&gt;--&lt;130.0,267.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;158.0,348.0&gt;--&lt;159.0,348.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;131.0,266.0&gt;--&lt;130.0,266.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;162.0,627.0&gt;--&lt;170.0,627.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;170.0,627.0&gt;--&lt;170.0,628.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;804.0,327.0&gt;--&lt;804.0,327.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;804.0,327.0&gt;--&lt;804.0,326.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;782.0,262.0&gt;--&lt;782.0,262.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;134.0,262.0&gt;--&lt;134.0,262.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;527.0,662.0&gt;--&lt;527.0,662.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;418.0,44.0&gt;--&lt;418.0,44.0&gt;&gt;
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

<details><summary>[18] ElmsSans-MediumItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 911, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=282.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=645.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=325.0,Y=-282.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=325.0,Y=-282.0 (should be at descender -280?)

* Scedilla (U+015E): X=230.0,Y=-282.0 (should be at descender -280?)

* uni0162 (U+0162): X=231.0,Y=-282.0 (should be at descender -280?)

* uni1EB5 (U+1EB5): X=447.5,Y=721.0 (should be at ascender 720?)

* ccedilla (U+00E7): X=224.0,Y=-282.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=224.0,Y=-282.0 (should be at descender -280?)

* eth (U+00F0): X=442.0,Y=722.0 (should be at ascender 720?)

* h (U+0068): X=309.0,Y=478.5 (should be at x-height 480?)

* uni0265 (U+0265): X=356.5,Y=1.5 (should be at baseline 0?)

* m (U+006D): X=298.5,Y=479.0 (should be at x-height 480?)

* n (U+006E): X=307.5,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=436.0,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=177.0,Y=-282.0 (should be at descender -280?)

* u (U+0075): X=356.5,Y=1.5 (should be at baseline 0?)

* uacute (U+00FA): X=356.5,Y=1.5 (should be at baseline 0?)

* uni0289 (U+0289): X=405.5,Y=1.5 (should be at baseline 0?)

* ubreve (U+016D): X=356.5,Y=1.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=356.5,Y=1.5 (should be at baseline 0?)

* udieresis (U+00FC): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=356.5,Y=1.5 (should be at baseline 0?)

* ugrave (U+00F9): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EE7 (U+1EE7): X=356.5,Y=1.5 (should be at baseline 0?)

* uhorn (U+01B0): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EE9 (U+1EE9): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EF1 (U+1EF1): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EEB (U+1EEB): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EED (U+1EED): X=356.5,Y=1.5 (should be at baseline 0?)

* uni1EEF (U+1EEF): X=356.5,Y=1.5 (should be at baseline 0?)

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

* uni1EF7 (U+1EF7): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* period (U+002E): X=56.0,Y=2.0 (should be at baseline 0?)

* period (U+002E): X=144.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=76.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=164.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=56.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=144.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=256.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=344.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=456.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=544.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=65.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=153.0,Y=2.0 (should be at baseline 0?)

* question (U+003F): X=396.0,Y=718.0 (should be at ascender 720?)

* section (U+00A7): X=226.5,Y=699.0 (should be at cap-height 700?)

* section (U+00A7): X=385.0,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=305.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=443.0,Y=718.0 (should be at ascender 720?)

* gravecomb (U+0300): X=161.0,Y=699.0 (should be at cap-height 700?)

* gravecomb (U+0300): X=267.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=248.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=354.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=220.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=326.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=301.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=407.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=81.0,Y=-282.0 (should be at descender -280?)

* uni03060303: X=376.5,Y=721.0 (should be at ascender 720?)

* grave (U+0060): X=155.0,Y=699.0 (should be at cap-height 700?)

* grave (U+0060): X=261.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=214.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=320.0,Y=699.0 (should be at cap-height 700?)

* cedilla (U+00B8): X=77.0,Y=-282.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;315.0,34.0&gt;--&lt;111.0,284.0&gt;&gt; -&gt; L&lt;&lt;111.0,284.0&gt;--&lt;102.0,295.0&gt;&gt;

* one (U+0031): L&lt;&lt;170.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;348.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;140.0,315.0&gt;--&lt;140.0,315.0&gt;&gt; -&gt; L&lt;&lt;140.0,315.0&gt;--&lt;157.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;77.0,315.0&gt;--&lt;140.0,315.0&gt;&gt; -&gt; L&lt;&lt;140.0,315.0&gt;--&lt;140.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;330.0,700.0&gt;--&lt;471.0,700.0&gt;&gt; -&gt; L&lt;&lt;471.0,700.0&gt;--&lt;471.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;471.0,700.0&gt;--&lt;471.0,700.0&gt;&gt; -&gt; L&lt;&lt;471.0,700.0&gt;--&lt;508.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;145.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;170.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;348.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;170.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;348.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;170.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt; -&gt; L&lt;&lt;311.0,700.0&gt;--&lt;348.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;145.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;145.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;145.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;145.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt; -&gt; L&lt;&lt;208.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;140.0,315.0&gt;--&lt;140.0,315.0&gt;&gt; -&gt; L&lt;&lt;140.0,315.0&gt;--&lt;157.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;77.0,315.0&gt;--&lt;140.0,315.0&gt;&gt; -&gt; L&lt;&lt;140.0,315.0&gt;--&lt;140.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;120.0,264.5&gt;-&lt;153.0,298.0&gt;-&lt;205.0,321.0&gt;&gt;/B&lt;&lt;205.0,321.0&gt;-&lt;149.0,311.0&gt;-&lt;116.5,337.5&gt;&gt; = 13.735503535944503

* whimsy: B&lt;&lt;585.5,314.0&gt;-&lt;545.0,305.0&gt;-&lt;499.0,316.0&gt;&gt;/B&lt;&lt;499.0,316.0&gt;-&lt;546.0,299.0&gt;-&lt;574.0,271.0&gt;&gt; = 6.4365500621689336
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* ae (U+00E6) contains a short segment B&lt;&lt;859.0,254.0&gt;-&lt;859.0,254.0&gt;-&lt;856.0,239.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;471.0,700.0&gt;--&lt;471.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;311.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;140.0,315.0&gt;--&lt;140.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;56.0,162.0&gt;--&lt;56.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;140.0,315.0&gt;--&lt;140.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;56.0,162.0&gt;--&lt;56.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;208.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;379.0,419.0&gt;--&lt;380.0,419.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;157.0,333.0&gt;-&lt;158.0,341.0&gt;-&lt;160.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;265.0,350.0&gt;-&lt;264.0,341.0&gt;-&lt;263.0,333.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;569.0,667.0&gt;--&lt;569.0,667.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;757.0,223.0&gt;--&lt;756.0,223.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;317.0,71.0&gt;--&lt;318.0,71.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;186.0,370.0&gt;--&lt;187.0,370.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;783.0,238.0&gt;--&lt;783.0,238.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;111.0,284.0&gt;--&lt;102.0,295.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;551.0,643.0&gt;--&lt;550.0,643.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;444.0,39.0&gt;--&lt;444.0,39.0&gt;&gt;
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

<details><summary>[20] ElmsSans-ExtraLightItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 600 among a set of 12 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 504:
greater</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* arrowdown (U+2193): L&lt;&lt;392.0,24.0&gt;--&lt;392.0,24.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;795.0,321.0&gt;--&lt;795.0,321.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=309.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=672.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=336.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=336.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=507.5,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=209.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=214.0,Y=-278.0 (should be at descender -280?)

* uni1EB3 (U+1EB3): X=456.0,Y=718.0 (should be at ascender 720?)

* uni1EB3 (U+1EB3): X=518.5,Y=719.5 (should be at ascender 720?)

* uni1EA3 (U+1EA3): X=369.5,Y=700.5 (should be at cap-height 700?)

* ae (U+00E6): X=546.5,Y=-0.5 (should be at baseline 0?)

* c (U+0063): X=482.5,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=241.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=241.0,Y=-278.0 (should be at descender -280?)

* eth (U+00F0): X=486.0,Y=719.0 (should be at ascender 720?)

* uni1EBB (U+1EBB): X=342.5,Y=700.5 (should be at cap-height 700?)

* uni1E2F (U+1E2F): X=167.0,Y=699.0 (should be at cap-height 700?)

* uni1E2F (U+1E2F): X=202.0,Y=699.0 (should be at cap-height 700?)

* uni1E2F (U+1E2F): X=167.0,Y=699.0 (should be at cap-height 700?)

* uni1EC9 (U+1EC9): X=147.5,Y=700.5 (should be at cap-height 700?)

* uni0199 (U+0199): X=220.0,Y=698.0 (should be at cap-height 700?)

* uni1ECF (U+1ECF): X=356.5,Y=700.5 (should be at cap-height 700?)

* uni1EDF (U+1EDF): X=356.5,Y=700.5 (should be at cap-height 700?)

* uni0254 (U+0254): X=37.0,Y=2.0 (should be at baseline 0?)

* oslash (U+00F8): X=206.0,Y=1.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=206.0,Y=1.0 (should be at baseline 0?)

* r (U+0072): X=410.0,Y=479.5 (should be at x-height 480?)

* scedilla (U+015F): X=188.0,Y=-278.0 (should be at descender -280?)

* germandbls (U+00DF): X=267.5,Y=698.0 (should be at cap-height 700?)

* germandbls (U+00DF): X=508.5,Y=698.0 (should be at cap-height 700?)

* uni1EE7 (U+1EE7): X=347.5,Y=700.5 (should be at cap-height 700?)

* uni1EED (U+1EED): X=347.5,Y=700.5 (should be at cap-height 700?)

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

* uni1EF7 (U+1EF7): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=119.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=312.5,Y=700.5 (should be at cap-height 700?)

* uni1EF9 (U+1EF9): X=74.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=119.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=74.0,Y=-279.0 (should be at descender -280?)

* comma (U+002C): X=41.5,Y=1.5 (should be at baseline 0?)

* semicolon (U+003B): X=61.5,Y=1.5 (should be at baseline 0?)

* question (U+003F): X=352.0,Y=698.0 (should be at cap-height 700?)

* question (U+003F): X=160.5,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=206.0,Y=1.0 (should be at baseline 0?)

* quotesinglbase (U+201A): X=48.5,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=48.5,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=149.5,Y=1.5 (should be at baseline 0?)

* quotedblright (U+201D): X=177.5,Y=721.5 (should be at ascender 720?)

* quotedblright (U+201D): X=278.5,Y=721.5 (should be at ascender 720?)

* quoteright (U+2019): X=177.5,Y=721.5 (should be at ascender 720?)

* section (U+00A7): X=231.0,Y=699.0 (should be at cap-height 700?)

* section (U+00A7): X=366.5,Y=698.5 (should be at cap-height 700?)

* registered (U+00AE): X=325.0,Y=701.0 (should be at cap-height 700?)

* dollar (U+0024): X=220.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=343.0,Y=699.0 (should be at cap-height 700?)

* dollar (U+0024): X=386.0,Y=698.0 (should be at cap-height 700?)

* sterling (U+00A3): X=465.0,Y=718.0 (should be at ascender 720?)

* hookabovecomb (U+0309): X=349.5,Y=699.5 (should be at cap-height 700?)

* uni0327 (U+0327): X=85.0,Y=-278.0 (should be at descender -280?)

* uni03060309: X=391.0,Y=718.0 (should be at ascender 720?)

* uni03060309: X=453.5,Y=719.5 (should be at ascender 720?)

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
<pre><code>* arrowboth (U+2194): L&lt;&lt;795.0,321.0&gt;--&lt;795.0,321.0&gt;&gt; -&gt; L&lt;&lt;795.0,321.0&gt;--&lt;795.0,321.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;392.0,24.0&gt;--&lt;392.0,24.0&gt;&gt; -&gt; L&lt;&lt;392.0,24.0&gt;--&lt;392.0,24.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;807.0,326.0&gt;--&lt;808.0,326.0&gt;&gt; -&gt; L&lt;&lt;808.0,326.0&gt;--&lt;808.0,326.0&gt;&gt;

* one (U+0031): L&lt;&lt;185.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;129.0,315.0&gt;--&lt;129.0,315.0&gt;&gt; -&gt; L&lt;&lt;129.0,315.0&gt;--&lt;140.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;83.0,315.0&gt;--&lt;129.0,315.0&gt;&gt; -&gt; L&lt;&lt;129.0,315.0&gt;--&lt;129.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;355.0,700.0&gt;--&lt;456.0,700.0&gt;&gt; -&gt; L&lt;&lt;456.0,700.0&gt;--&lt;456.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;456.0,700.0&gt;--&lt;456.0,700.0&gt;&gt; -&gt; L&lt;&lt;456.0,700.0&gt;--&lt;481.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;151.0,700.0&gt;--&lt;197.0,700.0&gt;&gt; -&gt; L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt; -&gt; L&lt;&lt;197.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;185.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;185.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;185.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt; -&gt; L&lt;&lt;286.0,700.0&gt;--&lt;311.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;158.0,700.0&gt;--&lt;204.0,700.0&gt;&gt; -&gt; L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt; -&gt; L&lt;&lt;204.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;158.0,700.0&gt;--&lt;204.0,700.0&gt;&gt; -&gt; L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt; -&gt; L&lt;&lt;204.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;158.0,700.0&gt;--&lt;204.0,700.0&gt;&gt; -&gt; L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt; -&gt; L&lt;&lt;204.0,700.0&gt;--&lt;215.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;151.0,700.0&gt;--&lt;197.0,700.0&gt;&gt; -&gt; L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt; -&gt; L&lt;&lt;197.0,700.0&gt;--&lt;208.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;129.0,315.0&gt;--&lt;129.0,315.0&gt;&gt; -&gt; L&lt;&lt;129.0,315.0&gt;--&lt;140.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;83.0,315.0&gt;--&lt;129.0,315.0&gt;&gt; -&gt; L&lt;&lt;129.0,315.0&gt;--&lt;129.0,315.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;162.0,619.0&gt;--&lt;166.0,619.0&gt;&gt; -&gt; L&lt;&lt;166.0,619.0&gt;--&lt;166.0,619.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;166.0,619.0&gt;--&lt;166.0,619.0&gt;&gt; -&gt; L&lt;&lt;166.0,619.0&gt;--&lt;606.0,619.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;129.0,232.5&gt;-&lt;161.0,260.0&gt;-&lt;207.0,281.0&gt;&gt;/B&lt;&lt;207.0,281.0&gt;-&lt;147.0,270.0&gt;-&lt;111.0,290.5&gt;&gt; = 14.148870661108182

* whimsy: B&lt;&lt;520.0,266.0&gt;-&lt;480.0,263.0&gt;-&lt;434.0,279.0&gt;&gt;/B&lt;&lt;434.0,279.0&gt;-&lt;476.0,259.0&gt;-&lt;503.0,233.0&gt;&gt; = 6.284337036060834
</code></pre>
 [code: found-jaggy-segments]



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

* uni0199 (U+0199) contains a short segment L&lt;&lt;186.0,269.0&gt;--&lt;170.0,269.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;133.0,360.0&gt;--&lt;133.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;456.0,700.0&gt;--&lt;456.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;286.0,700.0&gt;--&lt;286.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;139.0,360.0&gt;--&lt;139.0,360.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;133.0,360.0&gt;--&lt;133.0,360.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;133.0,360.0&gt;--&lt;133.0,360.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;133.0,360.0&gt;--&lt;133.0,360.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;129.0,315.0&gt;--&lt;129.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;60.0,162.0&gt;--&lt;60.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;128.0,547.0&gt;--&lt;128.0,547.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;204.0,700.0&gt;--&lt;204.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;129.0,315.0&gt;--&lt;129.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;60.0,162.0&gt;--&lt;60.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;197.0,700.0&gt;--&lt;197.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;128.0,547.0&gt;--&lt;128.0,547.0&gt;&gt;

* braceleft (U+007B) contains a short segment L&lt;&lt;69.0,335.0&gt;--&lt;84.0,335.0&gt;&gt;

* braceright (U+007D) contains a short segment L&lt;&lt;510.0,284.0&gt;--&lt;495.0,284.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;333.0,397.0&gt;-&lt;339.0,396.0&gt;-&lt;345.0,394.5&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;345.0,394.5&gt;-&lt;351.0,393.0&gt;-&lt;355.0,391.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;464.0,700.0&gt;--&lt;464.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;520.0,691.0&gt;--&lt;520.0,690.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;687.0,618.0&gt;--&lt;687.0,614.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;687.0,614.0&gt;--&lt;687.0,614.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;808.0,326.0&gt;--&lt;808.0,326.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;788.0,268.0&gt;--&lt;788.0,269.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;807.0,326.0&gt;--&lt;808.0,326.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;595.0,91.0&gt;--&lt;591.0,91.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;591.0,91.0&gt;--&lt;591.0,90.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;336.0,33.0&gt;--&lt;336.0,33.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;392.0,24.0&gt;--&lt;392.0,24.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;392.0,24.0&gt;--&lt;392.0,24.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;67.0,92.0&gt;--&lt;68.0,96.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;68.0,96.0&gt;--&lt;67.0,96.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;123.0,279.0&gt;--&lt;123.0,279.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;142.0,337.0&gt;--&lt;143.0,336.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;162.0,619.0&gt;--&lt;166.0,619.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;166.0,619.0&gt;--&lt;166.0,619.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;795.0,321.0&gt;--&lt;795.0,321.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;795.0,321.0&gt;--&lt;795.0,321.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;780.0,275.0&gt;--&lt;779.0,276.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;125.0,276.0&gt;--&lt;125.0,275.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;510.0,673.0&gt;--&lt;510.0,673.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;400.0,49.0&gt;--&lt;400.0,49.0&gt;&gt;
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







* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Heavy.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Italic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-BoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Bold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-HeavyItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Regular.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ThinItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Thin.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Medium.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-LightItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Light.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-MediumItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraLight.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraLightItalic.ttf has no STAT table</p>
 [code: no-stat]



</div>
</details>
</div>
</details>

<details><summary>[19] ElmsSans-Heavy.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
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







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



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
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 918, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;304.0,31.0&gt;--&lt;77.0,263.0&gt;&gt; -&gt; L&lt;&lt;77.0,263.0&gt;--&lt;50.0,291.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;374.0,0.0&gt;--&lt;371.0,3.0&gt;&gt; -&gt; L&lt;&lt;371.0,3.0&gt;--&lt;50.0,319.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;775.0,290.0&gt;--&lt;771.0,286.0&gt;&gt; -&gt; L&lt;&lt;771.0,286.0&gt;--&lt;456.0,-34.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;380.0,700.0&gt;--&lt;384.0,696.0&gt;&gt; -&gt; L&lt;&lt;384.0,696.0&gt;--&lt;639.0,445.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;639.0,213.0&gt;--&lt;384.0,-38.0&gt;&gt; -&gt; L&lt;&lt;384.0,-38.0&gt;--&lt;380.0,-42.0&gt;&gt;

* one (U+0031): L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;285.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;53.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;24.0,315.0&gt;--&lt;87.0,315.0&gt;&gt; -&gt; L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt; -&gt; L&lt;&lt;87.0,315.0&gt;--&lt;128.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;183.0,700.0&gt;--&lt;324.0,700.0&gt;&gt; -&gt; L&lt;&lt;324.0,700.0&gt;--&lt;324.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;324.0,700.0&gt;--&lt;324.0,700.0&gt;&gt; -&gt; L&lt;&lt;324.0,700.0&gt;--&lt;415.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;24.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;128.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;285.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;53.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;285.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;53.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;285.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;53.0,700.0&gt;--&lt;194.0,700.0&gt;&gt; -&gt; L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;24.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;128.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;24.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;128.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;24.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;128.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;24.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;128.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;24.0,315.0&gt;--&lt;87.0,315.0&gt;&gt; -&gt; L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt; -&gt; L&lt;&lt;87.0,315.0&gt;--&lt;128.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;581.5,331.0&gt;-&lt;544.0,318.0&gt;-&lt;497.0,323.0&gt;&gt;/B&lt;&lt;497.0,323.0&gt;-&lt;550.0,311.0&gt;-&lt;584.0,285.5&gt;&gt; = 6.685075753668994
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;395.0,522.0&gt;--&lt;394.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;602.0,542.0&gt;--&lt;601.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;205.0,720.0&gt;--&lt;203.0,208.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;68.0,208.0&gt;--&lt;66.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;203.0,216.0&gt;--&lt;205.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;66.0,-296.0&gt;--&lt;68.0,216.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;235.0,542.0&gt;--&lt;234.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;289.0,542.0&gt;--&lt;288.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;33.0,542.0&gt;--&lt;32.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;195.0,363.0&gt;--&lt;194.0,159.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;506.0,622.0&gt;--&lt;507.0,480.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;620.0,162.0&gt;--&lt;479.0,161.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;156.0,51.0&gt;--&lt;155.0,193.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;467.0,310.0&gt;--&lt;468.0,514.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;50.0,511.0&gt;--&lt;192.0,512.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;173.0,349.0&gt;--&lt;155.0,349.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;506.0,-64.0&gt;-&lt;519.0,-64.0&gt;-&lt;528.0,-55.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;528.0,-55.0&gt;-&lt;537.0,-46.0&gt;-&lt;537.0,-33.0&gt;&gt;

* uni0244 (U+0244) contains a short segment L&lt;&lt;812.0,313.0&gt;--&lt;812.0,294.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;822.0,254.0&gt;-&lt;822.0,254.0&gt;-&lt;821.5,236.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;378.0,652.0&gt;--&lt;368.0,643.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;324.0,700.0&gt;--&lt;324.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;388.0,303.0&gt;--&lt;388.0,303.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;388.0,130.0&gt;--&lt;388.0,130.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;333.0,428.0&gt;-&lt;337.0,427.0&gt;-&lt;341.0,426.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;78.0,327.0&gt;-&lt;78.0,338.0&gt;-&lt;78.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;78.0,350.0&gt;-&lt;78.0,361.0&gt;-&lt;78.0,371.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;229.0,371.0&gt;-&lt;229.0,361.0&gt;-&lt;229.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;229.0,350.0&gt;-&lt;229.0,338.0&gt;-&lt;230.0,327.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;381.0,725.0&gt;--&lt;384.0,721.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;775.0,290.0&gt;--&lt;771.0,286.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;374.0,0.0&gt;--&lt;371.0,3.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;50.0,296.0&gt;--&lt;53.0,300.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;740.0,208.0&gt;--&lt;740.0,208.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;380.0,700.0&gt;--&lt;384.0,696.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;384.0,-38.0&gt;--&lt;380.0,-42.0&gt;&gt;
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

<details><summary>[17] ElmsSans-SemiBold.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 913, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;307.0,33.0&gt;--&lt;73.0,271.0&gt;&gt; -&gt; L&lt;&lt;73.0,271.0&gt;--&lt;50.0,294.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;376.0,0.0&gt;--&lt;316.0,59.0&gt;&gt; -&gt; L&lt;&lt;316.0,59.0&gt;--&lt;50.0,322.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;50.0,297.0&gt;--&lt;109.0,357.0&gt;&gt; -&gt; L&lt;&lt;109.0,357.0&gt;--&lt;372.0,623.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;784.0,293.0&gt;--&lt;725.0,234.0&gt;&gt; -&gt; L&lt;&lt;725.0,234.0&gt;--&lt;462.0,-33.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;380.0,734.0&gt;--&lt;440.0,675.0&gt;&gt; -&gt; L&lt;&lt;440.0,675.0&gt;--&lt;706.0,412.0&gt;&gt;

* one (U+0031): L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;245.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;49.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;22.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;110.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;199.0,700.0&gt;--&lt;340.0,700.0&gt;&gt; -&gt; L&lt;&lt;340.0,700.0&gt;--&lt;340.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;340.0,700.0&gt;--&lt;340.0,700.0&gt;&gt; -&gt; L&lt;&lt;340.0,700.0&gt;--&lt;395.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;22.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;110.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;245.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;49.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;245.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;49.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;245.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;49.0,700.0&gt;--&lt;190.0,700.0&gt;&gt; -&gt; L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;22.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;110.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;22.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;110.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;22.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;110.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;22.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;110.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;22.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;110.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;547.5,319.5&gt;-&lt;509.0,309.0&gt;-&lt;461.0,318.0&gt;&gt;/B&lt;&lt;461.0,318.0&gt;-&lt;512.0,303.0&gt;-&lt;545.5,276.0&gt;&gt; = 5.769885057879567
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;410.0,522.0&gt;--&lt;409.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;591.0,542.0&gt;--&lt;590.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;173.0,720.0&gt;--&lt;171.0,190.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;65.0,190.0&gt;--&lt;63.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;171.0,234.0&gt;--&lt;173.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;63.0,-296.0&gt;--&lt;65.0,234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;200.0,542.0&gt;--&lt;199.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;282.0,542.0&gt;--&lt;281.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;37.0,542.0&gt;--&lt;36.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;166.0,424.0&gt;--&lt;167.0,166.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;510.0,629.0&gt;--&lt;511.0,512.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;511.0,512.0&gt;--&lt;248.0,510.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;498.0,166.0&gt;--&lt;496.0,429.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;615.0,167.0&gt;--&lt;498.0,166.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;150.0,181.0&gt;--&lt;413.0,183.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;151.0,64.0&gt;--&lt;150.0,181.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;167.0,527.0&gt;--&lt;168.0,264.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;50.0,526.0&gt;--&lt;167.0,527.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;817.0,254.0&gt;-&lt;817.0,254.0&gt;-&lt;816.5,238.0&gt;&gt;

* eng (U+014B) contains a short segment L&lt;&lt;394.0,-85.0&gt;--&lt;394.0,-85.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;340.0,700.0&gt;--&lt;340.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;353.0,700.0&gt;--&lt;364.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;314.0,422.0&gt;--&lt;318.0,421.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;92.0,331.0&gt;-&lt;91.0,340.0&gt;-&lt;91.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;212.0,350.0&gt;-&lt;212.0,340.0&gt;-&lt;212.0,331.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;741.0,228.0&gt;--&lt;740.0,228.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;446.0,635.0&gt;--&lt;446.0,634.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;446.0,40.0&gt;--&lt;446.0,39.0&gt;&gt;
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

<details><summary>[18] ElmsSans-HeavyItalic.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
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







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



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
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 918, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;310.0,31.0&gt;--&lt;123.0,263.0&gt;&gt; -&gt; L&lt;&lt;123.0,263.0&gt;--&lt;101.0,291.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;374.0,0.0&gt;--&lt;371.0,3.0&gt;&gt; -&gt; L&lt;&lt;371.0,3.0&gt;--&lt;106.0,319.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;102.0,296.0&gt;--&lt;106.0,300.0&gt;&gt; -&gt; L&lt;&lt;106.0,300.0&gt;--&lt;478.0,620.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;826.0,290.0&gt;--&lt;822.0,286.0&gt;&gt; -&gt; L&lt;&lt;822.0,286.0&gt;--&lt;450.0,-34.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;508.0,725.0&gt;--&lt;511.0,721.0&gt;&gt; -&gt; L&lt;&lt;511.0,721.0&gt;--&lt;776.0,406.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;503.0,700.0&gt;--&lt;507.0,696.0&gt;&gt; -&gt; L&lt;&lt;507.0,696.0&gt;--&lt;718.0,445.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;677.0,213.0&gt;--&lt;377.0,-38.0&gt;&gt; -&gt; L&lt;&lt;377.0,-38.0&gt;--&lt;372.0,-42.0&gt;&gt;

* one (U+0031): L&lt;&lt;176.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;408.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;143.0,315.0&gt;--&lt;143.0,315.0&gt;&gt; -&gt; L&lt;&lt;143.0,315.0&gt;--&lt;184.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;79.0,315.0&gt;--&lt;143.0,315.0&gt;&gt; -&gt; L&lt;&lt;143.0,315.0&gt;--&lt;143.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;306.0,700.0&gt;--&lt;447.0,700.0&gt;&gt; -&gt; L&lt;&lt;447.0,700.0&gt;--&lt;447.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;447.0,700.0&gt;--&lt;447.0,700.0&gt;&gt; -&gt; L&lt;&lt;447.0,700.0&gt;--&lt;538.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;147.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;252.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;176.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;408.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;176.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;408.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;176.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt; -&gt; L&lt;&lt;317.0,700.0&gt;--&lt;408.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;147.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;252.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;147.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;252.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;147.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;252.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;147.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt; -&gt; L&lt;&lt;211.0,700.0&gt;--&lt;252.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;143.0,315.0&gt;--&lt;143.0,315.0&gt;&gt; -&gt; L&lt;&lt;143.0,315.0&gt;--&lt;184.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;79.0,315.0&gt;--&lt;143.0,315.0&gt;&gt; -&gt; L&lt;&lt;143.0,315.0&gt;--&lt;143.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;120.0,264.5&gt;-&lt;153.0,298.0&gt;-&lt;205.0,321.0&gt;&gt;/B&lt;&lt;205.0,321.0&gt;-&lt;149.0,311.0&gt;-&lt;118.0,344.5&gt;&gt; = 13.735503535944503

* whimsy: B&lt;&lt;639.5,331.0&gt;-&lt;600.0,318.0&gt;-&lt;554.0,323.0&gt;&gt;/B&lt;&lt;554.0,323.0&gt;-&lt;604.0,311.0&gt;-&lt;634.0,285.5&gt;&gt; = 7.292285379103946
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;275.0,349.0&gt;--&lt;263.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;275.0,349.0&gt;--&lt;263.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;275.0,349.0&gt;--&lt;263.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;235.0,349.0&gt;--&lt;217.0,349.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;495.0,-64.0&gt;-&lt;508.0,-64.0&gt;-&lt;518.5,-55.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;518.5,-55.0&gt;-&lt;529.0,-46.0&gt;-&lt;531.0,-33.0&gt;&gt;

* uni0244 (U+0244) contains a short segment L&lt;&lt;867.0,313.0&gt;--&lt;864.0,294.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;867.0,254.0&gt;-&lt;867.0,254.0&gt;-&lt;863.5,236.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;447.0,700.0&gt;--&lt;447.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;317.0,700.0&gt;--&lt;317.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;143.0,315.0&gt;--&lt;143.0,315.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;143.0,315.0&gt;--&lt;143.0,315.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;211.0,700.0&gt;--&lt;211.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;411.0,130.0&gt;--&lt;411.0,130.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;409.0,428.0&gt;-&lt;413.0,427.0&gt;-&lt;416.0,426.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;136.0,327.0&gt;-&lt;137.0,338.0&gt;-&lt;140.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;140.0,350.0&gt;-&lt;141.0,361.0&gt;-&lt;144.0,371.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;295.0,371.0&gt;-&lt;292.0,361.0&gt;-&lt;290.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;290.0,350.0&gt;-&lt;288.0,338.0&gt;-&lt;287.0,327.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;508.0,725.0&gt;--&lt;511.0,721.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;826.0,290.0&gt;--&lt;822.0,286.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;374.0,0.0&gt;--&lt;371.0,3.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;102.0,296.0&gt;--&lt;106.0,300.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;777.0,208.0&gt;--&lt;777.0,208.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;503.0,700.0&gt;--&lt;507.0,696.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;377.0,-38.0&gt;--&lt;372.0,-42.0&gt;&gt;
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

<details><summary>[17] ElmsSans-Bold.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uni20A9	Contours detected: 6	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 916, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;306.0,32.0&gt;--&lt;89.0,253.0&gt;&gt; -&gt; L&lt;&lt;89.0,253.0&gt;--&lt;50.0,292.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;375.0,0.0&gt;--&lt;365.0,10.0&gt;&gt; -&gt; L&lt;&lt;365.0,10.0&gt;--&lt;50.0,320.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;50.0,297.0&gt;--&lt;60.0,307.0&gt;&gt; -&gt; L&lt;&lt;60.0,307.0&gt;--&lt;370.0,622.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;779.0,292.0&gt;--&lt;769.0,281.0&gt;&gt; -&gt; L&lt;&lt;769.0,281.0&gt;--&lt;459.0,-33.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;380.0,729.0&gt;--&lt;390.0,719.0&gt;&gt; -&gt; L&lt;&lt;390.0,719.0&gt;--&lt;705.0,409.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;380.0,700.0&gt;--&lt;406.0,674.0&gt;&gt; -&gt; L&lt;&lt;406.0,674.0&gt;--&lt;640.0,444.0&gt;&gt;

* arrowupdn (U+2195): L&lt;&lt;640.0,222.0&gt;--&lt;406.0,-8.0&gt;&gt; -&gt; L&lt;&lt;406.0,-8.0&gt;--&lt;380.0,-34.0&gt;&gt;

* one (U+0031): L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;265.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;51.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;23.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;119.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;191.0,700.0&gt;--&lt;332.0,700.0&gt;&gt; -&gt; L&lt;&lt;332.0,700.0&gt;--&lt;332.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;332.0,700.0&gt;--&lt;332.0,700.0&gt;&gt; -&gt; L&lt;&lt;332.0,700.0&gt;--&lt;405.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;23.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;119.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;265.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;51.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;265.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;51.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;265.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;51.0,700.0&gt;--&lt;192.0,700.0&gt;&gt; -&gt; L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;23.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;119.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;23.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;119.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;23.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;119.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;23.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;119.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;23.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;119.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;564.0,325.0&gt;-&lt;526.0,313.0&gt;-&lt;479.0,321.0&gt;&gt;/B&lt;&lt;479.0,321.0&gt;-&lt;531.0,307.0&gt;-&lt;564.5,281.0&gt;&gt; = 5.408595081049857
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;402.0,522.0&gt;--&lt;401.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;597.0,542.0&gt;--&lt;596.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;189.0,720.0&gt;--&lt;187.0,199.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;66.0,199.0&gt;--&lt;64.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;187.0,225.0&gt;--&lt;189.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;64.0,-296.0&gt;--&lt;66.0,225.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;218.0,542.0&gt;--&lt;217.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;286.0,542.0&gt;--&lt;285.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;35.0,542.0&gt;--&lt;34.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;181.0,393.0&gt;--&lt;180.0,162.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;508.0,625.0&gt;--&lt;509.0,496.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;509.0,496.0&gt;--&lt;269.0,494.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;488.0,163.0&gt;--&lt;486.0,403.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;617.0,164.0&gt;--&lt;488.0,163.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;152.0,187.0&gt;--&lt;392.0,189.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;153.0,58.0&gt;--&lt;152.0,187.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;179.0,520.0&gt;--&lt;181.0,280.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;50.0,519.0&gt;--&lt;179.0,520.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* K (U+004B) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;820.0,254.0&gt;-&lt;820.0,254.0&gt;-&lt;819.5,237.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;283.0,496.0&gt;--&lt;288.0,496.0&gt;&gt;

* nine (U+0039) contains a short segment L&lt;&lt;295.0,204.0&gt;--&lt;290.0,204.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;332.0,700.0&gt;--&lt;332.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;192.0,700.0&gt;--&lt;192.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;289.0,496.0&gt;--&lt;294.0,496.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;283.0,496.0&gt;--&lt;288.0,496.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;283.0,496.0&gt;--&lt;288.0,496.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;283.0,496.0&gt;--&lt;288.0,496.0&gt;&gt;

* nine.lf contains a short segment L&lt;&lt;311.0,204.0&gt;--&lt;306.0,204.0&gt;&gt;

* nine.osf contains a short segment L&lt;&lt;295.0,204.0&gt;--&lt;290.0,204.0&gt;&gt;

* nine.tf contains a short segment L&lt;&lt;295.0,204.0&gt;--&lt;290.0,204.0&gt;&gt;

* nine.tosf contains a short segment L&lt;&lt;295.0,204.0&gt;--&lt;290.0,204.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;127.0,223.0&gt;--&lt;130.0,223.0&gt;&gt;

* nine.dnom contains a short segment L&lt;&lt;133.0,92.0&gt;--&lt;131.0,92.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;127.0,608.0&gt;--&lt;130.0,608.0&gt;&gt;

* nine.numr contains a short segment L&lt;&lt;133.0,477.0&gt;--&lt;131.0,477.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;127.0,223.0&gt;--&lt;130.0,223.0&gt;&gt;

* uni2089 (U+2089) contains a short segment L&lt;&lt;133.0,92.0&gt;--&lt;131.0,92.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;127.0,608.0&gt;--&lt;130.0,608.0&gt;&gt;

* uni2079 (U+2079) contains a short segment L&lt;&lt;133.0,477.0&gt;--&lt;131.0,477.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;370.0,700.0&gt;--&lt;376.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;324.0,425.0&gt;-&lt;327.0,424.0&gt;-&lt;330.0,424.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;85.0,329.0&gt;-&lt;85.0,339.0&gt;-&lt;85.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;220.0,350.0&gt;-&lt;220.0,339.0&gt;-&lt;221.0,329.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;380.0,729.0&gt;--&lt;390.0,719.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;779.0,292.0&gt;--&lt;769.0,281.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;375.0,0.0&gt;--&lt;365.0,10.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;50.0,297.0&gt;--&lt;60.0,307.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;740.0,218.0&gt;--&lt;740.0,218.0&gt;&gt;
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

<details><summary>[19] ElmsSans-Regular.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* arrowup (U+2191): L&lt;&lt;423.0,700.0&gt;--&lt;423.0,700.0&gt;&gt; has the same coordinates as a previous segment.

* arrowright (U+2192): L&lt;&lt;750.0,253.0&gt;--&lt;750.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* arrowdown (U+2193): L&lt;&lt;334.0,43.0&gt;--&lt;334.0,43.0&gt;&gt; has the same coordinates as a previous segment.

* arrowdown (U+2193): L&lt;&lt;422.0,43.0&gt;--&lt;422.0,43.0&gt;&gt; has the same coordinates as a previous segment.

* arrowleft (U+2190): L&lt;&lt;93.0,342.0&gt;--&lt;93.0,342.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;755.0,332.0&gt;--&lt;755.0,332.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;755.0,262.0&gt;--&lt;755.0,262.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 909, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=185.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=548.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=373.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=373.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=487.5,Y=-2.0 (should be at baseline 0?)

* Scedilla (U+015E): X=272.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=275.0,Y=-278.0 (should be at descender -280?)

* uni1EB3 (U+1EB3): X=267.5,Y=700.5 (should be at cap-height 700?)

* uni1EB3 (U+1EB3): X=349.5,Y=702.0 (should be at cap-height 700?)

* uni1EB5 (U+1EB5): X=324.0,Y=720.5 (should be at ascender 720?)

* ccedilla (U+00E7): X=273.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=273.0,Y=-278.0 (should be at descender -280?)

* eth (U+00F0): X=317.0,Y=722.0 (should be at ascender 720?)

* uni0123 (U+0123): X=353.0,Y=699.0 (should be at cap-height 700?)

* r (U+0072): X=197.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=336.5,Y=481.5 (should be at x-height 480?)

* scedilla (U+015F): X=220.0,Y=-278.0 (should be at descender -280?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF7 (U+1EF7): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=263.0,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=45.5,Y=718.0 (should be at ascender 720?)

* quotedblright (U+201D): X=168.5,Y=718.0 (should be at ascender 720?)

* quoteright (U+2019): X=45.5,Y=718.0 (should be at ascender 720?)

* ampersand (U+0026): X=389.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=103.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=253.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=295.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=315.0,Y=718.0 (should be at ascender 720?)

* gravecomb (U+0300): X=40.0,Y=699.0 (should be at cap-height 700?)

* gravecomb (U+0300): X=134.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=138.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=232.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=99.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=193.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=197.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=291.0,Y=699.0 (should be at cap-height 700?)

* hookabovecomb (U+0309): X=163.0,Y=699.0 (should be at cap-height 700?)

* uni0312 (U+0312): X=146.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=127.0,Y=-278.0 (should be at descender -280?)

* uni03060309: X=140.5,Y=700.5 (should be at cap-height 700?)

* uni03060309: X=222.5,Y=702.0 (should be at cap-height 700?)

* uni03060303: X=237.0,Y=720.5 (should be at ascender 720?)

* grave (U+0060): X=40.0,Y=699.0 (should be at cap-height 700?)

* grave (U+0060): X=134.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=99.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=193.0,Y=699.0 (should be at cap-height 700?)

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
<pre><code>* arrowboth (U+2194): L&lt;&lt;310.0,35.0&gt;--&lt;55.0,292.0&gt;&gt; -&gt; L&lt;&lt;55.0,292.0&gt;--&lt;50.0,297.0&gt;&gt;

* arrowboth (U+2194): L&lt;&lt;755.0,262.0&gt;--&lt;755.0,262.0&gt;&gt; -&gt; L&lt;&lt;755.0,262.0&gt;--&lt;755.0,262.0&gt;&gt;

* arrowboth (U+2194): L&lt;&lt;755.0,332.0&gt;--&lt;755.0,332.0&gt;&gt; -&gt; L&lt;&lt;755.0,332.0&gt;--&lt;755.0,332.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;334.0,43.0&gt;--&lt;334.0,43.0&gt;&gt; -&gt; L&lt;&lt;334.0,43.0&gt;--&lt;334.0,43.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;422.0,43.0&gt;--&lt;422.0,43.0&gt;&gt; -&gt; L&lt;&lt;422.0,43.0&gt;--&lt;422.0,43.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;93.0,342.0&gt;--&lt;93.0,342.0&gt;&gt; -&gt; L&lt;&lt;93.0,342.0&gt;--&lt;93.0,342.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;750.0,253.0&gt;--&lt;750.0,253.0&gt;&gt; -&gt; L&lt;&lt;750.0,253.0&gt;--&lt;750.0,253.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;423.0,700.0&gt;--&lt;423.0,700.0&gt;&gt; -&gt; L&lt;&lt;423.0,700.0&gt;--&lt;423.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;205.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;20.0,315.0&gt;--&lt;84.0,315.0&gt;&gt; -&gt; L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt; -&gt; L&lt;&lt;84.0,315.0&gt;--&lt;92.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;215.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;356.0,700.0&gt;--&lt;356.0,700.0&gt;&gt; -&gt; L&lt;&lt;356.0,700.0&gt;--&lt;375.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;205.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;205.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;205.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;45.0,700.0&gt;--&lt;186.0,700.0&gt;&gt; -&gt; L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;20.0,315.0&gt;--&lt;84.0,315.0&gt;&gt; -&gt; L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt; -&gt; L&lt;&lt;84.0,315.0&gt;--&lt;92.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;513.0,308.0&gt;-&lt;474.0,301.0&gt;-&lt;425.0,314.0&gt;&gt;/B&lt;&lt;425.0,314.0&gt;-&lt;474.0,295.0&gt;-&lt;507.0,266.0&gt;&gt; = 6.335442033617589
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;424.0,522.0&gt;--&lt;423.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;581.0,542.0&gt;--&lt;580.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;141.0,720.0&gt;--&lt;139.0,172.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;61.0,172.0&gt;--&lt;59.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;139.0,252.0&gt;--&lt;141.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;59.0,-296.0&gt;--&lt;61.0,252.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;166.0,542.0&gt;--&lt;165.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;276.0,542.0&gt;--&lt;275.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;41.0,542.0&gt;--&lt;40.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;138.0,485.0&gt;--&lt;139.0,172.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;458.0,548.0&gt;--&lt;145.0,547.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;521.0,228.0&gt;--&lt;520.0,541.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;201.0,165.0&gt;--&lt;514.0,166.0&gt;&gt;
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

* one.osf contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;186.0,700.0&gt;--&lt;186.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;66.0,360.0&gt;--&lt;66.0,360.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;27.0,162.0&gt;--&lt;27.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;27.0,547.0&gt;--&lt;27.0,547.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;27.0,162.0&gt;--&lt;27.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;27.0,547.0&gt;--&lt;27.0,547.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;105.0,335.0&gt;-&lt;105.0,342.0&gt;-&lt;105.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;195.0,350.0&gt;-&lt;195.0,342.0&gt;-&lt;195.0,335.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;335.0,700.0&gt;--&lt;335.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;423.0,700.0&gt;--&lt;423.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;423.0,700.0&gt;--&lt;423.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;441.0,682.0&gt;--&lt;441.0,682.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;750.0,341.0&gt;--&lt;750.0,341.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;750.0,253.0&gt;--&lt;750.0,253.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;750.0,253.0&gt;--&lt;750.0,253.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;732.0,235.0&gt;--&lt;732.0,235.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;334.0,43.0&gt;--&lt;334.0,43.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;334.0,43.0&gt;--&lt;334.0,43.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;316.0,61.0&gt;--&lt;316.0,61.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;422.0,43.0&gt;--&lt;422.0,43.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;422.0,43.0&gt;--&lt;422.0,43.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;93.0,254.0&gt;--&lt;93.0,254.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;93.0,342.0&gt;--&lt;93.0,342.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;93.0,342.0&gt;--&lt;93.0,342.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;111.0,360.0&gt;--&lt;111.0,360.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;55.0,292.0&gt;--&lt;50.0,297.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;755.0,332.0&gt;--&lt;755.0,332.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;755.0,332.0&gt;--&lt;755.0,332.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;755.0,262.0&gt;--&lt;755.0,262.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;755.0,262.0&gt;--&lt;755.0,262.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;755.0,262.0&gt;--&lt;741.0,248.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;741.0,248.0&gt;--&lt;741.0,248.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;429.0,651.0&gt;--&lt;429.0,651.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;429.0,39.0&gt;--&lt;429.0,39.0&gt;&gt;
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

<details><summary>[18] ElmsSans-Thin.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 600 among a set of 12 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 456:
greater</p>
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
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=185.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=548.0,Y=702.0 (should be at cap-height 700?)

* Acircumflex (U+00C2): X=177.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=427.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=399.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=205.0,Y=722.0 (should be at ascender 720?)

* Acircumflex (U+00C2): X=177.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=177.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=427.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=399.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=205.0,Y=722.0 (should be at ascender 720?)

* uni1EAC (U+1EAC): X=177.0,Y=722.0 (should be at ascender 720?)

* Ccedilla (U+00C7): X=390.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=390.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=517.5,Y=-1.0 (should be at baseline 0?)

* S (U+0053): X=335.0,Y=1.5 (should be at baseline 0?)

* Sacute (U+015A): X=335.0,Y=1.5 (should be at baseline 0?)

* Scaron (U+0160): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=250.0,Y=-278.0 (should be at descender -280?)

* Scircumflex (U+015C): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0218 (U+0218): X=335.0,Y=1.5 (should be at baseline 0?)

* uni1E62 (U+1E62): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0162 (U+0162): X=256.0,Y=-278.0 (should be at descender -280?)

* uni1EB3 (U+1EB3): X=319.5,Y=699.5 (should be at cap-height 700?)

* ae (U+00E6): X=557.0,Y=1.0 (should be at baseline 0?)

* c (U+0063): X=405.0,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=298.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=298.0,Y=-278.0 (should be at descender -280?)

* eth (U+00F0): X=395.0,Y=701.0 (should be at cap-height 700?)

* uni0229 (U+0229): X=339.0,Y=2.0 (should be at baseline 0?)

* uni0229 (U+0229): X=368.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=339.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=368.0,Y=2.0 (should be at baseline 0?)

* f (U+0066): X=188.5,Y=698.0 (should be at cap-height 700?)

* uni0123 (U+0123): X=360.0,Y=719.0 (should be at ascender 720?)

* r (U+0072): X=319.5,Y=478.5 (should be at x-height 480?)

* s (U+0073): X=152.5,Y=478.0 (should be at x-height 480?)

* scedilla (U+015F): X=245.0,Y=-278.0 (should be at descender -280?)

* germandbls (U+00DF): X=152.0,Y=699.0 (should be at cap-height 700?)

* germandbls (U+00DF): X=394.5,Y=699.0 (should be at cap-height 700?)

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

* uni1EF7 (U+1EF7): X=145.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=120.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=145.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=120.0,Y=-279.0 (should be at descender -280?)

* question (U+003F): X=152.0,Y=-2.0 (should be at baseline 0?)

* question (U+003F): X=180.0,Y=-2.0 (should be at baseline 0?)

* questiondown (U+00BF): X=105.5,Y=-0.5 (should be at baseline 0?)

* quotedblright (U+201D): X=42.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=105.5,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=133.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=196.5,Y=719.5 (should be at ascender 720?)

* quoteright (U+2019): X=42.0,Y=699.0 (should be at cap-height 700?)

* quoteright (U+2019): X=105.5,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=176.0,Y=1.0 (should be at baseline 0?)

* section (U+00A7): X=110.5,Y=699.0 (should be at cap-height 700?)

* section (U+00A7): X=238.0,Y=699.0 (should be at cap-height 700?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* copyright (U+00A9): X=371.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=247.0,Y=699.0 (should be at cap-height 700?)

* sterling (U+00A3): X=350.0,Y=718.0 (should be at ascender 720?)

* arrowright (U+2192): X=457.0,Y=-2.0 (should be at baseline 0?)

* arrowleft (U+2190): X=357.0,Y=-2.0 (should be at baseline 0?)

* uni0312 (U+0312): X=101.0,Y=719.0 (should be at ascender 720?)

* uni0327 (U+0327): X=137.0,Y=-278.0 (should be at descender -280?)

* uni03060309: X=285.5,Y=699.5 (should be at cap-height 700?)

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

* one.dnom: L&lt;&lt;32.0,315.0&gt;--&lt;68.0,315.0&gt;&gt; -&gt; L&lt;&lt;68.0,315.0&gt;--&lt;68.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;68.0,315.0&gt;--&lt;68.0,315.0&gt;&gt; -&gt; L&lt;&lt;68.0,315.0&gt;--&lt;81.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;240.0,700.0&gt;--&lt;321.0,700.0&gt;&gt; -&gt; L&lt;&lt;321.0,700.0&gt;--&lt;321.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;321.0,700.0&gt;--&lt;321.0,700.0&gt;&gt; -&gt; L&lt;&lt;321.0,700.0&gt;--&lt;349.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;32.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;81.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;179.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;70.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;179.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;70.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;179.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;70.0,700.0&gt;--&lt;151.0,700.0&gt;&gt; -&gt; L&lt;&lt;151.0,700.0&gt;--&lt;151.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;43.0,700.0&gt;--&lt;79.0,700.0&gt;&gt; -&gt; L&lt;&lt;79.0,700.0&gt;--&lt;79.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;79.0,700.0&gt;--&lt;79.0,700.0&gt;&gt; -&gt; L&lt;&lt;79.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;43.0,700.0&gt;--&lt;79.0,700.0&gt;&gt; -&gt; L&lt;&lt;79.0,700.0&gt;--&lt;79.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;79.0,700.0&gt;--&lt;79.0,700.0&gt;&gt; -&gt; L&lt;&lt;79.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;43.0,700.0&gt;--&lt;79.0,700.0&gt;&gt; -&gt; L&lt;&lt;79.0,700.0&gt;--&lt;79.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;79.0,700.0&gt;--&lt;79.0,700.0&gt;&gt; -&gt; L&lt;&lt;79.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;32.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;81.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;32.0,315.0&gt;--&lt;68.0,315.0&gt;&gt; -&gt; L&lt;&lt;68.0,315.0&gt;--&lt;68.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;68.0,315.0&gt;--&lt;68.0,315.0&gt;&gt; -&gt; L&lt;&lt;68.0,315.0&gt;--&lt;81.0,315.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;50.0,177.0&gt;--&lt;54.0,610.0&gt;&gt; -&gt; L&lt;&lt;54.0,610.0&gt;--&lt;54.0,611.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;130.0,613.0&gt;--&lt;563.0,609.0&gt;&gt; -&gt; L&lt;&lt;563.0,609.0&gt;--&lt;564.0,609.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;568.0,531.0&gt;--&lt;564.0,98.0&gt;&gt; -&gt; L&lt;&lt;564.0,98.0&gt;--&lt;564.0,97.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;484.0,95.0&gt;--&lt;51.0,99.0&gt;&gt; -&gt; L&lt;&lt;51.0,99.0&gt;--&lt;50.0,99.0&gt;&gt;
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

* whimsy: B&lt;&lt;453.0,245.0&gt;-&lt;414.0,244.0&gt;-&lt;365.0,261.0&gt;&gt;/B&lt;&lt;365.0,261.0&gt;-&lt;409.0,241.0&gt;-&lt;439.5,216.5&gt;&gt; = 5.310311574511048
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;436.0,522.0&gt;--&lt;435.0,700.0&gt;&gt;

* ae (U+00E6): L&lt;&lt;436.0,252.0&gt;--&lt;278.0,251.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;603.0,542.0&gt;--&lt;602.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;123.0,720.0&gt;--&lt;121.0,152.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;98.0,152.0&gt;--&lt;96.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;121.0,272.0&gt;--&lt;123.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;96.0,-296.0&gt;--&lt;98.0,272.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;120.0,542.0&gt;--&lt;119.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;282.0,542.0&gt;--&lt;281.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;21.0,542.0&gt;--&lt;20.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;81.0,565.0&gt;--&lt;79.0,177.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;518.0,582.0&gt;--&lt;130.0,584.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;537.0,143.0&gt;--&lt;539.0,531.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;96.0,126.0&gt;--&lt;484.0,124.0&gt;&gt;
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

<details><summary>[18] ElmsSans-Medium.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 911, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=158.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=521.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=375.0,Y=-282.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=375.0,Y=-282.0 (should be at descender -280?)

* Scedilla (U+015E): X=280.0,Y=-282.0 (should be at descender -280?)

* uni0162 (U+0162): X=281.0,Y=-282.0 (should be at descender -280?)

* uni1EB5 (U+1EB5): X=321.0,Y=721.0 (should be at ascender 720?)

* ccedilla (U+00E7): X=274.0,Y=-282.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=274.0,Y=-282.0 (should be at descender -280?)

* eth (U+00F0): X=315.0,Y=722.0 (should be at ascender 720?)

* h (U+0068): X=225.0,Y=478.5 (should be at x-height 480?)

* uni0265 (U+0265): X=356.0,Y=1.5 (should be at baseline 0?)

* m (U+006D): X=214.5,Y=479.0 (should be at x-height 480?)

* n (U+006E): X=223.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=351.5,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=227.0,Y=-282.0 (should be at descender -280?)

* u (U+0075): X=356.0,Y=1.5 (should be at baseline 0?)

* uacute (U+00FA): X=356.0,Y=1.5 (should be at baseline 0?)

* uni0289 (U+0289): X=405.0,Y=1.5 (should be at baseline 0?)

* ubreve (U+016D): X=356.0,Y=1.5 (should be at baseline 0?)

* ucircumflex (U+00FB): X=356.0,Y=1.5 (should be at baseline 0?)

* udieresis (U+00FC): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EE5 (U+1EE5): X=356.0,Y=1.5 (should be at baseline 0?)

* ugrave (U+00F9): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EE7 (U+1EE7): X=356.0,Y=1.5 (should be at baseline 0?)

* uhorn (U+01B0): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EE9 (U+1EE9): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EF1 (U+1EF1): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EEB (U+1EEB): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EED (U+1EED): X=356.0,Y=1.5 (should be at baseline 0?)

* uni1EEF (U+1EEF): X=356.0,Y=1.5 (should be at baseline 0?)

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

* uni1EF7 (U+1EF7): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* period (U+002E): X=56.0,Y=2.0 (should be at baseline 0?)

* period (U+002E): X=144.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=76.0,Y=2.0 (should be at baseline 0?)

* colon (U+003A): X=164.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=56.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=144.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=256.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=344.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=456.0,Y=2.0 (should be at baseline 0?)

* ellipsis (U+2026): X=544.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=65.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=153.0,Y=2.0 (should be at baseline 0?)

* question (U+003F): X=270.0,Y=718.0 (should be at ascender 720?)

* section (U+00A7): X=103.0,Y=699.0 (should be at cap-height 700?)

* section (U+00A7): X=261.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=305.0,Y=2.0 (should be at baseline 0?)

* sterling (U+00A3): X=316.0,Y=718.0 (should be at ascender 720?)

* gravecomb (U+0300): X=38.0,Y=699.0 (should be at cap-height 700?)

* gravecomb (U+0300): X=144.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=125.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=231.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=97.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=203.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=178.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=284.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=131.0,Y=-282.0 (should be at descender -280?)

* uni03060303: X=250.0,Y=721.0 (should be at ascender 720?)

* grave (U+0060): X=32.0,Y=699.0 (should be at cap-height 700?)

* grave (U+0060): X=138.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=91.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=197.0,Y=699.0 (should be at cap-height 700?)

* cedilla (U+00B8): X=127.0,Y=-282.0 (should be at descender -280?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* arrowboth (U+2194): L&lt;&lt;309.0,34.0&gt;--&lt;61.0,284.0&gt;&gt; -&gt; L&lt;&lt;61.0,284.0&gt;--&lt;50.0,295.0&gt;&gt;

* one (U+0031): L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;47.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;21.0,315.0&gt;--&lt;85.0,315.0&gt;&gt; -&gt; L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt; -&gt; L&lt;&lt;85.0,315.0&gt;--&lt;101.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;207.0,700.0&gt;--&lt;348.0,700.0&gt;&gt; -&gt; L&lt;&lt;348.0,700.0&gt;--&lt;348.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;348.0,700.0&gt;--&lt;348.0,700.0&gt;&gt; -&gt; L&lt;&lt;348.0,700.0&gt;--&lt;385.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;21.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;101.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;47.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;47.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;225.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;47.0,700.0&gt;--&lt;188.0,700.0&gt;&gt; -&gt; L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;21.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;101.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;21.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;101.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;21.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;101.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;21.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;101.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;21.0,315.0&gt;--&lt;85.0,315.0&gt;&gt; -&gt; L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt; -&gt; L&lt;&lt;85.0,315.0&gt;--&lt;101.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;530.0,314.0&gt;-&lt;491.0,305.0&gt;-&lt;443.0,316.0&gt;&gt;/B&lt;&lt;443.0,316.0&gt;-&lt;493.0,299.0&gt;-&lt;526.5,271.0&gt;&gt; = 5.870624551179694
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;417.0,522.0&gt;--&lt;416.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;586.0,542.0&gt;--&lt;585.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;157.0,720.0&gt;--&lt;155.0,181.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;63.0,181.0&gt;--&lt;61.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;155.0,243.0&gt;--&lt;157.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;61.0,-296.0&gt;--&lt;63.0,243.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;183.0,542.0&gt;--&lt;182.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;279.0,542.0&gt;--&lt;278.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;39.0,542.0&gt;--&lt;38.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;152.0,455.0&gt;--&lt;153.0,169.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;513.0,528.0&gt;--&lt;226.0,527.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;147.0,175.0&gt;--&lt;434.0,176.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;508.0,248.0&gt;--&lt;507.0,534.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;154.0,535.0&gt;--&lt;155.0,248.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* ae (U+00E6) contains a short segment B&lt;&lt;815.0,254.0&gt;-&lt;815.0,254.0&gt;-&lt;814.5,239.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;348.0,700.0&gt;--&lt;348.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;188.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;66.0,360.0&gt;--&lt;66.0,360.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;60.0,360.0&gt;--&lt;60.0,360.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;27.0,162.0&gt;--&lt;27.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;27.0,547.0&gt;--&lt;27.0,547.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;27.0,162.0&gt;--&lt;27.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;27.0,547.0&gt;--&lt;27.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;305.0,419.0&gt;--&lt;306.0,419.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;99.0,333.0&gt;-&lt;98.0,341.0&gt;-&lt;98.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;203.0,350.0&gt;-&lt;203.0,341.0&gt;-&lt;204.0,333.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;452.0,667.0&gt;--&lt;451.0,667.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;717.0,223.0&gt;--&lt;717.0,223.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;305.0,71.0&gt;--&lt;305.0,71.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;121.0,370.0&gt;--&lt;121.0,370.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;741.0,238.0&gt;--&lt;740.0,238.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;61.0,284.0&gt;--&lt;50.0,295.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;437.0,643.0&gt;--&lt;437.0,643.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;437.0,39.0&gt;--&lt;437.0,39.0&gt;&gt;
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

<details><summary>[19] ElmsSans-Light.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 600 among a set of 12 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 552:
greater</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Checking that the typoAscender exceeds the yMax of the /Agrave. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#typoascender-exceeds-Agrave">typoascender_exceeds_Agrave</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2.sTypoAscender value should be greater than 906, but got 720 instead</p>
 [code: typoAscender]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=185.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=548.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=378.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=378.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=497.5,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=264.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=268.0,Y=-278.0 (should be at descender -280?)

* uni1EB5 (U+1EB5): X=330.0,Y=719.0 (should be at ascender 720?)

* uni01E1 (U+01E1): X=139.0,Y=701.0 (should be at cap-height 700?)

* uni01E1 (U+01E1): X=473.0,Y=701.0 (should be at cap-height 700?)

* uni01E1 (U+01E1): X=139.0,Y=701.0 (should be at cap-height 700?)

* uni1EA3 (U+1EA3): X=308.0,Y=718.0 (should be at ascender 720?)

* ae (U+00E6): X=536.0,Y=-1.5 (should be at baseline 0?)

* c (U+0063): X=392.0,Y=478.5 (should be at x-height 480?)

* ccedilla (U+00E7): X=281.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=281.0,Y=-278.0 (should be at descender -280?)

* uni1EBB (U+1EBB): X=277.0,Y=718.0 (should be at ascender 720?)

* uni1EC9 (U+1EC9): X=94.0,Y=718.0 (should be at ascender 720?)

* uni0199 (U+0199): X=86.0,Y=698.5 (should be at cap-height 700?)

* uni1ECF (U+1ECF): X=291.0,Y=718.0 (should be at ascender 720?)

* uni1EDF (U+1EDF): X=291.0,Y=718.0 (should be at ascender 720?)

* uni0254 (U+0254): X=28.0,Y=-1.0 (should be at baseline 0?)

* oslash (U+00F8): X=206.0,Y=-2.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=206.0,Y=-2.0 (should be at baseline 0?)

* r (U+0072): X=330.5,Y=480.5 (should be at x-height 480?)

* scedilla (U+015F): X=228.0,Y=-278.0 (should be at descender -280?)

* uni1EE7 (U+1EE7): X=287.0,Y=718.0 (should be at ascender 720?)

* uni1EED (U+1EED): X=287.0,Y=718.0 (should be at ascender 720?)

* uni1EF7 (U+1EF7): X=267.0,Y=718.0 (should be at ascender 720?)

* period (U+002E): X=47.5,Y=-1.5 (should be at baseline 0?)

* period (U+002E): X=118.5,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=67.5,Y=-1.5 (should be at baseline 0?)

* colon (U+003A): X=138.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=47.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=118.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=227.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=298.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=407.5,Y=-1.5 (should be at baseline 0?)

* ellipsis (U+2026): X=478.5,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=67.5,Y=-1.5 (should be at baseline 0?)

* exclam (U+0021): X=138.5,Y=-1.5 (should be at baseline 0?)

* quotedblleft (U+201C): X=241.0,Y=702.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=129.0,Y=702.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=47.5,Y=719.5 (should be at ascender 720?)

* quotedblright (U+201D): X=160.5,Y=719.5 (should be at ascender 720?)

* quoteleft (U+2018): X=129.0,Y=702.0 (should be at cap-height 700?)

* quoteright (U+2019): X=47.5,Y=719.5 (should be at ascender 720?)

* section (U+00A7): X=105.0,Y=699.5 (should be at cap-height 700?)

* section (U+00A7): X=248.5,Y=698.5 (should be at cap-height 700?)

* dollar (U+0024): X=216.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=216.0,Y=698.0 (should be at cap-height 700?)

* dollar (U+0024): X=279.0,Y=1.0 (should be at baseline 0?)

* sterling (U+00A3): X=327.0,Y=718.0 (should be at ascender 720?)

* gravecomb (U+0300): X=33.0,Y=699.0 (should be at cap-height 700?)

* gravecomb (U+0300): X=107.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=132.0,Y=699.0 (should be at cap-height 700?)

* uni03000304: X=206.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=94.0,Y=699.0 (should be at cap-height 700?)

* acutecomb (U+0301): X=167.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=193.0,Y=699.0 (should be at cap-height 700?)

* uni03010304: X=266.0,Y=699.0 (should be at cap-height 700?)

* uni0327 (U+0327): X=130.0,Y=-278.0 (should be at descender -280?)

* uni03060303: X=261.0,Y=719.0 (should be at ascender 720?)

* grave (U+0060): X=33.0,Y=699.0 (should be at cap-height 700?)

* grave (U+0060): X=107.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=94.0,Y=699.0 (should be at cap-height 700?)

* acute (U+00B4): X=167.0,Y=699.0 (should be at cap-height 700?)

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
<pre><code>* one (U+0031): L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;196.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;53.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;24.0,315.0&gt;--&lt;78.0,315.0&gt;&gt; -&gt; L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt; -&gt; L&lt;&lt;78.0,315.0&gt;--&lt;88.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;223.0,700.0&gt;--&lt;344.0,700.0&gt;&gt; -&gt; L&lt;&lt;344.0,700.0&gt;--&lt;344.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;344.0,700.0&gt;--&lt;344.0,700.0&gt;&gt; -&gt; L&lt;&lt;344.0,700.0&gt;--&lt;366.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;24.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;88.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;196.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;53.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;196.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;53.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;196.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;53.0,700.0&gt;--&lt;174.0,700.0&gt;&gt; -&gt; L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;28.0,700.0&gt;--&lt;82.0,700.0&gt;&gt; -&gt; L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt; -&gt; L&lt;&lt;82.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;28.0,700.0&gt;--&lt;82.0,700.0&gt;&gt; -&gt; L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt; -&gt; L&lt;&lt;82.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;28.0,700.0&gt;--&lt;82.0,700.0&gt;&gt; -&gt; L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt; -&gt; L&lt;&lt;82.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;24.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;88.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;24.0,315.0&gt;--&lt;78.0,315.0&gt;&gt; -&gt; L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt; -&gt; L&lt;&lt;78.0,315.0&gt;--&lt;88.0,315.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;493.0,287.0&gt;-&lt;454.0,282.0&gt;-&lt;405.0,296.0&gt;&gt;/B&lt;&lt;405.0,296.0&gt;-&lt;452.0,277.0&gt;-&lt;484.5,249.5&gt;&gt; = 6.065887296996509
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;428.0,522.0&gt;--&lt;427.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;588.0,542.0&gt;--&lt;587.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;135.0,720.0&gt;--&lt;133.0,165.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;73.0,165.0&gt;--&lt;71.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;133.0,259.0&gt;--&lt;135.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;71.0,-296.0&gt;--&lt;73.0,259.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;150.0,542.0&gt;--&lt;149.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;278.0,542.0&gt;--&lt;277.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;34.0,542.0&gt;--&lt;33.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;50.0,174.0&gt;--&lt;51.0,627.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;140.0,628.0&gt;--&lt;594.0,627.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;478.0,560.0&gt;--&lt;140.0,559.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;527.0,199.0&gt;--&lt;526.0,538.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;595.0,538.0&gt;--&lt;594.0,84.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;504.0,83.0&gt;--&lt;50.0,84.0&gt;&gt;
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

* one (U+0031) contains a short segment L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* six (U+0036) contains a short segment L&lt;&lt;65.0,360.0&gt;--&lt;65.0,360.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;344.0,700.0&gt;--&lt;344.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;174.0,700.0&gt;--&lt;174.0,700.0&gt;&gt;

* six.lf contains a short segment L&lt;&lt;71.0,360.0&gt;--&lt;71.0,360.0&gt;&gt;

* six.osf contains a short segment L&lt;&lt;65.0,360.0&gt;--&lt;65.0,360.0&gt;&gt;

* six.tf contains a short segment L&lt;&lt;65.0,360.0&gt;--&lt;65.0,360.0&gt;&gt;

* six.tosf contains a short segment L&lt;&lt;65.0,360.0&gt;--&lt;65.0,360.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;29.0,162.0&gt;--&lt;29.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;29.0,547.0&gt;--&lt;29.0,547.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;29.0,162.0&gt;--&lt;29.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;29.0,547.0&gt;--&lt;29.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;279.0,407.0&gt;-&lt;286.0,405.0&gt;-&lt;290.0,404.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;124.0,327.0&gt;-&lt;123.0,338.0&gt;-&lt;123.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;193.0,350.0&gt;-&lt;193.0,338.0&gt;-&lt;194.0,327.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;189.0,317.0&gt;--&lt;189.0,310.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;338.0,700.0&gt;--&lt;338.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;420.0,686.0&gt;--&lt;419.0,686.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;594.0,627.0&gt;--&lt;594.0,619.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;594.0,619.0&gt;--&lt;594.0,619.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;750.0,334.0&gt;--&lt;750.0,333.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;736.0,252.0&gt;--&lt;736.0,252.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;594.0,84.0&gt;--&lt;586.0,84.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;586.0,84.0&gt;--&lt;586.0,84.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;323.0,47.0&gt;--&lt;323.0,47.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;405.0,34.0&gt;--&lt;405.0,33.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;405.0,33.0&gt;--&lt;405.0,33.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;50.0,84.0&gt;--&lt;50.0,92.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;50.0,92.0&gt;--&lt;50.0,92.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;83.0,266.0&gt;--&lt;83.0,267.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;97.0,348.0&gt;--&lt;97.0,348.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;84.0,266.0&gt;--&lt;83.0,266.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;51.0,627.0&gt;--&lt;59.0,627.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;59.0,627.0&gt;--&lt;59.0,628.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;746.0,327.0&gt;--&lt;747.0,327.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;747.0,327.0&gt;--&lt;747.0,326.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;736.0,262.0&gt;--&lt;736.0,262.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;88.0,262.0&gt;--&lt;88.0,262.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;410.0,662.0&gt;--&lt;410.0,662.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;410.0,44.0&gt;--&lt;410.0,44.0&gt;&gt;
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

<details><summary>[20] ElmsSans-ExtraLight.ttf</summary>
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
<td align="left">U+024B: LATIN SMALL LETTER Q WITH HOOK TAIL</td>
<td align="left">U+024A: LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL</td>
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
<pre><code>- Glyph name: currency	Expected: 2

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: infinity	Expected: 3

- Glyph name: approxequal	Expected: 2

- Glyph name: lozenge	Expected: 2

- Glyph name: uni25CC	Expected: 16 or 12

- Glyph name: approxequal	Expected: 2

- Glyph name: currency	Expected: 2

- Glyph name: infinity	Expected: 3

- Glyph name: lozenge	Expected: 2

- Glyph name: partialdiff	Expected: 2

- Glyph name: product	Expected: 1

- Glyph name: radical	Expected: 1

- Glyph name: summation	Expected: 1

- Glyph name: uni0180	Expected: 2

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

- Glyph name: uni024B	Expected: 2

- Glyph name: uni024D	Expected: 1

- Glyph name: uni0251	Expected: 2

- Glyph name: uni0272	Expected: 1

- Glyph name: uni20AA	Expected: 2

- Glyph name: uni20B4	Expected: 1 or 2

- Glyph name: uni25CC	Expected: 16 or 12
</code></pre>
 [code: no-contour]



* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 3	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 3	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 3	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 3	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 3	Expected: 2

- Glyph name: uogonek	Contours detected: 2	Expected: 1
</code></pre>
 [code: contour-count]



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
<pre><code>- uni031B

- uni0328

- uni0335
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Check font follows the Google Fonts vertical metric schema <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vertical-metrics">googlefonts/vertical_metrics</a></summary>
    <div>







* 🔥 **FAIL** <p>The sum of hhea.ascender + abs(hhea.descender) + hhea.lineGap is 1000 when it should be at least 1200</p>
 [code: bad-hhea-range]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if uppercase glyphs are vertically centered. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#caps-vertically-centered">caps_vertically_centered</a></summary>
    <div>







* ⚠️ **WARN** <p>Uppercase glyphs are not vertically centered in the em box.</p>
 [code: vertical-metrics-not-centered]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check math signs have the same width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#math-signs-width">math_signs_width</a></summary>
    <div>







* ⚠️ **WARN** <p>The most common width is 600 among a set of 12 math glyphs.
The following math glyphs have a different width, though:</p>
<p>Width = 504:
greater</p>
 [code: width-outliers]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* arrowdown (U+2193): L&lt;&lt;388.0,24.0&gt;--&lt;388.0,24.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;738.0,321.0&gt;--&lt;738.0,321.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- whimsy
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, math, coptic, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: malayalam, math, todhri, tai-le, tifinagh, old-permic, syriac, canadian-aboriginal, coptic, duployan, hebrew</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: duployan, syriac</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: math, sunuwar</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: sunuwar, syriac</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: gothic, cherokee, tifinagh, caucasian-albanian, sunuwar, syriac, thai</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+2080 SUBSCRIPT ZERO: try adding math</li>
<li>U+2081 SUBSCRIPT ONE: try adding math</li>
<li>U+2082 SUBSCRIPT TWO: try adding math</li>
<li>U+2083 SUBSCRIPT THREE: try adding math</li>
<li>U+2084 SUBSCRIPT FOUR: try adding math</li>
<li>U+2085 SUBSCRIPT FIVE: try adding math</li>
<li>U+2086 SUBSCRIPT SIX: try adding math</li>
<li>U+2087 SUBSCRIPT SEVEN: try adding math</li>
<li>U+2088 SUBSCRIPT EIGHT: try adding math</li>
<li>U+2089 SUBSCRIPT NINE: try adding math</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
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
<li>U+25CC DOTTED CIRCLE: try adding one of: warang-citi, mende-kikakui, gurmukhi, syriac, hanifi-rohingya, symbols, tai-tham, hanunoo, pahawh-hmong, oriya, khudawadi, tai-viet, bengali, tamil, ahom, tibetan, takri, nko, marchen, syloti-nagri, brahmi, miao, batak, math, adlam, tifinagh, mongolian, thaana, buhid, modi, myanmar, limbu, new-tai-lue, soyombo, canadian-aboriginal, duployan, lao, gujarati, khmer, malayalam, tirhuta, phags-pa, grantha, newa, tagbanwa, mahajani, armenian, wancho, psalter-pahlavi, hebrew, mandaic, chakma, cham, balinese, bhaiksuki, javanese, music, tagalog, osage, bassa-vah, elbasan, telugu, sinhala, kaithi, buginese, masaram-gondi, gunjala-gondi, dogra, sundanese, kayah-li, yi, kannada, kharoshthi, sogdian, devanagari, khojki, thai, lepcha, saurashtra, manichaean, tai-le, sharada, caucasian-albanian, old-permic, rejang, meetei-mayek, coptic, zanabazar-square, siddham</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: į̆ į̇ į̈ į̉ į̊ į̋ į̐ į̑ į̒ į̛̀ į̛́ į̛̂ į̛̃ į̛̄ į̛̆ į̛̇ į̛̈ į̛̉ į̛̊ į̛̋</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=185.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=548.0,Y=702.0 (should be at cap-height 700?)

* Ccedilla (U+00C7): X=385.0,Y=-278.0 (should be at descender -280?)

* uni1E08 (U+1E08): X=385.0,Y=-278.0 (should be at descender -280?)

* Q (U+0051): X=508.0,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=258.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=263.0,Y=-278.0 (should be at descender -280?)

* uni1EB3 (U+1EB3): X=329.0,Y=718.0 (should be at ascender 720?)

* uni1EB3 (U+1EB3): X=391.5,Y=719.5 (should be at ascender 720?)

* uni1EA3 (U+1EA3): X=246.0,Y=700.5 (should be at cap-height 700?)

* ae (U+00E6): X=546.5,Y=-0.5 (should be at baseline 0?)

* c (U+0063): X=398.5,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=290.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=290.0,Y=-278.0 (should be at descender -280?)

* eth (U+00F0): X=359.0,Y=719.0 (should be at ascender 720?)

* uni1EBB (U+1EBB): X=220.0,Y=700.5 (should be at cap-height 700?)

* uni1E2F (U+1E2F): X=44.0,Y=699.0 (should be at cap-height 700?)

* uni1E2F (U+1E2F): X=78.0,Y=699.0 (should be at cap-height 700?)

* uni1E2F (U+1E2F): X=44.0,Y=699.0 (should be at cap-height 700?)

* uni1EC9 (U+1EC9): X=24.0,Y=700.5 (should be at cap-height 700?)

* uni0199 (U+0199): X=97.0,Y=698.0 (should be at cap-height 700?)

* uni1ECF (U+1ECF): X=234.0,Y=700.5 (should be at cap-height 700?)

* uni1EDF (U+1EDF): X=234.0,Y=700.5 (should be at cap-height 700?)

* uni0254 (U+0254): X=37.0,Y=2.0 (should be at baseline 0?)

* oslash (U+00F8): X=206.0,Y=1.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=206.0,Y=1.0 (should be at baseline 0?)

* r (U+0072): X=325.0,Y=479.5 (should be at x-height 480?)

* scedilla (U+015F): X=237.0,Y=-278.0 (should be at descender -280?)

* germandbls (U+00DF): X=144.5,Y=698.0 (should be at cap-height 700?)

* germandbls (U+00DF): X=385.5,Y=698.0 (should be at cap-height 700?)

* uni1EE7 (U+1EE7): X=224.0,Y=700.5 (should be at cap-height 700?)

* uni1EED (U+1EED): X=224.0,Y=700.5 (should be at cap-height 700?)

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

* uni1EF7 (U+1EF7): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=168.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=190.0,Y=700.5 (should be at cap-height 700?)

* uni1EF9 (U+1EF9): X=123.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=168.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=123.0,Y=-279.0 (should be at descender -280?)

* comma (U+002C): X=41.0,Y=1.5 (should be at baseline 0?)

* semicolon (U+003B): X=61.0,Y=1.5 (should be at baseline 0?)

* question (U+003F): X=229.0,Y=698.0 (should be at cap-height 700?)

* question (U+003F): X=160.5,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=205.5,Y=1.0 (should be at baseline 0?)

* quotesinglbase (U+201A): X=48.0,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=48.0,Y=1.5 (should be at baseline 0?)

* quotedblbase (U+201E): X=149.0,Y=1.5 (should be at baseline 0?)

* quotedblright (U+201D): X=50.5,Y=721.5 (should be at ascender 720?)

* quotedblright (U+201D): X=151.5,Y=721.5 (should be at ascender 720?)

* quoteright (U+2019): X=50.5,Y=721.5 (should be at ascender 720?)

* section (U+00A7): X=108.0,Y=699.0 (should be at cap-height 700?)

* section (U+00A7): X=243.0,Y=698.5 (should be at cap-height 700?)

* registered (U+00AE): X=201.0,Y=701.0 (should be at cap-height 700?)

* dollar (U+0024): X=220.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=220.0,Y=699.0 (should be at cap-height 700?)

* dollar (U+0024): X=263.0,Y=698.0 (should be at cap-height 700?)

* sterling (U+00A3): X=338.0,Y=718.0 (should be at ascender 720?)

* hookabovecomb (U+0309): X=226.5,Y=699.5 (should be at cap-height 700?)

* uni0327 (U+0327): X=134.0,Y=-278.0 (should be at descender -280?)

* uni03060309: X=264.0,Y=718.0 (should be at ascender 720?)

* uni03060309: X=326.5,Y=719.5 (should be at ascender 720?)

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
<pre><code>* arrowboth (U+2194): L&lt;&lt;738.0,321.0&gt;--&lt;738.0,321.0&gt;&gt; -&gt; L&lt;&lt;738.0,321.0&gt;--&lt;738.0,321.0&gt;&gt;

* arrowdown (U+2193): L&lt;&lt;388.0,24.0&gt;--&lt;388.0,24.0&gt;&gt; -&gt; L&lt;&lt;388.0,24.0&gt;--&lt;388.0,24.0&gt;&gt;

* one (U+0031): L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one (U+0031): L&lt;&lt;62.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.dnom: L&lt;&lt;28.0,315.0&gt;--&lt;73.0,315.0&gt;&gt; -&gt; L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt;

* one.dnom: L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt; -&gt; L&lt;&lt;73.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* one.lf: L&lt;&lt;232.0,700.0&gt;--&lt;333.0,700.0&gt;&gt; -&gt; L&lt;&lt;333.0,700.0&gt;--&lt;333.0,700.0&gt;&gt;

* one.lf: L&lt;&lt;333.0,700.0&gt;--&lt;333.0,700.0&gt;&gt; -&gt; L&lt;&lt;333.0,700.0&gt;--&lt;358.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;28.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* one.numr: L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.osf: L&lt;&lt;62.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.tf: L&lt;&lt;62.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;188.0,700.0&gt;&gt;

* one.tosf: L&lt;&lt;62.0,700.0&gt;--&lt;163.0,700.0&gt;&gt; -&gt; L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;35.0,700.0&gt;--&lt;80.0,700.0&gt;&gt; -&gt; L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* oneeighth (U+215B): L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt; -&gt; L&lt;&lt;80.0,700.0&gt;--&lt;91.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;35.0,700.0&gt;--&lt;80.0,700.0&gt;&gt; -&gt; L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* onehalf (U+00BD): L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt; -&gt; L&lt;&lt;80.0,700.0&gt;--&lt;91.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;35.0,700.0&gt;--&lt;80.0,700.0&gt;&gt; -&gt; L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* onequarter (U+00BC): L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt; -&gt; L&lt;&lt;80.0,700.0&gt;--&lt;91.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;28.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* uni00B9 (U+00B9): L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;28.0,315.0&gt;--&lt;73.0,315.0&gt;&gt; -&gt; L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt; -&gt; L&lt;&lt;73.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;53.0,619.0&gt;--&lt;57.0,619.0&gt;&gt; -&gt; L&lt;&lt;57.0,619.0&gt;--&lt;57.0,619.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;57.0,619.0&gt;--&lt;57.0,619.0&gt;&gt; -&gt; L&lt;&lt;57.0,619.0&gt;--&lt;497.0,619.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* whimsy: B&lt;&lt;473.0,266.0&gt;-&lt;434.0,263.0&gt;-&lt;385.0,279.0&gt;&gt;/B&lt;&lt;385.0,279.0&gt;-&lt;431.0,259.0&gt;-&lt;462.0,233.0&gt;&gt; = 5.415120292903394
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;432.0,522.0&gt;--&lt;431.0,700.0&gt;&gt;

* ae (U+00E6): L&lt;&lt;410.0,243.0&gt;--&lt;269.0,242.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;596.0,542.0&gt;--&lt;595.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;129.0,720.0&gt;--&lt;127.0,159.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;86.0,159.0&gt;--&lt;84.0,720.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;127.0,265.0&gt;--&lt;129.0,-296.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;84.0,-296.0&gt;--&lt;86.0,265.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;136.0,542.0&gt;--&lt;135.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;280.0,542.0&gt;--&lt;279.0,720.0&gt;&gt;

* uni030C.alt: L&lt;&lt;28.0,542.0&gt;--&lt;27.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;100.0,539.0&gt;--&lt;99.0,175.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;50.0,175.0&gt;--&lt;53.0,619.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;135.0,621.0&gt;--&lt;578.0,618.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;498.0,571.0&gt;--&lt;135.0,572.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;532.0,171.0&gt;--&lt;533.0,534.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;582.0,534.0&gt;--&lt;579.0,91.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;131.0,139.0&gt;--&lt;494.0,138.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;494.0,89.0&gt;--&lt;51.0,92.0&gt;&gt;
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

* uni0199 (U+0199) contains a short segment L&lt;&lt;138.0,269.0&gt;--&lt;123.0,269.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;333.0,700.0&gt;--&lt;333.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;163.0,700.0&gt;--&lt;163.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt;

* six.dnom contains a short segment L&lt;&lt;31.0,162.0&gt;--&lt;31.0,162.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* six.numr contains a short segment L&lt;&lt;31.0,547.0&gt;--&lt;31.0,547.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;31.0,162.0&gt;--&lt;31.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;31.0,547.0&gt;--&lt;31.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;263.0,397.0&gt;-&lt;270.0,396.0&gt;-&lt;275.5,394.5&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;275.5,394.5&gt;-&lt;281.0,393.0&gt;-&lt;286.0,391.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;340.0,700.0&gt;--&lt;341.0,700.0&gt;&gt;

* arrowup (U+2191) contains a short segment L&lt;&lt;398.0,691.0&gt;--&lt;398.0,690.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;578.0,618.0&gt;--&lt;578.0,614.0&gt;&gt;

* uni2197 (U+2197) contains a short segment L&lt;&lt;578.0,614.0&gt;--&lt;579.0,614.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;750.0,326.0&gt;--&lt;750.0,326.0&gt;&gt;

* arrowright (U+2192) contains a short segment L&lt;&lt;741.0,268.0&gt;--&lt;740.0,269.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;579.0,91.0&gt;--&lt;575.0,91.0&gt;&gt;

* uni2198 (U+2198) contains a short segment L&lt;&lt;575.0,91.0&gt;--&lt;575.0,90.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;330.0,33.0&gt;--&lt;330.0,33.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;388.0,24.0&gt;--&lt;388.0,24.0&gt;&gt;

* arrowdown (U+2193) contains a short segment L&lt;&lt;388.0,24.0&gt;--&lt;388.0,24.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;51.0,92.0&gt;--&lt;51.0,96.0&gt;&gt;

* uni2199 (U+2199) contains a short segment L&lt;&lt;51.0,96.0&gt;--&lt;50.0,96.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;74.0,279.0&gt;--&lt;74.0,279.0&gt;&gt;

* arrowleft (U+2190) contains a short segment L&lt;&lt;83.0,337.0&gt;--&lt;83.0,336.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;53.0,619.0&gt;--&lt;57.0,619.0&gt;&gt;

* uni2196 (U+2196) contains a short segment L&lt;&lt;57.0,619.0&gt;--&lt;57.0,619.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;738.0,321.0&gt;--&lt;738.0,321.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;738.0,321.0&gt;--&lt;738.0,321.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;731.0,275.0&gt;--&lt;731.0,276.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;77.0,276.0&gt;--&lt;76.0,275.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;392.0,673.0&gt;--&lt;392.0,673.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;392.0,49.0&gt;--&lt;392.0,49.0&gt;&gt;
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
| 0 | 0 | 93 | 202 | 1663 | 81 | 1482 | 0 | 
| 0% | 0% | 3% | 6% | 47% | 2% | 42% | 0% | 



**Note:** The following loglevels were omitted in this report:


* SKIP
* INFO
* PASS
* DEBUG
