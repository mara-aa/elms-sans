## FontBakery report

fontbakery version: 1.0.0





## Experimental checks

These won't break the CI job for now, but will become effective after some time if nobody raises any concern.


<details><summary>[1] ElmsSans-Italic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- exclamdown (U+00A1)</p>
<pre><code>- periodcentered (U+00B7)

- backslash (U+005C)
</code></pre>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-BoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- backslash (U+005C)</p>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-ThinItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- exclamdown (U+00A1)</p>
<pre><code>- periodcentered (U+00B7)

- bullet (U+2022)

- backslash (U+005C)
</code></pre>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-SemiBoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- backslash (U+005C)</p>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-LightItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- exclamdown (U+00A1)</p>
<pre><code>- periodcentered (U+00B7)

- backslash (U+005C)
</code></pre>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-ExtraBoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- backslash (U+005C)</p>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-MediumItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- backslash (U+005C)</p>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>

<details><summary>[1] ElmsSans-ExtraLightItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Check base characters have non-zero advance width. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#base-has-width">base_has_width</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs had zero advance width:
- exclamdown (U+00A1)</p>
<pre><code>- periodcentered (U+00B7)

- backslash (U+005C)
</code></pre>
 [code: zero-width-bases]



</div>
</details>
</div>
</details>




## All other checks



<details><summary>[15] ElmsSans-Italic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* m (U+006D): L&lt;&lt;536.0,294.0&gt;--&lt;536.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;535.0,294.0&gt;--&lt;536.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;200.0,294.0&gt;--&lt;200.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;536.0,294.0&gt;--&lt;536.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;535.0,294.0&gt;--&lt;536.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;200.0,294.0&gt;--&lt;200.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;536.0,294.0&gt;--&lt;536.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;535.0,294.0&gt;--&lt;536.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;200.0,294.0&gt;--&lt;200.0,294.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;205.0,289.0&gt;--&lt;205.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;205.0,289.0&gt;--&lt;205.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;229.0,289.0&gt;--&lt;229.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;229.0,289.0&gt;--&lt;229.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* arrowup (U+2191): L&lt;&lt;627.0,700.0&gt;--&lt;627.0,700.0&gt;&gt; has the same coordinates as a previous segment.

* arrowright (U+2192): L&lt;&lt;857.0,172.0&gt;--&lt;857.0,172.0&gt;&gt; has the same coordinates as a previous segment.

* arrowdown (U+2193): L&lt;&lt;350.0,43.0&gt;--&lt;350.0,43.0&gt;&gt; has the same coordinates as a previous segment.

* arrowleft (U+2190): L&lt;&lt;154.0,423.0&gt;--&lt;154.0,423.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;830.0,332.0&gt;--&lt;829.0,332.0&gt;&gt; has the same coordinates as a previous segment.
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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
<pre><code>* arrowdown (U+2193): L&lt;&lt;350.0,43.0&gt;--&lt;350.0,43.0&gt;&gt; -&gt; L&lt;&lt;350.0,43.0&gt;--&lt;350.0,43.0&gt;&gt;

* arrowleft (U+2190): L&lt;&lt;154.0,423.0&gt;--&lt;154.0,423.0&gt;&gt; -&gt; L&lt;&lt;154.0,423.0&gt;--&lt;154.0,423.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;857.0,172.0&gt;--&lt;857.0,172.0&gt;&gt; -&gt; L&lt;&lt;857.0,172.0&gt;--&lt;857.0,172.0&gt;&gt;

* arrowup (U+2191): L&lt;&lt;627.0,700.0&gt;--&lt;627.0,700.0&gt;&gt; -&gt; L&lt;&lt;627.0,700.0&gt;--&lt;627.0,700.0&gt;&gt;

* e (U+0065): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* eacute (U+00E9): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* ecaron (U+011B): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* ecircumflex (U+00EA): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* edieresis (U+00EB): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* edotaccent (U+0117): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* egrave (U+00E8): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* emacron (U+0113): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* eng (U+014B): L&lt;&lt;377.0,-47.0&gt;--&lt;394.0,0.0&gt;&gt; -&gt; L&lt;&lt;394.0,0.0&gt;--&lt;488.0,269.0&gt;&gt;

* eng (U+014B): L&lt;&lt;575.0,266.0&gt;--&lt;482.0,0.0&gt;&gt; -&gt; L&lt;&lt;482.0,0.0&gt;--&lt;467.0,-41.0&gt;&gt;

* eogonek (U+0119): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* five (U+0035): L&lt;&lt;165.0,312.0&gt;--&lt;112.0,356.0&gt;&gt; -&gt; L&lt;&lt;112.0,356.0&gt;--&lt;105.0,361.0&gt;&gt;

* five.lf: L&lt;&lt;139.0,312.0&gt;--&lt;86.0,356.0&gt;&gt; -&gt; L&lt;&lt;86.0,356.0&gt;--&lt;79.0,361.0&gt;&gt;

* five.osf: L&lt;&lt;165.0,312.0&gt;--&lt;112.0,356.0&gt;&gt; -&gt; L&lt;&lt;112.0,356.0&gt;--&lt;105.0,361.0&gt;&gt;

* five.tf: L&lt;&lt;165.0,312.0&gt;--&lt;112.0,356.0&gt;&gt; -&gt; L&lt;&lt;112.0,356.0&gt;--&lt;105.0,361.0&gt;&gt;

* five.tosf: L&lt;&lt;165.0,312.0&gt;--&lt;112.0,356.0&gt;&gt; -&gt; L&lt;&lt;112.0,356.0&gt;--&lt;105.0,361.0&gt;&gt;

* k (U+006B): L&lt;&lt;208.0,289.0&gt;--&lt;208.0,289.0&gt;&gt; -&gt; L&lt;&lt;208.0,289.0&gt;--&lt;209.0,289.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;537.0,248.0&gt;&gt; -&gt; L&lt;&lt;537.0,248.0&gt;--&lt;530.0,228.0&gt;&gt;

* m (U+006D): L&lt;&lt;535.0,294.0&gt;--&lt;535.0,294.0&gt;&gt; -&gt; L&lt;&lt;535.0,294.0&gt;--&lt;536.0,294.0&gt;&gt;

* r (U+0072): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; -&gt; L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt;

* racute (U+0155): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; -&gt; L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt;

* rcaron (U+0159): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; -&gt; L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt;

* uni0137 (U+0137): L&lt;&lt;208.0,289.0&gt;--&lt;208.0,289.0&gt;&gt; -&gt; L&lt;&lt;208.0,289.0&gt;--&lt;209.0,289.0&gt;&gt;

* uni0157 (U+0157): L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt; -&gt; L&lt;&lt;198.0,289.0&gt;--&lt;198.0,289.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;117.0,392.0&gt;--&lt;160.0,389.0&gt;&gt; -&gt; L&lt;&lt;160.0,389.0&gt;--&lt;719.0,389.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;316.0,700.0&gt;--&lt;122.0,148.0&gt;&gt; -&gt; L&lt;&lt;122.0,148.0&gt;--&lt;104.0,99.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;9.0,77.0&gt;--&lt;34.0,148.0&gt;&gt; -&gt; L&lt;&lt;34.0,148.0&gt;--&lt;228.0,700.0&gt;&gt;

* uni0199 (U+0199): L&lt;&lt;208.0,289.0&gt;--&lt;208.0,289.0&gt;&gt; -&gt; L&lt;&lt;208.0,289.0&gt;--&lt;209.0,289.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;411.0,578.0&gt;--&lt;208.0,0.0&gt;&gt; -&gt; L&lt;&lt;208.0,0.0&gt;--&lt;174.0,-97.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;94.0,-73.0&gt;--&lt;120.0,0.0&gt;&gt; -&gt; L&lt;&lt;120.0,0.0&gt;--&lt;366.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;14.0,-280.0&gt;--&lt;282.0,480.0&gt;&gt; -&gt; L&lt;&lt;282.0,480.0&gt;--&lt;318.0,583.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;397.0,574.0&gt;--&lt;364.0,480.0&gt;&gt; -&gt; L&lt;&lt;364.0,480.0&gt;--&lt;342.0,418.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;234.0,614.0&gt;--&lt;216.0,561.0&gt;&gt; -&gt; L&lt;&lt;216.0,561.0&gt;--&lt;187.0,480.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;99.0,480.0&gt;--&lt;128.0,561.0&gt;&gt; -&gt; L&lt;&lt;128.0,561.0&gt;--&lt;153.0,633.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;-26.0,-187.0&gt;--&lt;6.0,-96.0&gt;&gt; -&gt; L&lt;&lt;6.0,-96.0&gt;--&lt;258.0,618.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;346.0,618.0&gt;--&lt;94.0,-96.0&gt;&gt; -&gt; L&lt;&lt;94.0,-96.0&gt;--&lt;66.0,-175.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;170.0,370.0&gt;--&lt;509.0,700.0&gt;&gt; -&gt; L&lt;&lt;509.0,700.0&gt;--&lt;567.0,760.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;426.0,96.0&gt;--&lt;727.0,480.0&gt;&gt; -&gt; L&lt;&lt;727.0,480.0&gt;--&lt;777.0,546.0&gt;&gt;

* uni01DD (U+01DD): L&lt;&lt;75.0,271.0&gt;--&lt;114.0,268.0&gt;&gt; -&gt; L&lt;&lt;114.0,268.0&gt;--&lt;475.0,268.0&gt;&gt;

* uni01E9 (U+01E9): L&lt;&lt;166.0,289.0&gt;--&lt;166.0,289.0&gt;&gt; -&gt; L&lt;&lt;166.0,289.0&gt;--&lt;167.0,289.0&gt;&gt;

* uni0207 (U+0207): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni0229 (U+0229): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni024D (U+024D): L&lt;&lt;205.0,289.0&gt;--&lt;205.0,289.0&gt;&gt; -&gt; L&lt;&lt;205.0,289.0&gt;--&lt;205.0,289.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;312.0,630.0&gt;--&lt;293.0,577.0&gt;&gt; -&gt; L&lt;&lt;293.0,577.0&gt;--&lt;236.0,415.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;8.0,0.0&gt;--&lt;211.0,577.0&gt;&gt; -&gt; L&lt;&lt;211.0,577.0&gt;--&lt;236.0,649.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;572.0,408.0&gt;--&lt;626.0,561.0&gt;&gt; -&gt; L&lt;&lt;626.0,561.0&gt;--&lt;651.0,633.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;726.0,614.0&gt;--&lt;708.0,561.0&gt;&gt; -&gt; L&lt;&lt;708.0,561.0&gt;--&lt;510.0,0.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;75.0,271.0&gt;--&lt;114.0,268.0&gt;&gt; -&gt; L&lt;&lt;114.0,268.0&gt;--&lt;475.0,268.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;668.0,409.0&gt;--&lt;679.0,440.0&gt;&gt; -&gt; L&lt;&lt;679.0,440.0&gt;--&lt;704.0,512.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;782.0,493.0&gt;--&lt;763.0,440.0&gt;&gt; -&gt; L&lt;&lt;763.0,440.0&gt;--&lt;592.0,-43.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;13.0,0.0&gt;--&lt;216.0,577.0&gt;&gt; -&gt; L&lt;&lt;216.0,577.0&gt;--&lt;241.0,649.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;319.0,630.0&gt;--&lt;300.0,577.0&gt;&gt; -&gt; L&lt;&lt;300.0,577.0&gt;--&lt;247.0,428.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;19.0,77.0&gt;--&lt;42.0,143.0&gt;&gt; -&gt; L&lt;&lt;42.0,143.0&gt;--&lt;161.0,480.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;243.0,480.0&gt;--&lt;124.0,143.0&gt;&gt; -&gt; L&lt;&lt;124.0,143.0&gt;--&lt;104.0,84.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;158.0,-37.0&gt;--&lt;172.0,0.0&gt;&gt; -&gt; L&lt;&lt;172.0,0.0&gt;--&lt;341.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;356.0,272.0&gt;--&lt;260.0,0.0&gt;&gt; -&gt; L&lt;&lt;260.0,0.0&gt;--&lt;249.0,-31.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;15.0,-66.0&gt;--&lt;39.0,0.0&gt;&gt; -&gt; L&lt;&lt;39.0,0.0&gt;--&lt;208.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;229.0,289.0&gt;--&lt;127.0,0.0&gt;&gt; -&gt; L&lt;&lt;127.0,0.0&gt;--&lt;106.0,-59.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;229.0,289.0&gt;--&lt;229.0,289.0&gt;&gt; -&gt; L&lt;&lt;229.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;226.0,370.0&gt;--&lt;208.0,317.0&gt;&gt; -&gt; L&lt;&lt;208.0,317.0&gt;--&lt;96.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;8.0,0.0&gt;--&lt;120.0,317.0&gt;&gt; -&gt; L&lt;&lt;120.0,317.0&gt;--&lt;145.0,389.0&gt;&gt;

* uni1E1D (U+1E1D): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1E31 (U+1E31): L&lt;&lt;208.0,289.0&gt;--&lt;208.0,289.0&gt;&gt; -&gt; L&lt;&lt;208.0,289.0&gt;--&lt;209.0,289.0&gt;&gt;

* uni1E33 (U+1E33): L&lt;&lt;208.0,289.0&gt;--&lt;208.0,289.0&gt;&gt; -&gt; L&lt;&lt;208.0,289.0&gt;--&lt;209.0,289.0&gt;&gt;

* uni1E35 (U+1E35): L&lt;&lt;208.0,289.0&gt;--&lt;208.0,289.0&gt;&gt; -&gt; L&lt;&lt;208.0,289.0&gt;--&lt;209.0,289.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;535.0,294.0&gt;--&lt;535.0,294.0&gt;&gt; -&gt; L&lt;&lt;535.0,294.0&gt;--&lt;536.0,294.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;535.0,294.0&gt;--&lt;535.0,294.0&gt;&gt; -&gt; L&lt;&lt;535.0,294.0&gt;--&lt;536.0,294.0&gt;&gt;

* uni1EB9 (U+1EB9): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EBB (U+1EBB): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EBD (U+1EBD): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EBF (U+1EBF): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EC1 (U+1EC1): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EC3 (U+1EC3): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EC5 (U+1EC5): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni1EC7 (U+1EC7): L&lt;&lt;542.0,209.0&gt;--&lt;502.0,212.0&gt;&gt; -&gt; L&lt;&lt;502.0,212.0&gt;--&lt;142.0,212.0&gt;&gt;

* uni20AA (U+20AA): L&lt;&lt;179.0,10.0&gt;--&lt;201.0,72.0&gt;&gt; -&gt; L&lt;&lt;201.0,72.0&gt;--&lt;203.0,78.0&gt;&gt;

* uni20AA (U+20AA): L&lt;&lt;227.0,622.0&gt;--&lt;233.0,640.0&gt;&gt; -&gt; L&lt;&lt;233.0,640.0&gt;--&lt;251.0,690.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-29.0,-91.0&gt;--&lt;3.0,0.0&gt;&gt; -&gt; L&lt;&lt;3.0,0.0&gt;--&lt;249.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;187.0,274.0&gt;--&lt;91.0,0.0&gt;&gt; -&gt; L&lt;&lt;91.0,0.0&gt;--&lt;63.0,-79.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;986.0,710.0&gt;--&lt;954.0,665.0&gt;&gt; -&gt; L&lt;&lt;954.0,665.0&gt;--&lt;508.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* Ccedilla (U+00C7): L&lt;&lt;292.0,-124.0&gt;--&lt;294.0,-115.0&gt;&gt;/L&lt;&lt;294.0,-115.0&gt;--&lt;291.0,-124.0&gt;&gt; = 5.906141113770558

* Scedilla (U+015E): L&lt;&lt;189.0,-124.0&gt;--&lt;191.0,-115.0&gt;&gt;/L&lt;&lt;191.0,-115.0&gt;--&lt;188.0,-124.0&gt;&gt; = 5.906141113770558

* braceleft (U+007B): L&lt;&lt;161.0,537.0&gt;--&lt;205.0,537.0&gt;&gt;/L&lt;&lt;205.0,537.0&gt;--&lt;162.0,540.0&gt;&gt; = 3.9909130984297856

* braceleft (U+007B): L&lt;&lt;211.0,429.0&gt;--&lt;167.0,429.0&gt;&gt;/L&lt;&lt;167.0,429.0&gt;--&lt;210.0,426.0&gt;&gt; = 3.9909130984297856

* braceleft (U+007B): L&lt;&lt;36.0,183.0&gt;--&lt;80.0,183.0&gt;&gt;/L&lt;&lt;80.0,183.0&gt;--&lt;37.0,186.0&gt;&gt; = 3.9909130984297856

* braceleft (U+007B): L&lt;&lt;86.0,75.0&gt;--&lt;42.0,75.0&gt;&gt;/L&lt;&lt;42.0,75.0&gt;--&lt;85.0,72.0&gt;&gt; = 3.9909130984297856

* braceright (U+007D): L&lt;&lt;319.0,426.0&gt;--&lt;363.0,429.0&gt;&gt;/L&lt;&lt;363.0,429.0&gt;--&lt;320.0,429.0&gt;&gt; = 3.900493742381876

* braceright (U+007D): L&lt;&lt;320.0,72.0&gt;--&lt;364.0,75.0&gt;&gt;/L&lt;&lt;364.0,75.0&gt;--&lt;319.0,75.0&gt;&gt; = 3.900493742381876

* braceright (U+007D): L&lt;&lt;407.0,540.0&gt;--&lt;363.0,537.0&gt;&gt;/L&lt;&lt;363.0,537.0&gt;--&lt;408.0,537.0&gt;&gt; = 3.900493742381876

* braceright (U+007D): L&lt;&lt;408.0,186.0&gt;--&lt;364.0,183.0&gt;&gt;/L&lt;&lt;364.0,183.0&gt;--&lt;407.0,183.0&gt;&gt; = 3.900493742381876

* ccedilla (U+00E7): L&lt;&lt;190.0,-124.0&gt;--&lt;192.0,-115.0&gt;&gt;/L&lt;&lt;192.0,-115.0&gt;--&lt;189.0,-124.0&gt;&gt; = 5.906141113770558

* cedilla (U+00B8): L&lt;&lt;110.0,-124.0&gt;--&lt;112.0,-115.0&gt;&gt;/L&lt;&lt;112.0,-115.0&gt;--&lt;109.0,-124.0&gt;&gt; = 5.906141113770558

* eng (U+014B): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* f (U+0066): L&lt;&lt;187.0,537.0&gt;--&lt;231.0,537.0&gt;&gt;/L&lt;&lt;231.0,537.0&gt;--&lt;188.0,540.0&gt;&gt; = 3.9909130984297856

* florin (U+0192): L&lt;&lt;125.0,-24.0&gt;--&lt;81.0,-24.0&gt;&gt;/L&lt;&lt;81.0,-24.0&gt;--&lt;124.0,-27.0&gt;&gt; = 3.9909130984297856

* florin (U+0192): L&lt;&lt;241.0,553.0&gt;--&lt;285.0,553.0&gt;&gt;/L&lt;&lt;285.0,553.0&gt;--&lt;242.0,556.0&gt;&gt; = 3.9909130984297856

* h (U+0068): L&lt;&lt;489.0,269.0&gt;--&lt;534.0,269.0&gt;&gt;/L&lt;&lt;534.0,269.0&gt;--&lt;491.0,272.0&gt;&gt; = 3.9909130984297856

* hbar (U+0127): L&lt;&lt;489.0,269.0&gt;--&lt;534.0,269.0&gt;&gt;/L&lt;&lt;534.0,269.0&gt;--&lt;491.0,272.0&gt;&gt; = 3.9909130984297856

* hcircumflex (U+0125): L&lt;&lt;489.0,269.0&gt;--&lt;534.0,269.0&gt;&gt;/L&lt;&lt;534.0,269.0&gt;--&lt;491.0,272.0&gt;&gt; = 3.9909130984297856

* ij (U+0133): L&lt;&lt;333.0,-97.0&gt;--&lt;288.0,-97.0&gt;&gt;/L&lt;&lt;288.0,-97.0&gt;--&lt;331.0,-100.0&gt;&gt; = 3.9909130984297856

* integral (U+222B): L&lt;&lt;258.0,-25.0&gt;--&lt;214.0,-25.0&gt;&gt;/L&lt;&lt;214.0,-25.0&gt;--&lt;257.0,-28.0&gt;&gt; = 3.9909130984297856

* integral (U+222B): L&lt;&lt;454.0,553.0&gt;--&lt;497.0,553.0&gt;&gt;/L&lt;&lt;497.0,553.0&gt;--&lt;454.0,556.0&gt;&gt; = 3.9909130984297856

* j (U+006A): L&lt;&lt;126.0,-97.0&gt;--&lt;81.0,-97.0&gt;&gt;/L&lt;&lt;81.0,-97.0&gt;--&lt;124.0,-100.0&gt;&gt; = 3.9909130984297856

* jcircumflex (U+0135): L&lt;&lt;168.0,-97.0&gt;--&lt;123.0,-97.0&gt;&gt;/L&lt;&lt;123.0,-97.0&gt;--&lt;166.0,-100.0&gt;&gt; = 3.9909130984297856

* l.ss01: L&lt;&lt;101.0,183.0&gt;--&lt;57.0,183.0&gt;&gt;/L&lt;&lt;57.0,183.0&gt;--&lt;100.0,180.0&gt;&gt; = 3.9909130984297856

* m (U+006D): L&lt;&lt;448.0,294.0&gt;--&lt;491.0,294.0&gt;&gt;/L&lt;&lt;491.0,294.0&gt;--&lt;448.0,297.0&gt;&gt; = 3.9909130984297856

* m (U+006D): L&lt;&lt;784.0,294.0&gt;--&lt;827.0,294.0&gt;&gt;/L&lt;&lt;827.0,294.0&gt;--&lt;784.0,297.0&gt;&gt; = 3.9909130984297856

* n (U+006E): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* nacute (U+0144): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* ncaron (U+0148): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* ntilde (U+00F1): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* onehalf (U+00BD): L&lt;&lt;354.0,36.0&gt;--&lt;374.0,36.0&gt;&gt;/L&lt;&lt;374.0,36.0&gt;--&lt;354.0,37.0&gt;&gt; = 2.862405226111651

* scedilla (U+015F): L&lt;&lt;159.0,-124.0&gt;--&lt;161.0,-115.0&gt;&gt;/L&lt;&lt;161.0,-115.0&gt;--&lt;158.0,-124.0&gt;&gt; = 5.906141113770558

* sterling (U+00A3): L&lt;&lt;347.0,525.0&gt;--&lt;391.0,525.0&gt;&gt;/L&lt;&lt;391.0,525.0&gt;--&lt;348.0,528.0&gt;&gt; = 3.9909130984297856

* t (U+0074): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* tbar (U+0167): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* tcaron (U+0165): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* two (U+0032): L&lt;&lt;46.0,80.0&gt;--&lt;91.0,80.0&gt;&gt;/L&lt;&lt;91.0,80.0&gt;--&lt;47.0,83.0&gt;&gt; = 3.900493742381876

* two.dnom: L&lt;&lt;44.0,36.0&gt;--&lt;64.0,36.0&gt;&gt;/L&lt;&lt;64.0,36.0&gt;--&lt;44.0,37.0&gt;&gt; = 2.862405226111651

* two.lf: L&lt;&lt;71.0,80.0&gt;--&lt;116.0,80.0&gt;&gt;/L&lt;&lt;116.0,80.0&gt;--&lt;72.0,83.0&gt;&gt; = 3.900493742381876

* two.numr: L&lt;&lt;44.0,421.0&gt;--&lt;64.0,421.0&gt;&gt;/L&lt;&lt;64.0,421.0&gt;--&lt;44.0,422.0&gt;&gt; = 2.862405226111651

* two.osf: L&lt;&lt;46.0,80.0&gt;--&lt;91.0,80.0&gt;&gt;/L&lt;&lt;91.0,80.0&gt;--&lt;47.0,83.0&gt;&gt; = 3.900493742381876

* two.tf: L&lt;&lt;46.0,80.0&gt;--&lt;91.0,80.0&gt;&gt;/L&lt;&lt;91.0,80.0&gt;--&lt;47.0,83.0&gt;&gt; = 3.900493742381876

* two.tosf: L&lt;&lt;46.0,80.0&gt;--&lt;91.0,80.0&gt;&gt;/L&lt;&lt;91.0,80.0&gt;--&lt;47.0,83.0&gt;&gt; = 3.900493742381876

* u (U+0075): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uacute (U+00FA): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* ubreve (U+016D): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* ucircumflex (U+00FB): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* udieresis (U+00FC): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* ugrave (U+00F9): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uhorn (U+01B0): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uhungarumlaut (U+0171): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* umacron (U+016B): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni006A0301: L&lt;&lt;126.0,-97.0&gt;--&lt;81.0,-97.0&gt;&gt;/L&lt;&lt;81.0,-97.0&gt;--&lt;124.0,-100.0&gt;&gt; = 3.9909130984297856

* uni00B2 (U+00B2): L&lt;&lt;44.0,421.0&gt;--&lt;64.0,421.0&gt;&gt;/L&lt;&lt;64.0,421.0&gt;--&lt;44.0,422.0&gt;&gt; = 2.862405226111651

* uni0146 (U+0146): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* uni0146.loclMAH: L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* uni0162 (U+0162): L&lt;&lt;-19.0,-118.0&gt;--&lt;-17.0,-109.0&gt;&gt;/L&lt;&lt;-17.0,-109.0&gt;--&lt;-20.0,-118.0&gt;&gt; = 5.906141113770558

* uni0163 (U+0163): L&lt;&lt;3.0,-104.0&gt;--&lt;5.0,-95.0&gt;&gt;/L&lt;&lt;5.0,-95.0&gt;--&lt;2.0,-104.0&gt;&gt; = 5.906141113770558

* uni0163 (U+0163): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* uni0190 (U+0190): B&lt;&lt;212.0,341.0&gt;-&lt;265.0,367.0&gt;-&lt;324.0,372.0&gt;&gt;/B&lt;&lt;324.0,372.0&gt;-&lt;272.0,378.0&gt;-&lt;235.0,399.5&gt;&gt; = 11.425945030258696

* uni01AD (U+01AD): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* uni021B (U+021B): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* uni0228 (U+0228): L&lt;&lt;217.0,-84.0&gt;--&lt;219.0,-75.0&gt;&gt;/L&lt;&lt;219.0,-75.0&gt;--&lt;216.0,-84.0&gt;&gt; = 5.906141113770558

* uni0229 (U+0229): L&lt;&lt;210.0,-92.0&gt;--&lt;212.0,-83.0&gt;&gt;/L&lt;&lt;212.0,-83.0&gt;--&lt;209.0,-92.0&gt;&gt; = 5.906141113770558

* uni0237 (U+0237): L&lt;&lt;168.0,-97.0&gt;--&lt;123.0,-97.0&gt;&gt;/L&lt;&lt;123.0,-97.0&gt;--&lt;166.0,-100.0&gt;&gt; = 3.9909130984297856

* uni025B (U+025B): B&lt;&lt;101.0,221.5&gt;-&lt;137.0,252.0&gt;-&lt;186.0,256.0&gt;&gt;/B&lt;&lt;186.0,256.0&gt;-&lt;145.0,262.0&gt;-&lt;128.0,292.0&gt;&gt; = 12.992508701865807

* uni0265 (U+0265): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni0266 (U+0266): L&lt;&lt;489.0,269.0&gt;--&lt;534.0,269.0&gt;&gt;/L&lt;&lt;534.0,269.0&gt;--&lt;491.0,272.0&gt;&gt; = 3.9909130984297856

* uni0272 (U+0272): L&lt;&lt;652.0,269.0&gt;--&lt;697.0,269.0&gt;&gt;/L&lt;&lt;697.0,269.0&gt;--&lt;654.0,272.0&gt;&gt; = 3.9909130984297856

* uni0283 (U+0283): L&lt;&lt;106.0,0.0&gt;--&lt;62.0,0.0&gt;&gt;/L&lt;&lt;62.0,0.0&gt;--&lt;104.0,-3.0&gt;&gt; = 4.085616779974888

* uni0283 (U+0283): L&lt;&lt;207.0,537.0&gt;--&lt;251.0,537.0&gt;&gt;/L&lt;&lt;251.0,537.0&gt;--&lt;208.0,540.0&gt;&gt; = 3.9909130984297856

* uni0288 (U+0288): L&lt;&lt;135.0,-17.0&gt;--&lt;91.0,-17.0&gt;&gt;/L&lt;&lt;91.0,-17.0&gt;--&lt;133.0,-20.0&gt;&gt; = 4.085616779974888

* uni0289 (U+0289): L&lt;&lt;115.0,211.0&gt;--&lt;71.0,211.0&gt;&gt;/L&lt;&lt;71.0,211.0&gt;--&lt;114.0,208.0&gt;&gt; = 3.9909130984297856

* uni028A (U+028A): B&lt;&lt;184.0,370.0&gt;-&lt;215.0,397.0&gt;-&lt;245.0,405.0&gt;&gt;/L&lt;&lt;245.0,405.0&gt;--&lt;158.0,404.0&gt;&gt; = 14.272874000573955

* uni0327 (U+0327): L&lt;&lt;152.0,-124.0&gt;--&lt;154.0,-115.0&gt;&gt;/L&lt;&lt;154.0,-115.0&gt;--&lt;151.0,-124.0&gt;&gt; = 5.906141113770558

* uni1E08 (U+1E08): L&lt;&lt;292.0,-124.0&gt;--&lt;294.0,-115.0&gt;&gt;/L&lt;&lt;294.0,-115.0&gt;--&lt;291.0,-124.0&gt;&gt; = 5.906141113770558

* uni1E09 (U+1E09): L&lt;&lt;190.0,-124.0&gt;--&lt;192.0,-115.0&gt;&gt;/L&lt;&lt;192.0,-115.0&gt;--&lt;189.0,-124.0&gt;&gt; = 5.906141113770558

* uni1E1C (U+1E1C): L&lt;&lt;217.0,-84.0&gt;--&lt;219.0,-75.0&gt;&gt;/L&lt;&lt;219.0,-75.0&gt;--&lt;216.0,-84.0&gt;&gt; = 5.906141113770558

* uni1E1D (U+1E1D): L&lt;&lt;210.0,-92.0&gt;--&lt;212.0,-83.0&gt;&gt;/L&lt;&lt;212.0,-83.0&gt;--&lt;209.0,-92.0&gt;&gt; = 5.906141113770558

* uni1E25 (U+1E25): L&lt;&lt;489.0,269.0&gt;--&lt;534.0,269.0&gt;&gt;/L&lt;&lt;534.0,269.0&gt;--&lt;491.0,272.0&gt;&gt; = 3.9909130984297856

* uni1E2B (U+1E2B): L&lt;&lt;489.0,269.0&gt;--&lt;534.0,269.0&gt;&gt;/L&lt;&lt;534.0,269.0&gt;--&lt;491.0,272.0&gt;&gt; = 3.9909130984297856

* uni1E3F (U+1E3F): L&lt;&lt;448.0,294.0&gt;--&lt;491.0,294.0&gt;&gt;/L&lt;&lt;491.0,294.0&gt;--&lt;448.0,297.0&gt;&gt; = 3.9909130984297856

* uni1E3F (U+1E3F): L&lt;&lt;784.0,294.0&gt;--&lt;827.0,294.0&gt;&gt;/L&lt;&lt;827.0,294.0&gt;--&lt;784.0,297.0&gt;&gt; = 3.9909130984297856

* uni1E43 (U+1E43): L&lt;&lt;448.0,294.0&gt;--&lt;491.0,294.0&gt;&gt;/L&lt;&lt;491.0,294.0&gt;--&lt;448.0,297.0&gt;&gt; = 3.9909130984297856

* uni1E43 (U+1E43): L&lt;&lt;784.0,294.0&gt;--&lt;827.0,294.0&gt;&gt;/L&lt;&lt;827.0,294.0&gt;--&lt;784.0,297.0&gt;&gt; = 3.9909130984297856

* uni1E45 (U+1E45): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* uni1E47 (U+1E47): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* uni1E49 (U+1E49): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* uni1E4B (U+1E4B): L&lt;&lt;488.0,269.0&gt;--&lt;533.0,269.0&gt;&gt;/L&lt;&lt;533.0,269.0&gt;--&lt;490.0,272.0&gt;&gt; = 3.9909130984297856

* uni1E6D (U+1E6D): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* uni1E6F (U+1E6F): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* uni1E71 (U+1E71): L&lt;&lt;82.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;81.0,180.0&gt;&gt; = 3.9909130984297856

* uni1EE5 (U+1EE5): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni1EE7 (U+1EE7): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni1EE9 (U+1EE9): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni1EEB (U+1EEB): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni1EED (U+1EED): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni1EEF (U+1EEF): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni1EF1 (U+1EF1): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uni2082 (U+2082): L&lt;&lt;44.0,36.0&gt;--&lt;64.0,36.0&gt;&gt;/L&lt;&lt;64.0,36.0&gt;--&lt;44.0,37.0&gt;&gt; = 2.862405226111651

* uni2154 (U+2154): L&lt;&lt;44.0,421.0&gt;--&lt;64.0,421.0&gt;&gt;/L&lt;&lt;64.0,421.0&gt;--&lt;44.0,422.0&gt;&gt; = 2.862405226111651

* uni2198 (U+2198): L&lt;&lt;678.0,9.0&gt;--&lt;678.0,9.0&gt;&gt;/L&lt;&lt;678.0,9.0&gt;--&lt;240.0,89.0&gt;&gt; = 10.3508856549305

* uni2198 (U+2198): L&lt;&lt;689.0,7.0&gt;--&lt;678.0,9.0&gt;&gt;/L&lt;&lt;678.0,9.0&gt;--&lt;678.0,9.0&gt;&gt; = 10.304846468766044

* uogonek (U+0173): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* uring (U+016F): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856

* utilde (U+0169): L&lt;&lt;104.0,211.0&gt;--&lt;60.0,211.0&gt;&gt;/L&lt;&lt;60.0,211.0&gt;--&lt;103.0,208.0&gt;&gt; = 3.9909130984297856
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[15] ElmsSans-BoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: m	Contours detected: 3	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: utilde	Contours detected: 3	Expected: 2

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E3F	Contours detected: 4	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E43	Contours detected: 4	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: m	Contours detected: 3	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E3F	Contours detected: 4	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E43	Contours detected: 4	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: utilde	Contours detected: 3	Expected: 2
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* m (U+006D): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;236.0,270.0&gt;--&lt;236.0,270.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;383.0,252.0&gt;--&lt;383.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;383.0,252.0&gt;--&lt;383.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;383.0,252.0&gt;--&lt;383.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;230.0,252.0&gt;--&lt;230.0,252.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;231.0,253.0&gt;--&lt;231.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;242.0,253.0&gt;--&lt;242.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;242.0,253.0&gt;--&lt;242.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;263.0,253.0&gt;--&lt;263.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;263.0,253.0&gt;--&lt;263.0,253.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;387.0,228.0&gt;--&lt;387.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;387.0,228.0&gt;--&lt;388.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;389.0,228.0&gt;--&lt;389.0,228.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;389.0,228.0&gt;--&lt;390.0,228.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* Ccedilla (U+00C7): L&lt;&lt;292.0,-142.0&gt;--&lt;296.0,-124.0&gt;&gt;/L&lt;&lt;296.0,-124.0&gt;--&lt;289.0,-142.0&gt;&gt; = 8.721697797981701

* Scedilla (U+015E): L&lt;&lt;207.0,-142.0&gt;--&lt;211.0,-124.0&gt;&gt;/L&lt;&lt;211.0,-124.0&gt;--&lt;204.0,-142.0&gt;&gt; = 8.721697797981701

* braceleft (U+007B): L&lt;&lt;121.0,93.0&gt;--&lt;54.0,93.0&gt;&gt;/L&lt;&lt;54.0,93.0&gt;--&lt;119.0,89.0&gt;&gt; = 3.521453376922262

* braceleft (U+007B): L&lt;&lt;137.0,519.0&gt;--&lt;204.0,519.0&gt;&gt;/L&lt;&lt;204.0,519.0&gt;--&lt;138.0,523.0&gt;&gt; = 3.468229258917096

* braceleft (U+007B): L&lt;&lt;18.0,183.0&gt;--&lt;85.0,183.0&gt;&gt;/L&lt;&lt;85.0,183.0&gt;--&lt;20.0,187.0&gt;&gt; = 3.521453376922158

* braceleft (U+007B): L&lt;&lt;239.0,429.0&gt;--&lt;172.0,429.0&gt;&gt;/L&lt;&lt;172.0,429.0&gt;--&lt;238.0,425.0&gt;&gt; = 3.468229258917096

* braceright (U+007D): L&lt;&lt;316.0,425.0&gt;--&lt;383.0,429.0&gt;&gt;/L&lt;&lt;383.0,429.0&gt;--&lt;316.0,429.0&gt;&gt; = 3.41658819177129

* braceright (U+007D): L&lt;&lt;316.0,89.0&gt;--&lt;383.0,93.0&gt;&gt;/L&lt;&lt;383.0,93.0&gt;--&lt;316.0,93.0&gt;&gt; = 3.41658819177129

* braceright (U+007D): L&lt;&lt;450.0,523.0&gt;--&lt;383.0,519.0&gt;&gt;/L&lt;&lt;383.0,519.0&gt;--&lt;451.0,519.0&gt;&gt; = 3.41658819177129

* braceright (U+007D): L&lt;&lt;451.0,187.0&gt;--&lt;383.0,183.0&gt;&gt;/L&lt;&lt;383.0,183.0&gt;--&lt;450.0,183.0&gt;&gt; = 3.3664606634298315

* ccedilla (U+00E7): L&lt;&lt;190.0,-142.0&gt;--&lt;194.0,-124.0&gt;&gt;/L&lt;&lt;194.0,-124.0&gt;--&lt;187.0,-142.0&gt;&gt; = 8.721697797981701

* cedilla (U+00B8): L&lt;&lt;111.0,-142.0&gt;--&lt;115.0,-124.0&gt;&gt;/L&lt;&lt;115.0,-124.0&gt;--&lt;108.0,-142.0&gt;&gt; = 8.721697797981701

* eng (U+014B): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* f (U+0066): L&lt;&lt;179.0,517.0&gt;--&lt;246.0,517.0&gt;&gt;/L&lt;&lt;246.0,517.0&gt;--&lt;181.0,521.0&gt;&gt; = 3.521453376922158

* florin (U+0192): L&lt;&lt;167.0,-34.0&gt;--&lt;101.0,-34.0&gt;&gt;/L&lt;&lt;101.0,-34.0&gt;--&lt;166.0,-38.0&gt;&gt; = 3.521453376922262

* florin (U+0192): L&lt;&lt;233.0,533.0&gt;--&lt;300.0,533.0&gt;&gt;/L&lt;&lt;300.0,533.0&gt;--&lt;235.0,537.0&gt;&gt; = 3.521453376922158

* h (U+0068): L&lt;&lt;471.0,252.0&gt;--&lt;538.0,252.0&gt;&gt;/L&lt;&lt;538.0,252.0&gt;--&lt;473.0,256.0&gt;&gt; = 3.521453376922158

* hbar (U+0127): L&lt;&lt;471.0,252.0&gt;--&lt;538.0,252.0&gt;&gt;/L&lt;&lt;538.0,252.0&gt;--&lt;473.0,256.0&gt;&gt; = 3.521453376922158

* hcircumflex (U+0125): L&lt;&lt;471.0,252.0&gt;--&lt;538.0,252.0&gt;&gt;/L&lt;&lt;538.0,252.0&gt;--&lt;473.0,256.0&gt;&gt; = 3.521453376922158

* ij (U+0133): L&lt;&lt;362.0,-79.0&gt;--&lt;295.0,-79.0&gt;&gt;/L&lt;&lt;295.0,-79.0&gt;--&lt;360.0,-83.0&gt;&gt; = 3.521453376922262

* integral (U+222B): L&lt;&lt;295.0,-1.0&gt;--&lt;229.0,-1.0&gt;&gt;/L&lt;&lt;229.0,-1.0&gt;--&lt;295.0,-5.0&gt;&gt; = 3.468229258917096

* integral (U+222B): L&lt;&lt;416.0,529.0&gt;--&lt;483.0,529.0&gt;&gt;/L&lt;&lt;483.0,529.0&gt;--&lt;417.0,533.0&gt;&gt; = 3.468229258917096

* j (U+006A): L&lt;&lt;155.0,-79.0&gt;--&lt;88.0,-79.0&gt;&gt;/L&lt;&lt;88.0,-79.0&gt;--&lt;153.0,-83.0&gt;&gt; = 3.521453376922262

* jcircumflex (U+0135): L&lt;&lt;197.0,-79.0&gt;--&lt;130.0,-79.0&gt;&gt;/L&lt;&lt;130.0,-79.0&gt;--&lt;195.0,-83.0&gt;&gt; = 3.521453376922262

* l.ss01: L&lt;&lt;154.0,215.0&gt;--&lt;88.0,215.0&gt;&gt;/L&lt;&lt;88.0,215.0&gt;--&lt;153.0,211.0&gt;&gt; = 3.521453376922262

* m (U+006D): L&lt;&lt;438.0,270.0&gt;--&lt;505.0,270.0&gt;&gt;/L&lt;&lt;505.0,270.0&gt;--&lt;439.0,274.0&gt;&gt; = 3.468229258917096

* m (U+006D): L&lt;&lt;772.0,270.0&gt;--&lt;839.0,270.0&gt;&gt;/L&lt;&lt;839.0,270.0&gt;--&lt;774.0,274.0&gt;&gt; = 3.521453376922158

* n (U+006E): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* nacute (U+0144): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* ncaron (U+0148): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* ntilde (U+00F1): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* onehalf (U+00BD): L&lt;&lt;383.0,42.0&gt;--&lt;397.0,45.0&gt;&gt;/L&lt;&lt;397.0,45.0&gt;--&lt;383.0,44.0&gt;&gt; = 8.009140297037234

* scedilla (U+015F): L&lt;&lt;173.0,-142.0&gt;--&lt;177.0,-124.0&gt;&gt;/L&lt;&lt;177.0,-124.0&gt;--&lt;170.0,-142.0&gt;&gt; = 8.721697797981701

* sterling (U+00A3): L&lt;&lt;322.0,501.0&gt;--&lt;390.0,501.0&gt;&gt;/L&lt;&lt;390.0,501.0&gt;--&lt;324.0,505.0&gt;&gt; = 3.468229258917096

* t (U+0074): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* tbar (U+0167): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* tcaron (U+0165): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* two (U+0032): L&lt;&lt;57.0,93.0&gt;--&lt;88.0,101.0&gt;&gt;/L&lt;&lt;88.0,101.0&gt;--&lt;58.0,97.0&gt;&gt; = 6.875650731474462

* two.dnom: L&lt;&lt;49.0,42.0&gt;--&lt;63.0,45.0&gt;&gt;/L&lt;&lt;63.0,45.0&gt;--&lt;49.0,44.0&gt;&gt; = 8.009140297037234

* two.lf: L&lt;&lt;54.0,93.0&gt;--&lt;85.0,101.0&gt;&gt;/L&lt;&lt;85.0,101.0&gt;--&lt;55.0,97.0&gt;&gt; = 6.875650731474462

* two.numr: L&lt;&lt;48.0,427.0&gt;--&lt;63.0,430.0&gt;&gt;/L&lt;&lt;63.0,430.0&gt;--&lt;49.0,429.0&gt;&gt; = 7.224315694045308

* two.osf: L&lt;&lt;57.0,93.0&gt;--&lt;88.0,101.0&gt;&gt;/L&lt;&lt;88.0,101.0&gt;--&lt;58.0,97.0&gt;&gt; = 6.875650731474462

* two.tf: L&lt;&lt;57.0,93.0&gt;--&lt;88.0,101.0&gt;&gt;/L&lt;&lt;88.0,101.0&gt;--&lt;58.0,97.0&gt;&gt; = 6.875650731474462

* two.tosf: L&lt;&lt;57.0,93.0&gt;--&lt;88.0,101.0&gt;&gt;/L&lt;&lt;88.0,101.0&gt;--&lt;58.0,97.0&gt;&gt; = 6.875650731474462

* u (U+0075): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uacute (U+00FA): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* ubreve (U+016D): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* ucircumflex (U+00FB): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* udieresis (U+00FC): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* ugrave (U+00F9): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uhorn (U+01B0): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uhungarumlaut (U+0171): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* umacron (U+016B): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni006A0301: L&lt;&lt;155.0,-79.0&gt;--&lt;88.0,-79.0&gt;&gt;/L&lt;&lt;88.0,-79.0&gt;--&lt;153.0,-83.0&gt;&gt; = 3.521453376922262

* uni00B2 (U+00B2): L&lt;&lt;48.0,427.0&gt;--&lt;63.0,430.0&gt;&gt;/L&lt;&lt;63.0,430.0&gt;--&lt;49.0,429.0&gt;&gt; = 7.224315694045308

* uni0146 (U+0146): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* uni0146.loclMAH: L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* uni0162 (U+0162): L&lt;&lt;8.0,-135.0&gt;--&lt;12.0,-117.0&gt;&gt;/L&lt;&lt;12.0,-117.0&gt;--&lt;5.0,-135.0&gt;&gt; = 8.721697797981701

* uni0163 (U+0163): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* uni0163 (U+0163): L&lt;&lt;34.0,-122.0&gt;--&lt;38.0,-104.0&gt;&gt;/L&lt;&lt;38.0,-104.0&gt;--&lt;31.0,-122.0&gt;&gt; = 8.721697797981701

* uni01AD (U+01AD): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* uni021B (U+021B): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* uni0228 (U+0228): L&lt;&lt;213.0,-126.0&gt;--&lt;217.0,-108.0&gt;&gt;/L&lt;&lt;217.0,-108.0&gt;--&lt;210.0,-126.0&gt;&gt; = 8.721697797981701

* uni0229 (U+0229): L&lt;&lt;220.0,-110.0&gt;--&lt;224.0,-92.0&gt;&gt;/L&lt;&lt;224.0,-92.0&gt;--&lt;217.0,-110.0&gt;&gt; = 8.721697797981701

* uni0237 (U+0237): L&lt;&lt;197.0,-79.0&gt;--&lt;130.0,-79.0&gt;&gt;/L&lt;&lt;130.0,-79.0&gt;--&lt;195.0,-83.0&gt;&gt; = 3.521453376922262

* uni025B (U+025B): B&lt;&lt;101.0,222.0&gt;-&lt;136.0,252.0&gt;-&lt;187.0,257.0&gt;&gt;/B&lt;&lt;187.0,257.0&gt;-&lt;147.0,263.0&gt;-&lt;129.0,293.0&gt;&gt; = 14.1301049464687

* uni0265 (U+0265): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni0266 (U+0266): L&lt;&lt;471.0,252.0&gt;--&lt;538.0,252.0&gt;&gt;/L&lt;&lt;538.0,252.0&gt;--&lt;473.0,256.0&gt;&gt; = 3.521453376922158

* uni0272 (U+0272): L&lt;&lt;621.0,252.0&gt;--&lt;688.0,252.0&gt;&gt;/L&lt;&lt;688.0,252.0&gt;--&lt;623.0,256.0&gt;&gt; = 3.521453376922158

* uni0283 (U+0283): L&lt;&lt;160.0,0.0&gt;--&lt;93.0,0.0&gt;&gt;/L&lt;&lt;93.0,0.0&gt;--&lt;158.0,-4.0&gt;&gt; = 3.521453376922262

* uni0283 (U+0283): L&lt;&lt;208.0,517.0&gt;--&lt;275.0,517.0&gt;&gt;/L&lt;&lt;275.0,517.0&gt;--&lt;210.0,521.0&gt;&gt; = 3.521453376922158

* uni0288 (U+0288): L&lt;&lt;185.0,9.0&gt;--&lt;118.0,9.0&gt;&gt;/L&lt;&lt;118.0,9.0&gt;--&lt;183.0,5.0&gt;&gt; = 3.521453376922262

* uni0289 (U+0289): L&lt;&lt;150.0,228.0&gt;--&lt;83.0,228.0&gt;&gt;/L&lt;&lt;83.0,228.0&gt;--&lt;148.0,224.0&gt;&gt; = 3.521453376922262

* uni0327 (U+0327): L&lt;&lt;165.0,-142.0&gt;--&lt;169.0,-124.0&gt;&gt;/L&lt;&lt;169.0,-124.0&gt;--&lt;162.0,-142.0&gt;&gt; = 8.721697797981701

* uni1E08 (U+1E08): L&lt;&lt;292.0,-142.0&gt;--&lt;296.0,-124.0&gt;&gt;/L&lt;&lt;296.0,-124.0&gt;--&lt;289.0,-142.0&gt;&gt; = 8.721697797981701

* uni1E09 (U+1E09): L&lt;&lt;190.0,-142.0&gt;--&lt;194.0,-124.0&gt;&gt;/L&lt;&lt;194.0,-124.0&gt;--&lt;187.0,-142.0&gt;&gt; = 8.721697797981701

* uni1E1C (U+1E1C): L&lt;&lt;213.0,-126.0&gt;--&lt;217.0,-108.0&gt;&gt;/L&lt;&lt;217.0,-108.0&gt;--&lt;210.0,-126.0&gt;&gt; = 8.721697797981701

* uni1E1D (U+1E1D): L&lt;&lt;220.0,-110.0&gt;--&lt;224.0,-92.0&gt;&gt;/L&lt;&lt;224.0,-92.0&gt;--&lt;217.0,-110.0&gt;&gt; = 8.721697797981701

* uni1E25 (U+1E25): L&lt;&lt;471.0,252.0&gt;--&lt;538.0,252.0&gt;&gt;/L&lt;&lt;538.0,252.0&gt;--&lt;473.0,256.0&gt;&gt; = 3.521453376922158

* uni1E2B (U+1E2B): L&lt;&lt;471.0,252.0&gt;--&lt;538.0,252.0&gt;&gt;/L&lt;&lt;538.0,252.0&gt;--&lt;473.0,256.0&gt;&gt; = 3.521453376922158

* uni1E3F (U+1E3F): L&lt;&lt;438.0,270.0&gt;--&lt;505.0,270.0&gt;&gt;/L&lt;&lt;505.0,270.0&gt;--&lt;439.0,274.0&gt;&gt; = 3.468229258917096

* uni1E3F (U+1E3F): L&lt;&lt;772.0,270.0&gt;--&lt;839.0,270.0&gt;&gt;/L&lt;&lt;839.0,270.0&gt;--&lt;774.0,274.0&gt;&gt; = 3.521453376922158

* uni1E43 (U+1E43): L&lt;&lt;438.0,270.0&gt;--&lt;505.0,270.0&gt;&gt;/L&lt;&lt;505.0,270.0&gt;--&lt;439.0,274.0&gt;&gt; = 3.468229258917096

* uni1E43 (U+1E43): L&lt;&lt;772.0,270.0&gt;--&lt;839.0,270.0&gt;&gt;/L&lt;&lt;839.0,270.0&gt;--&lt;774.0,274.0&gt;&gt; = 3.521453376922158

* uni1E45 (U+1E45): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* uni1E47 (U+1E47): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* uni1E49 (U+1E49): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* uni1E4B (U+1E4B): L&lt;&lt;468.0,252.0&gt;--&lt;535.0,252.0&gt;&gt;/L&lt;&lt;535.0,252.0&gt;--&lt;470.0,256.0&gt;&gt; = 3.521453376922158

* uni1E6D (U+1E6D): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* uni1E6F (U+1E6F): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* uni1E71 (U+1E71): L&lt;&lt;130.0,209.0&gt;--&lt;63.0,209.0&gt;&gt;/L&lt;&lt;63.0,209.0&gt;--&lt;128.0,205.0&gt;&gt; = 3.521453376922262

* uni1EE5 (U+1EE5): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni1EE7 (U+1EE7): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni1EE9 (U+1EE9): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni1EEB (U+1EEB): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni1EED (U+1EED): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni1EEF (U+1EEF): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni1EF1 (U+1EF1): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uni2082 (U+2082): L&lt;&lt;49.0,42.0&gt;--&lt;63.0,45.0&gt;&gt;/L&lt;&lt;63.0,45.0&gt;--&lt;49.0,44.0&gt;&gt; = 8.009140297037234

* uni2154 (U+2154): L&lt;&lt;48.0,427.0&gt;--&lt;63.0,430.0&gt;&gt;/L&lt;&lt;63.0,430.0&gt;--&lt;49.0,429.0&gt;&gt; = 7.224315694045308

* uni2198 (U+2198): L&lt;&lt;681.0,-9.0&gt;--&lt;681.0,-9.0&gt;&gt;/L&lt;&lt;681.0,-9.0&gt;--&lt;243.0,71.0&gt;&gt; = 10.3508856549305

* uni2198 (U+2198): L&lt;&lt;686.0,-10.0&gt;--&lt;681.0,-9.0&gt;&gt;/L&lt;&lt;681.0,-9.0&gt;--&lt;681.0,-9.0&gt;&gt; = 11.309932474020195

* uogonek (U+0173): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* uring (U+016F): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262

* utilde (U+0169): L&lt;&lt;152.0,228.0&gt;--&lt;85.0,228.0&gt;&gt;/L&lt;&lt;85.0,228.0&gt;--&lt;150.0,224.0&gt;&gt; = 3.521453376922262
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[16] ElmsSans-ThinItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: Hbar	Contours detected: 1	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni0244	Contours detected: 1	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: notequal	Contours detected: 2	Expected: 1

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Hbar	Contours detected: 1	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: notequal	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0244	Contours detected: 1	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2
</code></pre>
 [code: contour-count]



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
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;547.0,0.0&gt;--&lt;547.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* uni0162 (U+0162): L&lt;&lt;11.0,0.0&gt;--&lt;39.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* two.dnom: L&lt;&lt;47.0,13.0&gt;--&lt;40.0,13.0&gt;&gt; has the same coordinates as a previous segment.

* five.dnom: L&lt;&lt;75.0,163.0&gt;--&lt;75.0,163.0&gt;&gt; has the same coordinates as a previous segment.

* two.numr: L&lt;&lt;46.0,398.0&gt;--&lt;40.0,398.0&gt;&gt; has the same coordinates as a previous segment.

* five.numr: L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt; has the same coordinates as a previous segment.

* onehalf (U+00BD): L&lt;&lt;356.0,13.0&gt;--&lt;349.0,13.0&gt;&gt; has the same coordinates as a previous segment.

* uni2154 (U+2154): L&lt;&lt;46.0,398.0&gt;--&lt;40.0,398.0&gt;&gt; has the same coordinates as a previous segment.

* fiveeighths (U+215D): L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt; has the same coordinates as a previous segment.

* uni2082 (U+2082): L&lt;&lt;47.0,13.0&gt;--&lt;40.0,13.0&gt;&gt; has the same coordinates as a previous segment.

* uni2085 (U+2085): L&lt;&lt;75.0,163.0&gt;--&lt;75.0,163.0&gt;&gt; has the same coordinates as a previous segment.

* uni00B2 (U+00B2): L&lt;&lt;46.0,398.0&gt;--&lt;40.0,398.0&gt;&gt; has the same coordinates as a previous segment.

* uni2075 (U+2075): L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt; has the same coordinates as a previous segment.

* uni2197 (U+2197): L&lt;&lt;730.0,590.0&gt;--&lt;730.0,590.0&gt;&gt; has the same coordinates as a previous segment.

* uni2199 (U+2199): L&lt;&lt;71.0,44.0&gt;--&lt;71.0,44.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
<pre><code>* Eng (U+014A): L&lt;&lt;547.0,0.0&gt;--&lt;547.0,0.0&gt;&gt; -&gt; L&lt;&lt;547.0,0.0&gt;--&lt;547.0,0.0&gt;&gt;

* arrowright (U+2192): L&lt;&lt;865.0,238.0&gt;--&lt;866.0,238.0&gt;&gt; -&gt; L&lt;&lt;866.0,238.0&gt;--&lt;866.0,238.0&gt;&gt;

* eng (U+014B): L&lt;&lt;438.0,-53.0&gt;--&lt;457.0,0.0&gt;&gt; -&gt; L&lt;&lt;457.0,0.0&gt;--&lt;551.0,269.0&gt;&gt;

* eng (U+014B): L&lt;&lt;579.0,268.0&gt;--&lt;485.0,0.0&gt;&gt; -&gt; L&lt;&lt;485.0,0.0&gt;--&lt;465.0,-57.0&gt;&gt;

* five.dnom: L&lt;&lt;75.0,163.0&gt;--&lt;75.0,163.0&gt;&gt; -&gt; L&lt;&lt;75.0,163.0&gt;--&lt;75.0,163.0&gt;&gt;

* five.numr: L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt; -&gt; L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt;

* fiveeighths (U+215D): L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt; -&gt; L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;103.0,0.0&gt;--&lt;109.0,18.0&gt;&gt; -&gt; L&lt;&lt;109.0,18.0&gt;--&lt;112.0,28.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;142.0,391.0&gt;--&lt;156.0,390.0&gt;&gt; -&gt; L&lt;&lt;156.0,390.0&gt;--&lt;803.0,390.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;279.0,700.0&gt;--&lt;85.0,148.0&gt;&gt; -&gt; L&lt;&lt;85.0,148.0&gt;--&lt;63.0,86.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;35.0,85.0&gt;--&lt;57.0,148.0&gt;&gt; -&gt; L&lt;&lt;57.0,148.0&gt;--&lt;251.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;173.0,-54.0&gt;--&lt;193.0,0.0&gt;&gt; -&gt; L&lt;&lt;193.0,0.0&gt;--&lt;439.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;456.0,667.0&gt;--&lt;221.0,0.0&gt;&gt; -&gt; L&lt;&lt;221.0,0.0&gt;--&lt;201.0,-55.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;29.0,-280.0&gt;--&lt;297.0,480.0&gt;&gt; -&gt; L&lt;&lt;297.0,480.0&gt;--&lt;332.0,581.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;360.0,580.0&gt;--&lt;325.0,480.0&gt;&gt; -&gt; L&lt;&lt;325.0,480.0&gt;--&lt;278.0,347.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;121.0,480.0&gt;--&lt;150.0,561.0&gt;&gt; -&gt; L&lt;&lt;150.0,561.0&gt;--&lt;170.0,621.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;198.0,620.0&gt;--&lt;178.0,561.0&gt;&gt; -&gt; L&lt;&lt;178.0,561.0&gt;--&lt;149.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;-26.0,-179.0&gt;--&lt;-7.0,-126.0&gt;&gt; -&gt; L&lt;&lt;-7.0,-126.0&gt;--&lt;276.0,676.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;304.0,676.0&gt;--&lt;21.0,-126.0&gt;&gt; -&gt; L&lt;&lt;21.0,-126.0&gt;--&lt;2.0,-182.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;119.0,310.0&gt;--&lt;509.0,700.0&gt;&gt; -&gt; L&lt;&lt;509.0,700.0&gt;--&lt;558.0,750.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;579.0,733.0&gt;--&lt;544.0,699.0&gt;&gt; -&gt; L&lt;&lt;544.0,699.0&gt;--&lt;123.0,282.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;373.0,29.0&gt;--&lt;727.0,481.0&gt;&gt; -&gt; L&lt;&lt;727.0,481.0&gt;--&lt;770.0,536.0&gt;&gt;

* uni01DD (U+01DD): L&lt;&lt;116.0,268.0&gt;--&lt;116.0,268.0&gt;&gt; -&gt; L&lt;&lt;116.0,268.0&gt;--&lt;553.0,268.0&gt;&gt;

* uni01DD (U+01DD): L&lt;&lt;99.0,269.0&gt;--&lt;116.0,268.0&gt;&gt; -&gt; L&lt;&lt;116.0,268.0&gt;--&lt;116.0,268.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;23.0,0.0&gt;--&lt;226.0,577.0&gt;&gt; -&gt; L&lt;&lt;226.0,577.0&gt;--&lt;247.0,637.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;275.0,636.0&gt;--&lt;254.0,577.0&gt;&gt; -&gt; L&lt;&lt;254.0,577.0&gt;--&lt;175.0,352.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;617.0,344.0&gt;--&lt;700.0,580.0&gt;&gt; -&gt; L&lt;&lt;700.0,580.0&gt;--&lt;714.0,621.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;742.0,620.0&gt;--&lt;728.0,580.0&gt;&gt; -&gt; L&lt;&lt;728.0,580.0&gt;--&lt;524.0,0.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;116.0,268.0&gt;--&lt;116.0,268.0&gt;&gt; -&gt; L&lt;&lt;116.0,268.0&gt;--&lt;553.0,268.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;99.0,269.0&gt;--&lt;116.0,268.0&gt;&gt; -&gt; L&lt;&lt;116.0,268.0&gt;--&lt;116.0,268.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;728.0,349.0&gt;--&lt;760.0,440.0&gt;&gt; -&gt; L&lt;&lt;760.0,440.0&gt;--&lt;781.0,500.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;809.0,499.0&gt;--&lt;788.0,440.0&gt;&gt; -&gt; L&lt;&lt;788.0,440.0&gt;--&lt;618.0,-41.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;28.0,0.0&gt;--&lt;231.0,577.0&gt;&gt; -&gt; L&lt;&lt;231.0,577.0&gt;--&lt;252.0,637.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;280.0,636.0&gt;--&lt;259.0,577.0&gt;&gt; -&gt; L&lt;&lt;259.0,577.0&gt;--&lt;187.0,372.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;202.0,480.0&gt;--&lt;83.0,143.0&gt;&gt; -&gt; L&lt;&lt;83.0,143.0&gt;--&lt;61.0,82.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;35.0,85.0&gt;--&lt;55.0,143.0&gt;&gt; -&gt; L&lt;&lt;55.0,143.0&gt;--&lt;174.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;150.0,-43.0&gt;--&lt;166.0,0.0&gt;&gt; -&gt; L&lt;&lt;166.0,0.0&gt;--&lt;335.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;291.0,275.0&gt;--&lt;194.0,0.0&gt;&gt; -&gt; L&lt;&lt;194.0,0.0&gt;--&lt;177.0,-47.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;188.0,314.0&gt;--&lt;78.0,0.0&gt;&gt; -&gt; L&lt;&lt;78.0,0.0&gt;--&lt;56.0,-61.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;29.0,-58.0&gt;--&lt;50.0,0.0&gt;&gt; -&gt; L&lt;&lt;50.0,0.0&gt;--&lt;219.0,480.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;191.0,396.0&gt;--&lt;169.0,337.0&gt;&gt; -&gt; L&lt;&lt;169.0,337.0&gt;--&lt;51.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;23.0,0.0&gt;--&lt;141.0,337.0&gt;&gt; -&gt; L&lt;&lt;141.0,337.0&gt;--&lt;163.0,397.0&gt;&gt;

* uni2075 (U+2075): L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt; -&gt; L&lt;&lt;75.0,548.0&gt;--&lt;75.0,548.0&gt;&gt;

* uni2085 (U+2085): L&lt;&lt;75.0,163.0&gt;--&lt;75.0,163.0&gt;&gt; -&gt; L&lt;&lt;75.0,163.0&gt;--&lt;75.0,163.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;157.0,673.0&gt;--&lt;158.0,673.0&gt;&gt; -&gt; L&lt;&lt;158.0,673.0&gt;--&lt;158.0,673.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;304.0,613.0&gt;--&lt;735.0,609.0&gt;&gt; -&gt; L&lt;&lt;735.0,609.0&gt;--&lt;736.0,609.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;730.0,590.0&gt;--&lt;730.0,590.0&gt;&gt; -&gt; L&lt;&lt;730.0,590.0&gt;--&lt;730.0,590.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;497.0,21.0&gt;--&lt;65.0,25.0&gt;&gt; -&gt; L&lt;&lt;65.0,25.0&gt;--&lt;64.0,25.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;71.0,44.0&gt;--&lt;71.0,44.0&gt;&gt; -&gt; L&lt;&lt;71.0,44.0&gt;--&lt;71.0,44.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;152.0,274.0&gt;--&lt;56.0,0.0&gt;&gt; -&gt; L&lt;&lt;56.0,0.0&gt;--&lt;36.0,-56.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;9.0,-53.0&gt;--&lt;28.0,0.0&gt;&gt; -&gt; L&lt;&lt;28.0,0.0&gt;--&lt;274.0,700.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;898.0,732.0&gt;--&lt;876.0,700.0&gt;&gt; -&gt; L&lt;&lt;876.0,700.0&gt;--&lt;413.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): B&lt;&lt;724.0,603.0&gt;-&lt;745.0,551.0&gt;-&lt;733.0,487.0&gt;&gt;/L&lt;&lt;733.0,487.0&gt;--&lt;808.0,700.0&gt;&gt; = 8.778157172403079

* OE (U+0152): L&lt;&lt;562.0,0.0&gt;--&lt;636.0,211.0&gt;&gt;/B&lt;&lt;636.0,211.0&gt;-&lt;603.0,147.0&gt;-&lt;546.0,95.5&gt;&gt; = 7.950438709815896

* braceleft (U+007B): L&lt;&lt;139.0,429.0&gt;--&lt;125.0,429.0&gt;&gt;/L&lt;&lt;125.0,429.0&gt;--&lt;138.0,428.0&gt;&gt; = 4.398705354995508

* braceleft (U+007B): L&lt;&lt;14.0,75.0&gt;--&lt;0.0,75.0&gt;&gt;/L&lt;&lt;0.0,75.0&gt;--&lt;14.0,74.0&gt;&gt; = 4.085616779974888

* braceleft (U+007B): L&lt;&lt;149.0,537.0&gt;--&lt;163.0,537.0&gt;&gt;/L&lt;&lt;163.0,537.0&gt;--&lt;150.0,538.0&gt;&gt; = 4.398705354995508

* braceleft (U+007B): L&lt;&lt;24.0,183.0&gt;--&lt;38.0,183.0&gt;&gt;/L&lt;&lt;38.0,183.0&gt;--&lt;24.0,184.0&gt;&gt; = 4.085616779974888

* braceright (U+007D): L&lt;&lt;451.0,428.0&gt;--&lt;466.0,429.0&gt;&gt;/L&lt;&lt;466.0,429.0&gt;--&lt;452.0,429.0&gt;&gt; = 3.8140748342903783

* braceright (U+007D): L&lt;&lt;451.0,74.0&gt;--&lt;465.0,75.0&gt;&gt;/L&lt;&lt;465.0,75.0&gt;--&lt;451.0,75.0&gt;&gt; = 4.085616779974888

* braceright (U+007D): L&lt;&lt;479.0,184.0&gt;--&lt;465.0,183.0&gt;&gt;/L&lt;&lt;465.0,183.0&gt;--&lt;479.0,183.0&gt;&gt; = 4.085616779974888

* braceright (U+007D): L&lt;&lt;479.0,538.0&gt;--&lt;465.0,537.0&gt;&gt;/L&lt;&lt;465.0,537.0&gt;--&lt;480.0,537.0&gt;&gt; = 4.085616779974888

* e (U+0065): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* eacute (U+00E9): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* ecaron (U+011B): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* ecircumflex (U+00EA): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* edieresis (U+00EB): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* edotaccent (U+0117): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* egrave (U+00E8): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* emacron (U+0113): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* eng (U+014B): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* eogonek (U+0119): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* f (U+0066): L&lt;&lt;209.0,557.0&gt;--&lt;223.0,557.0&gt;&gt;/L&lt;&lt;223.0,557.0&gt;--&lt;209.0,558.0&gt;&gt; = 4.085616779974888

* florin (U+0192): L&lt;&lt;263.0,573.0&gt;--&lt;277.0,573.0&gt;&gt;/L&lt;&lt;277.0,573.0&gt;--&lt;263.0,574.0&gt;&gt; = 4.085616779974888

* florin (U+0192): L&lt;&lt;73.0,-44.0&gt;--&lt;59.0,-44.0&gt;&gt;/L&lt;&lt;59.0,-44.0&gt;--&lt;73.0,-45.0&gt;&gt; = 4.085616779974888

* h (U+0068): L&lt;&lt;556.0,269.0&gt;--&lt;570.0,269.0&gt;&gt;/L&lt;&lt;570.0,269.0&gt;--&lt;557.0,270.0&gt;&gt; = 4.398705354995508

* hbar (U+0127): L&lt;&lt;556.0,269.0&gt;--&lt;570.0,269.0&gt;&gt;/L&lt;&lt;570.0,269.0&gt;--&lt;557.0,270.0&gt;&gt; = 4.398705354995508

* hcircumflex (U+0125): L&lt;&lt;556.0,269.0&gt;--&lt;570.0,269.0&gt;&gt;/L&lt;&lt;570.0,269.0&gt;--&lt;557.0,270.0&gt;&gt; = 4.398705354995508

* ij (U+0133): L&lt;&lt;328.0,-97.0&gt;--&lt;313.0,-97.0&gt;&gt;/L&lt;&lt;313.0,-97.0&gt;--&lt;327.0,-98.0&gt;&gt; = 4.085616779974888

* integral (U+222B): L&lt;&lt;217.0,-55.0&gt;--&lt;203.0,-54.0&gt;&gt;/L&lt;&lt;203.0,-54.0&gt;--&lt;217.0,-56.0&gt;&gt; = 4.044485574181016

* integral (U+222B): L&lt;&lt;504.0,583.0&gt;--&lt;518.0,583.0&gt;&gt;/L&lt;&lt;518.0,583.0&gt;--&lt;504.0,584.0&gt;&gt; = 4.085616779974888

* j (U+006A): L&lt;&lt;106.0,-97.0&gt;--&lt;91.0,-97.0&gt;&gt;/L&lt;&lt;91.0,-97.0&gt;--&lt;105.0,-98.0&gt;&gt; = 4.085616779974888

* jcircumflex (U+0135): L&lt;&lt;148.0,-97.0&gt;--&lt;133.0,-97.0&gt;&gt;/L&lt;&lt;133.0,-97.0&gt;--&lt;147.0,-98.0&gt;&gt; = 4.085616779974888

* l.ss01: L&lt;&lt;68.0,183.0&gt;--&lt;54.0,183.0&gt;&gt;/L&lt;&lt;54.0,183.0&gt;--&lt;68.0,182.0&gt;&gt; = 4.085616779974888

* m (U+006D): L&lt;&lt;471.0,320.0&gt;--&lt;485.0,320.0&gt;&gt;/L&lt;&lt;485.0,320.0&gt;--&lt;472.0,321.0&gt;&gt; = 4.398705354995508

* m (U+006D): L&lt;&lt;807.0,320.0&gt;--&lt;821.0,320.0&gt;&gt;/L&lt;&lt;821.0,320.0&gt;--&lt;808.0,321.0&gt;&gt; = 4.398705354995508

* n (U+006E): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* nacute (U+0144): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* ncaron (U+0148): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* ntilde (U+00F1): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* sterling (U+00A3): L&lt;&lt;346.0,290.0&gt;--&lt;332.0,290.0&gt;&gt;/L&lt;&lt;332.0,290.0&gt;--&lt;346.0,289.0&gt;&gt; = 4.085616779974888

* sterling (U+00A3): L&lt;&lt;401.0,525.0&gt;--&lt;415.0,525.0&gt;&gt;/L&lt;&lt;415.0,525.0&gt;--&lt;401.0,526.0&gt;&gt; = 4.085616779974888

* t (U+0074): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* tbar (U+0167): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* tcaron (U+0165): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* two (U+0032): L&lt;&lt;38.0,28.0&gt;--&lt;52.0,28.0&gt;&gt;/L&lt;&lt;52.0,28.0&gt;--&lt;38.0,29.0&gt;&gt; = 4.085616779974888

* two.lf: L&lt;&lt;63.0,28.0&gt;--&lt;77.0,28.0&gt;&gt;/L&lt;&lt;77.0,28.0&gt;--&lt;63.0,29.0&gt;&gt; = 4.085616779974888

* two.osf: L&lt;&lt;38.0,28.0&gt;--&lt;52.0,28.0&gt;&gt;/L&lt;&lt;52.0,28.0&gt;--&lt;38.0,29.0&gt;&gt; = 4.085616779974888

* two.tf: L&lt;&lt;38.0,28.0&gt;--&lt;52.0,28.0&gt;&gt;/L&lt;&lt;52.0,28.0&gt;--&lt;38.0,29.0&gt;&gt; = 4.085616779974888

* two.tosf: L&lt;&lt;38.0,28.0&gt;--&lt;52.0,28.0&gt;&gt;/L&lt;&lt;52.0,28.0&gt;--&lt;38.0,29.0&gt;&gt; = 4.085616779974888

* u (U+0075): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uacute (U+00FA): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* ubreve (U+016D): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* ucircumflex (U+00FB): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* udieresis (U+00FC): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* ugrave (U+00F9): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uhorn (U+01B0): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uhungarumlaut (U+0171): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* umacron (U+016B): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni006A0301: L&lt;&lt;106.0,-97.0&gt;--&lt;91.0,-97.0&gt;&gt;/L&lt;&lt;91.0,-97.0&gt;--&lt;105.0,-98.0&gt;&gt; = 4.085616779974888

* uni0146 (U+0146): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* uni0146.loclMAH: L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* uni0163 (U+0163): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* uni0190 (U+0190): B&lt;&lt;208.5,340.0&gt;-&lt;261.0,366.0&gt;-&lt;322.0,372.0&gt;&gt;/B&lt;&lt;322.0,372.0&gt;-&lt;239.0,382.0&gt;-&lt;201.5,427.0&gt;&gt; = 12.487572898341057

* uni01AD (U+01AD): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* uni01B1 (U+01B1): B&lt;&lt;357.0,638.5&gt;-&lt;405.0,669.0&gt;-&lt;452.0,678.0&gt;&gt;/L&lt;&lt;452.0,678.0&gt;--&lt;285.0,678.0&gt;&gt; = 10.840305454330565

* uni01B1 (U+01B1): L&lt;&lt;905.0,678.0&gt;--&lt;736.0,678.0&gt;&gt;/B&lt;&lt;736.0,678.0&gt;-&lt;794.0,668.0&gt;-&lt;826.5,617.5&gt;&gt; = 9.782407031807285

* uni0207 (U+0207): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni021B (U+021B): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* uni0229 (U+0229): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni0237 (U+0237): L&lt;&lt;148.0,-97.0&gt;--&lt;133.0,-97.0&gt;&gt;/L&lt;&lt;133.0,-97.0&gt;--&lt;147.0,-98.0&gt;&gt; = 4.085616779974888

* uni025B (U+025B): B&lt;&lt;109.5,212.0&gt;-&lt;159.0,249.0&gt;-&lt;223.0,256.0&gt;&gt;/B&lt;&lt;223.0,256.0&gt;-&lt;165.0,263.0&gt;-&lt;138.5,294.5&gt;&gt; = 13.123637978051972

* uni0265 (U+0265): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni0266 (U+0266): L&lt;&lt;556.0,269.0&gt;--&lt;570.0,269.0&gt;&gt;/L&lt;&lt;570.0,269.0&gt;--&lt;557.0,270.0&gt;&gt; = 4.398705354995508

* uni0272 (U+0272): L&lt;&lt;694.0,269.0&gt;--&lt;708.0,269.0&gt;&gt;/L&lt;&lt;708.0,269.0&gt;--&lt;695.0,270.0&gt;&gt; = 4.398705354995508

* uni0283 (U+0283): L&lt;&lt;241.0,557.0&gt;--&lt;255.0,557.0&gt;&gt;/L&lt;&lt;255.0,557.0&gt;--&lt;241.0,558.0&gt;&gt; = 4.085616779974888

* uni0283 (U+0283): L&lt;&lt;73.0,0.0&gt;--&lt;59.0,0.0&gt;&gt;/L&lt;&lt;59.0,0.0&gt;--&lt;73.0,-1.0&gt;&gt; = 4.085616779974888

* uni0288 (U+0288): L&lt;&lt;80.0,-42.0&gt;--&lt;66.0,-42.0&gt;&gt;/L&lt;&lt;66.0,-42.0&gt;--&lt;79.0,-43.0&gt;&gt; = 4.398705354995508

* uni0289 (U+0289): L&lt;&lt;62.0,211.0&gt;--&lt;48.0,211.0&gt;&gt;/L&lt;&lt;48.0,211.0&gt;--&lt;62.0,210.0&gt;&gt; = 4.085616779974888

* uni1E1D (U+1E1D): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1E25 (U+1E25): L&lt;&lt;556.0,269.0&gt;--&lt;570.0,269.0&gt;&gt;/L&lt;&lt;570.0,269.0&gt;--&lt;557.0,270.0&gt;&gt; = 4.398705354995508

* uni1E2B (U+1E2B): L&lt;&lt;556.0,269.0&gt;--&lt;570.0,269.0&gt;&gt;/L&lt;&lt;570.0,269.0&gt;--&lt;557.0,270.0&gt;&gt; = 4.398705354995508

* uni1E3F (U+1E3F): L&lt;&lt;471.0,320.0&gt;--&lt;485.0,320.0&gt;&gt;/L&lt;&lt;485.0,320.0&gt;--&lt;472.0,321.0&gt;&gt; = 4.398705354995508

* uni1E3F (U+1E3F): L&lt;&lt;807.0,320.0&gt;--&lt;821.0,320.0&gt;&gt;/L&lt;&lt;821.0,320.0&gt;--&lt;808.0,321.0&gt;&gt; = 4.398705354995508

* uni1E43 (U+1E43): L&lt;&lt;471.0,320.0&gt;--&lt;485.0,320.0&gt;&gt;/L&lt;&lt;485.0,320.0&gt;--&lt;472.0,321.0&gt;&gt; = 4.398705354995508

* uni1E43 (U+1E43): L&lt;&lt;807.0,320.0&gt;--&lt;821.0,320.0&gt;&gt;/L&lt;&lt;821.0,320.0&gt;--&lt;808.0,321.0&gt;&gt; = 4.398705354995508

* uni1E45 (U+1E45): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* uni1E47 (U+1E47): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* uni1E49 (U+1E49): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* uni1E4B (U+1E4B): L&lt;&lt;551.0,269.0&gt;--&lt;565.0,269.0&gt;&gt;/L&lt;&lt;565.0,269.0&gt;--&lt;552.0,270.0&gt;&gt; = 4.398705354995508

* uni1E6D (U+1E6D): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* uni1E6F (U+1E6F): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* uni1E71 (U+1E71): L&lt;&lt;36.0,158.0&gt;--&lt;21.0,158.0&gt;&gt;/L&lt;&lt;21.0,158.0&gt;--&lt;35.0,157.0&gt;&gt; = 4.085616779974888

* uni1EB9 (U+1EB9): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EBB (U+1EBB): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EBD (U+1EBD): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EBF (U+1EBF): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EC1 (U+1EC1): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EC3 (U+1EC3): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EC5 (U+1EC5): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EC7 (U+1EC7): L&lt;&lt;567.0,211.0&gt;--&lt;550.0,212.0&gt;&gt;/L&lt;&lt;550.0,212.0&gt;--&lt;550.0,212.0&gt;&gt; = 3.3664606634298315

* uni1EE5 (U+1EE5): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni1EE7 (U+1EE7): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni1EE9 (U+1EE9): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni1EEB (U+1EEB): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni1EED (U+1EED): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni1EEF (U+1EEF): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni1EF1 (U+1EF1): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uni2198 (U+2198): L&lt;&lt;625.0,35.0&gt;--&lt;625.0,35.0&gt;&gt;/L&lt;&lt;625.0,35.0&gt;--&lt;223.0,108.0&gt;&gt; = 10.292303610053718

* uogonek (U+0173): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* uring (U+016F): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888

* utilde (U+0169): L&lt;&lt;60.0,211.0&gt;--&lt;46.0,211.0&gt;&gt;/L&lt;&lt;46.0,211.0&gt;--&lt;60.0,210.0&gt;&gt; = 4.085616779974888
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[14] ElmsSans-SemiBoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: m	Contours detected: 2	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: utilde	Contours detected: 3	Expected: 2

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E3F	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E43	Contours detected: 3	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: m	Contours detected: 2	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E3F	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E43	Contours detected: 3	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: utilde	Contours detected: 3	Expected: 2

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* m (U+006D): L&lt;&lt;224.0,278.0&gt;--&lt;224.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;224.0,278.0&gt;--&lt;224.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;224.0,278.0&gt;--&lt;224.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;224.0,278.0&gt;--&lt;224.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;224.0,278.0&gt;--&lt;224.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;224.0,278.0&gt;--&lt;224.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;559.0,278.0&gt;--&lt;559.0,278.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;374.0,258.0&gt;--&lt;374.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;374.0,258.0&gt;--&lt;374.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;374.0,258.0&gt;--&lt;374.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;217.0,258.0&gt;--&lt;217.0,258.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;397.0,222.0&gt;--&lt;397.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;397.0,222.0&gt;--&lt;397.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;397.0,222.0&gt;--&lt;397.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;394.0,222.0&gt;--&lt;394.0,222.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* Ccedilla (U+00C7): L&lt;&lt;291.0,-136.0&gt;--&lt;295.0,-121.0&gt;&gt;/L&lt;&lt;295.0,-121.0&gt;--&lt;290.0,-136.0&gt;&gt; = 3.503531644784471

* Scedilla (U+015E): L&lt;&lt;201.0,-136.0&gt;--&lt;205.0,-121.0&gt;&gt;/L&lt;&lt;205.0,-121.0&gt;--&lt;200.0,-136.0&gt;&gt; = 3.503531644784471

* braceleft (U+007B): L&lt;&lt;110.0,87.0&gt;--&lt;50.0,87.0&gt;&gt;/L&lt;&lt;50.0,87.0&gt;--&lt;108.0,83.0&gt;&gt; = 3.94518622903751

* braceleft (U+007B): L&lt;&lt;145.0,525.0&gt;--&lt;204.0,525.0&gt;&gt;/L&lt;&lt;204.0,525.0&gt;--&lt;146.0,529.0&gt;&gt; = 3.94518622903751

* braceleft (U+007B): L&lt;&lt;230.0,429.0&gt;--&lt;171.0,429.0&gt;&gt;/L&lt;&lt;171.0,429.0&gt;--&lt;229.0,425.0&gt;&gt; = 3.94518622903751

* braceleft (U+007B): L&lt;&lt;24.0,183.0&gt;--&lt;84.0,183.0&gt;&gt;/L&lt;&lt;84.0,183.0&gt;--&lt;25.0,187.0&gt;&gt; = 3.8785245028476374

* braceright (U+007D): L&lt;&lt;317.0,425.0&gt;--&lt;377.0,429.0&gt;&gt;/L&lt;&lt;377.0,429.0&gt;--&lt;317.0,429.0&gt;&gt; = 3.8140748342903783

* braceright (U+007D): L&lt;&lt;317.0,83.0&gt;--&lt;377.0,87.0&gt;&gt;/L&lt;&lt;377.0,87.0&gt;--&lt;317.0,87.0&gt;&gt; = 3.8140748342903783

* braceright (U+007D): L&lt;&lt;436.0,187.0&gt;--&lt;377.0,183.0&gt;&gt;/L&lt;&lt;377.0,183.0&gt;--&lt;436.0,183.0&gt;&gt; = 3.8785245028476374

* braceright (U+007D): L&lt;&lt;436.0,529.0&gt;--&lt;376.0,525.0&gt;&gt;/L&lt;&lt;376.0,525.0&gt;--&lt;436.0,525.0&gt;&gt; = 3.8140748342903783

* ccedilla (U+00E7): L&lt;&lt;189.0,-136.0&gt;--&lt;193.0,-121.0&gt;&gt;/L&lt;&lt;193.0,-121.0&gt;--&lt;188.0,-136.0&gt;&gt; = 3.503531644784471

* cedilla (U+00B8): L&lt;&lt;110.0,-136.0&gt;--&lt;114.0,-121.0&gt;&gt;/L&lt;&lt;114.0,-121.0&gt;--&lt;109.0,-136.0&gt;&gt; = 3.503531644784471

* eng (U+014B): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* f (U+0066): L&lt;&lt;182.0,523.0&gt;--&lt;241.0,523.0&gt;&gt;/L&lt;&lt;241.0,523.0&gt;--&lt;184.0,527.0&gt;&gt; = 4.0141756954110654

* florin (U+0192): L&lt;&lt;153.0,-30.0&gt;--&lt;94.0,-30.0&gt;&gt;/L&lt;&lt;94.0,-30.0&gt;--&lt;152.0,-34.0&gt;&gt; = 3.94518622903751

* florin (U+0192): L&lt;&lt;236.0,539.0&gt;--&lt;295.0,539.0&gt;&gt;/L&lt;&lt;295.0,539.0&gt;--&lt;237.0,543.0&gt;&gt; = 3.94518622903751

* h (U+0068): L&lt;&lt;477.0,258.0&gt;--&lt;537.0,258.0&gt;&gt;/L&lt;&lt;537.0,258.0&gt;--&lt;479.0,262.0&gt;&gt; = 3.94518622903751

* hbar (U+0127): L&lt;&lt;477.0,258.0&gt;--&lt;537.0,258.0&gt;&gt;/L&lt;&lt;537.0,258.0&gt;--&lt;479.0,262.0&gt;&gt; = 3.94518622903751

* hcircumflex (U+0125): L&lt;&lt;477.0,258.0&gt;--&lt;537.0,258.0&gt;&gt;/L&lt;&lt;537.0,258.0&gt;--&lt;479.0,262.0&gt;&gt; = 3.94518622903751

* ij (U+0133): L&lt;&lt;352.0,-85.0&gt;--&lt;293.0,-85.0&gt;&gt;/L&lt;&lt;293.0,-85.0&gt;--&lt;351.0,-89.0&gt;&gt; = 3.94518622903751

* integral (U+222B): L&lt;&lt;283.0,-9.0&gt;--&lt;224.0,-9.0&gt;&gt;/L&lt;&lt;224.0,-9.0&gt;--&lt;282.0,-13.0&gt;&gt; = 3.94518622903751

* integral (U+222B): L&lt;&lt;429.0,537.0&gt;--&lt;488.0,537.0&gt;&gt;/L&lt;&lt;488.0,537.0&gt;--&lt;429.0,541.0&gt;&gt; = 3.8785245028476374

* j (U+006A): L&lt;&lt;145.0,-85.0&gt;--&lt;86.0,-85.0&gt;&gt;/L&lt;&lt;86.0,-85.0&gt;--&lt;144.0,-89.0&gt;&gt; = 3.94518622903751

* jcircumflex (U+0135): L&lt;&lt;187.0,-85.0&gt;--&lt;128.0,-85.0&gt;&gt;/L&lt;&lt;128.0,-85.0&gt;--&lt;186.0,-89.0&gt;&gt; = 3.94518622903751

* l.ss01: L&lt;&lt;137.0,205.0&gt;--&lt;77.0,205.0&gt;&gt;/L&lt;&lt;77.0,205.0&gt;--&lt;135.0,201.0&gt;&gt; = 3.94518622903751

* m (U+006D): L&lt;&lt;441.0,278.0&gt;--&lt;500.0,278.0&gt;&gt;/L&lt;&lt;500.0,278.0&gt;--&lt;442.0,282.0&gt;&gt; = 3.94518622903751

* m (U+006D): L&lt;&lt;776.0,278.0&gt;--&lt;835.0,278.0&gt;&gt;/L&lt;&lt;835.0,278.0&gt;--&lt;777.0,282.0&gt;&gt; = 3.94518622903751

* n (U+006E): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* nacute (U+0144): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* ncaron (U+0148): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* ntilde (U+00F1): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* onehalf (U+00BD): L&lt;&lt;373.0,40.0&gt;--&lt;385.0,42.0&gt;&gt;/L&lt;&lt;385.0,42.0&gt;--&lt;373.0,42.0&gt;&gt; = 9.462322208025613

* scedilla (U+015F): L&lt;&lt;167.0,-136.0&gt;--&lt;171.0,-121.0&gt;&gt;/L&lt;&lt;171.0,-121.0&gt;--&lt;166.0,-136.0&gt;&gt; = 3.503531644784471

* sterling (U+00A3): L&lt;&lt;330.0,509.0&gt;--&lt;390.0,509.0&gt;&gt;/L&lt;&lt;390.0,509.0&gt;--&lt;332.0,513.0&gt;&gt; = 3.94518622903751

* t (U+0074): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* tbar (U+0167): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* tcaron (U+0165): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* two (U+0032): L&lt;&lt;53.0,89.0&gt;--&lt;80.0,94.0&gt;&gt;/L&lt;&lt;80.0,94.0&gt;--&lt;54.0,93.0&gt;&gt; = 8.288878850565794

* two.dnom: L&lt;&lt;47.0,40.0&gt;--&lt;59.0,42.0&gt;&gt;/L&lt;&lt;59.0,42.0&gt;--&lt;47.0,42.0&gt;&gt; = 9.462322208025613

* two.lf: L&lt;&lt;59.0,89.0&gt;--&lt;86.0,94.0&gt;&gt;/L&lt;&lt;86.0,94.0&gt;--&lt;60.0,93.0&gt;&gt; = 8.288878850565794

* two.numr: L&lt;&lt;47.0,425.0&gt;--&lt;59.0,427.0&gt;&gt;/L&lt;&lt;59.0,427.0&gt;--&lt;47.0,427.0&gt;&gt; = 9.462322208025613

* two.osf: L&lt;&lt;53.0,89.0&gt;--&lt;80.0,94.0&gt;&gt;/L&lt;&lt;80.0,94.0&gt;--&lt;54.0,93.0&gt;&gt; = 8.288878850565794

* two.tf: L&lt;&lt;53.0,89.0&gt;--&lt;80.0,94.0&gt;&gt;/L&lt;&lt;80.0,94.0&gt;--&lt;54.0,93.0&gt;&gt; = 8.288878850565794

* two.tosf: L&lt;&lt;53.0,89.0&gt;--&lt;80.0,94.0&gt;&gt;/L&lt;&lt;80.0,94.0&gt;--&lt;54.0,93.0&gt;&gt; = 8.288878850565794

* u (U+0075): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uacute (U+00FA): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* ubreve (U+016D): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* ucircumflex (U+00FB): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* udieresis (U+00FC): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* ugrave (U+00F9): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uhorn (U+01B0): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uhungarumlaut (U+0171): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* umacron (U+016B): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni006A0301: L&lt;&lt;145.0,-85.0&gt;--&lt;86.0,-85.0&gt;&gt;/L&lt;&lt;86.0,-85.0&gt;--&lt;144.0,-89.0&gt;&gt; = 3.94518622903751

* uni00B2 (U+00B2): L&lt;&lt;47.0,425.0&gt;--&lt;59.0,427.0&gt;&gt;/L&lt;&lt;59.0,427.0&gt;--&lt;47.0,427.0&gt;&gt; = 9.462322208025613

* uni0146 (U+0146): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* uni0146.loclMAH: L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* uni0162 (U+0162): L&lt;&lt;-2.0,-130.0&gt;--&lt;2.0,-115.0&gt;&gt;/L&lt;&lt;2.0,-115.0&gt;--&lt;-3.0,-130.0&gt;&gt; = 3.503531644784471

* uni0163 (U+0163): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* uni0163 (U+0163): L&lt;&lt;23.0,-116.0&gt;--&lt;27.0,-101.0&gt;&gt;/L&lt;&lt;27.0,-101.0&gt;--&lt;22.0,-116.0&gt;&gt; = 3.503531644784471

* uni01AD (U+01AD): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* uni021B (U+021B): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* uni0228 (U+0228): L&lt;&lt;214.0,-112.0&gt;--&lt;218.0,-97.0&gt;&gt;/L&lt;&lt;218.0,-97.0&gt;--&lt;213.0,-112.0&gt;&gt; = 3.503531644784471

* uni0229 (U+0229): L&lt;&lt;216.0,-104.0&gt;--&lt;220.0,-89.0&gt;&gt;/L&lt;&lt;220.0,-89.0&gt;--&lt;215.0,-104.0&gt;&gt; = 3.503531644784471

* uni0237 (U+0237): L&lt;&lt;187.0,-85.0&gt;--&lt;128.0,-85.0&gt;&gt;/L&lt;&lt;128.0,-85.0&gt;--&lt;186.0,-89.0&gt;&gt; = 3.94518622903751

* uni025B (U+025B): B&lt;&lt;101.0,222.0&gt;-&lt;137.0,252.0&gt;-&lt;187.0,256.0&gt;&gt;/B&lt;&lt;187.0,256.0&gt;-&lt;146.0,262.0&gt;-&lt;128.5,292.0&gt;&gt; = 12.899571590327666

* uni0265 (U+0265): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni0266 (U+0266): L&lt;&lt;477.0,258.0&gt;--&lt;537.0,258.0&gt;&gt;/L&lt;&lt;537.0,258.0&gt;--&lt;479.0,262.0&gt;&gt; = 3.94518622903751

* uni0272 (U+0272): L&lt;&lt;632.0,258.0&gt;--&lt;691.0,258.0&gt;&gt;/L&lt;&lt;691.0,258.0&gt;--&lt;633.0,262.0&gt;&gt; = 3.94518622903751

* uni0283 (U+0283): L&lt;&lt;142.0,0.0&gt;--&lt;83.0,0.0&gt;&gt;/L&lt;&lt;83.0,0.0&gt;--&lt;140.0,-4.0&gt;&gt; = 4.0141756954110654

* uni0283 (U+0283): L&lt;&lt;207.0,523.0&gt;--&lt;267.0,523.0&gt;&gt;/L&lt;&lt;267.0,523.0&gt;--&lt;209.0,527.0&gt;&gt; = 3.94518622903751

* uni0288 (U+0288): L&lt;&lt;168.0,1.0&gt;--&lt;109.0,1.0&gt;&gt;/L&lt;&lt;109.0,1.0&gt;--&lt;166.0,-3.0&gt;&gt; = 4.0141756954110654

* uni0289 (U+0289): L&lt;&lt;139.0,222.0&gt;--&lt;79.0,222.0&gt;&gt;/L&lt;&lt;79.0,222.0&gt;--&lt;137.0,218.0&gt;&gt; = 3.94518622903751

* uni028A (U+028A): B&lt;&lt;168.0,356.5&gt;-&lt;197.0,382.0&gt;-&lt;226.0,389.0&gt;&gt;/L&lt;&lt;226.0,389.0&gt;--&lt;143.0,388.0&gt;&gt; = 12.88015718729642

* uni0327 (U+0327): L&lt;&lt;160.0,-136.0&gt;--&lt;164.0,-121.0&gt;&gt;/L&lt;&lt;164.0,-121.0&gt;--&lt;159.0,-136.0&gt;&gt; = 3.503531644784471

* uni1E08 (U+1E08): L&lt;&lt;291.0,-136.0&gt;--&lt;295.0,-121.0&gt;&gt;/L&lt;&lt;295.0,-121.0&gt;--&lt;290.0,-136.0&gt;&gt; = 3.503531644784471

* uni1E09 (U+1E09): L&lt;&lt;189.0,-136.0&gt;--&lt;193.0,-121.0&gt;&gt;/L&lt;&lt;193.0,-121.0&gt;--&lt;188.0,-136.0&gt;&gt; = 3.503531644784471

* uni1E1C (U+1E1C): L&lt;&lt;214.0,-112.0&gt;--&lt;218.0,-97.0&gt;&gt;/L&lt;&lt;218.0,-97.0&gt;--&lt;213.0,-112.0&gt;&gt; = 3.503531644784471

* uni1E1D (U+1E1D): L&lt;&lt;216.0,-104.0&gt;--&lt;220.0,-89.0&gt;&gt;/L&lt;&lt;220.0,-89.0&gt;--&lt;215.0,-104.0&gt;&gt; = 3.503531644784471

* uni1E25 (U+1E25): L&lt;&lt;477.0,258.0&gt;--&lt;537.0,258.0&gt;&gt;/L&lt;&lt;537.0,258.0&gt;--&lt;479.0,262.0&gt;&gt; = 3.94518622903751

* uni1E2B (U+1E2B): L&lt;&lt;477.0,258.0&gt;--&lt;537.0,258.0&gt;&gt;/L&lt;&lt;537.0,258.0&gt;--&lt;479.0,262.0&gt;&gt; = 3.94518622903751

* uni1E3F (U+1E3F): L&lt;&lt;441.0,278.0&gt;--&lt;500.0,278.0&gt;&gt;/L&lt;&lt;500.0,278.0&gt;--&lt;442.0,282.0&gt;&gt; = 3.94518622903751

* uni1E3F (U+1E3F): L&lt;&lt;776.0,278.0&gt;--&lt;835.0,278.0&gt;&gt;/L&lt;&lt;835.0,278.0&gt;--&lt;777.0,282.0&gt;&gt; = 3.94518622903751

* uni1E43 (U+1E43): L&lt;&lt;441.0,278.0&gt;--&lt;500.0,278.0&gt;&gt;/L&lt;&lt;500.0,278.0&gt;--&lt;442.0,282.0&gt;&gt; = 3.94518622903751

* uni1E43 (U+1E43): L&lt;&lt;776.0,278.0&gt;--&lt;835.0,278.0&gt;&gt;/L&lt;&lt;835.0,278.0&gt;--&lt;777.0,282.0&gt;&gt; = 3.94518622903751

* uni1E45 (U+1E45): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* uni1E47 (U+1E47): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* uni1E49 (U+1E49): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* uni1E4B (U+1E4B): L&lt;&lt;475.0,258.0&gt;--&lt;534.0,258.0&gt;&gt;/L&lt;&lt;534.0,258.0&gt;--&lt;477.0,262.0&gt;&gt; = 4.0141756954110654

* uni1E6D (U+1E6D): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* uni1E6F (U+1E6F): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* uni1E71 (U+1E71): L&lt;&lt;114.0,201.0&gt;--&lt;54.0,201.0&gt;&gt;/L&lt;&lt;54.0,201.0&gt;--&lt;112.0,197.0&gt;&gt; = 3.94518622903751

* uni1EE5 (U+1EE5): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni1EE7 (U+1EE7): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni1EE9 (U+1EE9): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni1EEB (U+1EEB): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni1EED (U+1EED): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni1EEF (U+1EEF): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni1EF1 (U+1EF1): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uni2082 (U+2082): L&lt;&lt;47.0,40.0&gt;--&lt;59.0,42.0&gt;&gt;/L&lt;&lt;59.0,42.0&gt;--&lt;47.0,42.0&gt;&gt; = 9.462322208025613

* uni2154 (U+2154): L&lt;&lt;47.0,425.0&gt;--&lt;59.0,427.0&gt;&gt;/L&lt;&lt;59.0,427.0&gt;--&lt;47.0,427.0&gt;&gt; = 9.462322208025613

* uni2198 (U+2198): L&lt;&lt;680.0,-3.0&gt;--&lt;680.0,-3.0&gt;&gt;/L&lt;&lt;680.0,-3.0&gt;--&lt;242.0,77.0&gt;&gt; = 10.3508856549305

* uni2198 (U+2198): L&lt;&lt;687.0,-4.0&gt;--&lt;680.0,-3.0&gt;&gt;/L&lt;&lt;680.0,-3.0&gt;--&lt;680.0,-3.0&gt;&gt; = 8.13010235415596

* uogonek (U+0173): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* uring (U+016F): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751

* utilde (U+0169): L&lt;&lt;136.0,222.0&gt;--&lt;76.0,222.0&gt;&gt;/L&lt;&lt;76.0,222.0&gt;--&lt;134.0,218.0&gt;&gt; = 3.94518622903751
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[16] ElmsSans-LightItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2
</code></pre>
 [code: contour-count]



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
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* m (U+006D): L&lt;&lt;523.0,303.0&gt;--&lt;524.0,303.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;523.0,303.0&gt;--&lt;524.0,303.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;523.0,303.0&gt;--&lt;524.0,303.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
<pre><code>* arrowboth (U+2194): L&lt;&lt;137.0,262.0&gt;--&lt;128.0,276.0&gt;&gt; -&gt; L&lt;&lt;128.0,276.0&gt;--&lt;115.0,296.0&gt;&gt;

* e (U+0065): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* eacute (U+00E9): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* ecaron (U+011B): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* ecircumflex (U+00EA): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* edieresis (U+00EB): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* edotaccent (U+0117): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* egrave (U+00E8): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* emacron (U+0113): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* eng (U+014B): L&lt;&lt;397.0,-49.0&gt;--&lt;415.0,0.0&gt;&gt; -&gt; L&lt;&lt;415.0,0.0&gt;--&lt;509.0,269.0&gt;&gt;

* eng (U+014B): L&lt;&lt;577.0,267.0&gt;--&lt;483.0,0.0&gt;&gt; -&gt; L&lt;&lt;483.0,0.0&gt;--&lt;466.0,-46.0&gt;&gt;

* eogonek (U+0119): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* m (U+006D): L&lt;&lt;523.0,303.0&gt;--&lt;523.0,303.0&gt;&gt; -&gt; L&lt;&lt;523.0,303.0&gt;--&lt;524.0,303.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;125.0,392.0&gt;--&lt;158.0,389.0&gt;&gt; -&gt; L&lt;&lt;158.0,389.0&gt;--&lt;747.0,389.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;17.0,80.0&gt;--&lt;42.0,148.0&gt;&gt; -&gt; L&lt;&lt;42.0,148.0&gt;--&lt;236.0,700.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;304.0,700.0&gt;--&lt;110.0,148.0&gt;&gt; -&gt; L&lt;&lt;110.0,148.0&gt;--&lt;91.0,95.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;121.0,-67.0&gt;--&lt;144.0,0.0&gt;&gt; -&gt; L&lt;&lt;144.0,0.0&gt;--&lt;391.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;426.0,607.0&gt;--&lt;212.0,0.0&gt;&gt; -&gt; L&lt;&lt;212.0,0.0&gt;--&lt;183.0,-83.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;19.0,-280.0&gt;--&lt;287.0,480.0&gt;&gt; -&gt; L&lt;&lt;287.0,480.0&gt;--&lt;323.0,582.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;385.0,576.0&gt;--&lt;351.0,480.0&gt;&gt; -&gt; L&lt;&lt;351.0,480.0&gt;--&lt;322.0,400.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;107.0,480.0&gt;--&lt;135.0,561.0&gt;&gt; -&gt; L&lt;&lt;135.0,561.0&gt;--&lt;159.0,629.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;222.0,616.0&gt;--&lt;203.0,561.0&gt;&gt; -&gt; L&lt;&lt;203.0,561.0&gt;--&lt;175.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;-26.0,-184.0&gt;--&lt;2.0,-106.0&gt;&gt; -&gt; L&lt;&lt;2.0,-106.0&gt;--&lt;264.0,637.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;332.0,637.0&gt;--&lt;70.0,-106.0&gt;&gt; -&gt; L&lt;&lt;70.0,-106.0&gt;--&lt;45.0,-177.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;153.0,350.0&gt;--&lt;509.0,700.0&gt;&gt; -&gt; L&lt;&lt;509.0,700.0&gt;--&lt;564.0,757.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;408.0,74.0&gt;--&lt;727.0,480.0&gt;&gt; -&gt; L&lt;&lt;727.0,480.0&gt;--&lt;775.0,543.0&gt;&gt;

* uni01DD (U+01DD): L&lt;&lt;83.0,270.0&gt;--&lt;114.0,268.0&gt;&gt; -&gt; L&lt;&lt;114.0,268.0&gt;--&lt;501.0,268.0&gt;&gt;

* uni0207 (U+0207): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni0229 (U+0229): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;13.0,0.0&gt;--&lt;216.0,577.0&gt;&gt; -&gt; L&lt;&lt;216.0,577.0&gt;--&lt;240.0,645.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;300.0,632.0&gt;--&lt;280.0,577.0&gt;&gt; -&gt; L&lt;&lt;280.0,577.0&gt;--&lt;217.0,398.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;589.0,392.0&gt;--&lt;651.0,567.0&gt;&gt; -&gt; L&lt;&lt;651.0,567.0&gt;--&lt;672.0,629.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;732.0,616.0&gt;--&lt;715.0,567.0&gt;&gt; -&gt; L&lt;&lt;715.0,567.0&gt;--&lt;515.0,0.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;83.0,270.0&gt;--&lt;114.0,268.0&gt;&gt; -&gt; L&lt;&lt;114.0,268.0&gt;--&lt;501.0,268.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;689.0,394.0&gt;--&lt;706.0,440.0&gt;&gt; -&gt; L&lt;&lt;706.0,440.0&gt;--&lt;730.0,508.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;791.0,495.0&gt;--&lt;771.0,440.0&gt;&gt; -&gt; L&lt;&lt;771.0,440.0&gt;--&lt;601.0,-42.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;18.0,0.0&gt;--&lt;221.0,577.0&gt;&gt; -&gt; L&lt;&lt;221.0,577.0&gt;--&lt;245.0,645.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;306.0,632.0&gt;--&lt;286.0,577.0&gt;&gt; -&gt; L&lt;&lt;286.0,577.0&gt;--&lt;228.0,412.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;229.0,480.0&gt;--&lt;111.0,143.0&gt;&gt; -&gt; L&lt;&lt;111.0,143.0&gt;--&lt;90.0,83.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;24.0,80.0&gt;--&lt;47.0,143.0&gt;&gt; -&gt; L&lt;&lt;47.0,143.0&gt;--&lt;165.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;156.0,-39.0&gt;--&lt;170.0,0.0&gt;&gt; -&gt; L&lt;&lt;170.0,0.0&gt;--&lt;339.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;334.0,273.0&gt;--&lt;238.0,0.0&gt;&gt; -&gt; L&lt;&lt;238.0,0.0&gt;--&lt;225.0,-36.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;20.0,-63.0&gt;--&lt;43.0,0.0&gt;&gt; -&gt; L&lt;&lt;43.0,0.0&gt;--&lt;211.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;215.0,296.0&gt;--&lt;111.0,0.0&gt;&gt; -&gt; L&lt;&lt;111.0,0.0&gt;--&lt;89.0,-60.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;13.0,0.0&gt;--&lt;127.0,324.0&gt;&gt; -&gt; L&lt;&lt;127.0,324.0&gt;--&lt;151.0,392.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;214.0,379.0&gt;--&lt;195.0,324.0&gt;&gt; -&gt; L&lt;&lt;195.0,324.0&gt;--&lt;81.0,0.0&gt;&gt;

* uni1E1D (U+1E1D): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;523.0,303.0&gt;--&lt;523.0,303.0&gt;&gt; -&gt; L&lt;&lt;523.0,303.0&gt;--&lt;524.0,303.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;523.0,303.0&gt;--&lt;523.0,303.0&gt;&gt; -&gt; L&lt;&lt;523.0,303.0&gt;--&lt;524.0,303.0&gt;&gt;

* uni1EB9 (U+1EB9): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EBB (U+1EBB): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EBD (U+1EBD): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EBF (U+1EBF): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EC1 (U+1EC1): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EC3 (U+1EC3): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EC5 (U+1EC5): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni1EC7 (U+1EC7): L&lt;&lt;550.0,210.0&gt;--&lt;519.0,212.0&gt;&gt; -&gt; L&lt;&lt;519.0,212.0&gt;--&lt;132.0,212.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-16.0,-78.0&gt;--&lt;11.0,0.0&gt;&gt; -&gt; L&lt;&lt;11.0,0.0&gt;--&lt;258.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;176.0,274.0&gt;--&lt;79.0,0.0&gt;&gt; -&gt; L&lt;&lt;79.0,0.0&gt;--&lt;54.0,-71.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;957.0,717.0&gt;--&lt;926.0,674.0&gt;&gt; -&gt; L&lt;&lt;926.0,674.0&gt;--&lt;476.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* braceleft (U+007B): L&lt;&lt;157.0,537.0&gt;--&lt;191.0,537.0&gt;&gt;/L&lt;&lt;191.0,537.0&gt;--&lt;158.0,539.0&gt;&gt; = 3.468229258917096

* braceleft (U+007B): L&lt;&lt;187.0,429.0&gt;--&lt;153.0,429.0&gt;&gt;/L&lt;&lt;153.0,429.0&gt;--&lt;186.0,427.0&gt;&gt; = 3.468229258917096

* braceleft (U+007B): L&lt;&lt;32.0,183.0&gt;--&lt;66.0,183.0&gt;&gt;/L&lt;&lt;66.0,183.0&gt;--&lt;33.0,185.0&gt;&gt; = 3.468229258917096

* braceleft (U+007B): L&lt;&lt;62.0,75.0&gt;--&lt;28.0,75.0&gt;&gt;/L&lt;&lt;28.0,75.0&gt;--&lt;61.0,73.0&gt;&gt; = 3.468229258917096

* braceright (U+007D): L&lt;&lt;363.0,427.0&gt;--&lt;397.0,429.0&gt;&gt;/L&lt;&lt;397.0,429.0&gt;--&lt;364.0,429.0&gt;&gt; = 3.3664606634298315

* braceright (U+007D): L&lt;&lt;363.0,73.0&gt;--&lt;398.0,75.0&gt;&gt;/L&lt;&lt;398.0,75.0&gt;--&lt;363.0,75.0&gt;&gt; = 3.270487923183572

* braceright (U+007D): L&lt;&lt;431.0,539.0&gt;--&lt;397.0,537.0&gt;&gt;/L&lt;&lt;397.0,537.0&gt;--&lt;432.0,537.0&gt;&gt; = 3.3664606634298315

* braceright (U+007D): L&lt;&lt;432.0,185.0&gt;--&lt;398.0,183.0&gt;&gt;/L&lt;&lt;398.0,183.0&gt;--&lt;431.0,183.0&gt;&gt; = 3.3664606634298315

* eng (U+014B): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* f (U+0066): L&lt;&lt;194.0,544.0&gt;--&lt;229.0,544.0&gt;&gt;/L&lt;&lt;229.0,544.0&gt;--&lt;195.0,546.0&gt;&gt; = 3.3664606634298315

* florin (U+0192): L&lt;&lt;108.0,-31.0&gt;--&lt;74.0,-31.0&gt;&gt;/L&lt;&lt;74.0,-31.0&gt;--&lt;107.0,-33.0&gt;&gt; = 3.468229258917096

* florin (U+0192): L&lt;&lt;248.0,560.0&gt;--&lt;282.0,560.0&gt;&gt;/L&lt;&lt;282.0,560.0&gt;--&lt;249.0,562.0&gt;&gt; = 3.468229258917096

* h (U+0068): L&lt;&lt;512.0,269.0&gt;--&lt;546.0,269.0&gt;&gt;/L&lt;&lt;546.0,269.0&gt;--&lt;513.0,271.0&gt;&gt; = 3.468229258917096

* hbar (U+0127): L&lt;&lt;512.0,269.0&gt;--&lt;546.0,269.0&gt;&gt;/L&lt;&lt;546.0,269.0&gt;--&lt;513.0,271.0&gt;&gt; = 3.468229258917096

* hcircumflex (U+0125): L&lt;&lt;512.0,269.0&gt;--&lt;546.0,269.0&gt;&gt;/L&lt;&lt;546.0,269.0&gt;--&lt;513.0,271.0&gt;&gt; = 3.468229258917096

* ij (U+0133): L&lt;&lt;331.0,-97.0&gt;--&lt;297.0,-97.0&gt;&gt;/L&lt;&lt;297.0,-97.0&gt;--&lt;330.0,-99.0&gt;&gt; = 3.468229258917096

* integral (U+222B): L&lt;&lt;244.0,-35.0&gt;--&lt;211.0,-35.0&gt;&gt;/L&lt;&lt;211.0,-35.0&gt;--&lt;244.0,-37.0&gt;&gt; = 3.468229258917096

* integral (U+222B): L&lt;&lt;470.0,563.0&gt;--&lt;504.0,563.0&gt;&gt;/L&lt;&lt;504.0,563.0&gt;--&lt;471.0,565.0&gt;&gt; = 3.468229258917096

* j (U+006A): L&lt;&lt;119.0,-97.0&gt;--&lt;85.0,-97.0&gt;&gt;/L&lt;&lt;85.0,-97.0&gt;--&lt;118.0,-99.0&gt;&gt; = 3.468229258917096

* jcircumflex (U+0135): L&lt;&lt;161.0,-97.0&gt;--&lt;127.0,-97.0&gt;&gt;/L&lt;&lt;127.0,-97.0&gt;--&lt;160.0,-99.0&gt;&gt; = 3.468229258917096

* l.ss01: L&lt;&lt;90.0,183.0&gt;--&lt;56.0,183.0&gt;&gt;/L&lt;&lt;56.0,183.0&gt;--&lt;89.0,181.0&gt;&gt; = 3.468229258917096

* m (U+006D): L&lt;&lt;456.0,303.0&gt;--&lt;489.0,303.0&gt;&gt;/L&lt;&lt;489.0,303.0&gt;--&lt;456.0,305.0&gt;&gt; = 3.468229258917096

* m (U+006D): L&lt;&lt;792.0,303.0&gt;--&lt;825.0,303.0&gt;&gt;/L&lt;&lt;825.0,303.0&gt;--&lt;792.0,305.0&gt;&gt; = 3.468229258917096

* n (U+006E): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* nacute (U+0144): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* ncaron (U+0148): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* ntilde (U+00F1): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* onehalf (U+00BD): L&lt;&lt;353.0,28.0&gt;--&lt;368.0,28.0&gt;&gt;/L&lt;&lt;368.0,28.0&gt;--&lt;353.0,29.0&gt;&gt; = 3.8140748342903783

* sterling (U+00A3): L&lt;&lt;357.0,310.0&gt;--&lt;323.0,310.0&gt;&gt;/L&lt;&lt;323.0,310.0&gt;--&lt;357.0,308.0&gt;&gt; = 3.3664606634298315

* sterling (U+00A3): L&lt;&lt;365.0,525.0&gt;--&lt;399.0,525.0&gt;&gt;/L&lt;&lt;399.0,525.0&gt;--&lt;366.0,527.0&gt;&gt; = 3.468229258917096

* t (U+0074): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* tbar (U+0167): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* tcaron (U+0165): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* two (U+0032): L&lt;&lt;43.0,63.0&gt;--&lt;78.0,63.0&gt;&gt;/L&lt;&lt;78.0,63.0&gt;--&lt;44.0,65.0&gt;&gt; = 3.3664606634298315

* two.dnom: L&lt;&lt;43.0,28.0&gt;--&lt;58.0,28.0&gt;&gt;/L&lt;&lt;58.0,28.0&gt;--&lt;43.0,29.0&gt;&gt; = 3.8140748342903783

* two.lf: L&lt;&lt;68.0,63.0&gt;--&lt;103.0,63.0&gt;&gt;/L&lt;&lt;103.0,63.0&gt;--&lt;69.0,65.0&gt;&gt; = 3.3664606634298315

* two.numr: L&lt;&lt;42.0,413.0&gt;--&lt;58.0,413.0&gt;&gt;/L&lt;&lt;58.0,413.0&gt;--&lt;43.0,414.0&gt;&gt; = 3.8140748342903783

* two.osf: L&lt;&lt;43.0,63.0&gt;--&lt;78.0,63.0&gt;&gt;/L&lt;&lt;78.0,63.0&gt;--&lt;44.0,65.0&gt;&gt; = 3.3664606634298315

* two.tf: L&lt;&lt;43.0,63.0&gt;--&lt;78.0,63.0&gt;&gt;/L&lt;&lt;78.0,63.0&gt;--&lt;44.0,65.0&gt;&gt; = 3.3664606634298315

* two.tosf: L&lt;&lt;43.0,63.0&gt;--&lt;78.0,63.0&gt;&gt;/L&lt;&lt;78.0,63.0&gt;--&lt;44.0,65.0&gt;&gt; = 3.3664606634298315

* u (U+0075): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uacute (U+00FA): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* ubreve (U+016D): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* ucircumflex (U+00FB): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* udieresis (U+00FC): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* ugrave (U+00F9): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uhorn (U+01B0): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uhungarumlaut (U+0171): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* umacron (U+016B): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni006A0301: L&lt;&lt;119.0,-97.0&gt;--&lt;85.0,-97.0&gt;&gt;/L&lt;&lt;85.0,-97.0&gt;--&lt;118.0,-99.0&gt;&gt; = 3.468229258917096

* uni00B2 (U+00B2): L&lt;&lt;42.0,413.0&gt;--&lt;58.0,413.0&gt;&gt;/L&lt;&lt;58.0,413.0&gt;--&lt;43.0,414.0&gt;&gt; = 3.8140748342903783

* uni0146 (U+0146): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* uni0146.loclMAH: L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* uni0163 (U+0163): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* uni0190 (U+0190): B&lt;&lt;210.5,340.5&gt;-&lt;263.0,366.0&gt;-&lt;323.0,372.0&gt;&gt;/B&lt;&lt;323.0,372.0&gt;-&lt;270.0,378.0&gt;-&lt;234.0,400.0&gt;&gt; = 12.16940951621829

* uni01AD (U+01AD): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* uni01B1 (U+01B1): B&lt;&lt;294.0,584.0&gt;-&lt;347.0,629.0&gt;-&lt;398.0,641.0&gt;&gt;/L&lt;&lt;398.0,641.0&gt;--&lt;271.0,641.0&gt;&gt; = 13.24051991518721

* uni021B (U+021B): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* uni0237 (U+0237): L&lt;&lt;161.0,-97.0&gt;--&lt;127.0,-97.0&gt;&gt;/L&lt;&lt;127.0,-97.0&gt;--&lt;160.0,-99.0&gt;&gt; = 3.468229258917096

* uni025B (U+025B): B&lt;&lt;104.0,218.0&gt;-&lt;145.0,251.0&gt;-&lt;198.0,256.0&gt;&gt;/B&lt;&lt;198.0,256.0&gt;-&lt;152.0,262.0&gt;-&lt;131.5,292.5&gt;&gt; = 12.820719731145886

* uni0265 (U+0265): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni0266 (U+0266): L&lt;&lt;512.0,269.0&gt;--&lt;546.0,269.0&gt;&gt;/L&lt;&lt;546.0,269.0&gt;--&lt;513.0,271.0&gt;&gt; = 3.468229258917096

* uni0272 (U+0272): L&lt;&lt;666.0,269.0&gt;--&lt;701.0,269.0&gt;&gt;/L&lt;&lt;701.0,269.0&gt;--&lt;668.0,271.0&gt;&gt; = 3.468229258917096

* uni0283 (U+0283): L&lt;&lt;218.0,544.0&gt;--&lt;253.0,544.0&gt;&gt;/L&lt;&lt;253.0,544.0&gt;--&lt;219.0,546.0&gt;&gt; = 3.3664606634298315

* uni0283 (U+0283): L&lt;&lt;95.0,0.0&gt;--&lt;61.0,0.0&gt;&gt;/L&lt;&lt;61.0,0.0&gt;--&lt;94.0,-2.0&gt;&gt; = 3.468229258917096

* uni0288 (U+0288): L&lt;&lt;117.0,-25.0&gt;--&lt;82.0,-25.0&gt;&gt;/L&lt;&lt;82.0,-25.0&gt;--&lt;115.0,-28.0&gt;&gt; = 5.1944289077348

* uni0289 (U+0289): L&lt;&lt;98.0,211.0&gt;--&lt;63.0,211.0&gt;&gt;/L&lt;&lt;63.0,211.0&gt;--&lt;96.0,209.0&gt;&gt; = 3.468229258917096

* uni1E25 (U+1E25): L&lt;&lt;512.0,269.0&gt;--&lt;546.0,269.0&gt;&gt;/L&lt;&lt;546.0,269.0&gt;--&lt;513.0,271.0&gt;&gt; = 3.468229258917096

* uni1E2B (U+1E2B): L&lt;&lt;512.0,269.0&gt;--&lt;546.0,269.0&gt;&gt;/L&lt;&lt;546.0,269.0&gt;--&lt;513.0,271.0&gt;&gt; = 3.468229258917096

* uni1E3F (U+1E3F): L&lt;&lt;456.0,303.0&gt;--&lt;489.0,303.0&gt;&gt;/L&lt;&lt;489.0,303.0&gt;--&lt;456.0,305.0&gt;&gt; = 3.468229258917096

* uni1E3F (U+1E3F): L&lt;&lt;792.0,303.0&gt;--&lt;825.0,303.0&gt;&gt;/L&lt;&lt;825.0,303.0&gt;--&lt;792.0,305.0&gt;&gt; = 3.468229258917096

* uni1E43 (U+1E43): L&lt;&lt;456.0,303.0&gt;--&lt;489.0,303.0&gt;&gt;/L&lt;&lt;489.0,303.0&gt;--&lt;456.0,305.0&gt;&gt; = 3.468229258917096

* uni1E43 (U+1E43): L&lt;&lt;792.0,303.0&gt;--&lt;825.0,303.0&gt;&gt;/L&lt;&lt;825.0,303.0&gt;--&lt;792.0,305.0&gt;&gt; = 3.468229258917096

* uni1E45 (U+1E45): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* uni1E47 (U+1E47): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* uni1E49 (U+1E49): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* uni1E4B (U+1E4B): L&lt;&lt;509.0,269.0&gt;--&lt;544.0,269.0&gt;&gt;/L&lt;&lt;544.0,269.0&gt;--&lt;511.0,271.0&gt;&gt; = 3.468229258917096

* uni1E6D (U+1E6D): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* uni1E6F (U+1E6F): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* uni1E71 (U+1E71): L&lt;&lt;67.0,175.0&gt;--&lt;32.0,175.0&gt;&gt;/L&lt;&lt;32.0,175.0&gt;--&lt;65.0,172.0&gt;&gt; = 5.1944289077348

* uni1EE5 (U+1EE5): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni1EE7 (U+1EE7): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni1EE9 (U+1EE9): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni1EEB (U+1EEB): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni1EED (U+1EED): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni1EEF (U+1EEF): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni1EF1 (U+1EF1): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uni2082 (U+2082): L&lt;&lt;43.0,28.0&gt;--&lt;58.0,28.0&gt;&gt;/L&lt;&lt;58.0,28.0&gt;--&lt;43.0,29.0&gt;&gt; = 3.8140748342903783

* uni2154 (U+2154): L&lt;&lt;42.0,413.0&gt;--&lt;58.0,413.0&gt;&gt;/L&lt;&lt;58.0,413.0&gt;--&lt;43.0,414.0&gt;&gt; = 3.8140748342903783

* uni2198 (U+2198): L&lt;&lt;666.0,17.0&gt;--&lt;666.0,17.0&gt;&gt;/L&lt;&lt;666.0,17.0&gt;--&lt;234.0,95.0&gt;&gt; = 10.234802763423207

* uni2198 (U+2198): L&lt;&lt;674.0,16.0&gt;--&lt;666.0,17.0&gt;&gt;/L&lt;&lt;666.0,17.0&gt;--&lt;666.0,17.0&gt;&gt; = 7.125016348901757

* uogonek (U+0173): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* uring (U+016F): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096

* utilde (U+0169): L&lt;&lt;90.0,211.0&gt;--&lt;55.0,211.0&gt;&gt;/L&lt;&lt;55.0,211.0&gt;--&lt;88.0,209.0&gt;&gt; = 3.468229258917096
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[14] ElmsSans-ExtraBoldItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: m	Contours detected: 3	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: utilde	Contours detected: 3	Expected: 2

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni0E3F	Contours detected: 4	Expected: 3 or 5

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E3F	Contours detected: 4	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E43	Contours detected: 4	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: m	Contours detected: 3	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni0E3F	Contours detected: 4	Expected: 3 or 5

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E3F	Contours detected: 4	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E43	Contours detected: 4	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: utilde	Contours detected: 3	Expected: 2
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* h (U+0068): L&lt;&lt;613.0,242.0&gt;--&lt;613.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* hbar (U+0127): L&lt;&lt;613.0,242.0&gt;--&lt;613.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E2B (U+1E2B): L&lt;&lt;613.0,242.0&gt;--&lt;613.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* hcircumflex (U+0125): L&lt;&lt;613.0,242.0&gt;--&lt;613.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E25 (U+1E25): L&lt;&lt;613.0,242.0&gt;--&lt;613.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* uni0266 (U+0266): L&lt;&lt;613.0,242.0&gt;--&lt;613.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* uni0265 (U+0265): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* n (U+006E): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* nacute (U+0144): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* ncaron (U+0148): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E4B (U+1E4B): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146 (U+0146): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0146.loclMAH: L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E45 (U+1E45): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E47 (U+1E47): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;758.0,242.0&gt;--&lt;758.0,242.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;393.0,247.0&gt;--&lt;393.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;393.0,247.0&gt;--&lt;393.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni0272 (U+0272): L&lt;&lt;393.0,247.0&gt;--&lt;393.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E49 (U+1E49): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* ntilde (U+00F1): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* eng (U+014B): L&lt;&lt;243.0,247.0&gt;--&lt;243.0,247.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;241.0,241.0&gt;--&lt;242.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;242.0,241.0&gt;--&lt;241.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;241.0,241.0&gt;--&lt;242.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;242.0,241.0&gt;--&lt;241.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;241.0,241.0&gt;--&lt;242.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;242.0,241.0&gt;--&lt;241.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;241.0,241.0&gt;--&lt;242.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;242.0,241.0&gt;--&lt;241.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;254.0,241.0&gt;--&lt;255.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;255.0,241.0&gt;--&lt;254.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;275.0,241.0&gt;--&lt;275.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;275.0,241.0&gt;--&lt;275.0,241.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* u (U+0075): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uacute (U+00FA): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;14.0,238.0&gt;--&lt;14.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;379.0,233.0&gt;--&lt;379.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;379.0,233.0&gt;--&lt;379.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni0289 (U+0289): L&lt;&lt;379.0,233.0&gt;--&lt;379.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ubreve (U+016D): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ucircumflex (U+00FB): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* udieresis (U+00FC): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE5 (U+1EE5): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* ugrave (U+00F9): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE7 (U+1EE7): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uhorn (U+01B0): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EE9 (U+1EE9): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EF1 (U+1EF1): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEB (U+1EEB): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EED (U+1EED): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uni1EEF (U+1EEF): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uhungarumlaut (U+0171): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* umacron (U+016B): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uogonek (U+0173): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* uring (U+016F): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;20.0,238.0&gt;--&lt;20.0,238.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.

* utilde (U+0169): L&lt;&lt;385.0,233.0&gt;--&lt;385.0,233.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* Ccedilla (U+00C7): L&lt;&lt;291.0,-148.0&gt;--&lt;296.0,-127.0&gt;&gt;/L&lt;&lt;296.0,-127.0&gt;--&lt;288.0,-148.0&gt;&gt; = 7.461960285827247

* Scedilla (U+015E): L&lt;&lt;213.0,-148.0&gt;--&lt;218.0,-127.0&gt;&gt;/L&lt;&lt;218.0,-127.0&gt;--&lt;210.0,-148.0&gt;&gt; = 7.461960285827247

* braceleft (U+007B): L&lt;&lt;12.0,183.0&gt;--&lt;87.0,183.0&gt;&gt;/L&lt;&lt;87.0,183.0&gt;--&lt;14.0,188.0&gt;&gt; = 3.918248864067394

* braceleft (U+007B): L&lt;&lt;128.0,513.0&gt;--&lt;204.0,513.0&gt;&gt;/L&lt;&lt;204.0,513.0&gt;--&lt;130.0,518.0&gt;&gt; = 3.8654611698517494

* braceleft (U+007B): L&lt;&lt;133.0,99.0&gt;--&lt;58.0,99.0&gt;&gt;/L&lt;&lt;58.0,99.0&gt;--&lt;131.0,94.0&gt;&gt; = 3.918248864067301

* braceleft (U+007B): L&lt;&lt;249.0,429.0&gt;--&lt;174.0,429.0&gt;&gt;/L&lt;&lt;174.0,429.0&gt;--&lt;247.0,424.0&gt;&gt; = 3.918248864067301

* braceright (U+007D): L&lt;&lt;315.0,424.0&gt;--&lt;390.0,429.0&gt;&gt;/L&lt;&lt;390.0,429.0&gt;--&lt;315.0,429.0&gt;&gt; = 3.8140748342903783

* braceright (U+007D): L&lt;&lt;315.0,94.0&gt;--&lt;390.0,99.0&gt;&gt;/L&lt;&lt;390.0,99.0&gt;--&lt;315.0,99.0&gt;&gt; = 3.8140748342903783

* braceright (U+007D): L&lt;&lt;465.0,188.0&gt;--&lt;390.0,183.0&gt;&gt;/L&lt;&lt;390.0,183.0&gt;--&lt;465.0,183.0&gt;&gt; = 3.8140748342903783

* braceright (U+007D): L&lt;&lt;465.0,518.0&gt;--&lt;390.0,513.0&gt;&gt;/L&lt;&lt;390.0,513.0&gt;--&lt;465.0,513.0&gt;&gt; = 3.8140748342903783

* ccedilla (U+00E7): L&lt;&lt;189.0,-148.0&gt;--&lt;194.0,-127.0&gt;&gt;/L&lt;&lt;194.0,-127.0&gt;--&lt;186.0,-148.0&gt;&gt; = 7.461960285827247

* cedilla (U+00B8): L&lt;&lt;111.0,-148.0&gt;--&lt;116.0,-127.0&gt;&gt;/L&lt;&lt;116.0,-127.0&gt;--&lt;108.0,-148.0&gt;&gt; = 7.461960285827247

* eng (U+014B): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* f (U+0066): L&lt;&lt;177.0,510.0&gt;--&lt;252.0,510.0&gt;&gt;/L&lt;&lt;252.0,510.0&gt;--&lt;179.0,514.0&gt;&gt; = 3.136358368332572

* florin (U+0192): L&lt;&lt;182.0,-37.0&gt;--&lt;107.0,-37.0&gt;&gt;/L&lt;&lt;107.0,-37.0&gt;--&lt;180.0,-41.0&gt;&gt; = 3.136358368332572

* florin (U+0192): L&lt;&lt;231.0,526.0&gt;--&lt;305.0,526.0&gt;&gt;/L&lt;&lt;305.0,526.0&gt;--&lt;233.0,530.0&gt;&gt; = 3.1798301198641643

* h (U+0068): L&lt;&lt;465.0,247.0&gt;--&lt;540.0,247.0&gt;&gt;/L&lt;&lt;540.0,247.0&gt;--&lt;467.0,251.0&gt;&gt; = 3.136358368332572

* hbar (U+0127): L&lt;&lt;465.0,247.0&gt;--&lt;540.0,247.0&gt;&gt;/L&lt;&lt;540.0,247.0&gt;--&lt;467.0,251.0&gt;&gt; = 3.136358368332572

* hcircumflex (U+0125): L&lt;&lt;465.0,247.0&gt;--&lt;540.0,247.0&gt;&gt;/L&lt;&lt;540.0,247.0&gt;--&lt;467.0,251.0&gt;&gt; = 3.136358368332572

* ij (U+0133): L&lt;&lt;372.0,-73.0&gt;--&lt;297.0,-73.0&gt;&gt;/L&lt;&lt;297.0,-73.0&gt;--&lt;370.0,-78.0&gt;&gt; = 3.918248864067301

* integral (U+222B): L&lt;&lt;308.0,7.0&gt;--&lt;234.0,7.0&gt;&gt;/L&lt;&lt;234.0,7.0&gt;--&lt;307.0,2.0&gt;&gt; = 3.918248864067301

* integral (U+222B): L&lt;&lt;404.0,521.0&gt;--&lt;479.0,521.0&gt;&gt;/L&lt;&lt;479.0,521.0&gt;--&lt;405.0,526.0&gt;&gt; = 3.8654611698517494

* j (U+006A): L&lt;&lt;165.0,-73.0&gt;--&lt;90.0,-73.0&gt;&gt;/L&lt;&lt;90.0,-73.0&gt;--&lt;163.0,-78.0&gt;&gt; = 3.918248864067301

* jcircumflex (U+0135): L&lt;&lt;207.0,-73.0&gt;--&lt;132.0,-73.0&gt;&gt;/L&lt;&lt;132.0,-73.0&gt;--&lt;205.0,-78.0&gt;&gt; = 3.918248864067301

* l.ss01: L&lt;&lt;172.0,226.0&gt;--&lt;98.0,226.0&gt;&gt;/L&lt;&lt;98.0,226.0&gt;--&lt;171.0,222.0&gt;&gt; = 3.136358368332572

* m (U+006D): L&lt;&lt;434.0,262.0&gt;--&lt;509.0,262.0&gt;&gt;/L&lt;&lt;509.0,262.0&gt;--&lt;436.0,267.0&gt;&gt; = 3.918248864067394

* m (U+006D): L&lt;&lt;769.0,262.0&gt;--&lt;843.0,262.0&gt;&gt;/L&lt;&lt;843.0,262.0&gt;--&lt;770.0,267.0&gt;&gt; = 3.918248864067394

* n (U+006E): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* nacute (U+0144): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* ncaron (U+0148): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* ntilde (U+00F1): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* onehalf (U+00BD): L&lt;&lt;392.0,44.0&gt;--&lt;409.0,48.0&gt;&gt;/L&lt;&lt;409.0,48.0&gt;--&lt;393.0,46.0&gt;&gt; = 6.115503566285384

* scedilla (U+015F): L&lt;&lt;177.0,-148.0&gt;--&lt;182.0,-127.0&gt;&gt;/L&lt;&lt;182.0,-127.0&gt;--&lt;174.0,-148.0&gt;&gt; = 7.461960285827247

* sterling (U+00A3): L&lt;&lt;314.0,493.0&gt;--&lt;389.0,493.0&gt;&gt;/L&lt;&lt;389.0,493.0&gt;--&lt;316.0,498.0&gt;&gt; = 3.918248864067394

* t (U+0074): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* tbar (U+0167): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* tcaron (U+0165): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* two (U+0032): L&lt;&lt;60.0,98.0&gt;--&lt;98.0,107.0&gt;&gt;/L&lt;&lt;98.0,107.0&gt;--&lt;62.0,102.0&gt;&gt; = 5.417368558932294

* two.dnom: L&lt;&lt;50.0,44.0&gt;--&lt;67.0,48.0&gt;&gt;/L&lt;&lt;67.0,48.0&gt;--&lt;51.0,46.0&gt;&gt; = 6.115503566285384

* two.lf: L&lt;&lt;47.0,98.0&gt;--&lt;85.0,107.0&gt;&gt;/L&lt;&lt;85.0,107.0&gt;--&lt;49.0,102.0&gt;&gt; = 5.417368558932294

* two.numr: L&lt;&lt;50.0,429.0&gt;--&lt;67.0,433.0&gt;&gt;/L&lt;&lt;67.0,433.0&gt;--&lt;51.0,431.0&gt;&gt; = 6.115503566285384

* two.osf: L&lt;&lt;60.0,98.0&gt;--&lt;98.0,107.0&gt;&gt;/L&lt;&lt;98.0,107.0&gt;--&lt;62.0,102.0&gt;&gt; = 5.417368558932294

* two.tf: L&lt;&lt;60.0,98.0&gt;--&lt;98.0,107.0&gt;&gt;/L&lt;&lt;98.0,107.0&gt;--&lt;62.0,102.0&gt;&gt; = 5.417368558932294

* two.tosf: L&lt;&lt;60.0,98.0&gt;--&lt;98.0,107.0&gt;&gt;/L&lt;&lt;98.0,107.0&gt;--&lt;62.0,102.0&gt;&gt; = 5.417368558932294

* u (U+0075): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uacute (U+00FA): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* ubreve (U+016D): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* ucircumflex (U+00FB): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* udieresis (U+00FC): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* ugrave (U+00F9): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uhorn (U+01B0): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uhungarumlaut (U+0171): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* umacron (U+016B): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni006A0301: L&lt;&lt;165.0,-73.0&gt;--&lt;90.0,-73.0&gt;&gt;/L&lt;&lt;90.0,-73.0&gt;--&lt;163.0,-78.0&gt;&gt; = 3.918248864067301

* uni00B2 (U+00B2): L&lt;&lt;50.0,429.0&gt;--&lt;67.0,433.0&gt;&gt;/L&lt;&lt;67.0,433.0&gt;--&lt;51.0,431.0&gt;&gt; = 6.115503566285384

* uni0146 (U+0146): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* uni0146.loclMAH: L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* uni0162 (U+0162): L&lt;&lt;17.0,-141.0&gt;--&lt;22.0,-120.0&gt;&gt;/L&lt;&lt;22.0,-120.0&gt;--&lt;14.0,-141.0&gt;&gt; = 7.461960285827247

* uni0163 (U+0163): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* uni0163 (U+0163): L&lt;&lt;44.0,-128.0&gt;--&lt;49.0,-107.0&gt;&gt;/L&lt;&lt;49.0,-107.0&gt;--&lt;41.0,-128.0&gt;&gt; = 7.461960285827247

* uni01AD (U+01AD): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* uni021B (U+021B): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* uni0228 (U+0228): L&lt;&lt;212.0,-140.0&gt;--&lt;217.0,-119.0&gt;&gt;/L&lt;&lt;217.0,-119.0&gt;--&lt;209.0,-140.0&gt;&gt; = 7.461960285827247

* uni0229 (U+0229): L&lt;&lt;223.0,-116.0&gt;--&lt;228.0,-95.0&gt;&gt;/L&lt;&lt;228.0,-95.0&gt;--&lt;220.0,-116.0&gt;&gt; = 7.461960285827247

* uni0237 (U+0237): L&lt;&lt;207.0,-73.0&gt;--&lt;132.0,-73.0&gt;&gt;/L&lt;&lt;132.0,-73.0&gt;--&lt;205.0,-78.0&gt;&gt; = 3.918248864067301

* uni025B (U+025B): B&lt;&lt;101.0,222.0&gt;-&lt;136.0,252.0&gt;-&lt;188.0,257.0&gt;&gt;/B&lt;&lt;188.0,257.0&gt;-&lt;148.0,263.0&gt;-&lt;129.5,293.0&gt;&gt; = 14.02309016707556

* uni0265 (U+0265): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni0266 (U+0266): L&lt;&lt;465.0,247.0&gt;--&lt;540.0,247.0&gt;&gt;/L&lt;&lt;540.0,247.0&gt;--&lt;467.0,251.0&gt;&gt; = 3.136358368332572

* uni0272 (U+0272): L&lt;&lt;611.0,247.0&gt;--&lt;685.0,247.0&gt;&gt;/L&lt;&lt;685.0,247.0&gt;--&lt;613.0,251.0&gt;&gt; = 3.1798301198641643

* uni0283 (U+0283): L&lt;&lt;178.0,0.0&gt;--&lt;104.0,0.0&gt;&gt;/L&lt;&lt;104.0,0.0&gt;--&lt;176.0,-5.0&gt;&gt; = 3.9724959407506057

* uni0283 (U+0283): L&lt;&lt;208.0,510.0&gt;--&lt;283.0,510.0&gt;&gt;/L&lt;&lt;283.0,510.0&gt;--&lt;210.0,514.0&gt;&gt; = 3.136358368332572

* uni0288 (U+0288): L&lt;&lt;201.0,18.0&gt;--&lt;127.0,18.0&gt;&gt;/L&lt;&lt;127.0,18.0&gt;--&lt;199.0,14.0&gt;&gt; = 3.1798301198641643

* uni0289 (U+0289): L&lt;&lt;161.0,233.0&gt;--&lt;87.0,233.0&gt;&gt;/L&lt;&lt;87.0,233.0&gt;--&lt;160.0,229.0&gt;&gt; = 3.136358368332572

* uni028A (U+028A): B&lt;&lt;126.0,317.0&gt;-&lt;165.0,363.0&gt;-&lt;206.0,374.0&gt;&gt;/L&lt;&lt;206.0,374.0&gt;--&lt;129.0,372.0&gt;&gt; = 13.530493102322872

* uni0327 (U+0327): L&lt;&lt;169.0,-148.0&gt;--&lt;174.0,-127.0&gt;&gt;/L&lt;&lt;174.0,-127.0&gt;--&lt;166.0,-148.0&gt;&gt; = 7.461960285827247

* uni1E08 (U+1E08): L&lt;&lt;291.0,-148.0&gt;--&lt;296.0,-127.0&gt;&gt;/L&lt;&lt;296.0,-127.0&gt;--&lt;288.0,-148.0&gt;&gt; = 7.461960285827247

* uni1E09 (U+1E09): L&lt;&lt;189.0,-148.0&gt;--&lt;194.0,-127.0&gt;&gt;/L&lt;&lt;194.0,-127.0&gt;--&lt;186.0,-148.0&gt;&gt; = 7.461960285827247

* uni1E1C (U+1E1C): L&lt;&lt;212.0,-140.0&gt;--&lt;217.0,-119.0&gt;&gt;/L&lt;&lt;217.0,-119.0&gt;--&lt;209.0,-140.0&gt;&gt; = 7.461960285827247

* uni1E1D (U+1E1D): L&lt;&lt;223.0,-116.0&gt;--&lt;228.0,-95.0&gt;&gt;/L&lt;&lt;228.0,-95.0&gt;--&lt;220.0,-116.0&gt;&gt; = 7.461960285827247

* uni1E25 (U+1E25): L&lt;&lt;465.0,247.0&gt;--&lt;540.0,247.0&gt;&gt;/L&lt;&lt;540.0,247.0&gt;--&lt;467.0,251.0&gt;&gt; = 3.136358368332572

* uni1E2B (U+1E2B): L&lt;&lt;465.0,247.0&gt;--&lt;540.0,247.0&gt;&gt;/L&lt;&lt;540.0,247.0&gt;--&lt;467.0,251.0&gt;&gt; = 3.136358368332572

* uni1E3F (U+1E3F): L&lt;&lt;434.0,262.0&gt;--&lt;509.0,262.0&gt;&gt;/L&lt;&lt;509.0,262.0&gt;--&lt;436.0,267.0&gt;&gt; = 3.918248864067394

* uni1E3F (U+1E3F): L&lt;&lt;769.0,262.0&gt;--&lt;843.0,262.0&gt;&gt;/L&lt;&lt;843.0,262.0&gt;--&lt;770.0,267.0&gt;&gt; = 3.918248864067394

* uni1E43 (U+1E43): L&lt;&lt;434.0,262.0&gt;--&lt;509.0,262.0&gt;&gt;/L&lt;&lt;509.0,262.0&gt;--&lt;436.0,267.0&gt;&gt; = 3.918248864067394

* uni1E43 (U+1E43): L&lt;&lt;769.0,262.0&gt;--&lt;843.0,262.0&gt;&gt;/L&lt;&lt;843.0,262.0&gt;--&lt;770.0,267.0&gt;&gt; = 3.918248864067394

* uni1E45 (U+1E45): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* uni1E47 (U+1E47): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* uni1E49 (U+1E49): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* uni1E4B (U+1E4B): L&lt;&lt;461.0,247.0&gt;--&lt;536.0,247.0&gt;&gt;/L&lt;&lt;536.0,247.0&gt;--&lt;463.0,251.0&gt;&gt; = 3.136358368332572

* uni1E6D (U+1E6D): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* uni1E6F (U+1E6F): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* uni1E71 (U+1E71): L&lt;&lt;145.0,218.0&gt;--&lt;71.0,218.0&gt;&gt;/L&lt;&lt;71.0,218.0&gt;--&lt;143.0,214.0&gt;&gt; = 3.1798301198641643

* uni1EE5 (U+1EE5): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni1EE7 (U+1EE7): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni1EE9 (U+1EE9): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni1EEB (U+1EEB): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni1EED (U+1EED): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni1EEF (U+1EEF): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni1EF1 (U+1EF1): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uni2082 (U+2082): L&lt;&lt;50.0,44.0&gt;--&lt;67.0,48.0&gt;&gt;/L&lt;&lt;67.0,48.0&gt;--&lt;51.0,46.0&gt;&gt; = 6.115503566285384

* uni2154 (U+2154): L&lt;&lt;50.0,429.0&gt;--&lt;67.0,433.0&gt;&gt;/L&lt;&lt;67.0,433.0&gt;--&lt;51.0,431.0&gt;&gt; = 6.115503566285384

* uni2198 (U+2198): L&lt;&lt;682.0,-15.0&gt;--&lt;682.0,-15.0&gt;&gt;/L&lt;&lt;682.0,-15.0&gt;--&lt;243.0,65.0&gt;&gt; = 10.327815310796034

* uogonek (U+0173): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* uring (U+016F): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572

* utilde (U+0169): L&lt;&lt;167.0,233.0&gt;--&lt;93.0,233.0&gt;&gt;/L&lt;&lt;93.0,233.0&gt;--&lt;166.0,229.0&gt;&gt; = 3.136358368332572
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[15] ElmsSans-MediumItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.4)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: utilde	Contours detected: 3	Expected: 2

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eng	Contours detected: 2	Expected: 1

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: h	Contours detected: 2	Expected: 1

- Glyph name: hbar	Contours detected: 3	Expected: 1

- Glyph name: hcircumflex	Contours detected: 3	Expected: 2

- Glyph name: n	Contours detected: 2	Expected: 1

- Glyph name: nacute	Contours detected: 3	Expected: 2

- Glyph name: ncaron	Contours detected: 3	Expected: 2

- Glyph name: ntilde	Contours detected: 3	Expected: 2

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: u	Contours detected: 2	Expected: 1

- Glyph name: uacute	Contours detected: 3	Expected: 2

- Glyph name: ubreve	Contours detected: 3	Expected: 2

- Glyph name: ucircumflex	Contours detected: 3	Expected: 2

- Glyph name: udieresis	Contours detected: 4	Expected: 3

- Glyph name: ugrave	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 3	Expected: 1

- Glyph name: uhungarumlaut	Contours detected: 4	Expected: 3

- Glyph name: umacron	Contours detected: 3	Expected: 2

- Glyph name: uni0146	Contours detected: 3	Expected: 2

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni0272	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E25	Contours detected: 3	Expected: 2

- Glyph name: uni1E2B	Contours detected: 3	Expected: 2

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

- Glyph name: uni1E45	Contours detected: 3	Expected: 2

- Glyph name: uni1E47	Contours detected: 3	Expected: 2

- Glyph name: uni1E49	Contours detected: 3	Expected: 2

- Glyph name: uni1EDB	Contours detected: 4	Expected: 3

- Glyph name: uni1EDD	Contours detected: 4	Expected: 3

- Glyph name: uni1EDF	Contours detected: 4	Expected: 3

- Glyph name: uni1EE1	Contours detected: 4	Expected: 3

- Glyph name: uni1EE3	Contours detected: 4	Expected: 3

- Glyph name: uni1EE5	Contours detected: 3	Expected: 2

- Glyph name: uni1EE7	Contours detected: 3	Expected: 2

- Glyph name: uni1EE8	Contours detected: 3	Expected: 2

- Glyph name: uni1EE9	Contours detected: 4	Expected: 2

- Glyph name: uni1EEA	Contours detected: 3	Expected: 2

- Glyph name: uni1EEB	Contours detected: 4	Expected: 2

- Glyph name: uni1EEC	Contours detected: 3	Expected: 2

- Glyph name: uni1EED	Contours detected: 4	Expected: 2

- Glyph name: uni1EEE	Contours detected: 3	Expected: 2

- Glyph name: uni1EEF	Contours detected: 4	Expected: 2

- Glyph name: uni1EF0	Contours detected: 3	Expected: 2

- Glyph name: uni1EF1	Contours detected: 4	Expected: 2

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 3	Expected: 1

- Glyph name: uring	Contours detected: 4	Expected: 3

- Glyph name: utilde	Contours detected: 3	Expected: 2

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;616.0,0.0&gt;--&lt;616.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;548.0,286.0&gt;--&lt;548.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* m (U+006D): L&lt;&lt;547.0,286.0&gt;--&lt;548.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;548.0,286.0&gt;--&lt;548.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;547.0,286.0&gt;--&lt;548.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;548.0,286.0&gt;--&lt;548.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;547.0,286.0&gt;--&lt;548.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* r (U+0072): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* racute (U+0155): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* rcaron (U+0159): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* uni0157 (U+0157): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;217.0,277.0&gt;--&lt;217.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* uni024D (U+024D): L&lt;&lt;217.0,277.0&gt;--&lt;217.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;240.0,277.0&gt;--&lt;240.0,277.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;240.0,277.0&gt;--&lt;240.0,277.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
<pre><code>* Eng (U+014A): L&lt;&lt;616.0,0.0&gt;--&lt;616.0,0.0&gt;&gt; -&gt; L&lt;&lt;616.0,0.0&gt;--&lt;616.0,0.0&gt;&gt;

* arrowboth (U+2194): L&lt;&lt;148.0,238.0&gt;--&lt;132.0,263.0&gt;&gt; -&gt; L&lt;&lt;132.0,263.0&gt;--&lt;114.0,291.0&gt;&gt;

* e (U+0065): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* eacute (U+00E9): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* ecaron (U+011B): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* ecircumflex (U+00EA): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* edieresis (U+00EB): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* edotaccent (U+0117): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* egrave (U+00E8): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* emacron (U+0113): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* eng (U+014B): L&lt;&lt;373.0,-43.0&gt;--&lt;389.0,0.0&gt;&gt; -&gt; L&lt;&lt;389.0,0.0&gt;--&lt;482.0,263.0&gt;&gt;

* eng (U+014B): L&lt;&lt;584.0,260.0&gt;--&lt;492.0,0.0&gt;&gt; -&gt; L&lt;&lt;492.0,0.0&gt;--&lt;478.0,-38.0&gt;&gt;

* eogonek (U+0119): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* five.dnom: L&lt;&lt;71.0,162.0&gt;--&lt;71.0,163.0&gt;&gt; -&gt; L&lt;&lt;71.0,163.0&gt;--&lt;71.0,164.0&gt;&gt;

* five.numr: L&lt;&lt;71.0,547.0&gt;--&lt;71.0,548.0&gt;&gt; -&gt; L&lt;&lt;71.0,548.0&gt;--&lt;71.0,549.0&gt;&gt;

* fiveeighths (U+215D): L&lt;&lt;71.0,547.0&gt;--&lt;71.0,548.0&gt;&gt; -&gt; L&lt;&lt;71.0,548.0&gt;--&lt;71.0,549.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;539.0,253.0&gt;&gt; -&gt; L&lt;&lt;539.0,253.0&gt;--&lt;525.0,214.0&gt;&gt;

* m (U+006D): L&lt;&lt;547.0,286.0&gt;--&lt;547.0,286.0&gt;&gt; -&gt; L&lt;&lt;547.0,286.0&gt;--&lt;548.0,286.0&gt;&gt;

* r (U+0072): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; -&gt; L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt;

* racute (U+0155): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; -&gt; L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt;

* rcaron (U+0159): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; -&gt; L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt;

* uni0157 (U+0157): L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt; -&gt; L&lt;&lt;209.0,277.0&gt;--&lt;209.0,277.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;121.0,397.0&gt;--&lt;175.0,394.0&gt;&gt; -&gt; L&lt;&lt;175.0,394.0&gt;--&lt;709.0,394.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;11.0,83.0&gt;--&lt;39.0,163.0&gt;&gt; -&gt; L&lt;&lt;39.0,163.0&gt;--&lt;228.0,700.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;332.0,700.0&gt;--&lt;143.0,163.0&gt;&gt; -&gt; L&lt;&lt;143.0,163.0&gt;--&lt;125.0,113.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;100.0,-67.0&gt;--&lt;124.0,0.0&gt;&gt; -&gt; L&lt;&lt;124.0,0.0&gt;--&lt;370.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;425.0,561.0&gt;--&lt;227.0,0.0&gt;&gt; -&gt; L&lt;&lt;227.0,0.0&gt;--&lt;194.0,-94.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;14.0,-280.0&gt;--&lt;282.0,480.0&gt;&gt; -&gt; L&lt;&lt;282.0,480.0&gt;--&lt;317.0,579.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;409.0,562.0&gt;--&lt;380.0,480.0&gt;&gt; -&gt; L&lt;&lt;380.0,480.0&gt;--&lt;362.0,430.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;243.0,603.0&gt;--&lt;226.0,554.0&gt;&gt; -&gt; L&lt;&lt;226.0,554.0&gt;--&lt;200.0,480.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;97.0,480.0&gt;--&lt;123.0,554.0&gt;&gt; -&gt; L&lt;&lt;123.0,554.0&gt;--&lt;147.0,625.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;-26.0,-177.0&gt;--&lt;5.0,-89.0&gt;&gt; -&gt; L&lt;&lt;5.0,-89.0&gt;--&lt;249.0,603.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;352.0,603.0&gt;--&lt;109.0,-89.0&gt;&gt; -&gt; L&lt;&lt;109.0,-89.0&gt;--&lt;83.0,-162.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;183.0,381.0&gt;--&lt;509.0,700.0&gt;&gt; -&gt; L&lt;&lt;509.0,700.0&gt;--&lt;570.0,764.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;440.0,114.0&gt;--&lt;727.0,480.0&gt;&gt; -&gt; L&lt;&lt;727.0,480.0&gt;--&lt;780.0,550.0&gt;&gt;

* uni01DD (U+01DD): L&lt;&lt;77.0,275.0&gt;--&lt;126.0,271.0&gt;&gt; -&gt; L&lt;&lt;126.0,271.0&gt;--&lt;463.0,271.0&gt;&gt;

* uni0207 (U+0207): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni0229 (U+0229): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni024D (U+024D): L&lt;&lt;217.0,277.0&gt;--&lt;217.0,277.0&gt;&gt; -&gt; L&lt;&lt;217.0,277.0&gt;--&lt;217.0,277.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;323.0,616.0&gt;--&lt;306.0,567.0&gt;&gt; -&gt; L&lt;&lt;306.0,567.0&gt;--&lt;257.0,428.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;8.0,0.0&gt;--&lt;207.0,567.0&gt;&gt; -&gt; L&lt;&lt;207.0,567.0&gt;--&lt;234.0,643.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;562.0,418.0&gt;--&lt;608.0,551.0&gt;&gt; -&gt; L&lt;&lt;608.0,551.0&gt;--&lt;635.0,627.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;723.0,600.0&gt;--&lt;706.0,551.0&gt;&gt; -&gt; L&lt;&lt;706.0,551.0&gt;--&lt;512.0,0.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;77.0,275.0&gt;--&lt;126.0,271.0&gt;&gt; -&gt; L&lt;&lt;126.0,271.0&gt;--&lt;463.0,271.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;657.0,419.0&gt;--&lt;667.0,446.0&gt;&gt; -&gt; L&lt;&lt;667.0,446.0&gt;--&lt;693.0,518.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;783.0,491.0&gt;--&lt;767.0,446.0&gt;&gt; -&gt; L&lt;&lt;767.0,446.0&gt;--&lt;595.0,-43.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;13.0,0.0&gt;--&lt;212.0,567.0&gt;&gt; -&gt; L&lt;&lt;212.0,567.0&gt;--&lt;239.0,643.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;330.0,615.0&gt;--&lt;312.0,567.0&gt;&gt; -&gt; L&lt;&lt;312.0,567.0&gt;--&lt;265.0,433.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;19.0,83.0&gt;--&lt;44.0,153.0&gt;&gt; -&gt; L&lt;&lt;44.0,153.0&gt;--&lt;159.0,480.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;257.0,480.0&gt;--&lt;142.0,153.0&gt;&gt; -&gt; L&lt;&lt;142.0,153.0&gt;--&lt;123.0,98.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;156.0,-35.0&gt;--&lt;168.0,0.0&gt;&gt; -&gt; L&lt;&lt;168.0,0.0&gt;--&lt;337.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;365.0,267.0&gt;--&lt;272.0,0.0&gt;&gt; -&gt; L&lt;&lt;272.0,0.0&gt;--&lt;260.0,-30.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;15.0,-68.0&gt;--&lt;40.0,0.0&gt;&gt; -&gt; L&lt;&lt;40.0,0.0&gt;--&lt;208.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;240.0,277.0&gt;--&lt;143.0,0.0&gt;&gt; -&gt; L&lt;&lt;143.0,0.0&gt;--&lt;123.0,-53.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;240.0,277.0&gt;--&lt;240.0,277.0&gt;&gt; -&gt; L&lt;&lt;240.0,277.0&gt;--&lt;240.0,277.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;237.0,357.0&gt;--&lt;221.0,311.0&gt;&gt; -&gt; L&lt;&lt;221.0,311.0&gt;--&lt;111.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;8.0,0.0&gt;--&lt;118.0,311.0&gt;&gt; -&gt; L&lt;&lt;118.0,311.0&gt;--&lt;141.0,379.0&gt;&gt;

* uni1E1D (U+1E1D): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;547.0,286.0&gt;--&lt;547.0,286.0&gt;&gt; -&gt; L&lt;&lt;547.0,286.0&gt;--&lt;548.0,286.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;547.0,286.0&gt;--&lt;547.0,286.0&gt;&gt; -&gt; L&lt;&lt;547.0,286.0&gt;--&lt;548.0,286.0&gt;&gt;

* uni1EB9 (U+1EB9): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EBB (U+1EBB): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EBD (U+1EBD): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EBF (U+1EBF): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EC1 (U+1EC1): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EC3 (U+1EC3): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EC5 (U+1EC5): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni1EC7 (U+1EC7): L&lt;&lt;542.0,205.0&gt;--&lt;493.0,209.0&gt;&gt; -&gt; L&lt;&lt;493.0,209.0&gt;--&lt;157.0,209.0&gt;&gt;

* uni2075 (U+2075): L&lt;&lt;71.0,547.0&gt;--&lt;71.0,548.0&gt;&gt; -&gt; L&lt;&lt;71.0,548.0&gt;--&lt;71.0,549.0&gt;&gt;

* uni2085 (U+2085): L&lt;&lt;71.0,162.0&gt;--&lt;71.0,163.0&gt;&gt; -&gt; L&lt;&lt;71.0,163.0&gt;--&lt;71.0,164.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-26.0,-88.0&gt;--&lt;5.0,0.0&gt;&gt; -&gt; L&lt;&lt;5.0,0.0&gt;--&lt;251.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;203.0,268.0&gt;--&lt;108.0,0.0&gt;&gt; -&gt; L&lt;&lt;108.0,0.0&gt;--&lt;82.0,-73.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;988.0,693.0&gt;--&lt;959.0,652.0&gt;&gt; -&gt; L&lt;&lt;959.0,652.0&gt;--&lt;521.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* Ccedilla (U+00C7): L&lt;&lt;292.0,-130.0&gt;--&lt;295.0,-118.0&gt;&gt;/L&lt;&lt;295.0,-118.0&gt;--&lt;291.0,-130.0&gt;&gt; = 4.398705354995591

* Scedilla (U+015E): L&lt;&lt;195.0,-130.0&gt;--&lt;198.0,-118.0&gt;&gt;/L&lt;&lt;198.0,-118.0&gt;--&lt;194.0,-130.0&gt;&gt; = 4.398705354995591

* braceleft (U+007B): L&lt;&lt;153.0,531.0&gt;--&lt;205.0,531.0&gt;&gt;/L&lt;&lt;205.0,531.0&gt;--&lt;154.0,534.0&gt;&gt; = 3.3664606634298315

* braceleft (U+007B): L&lt;&lt;220.0,429.0&gt;--&lt;169.0,429.0&gt;&gt;/L&lt;&lt;169.0,429.0&gt;--&lt;219.0,426.0&gt;&gt; = 3.4336303624505082

* braceleft (U+007B): L&lt;&lt;30.0,183.0&gt;--&lt;82.0,183.0&gt;&gt;/L&lt;&lt;82.0,183.0&gt;--&lt;31.0,186.0&gt;&gt; = 3.3664606634298315

* braceleft (U+007B): L&lt;&lt;98.0,81.0&gt;--&lt;46.0,81.0&gt;&gt;/L&lt;&lt;46.0,81.0&gt;--&lt;96.0,78.0&gt;&gt; = 3.4336303624505082

* braceright (U+007D): L&lt;&lt;318.0,426.0&gt;--&lt;370.0,429.0&gt;&gt;/L&lt;&lt;370.0,429.0&gt;--&lt;318.0,429.0&gt;&gt; = 3.301865674434948

* braceright (U+007D): L&lt;&lt;318.0,78.0&gt;--&lt;370.0,81.0&gt;&gt;/L&lt;&lt;370.0,81.0&gt;--&lt;318.0,81.0&gt;&gt; = 3.301865674434948

* braceright (U+007D): L&lt;&lt;422.0,186.0&gt;--&lt;370.0,183.0&gt;&gt;/L&lt;&lt;370.0,183.0&gt;--&lt;422.0,183.0&gt;&gt; = 3.301865674434948

* braceright (U+007D): L&lt;&lt;422.0,534.0&gt;--&lt;370.0,531.0&gt;&gt;/L&lt;&lt;370.0,531.0&gt;--&lt;422.0,531.0&gt;&gt; = 3.301865674434948

* ccedilla (U+00E7): L&lt;&lt;190.0,-130.0&gt;--&lt;193.0,-118.0&gt;&gt;/L&lt;&lt;193.0,-118.0&gt;--&lt;189.0,-130.0&gt;&gt; = 4.398705354995591

* cedilla (U+00B8): L&lt;&lt;110.0,-130.0&gt;--&lt;113.0,-118.0&gt;&gt;/L&lt;&lt;113.0,-118.0&gt;--&lt;109.0,-130.0&gt;&gt; = 4.398705354995591

* eng (U+014B): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* f (U+0066): L&lt;&lt;184.0,530.0&gt;--&lt;236.0,530.0&gt;&gt;/L&lt;&lt;236.0,530.0&gt;--&lt;186.0,534.0&gt;&gt; = 4.573921259900818

* florin (U+0192): L&lt;&lt;139.0,-27.0&gt;--&lt;88.0,-27.0&gt;&gt;/L&lt;&lt;88.0,-27.0&gt;--&lt;138.0,-31.0&gt;&gt; = 4.573921259900818

* florin (U+0192): L&lt;&lt;238.0,546.0&gt;--&lt;290.0,546.0&gt;&gt;/L&lt;&lt;290.0,546.0&gt;--&lt;240.0,550.0&gt;&gt; = 4.573921259900818

* h (U+0068): L&lt;&lt;483.0,263.0&gt;--&lt;535.0,263.0&gt;&gt;/L&lt;&lt;535.0,263.0&gt;--&lt;485.0,267.0&gt;&gt; = 4.573921259900818

* hbar (U+0127): L&lt;&lt;483.0,263.0&gt;--&lt;535.0,263.0&gt;&gt;/L&lt;&lt;535.0,263.0&gt;--&lt;485.0,267.0&gt;&gt; = 4.573921259900818

* hcircumflex (U+0125): L&lt;&lt;483.0,263.0&gt;--&lt;535.0,263.0&gt;&gt;/L&lt;&lt;535.0,263.0&gt;--&lt;485.0,267.0&gt;&gt; = 4.573921259900818

* ij (U+0133): L&lt;&lt;343.0,-91.0&gt;--&lt;291.0,-91.0&gt;&gt;/L&lt;&lt;291.0,-91.0&gt;--&lt;341.0,-94.0&gt;&gt; = 3.4336303624505082

* integral (U+222B): L&lt;&lt;270.0,-17.0&gt;--&lt;219.0,-17.0&gt;&gt;/L&lt;&lt;219.0,-17.0&gt;--&lt;270.0,-20.0&gt;&gt; = 3.3664606634298315

* integral (U+222B): L&lt;&lt;441.0,545.0&gt;--&lt;493.0,545.0&gt;&gt;/L&lt;&lt;493.0,545.0&gt;--&lt;442.0,548.0&gt;&gt; = 3.3664606634298315

* j (U+006A): L&lt;&lt;136.0,-91.0&gt;--&lt;84.0,-91.0&gt;&gt;/L&lt;&lt;84.0,-91.0&gt;--&lt;134.0,-94.0&gt;&gt; = 3.4336303624505082

* jcircumflex (U+0135): L&lt;&lt;178.0,-91.0&gt;--&lt;126.0,-91.0&gt;&gt;/L&lt;&lt;126.0,-91.0&gt;--&lt;176.0,-94.0&gt;&gt; = 3.4336303624505082

* l.ss01: L&lt;&lt;119.0,194.0&gt;--&lt;67.0,194.0&gt;&gt;/L&lt;&lt;67.0,194.0&gt;--&lt;118.0,190.0&gt;&gt; = 4.484606009544625

* m (U+006D): L&lt;&lt;444.0,286.0&gt;--&lt;496.0,286.0&gt;&gt;/L&lt;&lt;496.0,286.0&gt;--&lt;445.0,289.0&gt;&gt; = 3.3664606634298315

* m (U+006D): L&lt;&lt;780.0,286.0&gt;--&lt;831.0,286.0&gt;&gt;/L&lt;&lt;831.0,286.0&gt;--&lt;781.0,289.0&gt;&gt; = 3.4336303624505082

* n (U+006E): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* nacute (U+0144): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* ncaron (U+0148): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* ntilde (U+00F1): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* onehalf (U+00BD): L&lt;&lt;363.0,38.0&gt;--&lt;375.0,40.0&gt;&gt;/L&lt;&lt;375.0,40.0&gt;--&lt;364.0,40.0&gt;&gt; = 9.462322208025613

* scedilla (U+015F): L&lt;&lt;163.0,-130.0&gt;--&lt;166.0,-118.0&gt;&gt;/L&lt;&lt;166.0,-118.0&gt;--&lt;162.0,-130.0&gt;&gt; = 4.398705354995591

* sterling (U+00A3): L&lt;&lt;338.0,517.0&gt;--&lt;391.0,517.0&gt;&gt;/L&lt;&lt;391.0,517.0&gt;--&lt;340.0,520.0&gt;&gt; = 3.3664606634298315

* t (U+0074): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* tbar (U+0167): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* tcaron (U+0165): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* two (U+0032): L&lt;&lt;50.0,84.0&gt;--&lt;75.0,88.0&gt;&gt;/L&lt;&lt;75.0,88.0&gt;--&lt;50.0,88.0&gt;&gt; = 9.090276920822312

* two.dnom: L&lt;&lt;45.0,38.0&gt;--&lt;57.0,40.0&gt;&gt;/L&lt;&lt;57.0,40.0&gt;--&lt;46.0,40.0&gt;&gt; = 9.462322208025613

* two.lf: L&lt;&lt;66.0,84.0&gt;--&lt;91.0,88.0&gt;&gt;/L&lt;&lt;91.0,88.0&gt;--&lt;66.0,88.0&gt;&gt; = 9.090276920822312

* two.numr: L&lt;&lt;45.0,423.0&gt;--&lt;57.0,425.0&gt;&gt;/L&lt;&lt;57.0,425.0&gt;--&lt;46.0,425.0&gt;&gt; = 9.462322208025613

* two.osf: L&lt;&lt;50.0,84.0&gt;--&lt;75.0,88.0&gt;&gt;/L&lt;&lt;75.0,88.0&gt;--&lt;50.0,88.0&gt;&gt; = 9.090276920822312

* two.tf: L&lt;&lt;50.0,84.0&gt;--&lt;75.0,88.0&gt;&gt;/L&lt;&lt;75.0,88.0&gt;--&lt;50.0,88.0&gt;&gt; = 9.090276920822312

* two.tosf: L&lt;&lt;50.0,84.0&gt;--&lt;75.0,88.0&gt;&gt;/L&lt;&lt;75.0,88.0&gt;--&lt;50.0,88.0&gt;&gt; = 9.090276920822312

* u (U+0075): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uacute (U+00FA): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* ubreve (U+016D): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* ucircumflex (U+00FB): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* udieresis (U+00FC): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* ugrave (U+00F9): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uhorn (U+01B0): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uhungarumlaut (U+0171): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* umacron (U+016B): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni006A0301: L&lt;&lt;136.0,-91.0&gt;--&lt;84.0,-91.0&gt;&gt;/L&lt;&lt;84.0,-91.0&gt;--&lt;134.0,-94.0&gt;&gt; = 3.4336303624505082

* uni00B2 (U+00B2): L&lt;&lt;45.0,423.0&gt;--&lt;57.0,425.0&gt;&gt;/L&lt;&lt;57.0,425.0&gt;--&lt;46.0,425.0&gt;&gt; = 9.462322208025613

* uni0146 (U+0146): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* uni0146.loclMAH: L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* uni0162 (U+0162): L&lt;&lt;-10.0,-124.0&gt;--&lt;-7.0,-112.0&gt;&gt;/L&lt;&lt;-7.0,-112.0&gt;--&lt;-11.0,-124.0&gt;&gt; = 4.398705354995591

* uni0163 (U+0163): L&lt;&lt;13.0,-110.0&gt;--&lt;16.0,-98.0&gt;&gt;/L&lt;&lt;16.0,-98.0&gt;--&lt;12.0,-110.0&gt;&gt; = 4.398705354995591

* uni0163 (U+0163): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* uni0190 (U+0190): B&lt;&lt;205.0,342.0&gt;-&lt;255.0,367.0&gt;-&lt;311.0,372.0&gt;&gt;/B&lt;&lt;311.0,372.0&gt;-&lt;262.0,379.0&gt;-&lt;228.5,400.0&gt;&gt; = 13.232267606514155

* uni01AD (U+01AD): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* uni021B (U+021B): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* uni0228 (U+0228): L&lt;&lt;215.0,-98.0&gt;--&lt;218.0,-86.0&gt;&gt;/L&lt;&lt;218.0,-86.0&gt;--&lt;214.0,-98.0&gt;&gt; = 4.398705354995591

* uni0229 (U+0229): L&lt;&lt;213.0,-98.0&gt;--&lt;216.0,-86.0&gt;&gt;/L&lt;&lt;216.0,-86.0&gt;--&lt;212.0,-98.0&gt;&gt; = 4.398705354995591

* uni0237 (U+0237): L&lt;&lt;178.0,-91.0&gt;--&lt;126.0,-91.0&gt;&gt;/L&lt;&lt;126.0,-91.0&gt;--&lt;176.0,-94.0&gt;&gt; = 3.4336303624505082

* uni025B (U+025B): B&lt;&lt;101.0,221.5&gt;-&lt;137.0,252.0&gt;-&lt;187.0,256.0&gt;&gt;/B&lt;&lt;187.0,256.0&gt;-&lt;146.0,262.0&gt;-&lt;128.5,292.0&gt;&gt; = 12.899571590327666

* uni0265 (U+0265): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni0266 (U+0266): L&lt;&lt;483.0,263.0&gt;--&lt;535.0,263.0&gt;&gt;/L&lt;&lt;535.0,263.0&gt;--&lt;485.0,267.0&gt;&gt; = 4.573921259900818

* uni0272 (U+0272): L&lt;&lt;642.0,263.0&gt;--&lt;694.0,263.0&gt;&gt;/L&lt;&lt;694.0,263.0&gt;--&lt;644.0,267.0&gt;&gt; = 4.573921259900818

* uni0283 (U+0283): L&lt;&lt;124.0,0.0&gt;--&lt;72.0,0.0&gt;&gt;/L&lt;&lt;72.0,0.0&gt;--&lt;122.0,-3.0&gt;&gt; = 3.4336303624505082

* uni0283 (U+0283): L&lt;&lt;207.0,530.0&gt;--&lt;259.0,530.0&gt;&gt;/L&lt;&lt;259.0,530.0&gt;--&lt;209.0,534.0&gt;&gt; = 4.573921259900818

* uni0288 (U+0288): L&lt;&lt;152.0,-8.0&gt;--&lt;100.0,-8.0&gt;&gt;/L&lt;&lt;100.0,-8.0&gt;--&lt;150.0,-12.0&gt;&gt; = 4.573921259900818

* uni0289 (U+0289): L&lt;&lt;127.0,217.0&gt;--&lt;75.0,217.0&gt;&gt;/L&lt;&lt;75.0,217.0&gt;--&lt;125.0,213.0&gt;&gt; = 4.573921259900818

* uni028A (U+028A): B&lt;&lt;176.0,363.0&gt;-&lt;206.0,389.0&gt;-&lt;236.0,397.0&gt;&gt;/L&lt;&lt;236.0,397.0&gt;--&lt;151.0,396.0&gt;&gt; = 14.257380280153031

* uni0327 (U+0327): L&lt;&lt;156.0,-130.0&gt;--&lt;159.0,-118.0&gt;&gt;/L&lt;&lt;159.0,-118.0&gt;--&lt;155.0,-130.0&gt;&gt; = 4.398705354995591

* uni1E08 (U+1E08): L&lt;&lt;292.0,-130.0&gt;--&lt;295.0,-118.0&gt;&gt;/L&lt;&lt;295.0,-118.0&gt;--&lt;291.0,-130.0&gt;&gt; = 4.398705354995591

* uni1E09 (U+1E09): L&lt;&lt;190.0,-130.0&gt;--&lt;193.0,-118.0&gt;&gt;/L&lt;&lt;193.0,-118.0&gt;--&lt;189.0,-130.0&gt;&gt; = 4.398705354995591

* uni1E1C (U+1E1C): L&lt;&lt;215.0,-98.0&gt;--&lt;218.0,-86.0&gt;&gt;/L&lt;&lt;218.0,-86.0&gt;--&lt;214.0,-98.0&gt;&gt; = 4.398705354995591

* uni1E1D (U+1E1D): L&lt;&lt;213.0,-98.0&gt;--&lt;216.0,-86.0&gt;&gt;/L&lt;&lt;216.0,-86.0&gt;--&lt;212.0,-98.0&gt;&gt; = 4.398705354995591

* uni1E25 (U+1E25): L&lt;&lt;483.0,263.0&gt;--&lt;535.0,263.0&gt;&gt;/L&lt;&lt;535.0,263.0&gt;--&lt;485.0,267.0&gt;&gt; = 4.573921259900818

* uni1E2B (U+1E2B): L&lt;&lt;483.0,263.0&gt;--&lt;535.0,263.0&gt;&gt;/L&lt;&lt;535.0,263.0&gt;--&lt;485.0,267.0&gt;&gt; = 4.573921259900818

* uni1E3F (U+1E3F): L&lt;&lt;444.0,286.0&gt;--&lt;496.0,286.0&gt;&gt;/L&lt;&lt;496.0,286.0&gt;--&lt;445.0,289.0&gt;&gt; = 3.3664606634298315

* uni1E3F (U+1E3F): L&lt;&lt;780.0,286.0&gt;--&lt;831.0,286.0&gt;&gt;/L&lt;&lt;831.0,286.0&gt;--&lt;781.0,289.0&gt;&gt; = 3.4336303624505082

* uni1E43 (U+1E43): L&lt;&lt;444.0,286.0&gt;--&lt;496.0,286.0&gt;&gt;/L&lt;&lt;496.0,286.0&gt;--&lt;445.0,289.0&gt;&gt; = 3.3664606634298315

* uni1E43 (U+1E43): L&lt;&lt;780.0,286.0&gt;--&lt;831.0,286.0&gt;&gt;/L&lt;&lt;831.0,286.0&gt;--&lt;781.0,289.0&gt;&gt; = 3.4336303624505082

* uni1E45 (U+1E45): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* uni1E47 (U+1E47): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* uni1E49 (U+1E49): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* uni1E4B (U+1E4B): L&lt;&lt;482.0,263.0&gt;--&lt;534.0,263.0&gt;&gt;/L&lt;&lt;534.0,263.0&gt;--&lt;483.0,267.0&gt;&gt; = 4.484606009544543

* uni1E6D (U+1E6D): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* uni1E6F (U+1E6F): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* uni1E71 (U+1E71): L&lt;&lt;98.0,192.0&gt;--&lt;46.0,192.0&gt;&gt;/L&lt;&lt;46.0,192.0&gt;--&lt;96.0,188.0&gt;&gt; = 4.573921259900818

* uni1EE5 (U+1EE5): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni1EE7 (U+1EE7): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni1EE9 (U+1EE9): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni1EEB (U+1EEB): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni1EED (U+1EED): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni1EEF (U+1EEF): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni1EF1 (U+1EF1): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uni2082 (U+2082): L&lt;&lt;45.0,38.0&gt;--&lt;57.0,40.0&gt;&gt;/L&lt;&lt;57.0,40.0&gt;--&lt;46.0,40.0&gt;&gt; = 9.462322208025613

* uni2154 (U+2154): L&lt;&lt;45.0,423.0&gt;--&lt;57.0,425.0&gt;&gt;/L&lt;&lt;57.0,425.0&gt;--&lt;46.0,425.0&gt;&gt; = 9.462322208025613

* uni2198 (U+2198): L&lt;&lt;679.0,3.0&gt;--&lt;679.0,3.0&gt;&gt;/L&lt;&lt;679.0,3.0&gt;--&lt;241.0,83.0&gt;&gt; = 10.3508856549305

* uni2198 (U+2198): L&lt;&lt;688.0,1.0&gt;--&lt;679.0,3.0&gt;&gt;/L&lt;&lt;679.0,3.0&gt;--&lt;679.0,3.0&gt;&gt; = 12.528807709151522

* uogonek (U+0173): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* uring (U+016F): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818

* utilde (U+0169): L&lt;&lt;120.0,217.0&gt;--&lt;68.0,217.0&gt;&gt;/L&lt;&lt;68.0,217.0&gt;--&lt;118.0,213.0&gt;&gt; = 4.573921259900818
</code></pre>
 [code: found-jaggy-segments]



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

<details><summary>[16] ElmsSans-ExtraLightItalic.ttf</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Checking post.italicAngle value. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-italic-angle">opentype/italic_angle</a></summary>
    <div>







* 🔥 **FAIL** <p>The value of post.italicAngle is positive, which is likely a mistake and should become negative for right-leaning Italics.
post.italicAngle: 10.0
angle calculated from outlines: -19.5)</p>
<p><em>Overridden</em>: This check was originally a WARN but was
overridden by the universal profile:
Google Fonts has different policies on checking for italic angle.</p>
 [code: positive]



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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni0244	Contours detected: 1	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: notequal	Contours detected: 2	Expected: 1

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: M	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: notequal	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: trademark	Contours detected: 3	Expected: 2

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0244	Contours detected: 1	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

- Glyph name: uni1E3E	Contours detected: 3	Expected: 2

- Glyph name: uni1E42	Contours detected: 3	Expected: 2

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

- Glyph name: uni20A9	Contours detected: 5	Expected: 1, 3, 4 or 7

- Glyph name: uogonek	Contours detected: 2	Expected: 1

- Glyph name: yen	Contours detected: 3	Expected: 1 or 2
</code></pre>
 [code: contour-count]



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
<pre><code>* m (U+006D): L&lt;&lt;511.0,311.0&gt;--&lt;512.0,311.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E3F (U+1E3F): L&lt;&lt;511.0,311.0&gt;--&lt;512.0,311.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E43 (U+1E43): L&lt;&lt;511.0,311.0&gt;--&lt;512.0,311.0&gt;&gt; has the same coordinates as a previous segment.

* arrowleft (U+2190): L&lt;&lt;127.0,360.0&gt;--&lt;126.0,360.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;809.0,321.0&gt;--&lt;809.0,321.0&gt;&gt; has the same coordinates as a previous segment.

* arrowboth (U+2194): L&lt;&lt;796.0,283.0&gt;--&lt;796.0,283.0&gt;&gt; has the same coordinates as a previous segment.
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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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
<pre><code>* arrowboth (U+2194): L&lt;&lt;131.0,275.0&gt;--&lt;118.0,296.0&gt;&gt; -&gt; L&lt;&lt;118.0,296.0&gt;--&lt;115.0,301.0&gt;&gt;

* arrowboth (U+2194): L&lt;&lt;796.0,283.0&gt;--&lt;796.0,283.0&gt;&gt; -&gt; L&lt;&lt;796.0,283.0&gt;--&lt;796.0,283.0&gt;&gt;

* arrowboth (U+2194): L&lt;&lt;809.0,321.0&gt;--&lt;809.0,321.0&gt;&gt; -&gt; L&lt;&lt;809.0,321.0&gt;--&lt;809.0,321.0&gt;&gt;

* e (U+0065): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* eacute (U+00E9): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* ecaron (U+011B): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* ecircumflex (U+00EA): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* edieresis (U+00EB): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* edotaccent (U+0117): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* egrave (U+00E8): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* emacron (U+0113): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* eng (U+014B): L&lt;&lt;417.0,-51.0&gt;--&lt;436.0,0.0&gt;&gt; -&gt; L&lt;&lt;436.0,0.0&gt;--&lt;530.0,269.0&gt;&gt;

* eng (U+014B): L&lt;&lt;578.0,267.0&gt;--&lt;484.0,0.0&gt;&gt; -&gt; L&lt;&lt;484.0,0.0&gt;--&lt;466.0,-52.0&gt;&gt;

* eogonek (U+0119): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* five (U+0035): L&lt;&lt;112.0,362.0&gt;--&lt;113.0,364.0&gt;&gt; -&gt; L&lt;&lt;113.0,364.0&gt;--&lt;268.0,700.0&gt;&gt;

* five (U+0035): L&lt;&lt;146.0,334.0&gt;--&lt;115.0,359.0&gt;&gt; -&gt; L&lt;&lt;115.0,359.0&gt;--&lt;112.0,361.0&gt;&gt;

* five.lf: L&lt;&lt;120.0,334.0&gt;--&lt;89.0,359.0&gt;&gt; -&gt; L&lt;&lt;89.0,359.0&gt;--&lt;86.0,361.0&gt;&gt;

* five.lf: L&lt;&lt;86.0,362.0&gt;--&lt;87.0,364.0&gt;&gt; -&gt; L&lt;&lt;87.0,364.0&gt;--&lt;242.0,700.0&gt;&gt;

* five.osf: L&lt;&lt;112.0,362.0&gt;--&lt;113.0,364.0&gt;&gt; -&gt; L&lt;&lt;113.0,364.0&gt;--&lt;268.0,700.0&gt;&gt;

* five.osf: L&lt;&lt;146.0,334.0&gt;--&lt;115.0,359.0&gt;&gt; -&gt; L&lt;&lt;115.0,359.0&gt;--&lt;112.0,361.0&gt;&gt;

* five.tf: L&lt;&lt;112.0,362.0&gt;--&lt;113.0,364.0&gt;&gt; -&gt; L&lt;&lt;113.0,364.0&gt;--&lt;268.0,700.0&gt;&gt;

* five.tf: L&lt;&lt;146.0,334.0&gt;--&lt;115.0,359.0&gt;&gt; -&gt; L&lt;&lt;115.0,359.0&gt;--&lt;112.0,361.0&gt;&gt;

* five.tosf: L&lt;&lt;112.0,362.0&gt;--&lt;113.0,364.0&gt;&gt; -&gt; L&lt;&lt;113.0,364.0&gt;--&lt;268.0,700.0&gt;&gt;

* five.tosf: L&lt;&lt;146.0,334.0&gt;--&lt;115.0,359.0&gt;&gt; -&gt; L&lt;&lt;115.0,359.0&gt;--&lt;112.0,361.0&gt;&gt;

* m (U+006D): L&lt;&lt;511.0,311.0&gt;--&lt;511.0,311.0&gt;&gt; -&gt; L&lt;&lt;511.0,311.0&gt;--&lt;512.0,311.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;134.0,391.0&gt;--&lt;157.0,390.0&gt;&gt; -&gt; L&lt;&lt;157.0,390.0&gt;--&lt;775.0,390.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;26.0,82.0&gt;--&lt;49.0,148.0&gt;&gt; -&gt; L&lt;&lt;49.0,148.0&gt;--&lt;244.0,700.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;292.0,700.0&gt;--&lt;97.0,148.0&gt;&gt; -&gt; L&lt;&lt;97.0,148.0&gt;--&lt;77.0,90.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;147.0,-60.0&gt;--&lt;169.0,0.0&gt;&gt; -&gt; L&lt;&lt;169.0,0.0&gt;--&lt;415.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;441.0,636.0&gt;--&lt;217.0,0.0&gt;&gt; -&gt; L&lt;&lt;217.0,0.0&gt;--&lt;192.0,-69.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;24.0,-280.0&gt;--&lt;292.0,480.0&gt;&gt; -&gt; L&lt;&lt;292.0,480.0&gt;--&lt;328.0,582.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;373.0,578.0&gt;--&lt;338.0,480.0&gt;&gt; -&gt; L&lt;&lt;338.0,480.0&gt;--&lt;301.0,377.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;114.0,480.0&gt;--&lt;143.0,561.0&gt;&gt; -&gt; L&lt;&lt;143.0,561.0&gt;--&lt;165.0,625.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;210.0,618.0&gt;--&lt;191.0,561.0&gt;&gt; -&gt; L&lt;&lt;191.0,561.0&gt;--&lt;162.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;-26.0,-182.0&gt;--&lt;-3.0,-116.0&gt;&gt; -&gt; L&lt;&lt;-3.0,-116.0&gt;--&lt;270.0,657.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;318.0,657.0&gt;--&lt;45.0,-116.0&gt;&gt; -&gt; L&lt;&lt;45.0,-116.0&gt;--&lt;23.0,-180.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;136.0,330.0&gt;--&lt;509.0,700.0&gt;&gt; -&gt; L&lt;&lt;509.0,700.0&gt;--&lt;561.0,753.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;589.0,722.0&gt;--&lt;543.0,679.0&gt;&gt; -&gt; L&lt;&lt;543.0,679.0&gt;--&lt;142.0,282.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;391.0,52.0&gt;--&lt;727.0,481.0&gt;&gt; -&gt; L&lt;&lt;727.0,481.0&gt;--&lt;772.0,539.0&gt;&gt;

* uni01DD (U+01DD): L&lt;&lt;91.0,270.0&gt;--&lt;114.0,268.0&gt;&gt; -&gt; L&lt;&lt;114.0,268.0&gt;--&lt;527.0,268.0&gt;&gt;

* uni0207 (U+0207): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni0229 (U+0229): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;18.0,0.0&gt;--&lt;221.0,577.0&gt;&gt; -&gt; L&lt;&lt;221.0,577.0&gt;--&lt;244.0,641.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;287.0,634.0&gt;--&lt;267.0,577.0&gt;&gt; -&gt; L&lt;&lt;267.0,577.0&gt;--&lt;197.0,378.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;604.0,372.0&gt;--&lt;675.0,574.0&gt;&gt; -&gt; L&lt;&lt;675.0,574.0&gt;--&lt;693.0,625.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;737.0,618.0&gt;--&lt;721.0,574.0&gt;&gt; -&gt; L&lt;&lt;721.0,574.0&gt;--&lt;519.0,0.0&gt;&gt;

* uni0259 (U+0259): L&lt;&lt;91.0,270.0&gt;--&lt;114.0,268.0&gt;&gt; -&gt; L&lt;&lt;114.0,268.0&gt;--&lt;527.0,268.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;710.0,375.0&gt;--&lt;733.0,440.0&gt;&gt; -&gt; L&lt;&lt;733.0,440.0&gt;--&lt;756.0,504.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;800.0,497.0&gt;--&lt;779.0,440.0&gt;&gt; -&gt; L&lt;&lt;779.0,440.0&gt;--&lt;609.0,-42.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;23.0,0.0&gt;--&lt;226.0,577.0&gt;&gt; -&gt; L&lt;&lt;226.0,577.0&gt;--&lt;249.0,641.0&gt;&gt;

* uni0266 (U+0266): L&lt;&lt;293.0,634.0&gt;--&lt;272.0,577.0&gt;&gt; -&gt; L&lt;&lt;272.0,577.0&gt;--&lt;208.0,394.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;215.0,480.0&gt;--&lt;97.0,143.0&gt;&gt; -&gt; L&lt;&lt;97.0,143.0&gt;--&lt;76.0,83.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;30.0,82.0&gt;--&lt;51.0,143.0&gt;&gt; -&gt; L&lt;&lt;51.0,143.0&gt;--&lt;169.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;153.0,-41.0&gt;--&lt;168.0,0.0&gt;&gt; -&gt; L&lt;&lt;168.0,0.0&gt;--&lt;337.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;312.0,274.0&gt;--&lt;216.0,0.0&gt;&gt; -&gt; L&lt;&lt;216.0,0.0&gt;--&lt;201.0,-42.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;201.0,302.0&gt;--&lt;94.0,0.0&gt;&gt; -&gt; L&lt;&lt;94.0,0.0&gt;--&lt;73.0,-60.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;24.0,-61.0&gt;--&lt;46.0,0.0&gt;&gt; -&gt; L&lt;&lt;46.0,0.0&gt;--&lt;215.0,480.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;18.0,0.0&gt;--&lt;134.0,330.0&gt;&gt; -&gt; L&lt;&lt;134.0,330.0&gt;--&lt;157.0,394.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;203.0,387.0&gt;--&lt;182.0,330.0&gt;&gt; -&gt; L&lt;&lt;182.0,330.0&gt;--&lt;66.0,0.0&gt;&gt;

* uni1E1D (U+1E1D): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;511.0,311.0&gt;--&lt;511.0,311.0&gt;&gt; -&gt; L&lt;&lt;511.0,311.0&gt;--&lt;512.0,311.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;511.0,311.0&gt;--&lt;511.0,311.0&gt;&gt; -&gt; L&lt;&lt;511.0,311.0&gt;--&lt;512.0,311.0&gt;&gt;

* uni1EB9 (U+1EB9): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EBB (U+1EBB): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EBD (U+1EBD): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EBF (U+1EBF): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EC1 (U+1EC1): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EC3 (U+1EC3): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EC5 (U+1EC5): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni1EC7 (U+1EC7): L&lt;&lt;559.0,210.0&gt;--&lt;536.0,212.0&gt;&gt; -&gt; L&lt;&lt;536.0,212.0&gt;--&lt;123.0,212.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;138.0,685.0&gt;--&lt;142.0,685.0&gt;&gt; -&gt; L&lt;&lt;142.0,685.0&gt;--&lt;142.0,685.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-4.0,-66.0&gt;--&lt;20.0,0.0&gt;&gt; -&gt; L&lt;&lt;20.0,0.0&gt;--&lt;266.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;164.0,274.0&gt;--&lt;68.0,0.0&gt;&gt; -&gt; L&lt;&lt;68.0,0.0&gt;--&lt;45.0,-64.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;847.0,685.0&gt;--&lt;850.0,690.0&gt;&gt; -&gt; L&lt;&lt;850.0,690.0&gt;--&lt;857.0,700.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;927.0,725.0&gt;--&lt;900.0,685.0&gt;&gt; -&gt; L&lt;&lt;900.0,685.0&gt;--&lt;445.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): L&lt;&lt;555.0,0.0&gt;--&lt;616.0,171.0&gt;&gt;/B&lt;&lt;616.0,171.0&gt;-&lt;580.0,116.0&gt;-&lt;527.5,74.0&gt;&gt; = 13.573974777559103

* braceleft (U+007B): L&lt;&lt;153.0,537.0&gt;--&lt;177.0,537.0&gt;&gt;/L&lt;&lt;177.0,537.0&gt;--&lt;154.0,539.0&gt;&gt; = 4.969740728110289

* braceleft (U+007B): L&lt;&lt;163.0,429.0&gt;--&lt;139.0,429.0&gt;&gt;/L&lt;&lt;139.0,429.0&gt;--&lt;162.0,427.0&gt;&gt; = 4.969740728110289

* braceleft (U+007B): L&lt;&lt;28.0,183.0&gt;--&lt;52.0,183.0&gt;&gt;/L&lt;&lt;52.0,183.0&gt;--&lt;29.0,185.0&gt;&gt; = 4.969740728110289

* braceleft (U+007B): L&lt;&lt;38.0,75.0&gt;--&lt;14.0,75.0&gt;&gt;/L&lt;&lt;14.0,75.0&gt;--&lt;38.0,73.0&gt;&gt; = 4.763641690726143

* braceright (U+007D): L&lt;&lt;407.0,427.0&gt;--&lt;431.0,429.0&gt;&gt;/L&lt;&lt;431.0,429.0&gt;--&lt;408.0,429.0&gt;&gt; = 4.763641690726143

* braceright (U+007D): L&lt;&lt;407.0,73.0&gt;--&lt;431.0,75.0&gt;&gt;/L&lt;&lt;431.0,75.0&gt;--&lt;407.0,75.0&gt;&gt; = 4.763641690726143

* braceright (U+007D): L&lt;&lt;455.0,539.0&gt;--&lt;431.0,537.0&gt;&gt;/L&lt;&lt;431.0,537.0&gt;--&lt;456.0,537.0&gt;&gt; = 4.763641690726143

* braceright (U+007D): L&lt;&lt;456.0,185.0&gt;--&lt;431.0,183.0&gt;&gt;/L&lt;&lt;431.0,183.0&gt;--&lt;455.0,183.0&gt;&gt; = 4.573921259900818

* eng (U+014B): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* f (U+0066): L&lt;&lt;202.0,550.0&gt;--&lt;226.0,550.0&gt;&gt;/L&lt;&lt;226.0,550.0&gt;--&lt;202.0,552.0&gt;&gt; = 4.763641690726143

* florin (U+0192): L&lt;&lt;256.0,566.0&gt;--&lt;280.0,566.0&gt;&gt;/L&lt;&lt;280.0,566.0&gt;--&lt;256.0,568.0&gt;&gt; = 4.763641690726143

* florin (U+0192): L&lt;&lt;90.0,-37.0&gt;--&lt;67.0,-37.0&gt;&gt;/L&lt;&lt;67.0,-37.0&gt;--&lt;90.0,-39.0&gt;&gt; = 4.969740728110289

* h (U+0068): L&lt;&lt;534.0,269.0&gt;--&lt;558.0,269.0&gt;&gt;/L&lt;&lt;558.0,269.0&gt;--&lt;535.0,271.0&gt;&gt; = 4.969740728110289

* hbar (U+0127): L&lt;&lt;534.0,269.0&gt;--&lt;558.0,269.0&gt;&gt;/L&lt;&lt;558.0,269.0&gt;--&lt;535.0,271.0&gt;&gt; = 4.969740728110289

* hcircumflex (U+0125): L&lt;&lt;534.0,269.0&gt;--&lt;558.0,269.0&gt;&gt;/L&lt;&lt;558.0,269.0&gt;--&lt;535.0,271.0&gt;&gt; = 4.969740728110289

* ij (U+0133): L&lt;&lt;330.0,-97.0&gt;--&lt;305.0,-97.0&gt;&gt;/L&lt;&lt;305.0,-97.0&gt;--&lt;328.0,-99.0&gt;&gt; = 4.969740728110289

* integral (U+222B): L&lt;&lt;231.0,-45.0&gt;--&lt;207.0,-45.0&gt;&gt;/L&lt;&lt;207.0,-45.0&gt;--&lt;230.0,-47.0&gt;&gt; = 4.969740728110289

* integral (U+222B): L&lt;&lt;487.0,573.0&gt;--&lt;511.0,573.0&gt;&gt;/L&lt;&lt;511.0,573.0&gt;--&lt;487.0,575.0&gt;&gt; = 4.763641690726143

* j (U+006A): L&lt;&lt;113.0,-97.0&gt;--&lt;88.0,-97.0&gt;&gt;/L&lt;&lt;88.0,-97.0&gt;--&lt;111.0,-99.0&gt;&gt; = 4.969740728110289

* jcircumflex (U+0135): L&lt;&lt;155.0,-97.0&gt;--&lt;130.0,-97.0&gt;&gt;/L&lt;&lt;130.0,-97.0&gt;--&lt;153.0,-99.0&gt;&gt; = 4.969740728110289

* l.ss01: L&lt;&lt;79.0,183.0&gt;--&lt;55.0,183.0&gt;&gt;/L&lt;&lt;55.0,183.0&gt;--&lt;79.0,181.0&gt;&gt; = 4.763641690726143

* m (U+006D): L&lt;&lt;464.0,311.0&gt;--&lt;487.0,311.0&gt;&gt;/L&lt;&lt;487.0,311.0&gt;--&lt;464.0,313.0&gt;&gt; = 4.969740728110289

* m (U+006D): L&lt;&lt;800.0,311.0&gt;--&lt;823.0,311.0&gt;&gt;/L&lt;&lt;823.0,311.0&gt;--&lt;800.0,313.0&gt;&gt; = 4.969740728110289

* n (U+006E): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* nacute (U+0144): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* ncaron (U+0148): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* ntilde (U+00F1): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* onehalf (U+00BD): L&lt;&lt;350.0,20.0&gt;--&lt;361.0,20.0&gt;&gt;/L&lt;&lt;361.0,20.0&gt;--&lt;350.0,21.0&gt;&gt; = 5.1944289077348

* sterling (U+00A3): L&lt;&lt;352.0,300.0&gt;--&lt;328.0,300.0&gt;&gt;/L&lt;&lt;328.0,300.0&gt;--&lt;351.0,298.0&gt;&gt; = 4.969740728110289

* sterling (U+00A3): L&lt;&lt;383.0,525.0&gt;--&lt;407.0,525.0&gt;&gt;/L&lt;&lt;407.0,525.0&gt;--&lt;383.0,527.0&gt;&gt; = 4.763641690726143

* t (U+0074): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* tbar (U+0167): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* tcaron (U+0165): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* two (U+0032): L&lt;&lt;41.0,45.0&gt;--&lt;65.0,45.0&gt;&gt;/L&lt;&lt;65.0,45.0&gt;--&lt;41.0,47.0&gt;&gt; = 4.763641690726143

* two.dnom: L&lt;&lt;41.0,20.0&gt;--&lt;52.0,20.0&gt;&gt;/L&lt;&lt;52.0,20.0&gt;--&lt;41.0,21.0&gt;&gt; = 5.1944289077348

* two.lf: L&lt;&lt;66.0,45.0&gt;--&lt;90.0,45.0&gt;&gt;/L&lt;&lt;90.0,45.0&gt;--&lt;66.0,47.0&gt;&gt; = 4.763641690726143

* two.numr: L&lt;&lt;41.0,405.0&gt;--&lt;52.0,405.0&gt;&gt;/L&lt;&lt;52.0,405.0&gt;--&lt;41.0,406.0&gt;&gt; = 5.1944289077348

* two.osf: L&lt;&lt;41.0,45.0&gt;--&lt;65.0,45.0&gt;&gt;/L&lt;&lt;65.0,45.0&gt;--&lt;41.0,47.0&gt;&gt; = 4.763641690726143

* two.tf: L&lt;&lt;41.0,45.0&gt;--&lt;65.0,45.0&gt;&gt;/L&lt;&lt;65.0,45.0&gt;--&lt;41.0,47.0&gt;&gt; = 4.763641690726143

* two.tosf: L&lt;&lt;41.0,45.0&gt;--&lt;65.0,45.0&gt;&gt;/L&lt;&lt;65.0,45.0&gt;--&lt;41.0,47.0&gt;&gt; = 4.763641690726143

* u (U+0075): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uacute (U+00FA): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* ubreve (U+016D): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* ucircumflex (U+00FB): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* udieresis (U+00FC): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* ugrave (U+00F9): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uhorn (U+01B0): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uhungarumlaut (U+0171): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* umacron (U+016B): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni006A0301: L&lt;&lt;113.0,-97.0&gt;--&lt;88.0,-97.0&gt;&gt;/L&lt;&lt;88.0,-97.0&gt;--&lt;111.0,-99.0&gt;&gt; = 4.969740728110289

* uni00B2 (U+00B2): L&lt;&lt;41.0,405.0&gt;--&lt;52.0,405.0&gt;&gt;/L&lt;&lt;52.0,405.0&gt;--&lt;41.0,406.0&gt;&gt; = 5.1944289077348

* uni0146 (U+0146): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* uni0146.loclMAH: L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* uni0163 (U+0163): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* uni0190 (U+0190): B&lt;&lt;209.5,340.0&gt;-&lt;262.0,366.0&gt;-&lt;322.0,372.0&gt;&gt;/B&lt;&lt;322.0,372.0&gt;-&lt;241.0,382.0&gt;-&lt;202.0,426.0&gt;&gt; = 12.748533900684333

* uni01AD (U+01AD): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* uni01B1 (U+01B1): B&lt;&lt;309.5,600.5&gt;-&lt;368.0,648.0&gt;-&lt;425.0,660.0&gt;&gt;/L&lt;&lt;425.0,660.0&gt;--&lt;278.0,659.0&gt;&gt; = 11.498896844309925

* uni01B1 (U+01B1): L&lt;&lt;898.0,659.0&gt;--&lt;748.0,659.0&gt;&gt;/B&lt;&lt;748.0,659.0&gt;-&lt;801.0,648.0&gt;-&lt;829.5,599.5&gt;&gt; = 11.725112015165063

* uni021B (U+021B): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* uni0237 (U+0237): L&lt;&lt;155.0,-97.0&gt;--&lt;130.0,-97.0&gt;&gt;/L&lt;&lt;130.0,-97.0&gt;--&lt;153.0,-99.0&gt;&gt; = 4.969740728110289

* uni025B (U+025B): B&lt;&lt;106.5,215.0&gt;-&lt;152.0,250.0&gt;-&lt;211.0,256.0&gt;&gt;/B&lt;&lt;211.0,256.0&gt;-&lt;158.0,263.0&gt;-&lt;135.0,293.5&gt;&gt; = 13.330547344170174

* uni0265 (U+0265): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni0266 (U+0266): L&lt;&lt;534.0,269.0&gt;--&lt;558.0,269.0&gt;&gt;/L&lt;&lt;558.0,269.0&gt;--&lt;535.0,271.0&gt;&gt; = 4.969740728110289

* uni0272 (U+0272): L&lt;&lt;680.0,269.0&gt;--&lt;705.0,269.0&gt;&gt;/L&lt;&lt;705.0,269.0&gt;--&lt;681.0,271.0&gt;&gt; = 4.763641690726143

* uni0283 (U+0283): L&lt;&lt;230.0,550.0&gt;--&lt;254.0,550.0&gt;&gt;/L&lt;&lt;254.0,550.0&gt;--&lt;230.0,552.0&gt;&gt; = 4.763641690726143

* uni0283 (U+0283): L&lt;&lt;84.0,0.0&gt;--&lt;60.0,0.0&gt;&gt;/L&lt;&lt;60.0,0.0&gt;--&lt;83.0,-2.0&gt;&gt; = 4.969740728110289

* uni0288 (U+0288): L&lt;&lt;98.0,-34.0&gt;--&lt;74.0,-34.0&gt;&gt;/L&lt;&lt;74.0,-34.0&gt;--&lt;97.0,-35.0&gt;&gt; = 2.4895529219991284

* uni0289 (U+0289): L&lt;&lt;80.0,211.0&gt;--&lt;56.0,211.0&gt;&gt;/L&lt;&lt;56.0,211.0&gt;--&lt;79.0,209.0&gt;&gt; = 4.969740728110289

* uni1E25 (U+1E25): L&lt;&lt;534.0,269.0&gt;--&lt;558.0,269.0&gt;&gt;/L&lt;&lt;558.0,269.0&gt;--&lt;535.0,271.0&gt;&gt; = 4.969740728110289

* uni1E2B (U+1E2B): L&lt;&lt;534.0,269.0&gt;--&lt;558.0,269.0&gt;&gt;/L&lt;&lt;558.0,269.0&gt;--&lt;535.0,271.0&gt;&gt; = 4.969740728110289

* uni1E3F (U+1E3F): L&lt;&lt;464.0,311.0&gt;--&lt;487.0,311.0&gt;&gt;/L&lt;&lt;487.0,311.0&gt;--&lt;464.0,313.0&gt;&gt; = 4.969740728110289

* uni1E3F (U+1E3F): L&lt;&lt;800.0,311.0&gt;--&lt;823.0,311.0&gt;&gt;/L&lt;&lt;823.0,311.0&gt;--&lt;800.0,313.0&gt;&gt; = 4.969740728110289

* uni1E43 (U+1E43): L&lt;&lt;464.0,311.0&gt;--&lt;487.0,311.0&gt;&gt;/L&lt;&lt;487.0,311.0&gt;--&lt;464.0,313.0&gt;&gt; = 4.969740728110289

* uni1E43 (U+1E43): L&lt;&lt;800.0,311.0&gt;--&lt;823.0,311.0&gt;&gt;/L&lt;&lt;823.0,311.0&gt;--&lt;800.0,313.0&gt;&gt; = 4.969740728110289

* uni1E45 (U+1E45): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* uni1E47 (U+1E47): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* uni1E49 (U+1E49): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* uni1E4B (U+1E4B): L&lt;&lt;530.0,269.0&gt;--&lt;555.0,269.0&gt;&gt;/L&lt;&lt;555.0,269.0&gt;--&lt;531.0,271.0&gt;&gt; = 4.763641690726143

* uni1E6D (U+1E6D): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* uni1E6F (U+1E6F): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* uni1E71 (U+1E71): L&lt;&lt;51.0,166.0&gt;--&lt;27.0,166.0&gt;&gt;/L&lt;&lt;27.0,166.0&gt;--&lt;50.0,165.0&gt;&gt; = 2.4895529219991284

* uni1EE5 (U+1EE5): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni1EE7 (U+1EE7): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni1EE9 (U+1EE9): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni1EEB (U+1EEB): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni1EED (U+1EED): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni1EEF (U+1EEF): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni1EF1 (U+1EF1): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uni2082 (U+2082): L&lt;&lt;41.0,20.0&gt;--&lt;52.0,20.0&gt;&gt;/L&lt;&lt;52.0,20.0&gt;--&lt;41.0,21.0&gt;&gt; = 5.1944289077348

* uni2154 (U+2154): L&lt;&lt;41.0,405.0&gt;--&lt;52.0,405.0&gt;&gt;/L&lt;&lt;52.0,405.0&gt;--&lt;41.0,406.0&gt;&gt; = 5.1944289077348

* uogonek (U+0173): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* uring (U+016F): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289

* utilde (U+0169): L&lt;&lt;75.0,211.0&gt;--&lt;51.0,211.0&gt;&gt;/L&lt;&lt;51.0,211.0&gt;--&lt;74.0,209.0&gt;&gt; = 4.969740728110289
</code></pre>
 [code: found-jaggy-segments]



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







* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Italic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Bold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-BoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Regular.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ThinItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraBold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Thin.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-LightItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Medium.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraBoldItalic.ttf has no STAT table</p>
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

<details><summary>[15] ElmsSans-SemiBold.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni01B3 (U+01B3): L&lt;&lt;345.0,392.0&gt;--&lt;550.0,700.0&gt;&gt; -&gt; L&lt;&lt;550.0,700.0&gt;--&lt;592.0,764.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;307.0,131.0&gt;--&lt;457.0,480.0&gt;&gt; -&gt; L&lt;&lt;457.0,480.0&gt;--&lt;489.0,550.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;22.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;110.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;22.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;110.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;120.5,341.5&gt;-&lt;158.0,367.0&gt;-&lt;205.0,372.0&gt;&gt;/B&lt;&lt;205.0,372.0&gt;-&lt;134.0,382.0&gt;-&lt;87.0,423.0&gt;&gt; = 14.089549480863026

* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;135.0,256.0&gt;&gt;/B&lt;&lt;135.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.258017480535134

* uni028B (U+028B): L&lt;&lt;494.0,456.0&gt;--&lt;501.0,388.0&gt;&gt;/L&lt;&lt;501.0,388.0&gt;--&lt;501.0,389.0&gt;&gt; = 5.8773926066431

* uni028B (U+028B): L&lt;&lt;501.0,388.0&gt;--&lt;501.0,389.0&gt;&gt;/B&lt;&lt;501.0,389.0&gt;-&lt;509.0,305.0&gt;-&lt;494.5,232.0&gt;&gt; = 5.4403320310054815
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
<pre><code>* uni0187 (U+0187) contains a short segment B&lt;&lt;734.5,608.0&gt;-&lt;726.0,599.0&gt;-&lt;726.0,587.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;733.0,667.0&gt;-&lt;721.0,667.0&gt;-&lt;712.0,658.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;712.0,658.0&gt;-&lt;703.0,649.0&gt;-&lt;703.0,637.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;159.0,594.0&gt;-&lt;146.0,594.0&gt;-&lt;137.5,585.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;137.5,585.5&gt;-&lt;129.0,577.0&gt;-&lt;129.0,564.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;189.0,349.0&gt;--&lt;167.0,349.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;69.0,-94.0&gt;-&lt;82.0,-94.0&gt;-&lt;90.5,-85.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;90.5,-85.5&gt;-&lt;99.0,-77.0&gt;-&lt;99.0,-64.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;549.0,588.0&gt;--&lt;550.0,588.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;552.0,564.0&gt;--&lt;552.0,564.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;889.0,678.0&gt;--&lt;890.0,678.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1054.0,701.0&gt;-&lt;1042.0,704.0&gt;-&lt;1031.0,697.5&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1031.0,697.5&gt;-&lt;1020.0,691.0&gt;-&lt;1016.0,679.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;1011.0,661.0&gt;--&lt;1011.0,661.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;641.0,640.0&gt;--&lt;640.0,640.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;817.0,254.0&gt;-&lt;817.0,254.0&gt;-&lt;816.5,238.0&gt;&gt;

* uni0188 (U+0188) contains a short segment L&lt;&lt;424.0,461.0&gt;--&lt;424.0,461.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;501.0,388.0&gt;--&lt;501.0,389.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;564.0,431.0&gt;--&lt;564.0,431.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;340.0,700.0&gt;--&lt;340.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;190.0,700.0&gt;--&lt;190.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2153 (U+2153) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;353.0,700.0&gt;--&lt;364.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;314.0,423.0&gt;-&lt;319.0,422.0&gt;-&lt;323.0,421.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;92.0,331.0&gt;-&lt;91.0,340.0&gt;-&lt;91.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;212.0,350.0&gt;-&lt;212.0,340.0&gt;-&lt;212.0,331.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;269.0,598.0&gt;--&lt;269.0,598.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;250.0,0.0&gt;--&lt;250.0,6.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;250.0,6.0&gt;--&lt;240.0,6.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;81.0,694.0&gt;--&lt;81.0,700.0&gt;&gt;

* arrowboth (U+2194) contains a short segment L&lt;&lt;741.0,228.0&gt;--&lt;740.0,228.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;446.0,635.0&gt;--&lt;446.0,634.0&gt;&gt;

* arrowupdn (U+2195) contains a short segment L&lt;&lt;446.0,40.0&gt;--&lt;446.0,39.0&gt;&gt;
</code></pre>
 [code: found-short-segments]



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

<details><summary>[16] ElmsSans-Bold.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* uni01B2 (U+01B2): L&lt;&lt;563.0,553.0&gt;--&lt;563.0,553.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni01B2 (U+01B2): L&lt;&lt;563.0,553.0&gt;--&lt;563.0,553.0&gt;&gt; -&gt; L&lt;&lt;563.0,553.0&gt;--&lt;563.0,553.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;353.0,403.0&gt;--&lt;549.0,700.0&gt;&gt; -&gt; L&lt;&lt;549.0,700.0&gt;--&lt;594.0,768.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;315.0,148.0&gt;--&lt;458.0,480.0&gt;&gt; -&gt; L&lt;&lt;458.0,480.0&gt;--&lt;491.0,554.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;23.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt; -&gt; L&lt;&lt;86.0,315.0&gt;--&lt;119.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;23.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt; -&gt; L&lt;&lt;86.0,700.0&gt;--&lt;119.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;134.0,256.0&gt;&gt;/B&lt;&lt;134.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.570434385161475
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
<pre><code>* uni0187 (U+0187) contains a short segment B&lt;&lt;757.0,603.0&gt;-&lt;745.0,603.0&gt;-&lt;736.0,594.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;745.0,653.0&gt;-&lt;732.0,653.0&gt;-&lt;723.5,644.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;723.5,644.5&gt;-&lt;715.0,636.0&gt;-&lt;715.0,623.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;171.0,582.0&gt;-&lt;159.0,582.0&gt;-&lt;150.0,573.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;150.0,573.5&gt;-&lt;141.0,565.0&gt;-&lt;141.0,552.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;201.0,349.0&gt;--&lt;185.0,349.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;71.0,-88.0&gt;-&lt;84.0,-88.0&gt;-&lt;92.5,-79.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;92.5,-79.5&gt;-&lt;101.0,-71.0&gt;-&lt;101.0,-58.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;561.0,570.0&gt;--&lt;562.0,570.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment B&lt;&lt;562.0,570.0&gt;-&lt;563.0,562.0&gt;-&lt;563.0,553.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;563.0,553.0&gt;--&lt;563.0,553.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;563.0,553.0&gt;--&lt;563.0,553.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;884.0,668.0&gt;--&lt;884.0,668.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1061.0,684.0&gt;-&lt;1049.0,688.0&gt;-&lt;1038.5,681.5&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1038.5,681.5&gt;-&lt;1028.0,675.0&gt;-&lt;1025.0,663.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;1018.0,641.0&gt;--&lt;1018.0,641.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;652.0,632.0&gt;--&lt;652.0,632.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;820.0,254.0&gt;-&lt;820.0,254.0&gt;-&lt;819.5,237.0&gt;&gt;

* eth (U+00F0) contains a short segment B&lt;&lt;290.0,496.0&gt;-&lt;293.0,496.0&gt;-&lt;295.0,496.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;389.0,367.0&gt;--&lt;389.0,367.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;519.0,378.0&gt;--&lt;519.0,378.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;519.0,378.0&gt;--&lt;520.0,376.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;520.0,376.0&gt;--&lt;520.0,370.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;520.0,370.0&gt;--&lt;520.0,370.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;579.0,425.0&gt;--&lt;579.0,425.0&gt;&gt;

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

* uni2153 (U+2153) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;86.0,315.0&gt;--&lt;86.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;127.0,223.0&gt;--&lt;130.0,223.0&gt;&gt;

* uni2089 (U+2089) contains a short segment L&lt;&lt;133.0,92.0&gt;--&lt;131.0,92.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;86.0,700.0&gt;--&lt;86.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;127.0,608.0&gt;--&lt;130.0,608.0&gt;&gt;

* uni2079 (U+2079) contains a short segment L&lt;&lt;133.0,477.0&gt;--&lt;131.0,477.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;370.0,700.0&gt;--&lt;376.0,700.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;324.0,427.0&gt;-&lt;331.0,425.0&gt;-&lt;337.0,423.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;85.0,329.0&gt;-&lt;85.0,339.0&gt;-&lt;85.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;220.0,350.0&gt;-&lt;220.0,339.0&gt;-&lt;221.0,329.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;271.0,587.0&gt;--&lt;271.0,588.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment B&lt;&lt;284.0,700.0&gt;-&lt;286.0,700.0&gt;-&lt;287.0,700.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;265.0,0.0&gt;--&lt;265.0,4.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;265.0,4.0&gt;--&lt;250.0,4.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;96.0,696.0&gt;--&lt;96.0,700.0&gt;&gt;

* partialdiff (U+2202) contains a short segment B&lt;&lt;320.0,496.0&gt;-&lt;323.0,496.0&gt;-&lt;325.0,496.0&gt;&gt;

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
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[17] ElmsSans-Regular.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni0193 (U+0193): X=497.5,Y=700.5 (should be at cap-height 700?)

* Q (U+0051): X=487.5,Y=-2.0 (should be at baseline 0?)

* Scedilla (U+015E): X=272.0,Y=-278.0 (should be at descender -280?)

* uni2C72 (U+2C72): X=1082.0,Y=718.0 (should be at ascender 720?)

* aacute (U+00E1): X=323.0,Y=699.0 (should be at cap-height 700?)

* aacute (U+00E1): X=417.0,Y=699.0 (should be at cap-height 700?)

* uni1EB3 (U+1EB3): X=267.5,Y=700.5 (should be at cap-height 700?)

* uni1EB3 (U+1EB3): X=349.5,Y=702.0 (should be at cap-height 700?)

* uni1EB5 (U+1EB5): X=324.0,Y=720.5 (should be at ascender 720?)

* cacute (U+0107): X=295.0,Y=699.0 (should be at cap-height 700?)

* cacute (U+0107): X=389.0,Y=699.0 (should be at cap-height 700?)

* ccedilla (U+00E7): X=273.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=273.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=295.0,Y=699.0 (should be at cap-height 700?)

* uni1E09 (U+1E09): X=389.0,Y=699.0 (should be at cap-height 700?)

* eacute (U+00E9): X=289.0,Y=699.0 (should be at cap-height 700?)

* eacute (U+00E9): X=383.0,Y=699.0 (should be at cap-height 700?)

* uni0123 (U+0123): X=353.0,Y=699.0 (should be at cap-height 700?)

* iacute (U+00ED): X=118.0,Y=699.0 (should be at cap-height 700?)

* iacute (U+00ED): X=212.0,Y=699.0 (should be at cap-height 700?)

* uni1E3F (U+1E3F): X=450.0,Y=699.0 (should be at cap-height 700?)

* uni1E3F (U+1E3F): X=544.0,Y=699.0 (should be at cap-height 700?)

* nacute (U+0144): X=307.0,Y=699.0 (should be at cap-height 700?)

* nacute (U+0144): X=401.0,Y=699.0 (should be at cap-height 700?)

* oacute (U+00F3): X=303.0,Y=699.0 (should be at cap-height 700?)

* oacute (U+00F3): X=397.0,Y=699.0 (should be at cap-height 700?)

* uni1EDB (U+1EDB): X=303.0,Y=699.0 (should be at cap-height 700?)

* uni1EDB (U+1EDB): X=397.0,Y=699.0 (should be at cap-height 700?)

* oslashacute (U+01FF): X=303.0,Y=699.0 (should be at cap-height 700?)

* oslashacute (U+01FF): X=397.0,Y=699.0 (should be at cap-height 700?)

* r (U+0072): X=197.0,Y=478.5 (should be at x-height 480?)

* r (U+0072): X=336.5,Y=481.5 (should be at x-height 480?)

* racute (U+0155): X=235.0,Y=699.0 (should be at cap-height 700?)

* racute (U+0155): X=329.0,Y=699.0 (should be at cap-height 700?)

* sacute (U+015B): X=242.0,Y=699.0 (should be at cap-height 700?)

* sacute (U+015B): X=336.0,Y=699.0 (should be at cap-height 700?)

* scedilla (U+015F): X=220.0,Y=-278.0 (should be at descender -280?)

* uacute (U+00FA): X=304.0,Y=699.0 (should be at cap-height 700?)

* uacute (U+00FA): X=398.0,Y=699.0 (should be at cap-height 700?)

* uni1EE9 (U+1EE9): X=304.0,Y=699.0 (should be at cap-height 700?)

* uni1EE9 (U+1EE9): X=398.0,Y=699.0 (should be at cap-height 700?)

* wacute (U+1E83): X=405.0,Y=699.0 (should be at cap-height 700?)

* wacute (U+1E83): X=499.0,Y=699.0 (should be at cap-height 700?)

* y (U+0079): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=251.0,Y=1.0 (should be at baseline 0?)

* yacute (U+00FD): X=299.0,Y=699.0 (should be at cap-height 700?)

* yacute (U+00FD): X=393.0,Y=699.0 (should be at cap-height 700?)

* ycircumflex (U+0177): X=251.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=251.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=251.0,Y=1.0 (should be at baseline 0?)

* uni01B4 (U+01B4): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF7 (U+1EF7): X=251.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=251.0,Y=1.0 (should be at baseline 0?)

* zacute (U+017A): X=249.0,Y=699.0 (should be at cap-height 700?)

* zacute (U+017A): X=343.0,Y=699.0 (should be at cap-height 700?)

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

* uni01B3 (U+01B3): L&lt;&lt;328.0,370.0&gt;--&lt;551.0,700.0&gt;&gt; -&gt; L&lt;&lt;551.0,700.0&gt;--&lt;589.0,758.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;292.0,95.0&gt;--&lt;457.0,480.0&gt;&gt; -&gt; L&lt;&lt;457.0,480.0&gt;--&lt;485.0,543.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;20.0,315.0&gt;--&lt;84.0,315.0&gt;&gt; -&gt; L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt; -&gt; L&lt;&lt;84.0,315.0&gt;--&lt;92.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;20.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt; -&gt; L&lt;&lt;84.0,700.0&gt;--&lt;92.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;134.5,340.0&gt;-&lt;178.0,367.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;178.0,378.0&gt;-&lt;134.5,398.5&gt;&gt; = 11.630272951281148

* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;135.0,256.0&gt;&gt;/B&lt;&lt;135.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.258017480535134
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
<pre><code>* uni0187 (U+0187) contains a short segment B&lt;&lt;752.0,643.0&gt;-&lt;739.0,643.0&gt;-&lt;730.5,634.5&gt;&gt;

* uni0187 (U+0187) contains a short segment B&lt;&lt;730.5,634.5&gt;-&lt;722.0,626.0&gt;-&lt;722.0,613.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;20.0,355.0&gt;-&lt;20.0,363.0&gt;-&lt;21.5,373.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;21.5,373.0&gt;-&lt;23.0,383.0&gt;-&lt;24.0,389.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;711.0,693.0&gt;-&lt;698.0,693.0&gt;-&lt;689.5,684.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;689.5,684.5&gt;-&lt;681.0,676.0&gt;-&lt;681.0,663.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;133.0,618.0&gt;-&lt;120.0,618.0&gt;-&lt;111.5,609.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;111.5,609.5&gt;-&lt;103.0,601.0&gt;-&lt;103.0,588.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;248.0,380.0&gt;--&lt;248.0,380.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;66.0,-106.0&gt;-&lt;79.0,-106.0&gt;-&lt;87.5,-97.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;87.5,-97.5&gt;-&lt;96.0,-89.0&gt;-&lt;96.0,-76.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;524.0,623.0&gt;--&lt;525.0,623.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;900.0,700.0&gt;--&lt;901.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1038.0,733.0&gt;-&lt;1026.0,737.0&gt;-&lt;1015.5,731.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1015.5,731.0&gt;-&lt;1005.0,725.0&gt;-&lt;1000.0,713.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;996.0,700.0&gt;--&lt;996.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;618.0,656.0&gt;--&lt;617.0,657.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;812.0,254.0&gt;-&lt;812.0,254.0&gt;-&lt;811.5,240.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;518.0,360.0&gt;--&lt;518.0,360.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;143.0,283.0&gt;--&lt;149.0,288.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;149.0,288.0&gt;--&lt;148.0,289.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;148.0,289.0&gt;--&lt;149.0,289.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;378.0,390.0&gt;--&lt;378.0,390.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;464.0,410.0&gt;--&lt;465.0,410.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;534.0,445.0&gt;--&lt;534.0,445.0&gt;&gt;

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

* uni2153 (U+2153) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;84.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;27.0,162.0&gt;--&lt;27.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;84.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;27.0,547.0&gt;--&lt;27.0,547.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;105.0,335.0&gt;-&lt;105.0,342.0&gt;-&lt;105.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;195.0,350.0&gt;-&lt;195.0,342.0&gt;-&lt;195.0,335.0&gt;&gt;

* partialdiff (U+2202) contains a short segment L&lt;&lt;548.0,360.0&gt;--&lt;548.0,360.0&gt;&gt;

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
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[15] ElmsSans-ExtraBold.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: eogonek	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: ohorn	Contours detected: 3	Expected: 2

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni01B3 (U+01B3): L&lt;&lt;362.0,414.0&gt;--&lt;549.0,700.0&gt;&gt; -&gt; L&lt;&lt;549.0,700.0&gt;--&lt;595.0,771.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;323.0,166.0&gt;--&lt;458.0,480.0&gt;&gt; -&gt; L&lt;&lt;458.0,480.0&gt;--&lt;493.0,557.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;24.0,315.0&gt;--&lt;87.0,315.0&gt;&gt; -&gt; L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt; -&gt; L&lt;&lt;87.0,315.0&gt;--&lt;128.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;24.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt; -&gt; L&lt;&lt;87.0,700.0&gt;--&lt;128.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni01B2 (U+01B2): L&lt;&lt;566.0,623.0&gt;--&lt;574.0,552.0&gt;&gt;/L&lt;&lt;574.0,552.0&gt;--&lt;574.0,553.0&gt;&gt; = 6.4287477488298475

* uni01B2 (U+01B2): L&lt;&lt;574.0,552.0&gt;--&lt;574.0,553.0&gt;&gt;/B&lt;&lt;574.0,553.0&gt;-&lt;584.0,437.0&gt;-&lt;570.5,334.5&gt;&gt; = 4.927109947648964

* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;134.0,256.0&gt;&gt;/B&lt;&lt;134.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.570434385161475
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
<pre><code>* uni0193 (U+0193) contains a short segment B&lt;&lt;756.0,640.0&gt;-&lt;743.0,640.0&gt;-&lt;734.5,631.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;734.5,631.5&gt;-&lt;726.0,623.0&gt;-&lt;726.0,610.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;184.0,570.0&gt;-&lt;171.0,570.0&gt;-&lt;162.5,561.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;162.5,561.5&gt;-&lt;154.0,553.0&gt;-&lt;154.0,540.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;173.0,349.0&gt;--&lt;155.0,349.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;213.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;72.0,-82.0&gt;-&lt;85.0,-82.0&gt;-&lt;93.5,-73.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;93.5,-73.5&gt;-&lt;102.0,-65.0&gt;-&lt;102.0,-52.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;506.0,-64.0&gt;-&lt;519.0,-64.0&gt;-&lt;528.0,-55.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;528.0,-55.0&gt;-&lt;537.0,-46.0&gt;-&lt;537.0,-33.0&gt;&gt;

* uni0244 (U+0244) contains a short segment L&lt;&lt;812.0,313.0&gt;--&lt;812.0,294.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;574.0,552.0&gt;--&lt;574.0,553.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;878.0,657.0&gt;--&lt;878.0,657.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1069.0,668.0&gt;-&lt;1057.0,671.0&gt;-&lt;1046.5,664.5&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1046.5,664.5&gt;-&lt;1036.0,658.0&gt;-&lt;1033.0,646.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;1025.0,622.0&gt;--&lt;1026.0,622.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;664.0,624.0&gt;--&lt;663.0,624.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;822.0,254.0&gt;-&lt;822.0,254.0&gt;-&lt;821.5,236.0&gt;&gt;

* uni0188 (U+0188) contains a short segment L&lt;&lt;397.0,474.0&gt;--&lt;397.0,474.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;539.0,360.0&gt;--&lt;538.0,360.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;594.0,418.0&gt;--&lt;594.0,418.0&gt;&gt;

* one (U+0031) contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.lf contains a short segment L&lt;&lt;324.0,700.0&gt;--&lt;324.0,700.0&gt;&gt;

* one.osf contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.tf contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.tosf contains a short segment L&lt;&lt;194.0,700.0&gt;--&lt;194.0,700.0&gt;&gt;

* one.dnom contains a short segment L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* one.numr contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* onehalf (U+00BD) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni2153 (U+2153) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;87.0,315.0&gt;--&lt;87.0,315.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;87.0,700.0&gt;--&lt;87.0,700.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;388.0,303.0&gt;--&lt;388.0,303.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;388.0,130.0&gt;--&lt;388.0,130.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;78.0,327.0&gt;-&lt;78.0,338.0&gt;-&lt;78.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;78.0,350.0&gt;-&lt;78.0,361.0&gt;-&lt;78.0,371.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;229.0,371.0&gt;-&lt;229.0,361.0&gt;-&lt;229.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;229.0,350.0&gt;-&lt;229.0,338.0&gt;-&lt;230.0,327.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;273.0,577.0&gt;--&lt;273.0,578.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;281.0,0.0&gt;--&lt;281.0,2.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;112.0,698.0&gt;--&lt;112.0,700.0&gt;&gt;

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
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[17] ElmsSans-Thin.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* uni0162 (U+0162): L&lt;&lt;291.0,0.0&gt;--&lt;319.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni018F (U+018F): X=264.0,Y=698.0 (should be at cap-height 700?)

* Q (U+0051): X=517.5,Y=-1.0 (should be at baseline 0?)

* S (U+0053): X=335.0,Y=1.5 (should be at baseline 0?)

* Sacute (U+015A): X=335.0,Y=1.5 (should be at baseline 0?)

* Scaron (U+0160): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=335.0,Y=1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=250.0,Y=-278.0 (should be at descender -280?)

* Scircumflex (U+015C): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0218 (U+0218): X=335.0,Y=1.5 (should be at baseline 0?)

* uni1E62 (U+1E62): X=335.0,Y=1.5 (should be at baseline 0?)

* uni0162 (U+0162): X=257.0,Y=-278.0 (should be at descender -280?)

* uni0194 (U+0194): X=241.0,Y=-1.0 (should be at baseline 0?)

* uni0194 (U+0194): X=372.0,Y=-1.0 (should be at baseline 0?)

* uni01B3 (U+01B3): X=761.0,Y=721.0 (should be at ascender 720?)

* uni1EB3 (U+1EB3): X=319.5,Y=699.5 (should be at cap-height 700?)

* ae (U+00E6): X=557.0,Y=1.0 (should be at baseline 0?)

* c (U+0063): X=405.0,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=298.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=298.0,Y=-278.0 (should be at descender -280?)

* uni0229 (U+0229): X=340.0,Y=2.0 (should be at baseline 0?)

* uni0229 (U+0229): X=368.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=340.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=368.0,Y=2.0 (should be at baseline 0?)

* uni0283 (U+0283): X=250.5,Y=698.0 (should be at cap-height 700?)

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

* uni01B4 (U+01B4): X=145.0,Y=-279.0 (should be at descender -280?)

* uni01B4 (U+01B4): X=120.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=145.0,Y=-279.0 (should be at descender -280?)

* uni1EF7 (U+1EF7): X=120.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=145.0,Y=-279.0 (should be at descender -280?)

* uni1EF9 (U+1EF9): X=120.0,Y=-279.0 (should be at descender -280?)

* question (U+003F): X=172.0,Y=-2.0 (should be at baseline 0?)

* question (U+003F): X=200.0,Y=-2.0 (should be at baseline 0?)

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

* uni20B4 (U+20B4): X=225.5,Y=1.5 (should be at baseline 0?)

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

* uni01B3 (U+01B3): L&lt;&lt;298.0,310.0&gt;--&lt;551.0,700.0&gt;&gt; -&gt; L&lt;&lt;551.0,700.0&gt;--&lt;583.0,749.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;252.0,29.0&gt;--&lt;447.0,481.0&gt;&gt; -&gt; L&lt;&lt;447.0,481.0&gt;--&lt;470.0,535.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;32.0,315.0&gt;--&lt;68.0,315.0&gt;&gt; -&gt; L&lt;&lt;68.0,315.0&gt;--&lt;68.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;68.0,315.0&gt;--&lt;68.0,315.0&gt;&gt; -&gt; L&lt;&lt;68.0,315.0&gt;--&lt;81.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;32.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;68.0,700.0&gt;--&lt;68.0,700.0&gt;&gt; -&gt; L&lt;&lt;68.0,700.0&gt;--&lt;81.0,700.0&gt;&gt;

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

* uni0190 (U+0190): B&lt;&lt;131.5,339.5&gt;-&lt;175.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;146.0,382.0&gt;-&lt;93.0,426.5&gt;&gt; = 12.641520572632942

* uni01B1 (U+01B1): B&lt;&lt;175.5,638.0&gt;-&lt;213.0,669.0&gt;-&lt;256.0,678.0&gt;&gt;/L&lt;&lt;256.0,678.0&gt;--&lt;88.0,678.0&gt;&gt; = 11.821488340607226

* uni01B1 (U+01B1): L&lt;&lt;708.0,678.0&gt;--&lt;540.0,678.0&gt;&gt;/B&lt;&lt;540.0,678.0&gt;-&lt;586.0,670.0&gt;-&lt;626.0,639.5&gt;&gt; = 9.865806943084365

* uni025B (U+025B): B&lt;&lt;77.0,211.5&gt;-&lt;114.0,249.0&gt;-&lt;174.0,256.0&gt;&gt;/B&lt;&lt;174.0,256.0&gt;-&lt;114.0,263.0&gt;-&lt;77.0,294.0&gt;&gt; = 13.308850092013184
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
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[15] ElmsSans-Medium.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni01B3 (U+01B3): L&lt;&lt;336.0,381.0&gt;--&lt;550.0,700.0&gt;&gt; -&gt; L&lt;&lt;550.0,700.0&gt;--&lt;591.0,761.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;299.0,113.0&gt;--&lt;457.0,480.0&gt;&gt; -&gt; L&lt;&lt;457.0,480.0&gt;--&lt;487.0,547.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;21.0,315.0&gt;--&lt;85.0,315.0&gt;&gt; -&gt; L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt; -&gt; L&lt;&lt;85.0,315.0&gt;--&lt;101.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;21.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt; -&gt; L&lt;&lt;85.0,700.0&gt;--&lt;101.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;127.5,341.0&gt;-&lt;168.0,367.0&gt;-&lt;219.0,372.0&gt;&gt;/B&lt;&lt;219.0,372.0&gt;-&lt;168.0,378.0&gt;-&lt;127.5,399.0&gt;&gt; = 12.30917614427747

* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;135.0,256.0&gt;&gt;/B&lt;&lt;135.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.258017480535134
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
<pre><code>* uni0187 (U+0187) contains a short segment B&lt;&lt;754.0,630.0&gt;-&lt;741.0,630.0&gt;-&lt;732.5,621.5&gt;&gt;

* uni0187 (U+0187) contains a short segment B&lt;&lt;732.5,621.5&gt;-&lt;724.0,613.0&gt;-&lt;724.0,600.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;722.0,680.0&gt;-&lt;709.0,680.0&gt;-&lt;700.5,671.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;700.5,671.5&gt;-&lt;692.0,663.0&gt;-&lt;692.0,650.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;146.0,606.0&gt;-&lt;133.0,606.0&gt;-&lt;124.5,597.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;124.5,597.5&gt;-&lt;116.0,589.0&gt;-&lt;116.0,576.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;68.0,-100.0&gt;-&lt;80.0,-100.0&gt;-&lt;89.0,-91.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;89.0,-91.5&gt;-&lt;98.0,-83.0&gt;-&lt;98.0,-70.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;536.0,606.0&gt;--&lt;537.0,606.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;895.0,689.0&gt;--&lt;895.0,689.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1046.0,717.0&gt;-&lt;1034.0,720.0&gt;-&lt;1023.0,714.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1023.0,714.0&gt;-&lt;1012.0,708.0&gt;-&lt;1008.0,696.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;1003.0,680.0&gt;--&lt;1003.0,680.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;629.0,648.0&gt;--&lt;629.0,648.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;815.0,254.0&gt;-&lt;815.0,254.0&gt;-&lt;814.5,239.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;518.0,360.0&gt;--&lt;518.0,360.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;482.0,399.0&gt;--&lt;483.0,399.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;549.0,438.0&gt;--&lt;549.0,438.0&gt;&gt;

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

* uni2153 (U+2153) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;85.0,315.0&gt;--&lt;85.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;27.0,162.0&gt;--&lt;27.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;85.0,700.0&gt;--&lt;85.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;27.0,547.0&gt;--&lt;27.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;305.0,420.0&gt;--&lt;309.0,419.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;99.0,333.0&gt;-&lt;98.0,341.0&gt;-&lt;98.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;203.0,350.0&gt;-&lt;203.0,341.0&gt;-&lt;204.0,333.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;267.0,608.0&gt;--&lt;267.0,608.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment B&lt;&lt;288.0,700.0&gt;-&lt;290.0,700.0&gt;-&lt;291.0,700.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;234.0,0.0&gt;--&lt;234.0,8.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;234.0,8.0&gt;--&lt;229.0,8.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;50.0,692.0&gt;--&lt;65.0,692.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;65.0,692.0&gt;--&lt;65.0,700.0&gt;&gt;

* partialdiff (U+2202) contains a short segment L&lt;&lt;548.0,360.0&gt;--&lt;548.0,360.0&gt;&gt;

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
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[16] ElmsSans-Light.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni01B3 (U+01B3): L&lt;&lt;318.0,350.0&gt;--&lt;551.0,700.0&gt;&gt; -&gt; L&lt;&lt;551.0,700.0&gt;--&lt;587.0,755.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;278.0,73.0&gt;--&lt;454.0,480.0&gt;&gt; -&gt; L&lt;&lt;454.0,480.0&gt;--&lt;480.0,540.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;24.0,315.0&gt;--&lt;78.0,315.0&gt;&gt; -&gt; L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt; -&gt; L&lt;&lt;78.0,315.0&gt;--&lt;88.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;24.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt; -&gt; L&lt;&lt;78.0,700.0&gt;--&lt;88.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;133.5,339.5&gt;-&lt;177.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;177.0,378.0&gt;-&lt;133.5,399.5&gt;&gt; = 12.451658128851511

* uni01B1 (U+01B1): L&lt;&lt;708.0,641.0&gt;--&lt;580.0,641.0&gt;&gt;/B&lt;&lt;580.0,641.0&gt;-&lt;631.0,628.0&gt;-&lt;671.5,582.5&gt;&gt; = 14.300277449185575

* uni025B (U+025B): B&lt;&lt;70.0,217.0&gt;-&lt;100.0,251.0&gt;-&lt;148.0,256.0&gt;&gt;/B&lt;&lt;148.0,256.0&gt;-&lt;100.0,262.0&gt;-&lt;70.0,291.5&gt;&gt; = 13.071879402875274
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
<pre><code>* uni018F (U+018F) contains a short segment B&lt;&lt;28.0,357.0&gt;-&lt;28.0,364.0&gt;-&lt;29.5,373.5&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;29.5,373.5&gt;-&lt;31.0,383.0&gt;-&lt;32.0,389.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;444.0,374.0&gt;--&lt;444.0,398.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni0193 (U+0193) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;756.0,348.0&gt;--&lt;756.0,348.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;445.0,606.0&gt;--&lt;445.0,606.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;513.0,612.0&gt;--&lt;513.0,612.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment B&lt;&lt;513.0,612.0&gt;-&lt;513.0,606.0&gt;-&lt;514.0,600.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;515.0,586.0&gt;--&lt;515.0,586.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;886.0,700.0&gt;--&lt;886.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1023.0,749.0&gt;-&lt;1005.0,754.0&gt;-&lt;988.5,745.5&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;988.5,745.5&gt;-&lt;972.0,737.0&gt;-&lt;966.0,720.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;960.0,700.0&gt;--&lt;960.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;604.0,665.0&gt;--&lt;603.0,666.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;820.0,263.0&gt;-&lt;820.0,263.0&gt;-&lt;819.5,249.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;522.0,360.0&gt;--&lt;521.0,360.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;381.0,376.0&gt;--&lt;381.0,376.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;447.0,392.0&gt;--&lt;448.0,392.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;514.0,453.0&gt;--&lt;514.0,453.0&gt;&gt;

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

* uni2153 (U+2153) contains a short segment L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;82.0,700.0&gt;--&lt;82.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;78.0,315.0&gt;--&lt;78.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;29.0,162.0&gt;--&lt;29.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;78.0,700.0&gt;--&lt;78.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;29.0,547.0&gt;--&lt;29.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;279.0,408.0&gt;-&lt;286.0,406.0&gt;-&lt;290.0,405.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;124.0,327.0&gt;-&lt;123.0,338.0&gt;-&lt;123.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;193.0,350.0&gt;-&lt;193.0,338.0&gt;-&lt;194.0,327.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;189.0,317.0&gt;--&lt;189.0,310.0&gt;&gt;

* partialdiff (U+2202) contains a short segment L&lt;&lt;548.0,360.0&gt;--&lt;548.0,360.0&gt;&gt;

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
    <summary>⚠️ <b>WARN</b> Checking OS/2 achVendID. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-vendor-id">googlefonts/vendor_id</a></summary>
    <div>







* ⚠️ **WARN** <p>OS/2 VendorID value 'NONE' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at <a href="https://www.microsoft.com/typography/links/vendorlist.aspx">https://www.microsoft.com/typography/links/vendorlist.aspx</a></p>
 [code: unknown]



</div>
</details>
</div>
</details>

<details><summary>[18] ElmsSans-ExtraLight.ttf</summary>
<div>
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
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

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

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni024D	Contours detected: 2	Expected: 1

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
<pre><code>- uni0194.001

- uni0263.001
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tifinagh, syriac, duployan, math, hebrew, todhri, malayalam, canadian-aboriginal, tai-le</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: tai-le, cherokee</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: coptic, todhri</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: syriac, gothic, thai, cherokee, sunuwar, caucasian-albanian, tifinagh</li>
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
<li>U+2153 VULGAR FRACTION ONE THIRD: try adding symbols</li>
<li>U+2154 VULGAR FRACTION TWO THIRDS: try adding symbols</li>
<li>U+215B VULGAR FRACTION ONE EIGHTH: try adding symbols</li>
<li>U+215C VULGAR FRACTION THREE EIGHTHS: try adding symbols</li>
<li>U+215D VULGAR FRACTION FIVE EIGHTHS: try adding symbols</li>
<li>U+215E VULGAR FRACTION SEVEN EIGHTHS: try adding symbols</li>
<li>U+2190 LEFTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math</li>
<li>U+2194 LEFT RIGHT ARROW: try adding one of: symbols, math</li>
<li>U+2195 UP DOWN ARROW: try adding one of: symbols, math</li>
<li>U+2196 NORTH WEST ARROW: try adding one of: symbols, math</li>
<li>U+2197 NORTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2198 SOUTH EAST ARROW: try adding one of: symbols, math</li>
<li>U+2199 SOUTH WEST ARROW: try adding one of: symbols, math</li>
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
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* ⚠️ **WARN** <p>No dotted circle glyph present</p>
 [code: missing-dotted-circle]



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

* uni0187 (U+0187): X=778.0,Y=719.0 (should be at ascender 720?)

* uni0187 (U+0187): X=845.0,Y=719.0 (should be at ascender 720?)

* Q (U+0051): X=508.0,Y=-1.5 (should be at baseline 0?)

* Scedilla (U+015E): X=258.0,Y=-278.0 (should be at descender -280?)

* uni0162 (U+0162): X=287.0,Y=2.0 (should be at baseline 0?)

* uni0162 (U+0162): X=327.0,Y=2.0 (should be at baseline 0?)

* uni0194 (U+0194): X=380.5,Y=0.5 (should be at baseline 0?)

* uni1EB3 (U+1EB3): X=329.0,Y=718.0 (should be at ascender 720?)

* uni1EB3 (U+1EB3): X=391.5,Y=719.5 (should be at ascender 720?)

* uni1EA3 (U+1EA3): X=246.0,Y=700.5 (should be at cap-height 700?)

* ae (U+00E6): X=546.5,Y=-0.5 (should be at baseline 0?)

* c (U+0063): X=398.5,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=290.0,Y=-278.0 (should be at descender -280?)

* uni1E09 (U+1E09): X=290.0,Y=-278.0 (should be at descender -280?)

* uni1EBB (U+1EBB): X=220.0,Y=700.5 (should be at cap-height 700?)

* uni0263.001: X=313.0,Y=-1.0 (should be at baseline 0?)

* uni0263.001: X=149.0,Y=-1.0 (should be at baseline 0?)

* uni1EC9 (U+1EC9): X=24.0,Y=700.5 (should be at cap-height 700?)

* uni0199 (U+0199): X=87.0,Y=698.0 (should be at cap-height 700?)

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

* uni01B4 (U+01B4): X=123.0,Y=-279.0 (should be at descender -280?)

* uni01B4 (U+01B4): X=168.0,Y=-279.0 (should be at descender -280?)

* uni01B4 (U+01B4): X=123.0,Y=-279.0 (should be at descender -280?)

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

* question (U+003F): X=180.5,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=225.5,Y=1.0 (should be at baseline 0?)

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

* uni01B3 (U+01B3): L&lt;&lt;308.0,330.0&gt;--&lt;551.0,700.0&gt;&gt; -&gt; L&lt;&lt;551.0,700.0&gt;--&lt;585.0,752.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;265.0,51.0&gt;--&lt;450.0,481.0&gt;&gt; -&gt; L&lt;&lt;450.0,481.0&gt;--&lt;475.0,538.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;28.0,315.0&gt;--&lt;73.0,315.0&gt;&gt; -&gt; L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt;

* uni2081 (U+2081): L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt; -&gt; L&lt;&lt;73.0,315.0&gt;--&lt;84.0,315.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;28.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* uni2153 (U+2153): L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt; -&gt; L&lt;&lt;73.0,700.0&gt;--&lt;84.0,700.0&gt;&gt;

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
<pre><code>* uni0190 (U+0190): B&lt;&lt;132.5,339.5&gt;-&lt;176.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;148.0,382.0&gt;-&lt;94.0,425.5&gt;&gt; = 12.904478140724157

* uni01B1 (U+01B1): B&lt;&lt;142.0,599.5&gt;-&lt;184.0,647.0&gt;-&lt;236.0,659.0&gt;&gt;/L&lt;&lt;236.0,659.0&gt;--&lt;88.0,659.0&gt;&gt; = 12.994616791916512

* uni01B1 (U+01B1): L&lt;&lt;708.0,659.0&gt;--&lt;560.0,659.0&gt;&gt;/B&lt;&lt;560.0,659.0&gt;-&lt;616.0,648.0&gt;-&lt;661.5,600.0&gt;&gt; = 11.113040535948294

* uni025B (U+025B): B&lt;&lt;73.5,214.0&gt;-&lt;107.0,250.0&gt;-&lt;161.0,256.0&gt;&gt;/B&lt;&lt;161.0,256.0&gt;-&lt;107.0,263.0&gt;-&lt;73.5,293.0&gt;&gt; = 13.726234897177134
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
<pre><code>* uni018F (U+018F) contains a short segment B&lt;&lt;37.0,359.0&gt;-&lt;37.0,365.0&gt;-&lt;38.0,374.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;38.0,374.0&gt;-&lt;39.0,383.0&gt;-&lt;41.0,390.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;453.0,370.0&gt;--&lt;453.0,390.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni0193 (U+0193) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;765.0,354.0&gt;--&lt;765.0,354.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;453.0,597.0&gt;--&lt;453.0,597.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;503.0,586.0&gt;--&lt;502.0,586.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;871.0,700.0&gt;--&lt;872.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;924.0,700.0&gt;--&lt;925.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;606.0,700.0&gt;--&lt;606.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;589.0,675.0&gt;--&lt;589.0,675.0&gt;&gt;

* ae (U+00E6) contains a short segment B&lt;&lt;828.0,271.0&gt;-&lt;828.0,271.0&gt;-&lt;827.5,257.5&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;525.0,360.0&gt;--&lt;525.0,360.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;128.0,269.0&gt;--&lt;113.0,269.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;383.0,370.0&gt;--&lt;383.0,370.0&gt;&gt;

* uni028B (U+028B) contains a short segment L&lt;&lt;432.0,367.0&gt;--&lt;432.0,367.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;494.0,461.0&gt;--&lt;494.0,461.0&gt;&gt;

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

* uni2153 (U+2153) contains a short segment L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* onequarter (U+00BC) contains a short segment L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* oneeighth (U+215B) contains a short segment L&lt;&lt;80.0,700.0&gt;--&lt;80.0,700.0&gt;&gt;

* uni2081 (U+2081) contains a short segment L&lt;&lt;73.0,315.0&gt;--&lt;73.0,315.0&gt;&gt;

* uni2086 (U+2086) contains a short segment L&lt;&lt;31.0,162.0&gt;--&lt;31.0,162.0&gt;&gt;

* uni00B9 (U+00B9) contains a short segment L&lt;&lt;73.0,700.0&gt;--&lt;73.0,700.0&gt;&gt;

* uni2076 (U+2076) contains a short segment L&lt;&lt;31.0,547.0&gt;--&lt;31.0,547.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;263.0,399.0&gt;-&lt;270.0,398.0&gt;-&lt;275.5,396.5&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;275.5,396.5&gt;-&lt;281.0,395.0&gt;-&lt;286.0,393.0&gt;&gt;

* partialdiff (U+2202) contains a short segment L&lt;&lt;549.0,360.0&gt;--&lt;548.0,360.0&gt;&gt;

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
| 0 | 0 | 50 | 209 | 1651 | 97 | 1514 | 0 | 
| 0% | 0% | 1% | 6% | 47% | 3% | 43% | 0% | 



**Note:** The following loglevels were omitted in this report:


* SKIP
* INFO
* PASS
* DEBUG
