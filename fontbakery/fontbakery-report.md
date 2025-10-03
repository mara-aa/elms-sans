## FontBakery report

fontbakery version: 1.1.0







## Check results



<details><summary>[1] Family checks</summary>
<div>
<details>
    <summary>🔥 <b>FAIL</b> Ensure VFs have 'ital' STAT axis. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/opentype.html#opentype-STAT-ital-axis">opentype/STAT/ital_axis</a></summary>
    <div>







* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Light.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Italic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Medium.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Regular.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-MediumItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Thin.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-BoldItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Bold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-LightItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-SemiBold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ThinItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraBold.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraLightItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-Black.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-BlackItalic.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraLight.ttf has no STAT table</p>
 [code: no-stat]



* 🔥 **FAIL** <p>Font fonts/ttf/ElmsSans-ExtraBoldItalic.ttf has no STAT table</p>
 [code: no-stat]



</div>
</details>
</div>
</details>

<details><summary>[17] ElmsSans-Light.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;497.0,0.0&gt;--&lt;552.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* dotlessi_ogonek: L&lt;&lt;66.0,0.0&gt;--&lt;121.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;66.0,0.0&gt;--&lt;121.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=185.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=548.0,Y=702.0 (should be at cap-height 700?)

* uni1EB2 (U+1EB2): X=293.0,Y=999.5 (should be at ascender 1000?)

* uni1EB4 (U+1EB4): X=341.0,Y=999.5 (should be at ascender 1000?)

* uni1EA8 (U+1EA8): X=439.0,Y=1002.0 (should be at ascender 1000?)

* uni1EA8 (U+1EA8): X=376.5,Y=1001.0 (should be at ascender 1000?)

* uni1EAA (U+1EAA): X=279.5,Y=998.5 (should be at ascender 1000?)

* uni1EC2 (U+1EC2): X=427.0,Y=1002.0 (should be at ascender 1000?)

* uni1EC2 (U+1EC2): X=364.5,Y=1001.0 (should be at ascender 1000?)

* uni1EC4 (U+1EC4): X=267.5,Y=998.5 (should be at ascender 1000?)

* uni1ED4 (U+1ED4): X=524.0,Y=1002.0 (should be at ascender 1000?)

* uni1ED4 (U+1ED4): X=461.5,Y=1001.0 (should be at ascender 1000?)

* uni1ED6 (U+1ED6): X=364.5,Y=998.5 (should be at ascender 1000?)

* Q (U+0051): X=504.0,Y=-1.5 (should be at baseline 0?)

* uni1E7A (U+1E7A): X=425.5,Y=999.0 (should be at ascender 1000?)

* uni1E7A (U+1E7A): X=492.0,Y=999.0 (should be at ascender 1000?)

* uni1E7A (U+1E7A): X=270.0,Y=999.0 (should be at ascender 1000?)

* uni1E7A (U+1E7A): X=336.5,Y=999.0 (should be at ascender 1000?)

* uniA7B8 (U+A7B8): X=274.0,Y=1.5 (should be at baseline 0?)

* uni0194 (U+0194): X=384.5,Y=1.5 (should be at baseline 0?)

* uni01B3 (U+01B3): X=744.0,Y=702.0 (should be at cap-height 700?)

* uni01B3 (U+01B3): X=611.0,Y=698.0 (should be at cap-height 700?)

* uni1EA9 (U+1EA9): X=423.5,Y=702.0 (should be at cap-height 700?)

* ae (U+00E6): X=536.0,Y=1.5 (should be at baseline 0?)

* ae (U+00E6): X=316.5,Y=1.5 (should be at baseline 0?)

* uni01E3 (U+01E3): X=536.0,Y=1.5 (should be at baseline 0?)

* uni01E3 (U+01E3): X=316.5,Y=1.5 (should be at baseline 0?)

* c (U+0063): X=389.0,Y=478.5 (should be at x-height 480?)

* uni1EC3 (U+1EC3): X=390.5,Y=702.0 (should be at cap-height 700?)

* eogonek (U+0119): X=355.0,Y=-2.0 (should be at baseline 0?)

* uni0247 (U+0247): X=193.5,Y=1.0 (should be at baseline 0?)

* uni0123 (U+0123): X=336.0,Y=701.0 (should be at cap-height 700?)

* uni0199 (U+0199): X=92.5,Y=698.0 (should be at cap-height 700?)

* uni1ED5 (U+1ED5): X=404.5,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=47.0,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=101.0,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=355.0,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=409.0,Y=702.0 (should be at cap-height 700?)

* r (U+0072): X=337.5,Y=478.0 (should be at x-height 480?)

* uni1E7B (U+1E7B): X=370.0,Y=698.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=370.0,Y=698.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=214.0,Y=698.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=214.0,Y=698.0 (should be at cap-height 700?)

* uniA7B9 (U+A7B9): X=228.5,Y=1.5 (should be at baseline 0?)

* y (U+0079): X=452.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=514.0,Y=481.0 (should be at x-height 480?)

* nine.numr: X=223.5,Y=699.0 (should be at cap-height 700?)

* nine.numr: X=89.5,Y=699.0 (should be at cap-height 700?)

* uni2079 (U+2079): X=223.5,Y=701.0 (should be at cap-height 700?)

* uni2079 (U+2079): X=89.5,Y=701.0 (should be at cap-height 700?)

* quotesinglbase (U+201A): X=71.5,Y=1.0 (should be at baseline 0?)

* quotedblbase (U+201E): X=256.5,Y=1.0 (should be at baseline 0?)

* quotedblbase (U+201E): X=71.5,Y=1.0 (should be at baseline 0?)

* quotedblleft (U+201C): X=145.0,Y=699.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=330.0,Y=699.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=259.0,Y=701.0 (should be at cap-height 700?)

* quotedblright (U+201D): X=74.0,Y=701.0 (should be at cap-height 700?)

* quoteleft (U+2018): X=145.0,Y=699.0 (should be at cap-height 700?)

* quoteright (U+2019): X=74.0,Y=701.0 (should be at cap-height 700?)

* comma (U+002C): X=88.5,Y=1.0 (should be at baseline 0?)

* exclam (U+0021): X=92.0,Y=1.5 (should be at baseline 0?)

* exclam (U+0021): X=173.5,Y=1.5 (should be at baseline 0?)

* question (U+003F): X=212.0,Y=1.0 (should be at baseline 0?)

* question (U+003F): X=293.5,Y=1.0 (should be at baseline 0?)

* colonmonetary (U+20A1): X=507.0,Y=701.0 (should be at cap-height 700?)

* dollar (U+0024): X=228.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=282.0,Y=699.0 (should be at cap-height 700?)

* uni25CF (U+25CF): X=402.0,Y=2.0 (should be at baseline 0?)

* uni25CF (U+25CF): X=402.0,Y=2.0 (should be at baseline 0?)

* circle (U+25CB): X=402.0,Y=2.0 (should be at baseline 0?)

* circle (U+25CB): X=402.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=124.0,Y=698.5 (should be at cap-height 700?)

* registered (U+00AE): X=201.0,Y=698.0 (should be at cap-height 700?)

* uni02BC (U+02BC): X=74.0,Y=701.0 (should be at cap-height 700?)

* uni03020309.case: X=346.5,Y=699.5 (should be at cap-height 700?)

* uni0312 (U+0312): X=130.0,Y=701.0 (should be at cap-height 700?)

* uni03020309: X=309.5,Y=702.0 (should be at cap-height 700?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* G (U+0047): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gbreve (U+011E): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gcaron (U+01E6): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gcircumflex (U+011C): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gdotaccent (U+0120): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* five.dnom: L&lt;&lt;99.0,155.0&gt;--&lt;57.0,180.0&gt;&gt; -&gt; L&lt;&lt;57.0,180.0&gt;--&lt;54.0,182.0&gt;&gt;

* five.numr: L&lt;&lt;99.0,509.0&gt;--&lt;57.0,534.0&gt;&gt; -&gt; L&lt;&lt;57.0,534.0&gt;--&lt;54.0,536.0&gt;&gt;

* fiveeighths (U+215D): L&lt;&lt;99.0,509.0&gt;--&lt;57.0,534.0&gt;&gt; -&gt; L&lt;&lt;57.0,534.0&gt;--&lt;54.0,536.0&gt;&gt;

* uni0122 (U+0122): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni01B2 (U+01B2): L&lt;&lt;449.0,601.0&gt;--&lt;449.0,602.0&gt;&gt; -&gt; L&lt;&lt;449.0,602.0&gt;--&lt;446.0,633.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;309.0,340.0&gt;--&lt;547.0,700.0&gt;&gt; -&gt; L&lt;&lt;547.0,700.0&gt;--&lt;582.0,754.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;272.0,62.0&gt;--&lt;452.0,481.0&gt;&gt; -&gt; L&lt;&lt;452.0,481.0&gt;--&lt;478.0,539.0&gt;&gt;

* uni01E4 (U+01E4): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni01F4 (U+01F4): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni1E20 (U+1E20): L&lt;&lt;737.0,375.0&gt;--&lt;737.0,331.0&gt;&gt; -&gt; L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni2075 (U+2075): L&lt;&lt;99.0,515.0&gt;--&lt;57.0,540.0&gt;&gt; -&gt; L&lt;&lt;57.0,540.0&gt;--&lt;54.0,542.0&gt;&gt;

* uni2085 (U+2085): L&lt;&lt;99.0,30.0&gt;--&lt;57.0,55.0&gt;&gt; -&gt; L&lt;&lt;57.0,55.0&gt;--&lt;54.0,57.0&gt;&gt;

* uniA7B2 (U+A7B2): L&lt;&lt;345.0,235.0&gt;--&lt;345.0,236.0&gt;&gt; -&gt; L&lt;&lt;345.0,236.0&gt;--&lt;345.0,700.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;133.0,339.5&gt;-&lt;176.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;148.0,381.0&gt;-&lt;94.0,424.5&gt;&gt; = 12.231007132570777

* uni01B1 (U+01B1): B&lt;&lt;137.0,591.0&gt;-&lt;177.0,638.0&gt;-&lt;226.0,650.0&gt;&gt;/L&lt;&lt;226.0,650.0&gt;--&lt;88.0,650.0&gt;&gt; = 13.760785111791225

* uni01B1 (U+01B1): L&lt;&lt;708.0,650.0&gt;--&lt;570.0,650.0&gt;&gt;/B&lt;&lt;570.0,650.0&gt;-&lt;623.0,638.0&gt;-&lt;666.0,591.5&gt;&gt; = 12.757532160876671

* uni025B (U+025B): B&lt;&lt;71.5,216.0&gt;-&lt;103.0,251.0&gt;-&lt;155.0,256.0&gt;&gt;/B&lt;&lt;155.0,256.0&gt;-&lt;103.0,262.0&gt;-&lt;71.5,292.0&gt;&gt; = 12.074269212305435

* uni2126 (U+2126): B&lt;&lt;666.0,108.5&gt;-&lt;623.0,62.0&gt;-&lt;570.0,50.0&gt;&gt;/L&lt;&lt;570.0,50.0&gt;--&lt;708.0,50.0&gt;&gt; = 12.757532160876671

* uni2126 (U+2126): L&lt;&lt;88.0,50.0&gt;--&lt;226.0,50.0&gt;&gt;/B&lt;&lt;226.0,50.0&gt;-&lt;177.0,62.0&gt;-&lt;137.0,109.0&gt;&gt; = 13.760785111791225
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;395.0,522.0&gt;--&lt;394.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;629.0,542.0&gt;--&lt;628.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;108.0,162.0&gt;--&lt;105.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;160.0,720.0&gt;--&lt;158.0,162.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;105.0,-234.0&gt;--&lt;108.0,324.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;158.0,324.0&gt;--&lt;160.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;180.0,542.0&gt;--&lt;179.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;345.0,542.0&gt;--&lt;344.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;108.0,41.0&gt;--&lt;105.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;160.0,720.0&gt;--&lt;158.0,41.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;110.0,772.0&gt;--&lt;109.0,580.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;525.0,772.0&gt;--&lt;524.0,589.0&gt;&gt;

* uni0223 (U+0223): L&lt;&lt;46.0,525.0&gt;--&lt;47.0,702.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;110.0,525.0&gt;--&lt;109.0,175.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;50.0,175.0&gt;--&lt;52.0,624.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;138.0,625.0&gt;--&lt;587.0,623.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;488.0,565.0&gt;--&lt;138.0,566.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;529.0,186.0&gt;--&lt;530.0,536.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;589.0,536.0&gt;--&lt;587.0,87.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;149.0,146.0&gt;--&lt;499.0,145.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;499.0,86.0&gt;--&lt;50.0,88.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;77.5,649.5&gt;-&lt;63.0,638.0&gt;-&lt;58.0,629.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;871.0,-182.0&gt;-&lt;886.0,-170.0&gt;-&lt;891.0,-161.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;34.0,358.0&gt;-&lt;34.0,365.0&gt;-&lt;35.5,374.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;35.5,374.0&gt;-&lt;37.0,383.0&gt;-&lt;38.0,390.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;450.0,372.0&gt;--&lt;450.0,394.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;762.0,351.0&gt;--&lt;762.0,351.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni0193 (U+0193) contains a short segment L&lt;&lt;762.0,351.0&gt;--&lt;762.0,351.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;737.0,331.0&gt;--&lt;737.0,330.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;279.0,0.0&gt;--&lt;272.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;330.0,0.0&gt;--&lt;326.0,0.0&gt;&gt;

* uniA7B8 (U+A7B8) contains a short segment L&lt;&lt;628.0,700.0&gt;--&lt;649.0,700.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;507.0,607.0&gt;--&lt;507.0,607.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;507.0,607.0&gt;--&lt;507.0,605.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;507.0,605.0&gt;--&lt;509.0,586.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;509.0,586.0&gt;--&lt;508.0,586.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;875.0,700.0&gt;--&lt;875.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;938.0,700.0&gt;--&lt;939.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;612.0,700.0&gt;--&lt;612.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;612.0,700.0&gt;--&lt;611.0,698.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;593.0,670.0&gt;--&lt;592.0,670.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;524.0,360.0&gt;--&lt;523.0,360.0&gt;&gt;

* kgreenlandic (U+0138) contains a short segment L&lt;&lt;142.0,244.0&gt;--&lt;128.0,244.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;148.0,266.0&gt;--&lt;129.0,266.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;240.0,223.0&gt;-&lt;231.0,225.0&gt;-&lt;222.5,227.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;222.5,227.0&gt;-&lt;214.0,229.0&gt;-&lt;205.0,231.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;500.0,470.0&gt;--&lt;500.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;500.0,480.0&gt;--&lt;510.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;504.0,457.0&gt;--&lt;504.0,457.0&gt;&gt;

* f_f_i.liga contains a short segment L&lt;&lt;113.0,480.0&gt;--&lt;113.0,507.0&gt;&gt;

* five.dnom contains a short segment L&lt;&lt;57.0,180.0&gt;--&lt;54.0,182.0&gt;&gt;

* five.numr contains a short segment L&lt;&lt;57.0,534.0&gt;--&lt;54.0,536.0&gt;&gt;

* fiveeighths (U+215D) contains a short segment L&lt;&lt;57.0,534.0&gt;--&lt;54.0,536.0&gt;&gt;

* uni2085 (U+2085) contains a short segment L&lt;&lt;57.0,55.0&gt;--&lt;54.0,57.0&gt;&gt;

* uni2075 (U+2075) contains a short segment L&lt;&lt;57.0,540.0&gt;--&lt;54.0,542.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;282.0,403.0&gt;-&lt;288.0,402.0&gt;-&lt;294.5,400.5&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;294.5,400.5&gt;-&lt;301.0,399.0&gt;-&lt;307.0,398.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;135.0,324.0&gt;-&lt;134.0,336.0&gt;-&lt;134.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;194.0,350.0&gt;-&lt;194.0,337.0&gt;-&lt;195.0,324.0&gt;&gt;

* uni20AD (U+20AD) contains a short segment L&lt;&lt;121.0,387.0&gt;--&lt;134.0,387.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;364.0,690.0&gt;-&lt;375.0,692.0&gt;-&lt;386.5,693.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;386.5,693.0&gt;-&lt;398.0,694.0&gt;-&lt;410.0,694.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;452.0,637.0&gt;-&lt;442.0,639.0&gt;-&lt;431.0,640.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;431.0,640.0&gt;-&lt;420.0,641.0&gt;-&lt;410.0,641.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;190.0,322.0&gt;--&lt;190.0,305.0&gt;&gt;
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

<details><summary>[14] ElmsSans-Italic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* dotlessi_ogonek: L&lt;&lt;26.0,0.0&gt;--&lt;94.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* eng (U+014B): L&lt;&lt;406.0,-48.0&gt;--&lt;424.0,0.0&gt;&gt; -&gt; L&lt;&lt;424.0,0.0&gt;--&lt;519.0,272.0&gt;&gt;

* eng (U+014B): L&lt;&lt;591.0,267.0&gt;--&lt;497.0,0.0&gt;&gt; -&gt; L&lt;&lt;497.0,0.0&gt;--&lt;480.0,-45.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;134.0,392.0&gt;--&lt;170.0,389.0&gt;&gt; -&gt; L&lt;&lt;170.0,389.0&gt;--&lt;751.0,389.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;355.0,700.0&gt;--&lt;161.0,148.0&gt;&gt; -&gt; L&lt;&lt;161.0,148.0&gt;--&lt;142.0,96.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;63.0,79.0&gt;--&lt;88.0,148.0&gt;&gt; -&gt; L&lt;&lt;88.0,148.0&gt;--&lt;282.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;385.0,599.0&gt;--&lt;175.0,0.0&gt;&gt; -&gt; L&lt;&lt;175.0,0.0&gt;--&lt;144.0,-86.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;77.0,-68.0&gt;--&lt;102.0,0.0&gt;&gt; -&gt; L&lt;&lt;102.0,0.0&gt;--&lt;348.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-74.0,-280.0&gt;--&lt;194.0,480.0&gt;&gt; -&gt; L&lt;&lt;194.0,480.0&gt;--&lt;230.0,583.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;297.0,576.0&gt;--&lt;263.0,480.0&gt;&gt; -&gt; L&lt;&lt;263.0,480.0&gt;--&lt;236.0,405.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;211.0,480.0&gt;--&lt;239.0,561.0&gt;&gt; -&gt; L&lt;&lt;239.0,561.0&gt;--&lt;263.0,630.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;331.0,616.0&gt;--&lt;312.0,561.0&gt;&gt; -&gt; L&lt;&lt;312.0,561.0&gt;--&lt;284.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;158.0,-185.0&gt;--&lt;187.0,-103.0&gt;&gt; -&gt; L&lt;&lt;187.0,-103.0&gt;--&lt;446.0,633.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;519.0,633.0&gt;--&lt;260.0,-103.0&gt;&gt; -&gt; L&lt;&lt;260.0,-103.0&gt;--&lt;234.0,-177.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;401.0,355.0&gt;--&lt;752.0,700.0&gt;&gt; -&gt; L&lt;&lt;752.0,700.0&gt;--&lt;808.0,758.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;267.0,79.0&gt;--&lt;581.0,480.0&gt;&gt; -&gt; L&lt;&lt;581.0,480.0&gt;--&lt;630.0,544.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;26.0,0.0&gt;--&lt;228.0,577.0&gt;&gt; -&gt; L&lt;&lt;228.0,577.0&gt;--&lt;253.0,646.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;317.0,632.0&gt;--&lt;297.0,577.0&gt;&gt; -&gt; L&lt;&lt;297.0,577.0&gt;--&lt;236.0,403.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;423.0,-64.0&gt;--&lt;447.0,0.0&gt;&gt; -&gt; L&lt;&lt;447.0,0.0&gt;--&lt;478.0,90.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;769.0,720.0&gt;--&lt;515.0,0.0&gt;&gt; -&gt; L&lt;&lt;515.0,0.0&gt;--&lt;494.0,-59.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;586.0,396.0&gt;--&lt;646.0,566.0&gt;&gt; -&gt; L&lt;&lt;646.0,566.0&gt;--&lt;668.0,630.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;732.0,616.0&gt;--&lt;715.0,566.0&gt;&gt; -&gt; L&lt;&lt;715.0,566.0&gt;--&lt;515.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;588.0,398.0&gt;--&lt;603.0,440.0&gt;&gt; -&gt; L&lt;&lt;603.0,440.0&gt;--&lt;628.0,509.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;693.0,495.0&gt;--&lt;673.0,440.0&gt;&gt; -&gt; L&lt;&lt;673.0,440.0&gt;--&lt;503.0,-42.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;246.0,480.0&gt;--&lt;128.0,143.0&gt;&gt; -&gt; L&lt;&lt;128.0,143.0&gt;--&lt;107.0,84.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;36.0,79.0&gt;--&lt;59.0,143.0&gt;&gt; -&gt; L&lt;&lt;59.0,143.0&gt;--&lt;178.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;110.0,-38.0&gt;--&lt;124.0,0.0&gt;&gt; -&gt; L&lt;&lt;124.0,0.0&gt;--&lt;293.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;288.0,259.0&gt;--&lt;197.0,0.0&gt;&gt; -&gt; L&lt;&lt;197.0,0.0&gt;--&lt;184.0,-35.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;202.0,294.0&gt;--&lt;99.0,0.0&gt;&gt; -&gt; L&lt;&lt;99.0,0.0&gt;--&lt;77.0,-59.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;3.0,-64.0&gt;--&lt;26.0,0.0&gt;&gt; -&gt; L&lt;&lt;26.0,0.0&gt;--&lt;194.0,480.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;231.0,377.0&gt;--&lt;212.0,322.0&gt;&gt; -&gt; L&lt;&lt;212.0,322.0&gt;--&lt;99.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;26.0,0.0&gt;--&lt;139.0,322.0&gt;&gt; -&gt; L&lt;&lt;139.0,322.0&gt;--&lt;163.0,391.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-20.0,-81.0&gt;--&lt;9.0,0.0&gt;&gt; -&gt; L&lt;&lt;9.0,0.0&gt;--&lt;256.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;179.0,274.0&gt;--&lt;82.0,0.0&gt;&gt; -&gt; L&lt;&lt;82.0,0.0&gt;--&lt;56.0,-73.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1183.0,716.0&gt;--&lt;1152.0,672.0&gt;&gt; -&gt; L&lt;&lt;1152.0,672.0&gt;--&lt;703.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* integral (U+222B): L&lt;&lt;248.0,-32.0&gt;--&lt;212.0,-32.0&gt;&gt;/L&lt;&lt;212.0,-32.0&gt;--&lt;247.0,-35.0&gt;&gt; = 4.899092453787774

* integral (U+222B): L&lt;&lt;466.0,561.0&gt;--&lt;502.0,560.0&gt;&gt;/L&lt;&lt;502.0,560.0&gt;--&lt;467.0,563.0&gt;&gt; = 3.3079521825931653

* l.alt: L&lt;&lt;157.0,183.0&gt;--&lt;120.0,183.0&gt;&gt;/L&lt;&lt;120.0,183.0&gt;--&lt;156.0,181.0&gt;&gt; = 3.1798301198641643

* sterling (U+00A3): L&lt;&lt;269.0,313.0&gt;--&lt;233.0,313.0&gt;&gt;/L&lt;&lt;233.0,313.0&gt;--&lt;268.0,310.0&gt;&gt; = 4.899092453787774

* sterling (U+00A3): L&lt;&lt;271.0,525.0&gt;--&lt;307.0,525.0&gt;&gt;/L&lt;&lt;307.0,525.0&gt;--&lt;272.0,528.0&gt;&gt; = 4.899092453787774

* uni0162 (U+0162): L&lt;&lt;220.0,-86.0&gt;--&lt;221.0,-81.0&gt;&gt;/L&lt;&lt;221.0,-81.0&gt;--&lt;219.0,-86.0&gt;&gt; = 10.491477012331565

* uni0190 (U+0190): B&lt;&lt;211.0,340.5&gt;-&lt;264.0,366.0&gt;-&lt;323.0,372.0&gt;&gt;/B&lt;&lt;323.0,372.0&gt;-&lt;270.0,378.0&gt;-&lt;234.0,400.0&gt;&gt; = 12.265543284250203

* uni01AD (U+01AD): L&lt;&lt;177.0,177.0&gt;--&lt;140.0,177.0&gt;&gt;/L&lt;&lt;140.0,177.0&gt;--&lt;175.0,174.0&gt;&gt; = 4.899092453787774

* uni01B1 (U+01B1): B&lt;&lt;289.5,579.5&gt;-&lt;341.0,624.0&gt;-&lt;391.0,637.0&gt;&gt;/L&lt;&lt;391.0,637.0&gt;--&lt;270.0,636.0&gt;&gt; = 14.100708139303768

* uni025B (U+025B): B&lt;&lt;103.5,219.5&gt;-&lt;143.0,252.0&gt;-&lt;195.0,256.0&gt;&gt;/B&lt;&lt;195.0,256.0&gt;-&lt;150.0,262.0&gt;-&lt;130.5,292.5&gt;&gt; = 11.993348723586953

* uni2126 (U+2126): B&lt;&lt;675.5,120.5&gt;-&lt;621.0,76.0&gt;-&lt;567.0,63.0&gt;&gt;/L&lt;&lt;567.0,63.0&gt;--&lt;688.0,64.0&gt;&gt; = 13.062348310399319
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

<details><summary>[16] ElmsSans-Medium.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;478.0,0.0&gt;--&lt;560.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* dotlessi_ogonek: L&lt;&lt;70.0,0.0&gt;--&lt;152.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;70.0,0.0&gt;--&lt;152.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* uni01B3 (U+01B3): L&lt;&lt;326.0,370.0&gt;--&lt;549.0,700.0&gt;&gt; -&gt; L&lt;&lt;549.0,700.0&gt;--&lt;587.0,758.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;292.0,95.0&gt;--&lt;457.0,480.0&gt;&gt; -&gt; L&lt;&lt;457.0,480.0&gt;--&lt;485.0,543.0&gt;&gt;
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
<pre><code>* Lcaron (U+013D): L&lt;&lt;396.0,522.0&gt;--&lt;395.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;635.0,542.0&gt;--&lt;634.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;102.0,172.0&gt;--&lt;100.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;182.0,720.0&gt;--&lt;180.0,172.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;100.0,-234.0&gt;--&lt;102.0,314.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;180.0,314.0&gt;--&lt;182.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;221.0,542.0&gt;--&lt;220.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;375.0,542.0&gt;--&lt;374.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;102.0,51.0&gt;--&lt;100.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;182.0,720.0&gt;--&lt;180.0,51.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

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
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;101.0,626.0&gt;-&lt;89.0,617.0&gt;-&lt;86.0,610.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;861.0,-157.5&gt;-&lt;873.0,-148.0&gt;-&lt;876.0,-141.0&gt;&gt;

* uni0187 (U+0187) contains a short segment B&lt;&lt;768.0,643.0&gt;-&lt;755.0,643.0&gt;-&lt;746.5,634.5&gt;&gt;

* uni0187 (U+0187) contains a short segment B&lt;&lt;746.5,634.5&gt;-&lt;738.0,626.0&gt;-&lt;738.0,613.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;36.0,355.0&gt;-&lt;36.0,363.0&gt;-&lt;37.5,373.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;37.5,373.0&gt;-&lt;39.0,383.0&gt;-&lt;40.0,389.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;727.0,693.0&gt;-&lt;714.0,693.0&gt;-&lt;705.5,684.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;705.5,684.5&gt;-&lt;697.0,676.0&gt;-&lt;697.0,663.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;744.0,319.0&gt;--&lt;744.0,319.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;168.0,618.0&gt;-&lt;155.0,618.0&gt;-&lt;146.5,609.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;146.5,609.5&gt;-&lt;138.0,601.0&gt;-&lt;138.0,588.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uniA740 (U+A740) contains a short segment L&lt;&lt;283.0,380.0&gt;--&lt;283.0,380.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;99.0,379.0&gt;-&lt;94.0,380.0&gt;-&lt;89.0,380.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;89.0,454.0&gt;-&lt;95.0,454.0&gt;-&lt;99.0,453.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;187.0,392.0&gt;-&lt;192.0,391.0&gt;-&lt;197.0,391.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;197.0,317.0&gt;-&lt;191.0,317.0&gt;-&lt;187.0,318.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;101.0,-106.0&gt;-&lt;114.0,-106.0&gt;-&lt;122.5,-97.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;122.5,-97.5&gt;-&lt;131.0,-89.0&gt;-&lt;131.0,-76.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;328.0,425.0&gt;-&lt;332.0,424.0&gt;-&lt;336.5,423.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;336.5,423.0&gt;-&lt;341.0,422.0&gt;-&lt;347.0,420.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;347.0,0.0&gt;--&lt;338.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;273.0,0.0&gt;--&lt;259.0,0.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;524.0,623.0&gt;--&lt;525.0,623.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;898.0,700.0&gt;--&lt;899.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1036.0,733.0&gt;-&lt;1024.0,737.0&gt;-&lt;1013.5,731.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1013.5,731.0&gt;-&lt;1003.0,725.0&gt;-&lt;998.0,713.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;994.0,700.0&gt;--&lt;994.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;616.0,656.0&gt;--&lt;615.0,657.0&gt;&gt;

* uni023C (U+023C) contains a short segment L&lt;&lt;302.0,418.0&gt;--&lt;298.0,418.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;518.0,360.0&gt;--&lt;518.0,360.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;324.0,-13.0&gt;-&lt;318.0,-14.0&gt;-&lt;306.0,-15.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;306.0,-15.0&gt;-&lt;294.0,-16.0&gt;-&lt;289.0,-16.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* kgreenlandic (U+0138) contains a short segment L&lt;&lt;178.0,244.0&gt;--&lt;165.0,244.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;163.0,283.0&gt;--&lt;169.0,288.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;169.0,288.0&gt;--&lt;168.0,289.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;168.0,289.0&gt;--&lt;169.0,289.0&gt;&gt;

* uni019B (U+019B) contains a short segment L&lt;&lt;212.0,526.0&gt;--&lt;204.0,543.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;51.0,454.0&gt;-&lt;58.0,454.0&gt;-&lt;64.0,453.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;148.0,393.0&gt;-&lt;153.0,391.0&gt;-&lt;159.0,391.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;159.0,317.0&gt;-&lt;153.0,317.0&gt;-&lt;148.0,318.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;237.0,212.0&gt;-&lt;231.0,213.0&gt;-&lt;225.0,214.5&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;225.0,214.5&gt;-&lt;219.0,216.0&gt;-&lt;213.0,217.0&gt;&gt;

* uni2C66 (U+2C66) contains a short segment L&lt;&lt;314.0,480.0&gt;--&lt;324.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;499.0,468.0&gt;--&lt;499.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;499.0,480.0&gt;--&lt;511.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;534.0,445.0&gt;--&lt;534.0,445.0&gt;&gt;

* f_f.liga contains a short segment L&lt;&lt;90.0,480.0&gt;--&lt;90.0,497.0&gt;&gt;

* f_f_i.liga contains a short segment L&lt;&lt;90.0,480.0&gt;--&lt;90.0,497.0&gt;&gt;

* pi (U+03C0) contains a short segment B&lt;&lt;484.5,85.0&gt;-&lt;491.0,78.0&gt;-&lt;499.0,78.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;363.0,700.0&gt;--&lt;376.0,700.0&gt;&gt;

* colonmonetary (U+20A1) contains a short segment B&lt;&lt;395.0,66.0&gt;-&lt;398.0,66.0&gt;-&lt;402.0,66.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;121.0,335.0&gt;-&lt;121.0,342.0&gt;-&lt;121.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;211.0,350.0&gt;-&lt;211.0,342.0&gt;-&lt;211.0,335.0&gt;&gt;

* uni20AD (U+20AD) contains a short segment L&lt;&lt;155.0,400.0&gt;--&lt;177.0,400.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;394.0,706.0&gt;-&lt;402.0,707.0&gt;-&lt;412.0,707.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;412.0,707.5&gt;-&lt;422.0,708.0&gt;-&lt;431.0,708.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;431.0,708.0&gt;-&lt;439.0,708.0&gt;-&lt;446.0,708.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;446.0,708.0&gt;-&lt;453.0,708.0&gt;-&lt;460.0,707.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;460.0,624.0&gt;-&lt;453.0,625.0&gt;-&lt;446.0,625.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;446.0,625.5&gt;-&lt;439.0,626.0&gt;-&lt;431.0,626.0&gt;&gt;
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

<details><summary>[16] ElmsSans-Regular.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* dotlessi_ogonek: L&lt;&lt;68.0,0.0&gt;--&lt;136.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;68.0,0.0&gt;--&lt;136.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* k (U+006B): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E31 (U+1E31): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni01E9 (U+01E9): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni0137 (U+0137): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E33 (U+1E33): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni0199 (U+0199): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uni1E35 (U+1E35): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.

* uniA741 (U+A741): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* k (U+006B): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0137 (U+0137): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0199 (U+0199): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;318.0,355.0&gt;--&lt;548.0,700.0&gt;&gt; -&gt; L&lt;&lt;548.0,700.0&gt;--&lt;585.0,756.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;282.0,79.0&gt;--&lt;455.0,480.0&gt;&gt; -&gt; L&lt;&lt;455.0,480.0&gt;--&lt;481.0,541.0&gt;&gt;

* uni01E9 (U+01E9): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E31 (U+1E31): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E33 (U+1E33): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E35 (U+1E35): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uniA741 (U+A741): L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt; -&gt; L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;133.5,339.5&gt;-&lt;177.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;177.0,378.0&gt;-&lt;133.5,399.0&gt;&gt; = 12.451658128851511

* uni025B (U+025B): B&lt;&lt;69.0,218.0&gt;-&lt;98.0,252.0&gt;-&lt;145.0,256.0&gt;&gt;/B&lt;&lt;145.0,256.0&gt;-&lt;98.0,262.0&gt;-&lt;69.0,291.0&gt;&gt; = 12.13951939564975
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;396.0,522.0&gt;--&lt;395.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;632.0,542.0&gt;--&lt;631.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;105.0,167.0&gt;--&lt;103.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;171.0,720.0&gt;--&lt;169.0,167.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;103.0,-234.0&gt;--&lt;105.0,319.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;169.0,319.0&gt;--&lt;171.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;201.0,542.0&gt;--&lt;200.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;360.0,542.0&gt;--&lt;359.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;105.0,46.0&gt;--&lt;103.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;171.0,720.0&gt;--&lt;169.0,46.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;526.0,773.0&gt;--&lt;525.0,582.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;50.0,173.0&gt;--&lt;51.0,630.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;141.0,630.0&gt;--&lt;598.0,629.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;473.0,557.0&gt;--&lt;141.0,556.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;599.0,539.0&gt;--&lt;598.0,82.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;175.0,155.0&gt;--&lt;507.0,156.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;507.0,82.0&gt;--&lt;50.0,83.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;89.0,638.0&gt;-&lt;76.0,628.0&gt;-&lt;72.0,620.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;866.0,-169.5&gt;-&lt;879.0,-159.0&gt;-&lt;884.0,-151.0&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;35.0,357.0&gt;-&lt;35.0,364.0&gt;-&lt;36.5,373.5&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;36.5,373.5&gt;-&lt;38.0,383.0&gt;-&lt;39.0,389.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;763.0,346.0&gt;--&lt;763.0,346.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* uni0193 (U+0193) contains a short segment L&lt;&lt;763.0,346.0&gt;--&lt;763.0,346.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;741.0,325.0&gt;--&lt;740.0,325.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;85.0,447.0&gt;-&lt;94.0,447.0&gt;-&lt;101.0,445.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;191.0,319.0&gt;-&lt;182.0,319.0&gt;-&lt;174.0,320.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;324.0,413.0&gt;-&lt;327.0,412.0&gt;-&lt;330.0,411.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;276.0,0.0&gt;--&lt;266.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;339.0,0.0&gt;--&lt;332.0,0.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;515.0,615.0&gt;--&lt;516.0,615.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment B&lt;&lt;516.0,615.0&gt;-&lt;517.0,606.0&gt;-&lt;517.0,597.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;519.0,587.0&gt;--&lt;518.0,586.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;886.0,700.0&gt;--&lt;887.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1024.0,745.0&gt;-&lt;1007.0,750.0&gt;-&lt;992.0,742.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;992.0,742.0&gt;-&lt;977.0,734.0&gt;-&lt;972.0,718.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;966.0,700.0&gt;--&lt;966.0,700.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;604.0,663.0&gt;--&lt;604.0,663.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;521.0,360.0&gt;--&lt;520.0,360.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* kgreenlandic (U+0138) contains a short segment L&lt;&lt;160.0,244.0&gt;--&lt;146.0,244.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;146.0,282.0&gt;--&lt;150.0,286.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;150.0,286.0&gt;--&lt;150.0,286.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;238.0,218.0&gt;-&lt;231.0,219.0&gt;-&lt;224.0,220.5&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;224.0,220.5&gt;-&lt;217.0,222.0&gt;-&lt;209.0,224.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;500.0,469.0&gt;--&lt;500.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;500.0,480.0&gt;--&lt;510.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;519.0,451.0&gt;--&lt;519.0,451.0&gt;&gt;

* f_f_i.liga contains a short segment L&lt;&lt;101.0,480.0&gt;--&lt;101.0,502.0&gt;&gt;

* five.dnom contains a short segment L&lt;&lt;57.0,181.0&gt;--&lt;56.0,182.0&gt;&gt;

* five.numr contains a short segment L&lt;&lt;57.0,537.0&gt;--&lt;56.0,538.0&gt;&gt;

* fiveeighths (U+215D) contains a short segment L&lt;&lt;57.0,537.0&gt;--&lt;56.0,538.0&gt;&gt;

* uni2085 (U+2085) contains a short segment L&lt;&lt;57.0,56.0&gt;--&lt;56.0,57.0&gt;&gt;

* uni2075 (U+2075) contains a short segment L&lt;&lt;57.0,541.0&gt;--&lt;56.0,542.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;299.0,412.0&gt;-&lt;305.0,411.0&gt;-&lt;311.0,409.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;128.0,329.0&gt;-&lt;128.0,339.0&gt;-&lt;128.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;203.0,350.0&gt;-&lt;203.0,339.0&gt;-&lt;203.0,329.0&gt;&gt;

* uni20AD (U+20AD) contains a short segment L&lt;&lt;138.0,393.0&gt;--&lt;156.0,393.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;379.0,698.0&gt;-&lt;389.0,699.0&gt;-&lt;399.5,700.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;399.5,700.0&gt;-&lt;410.0,701.0&gt;-&lt;420.0,701.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;456.0,631.0&gt;-&lt;448.0,632.0&gt;-&lt;438.5,632.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;438.5,632.5&gt;-&lt;429.0,633.0&gt;-&lt;420.0,633.0&gt;&gt;

* sterling (U+00A3) contains a short segment L&lt;&lt;199.0,315.0&gt;--&lt;199.0,313.0&gt;&gt;
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

<details><summary>[14] ElmsSans-SemiBoldItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;618.0,0.0&gt;--&lt;618.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* aogonek (U+0105): L&lt;&lt;416.0,0.0&gt;--&lt;518.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;230.0,274.0&gt;--&lt;230.0,274.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;230.0,274.0&gt;--&lt;230.0,274.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;618.0,0.0&gt;--&lt;618.0,0.0&gt;&gt; -&gt; L&lt;&lt;618.0,0.0&gt;--&lt;618.0,0.0&gt;&gt;

* eng (U+014B): L&lt;&lt;391.0,-42.0&gt;--&lt;406.0,0.0&gt;&gt; -&gt; L&lt;&lt;406.0,0.0&gt;--&lt;500.0,266.0&gt;&gt;

* eng (U+014B): L&lt;&lt;604.0,259.0&gt;--&lt;513.0,0.0&gt;&gt; -&gt; L&lt;&lt;513.0,0.0&gt;--&lt;499.0,-38.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;539.0,253.0&gt;&gt; -&gt; L&lt;&lt;539.0,253.0&gt;--&lt;524.0,211.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;-3.0,0.0&gt;--&lt;20.0,67.0&gt;&gt; -&gt; L&lt;&lt;20.0,67.0&gt;--&lt;29.0,103.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;137.0,399.0&gt;--&lt;193.0,395.0&gt;&gt; -&gt; L&lt;&lt;193.0,395.0&gt;--&lt;721.0,395.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;389.0,700.0&gt;--&lt;202.0,167.0&gt;&gt; -&gt; L&lt;&lt;202.0,167.0&gt;--&lt;184.0,117.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;65.0,85.0&gt;--&lt;95.0,167.0&gt;&gt; -&gt; L&lt;&lt;95.0,167.0&gt;--&lt;282.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;390.0,557.0&gt;--&lt;194.0,0.0&gt;&gt; -&gt; L&lt;&lt;194.0,0.0&gt;--&lt;160.0,-94.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;64.0,-65.0&gt;--&lt;87.0,0.0&gt;&gt; -&gt; L&lt;&lt;87.0,0.0&gt;--&lt;333.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-73.0,-280.0&gt;--&lt;195.0,480.0&gt;&gt; -&gt; L&lt;&lt;195.0,480.0&gt;--&lt;230.0,579.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;325.0,559.0&gt;--&lt;297.0,480.0&gt;&gt; -&gt; L&lt;&lt;297.0,480.0&gt;--&lt;280.0,433.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;209.0,480.0&gt;--&lt;235.0,553.0&gt;&gt; -&gt; L&lt;&lt;235.0,553.0&gt;--&lt;259.0,623.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;358.0,600.0&gt;--&lt;342.0,553.0&gt;&gt; -&gt; L&lt;&lt;342.0,553.0&gt;--&lt;316.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;142.0,-174.0&gt;--&lt;172.0,-87.0&gt;&gt; -&gt; L&lt;&lt;172.0,-87.0&gt;--&lt;414.0,600.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;521.0,600.0&gt;--&lt;279.0,-87.0&gt;&gt; -&gt; L&lt;&lt;279.0,-87.0&gt;--&lt;254.0,-159.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;425.0,383.0&gt;--&lt;748.0,700.0&gt;&gt; -&gt; L&lt;&lt;748.0,700.0&gt;--&lt;810.0,765.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;300.0,118.0&gt;--&lt;584.0,480.0&gt;&gt; -&gt; L&lt;&lt;584.0,480.0&gt;--&lt;638.0,551.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;26.0,0.0&gt;--&lt;225.0,565.0&gt;&gt; -&gt; L&lt;&lt;225.0,565.0&gt;--&lt;252.0,642.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;344.0,612.0&gt;--&lt;327.0,565.0&gt;&gt; -&gt; L&lt;&lt;327.0,565.0&gt;--&lt;280.0,431.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;393.0,-70.0&gt;--&lt;418.0,0.0&gt;&gt; -&gt; L&lt;&lt;418.0,0.0&gt;--&lt;440.0,62.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;774.0,720.0&gt;--&lt;520.0,0.0&gt;&gt; -&gt; L&lt;&lt;520.0,0.0&gt;--&lt;500.0,-54.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;567.0,421.0&gt;--&lt;612.0,549.0&gt;&gt; -&gt; L&lt;&lt;612.0,549.0&gt;--&lt;638.0,626.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;730.0,596.0&gt;--&lt;714.0,549.0&gt;&gt; -&gt; L&lt;&lt;714.0,549.0&gt;--&lt;520.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;566.0,421.0&gt;--&lt;576.0,448.0&gt;&gt; -&gt; L&lt;&lt;576.0,448.0&gt;--&lt;601.0,520.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;695.0,490.0&gt;--&lt;680.0,448.0&gt;&gt; -&gt; L&lt;&lt;680.0,448.0&gt;--&lt;507.0,-43.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;285.0,480.0&gt;--&lt;171.0,156.0&gt;&gt; -&gt; L&lt;&lt;171.0,156.0&gt;--&lt;152.0,101.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;43.0,85.0&gt;--&lt;68.0,156.0&gt;&gt; -&gt; L&lt;&lt;68.0,156.0&gt;--&lt;182.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;106.0,-34.0&gt;--&lt;119.0,0.0&gt;&gt; -&gt; L&lt;&lt;119.0,0.0&gt;--&lt;287.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;313.0,249.0&gt;--&lt;226.0,0.0&gt;&gt; -&gt; L&lt;&lt;226.0,0.0&gt;--&lt;215.0,-30.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;2.0,-68.0&gt;--&lt;26.0,0.0&gt;&gt; -&gt; L&lt;&lt;26.0,0.0&gt;--&lt;195.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;230.0,274.0&gt;--&lt;133.0,0.0&gt;&gt; -&gt; L&lt;&lt;133.0,0.0&gt;--&lt;114.0,-52.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;230.0,274.0&gt;--&lt;230.0,274.0&gt;&gt; -&gt; L&lt;&lt;230.0,274.0&gt;--&lt;230.0,274.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;258.0,353.0&gt;--&lt;242.0,310.0&gt;&gt; -&gt; L&lt;&lt;242.0,310.0&gt;--&lt;133.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;26.0,0.0&gt;--&lt;135.0,310.0&gt;&gt; -&gt; L&lt;&lt;135.0,310.0&gt;--&lt;159.0,377.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-25.0,-87.0&gt;--&lt;6.0,0.0&gt;&gt; -&gt; L&lt;&lt;6.0,0.0&gt;--&lt;252.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;206.0,267.0&gt;--&lt;113.0,0.0&gt;&gt; -&gt; L&lt;&lt;113.0,0.0&gt;--&lt;87.0,-72.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1205.0,689.0&gt;--&lt;1176.0,649.0&gt;&gt; -&gt; L&lt;&lt;1176.0,649.0&gt;--&lt;741.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* integral (U+222B): L&lt;&lt;273.0,-15.0&gt;--&lt;220.0,-15.0&gt;&gt;/L&lt;&lt;220.0,-15.0&gt;--&lt;273.0,-18.0&gt;&gt; = 3.239700296102106

* integral (U+222B): L&lt;&lt;438.0,543.0&gt;--&lt;492.0,543.0&gt;&gt;/L&lt;&lt;492.0,543.0&gt;--&lt;439.0,547.0&gt;&gt; = 4.316027519865585

* l.alt: L&lt;&lt;196.0,197.0&gt;--&lt;143.0,197.0&gt;&gt;/L&lt;&lt;143.0,197.0&gt;--&lt;195.0,193.0&gt;&gt; = 4.398705354995508

* sterling (U+00A3): L&lt;&lt;253.0,515.0&gt;--&lt;307.0,515.0&gt;&gt;/L&lt;&lt;307.0,515.0&gt;--&lt;254.0,519.0&gt;&gt; = 4.316027519865585

* uni0162 (U+0162): L&lt;&lt;224.0,-101.0&gt;--&lt;228.0,-86.0&gt;&gt;/L&lt;&lt;228.0,-86.0&gt;--&lt;222.0,-101.0&gt;&gt; = 6.86999230821421

* uni0190 (U+0190): B&lt;&lt;203.0,342.0&gt;-&lt;252.0,367.0&gt;-&lt;308.0,372.0&gt;&gt;/B&lt;&lt;308.0,372.0&gt;-&lt;260.0,379.0&gt;-&lt;227.0,400.5&gt;&gt; = 13.399310222195037

* uni01AD (U+01AD): L&lt;&lt;215.0,194.0&gt;--&lt;161.0,194.0&gt;&gt;/L&lt;&lt;161.0,194.0&gt;--&lt;213.0,191.0&gt;&gt; = 3.301865674434948

* uni025B (U+025B): B&lt;&lt;101.0,221.5&gt;-&lt;137.0,252.0&gt;-&lt;187.0,256.0&gt;&gt;/B&lt;&lt;187.0,256.0&gt;-&lt;146.0,262.0&gt;-&lt;128.5,292.0&gt;&gt; = 12.899571590327666
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

<details><summary>[14] ElmsSans-MediumItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;437.0,0.0&gt;--&lt;519.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* dotlessi_ogonek: L&lt;&lt;28.0,0.0&gt;--&lt;110.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;28.0,0.0&gt;--&lt;110.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;218.0,289.0&gt;--&lt;218.0,289.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;218.0,289.0&gt;--&lt;218.0,289.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* eng (U+014B): L&lt;&lt;397.0,-47.0&gt;--&lt;414.0,0.0&gt;&gt; -&gt; L&lt;&lt;414.0,0.0&gt;--&lt;510.0,272.0&gt;&gt;

* eng (U+014B): L&lt;&lt;596.0,266.0&gt;--&lt;502.0,0.0&gt;&gt; -&gt; L&lt;&lt;502.0,0.0&gt;--&lt;487.0,-41.0&gt;&gt;

* five (U+0035): L&lt;&lt;217.0,312.0&gt;--&lt;164.0,356.0&gt;&gt; -&gt; L&lt;&lt;164.0,356.0&gt;--&lt;157.0,361.0&gt;&gt;

* five.lf: L&lt;&lt;233.0,312.0&gt;--&lt;180.0,356.0&gt;&gt; -&gt; L&lt;&lt;180.0,356.0&gt;--&lt;173.0,361.0&gt;&gt;

* five.osf: L&lt;&lt;217.0,312.0&gt;--&lt;164.0,356.0&gt;&gt; -&gt; L&lt;&lt;164.0,356.0&gt;--&lt;157.0,361.0&gt;&gt;

* five.tf: L&lt;&lt;217.0,312.0&gt;--&lt;164.0,356.0&gt;&gt; -&gt; L&lt;&lt;164.0,356.0&gt;--&lt;157.0,361.0&gt;&gt;

* five.tosf: L&lt;&lt;217.0,312.0&gt;--&lt;164.0,356.0&gt;&gt; -&gt; L&lt;&lt;164.0,356.0&gt;--&lt;157.0,361.0&gt;&gt;

* k (U+006B): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;537.0,248.0&gt;&gt; -&gt; L&lt;&lt;537.0,248.0&gt;--&lt;530.0,228.0&gt;&gt;

* uni0137 (U+0137): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;135.0,392.0&gt;--&lt;178.0,389.0&gt;&gt; -&gt; L&lt;&lt;178.0,389.0&gt;--&lt;737.0,389.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;372.0,700.0&gt;--&lt;178.0,148.0&gt;&gt; -&gt; L&lt;&lt;178.0,148.0&gt;--&lt;160.0,99.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;65.0,77.0&gt;--&lt;90.0,148.0&gt;&gt; -&gt; L&lt;&lt;90.0,148.0&gt;--&lt;284.0,700.0&gt;&gt;

* uni0199 (U+0199): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;380.0,578.0&gt;--&lt;177.0,0.0&gt;&gt; -&gt; L&lt;&lt;177.0,0.0&gt;--&lt;143.0,-97.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;63.0,-73.0&gt;--&lt;89.0,0.0&gt;&gt; -&gt; L&lt;&lt;89.0,0.0&gt;--&lt;335.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-71.0,-280.0&gt;--&lt;197.0,480.0&gt;&gt; -&gt; L&lt;&lt;197.0,480.0&gt;--&lt;233.0,583.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;312.0,574.0&gt;--&lt;279.0,480.0&gt;&gt; -&gt; L&lt;&lt;279.0,480.0&gt;--&lt;257.0,418.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;212.0,480.0&gt;--&lt;241.0,561.0&gt;&gt; -&gt; L&lt;&lt;241.0,561.0&gt;--&lt;266.0,633.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;347.0,614.0&gt;--&lt;329.0,561.0&gt;&gt; -&gt; L&lt;&lt;329.0,561.0&gt;--&lt;300.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;151.0,-187.0&gt;--&lt;183.0,-96.0&gt;&gt; -&gt; L&lt;&lt;183.0,-96.0&gt;--&lt;435.0,618.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;523.0,618.0&gt;--&lt;271.0,-96.0&gt;&gt; -&gt; L&lt;&lt;271.0,-96.0&gt;--&lt;243.0,-175.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;414.0,370.0&gt;--&lt;753.0,700.0&gt;&gt; -&gt; L&lt;&lt;753.0,700.0&gt;--&lt;811.0,760.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;283.0,96.0&gt;--&lt;584.0,480.0&gt;&gt; -&gt; L&lt;&lt;584.0,480.0&gt;--&lt;634.0,546.0&gt;&gt;

* uni01E9 (U+01E9): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;28.0,0.0&gt;--&lt;231.0,577.0&gt;&gt; -&gt; L&lt;&lt;231.0,577.0&gt;--&lt;256.0,649.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;332.0,630.0&gt;--&lt;313.0,577.0&gt;&gt; -&gt; L&lt;&lt;313.0,577.0&gt;--&lt;256.0,415.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;413.0,-66.0&gt;--&lt;437.0,0.0&gt;&gt; -&gt; L&lt;&lt;437.0,0.0&gt;--&lt;464.0,78.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;773.0,720.0&gt;--&lt;519.0,0.0&gt;&gt; -&gt; L&lt;&lt;519.0,0.0&gt;--&lt;498.0,-59.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;581.0,408.0&gt;--&lt;635.0,561.0&gt;&gt; -&gt; L&lt;&lt;635.0,561.0&gt;--&lt;660.0,633.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;735.0,614.0&gt;--&lt;717.0,561.0&gt;&gt; -&gt; L&lt;&lt;717.0,561.0&gt;--&lt;519.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;581.0,409.0&gt;--&lt;592.0,440.0&gt;&gt; -&gt; L&lt;&lt;592.0,440.0&gt;--&lt;617.0,512.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;695.0,493.0&gt;--&lt;676.0,440.0&gt;&gt; -&gt; L&lt;&lt;676.0,440.0&gt;--&lt;505.0,-43.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;265.0,480.0&gt;--&lt;146.0,143.0&gt;&gt; -&gt; L&lt;&lt;146.0,143.0&gt;--&lt;126.0,84.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;41.0,77.0&gt;--&lt;64.0,143.0&gt;&gt; -&gt; L&lt;&lt;64.0,143.0&gt;--&lt;183.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;114.0,-37.0&gt;--&lt;128.0,0.0&gt;&gt; -&gt; L&lt;&lt;128.0,0.0&gt;--&lt;297.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;306.0,256.0&gt;--&lt;216.0,0.0&gt;&gt; -&gt; L&lt;&lt;216.0,0.0&gt;--&lt;205.0,-31.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;218.0,289.0&gt;--&lt;116.0,0.0&gt;&gt; -&gt; L&lt;&lt;116.0,0.0&gt;--&lt;95.0,-59.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;218.0,289.0&gt;--&lt;218.0,289.0&gt;&gt; -&gt; L&lt;&lt;218.0,289.0&gt;--&lt;218.0,289.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;4.0,-66.0&gt;--&lt;28.0,0.0&gt;&gt; -&gt; L&lt;&lt;28.0,0.0&gt;--&lt;197.0,480.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;246.0,370.0&gt;--&lt;228.0,317.0&gt;&gt; -&gt; L&lt;&lt;228.0,317.0&gt;--&lt;116.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;28.0,0.0&gt;--&lt;140.0,317.0&gt;&gt; -&gt; L&lt;&lt;140.0,317.0&gt;--&lt;165.0,389.0&gt;&gt;

* uni1E31 (U+1E31): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni1E33 (U+1E33): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni1E35 (U+1E35): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;

* uni20AA (U+20AA): L&lt;&lt;179.0,10.0&gt;--&lt;201.0,72.0&gt;&gt; -&gt; L&lt;&lt;201.0,72.0&gt;--&lt;203.0,78.0&gt;&gt;

* uni20AA (U+20AA): L&lt;&lt;227.0,622.0&gt;--&lt;233.0,640.0&gt;&gt; -&gt; L&lt;&lt;233.0,640.0&gt;--&lt;251.0,690.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-29.0,-91.0&gt;--&lt;3.0,0.0&gt;&gt; -&gt; L&lt;&lt;3.0,0.0&gt;--&lt;249.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;187.0,274.0&gt;--&lt;91.0,0.0&gt;&gt; -&gt; L&lt;&lt;91.0,0.0&gt;--&lt;63.0,-79.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1207.0,710.0&gt;--&lt;1175.0,665.0&gt;&gt; -&gt; L&lt;&lt;1175.0,665.0&gt;--&lt;729.0,0.0&gt;&gt;

* uniA741 (U+A741): L&lt;&lt;228.0,289.0&gt;--&lt;228.0,289.0&gt;&gt; -&gt; L&lt;&lt;228.0,289.0&gt;--&lt;229.0,289.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* integral (U+222B): L&lt;&lt;258.0,-25.0&gt;--&lt;214.0,-25.0&gt;&gt;/L&lt;&lt;214.0,-25.0&gt;--&lt;257.0,-28.0&gt;&gt; = 3.9909130984297856

* integral (U+222B): L&lt;&lt;454.0,553.0&gt;--&lt;497.0,553.0&gt;&gt;/L&lt;&lt;497.0,553.0&gt;--&lt;454.0,556.0&gt;&gt; = 3.9909130984297856

* l.alt: L&lt;&lt;174.0,183.0&gt;--&lt;130.0,183.0&gt;&gt;/L&lt;&lt;130.0,183.0&gt;--&lt;173.0,180.0&gt;&gt; = 3.9909130984297856

* sterling (U+00A3): L&lt;&lt;265.0,525.0&gt;--&lt;309.0,525.0&gt;&gt;/L&lt;&lt;309.0,525.0&gt;--&lt;266.0,528.0&gt;&gt; = 3.9909130984297856

* uni0162 (U+0162): L&lt;&lt;223.0,-94.0&gt;--&lt;226.0,-84.0&gt;&gt;/L&lt;&lt;226.0,-84.0&gt;--&lt;222.0,-94.0&gt;&gt; = 5.102165252358075

* uni0190 (U+0190): B&lt;&lt;212.0,341.0&gt;-&lt;265.0,367.0&gt;-&lt;324.0,372.0&gt;&gt;/B&lt;&lt;324.0,372.0&gt;-&lt;272.0,378.0&gt;-&lt;235.0,399.5&gt;&gt; = 11.425945030258696

* uni01AD (U+01AD): L&lt;&lt;195.0,183.0&gt;--&lt;151.0,183.0&gt;&gt;/L&lt;&lt;151.0,183.0&gt;--&lt;194.0,180.0&gt;&gt; = 3.9909130984297856

* uni025B (U+025B): B&lt;&lt;101.0,221.5&gt;-&lt;137.0,252.0&gt;-&lt;186.0,256.0&gt;&gt;/B&lt;&lt;186.0,256.0&gt;-&lt;145.0,262.0&gt;-&lt;128.0,292.0&gt;&gt; = 12.992508701865807

* uni028A (U+028A): B&lt;&lt;184.0,370.0&gt;-&lt;215.0,397.0&gt;-&lt;245.0,405.0&gt;&gt;/L&lt;&lt;245.0,405.0&gt;--&lt;158.0,404.0&gt;&gt; = 14.272874000573955
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

<details><summary>[14] ElmsSans-BoldItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;395.0,0.0&gt;--&lt;517.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;242.0,259.0&gt;--&lt;242.0,259.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;242.0,259.0&gt;--&lt;242.0,259.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* eng (U+014B): L&lt;&lt;385.0,-36.0&gt;--&lt;399.0,0.0&gt;&gt; -&gt; L&lt;&lt;399.0,0.0&gt;--&lt;490.0,259.0&gt;&gt;

* eng (U+014B): L&lt;&lt;613.0,251.0&gt;--&lt;525.0,0.0&gt;&gt; -&gt; L&lt;&lt;525.0,0.0&gt;--&lt;512.0,-34.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;540.0,256.0&gt;&gt; -&gt; L&lt;&lt;540.0,256.0&gt;--&lt;518.0,193.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;-3.0,0.0&gt;--&lt;24.0,78.0&gt;&gt; -&gt; L&lt;&lt;24.0,78.0&gt;--&lt;35.0,122.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;139.0,405.0&gt;--&lt;210.0,401.0&gt;&gt; -&gt; L&lt;&lt;210.0,401.0&gt;--&lt;706.0,401.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;406.0,700.0&gt;--&lt;225.0,185.0&gt;&gt; -&gt; L&lt;&lt;225.0,185.0&gt;--&lt;207.0,135.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;66.0,93.0&gt;--&lt;99.0,185.0&gt;&gt; -&gt; L&lt;&lt;99.0,185.0&gt;--&lt;280.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;398.0,534.0&gt;--&lt;210.0,0.0&gt;&gt; -&gt; L&lt;&lt;210.0,0.0&gt;--&lt;178.0,-90.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;64.0,-57.0&gt;--&lt;84.0,0.0&gt;&gt; -&gt; L&lt;&lt;84.0,0.0&gt;--&lt;330.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-75.0,-280.0&gt;--&lt;193.0,480.0&gt;&gt; -&gt; L&lt;&lt;193.0,480.0&gt;--&lt;226.0,574.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;338.0,543.0&gt;--&lt;315.0,480.0&gt;&gt; -&gt; L&lt;&lt;315.0,480.0&gt;--&lt;303.0,446.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;206.0,480.0&gt;--&lt;228.0,544.0&gt;&gt; -&gt; L&lt;&lt;228.0,544.0&gt;--&lt;252.0,612.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;369.0,586.0&gt;--&lt;354.0,544.0&gt;&gt; -&gt; L&lt;&lt;354.0,544.0&gt;--&lt;332.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;132.0,-161.0&gt;--&lt;161.0,-78.0&gt;&gt; -&gt; L&lt;&lt;161.0,-78.0&gt;--&lt;394.0,581.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;520.0,581.0&gt;--&lt;287.0,-78.0&gt;&gt; -&gt; L&lt;&lt;287.0,-78.0&gt;--&lt;264.0,-143.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;436.0,397.0&gt;--&lt;743.0,700.0&gt;&gt; -&gt; L&lt;&lt;743.0,700.0&gt;--&lt;809.0,770.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;318.0,140.0&gt;--&lt;584.0,480.0&gt;&gt; -&gt; L&lt;&lt;584.0,480.0&gt;--&lt;642.0,556.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;25.0,0.0&gt;--&lt;219.0,552.0&gt;&gt; -&gt; L&lt;&lt;219.0,552.0&gt;--&lt;248.0,635.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;357.0,594.0&gt;--&lt;342.0,552.0&gt;&gt; -&gt; L&lt;&lt;342.0,552.0&gt;--&lt;304.0,445.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;373.0,-75.0&gt;--&lt;400.0,0.0&gt;&gt; -&gt; L&lt;&lt;400.0,0.0&gt;--&lt;417.0,49.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;775.0,720.0&gt;--&lt;522.0,0.0&gt;&gt; -&gt; L&lt;&lt;522.0,0.0&gt;--&lt;503.0,-50.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;552.0,432.0&gt;--&lt;589.0,536.0&gt;&gt; -&gt; L&lt;&lt;589.0,536.0&gt;--&lt;617.0,619.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;725.0,578.0&gt;--&lt;711.0,536.0&gt;&gt; -&gt; L&lt;&lt;711.0,536.0&gt;--&lt;522.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;552.0,432.0&gt;--&lt;560.0,455.0&gt;&gt; -&gt; L&lt;&lt;560.0,455.0&gt;--&lt;586.0,528.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;695.0,487.0&gt;--&lt;684.0,455.0&gt;&gt; -&gt; L&lt;&lt;684.0,455.0&gt;--&lt;508.0,-44.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;305.0,480.0&gt;--&lt;196.0,168.0&gt;&gt; -&gt; L&lt;&lt;196.0,168.0&gt;--&lt;178.0,118.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;46.0,93.0&gt;--&lt;73.0,168.0&gt;&gt; -&gt; L&lt;&lt;73.0,168.0&gt;--&lt;182.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;320.0,241.0&gt;--&lt;236.0,0.0&gt;&gt; -&gt; L&lt;&lt;236.0,0.0&gt;--&lt;225.0,-29.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;98.0,-31.0&gt;--&lt;110.0,0.0&gt;&gt; -&gt; L&lt;&lt;110.0,0.0&gt;--&lt;278.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;0.0,-70.0&gt;--&lt;25.0,0.0&gt;&gt; -&gt; L&lt;&lt;25.0,0.0&gt;--&lt;193.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;242.0,259.0&gt;--&lt;151.0,0.0&gt;&gt; -&gt; L&lt;&lt;151.0,0.0&gt;--&lt;134.0,-45.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;242.0,259.0&gt;--&lt;242.0,259.0&gt;&gt; -&gt; L&lt;&lt;242.0,259.0&gt;--&lt;242.0,259.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;25.0,0.0&gt;--&lt;131.0,302.0&gt;&gt; -&gt; L&lt;&lt;131.0,302.0&gt;--&lt;153.0,365.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;269.0,337.0&gt;--&lt;257.0,302.0&gt;&gt; -&gt; L&lt;&lt;257.0,302.0&gt;--&lt;151.0,0.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-21.0,-82.0&gt;--&lt;8.0,0.0&gt;&gt; -&gt; L&lt;&lt;8.0,0.0&gt;--&lt;254.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;226.0,260.0&gt;--&lt;134.0,0.0&gt;&gt; -&gt; L&lt;&lt;134.0,0.0&gt;--&lt;111.0,-65.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1204.0,667.0&gt;--&lt;1178.0,633.0&gt;&gt; -&gt; L&lt;&lt;1178.0,633.0&gt;--&lt;754.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* integral (U+222B): L&lt;&lt;289.0,-5.0&gt;--&lt;226.0,-5.0&gt;&gt;/L&lt;&lt;226.0,-5.0&gt;--&lt;288.0,-9.0&gt;&gt; = 3.6913859864512575

* integral (U+222B): L&lt;&lt;422.0,533.0&gt;--&lt;486.0,533.0&gt;&gt;/L&lt;&lt;486.0,533.0&gt;--&lt;423.0,537.0&gt;&gt; = 3.6329507394881446

* l.alt: L&lt;&lt;219.0,210.0&gt;--&lt;156.0,210.0&gt;&gt;/L&lt;&lt;156.0,210.0&gt;--&lt;217.0,206.0&gt;&gt; = 3.7517290705259434

* sterling (U+00A3): L&lt;&lt;241.0,505.0&gt;--&lt;304.0,505.0&gt;&gt;/L&lt;&lt;304.0,505.0&gt;--&lt;242.0,509.0&gt;&gt; = 3.6913859864512575

* uni0162 (U+0162): L&lt;&lt;225.0,-109.0&gt;--&lt;229.0,-88.0&gt;&gt;/L&lt;&lt;229.0,-88.0&gt;--&lt;222.0,-109.0&gt;&gt; = 7.650650955359453

* uni01AD (U+01AD): L&lt;&lt;235.0,205.0&gt;--&lt;171.0,205.0&gt;&gt;/L&lt;&lt;171.0,205.0&gt;--&lt;233.0,201.0&gt;&gt; = 3.6913859864512575

* uni025B (U+025B): B&lt;&lt;101.0,222.0&gt;-&lt;137.0,252.0&gt;-&lt;187.0,257.0&gt;&gt;/B&lt;&lt;187.0,257.0&gt;-&lt;147.0,263.0&gt;-&lt;129.0,293.0&gt;&gt; = 14.241358747447757

* uni028A (U+028A): B&lt;&lt;164.0,353.0&gt;-&lt;192.0,378.0&gt;-&lt;221.0,386.0&gt;&gt;/L&lt;&lt;221.0,386.0&gt;--&lt;140.0,384.0&gt;&gt; = 14.007738107336525
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

<details><summary>[16] ElmsSans-Thin.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: lslash	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* Iogonek (U+012E): L&lt;&lt;70.0,0.0&gt;--&lt;98.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* aogonek (U+0105): L&lt;&lt;515.0,0.0&gt;--&lt;543.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* dotlessi_ogonek: L&lt;&lt;61.0,0.0&gt;--&lt;89.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;61.0,0.0&gt;--&lt;89.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=185.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=548.0,Y=702.0 (should be at cap-height 700?)

* uni1EB2 (U+1EB2): X=286.0,Y=999.0 (should be at ascender 1000?)

* Ccedilla (U+00C7): X=418.0,Y=2.0 (should be at baseline 0?)

* Ccedilla (U+00C7): X=445.0,Y=2.0 (should be at baseline 0?)

* uni1E08 (U+1E08): X=418.0,Y=2.0 (should be at baseline 0?)

* uni1E08 (U+1E08): X=445.0,Y=2.0 (should be at baseline 0?)

* uni0228 (U+0228): X=322.0,Y=2.0 (should be at baseline 0?)

* uni0228 (U+0228): X=349.0,Y=2.0 (should be at baseline 0?)

* uni1E1C (U+1E1C): X=322.0,Y=2.0 (should be at baseline 0?)

* uni1E1C (U+1E1C): X=349.0,Y=2.0 (should be at baseline 0?)

* uni018F (U+018F): X=251.0,Y=698.0 (should be at cap-height 700?)

* Ohorn (U+01A0): X=595.0,Y=701.5 (should be at cap-height 700?)

* uni1EDA (U+1EDA): X=595.0,Y=701.5 (should be at cap-height 700?)

* uni1EE2 (U+1EE2): X=595.0,Y=701.5 (should be at cap-height 700?)

* uni1EDC (U+1EDC): X=595.0,Y=701.5 (should be at cap-height 700?)

* uni1EDE (U+1EDE): X=595.0,Y=701.5 (should be at cap-height 700?)

* uni1EE0 (U+1EE0): X=595.0,Y=701.5 (should be at cap-height 700?)

* Q (U+0051): X=510.5,Y=1.0 (should be at baseline 0?)

* uni1E66 (U+1E66): X=262.0,Y=999.0 (should be at ascender 1000?)

* Scedilla (U+015E): X=299.0,Y=2.0 (should be at baseline 0?)

* Scedilla (U+015E): X=326.0,Y=2.0 (should be at baseline 0?)

* uni0194 (U+0194): X=241.0,Y=-1.0 (should be at baseline 0?)

* uni0194 (U+0194): X=372.0,Y=-1.0 (should be at baseline 0?)

* uni1EA9 (U+1EA9): X=387.5,Y=701.5 (should be at cap-height 700?)

* uniA7B5 (U+A7B5): X=184.5,Y=698.0 (should be at cap-height 700?)

* uniA7B5 (U+A7B5): X=392.0,Y=699.0 (should be at cap-height 700?)

* c (U+0063): X=384.0,Y=478.0 (should be at x-height 480?)

* ccedilla (U+00E7): X=311.0,Y=2.0 (should be at baseline 0?)

* ccedilla (U+00E7): X=338.0,Y=2.0 (should be at baseline 0?)

* uni1E09 (U+1E09): X=311.0,Y=2.0 (should be at baseline 0?)

* uni1E09 (U+1E09): X=338.0,Y=2.0 (should be at baseline 0?)

* uni0229 (U+0229): X=305.0,Y=2.0 (should be at baseline 0?)

* uni0229 (U+0229): X=332.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=305.0,Y=2.0 (should be at baseline 0?)

* uni1E1D (U+1E1D): X=332.0,Y=2.0 (should be at baseline 0?)

* uni1EC3 (U+1EC3): X=353.5,Y=701.5 (should be at cap-height 700?)

* uni0283 (U+0283): X=240.5,Y=698.0 (should be at cap-height 700?)

* f (U+0066): X=214.5,Y=698.0 (should be at cap-height 700?)

* uni1E1F (U+1E1F): X=214.5,Y=698.0 (should be at cap-height 700?)

* uni019B (U+019B): X=39.0,Y=702.0 (should be at cap-height 700?)

* uni1ED5 (U+1ED5): X=367.5,Y=701.5 (should be at cap-height 700?)

* oslash (U+00F8): X=199.5,Y=-2.0 (should be at baseline 0?)

* oslashacute (U+01FF): X=199.5,Y=-2.0 (should be at baseline 0?)

* r (U+0072): X=315.5,Y=478.5 (should be at x-height 480?)

* scedilla (U+015F): X=246.0,Y=2.0 (should be at baseline 0?)

* scedilla (U+015F): X=273.0,Y=2.0 (should be at baseline 0?)

* germandbls (U+00DF): X=152.0,Y=699.0 (should be at cap-height 700?)

* germandbls (U+00DF): X=394.5,Y=699.0 (should be at cap-height 700?)

* uni0163 (U+0163): X=223.0,Y=2.0 (should be at baseline 0?)

* uni0163 (U+0163): X=250.0,Y=2.0 (should be at baseline 0?)

* y (U+0079): X=447.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=479.0,Y=481.0 (should be at x-height 480?)

* f_i.liga: X=214.5,Y=698.0 (should be at cap-height 700?)

* fi (U+FB01): X=214.5,Y=698.0 (should be at cap-height 700?)

* fl (U+FB02): X=214.5,Y=698.0 (should be at cap-height 700?)

* lambda (U+03BB): X=39.0,Y=702.0 (should be at cap-height 700?)

* nine.numr: X=232.5,Y=699.0 (should be at cap-height 700?)

* nine.numr: X=98.5,Y=699.0 (should be at cap-height 700?)

* uni2089 (U+2089): X=164.0,Y=2.0 (should be at baseline 0?)

* uni2079 (U+2079): X=232.5,Y=701.0 (should be at cap-height 700?)

* uni2079 (U+2079): X=98.5,Y=701.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=112.5,Y=702.0 (should be at cap-height 700?)

* quotedblleft (U+201C): X=262.5,Y=702.0 (should be at cap-height 700?)

* quoteleft (U+2018): X=112.5,Y=702.0 (should be at cap-height 700?)

* quoteright (U+2019): X=140.0,Y=702.0 (should be at cap-height 700?)

* semicolon (U+003B): X=77.0,Y=0.5 (should be at baseline 0?)

* exclam (U+0021): X=86.0,Y=1.0 (should be at baseline 0?)

* exclam (U+0021): X=162.5,Y=1.0 (should be at baseline 0?)

* questiondown (U+00BF): X=168.5,Y=1.0 (should be at baseline 0?)

* uni02EE (U+02EE): X=140.0,Y=701.0 (should be at cap-height 700?)

* uni02EE (U+02EE): X=260.0,Y=701.0 (should be at cap-height 700?)

* colonmonetary (U+20A1): X=283.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=222.0,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=222.0,Y=698.0 (should be at cap-height 700?)

* uni20B4 (U+20B4): X=225.5,Y=1.5 (should be at baseline 0?)

* emptyset (U+2205): X=200.0,Y=-2.0 (should be at baseline 0?)

* arrowright (U+2192): X=457.0,Y=-2.0 (should be at baseline 0?)

* arrowright (U+2192): X=457.0,Y=-2.0 (should be at baseline 0?)

* arrowleft (U+2190): X=357.0,Y=-2.0 (should be at baseline 0?)

* arrowleft (U+2190): X=357.0,Y=-2.0 (should be at baseline 0?)

* uni25CF (U+25CF): X=402.0,Y=2.0 (should be at baseline 0?)

* uni25CF (U+25CF): X=402.0,Y=2.0 (should be at baseline 0?)

* circle (U+25CB): X=402.0,Y=2.0 (should be at baseline 0?)

* circle (U+25CB): X=402.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=121.5,Y=698.5 (should be at cap-height 700?)

* copyright (U+00A9): X=358.0,Y=1.0 (should be at baseline 0?)

* copyright (U+00A9): X=358.0,Y=1.0 (should be at baseline 0?)

* uni03020309.case: X=249.5,Y=700.5 (should be at cap-height 700?)

* uni0327 (U+0327): X=186.0,Y=2.0 (should be at baseline 0?)

* uni0327 (U+0327): X=213.0,Y=2.0 (should be at baseline 0?)

* uni03020309: X=257.5,Y=701.5 (should be at cap-height 700?)

* cedilla (U+00B8): X=186.0,Y=2.0 (should be at baseline 0?)

* cedilla (U+00B8): X=213.0,Y=2.0 (should be at baseline 0?)

* uni02BB (U+02BB): X=156.0,Y=699.0 (should be at cap-height 700?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* uni01B3 (U+01B3): L&lt;&lt;292.0,310.0&gt;--&lt;545.0,700.0&gt;&gt; -&gt; L&lt;&lt;545.0,700.0&gt;--&lt;577.0,749.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;252.0,29.0&gt;--&lt;447.0,481.0&gt;&gt; -&gt; L&lt;&lt;447.0,481.0&gt;--&lt;470.0,535.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): B&lt;&lt;536.0,603.5&gt;-&lt;575.0,552.0&gt;-&lt;586.0,488.0&gt;&gt;/L&lt;&lt;586.0,488.0&gt;--&lt;586.0,700.0&gt;&gt; = 9.752424941653764

* OE (U+0152): L&lt;&lt;586.0,0.0&gt;--&lt;586.0,212.0&gt;&gt;/B&lt;&lt;586.0,212.0&gt;-&lt;575.0,148.0&gt;-&lt;536.0,96.5&gt;&gt; = 9.752424941653764

* eogonek (U+0119): B&lt;&lt;311.5,-62.0&gt;-&lt;335.0,-22.0&gt;-&lt;386.0,8.0&gt;&gt;/B&lt;&lt;386.0,8.0&gt;-&lt;355.0,-2.0&gt;-&lt;331.5,-9.0&gt;&gt; = 12.58684832361851

* uni0190 (U+0190): B&lt;&lt;131.5,339.5&gt;-&lt;175.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;146.0,382.0&gt;-&lt;93.0,426.5&gt;&gt; = 12.641520572632942

* uni01B1 (U+01B1): B&lt;&lt;175.5,638.0&gt;-&lt;213.0,669.0&gt;-&lt;256.0,678.0&gt;&gt;/L&lt;&lt;256.0,678.0&gt;--&lt;88.0,678.0&gt;&gt; = 11.821488340607226

* uni01B1 (U+01B1): L&lt;&lt;708.0,678.0&gt;--&lt;540.0,678.0&gt;&gt;/B&lt;&lt;540.0,678.0&gt;-&lt;586.0,670.0&gt;-&lt;626.0,639.5&gt;&gt; = 9.865806943084365

* uni025B (U+025B): B&lt;&lt;77.0,211.5&gt;-&lt;114.0,249.0&gt;-&lt;174.0,256.0&gt;&gt;/B&lt;&lt;174.0,256.0&gt;-&lt;114.0,263.0&gt;-&lt;77.0,294.0&gt;&gt; = 13.308850092013184

* uni20BE (U+20BE): L&lt;&lt;32.0,53.0&gt;--&lt;296.0,53.0&gt;&gt;/B&lt;&lt;296.0,53.0&gt;-&lt;224.0,71.0&gt;-&lt;171.0,117.5&gt;&gt; = 14.036243467926484

* uni2126 (U+2126): B&lt;&lt;626.0,60.5&gt;-&lt;586.0,30.0&gt;-&lt;540.0,22.0&gt;&gt;/L&lt;&lt;540.0,22.0&gt;--&lt;708.0,22.0&gt;&gt; = 9.865806943084365

* uni2126 (U+2126): L&lt;&lt;88.0,22.0&gt;--&lt;256.0,22.0&gt;&gt;/B&lt;&lt;256.0,22.0&gt;-&lt;213.0,31.0&gt;-&lt;175.5,62.0&gt;&gt; = 11.821488340607226
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;394.0,522.0&gt;--&lt;393.0,700.0&gt;&gt;

* ae (U+00E6): L&lt;&lt;411.0,252.0&gt;--&lt;253.0,251.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;623.0,542.0&gt;--&lt;622.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;113.0,152.0&gt;--&lt;110.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;137.0,720.0&gt;--&lt;135.0,152.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;110.0,-234.0&gt;--&lt;113.0,334.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;135.0,334.0&gt;--&lt;137.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;139.0,542.0&gt;--&lt;138.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;314.0,542.0&gt;--&lt;313.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;113.0,30.0&gt;--&lt;110.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;137.0,720.0&gt;--&lt;135.0,30.0&gt;&gt;

* uni01E3 (U+01E3): L&lt;&lt;411.0,252.0&gt;--&lt;253.0,251.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

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

<details><summary>[15] ElmsSans-LightItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;455.0,0.0&gt;--&lt;510.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* dotlessi_ogonek: L&lt;&lt;24.0,0.0&gt;--&lt;79.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;24.0,0.0&gt;--&lt;79.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there any misaligned on-curve points? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-alignment-miss">outline_alignment_miss</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have on-curve points which have potentially incorrect y coordinates:</p>
<pre><code>* .notdef: X=390.0,Y=702.0 (should be at cap-height 700?)

* .notdef: X=753.0,Y=702.0 (should be at cap-height 700?)

* uni1EB4 (U+1EB4): X=630.0,Y=999.5 (should be at ascender 1000?)

* uni1EA8 (U+1EA8): X=672.0,Y=1000.5 (should be at ascender 1000?)

* uni1EAA (U+1EAA): X=580.5,Y=998.5 (should be at ascender 1000?)

* uniA7B3 (U+A7B3): X=400.5,Y=698.5 (should be at cap-height 700?)

* uni1EC2 (U+1EC2): X=660.0,Y=1000.5 (should be at ascender 1000?)

* uni1EC4 (U+1EC4): X=568.5,Y=998.5 (should be at ascender 1000?)

* uni018F (U+018F): X=455.5,Y=698.0 (should be at cap-height 700?)

* uni0241 (U+0241): X=120.0,Y=2.0 (should be at baseline 0?)

* uni0241 (U+0241): X=174.0,Y=-2.0 (should be at baseline 0?)

* uni0241 (U+0241): X=120.0,Y=2.0 (should be at baseline 0?)

* Eng (U+014A): X=577.0,Y=1.0 (should be at baseline 0?)

* uni1ED4 (U+1ED4): X=757.0,Y=1000.5 (should be at ascender 1000?)

* uni1ED6 (U+1ED6): X=665.5,Y=998.5 (should be at ascender 1000?)

* Q (U+0051): X=462.5,Y=-2.0 (should be at baseline 0?)

* uni1E7A (U+1E7A): X=800.5,Y=998.0 (should be at ascender 1000?)

* uni1E7A (U+1E7A): X=644.5,Y=998.0 (should be at ascender 1000?)

* uniA7B8 (U+A7B8): X=234.0,Y=2.0 (should be at baseline 0?)

* uni0194 (U+0194): X=344.5,Y=1.5 (should be at baseline 0?)

* uni01B3 (U+01B3): X=949.0,Y=702.0 (should be at cap-height 700?)

* ae (U+00E6): X=496.0,Y=2.0 (should be at baseline 0?)

* ae (U+00E6): X=276.0,Y=1.5 (should be at baseline 0?)

* uni01E3 (U+01E3): X=496.0,Y=2.0 (should be at baseline 0?)

* uni01E3 (U+01E3): X=276.0,Y=1.5 (should be at baseline 0?)

* c (U+0063): X=513.5,Y=478.0 (should be at x-height 480?)

* c (U+0063): X=352.5,Y=2.0 (should be at baseline 0?)

* cacute (U+0107): X=352.5,Y=2.0 (should be at baseline 0?)

* ccaron (U+010D): X=352.5,Y=2.0 (should be at baseline 0?)

* ccedilla (U+00E7): X=352.5,Y=2.0 (should be at baseline 0?)

* uni1E09 (U+1E09): X=352.5,Y=2.0 (should be at baseline 0?)

* ccircumflex (U+0109): X=352.5,Y=2.0 (should be at baseline 0?)

* cdotaccent (U+010B): X=352.5,Y=2.0 (should be at baseline 0?)

* uni0188 (U+0188): X=352.5,Y=2.0 (should be at baseline 0?)

* uni023C (U+023C): X=352.5,Y=2.0 (should be at baseline 0?)

* eogonek (U+0119): X=312.0,Y=-2.0 (should be at baseline 0?)

* uni0283 (U+0283): X=105.0,Y=2.0 (should be at baseline 0?)

* uni0283 (U+0283): X=162.0,Y=-2.0 (should be at baseline 0?)

* uni0283 (U+0283): X=105.0,Y=2.0 (should be at baseline 0?)

* uni0247 (U+0247): X=153.0,Y=1.5 (should be at baseline 0?)

* uni0294 (U+0294): X=120.0,Y=2.0 (should be at baseline 0?)

* uni0294 (U+0294): X=174.0,Y=-2.0 (should be at baseline 0?)

* uni0294 (U+0294): X=120.0,Y=2.0 (should be at baseline 0?)

* uni0199 (U+0199): X=295.0,Y=699.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=252.0,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=305.0,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=560.0,Y=702.0 (should be at cap-height 700?)

* uni0223 (U+0223): X=614.0,Y=702.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=576.0,Y=698.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=576.0,Y=698.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=420.0,Y=698.0 (should be at cap-height 700?)

* uni1E7B (U+1E7B): X=420.0,Y=698.0 (should be at cap-height 700?)

* uogonek (U+0173): X=419.0,Y=1.0 (should be at baseline 0?)

* y (U+0079): X=203.0,Y=1.0 (should be at baseline 0?)

* y (U+0079): X=579.0,Y=481.0 (should be at x-height 480?)

* y (U+0079): X=641.0,Y=481.0 (should be at x-height 480?)

* yacute (U+00FD): X=203.0,Y=1.0 (should be at baseline 0?)

* ycircumflex (U+0177): X=203.0,Y=1.0 (should be at baseline 0?)

* ydieresis (U+00FF): X=203.0,Y=1.0 (should be at baseline 0?)

* uni1E8F (U+1E8F): X=203.0,Y=1.0 (should be at baseline 0?)

* uni1EF5 (U+1EF5): X=203.0,Y=1.0 (should be at baseline 0?)

* ygrave (U+1EF3): X=203.0,Y=1.0 (should be at baseline 0?)

* uni01B4 (U+01B4): X=203.0,Y=1.0 (should be at baseline 0?)

* uni1EF7 (U+1EF7): X=203.0,Y=1.0 (should be at baseline 0?)

* uni0233 (U+0233): X=203.0,Y=1.0 (should be at baseline 0?)

* uni024F (U+024F): X=203.0,Y=1.0 (should be at baseline 0?)

* uni1EF9 (U+1EF9): X=203.0,Y=1.0 (should be at baseline 0?)

* nine.numr: X=438.5,Y=698.5 (should be at cap-height 700?)

* nine.numr: X=306.0,Y=699.5 (should be at cap-height 700?)

* uni2085 (U+2085): X=207.0,Y=-2.0 (should be at baseline 0?)

* uni2079 (U+2079): X=416.5,Y=700.5 (should be at cap-height 700?)

* uni2079 (U+2079): X=284.0,Y=701.5 (should be at cap-height 700?)

* quotesinglbase (U+201A): X=31.0,Y=2.0 (should be at baseline 0?)

* quotedblbase (U+201E): X=226.0,Y=2.0 (should be at baseline 0?)

* quotedblbase (U+201E): X=31.0,Y=2.0 (should be at baseline 0?)

* quotedblleft (U+201C): X=351.0,Y=698.5 (should be at cap-height 700?)

* quotedblleft (U+201C): X=551.0,Y=698.5 (should be at cap-height 700?)

* quoteleft (U+2018): X=351.0,Y=698.5 (should be at cap-height 700?)

* comma (U+002C): X=48.0,Y=2.0 (should be at baseline 0?)

* exclam (U+0021): X=50.0,Y=1.5 (should be at baseline 0?)

* exclam (U+0021): X=131.5,Y=1.5 (should be at baseline 0?)

* question (U+003F): X=177.5,Y=2.0 (should be at baseline 0?)

* dollar (U+0024): X=201.0,Y=1.0 (should be at baseline 0?)

* dollar (U+0024): X=447.0,Y=699.0 (should be at cap-height 700?)

* dollar (U+0024): X=256.0,Y=1.0 (should be at baseline 0?)

* uni2206 (U+2206): X=571.5,Y=700.5 (should be at cap-height 700?)

* uni25CF (U+25CF): X=362.0,Y=2.0 (should be at baseline 0?)

* uni25CF (U+25CF): X=362.0,Y=2.0 (should be at baseline 0?)

* circle (U+25CB): X=362.0,Y=2.0 (should be at baseline 0?)

* circle (U+25CB): X=362.0,Y=2.0 (should be at baseline 0?)

* section (U+00A7): X=326.5,Y=699.0 (should be at cap-height 700?)

* registered (U+00AE): X=407.0,Y=698.0 (should be at cap-height 700?)

* uni02BC (U+02BC): X=278.0,Y=702.0 (should be at cap-height 700?)

* uni03020309.case: X=549.0,Y=699.5 (should be at cap-height 700?)
</code></pre>
 [code: found-misalignments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* eng (U+014B): L&lt;&lt;415.0,-50.0&gt;--&lt;434.0,0.0&gt;&gt; -&gt; L&lt;&lt;434.0,0.0&gt;--&lt;529.0,271.0&gt;&gt;

* eng (U+014B): L&lt;&lt;586.0,267.0&gt;--&lt;492.0,0.0&gt;&gt; -&gt; L&lt;&lt;492.0,0.0&gt;--&lt;474.0,-49.0&gt;&gt;

* five.numr: L&lt;&lt;235.0,507.0&gt;--&lt;209.0,530.0&gt;&gt; -&gt; L&lt;&lt;209.0,530.0&gt;--&lt;201.0,536.0&gt;&gt;

* fiveeighths (U+215D): L&lt;&lt;235.0,507.0&gt;--&lt;209.0,530.0&gt;&gt; -&gt; L&lt;&lt;209.0,530.0&gt;--&lt;201.0,536.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;134.0,392.0&gt;--&lt;162.0,390.0&gt;&gt; -&gt; L&lt;&lt;162.0,390.0&gt;--&lt;765.0,390.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;337.0,700.0&gt;--&lt;143.0,148.0&gt;&gt; -&gt; L&lt;&lt;143.0,148.0&gt;--&lt;123.0,93.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;61.0,81.0&gt;--&lt;85.0,148.0&gt;&gt; -&gt; L&lt;&lt;85.0,148.0&gt;--&lt;279.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;391.0,621.0&gt;--&lt;172.0,0.0&gt;&gt; -&gt; L&lt;&lt;172.0,0.0&gt;--&lt;145.0,-76.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;91.0,-63.0&gt;--&lt;114.0,0.0&gt;&gt; -&gt; L&lt;&lt;114.0,0.0&gt;--&lt;360.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-76.0,-280.0&gt;--&lt;192.0,480.0&gt;&gt; -&gt; L&lt;&lt;192.0,480.0&gt;--&lt;228.0,582.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;282.0,577.0&gt;--&lt;247.0,480.0&gt;&gt; -&gt; L&lt;&lt;247.0,480.0&gt;--&lt;215.0,389.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;209.0,480.0&gt;--&lt;238.0,561.0&gt;&gt; -&gt; L&lt;&lt;238.0,561.0&gt;--&lt;261.0,627.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;315.0,617.0&gt;--&lt;296.0,561.0&gt;&gt; -&gt; L&lt;&lt;296.0,561.0&gt;--&lt;267.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;165.0,-183.0&gt;--&lt;190.0,-111.0&gt;&gt; -&gt; L&lt;&lt;190.0,-111.0&gt;--&lt;458.0,647.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;516.0,647.0&gt;--&lt;248.0,-111.0&gt;&gt; -&gt; L&lt;&lt;248.0,-111.0&gt;--&lt;225.0,-178.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;387.0,340.0&gt;--&lt;751.0,700.0&gt;&gt; -&gt; L&lt;&lt;751.0,700.0&gt;--&lt;805.0,755.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;252.0,63.0&gt;--&lt;579.0,481.0&gt;&gt; -&gt; L&lt;&lt;579.0,481.0&gt;--&lt;625.0,541.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;24.0,0.0&gt;--&lt;226.0,577.0&gt;&gt; -&gt; L&lt;&lt;226.0,577.0&gt;--&lt;250.0,643.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;302.0,633.0&gt;--&lt;281.0,577.0&gt;&gt; -&gt; L&lt;&lt;281.0,577.0&gt;--&lt;215.0,389.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;434.0,-62.0&gt;--&lt;456.0,0.0&gt;&gt; -&gt; L&lt;&lt;456.0,0.0&gt;--&lt;492.0,103.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;765.0,720.0&gt;--&lt;511.0,0.0&gt;&gt; -&gt; L&lt;&lt;511.0,0.0&gt;--&lt;489.0,-60.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;591.0,383.0&gt;--&lt;657.0,571.0&gt;&gt; -&gt; L&lt;&lt;657.0,571.0&gt;--&lt;677.0,627.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;728.0,617.0&gt;--&lt;712.0,571.0&gt;&gt; -&gt; L&lt;&lt;712.0,571.0&gt;--&lt;511.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;595.0,385.0&gt;--&lt;615.0,440.0&gt;&gt; -&gt; L&lt;&lt;615.0,440.0&gt;--&lt;638.0,506.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;691.0,496.0&gt;--&lt;671.0,440.0&gt;&gt; -&gt; L&lt;&lt;671.0,440.0&gt;--&lt;501.0,-42.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;228.0,480.0&gt;--&lt;109.0,143.0&gt;&gt; -&gt; L&lt;&lt;109.0,143.0&gt;--&lt;88.0,83.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;32.0,81.0&gt;--&lt;54.0,143.0&gt;&gt; -&gt; L&lt;&lt;54.0,143.0&gt;--&lt;173.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;105.0,-40.0&gt;--&lt;120.0,0.0&gt;&gt; -&gt; L&lt;&lt;120.0,0.0&gt;--&lt;289.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;270.0,262.0&gt;--&lt;178.0,0.0&gt;&gt; -&gt; L&lt;&lt;178.0,0.0&gt;--&lt;164.0,-39.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;1.0,-62.0&gt;--&lt;24.0,0.0&gt;&gt; -&gt; L&lt;&lt;24.0,0.0&gt;--&lt;192.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;187.0,299.0&gt;--&lt;82.0,0.0&gt;&gt; -&gt; L&lt;&lt;82.0,0.0&gt;--&lt;60.0,-60.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;217.0,383.0&gt;--&lt;197.0,327.0&gt;&gt; -&gt; L&lt;&lt;197.0,327.0&gt;--&lt;82.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;24.0,0.0&gt;--&lt;139.0,327.0&gt;&gt; -&gt; L&lt;&lt;139.0,327.0&gt;--&lt;162.0,393.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-10.0,-72.0&gt;--&lt;16.0,0.0&gt;&gt; -&gt; L&lt;&lt;16.0,0.0&gt;--&lt;262.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;170.0,274.0&gt;--&lt;74.0,0.0&gt;&gt; -&gt; L&lt;&lt;74.0,0.0&gt;--&lt;50.0,-67.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1158.0,721.0&gt;--&lt;1129.0,679.0&gt;&gt; -&gt; L&lt;&lt;1129.0,679.0&gt;--&lt;677.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* eogonek (U+0119): B&lt;&lt;219.5,-77.0&gt;-&lt;252.0,-37.0&gt;-&lt;312.0,-2.0&gt;&gt;/B&lt;&lt;312.0,-2.0&gt;-&lt;291.0,-8.0&gt;-&lt;272.0,-12.0&gt;&gt; = 14.311041262606418

* integral (U+222B): L&lt;&lt;237.0,-40.0&gt;--&lt;209.0,-40.0&gt;&gt;/L&lt;&lt;209.0,-40.0&gt;--&lt;237.0,-42.0&gt;&gt; = 4.085616779974888

* integral (U+222B): L&lt;&lt;479.0,568.0&gt;--&lt;508.0,568.0&gt;&gt;/L&lt;&lt;508.0,568.0&gt;--&lt;479.0,570.0&gt;&gt; = 3.94518622903751

* l.alt: L&lt;&lt;140.0,183.0&gt;--&lt;111.0,183.0&gt;&gt;/L&lt;&lt;111.0,183.0&gt;--&lt;139.0,181.0&gt;&gt; = 4.085616779974888

* sterling (U+00A3): L&lt;&lt;257.0,305.0&gt;--&lt;229.0,305.0&gt;&gt;/L&lt;&lt;229.0,305.0&gt;--&lt;257.0,303.0&gt;&gt; = 4.085616779974888

* sterling (U+00A3): L&lt;&lt;277.0,525.0&gt;--&lt;306.0,525.0&gt;&gt;/L&lt;&lt;306.0,525.0&gt;--&lt;277.0,527.0&gt;&gt; = 3.94518622903751

* uni0190 (U+0190): B&lt;&lt;210.0,340.0&gt;-&lt;263.0,366.0&gt;-&lt;323.0,372.0&gt;&gt;/B&lt;&lt;323.0,372.0&gt;-&lt;269.0,378.0&gt;-&lt;233.0,400.0&gt;&gt; = 12.050784883409548

* uni01AD (U+01AD): L&lt;&lt;158.0,171.0&gt;--&lt;129.0,171.0&gt;&gt;/L&lt;&lt;129.0,171.0&gt;--&lt;157.0,169.0&gt;&gt; = 4.085616779974888

* uni01B1 (U+01B1): B&lt;&lt;302.0,592.0&gt;-&lt;358.0,638.0&gt;-&lt;411.0,651.0&gt;&gt;/L&lt;&lt;411.0,651.0&gt;--&lt;275.0,650.0&gt;&gt; = 13.360312331485021

* uni01B1 (U+01B1): L&lt;&lt;895.0,650.0&gt;--&lt;755.0,650.0&gt;&gt;/B&lt;&lt;755.0,650.0&gt;-&lt;804.0,638.0&gt;-&lt;831.0,591.0&gt;&gt; = 13.760785111791225

* uni025B (U+025B): B&lt;&lt;105.0,217.0&gt;-&lt;148.0,251.0&gt;-&lt;205.0,256.0&gt;&gt;/B&lt;&lt;205.0,256.0&gt;-&lt;155.0,262.0&gt;-&lt;133.5,293.0&gt;&gt; = 11.855887167666735

* uni2126 (U+2126): B&lt;&lt;663.5,108.0&gt;-&lt;605.0,62.0&gt;-&lt;547.0,50.0&gt;&gt;/L&lt;&lt;547.0,50.0&gt;--&lt;683.0,50.0&gt;&gt; = 11.689369175439202
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

<details><summary>[16] ElmsSans-Bold.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;436.0,0.0&gt;--&lt;558.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* uni01B3 (U+01B3): L&lt;&lt;338.0,397.0&gt;--&lt;539.0,700.0&gt;&gt; -&gt; L&lt;&lt;539.0,700.0&gt;--&lt;582.0,766.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;311.0,139.0&gt;--&lt;458.0,480.0&gt;&gt; -&gt; L&lt;&lt;458.0,480.0&gt;--&lt;490.0,552.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;135.0,256.0&gt;&gt;/B&lt;&lt;135.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.258017480535134
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;390.0,522.0&gt;--&lt;389.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;635.0,542.0&gt;--&lt;634.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;102.0,217.0&gt;--&lt;100.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;223.0,720.0&gt;--&lt;221.0,217.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;100.0,-234.0&gt;--&lt;102.0,270.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;221.0,270.0&gt;--&lt;223.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;269.0,542.0&gt;--&lt;268.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;378.0,542.0&gt;--&lt;377.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;103.0,106.0&gt;--&lt;100.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;223.0,720.0&gt;--&lt;220.0,106.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;527.0,773.0&gt;--&lt;526.0,569.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;509.0,627.0&gt;--&lt;510.0,504.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;510.0,504.0&gt;--&lt;258.0,503.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;493.0,165.0&gt;--&lt;492.0,417.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;616.0,166.0&gt;--&lt;493.0,165.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;151.0,184.0&gt;--&lt;403.0,186.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;152.0,61.0&gt;--&lt;151.0,184.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;173.0,524.0&gt;--&lt;175.0,272.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;50.0,523.0&gt;--&lt;173.0,524.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;130.0,597.5&gt;-&lt;117.0,590.0&gt;-&lt;111.0,582.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;825.0,-129.5&gt;-&lt;839.0,-122.0&gt;-&lt;843.0,-113.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;751.0,660.0&gt;-&lt;738.0,660.0&gt;-&lt;729.5,651.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;729.5,651.5&gt;-&lt;721.0,643.0&gt;-&lt;721.0,630.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;749.0,327.0&gt;--&lt;749.0,327.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;191.0,588.0&gt;-&lt;178.0,588.0&gt;-&lt;169.5,579.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;169.5,579.5&gt;-&lt;161.0,571.0&gt;-&lt;161.0,558.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uniA740 (U+A740) contains a short segment L&lt;&lt;221.0,349.0&gt;--&lt;202.0,349.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;98.0,461.0&gt;-&lt;104.0,460.0&gt;-&lt;109.0,460.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;246.0,311.0&gt;-&lt;240.0,311.0&gt;-&lt;235.0,311.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;96.0,-91.0&gt;-&lt;109.0,-91.0&gt;-&lt;117.5,-82.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;117.5,-82.5&gt;-&lt;126.0,-74.0&gt;-&lt;126.0,-61.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;352.0,435.0&gt;-&lt;356.0,433.0&gt;-&lt;362.0,431.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;357.0,0.0&gt;--&lt;343.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;249.0,0.0&gt;--&lt;231.0,0.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;555.0,579.0&gt;--&lt;556.0,579.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment B&lt;&lt;556.0,579.0&gt;-&lt;557.0,569.0&gt;-&lt;557.0,559.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;558.0,559.0&gt;--&lt;557.0,558.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;876.0,673.0&gt;--&lt;876.0,673.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1047.0,693.0&gt;-&lt;1035.0,696.0&gt;-&lt;1024.0,689.5&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1024.0,689.5&gt;-&lt;1013.0,683.0&gt;-&lt;1010.0,671.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;1003.0,651.0&gt;--&lt;1004.0,651.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;636.0,636.0&gt;--&lt;635.0,636.0&gt;&gt;

* uniAB53 (U+AB53) contains a short segment B&lt;&lt;131.5,367.5&gt;-&lt;121.0,362.0&gt;-&lt;117.0,354.0&gt;&gt;

* uniAB53 (U+AB53) contains a short segment B&lt;&lt;630.5,-72.5&gt;-&lt;642.0,-67.0&gt;-&lt;646.0,-61.0&gt;&gt;

* eth (U+00F0) contains a short segment B&lt;&lt;290.0,496.0&gt;-&lt;297.0,496.0&gt;-&lt;303.0,496.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;283.0,-12.0&gt;-&lt;276.0,-12.0&gt;-&lt;267.0,-11.5&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;267.0,-11.5&gt;-&lt;258.0,-11.0&gt;-&lt;253.0,-10.0&gt;&gt;

* kgreenlandic (U+0138) contains a short segment L&lt;&lt;200.0,244.0&gt;--&lt;200.0,244.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;79.0,461.0&gt;-&lt;85.0,461.0&gt;-&lt;92.0,460.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;227.0,311.0&gt;-&lt;221.0,311.0&gt;-&lt;216.0,311.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment B&lt;&lt;231.0,220.0&gt;-&lt;231.0,212.0&gt;-&lt;232.0,204.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;586.0,480.0&gt;--&lt;595.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;572.0,428.0&gt;--&lt;571.0,428.0&gt;&gt;

* pi (U+03C0) contains a short segment B&lt;&lt;534.0,113.5&gt;-&lt;540.0,107.0&gt;-&lt;548.0,107.0&gt;&gt;

* chi (U+03C7) contains a short segment B&lt;&lt;131.5,367.5&gt;-&lt;121.0,362.0&gt;-&lt;117.0,354.0&gt;&gt;

* chi (U+03C7) contains a short segment B&lt;&lt;630.5,-72.5&gt;-&lt;642.0,-67.0&gt;-&lt;646.0,-61.0&gt;&gt;

* colonmonetary (U+20A1) contains a short segment B&lt;&lt;400.0,-16.0&gt;-&lt;389.0,-16.0&gt;-&lt;379.0,-15.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;330.0,433.0&gt;-&lt;333.0,432.0&gt;-&lt;337.0,431.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;100.0,330.0&gt;-&lt;100.0,340.0&gt;-&lt;100.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;228.0,350.0&gt;-&lt;227.0,340.0&gt;-&lt;228.0,330.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;419.0,708.0&gt;-&lt;425.0,708.0&gt;-&lt;432.0,708.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;432.0,708.5&gt;-&lt;439.0,709.0&gt;-&lt;446.0,709.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;446.0,709.0&gt;-&lt;452.0,709.0&gt;-&lt;458.0,709.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;458.0,709.0&gt;-&lt;464.0,709.0&gt;-&lt;470.0,709.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;470.0,589.0&gt;-&lt;458.0,590.0&gt;-&lt;446.0,590.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;446.0,590.0&gt;-&lt;432.0,590.0&gt;-&lt;419.0,588.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment B&lt;&lt;691.0,463.0&gt;-&lt;691.0,455.0&gt;-&lt;691.0,448.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;296.0,593.0&gt;--&lt;296.0,593.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;258.0,0.0&gt;--&lt;258.0,5.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;258.0,5.0&gt;--&lt;245.0,5.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;89.0,695.0&gt;--&lt;89.0,700.0&gt;&gt;

* uni20A9 (U+20A9) contains a short segment L&lt;&lt;523.0,504.0&gt;--&lt;525.0,504.0&gt;&gt;
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

<details><summary>[14] ElmsSans-ThinItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: lslash	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;547.0,0.0&gt;--&lt;547.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* aogonek (U+0105): L&lt;&lt;473.0,0.0&gt;--&lt;501.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* dotlessi_ogonek: L&lt;&lt;19.0,0.0&gt;--&lt;47.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;547.0,0.0&gt;--&lt;547.0,0.0&gt;&gt; -&gt; L&lt;&lt;547.0,0.0&gt;--&lt;547.0,0.0&gt;&gt;

* eng (U+014B): L&lt;&lt;434.0,-53.0&gt;--&lt;453.0,0.0&gt;&gt; -&gt; L&lt;&lt;453.0,0.0&gt;--&lt;548.0,270.0&gt;&gt;

* eng (U+014B): L&lt;&lt;575.0,268.0&gt;--&lt;481.0,0.0&gt;&gt; -&gt; L&lt;&lt;481.0,0.0&gt;--&lt;461.0,-57.0&gt;&gt;

* five.dnom: L&lt;&lt;91.0,168.0&gt;--&lt;87.0,171.0&gt;&gt; -&gt; L&lt;&lt;87.0,171.0&gt;--&lt;72.0,183.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;-9.0,0.0&gt;--&lt;-3.0,18.0&gt;&gt; -&gt; L&lt;&lt;-3.0,18.0&gt;--&lt;0.0,28.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;132.0,391.0&gt;--&lt;146.0,390.0&gt;&gt; -&gt; L&lt;&lt;146.0,390.0&gt;--&lt;793.0,390.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;302.0,700.0&gt;--&lt;108.0,148.0&gt;&gt; -&gt; L&lt;&lt;108.0,148.0&gt;--&lt;86.0,86.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;58.0,85.0&gt;--&lt;80.0,148.0&gt;&gt; -&gt; L&lt;&lt;80.0,148.0&gt;--&lt;274.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;119.0,-54.0&gt;--&lt;139.0,0.0&gt;&gt; -&gt; L&lt;&lt;139.0,0.0&gt;--&lt;385.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;402.0,667.0&gt;--&lt;167.0,0.0&gt;&gt; -&gt; L&lt;&lt;167.0,0.0&gt;--&lt;147.0,-55.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-80.0,-280.0&gt;--&lt;188.0,480.0&gt;&gt; -&gt; L&lt;&lt;188.0,480.0&gt;--&lt;223.0,581.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;251.0,580.0&gt;--&lt;216.0,480.0&gt;&gt; -&gt; L&lt;&lt;216.0,480.0&gt;--&lt;169.0,347.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;206.0,480.0&gt;--&lt;235.0,561.0&gt;&gt; -&gt; L&lt;&lt;235.0,561.0&gt;--&lt;255.0,621.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;283.0,620.0&gt;--&lt;263.0,561.0&gt;&gt; -&gt; L&lt;&lt;263.0,561.0&gt;--&lt;234.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;179.0,-179.0&gt;--&lt;198.0,-126.0&gt;&gt; -&gt; L&lt;&lt;198.0,-126.0&gt;--&lt;481.0,676.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;509.0,676.0&gt;--&lt;226.0,-126.0&gt;&gt; -&gt; L&lt;&lt;226.0,-126.0&gt;--&lt;207.0,-182.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;359.0,310.0&gt;--&lt;749.0,700.0&gt;&gt; -&gt; L&lt;&lt;749.0,700.0&gt;--&lt;798.0,750.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;819.0,733.0&gt;--&lt;784.0,699.0&gt;&gt; -&gt; L&lt;&lt;784.0,699.0&gt;--&lt;363.0,282.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;220.0,29.0&gt;--&lt;574.0,481.0&gt;&gt; -&gt; L&lt;&lt;574.0,481.0&gt;--&lt;617.0,536.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;19.0,0.0&gt;--&lt;222.0,577.0&gt;&gt; -&gt; L&lt;&lt;222.0,577.0&gt;--&lt;243.0,637.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;271.0,636.0&gt;--&lt;250.0,577.0&gt;&gt; -&gt; L&lt;&lt;250.0,577.0&gt;--&lt;171.0,352.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;454.0,-58.0&gt;--&lt;475.0,0.0&gt;&gt; -&gt; L&lt;&lt;475.0,0.0&gt;--&lt;522.0,133.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;757.0,720.0&gt;--&lt;503.0,0.0&gt;&gt; -&gt; L&lt;&lt;503.0,0.0&gt;--&lt;481.0,-61.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;596.0,344.0&gt;--&lt;679.0,580.0&gt;&gt; -&gt; L&lt;&lt;679.0,580.0&gt;--&lt;693.0,621.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;721.0,620.0&gt;--&lt;707.0,580.0&gt;&gt; -&gt; L&lt;&lt;707.0,580.0&gt;--&lt;503.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;606.0,349.0&gt;--&lt;638.0,440.0&gt;&gt; -&gt; L&lt;&lt;638.0,440.0&gt;--&lt;659.0,500.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;687.0,499.0&gt;--&lt;666.0,440.0&gt;&gt; -&gt; L&lt;&lt;666.0,440.0&gt;--&lt;496.0,-41.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;191.0,480.0&gt;--&lt;72.0,143.0&gt;&gt; -&gt; L&lt;&lt;72.0,143.0&gt;--&lt;50.0,82.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;24.0,85.0&gt;--&lt;44.0,143.0&gt;&gt; -&gt; L&lt;&lt;44.0,143.0&gt;--&lt;163.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;234.0,268.0&gt;--&lt;140.0,0.0&gt;&gt; -&gt; L&lt;&lt;140.0,0.0&gt;--&lt;123.0,-47.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;96.0,-43.0&gt;--&lt;112.0,0.0&gt;&gt; -&gt; L&lt;&lt;112.0,0.0&gt;--&lt;281.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;-2.0,-58.0&gt;--&lt;19.0,0.0&gt;&gt; -&gt; L&lt;&lt;19.0,0.0&gt;--&lt;188.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;157.0,314.0&gt;--&lt;47.0,0.0&gt;&gt; -&gt; L&lt;&lt;47.0,0.0&gt;--&lt;25.0,-61.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;187.0,396.0&gt;--&lt;165.0,337.0&gt;&gt; -&gt; L&lt;&lt;165.0,337.0&gt;--&lt;47.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;19.0,0.0&gt;--&lt;137.0,337.0&gt;&gt; -&gt; L&lt;&lt;137.0,337.0&gt;--&lt;159.0,397.0&gt;&gt;

* uni2075 (U+2075): L&lt;&lt;217.0,528.0&gt;--&lt;213.0,531.0&gt;&gt; -&gt; L&lt;&lt;213.0,531.0&gt;--&lt;198.0,543.0&gt;&gt;

* uni2085 (U+2085): L&lt;&lt;47.0,43.0&gt;--&lt;43.0,46.0&gt;&gt; -&gt; L&lt;&lt;43.0,46.0&gt;--&lt;28.0,58.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;152.0,274.0&gt;--&lt;56.0,0.0&gt;&gt; -&gt; L&lt;&lt;56.0,0.0&gt;--&lt;36.0,-56.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;9.0,-53.0&gt;--&lt;28.0,0.0&gt;&gt; -&gt; L&lt;&lt;28.0,0.0&gt;--&lt;274.0,700.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1109.0,732.0&gt;--&lt;1087.0,700.0&gt;&gt; -&gt; L&lt;&lt;1087.0,700.0&gt;--&lt;624.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): B&lt;&lt;706.0,603.0&gt;-&lt;727.0,551.0&gt;-&lt;715.0,487.0&gt;&gt;/L&lt;&lt;715.0,487.0&gt;--&lt;790.0,700.0&gt;&gt; = 8.778157172403079

* OE (U+0152): L&lt;&lt;544.0,0.0&gt;--&lt;618.0,211.0&gt;&gt;/B&lt;&lt;618.0,211.0&gt;-&lt;585.0,147.0&gt;-&lt;528.0,95.5&gt;&gt; = 7.950438709815896

* eogonek (U+0119): B&lt;&lt;247.0,-62.0&gt;-&lt;285.0,-22.0&gt;-&lt;346.0,8.0&gt;&gt;/B&lt;&lt;346.0,8.0&gt;-&lt;312.0,-2.0&gt;-&lt;286.0,-9.0&gt;&gt; = 9.798570363446062

* integral (U+222B): L&lt;&lt;217.0,-55.0&gt;--&lt;203.0,-54.0&gt;&gt;/L&lt;&lt;203.0,-54.0&gt;--&lt;217.0,-56.0&gt;&gt; = 4.044485574181016

* integral (U+222B): L&lt;&lt;504.0,583.0&gt;--&lt;518.0,583.0&gt;&gt;/L&lt;&lt;518.0,583.0&gt;--&lt;504.0,584.0&gt;&gt; = 4.085616779974888

* l.alt: L&lt;&lt;106.0,183.0&gt;--&lt;92.0,183.0&gt;&gt;/L&lt;&lt;92.0,183.0&gt;--&lt;106.0,182.0&gt;&gt; = 4.085616779974888

* sterling (U+00A3): L&lt;&lt;234.0,290.0&gt;--&lt;220.0,290.0&gt;&gt;/L&lt;&lt;220.0,290.0&gt;--&lt;234.0,289.0&gt;&gt; = 4.085616779974888

* sterling (U+00A3): L&lt;&lt;289.0,525.0&gt;--&lt;303.0,525.0&gt;&gt;/L&lt;&lt;303.0,525.0&gt;--&lt;289.0,526.0&gt;&gt; = 4.085616779974888

* uni0190 (U+0190): B&lt;&lt;208.5,340.0&gt;-&lt;261.0,366.0&gt;-&lt;322.0,372.0&gt;&gt;/B&lt;&lt;322.0,372.0&gt;-&lt;239.0,382.0&gt;-&lt;201.5,427.0&gt;&gt; = 12.487572898341057

* uni01AD (U+01AD): L&lt;&lt;121.0,158.0&gt;--&lt;106.0,158.0&gt;&gt;/L&lt;&lt;106.0,158.0&gt;--&lt;120.0,157.0&gt;&gt; = 4.085616779974888

* uni01B1 (U+01B1): B&lt;&lt;357.0,638.5&gt;-&lt;405.0,669.0&gt;-&lt;452.0,678.0&gt;&gt;/L&lt;&lt;452.0,678.0&gt;--&lt;285.0,678.0&gt;&gt; = 10.840305454330565

* uni01B1 (U+01B1): L&lt;&lt;905.0,678.0&gt;--&lt;736.0,678.0&gt;&gt;/B&lt;&lt;736.0,678.0&gt;-&lt;794.0,668.0&gt;-&lt;826.5,617.5&gt;&gt; = 9.782407031807285

* uni025B (U+025B): B&lt;&lt;109.5,212.0&gt;-&lt;159.0,249.0&gt;-&lt;223.0,256.0&gt;&gt;/B&lt;&lt;223.0,256.0&gt;-&lt;165.0,263.0&gt;-&lt;138.5,294.5&gt;&gt; = 13.123637978051972

* uni2126 (U+2126): B&lt;&lt;606.0,60.5&gt;-&lt;556.0,30.0&gt;-&lt;507.0,22.0&gt;&gt;/L&lt;&lt;507.0,22.0&gt;--&lt;674.0,22.0&gt;&gt; = 9.272601777200284

* uni2126 (U+2126): L&lt;&lt;54.0,22.0&gt;--&lt;223.0,22.0&gt;&gt;/B&lt;&lt;223.0,22.0&gt;-&lt;169.0,34.0&gt;-&lt;140.0,84.0&gt;&gt; = 12.528807709151492
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

<details><summary>[14] ElmsSans-ExtraLightItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;562.0,0.0&gt;--&lt;562.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;171.0,304.0&gt;--&lt;171.0,304.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;171.0,304.0&gt;--&lt;171.0,304.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* Eng (U+014A): L&lt;&lt;562.0,0.0&gt;--&lt;562.0,0.0&gt;&gt; -&gt; L&lt;&lt;562.0,0.0&gt;--&lt;562.0,0.0&gt;&gt;

* eng (U+014B): L&lt;&lt;424.0,-51.0&gt;--&lt;443.0,0.0&gt;&gt; -&gt; L&lt;&lt;443.0,0.0&gt;--&lt;538.0,271.0&gt;&gt;

* eng (U+014B): L&lt;&lt;580.0,268.0&gt;--&lt;486.0,0.0&gt;&gt; -&gt; L&lt;&lt;486.0,0.0&gt;--&lt;467.0,-53.0&gt;&gt;

* five (U+0035): L&lt;&lt;154.0,362.0&gt;--&lt;155.0,364.0&gt;&gt; -&gt; L&lt;&lt;155.0,364.0&gt;--&lt;309.0,700.0&gt;&gt;

* five.dnom: L&lt;&lt;101.0,161.0&gt;--&lt;84.0,175.0&gt;&gt; -&gt; L&lt;&lt;84.0,175.0&gt;--&lt;74.0,183.0&gt;&gt;

* five.lf: L&lt;&lt;170.0,362.0&gt;--&lt;171.0,364.0&gt;&gt; -&gt; L&lt;&lt;171.0,364.0&gt;--&lt;325.0,700.0&gt;&gt;

* five.numr: L&lt;&lt;224.0,513.0&gt;--&lt;207.0,528.0&gt;&gt; -&gt; L&lt;&lt;207.0,528.0&gt;--&lt;198.0,535.0&gt;&gt;

* five.osf: L&lt;&lt;154.0,362.0&gt;--&lt;155.0,364.0&gt;&gt; -&gt; L&lt;&lt;155.0,364.0&gt;--&lt;309.0,700.0&gt;&gt;

* five.tf: L&lt;&lt;154.0,362.0&gt;--&lt;155.0,364.0&gt;&gt; -&gt; L&lt;&lt;155.0,364.0&gt;--&lt;309.0,700.0&gt;&gt;

* five.tosf: L&lt;&lt;154.0,362.0&gt;--&lt;155.0,364.0&gt;&gt; -&gt; L&lt;&lt;155.0,364.0&gt;--&lt;309.0,700.0&gt;&gt;

* fiveeighths (U+215D): L&lt;&lt;224.0,513.0&gt;--&lt;207.0,528.0&gt;&gt; -&gt; L&lt;&lt;207.0,528.0&gt;--&lt;198.0,535.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;-7.0,0.0&gt;--&lt;2.0,27.0&gt;&gt; -&gt; L&lt;&lt;2.0,27.0&gt;--&lt;6.0,42.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;133.0,391.0&gt;--&lt;154.0,390.0&gt;&gt; -&gt; L&lt;&lt;154.0,390.0&gt;--&lt;779.0,390.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;320.0,700.0&gt;--&lt;126.0,148.0&gt;&gt; -&gt; L&lt;&lt;126.0,148.0&gt;--&lt;105.0,89.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;60.0,83.0&gt;--&lt;83.0,148.0&gt;&gt; -&gt; L&lt;&lt;83.0,148.0&gt;--&lt;277.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;105.0,-59.0&gt;--&lt;127.0,0.0&gt;&gt; -&gt; L&lt;&lt;127.0,0.0&gt;--&lt;373.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;396.0,644.0&gt;--&lt;170.0,0.0&gt;&gt; -&gt; L&lt;&lt;170.0,0.0&gt;--&lt;146.0,-65.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-78.0,-280.0&gt;--&lt;190.0,480.0&gt;&gt; -&gt; L&lt;&lt;190.0,480.0&gt;--&lt;226.0,582.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;267.0,579.0&gt;--&lt;231.0,480.0&gt;&gt; -&gt; L&lt;&lt;231.0,480.0&gt;--&lt;193.0,370.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;208.0,480.0&gt;--&lt;236.0,561.0&gt;&gt; -&gt; L&lt;&lt;236.0,561.0&gt;--&lt;258.0,624.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;299.0,619.0&gt;--&lt;279.0,561.0&gt;&gt; -&gt; L&lt;&lt;279.0,561.0&gt;--&lt;251.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;172.0,-181.0&gt;--&lt;194.0,-118.0&gt;&gt; -&gt; L&lt;&lt;194.0,-118.0&gt;--&lt;469.0,662.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;512.0,662.0&gt;--&lt;237.0,-118.0&gt;&gt; -&gt; L&lt;&lt;237.0,-118.0&gt;--&lt;216.0,-180.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;373.0,325.0&gt;--&lt;750.0,700.0&gt;&gt; -&gt; L&lt;&lt;750.0,700.0&gt;--&lt;801.0,753.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;828.0,725.0&gt;--&lt;784.0,684.0&gt;&gt; -&gt; L&lt;&lt;784.0,684.0&gt;--&lt;378.0,282.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;236.0,46.0&gt;--&lt;576.0,481.0&gt;&gt; -&gt; L&lt;&lt;576.0,481.0&gt;--&lt;621.0,539.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;21.0,0.0&gt;--&lt;224.0,577.0&gt;&gt; -&gt; L&lt;&lt;224.0,577.0&gt;--&lt;247.0,640.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;286.0,635.0&gt;--&lt;265.0,577.0&gt;&gt; -&gt; L&lt;&lt;265.0,577.0&gt;--&lt;194.0,372.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;444.0,-60.0&gt;--&lt;466.0,0.0&gt;&gt; -&gt; L&lt;&lt;466.0,0.0&gt;--&lt;507.0,117.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;761.0,720.0&gt;--&lt;507.0,0.0&gt;&gt; -&gt; L&lt;&lt;507.0,0.0&gt;--&lt;485.0,-60.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;594.0,366.0&gt;--&lt;668.0,575.0&gt;&gt; -&gt; L&lt;&lt;668.0,575.0&gt;--&lt;685.0,624.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;725.0,619.0&gt;--&lt;710.0,575.0&gt;&gt; -&gt; L&lt;&lt;710.0,575.0&gt;--&lt;507.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;601.0,369.0&gt;--&lt;626.0,440.0&gt;&gt; -&gt; L&lt;&lt;626.0,440.0&gt;--&lt;649.0,503.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;689.0,498.0&gt;--&lt;668.0,440.0&gt;&gt; -&gt; L&lt;&lt;668.0,440.0&gt;--&lt;498.0,-41.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;209.0,480.0&gt;--&lt;91.0,143.0&gt;&gt; -&gt; L&lt;&lt;91.0,143.0&gt;--&lt;69.0,83.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;28.0,83.0&gt;--&lt;49.0,143.0&gt;&gt; -&gt; L&lt;&lt;49.0,143.0&gt;--&lt;168.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;101.0,-41.0&gt;--&lt;116.0,0.0&gt;&gt; -&gt; L&lt;&lt;116.0,0.0&gt;--&lt;285.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;252.0,265.0&gt;--&lt;159.0,0.0&gt;&gt; -&gt; L&lt;&lt;159.0,0.0&gt;--&lt;143.0,-43.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;-1.0,-60.0&gt;--&lt;21.0,0.0&gt;&gt; -&gt; L&lt;&lt;21.0,0.0&gt;--&lt;190.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;171.0,304.0&gt;--&lt;171.0,304.0&gt;&gt; -&gt; L&lt;&lt;171.0,304.0&gt;--&lt;171.0,304.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;171.0,304.0&gt;--&lt;64.0,0.0&gt;&gt; -&gt; L&lt;&lt;64.0,0.0&gt;--&lt;43.0,-60.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;202.0,390.0&gt;--&lt;181.0,332.0&gt;&gt; -&gt; L&lt;&lt;181.0,332.0&gt;--&lt;64.0,0.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;21.0,0.0&gt;--&lt;138.0,332.0&gt;&gt; -&gt; L&lt;&lt;138.0,332.0&gt;--&lt;160.0,395.0&gt;&gt;

* uni2075 (U+2075): L&lt;&lt;227.0,521.0&gt;--&lt;210.0,535.0&gt;&gt; -&gt; L&lt;&lt;210.0,535.0&gt;--&lt;200.0,543.0&gt;&gt;

* uni2085 (U+2085): L&lt;&lt;57.0,36.0&gt;--&lt;40.0,50.0&gt;&gt; -&gt; L&lt;&lt;40.0,50.0&gt;--&lt;30.0,58.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-1.0,-62.0&gt;--&lt;22.0,0.0&gt;&gt; -&gt; L&lt;&lt;22.0,0.0&gt;--&lt;268.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;161.0,274.0&gt;--&lt;65.0,0.0&gt;&gt; -&gt; L&lt;&lt;65.0,0.0&gt;--&lt;43.0,-62.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1134.0,727.0&gt;--&lt;1107.0,688.0&gt;&gt; -&gt; L&lt;&lt;1107.0,688.0&gt;--&lt;650.0,0.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* OE (U+0152): L&lt;&lt;545.0,0.0&gt;--&lt;609.0,181.0&gt;&gt;/B&lt;&lt;609.0,181.0&gt;-&lt;574.0,124.0&gt;-&lt;520.5,79.5&gt;&gt; = 12.078240745311806

* eogonek (U+0119): B&lt;&lt;233.0,-70.0&gt;-&lt;268.0,-30.0&gt;-&lt;329.0,3.0&gt;&gt;/B&lt;&lt;329.0,3.0&gt;-&lt;302.0,-5.0&gt;-&lt;279.5,-10.5&gt;&gt; = 11.908300061317545

* integral (U+222B): L&lt;&lt;227.0,-47.0&gt;--&lt;206.0,-47.0&gt;&gt;/L&lt;&lt;206.0,-47.0&gt;--&lt;227.0,-49.0&gt;&gt; = 5.4403320310054815

* integral (U+222B): L&lt;&lt;491.0,576.0&gt;--&lt;513.0,575.0&gt;&gt;/L&lt;&lt;513.0,575.0&gt;--&lt;491.0,577.0&gt;&gt; = 2.591866705234931

* l.alt: L&lt;&lt;123.0,183.0&gt;--&lt;102.0,183.0&gt;&gt;/L&lt;&lt;102.0,183.0&gt;--&lt;123.0,182.0&gt;&gt; = 2.726310993906212

* sterling (U+00A3): L&lt;&lt;246.0,298.0&gt;--&lt;224.0,298.0&gt;&gt;/L&lt;&lt;224.0,298.0&gt;--&lt;245.0,296.0&gt;&gt; = 5.4403320310054815

* sterling (U+00A3): L&lt;&lt;283.0,525.0&gt;--&lt;304.0,525.0&gt;&gt;/L&lt;&lt;304.0,525.0&gt;--&lt;283.0,527.0&gt;&gt; = 5.4403320310054815

* uni0190 (U+0190): B&lt;&lt;209.5,340.0&gt;-&lt;262.0,366.0&gt;-&lt;322.0,372.0&gt;&gt;/B&lt;&lt;322.0,372.0&gt;-&lt;241.0,382.0&gt;-&lt;202.5,426.5&gt;&gt; = 12.748533900684333

* uni01AD (U+01AD): L&lt;&lt;139.0,164.0&gt;--&lt;117.0,164.0&gt;&gt;/L&lt;&lt;117.0,164.0&gt;--&lt;138.0,163.0&gt;&gt; = 2.726310993906212

* uni01B1 (U+01B1): B&lt;&lt;343.0,625.5&gt;-&lt;388.0,655.0&gt;-&lt;431.0,664.0&gt;&gt;/L&lt;&lt;431.0,664.0&gt;--&lt;280.0,664.0&gt;&gt; = 11.821488340607226

* uni01B1 (U+01B1): L&lt;&lt;900.0,664.0&gt;--&lt;745.0,664.0&gt;&gt;/B&lt;&lt;745.0,664.0&gt;-&lt;799.0,653.0&gt;-&lt;828.5,604.0&gt;&gt; = 11.513831184487014

* uni025B (U+025B): B&lt;&lt;107.5,214.5&gt;-&lt;154.0,250.0&gt;-&lt;214.0,256.0&gt;&gt;/B&lt;&lt;214.0,256.0&gt;-&lt;160.0,263.0&gt;-&lt;136.0,294.0&gt;&gt; = 13.09663628876691

* uni2126 (U+2126): B&lt;&lt;620.5,73.5&gt;-&lt;573.0,44.0&gt;-&lt;527.0,36.0&gt;&gt;/L&lt;&lt;527.0,36.0&gt;--&lt;679.0,36.0&gt;&gt; = 9.865806943084365

* uni2126 (U+2126): L&lt;&lt;59.0,36.0&gt;--&lt;213.0,36.0&gt;&gt;/B&lt;&lt;213.0,36.0&gt;-&lt;164.0,48.0&gt;-&lt;137.5,97.0&gt;&gt; = 13.760785111791225
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

<details><summary>[14] ElmsSans-BlackItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;352.0,0.0&gt;--&lt;514.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;265.0,229.0&gt;--&lt;265.0,229.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;265.0,229.0&gt;--&lt;265.0,229.0&gt;&gt; has the same coordinates as a previous segment.

* uni027D (U+027D): L&lt;&lt;265.0,229.0&gt;--&lt;265.0,229.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* eng (U+014B): L&lt;&lt;373.0,-26.0&gt;--&lt;383.0,0.0&gt;&gt; -&gt; L&lt;&lt;383.0,0.0&gt;--&lt;469.0,246.0&gt;&gt;

* eng (U+014B): L&lt;&lt;630.0,236.0&gt;--&lt;547.0,0.0&gt;&gt; -&gt; L&lt;&lt;547.0,0.0&gt;--&lt;537.0,-28.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;541.0,257.0&gt;&gt; -&gt; L&lt;&lt;541.0,257.0&gt;--&lt;506.0,158.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;-4.0,0.0&gt;--&lt;31.0,101.0&gt;&gt; -&gt; L&lt;&lt;31.0,101.0&gt;--&lt;46.0,160.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;143.0,418.0&gt;--&lt;243.0,413.0&gt;&gt; -&gt; L&lt;&lt;243.0,413.0&gt;--&lt;673.0,413.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;440.0,700.0&gt;--&lt;272.0,222.0&gt;&gt; -&gt; L&lt;&lt;272.0,222.0&gt;--&lt;254.0,171.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;68.0,109.0&gt;--&lt;108.0,222.0&gt;&gt; -&gt; L&lt;&lt;108.0,222.0&gt;--&lt;276.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;412.0,481.0&gt;--&lt;243.0,0.0&gt;&gt; -&gt; L&lt;&lt;243.0,0.0&gt;--&lt;213.0,-84.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;65.0,-41.0&gt;--&lt;79.0,0.0&gt;&gt; -&gt; L&lt;&lt;79.0,0.0&gt;--&lt;325.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-78.0,-280.0&gt;--&lt;190.0,480.0&gt;&gt; -&gt; L&lt;&lt;190.0,480.0&gt;--&lt;220.0,565.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;363.0,512.0&gt;--&lt;352.0,480.0&gt;&gt; -&gt; L&lt;&lt;352.0,480.0&gt;--&lt;347.0,468.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;199.0,480.0&gt;--&lt;216.0,527.0&gt;&gt; -&gt; L&lt;&lt;216.0,527.0&gt;--&lt;238.0,591.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;390.0,558.0&gt;--&lt;380.0,527.0&gt;&gt; -&gt; L&lt;&lt;380.0,527.0&gt;--&lt;363.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;113.0,-135.0&gt;--&lt;139.0,-61.0&gt;&gt; -&gt; L&lt;&lt;139.0,-61.0&gt;--&lt;352.0,544.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;516.0,544.0&gt;--&lt;303.0,-61.0&gt;&gt; -&gt; L&lt;&lt;303.0,-61.0&gt;--&lt;285.0,-112.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;457.0,425.0&gt;--&lt;732.0,700.0&gt;&gt; -&gt; L&lt;&lt;732.0,700.0&gt;--&lt;806.0,779.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;353.0,184.0&gt;--&lt;585.0,480.0&gt;&gt; -&gt; L&lt;&lt;585.0,480.0&gt;--&lt;650.0,566.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;21.0,0.0&gt;--&lt;207.0,527.0&gt;&gt; -&gt; L&lt;&lt;207.0,527.0&gt;--&lt;239.0,621.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;381.0,558.0&gt;--&lt;371.0,527.0&gt;&gt; -&gt; L&lt;&lt;371.0,527.0&gt;--&lt;350.0,468.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;332.0,-84.0&gt;--&lt;362.0,0.0&gt;&gt; -&gt; L&lt;&lt;362.0,0.0&gt;--&lt;371.0,27.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;778.0,720.0&gt;--&lt;524.0,0.0&gt;&gt; -&gt; L&lt;&lt;524.0,0.0&gt;--&lt;509.0,-41.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;521.0,452.0&gt;--&lt;542.0,511.0&gt;&gt; -&gt; L&lt;&lt;542.0,511.0&gt;--&lt;575.0,605.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;715.0,542.0&gt;--&lt;704.0,511.0&gt;&gt; -&gt; L&lt;&lt;704.0,511.0&gt;--&lt;524.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;521.0,452.0&gt;--&lt;528.0,470.0&gt;&gt; -&gt; L&lt;&lt;528.0,470.0&gt;--&lt;554.0,544.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;695.0,481.0&gt;--&lt;692.0,470.0&gt;&gt; -&gt; L&lt;&lt;692.0,470.0&gt;--&lt;510.0,-45.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;346.0,480.0&gt;--&lt;245.0,193.0&gt;&gt; -&gt; L&lt;&lt;245.0,193.0&gt;--&lt;230.0,152.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;51.0,109.0&gt;--&lt;81.0,193.0&gt;&gt; -&gt; L&lt;&lt;81.0,193.0&gt;--&lt;182.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;334.0,226.0&gt;--&lt;255.0,0.0&gt;&gt; -&gt; L&lt;&lt;255.0,0.0&gt;--&lt;245.0,-28.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;81.0,-26.0&gt;--&lt;91.0,0.0&gt;&gt; -&gt; L&lt;&lt;91.0,0.0&gt;--&lt;260.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;-5.0,-74.0&gt;--&lt;21.0,0.0&gt;&gt; -&gt; L&lt;&lt;21.0,0.0&gt;--&lt;190.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;265.0,229.0&gt;--&lt;185.0,0.0&gt;&gt; -&gt; L&lt;&lt;185.0,0.0&gt;--&lt;174.0,-31.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;265.0,229.0&gt;--&lt;265.0,229.0&gt;&gt; -&gt; L&lt;&lt;265.0,229.0&gt;--&lt;265.0,229.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;21.0,0.0&gt;--&lt;122.0,287.0&gt;&gt; -&gt; L&lt;&lt;122.0,287.0&gt;--&lt;141.0,341.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;291.0,303.0&gt;--&lt;286.0,287.0&gt;&gt; -&gt; L&lt;&lt;286.0,287.0&gt;--&lt;185.0,0.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-13.0,-74.0&gt;--&lt;13.0,0.0&gt;&gt; -&gt; L&lt;&lt;13.0,0.0&gt;--&lt;259.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;264.0,246.0&gt;--&lt;177.0,0.0&gt;&gt; -&gt; L&lt;&lt;177.0,0.0&gt;--&lt;159.0,-51.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1200.0,624.0&gt;--&lt;1183.0,602.0&gt;&gt; -&gt; L&lt;&lt;1183.0,602.0&gt;--&lt;778.0,0.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;778.0,228.0&gt;--&lt;1039.0,646.0&gt;&gt; -&gt; L&lt;&lt;1039.0,646.0&gt;--&lt;1076.0,711.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* integral (U+222B): L&lt;&lt;321.0,15.0&gt;--&lt;239.0,16.0&gt;&gt;/L&lt;&lt;239.0,16.0&gt;--&lt;320.0,10.0&gt;&gt; = 3.5377004160753733

* integral (U+222B): L&lt;&lt;391.0,513.0&gt;--&lt;474.0,513.0&gt;&gt;/L&lt;&lt;474.0,513.0&gt;--&lt;392.0,518.0&gt;&gt; = 3.489324905796376

* l.alt: L&lt;&lt;263.0,237.0&gt;--&lt;181.0,237.0&gt;&gt;/L&lt;&lt;181.0,237.0&gt;--&lt;262.0,232.0&gt;&gt; = 3.532294583890835

* sterling (U+00A3): L&lt;&lt;217.0,485.0&gt;--&lt;300.0,485.0&gt;&gt;/L&lt;&lt;300.0,485.0&gt;--&lt;218.0,490.0&gt;&gt; = 3.489324905796376

* uni0162 (U+0162): L&lt;&lt;226.0,-124.0&gt;--&lt;232.0,-94.0&gt;&gt;/L&lt;&lt;232.0,-94.0&gt;--&lt;222.0,-124.0&gt;&gt; = 7.125016348901757

* uni01AD (U+01AD): L&lt;&lt;274.0,227.0&gt;--&lt;192.0,227.0&gt;&gt;/L&lt;&lt;192.0,227.0&gt;--&lt;272.0,222.0&gt;&gt; = 3.576334374997269

* uni01B2 (U+01B2): L&lt;&lt;731.0,530.0&gt;--&lt;722.0,529.0&gt;&gt;/L&lt;&lt;722.0,529.0&gt;--&lt;730.0,529.0&gt;&gt; = 6.340191745909908

* uni025B (U+025B): B&lt;&lt;101.0,223.0&gt;-&lt;136.0,253.0&gt;-&lt;188.0,257.0&gt;&gt;/B&lt;&lt;188.0,257.0&gt;-&lt;148.0,263.0&gt;-&lt;130.0,293.5&gt;&gt; = 12.929470964943654

* uni028A (U+028A): B&lt;&lt;119.0,311.0&gt;-&lt;156.0,356.0&gt;-&lt;197.0,366.0&gt;&gt;/L&lt;&lt;197.0,366.0&gt;--&lt;121.0,364.0&gt;&gt; = 12.199525245304825
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

<details><summary>[16] ElmsSans-SemiBold.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;457.0,0.0&gt;--&lt;559.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* uni01B3 (U+01B3): L&lt;&lt;332.0,383.0&gt;--&lt;544.0,700.0&gt;&gt; -&gt; L&lt;&lt;544.0,700.0&gt;--&lt;585.0,762.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;301.0,117.0&gt;--&lt;457.0,480.0&gt;&gt; -&gt; L&lt;&lt;457.0,480.0&gt;--&lt;488.0,548.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;125.5,341.0&gt;-&lt;165.0,367.0&gt;-&lt;215.0,372.0&gt;&gt;/B&lt;&lt;215.0,372.0&gt;-&lt;140.0,382.0&gt;-&lt;90.0,423.0&gt;&gt; = 13.305236506091092

* uni025B (U+025B): B&lt;&lt;66.0,220.0&gt;-&lt;92.0,252.0&gt;-&lt;135.0,256.0&gt;&gt;/B&lt;&lt;135.0,256.0&gt;-&lt;92.0,262.0&gt;-&lt;66.0,290.5&gt;&gt; = 13.258017480535134
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;393.0,522.0&gt;--&lt;392.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;635.0,542.0&gt;--&lt;634.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;102.0,194.0&gt;--&lt;100.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;203.0,720.0&gt;--&lt;201.0,194.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;100.0,-234.0&gt;--&lt;102.0,292.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;201.0,292.0&gt;--&lt;203.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;245.0,542.0&gt;--&lt;244.0,720.0&gt;&gt;

* m (U+006D): L&lt;&lt;69.0,0.0&gt;--&lt;68.0,480.0&gt;&gt;

* m (U+006D): L&lt;&lt;740.0,0.0&gt;--&lt;739.0,285.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;376.0,542.0&gt;--&lt;375.0,720.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;175.0,700.0&gt;--&lt;176.0,195.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;846.0,700.0&gt;--&lt;847.0,0.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;103.0,78.0&gt;--&lt;100.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;203.0,720.0&gt;--&lt;200.0,78.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;175.0,480.0&gt;--&lt;176.0,195.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;846.0,480.0&gt;--&lt;847.0,0.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;69.0,0.0&gt;--&lt;68.0,480.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;740.0,0.0&gt;--&lt;739.0,285.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;69.0,0.0&gt;--&lt;68.0,480.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;740.0,0.0&gt;--&lt;739.0,285.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;69.0,0.0&gt;--&lt;68.0,480.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;740.0,0.0&gt;--&lt;739.0,285.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;513.0,524.0&gt;--&lt;231.0,523.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;428.0,525.0&gt;--&lt;149.0,524.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;505.0,168.0&gt;--&lt;504.0,449.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;235.0,176.0&gt;--&lt;514.0,177.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;137.0,620.5&gt;-&lt;123.0,618.0&gt;-&lt;112.5,610.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;112.5,610.0&gt;-&lt;102.0,602.0&gt;-&lt;99.0,596.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;821.5,-152.5&gt;-&lt;836.0,-150.0&gt;-&lt;846.0,-142.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;846.0,-142.0&gt;-&lt;856.0,-134.0&gt;-&lt;860.0,-127.0&gt;&gt;

* uni0187 (U+0187) contains a short segment B&lt;&lt;768.0,627.0&gt;-&lt;755.0,627.0&gt;-&lt;746.5,618.0&gt;&gt;

* uni0187 (U+0187) contains a short segment B&lt;&lt;746.5,618.0&gt;-&lt;738.0,609.0&gt;-&lt;738.0,597.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;739.0,677.0&gt;-&lt;726.0,677.0&gt;-&lt;717.5,668.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;717.5,668.0&gt;-&lt;709.0,659.0&gt;-&lt;709.0,647.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;747.0,323.0&gt;--&lt;746.0,323.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;180.0,603.0&gt;-&lt;167.0,603.0&gt;-&lt;158.5,594.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;158.5,594.5&gt;-&lt;150.0,586.0&gt;-&lt;150.0,573.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment L&lt;&lt;104.0,371.0&gt;--&lt;100.0,371.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;94.0,457.0&gt;-&lt;99.0,457.0&gt;-&lt;104.0,457.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment L&lt;&lt;211.0,401.0&gt;--&lt;215.0,401.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;222.0,314.0&gt;-&lt;216.0,314.0&gt;-&lt;211.0,314.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;99.0,-98.0&gt;-&lt;111.0,-98.0&gt;-&lt;120.0,-89.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;120.0,-89.5&gt;-&lt;129.0,-81.0&gt;-&lt;129.0,-68.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;340.0,430.0&gt;-&lt;345.0,428.0&gt;-&lt;354.0,426.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;352.0,0.0&gt;--&lt;341.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;261.0,0.0&gt;--&lt;245.0,0.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;540.0,601.0&gt;--&lt;540.0,601.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;887.0,687.0&gt;--&lt;887.0,686.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1041.0,713.0&gt;-&lt;1029.0,716.0&gt;-&lt;1018.5,710.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1018.5,710.0&gt;-&lt;1008.0,704.0&gt;-&lt;1004.0,692.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;999.0,676.0&gt;--&lt;999.0,676.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;626.0,646.0&gt;--&lt;625.0,646.0&gt;&gt;

* uniAB53 (U+AB53) contains a short segment B&lt;&lt;115.5,390.5&gt;-&lt;104.0,384.0&gt;-&lt;100.0,377.0&gt;&gt;

* uniAB53 (U+AB53) contains a short segment B&lt;&lt;628.0,-93.5&gt;-&lt;640.0,-87.0&gt;-&lt;643.0,-80.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;518.0,360.0&gt;--&lt;518.0,360.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;304.0,-13.0&gt;-&lt;297.0,-13.0&gt;-&lt;286.5,-13.5&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;286.5,-13.5&gt;-&lt;276.0,-14.0&gt;-&lt;271.0,-13.0&gt;&gt;

* kgreenlandic (U+0138) contains a short segment L&lt;&lt;189.0,244.0&gt;--&lt;182.0,244.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;78.0,370.0&gt;-&lt;75.0,371.0&gt;-&lt;72.0,371.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;65.0,457.0&gt;-&lt;72.0,457.0&gt;-&lt;78.0,457.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;182.0,401.0&gt;-&lt;184.0,401.0&gt;-&lt;186.0,401.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;193.0,314.0&gt;-&lt;187.0,314.0&gt;-&lt;182.0,315.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment L&lt;&lt;393.0,269.0&gt;--&lt;377.0,264.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;246.0,208.0&gt;-&lt;238.0,209.0&gt;-&lt;230.0,211.0&gt;&gt;

* uniA7A9 (U+A7A9) contains a short segment B&lt;&lt;230.0,211.0&gt;-&lt;222.0,213.0&gt;-&lt;213.0,215.0&gt;&gt;

* uni2C66 (U+2C66) contains a short segment L&lt;&lt;332.0,480.0&gt;--&lt;333.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;484.0,480.0&gt;--&lt;501.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;590.0,480.0&gt;--&lt;591.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;553.0,437.0&gt;--&lt;553.0,437.0&gt;&gt;

* f_f.liga contains a short segment L&lt;&lt;99.0,480.0&gt;--&lt;99.0,489.0&gt;&gt;

* f_f_i.liga contains a short segment L&lt;&lt;99.0,480.0&gt;--&lt;99.0,489.0&gt;&gt;

* pi (U+03C0) contains a short segment B&lt;&lt;509.0,99.5&gt;-&lt;515.0,93.0&gt;-&lt;523.0,93.0&gt;&gt;

* chi (U+03C7) contains a short segment B&lt;&lt;115.5,390.5&gt;-&lt;104.0,384.0&gt;-&lt;100.0,377.0&gt;&gt;

* chi (U+03C7) contains a short segment B&lt;&lt;628.0,-93.5&gt;-&lt;640.0,-87.0&gt;-&lt;643.0,-80.0&gt;&gt;

* dollar (U+0024) contains a short segment L&lt;&lt;323.0,427.0&gt;--&lt;326.0,426.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;111.0,333.0&gt;-&lt;110.0,341.0&gt;-&lt;110.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;219.0,350.0&gt;-&lt;219.0,341.0&gt;-&lt;220.0,333.0&gt;&gt;

* uni20AD (U+20AD) contains a short segment L&lt;&lt;178.0,410.0&gt;--&lt;202.0,410.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;406.0,707.0&gt;-&lt;413.0,708.0&gt;-&lt;422.0,708.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;422.0,708.5&gt;-&lt;431.0,709.0&gt;-&lt;439.0,709.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;439.0,709.0&gt;-&lt;445.0,709.0&gt;-&lt;451.5,708.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;451.5,708.5&gt;-&lt;458.0,708.0&gt;-&lt;465.0,708.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;465.0,606.0&gt;-&lt;458.0,607.0&gt;-&lt;451.5,607.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;451.5,607.5&gt;-&lt;445.0,608.0&gt;-&lt;439.0,608.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;298.0,605.0&gt;--&lt;298.0,606.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;238.0,0.0&gt;--&lt;238.0,8.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;238.0,8.0&gt;--&lt;232.0,8.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;69.0,693.0&gt;--&lt;69.0,700.0&gt;&gt;
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

<details><summary>[16] ElmsSans-ExtraBold.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;415.0,0.0&gt;--&lt;557.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* uni01B3 (U+01B3): L&lt;&lt;344.0,411.0&gt;--&lt;533.0,700.0&gt;&gt; -&gt; L&lt;&lt;533.0,700.0&gt;--&lt;580.0,770.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;321.0,161.0&gt;--&lt;458.0,480.0&gt;&gt; -&gt; L&lt;&lt;458.0,480.0&gt;--&lt;493.0,557.0&gt;&gt;

* uniA7B9 (U+A7B9): L&lt;&lt;241.0,480.0&gt;--&lt;241.0,227.0&gt;&gt; -&gt; L&lt;&lt;241.0,227.0&gt;--&lt;241.0,224.0&gt;&gt;
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
<pre><code>* Lcaron (U+013D): L&lt;&lt;387.0,522.0&gt;--&lt;386.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;634.0,542.0&gt;--&lt;633.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;102.0,239.0&gt;--&lt;100.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;244.0,720.0&gt;--&lt;242.0,239.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;100.0,-234.0&gt;--&lt;102.0,247.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;242.0,247.0&gt;--&lt;244.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;293.0,542.0&gt;--&lt;292.0,720.0&gt;&gt;

* m (U+006D): L&lt;&lt;400.0,0.0&gt;--&lt;399.0,268.0&gt;&gt;

* m (U+006D): L&lt;&lt;66.0,0.0&gt;--&lt;65.0,480.0&gt;&gt;

* m (U+006D): L&lt;&lt;735.0,0.0&gt;--&lt;734.0,268.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;379.0,542.0&gt;--&lt;378.0,720.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;210.0,700.0&gt;--&lt;211.0,212.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;544.0,700.0&gt;--&lt;545.0,212.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;879.0,700.0&gt;--&lt;880.0,0.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;104.0,133.0&gt;--&lt;100.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;244.0,720.0&gt;--&lt;240.0,133.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;210.0,480.0&gt;--&lt;211.0,212.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;544.0,480.0&gt;--&lt;545.0,212.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;879.0,480.0&gt;--&lt;880.0,0.0&gt;&gt;

* uni0295 (U+0295): L&lt;&lt;538.0,514.0&gt;--&lt;391.0,515.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;400.0,0.0&gt;--&lt;399.0,268.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;66.0,0.0&gt;--&lt;65.0,480.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;735.0,0.0&gt;--&lt;734.0,268.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;400.0,0.0&gt;--&lt;399.0,268.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;66.0,0.0&gt;--&lt;65.0,480.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;735.0,0.0&gt;--&lt;734.0,268.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;400.0,0.0&gt;--&lt;399.0,268.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;66.0,0.0&gt;--&lt;65.0,480.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;735.0,0.0&gt;--&lt;734.0,268.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;507.0,623.0&gt;--&lt;508.0,484.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;620.0,162.0&gt;--&lt;481.0,161.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;156.0,53.0&gt;--&lt;155.0,192.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;50.0,513.0&gt;--&lt;189.0,514.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;786.0,-111.5&gt;-&lt;800.0,-117.0&gt;-&lt;811.0,-112.5&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;811.0,-112.5&gt;-&lt;822.0,-108.0&gt;-&lt;827.0,-99.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;762.0,644.0&gt;-&lt;750.0,644.0&gt;-&lt;741.0,635.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;741.0,635.0&gt;-&lt;732.0,626.0&gt;-&lt;732.0,614.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;752.0,331.0&gt;--&lt;751.0,331.0&gt;&gt;

* uniA726 (U+A726) contains a short segment B&lt;&lt;531.0,-66.0&gt;-&lt;544.0,-66.0&gt;-&lt;553.5,-56.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;203.0,573.0&gt;-&lt;190.0,573.0&gt;-&lt;181.5,564.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;181.5,564.5&gt;-&lt;173.0,556.0&gt;-&lt;173.0,543.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;174.0,349.0&gt;--&lt;154.0,349.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uniA740 (U+A740) contains a short segment L&lt;&lt;232.0,349.0&gt;--&lt;219.0,349.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;103.0,464.0&gt;-&lt;108.0,464.0&gt;-&lt;114.0,463.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;271.0,308.0&gt;-&lt;265.0,308.0&gt;-&lt;259.0,308.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;94.0,-83.0&gt;-&lt;106.0,-83.0&gt;-&lt;115.0,-74.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;115.0,-74.5&gt;-&lt;124.0,-66.0&gt;-&lt;124.0,-53.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;506.0,-66.0&gt;-&lt;520.0,-66.0&gt;-&lt;529.5,-56.5&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;529.5,-56.5&gt;-&lt;539.0,-47.0&gt;-&lt;539.0,-33.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;363.0,439.0&gt;-&lt;366.0,438.0&gt;-&lt;370.0,437.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;306.0,314.0&gt;-&lt;304.0,315.0&gt;-&lt;303.0,315.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;362.0,0.0&gt;--&lt;346.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;278.0,-147.0&gt;-&lt;278.0,-156.0&gt;-&lt;285.5,-162.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;285.5,-162.0&gt;-&lt;293.0,-168.0&gt;-&lt;304.0,-168.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;304.0,-168.0&gt;-&lt;314.0,-168.0&gt;-&lt;321.5,-160.5&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;321.5,-160.5&gt;-&lt;329.0,-153.0&gt;-&lt;329.0,-142.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;329.0,-142.0&gt;-&lt;329.0,-131.0&gt;-&lt;321.5,-123.5&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;321.5,-123.5&gt;-&lt;314.0,-116.0&gt;-&lt;304.0,-116.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;236.0,0.0&gt;--&lt;217.0,0.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;571.0,557.0&gt;--&lt;571.0,557.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;864.0,660.0&gt;--&lt;864.0,659.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1052.0,672.0&gt;-&lt;1040.0,675.0&gt;-&lt;1029.5,668.5&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1029.5,668.5&gt;-&lt;1019.0,662.0&gt;-&lt;1015.0,650.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;1008.0,627.0&gt;--&lt;1008.0,627.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;645.0,626.0&gt;--&lt;645.0,626.0&gt;&gt;

* uni2C65 (U+2C65) contains a short segment B&lt;&lt;272.0,-16.0&gt;-&lt;266.0,-16.0&gt;-&lt;261.0,-16.0&gt;&gt;

* uni2C65 (U+2C65) contains a short segment L&lt;&lt;414.0,446.0&gt;--&lt;415.0,445.0&gt;&gt;

* uniAB53 (U+AB53) contains a short segment B&lt;&lt;633.5,-52.5&gt;-&lt;644.0,-48.0&gt;-&lt;648.0,-42.0&gt;&gt;

* uni023C (U+023C) contains a short segment B&lt;&lt;287.0,116.0&gt;-&lt;290.0,116.0&gt;-&lt;294.0,116.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;263.0,-12.0&gt;-&lt;255.0,-11.0&gt;-&lt;247.5,-10.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;247.5,-10.0&gt;-&lt;240.0,-9.0&gt;-&lt;234.0,-7.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;93.0,464.0&gt;-&lt;99.0,464.0&gt;-&lt;105.0,463.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;261.0,308.0&gt;-&lt;255.0,308.0&gt;-&lt;249.0,308.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;241.0,227.0&gt;--&lt;241.0,224.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;582.0,480.0&gt;--&lt;599.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;590.0,420.0&gt;--&lt;590.0,420.0&gt;&gt;

* pi (U+03C0) contains a short segment B&lt;&lt;558.5,128.0&gt;-&lt;564.0,122.0&gt;-&lt;572.0,122.0&gt;&gt;

* chi (U+03C7) contains a short segment B&lt;&lt;633.5,-52.5&gt;-&lt;644.0,-48.0&gt;-&lt;648.0,-42.0&gt;&gt;

* colonmonetary (U+20A1) contains a short segment B&lt;&lt;399.0,-16.0&gt;-&lt;391.0,-16.0&gt;-&lt;384.0,-16.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;336.0,439.0&gt;-&lt;343.0,437.0&gt;-&lt;348.0,435.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;89.0,328.0&gt;-&lt;89.0,339.0&gt;-&lt;89.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;89.0,350.0&gt;-&lt;89.0,361.0&gt;-&lt;89.0,372.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;237.0,372.0&gt;-&lt;236.0,361.0&gt;-&lt;236.0,350.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;236.0,350.0&gt;-&lt;236.0,338.0&gt;-&lt;237.0,328.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;431.0,709.0&gt;-&lt;436.0,709.0&gt;-&lt;442.0,709.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;442.0,709.5&gt;-&lt;448.0,710.0&gt;-&lt;454.0,710.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;454.0,710.0&gt;-&lt;459.0,710.0&gt;-&lt;464.5,709.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;464.5,709.5&gt;-&lt;470.0,709.0&gt;-&lt;474.0,709.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;474.0,571.0&gt;-&lt;465.0,572.0&gt;-&lt;454.0,572.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;454.0,572.0&gt;-&lt;441.0,572.0&gt;-&lt;431.0,571.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment B&lt;&lt;700.0,470.0&gt;-&lt;700.0,464.0&gt;-&lt;700.0,458.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment B&lt;&lt;700.0,458.0&gt;-&lt;700.0,452.0&gt;-&lt;700.0,446.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;294.0,580.0&gt;--&lt;294.0,581.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment B&lt;&lt;304.0,700.0&gt;-&lt;306.0,700.0&gt;-&lt;308.0,700.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;277.0,0.0&gt;--&lt;277.0,3.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;277.0,3.0&gt;--&lt;259.0,3.0&gt;&gt;

* uni20AA (U+20AA) contains a short segment L&lt;&lt;108.0,698.0&gt;--&lt;108.0,700.0&gt;&gt;
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

<details><summary>[16] ElmsSans-Black.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;394.0,0.0&gt;--&lt;556.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* uni01B3 (U+01B3): L&lt;&lt;350.0,425.0&gt;--&lt;528.0,700.0&gt;&gt; -&gt; L&lt;&lt;528.0,700.0&gt;--&lt;577.0,774.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;330.0,184.0&gt;--&lt;458.0,480.0&gt;&gt; -&gt; L&lt;&lt;458.0,480.0&gt;--&lt;495.0,561.0&gt;&gt;

* uni20B9 (U+20B9): L&lt;&lt;292.0,568.0&gt;--&lt;287.0,568.0&gt;&gt; -&gt; L&lt;&lt;287.0,568.0&gt;--&lt;72.0,568.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1021.0,629.0&gt;--&lt;1013.0,602.0&gt;&gt; -&gt; L&lt;&lt;1013.0,602.0&gt;--&lt;820.0,0.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;739.0,228.0&gt;--&lt;853.0,646.0&gt;&gt; -&gt; L&lt;&lt;853.0,646.0&gt;--&lt;869.0,706.0&gt;&gt;
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
<pre><code>* Lcaron (U+013D): L&lt;&lt;384.0,522.0&gt;--&lt;383.0,700.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;634.0,542.0&gt;--&lt;633.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;102.0,261.0&gt;--&lt;100.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;264.0,720.0&gt;--&lt;262.0,261.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;100.0,-234.0&gt;--&lt;102.0,225.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;262.0,225.0&gt;--&lt;264.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;317.0,542.0&gt;--&lt;316.0,720.0&gt;&gt;

* m (U+006D): L&lt;&lt;398.0,0.0&gt;--&lt;397.0,259.0&gt;&gt;

* m (U+006D): L&lt;&lt;64.0,0.0&gt;--&lt;63.0,480.0&gt;&gt;

* m (U+006D): L&lt;&lt;732.0,0.0&gt;--&lt;731.0,259.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;380.0,542.0&gt;--&lt;379.0,720.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;227.0,700.0&gt;--&lt;228.0,221.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;561.0,700.0&gt;--&lt;562.0,221.0&gt;&gt;

* uni019C (U+019C): L&lt;&lt;895.0,700.0&gt;--&lt;896.0,0.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;104.0,160.0&gt;--&lt;100.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;264.0,720.0&gt;--&lt;260.0,160.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;526.0,771.0&gt;--&lt;525.0,563.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;227.0,480.0&gt;--&lt;228.0,221.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;561.0,480.0&gt;--&lt;562.0,221.0&gt;&gt;

* uni026F (U+026F): L&lt;&lt;895.0,480.0&gt;--&lt;896.0,0.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;398.0,0.0&gt;--&lt;397.0,259.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;64.0,0.0&gt;--&lt;63.0,480.0&gt;&gt;

* uni1E3F (U+1E3F): L&lt;&lt;732.0,0.0&gt;--&lt;731.0,259.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;398.0,0.0&gt;--&lt;397.0,259.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;64.0,0.0&gt;--&lt;63.0,480.0&gt;&gt;

* uni1E41 (U+1E41): L&lt;&lt;732.0,0.0&gt;--&lt;731.0,259.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;398.0,0.0&gt;--&lt;397.0,259.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;64.0,0.0&gt;--&lt;63.0,480.0&gt;&gt;

* uni1E43 (U+1E43): L&lt;&lt;732.0,0.0&gt;--&lt;731.0,259.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;209.0,333.0&gt;--&lt;208.0,156.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;504.0,618.0&gt;--&lt;505.0,464.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;338.0,454.0&gt;--&lt;161.0,455.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;623.0,159.0&gt;--&lt;469.0,158.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;159.0,45.0&gt;--&lt;158.0,199.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;454.0,330.0&gt;--&lt;455.0,507.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;335.0,209.0&gt;--&lt;512.0,208.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;50.0,504.0&gt;--&lt;204.0,505.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;159.0,564.0&gt;-&lt;146.0,566.0&gt;-&lt;136.0,553.0&gt;&gt;

* uniA7B3 (U+A7B3) contains a short segment B&lt;&lt;788.5,-95.5&gt;-&lt;803.0,-98.0&gt;-&lt;810.0,-85.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;774.0,627.0&gt;-&lt;761.0,627.0&gt;-&lt;752.5,618.5&gt;&gt;

* uni0193 (U+0193) contains a short segment B&lt;&lt;752.5,618.5&gt;-&lt;744.0,610.0&gt;-&lt;744.0,597.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;754.0,335.0&gt;--&lt;754.0,335.0&gt;&gt;

* uniA726 (U+A726) contains a short segment B&lt;&lt;525.0,-56.0&gt;-&lt;536.0,-56.0&gt;-&lt;543.0,-48.5&gt;&gt;

* uniA726 (U+A726) contains a short segment B&lt;&lt;543.0,-48.5&gt;-&lt;550.0,-41.0&gt;-&lt;550.0,-31.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment L&lt;&lt;237.0,558.0&gt;--&lt;214.0,558.0&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;214.0,558.0&gt;-&lt;201.0,558.0&gt;-&lt;192.5,549.5&gt;&gt;

* uniA7AA (U+A7AA) contains a short segment B&lt;&lt;192.5,549.5&gt;-&lt;184.0,541.0&gt;-&lt;184.0,528.0&gt;&gt;

* K (U+004B) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uni1E30 (U+1E30) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uni01E8 (U+01E8) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uni0136 (U+0136) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uni1E32 (U+1E32) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;171.0,349.0&gt;--&lt;161.0,349.0&gt;&gt;

* uni1E34 (U+1E34) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uniA740 (U+A740) contains a short segment L&lt;&lt;242.0,349.0&gt;--&lt;236.0,349.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;107.0,467.0&gt;-&lt;113.0,467.0&gt;-&lt;119.0,467.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;295.0,305.0&gt;-&lt;289.0,305.0&gt;-&lt;283.0,305.0&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;91.0,-76.0&gt;-&lt;104.0,-76.0&gt;-&lt;112.5,-67.5&gt;&gt;

* uni019D (U+019D) contains a short segment B&lt;&lt;112.5,-67.5&gt;-&lt;121.0,-59.0&gt;-&lt;121.0,-46.0&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;506.0,-56.0&gt;-&lt;517.0,-56.0&gt;-&lt;524.0,-48.5&gt;&gt;

* Eng (U+014A) contains a short segment B&lt;&lt;524.0,-48.5&gt;-&lt;531.0,-41.0&gt;-&lt;531.0,-31.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;315.0,305.0&gt;-&lt;307.0,308.0&gt;-&lt;295.0,311.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;367.0,0.0&gt;--&lt;348.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;306.0,-160.0&gt;-&lt;314.0,-160.0&gt;-&lt;319.0,-154.5&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;319.0,-154.5&gt;-&lt;324.0,-149.0&gt;-&lt;324.0,-142.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;324.0,-142.0&gt;-&lt;324.0,-134.0&gt;-&lt;319.0,-129.0&gt;&gt;

* uni0162 (U+0162) contains a short segment B&lt;&lt;319.0,-129.0&gt;-&lt;314.0,-124.0&gt;-&lt;306.0,-124.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;586.0,535.0&gt;--&lt;587.0,535.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1057.0,652.0&gt;-&lt;1045.0,655.0&gt;-&lt;1034.5,648.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment B&lt;&lt;1034.5,648.0&gt;-&lt;1024.0,641.0&gt;-&lt;1021.0,629.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;655.0,616.0&gt;--&lt;655.0,616.0&gt;&gt;

* ae (U+00E6) contains a short segment L&lt;&lt;311.0,297.0&gt;--&lt;311.0,313.0&gt;&gt;

* uni01E3 (U+01E3) contains a short segment L&lt;&lt;311.0,297.0&gt;--&lt;311.0,313.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;242.0,-12.0&gt;-&lt;234.0,-10.0&gt;-&lt;228.5,-8.0&gt;&gt;

* eogonek (U+0119) contains a short segment B&lt;&lt;228.5,-8.0&gt;-&lt;223.0,-6.0&gt;-&lt;216.0,-4.0&gt;&gt;

* uniA727 (U+A727) contains a short segment B&lt;&lt;400.0,-56.0&gt;-&lt;411.0,-56.0&gt;-&lt;418.0,-48.5&gt;&gt;

* uniA727 (U+A727) contains a short segment B&lt;&lt;418.0,-48.5&gt;-&lt;425.0,-41.0&gt;-&lt;425.0,-31.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;414.0,287.0&gt;--&lt;416.0,287.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;252.0,258.0&gt;--&lt;232.0,258.0&gt;&gt;

* uni019B (U+019B) contains a short segment L&lt;&lt;250.0,406.0&gt;--&lt;241.0,424.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;107.0,467.0&gt;-&lt;113.0,467.0&gt;-&lt;119.0,467.0&gt;&gt;

* uni026B (U+026B) contains a short segment B&lt;&lt;295.0,305.0&gt;-&lt;289.0,305.0&gt;-&lt;283.0,305.0&gt;&gt;

* uni01A5 (U+01A5) contains a short segment L&lt;&lt;281.0,557.0&gt;--&lt;265.0,557.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;609.0,411.0&gt;--&lt;609.0,411.0&gt;&gt;

* f_f.liga contains a short segment L&lt;&lt;509.0,680.0&gt;--&lt;509.0,679.0&gt;&gt;

* uni0E3F (U+0E3F) contains a short segment L&lt;&lt;395.0,440.0&gt;--&lt;396.0,440.0&gt;&gt;

* colonmonetary (U+20A1) contains a short segment B&lt;&lt;398.0,-16.0&gt;-&lt;394.0,-16.0&gt;-&lt;390.0,-16.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;343.0,445.0&gt;-&lt;352.0,442.0&gt;-&lt;360.0,440.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;78.0,350.0&gt;-&lt;78.0,359.0&gt;-&lt;78.0,367.0&gt;&gt;

* Euro (U+20AC) contains a short segment B&lt;&lt;245.0,367.0&gt;-&lt;244.0,359.0&gt;-&lt;244.0,350.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;479.0,553.0&gt;-&lt;474.0,554.0&gt;-&lt;470.0,554.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;470.0,554.0&gt;-&lt;466.0,554.0&gt;-&lt;461.0,554.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;461.0,554.0&gt;-&lt;457.0,554.0&gt;-&lt;452.5,554.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;452.5,554.0&gt;-&lt;448.0,554.0&gt;-&lt;443.0,553.0&gt;&gt;

* lira (U+20A4) contains a short segment L&lt;&lt;82.0,475.0&gt;--&lt;82.0,485.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment L&lt;&lt;139.0,445.0&gt;--&lt;139.0,459.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment B&lt;&lt;709.0,459.0&gt;-&lt;709.0,456.0&gt;-&lt;709.0,453.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment B&lt;&lt;709.0,453.0&gt;-&lt;709.0,449.0&gt;-&lt;709.0,445.0&gt;&gt;

* uni20B1 (U+20B1) contains a short segment B&lt;&lt;549.0,453.0&gt;-&lt;549.0,453.0&gt;-&lt;549.0,454.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;292.0,567.0&gt;--&lt;292.0,568.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment L&lt;&lt;292.0,568.0&gt;--&lt;287.0,568.0&gt;&gt;

* uni20B9 (U+20B9) contains a short segment B&lt;&lt;297.0,700.0&gt;-&lt;299.0,700.0&gt;-&lt;300.0,700.0&gt;&gt;
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

<details><summary>[14] ElmsSans-ExtraBoldItalic.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0247	Contours detected: 3	Expected: 4

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* aogonek (U+0105): L&lt;&lt;373.0,0.0&gt;--&lt;515.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* eng (U+014B): L&lt;&lt;379.0,-31.0&gt;--&lt;391.0,0.0&gt;&gt; -&gt; L&lt;&lt;391.0,0.0&gt;--&lt;480.0,253.0&gt;&gt;

* eng (U+014B): L&lt;&lt;621.0,244.0&gt;--&lt;536.0,0.0&gt;&gt; -&gt; L&lt;&lt;536.0,0.0&gt;--&lt;524.0,-31.0&gt;&gt;

* logicalnot (U+00AC): L&lt;&lt;552.0,290.0&gt;--&lt;540.0,257.0&gt;&gt; -&gt; L&lt;&lt;540.0,257.0&gt;--&lt;512.0,176.0&gt;&gt;

* sterling (U+00A3): L&lt;&lt;-4.0,0.0&gt;--&lt;27.0,89.0&gt;&gt; -&gt; L&lt;&lt;27.0,89.0&gt;--&lt;40.0,141.0&gt;&gt;

* uni018F (U+018F): L&lt;&lt;141.0,412.0&gt;--&lt;226.0,407.0&gt;&gt; -&gt; L&lt;&lt;226.0,407.0&gt;--&lt;689.0,407.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;423.0,700.0&gt;--&lt;249.0,204.0&gt;&gt; -&gt; L&lt;&lt;249.0,204.0&gt;--&lt;231.0,153.0&gt;&gt;

* uni0196 (U+0196): L&lt;&lt;67.0,101.0&gt;--&lt;104.0,204.0&gt;&gt; -&gt; L&lt;&lt;104.0,204.0&gt;--&lt;278.0,700.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;406.0,509.0&gt;--&lt;227.0,0.0&gt;&gt; -&gt; L&lt;&lt;227.0,0.0&gt;--&lt;196.0,-87.0&gt;&gt;

* uni019D (U+019D): L&lt;&lt;64.0,-49.0&gt;--&lt;82.0,0.0&gt;&gt; -&gt; L&lt;&lt;82.0,0.0&gt;--&lt;328.0,700.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;-77.0,-280.0&gt;--&lt;191.0,480.0&gt;&gt; -&gt; L&lt;&lt;191.0,480.0&gt;--&lt;223.0,570.0&gt;&gt;

* uni01A5 (U+01A5): L&lt;&lt;351.0,528.0&gt;--&lt;333.0,480.0&gt;&gt; -&gt; L&lt;&lt;333.0,480.0&gt;--&lt;326.0,458.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;203.0,480.0&gt;--&lt;222.0,536.0&gt;&gt; -&gt; L&lt;&lt;222.0,536.0&gt;--&lt;245.0,602.0&gt;&gt;

* uni01AD (U+01AD): L&lt;&lt;380.0,572.0&gt;--&lt;367.0,536.0&gt;&gt; -&gt; L&lt;&lt;367.0,536.0&gt;--&lt;348.0,480.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;123.0,-148.0&gt;--&lt;150.0,-70.0&gt;&gt; -&gt; L&lt;&lt;150.0,-70.0&gt;--&lt;373.0,563.0&gt;&gt;

* uni01AE (U+01AE): L&lt;&lt;518.0,563.0&gt;--&lt;295.0,-70.0&gt;&gt; -&gt; L&lt;&lt;295.0,-70.0&gt;--&lt;275.0,-128.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;447.0,411.0&gt;--&lt;738.0,700.0&gt;&gt; -&gt; L&lt;&lt;738.0,700.0&gt;--&lt;808.0,774.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;335.0,162.0&gt;--&lt;584.0,480.0&gt;&gt; -&gt; L&lt;&lt;584.0,480.0&gt;--&lt;646.0,561.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;23.0,0.0&gt;--&lt;213.0,540.0&gt;&gt; -&gt; L&lt;&lt;213.0,540.0&gt;--&lt;244.0,628.0&gt;&gt;

* uni0253 (U+0253): L&lt;&lt;369.0,576.0&gt;--&lt;356.0,540.0&gt;&gt; -&gt; L&lt;&lt;356.0,540.0&gt;--&lt;327.0,458.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;352.0,-79.0&gt;--&lt;381.0,0.0&gt;&gt; -&gt; L&lt;&lt;381.0,0.0&gt;--&lt;394.0,37.0&gt;&gt;

* uni0256 (U+0256): L&lt;&lt;777.0,720.0&gt;--&lt;523.0,0.0&gt;&gt; -&gt; L&lt;&lt;523.0,0.0&gt;--&lt;506.0,-45.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;537.0,442.0&gt;--&lt;565.0,524.0&gt;&gt; -&gt; L&lt;&lt;565.0,524.0&gt;--&lt;596.0,612.0&gt;&gt;

* uni0257 (U+0257): L&lt;&lt;720.0,560.0&gt;--&lt;707.0,524.0&gt;&gt; -&gt; L&lt;&lt;707.0,524.0&gt;--&lt;523.0,0.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;537.0,442.0&gt;--&lt;544.0,463.0&gt;&gt; -&gt; L&lt;&lt;544.0,463.0&gt;--&lt;570.0,536.0&gt;&gt;

* uni0260 (U+0260): L&lt;&lt;695.0,484.0&gt;--&lt;688.0,463.0&gt;&gt; -&gt; L&lt;&lt;688.0,463.0&gt;--&lt;509.0,-44.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;325.0,480.0&gt;--&lt;220.0,181.0&gt;&gt; -&gt; L&lt;&lt;220.0,181.0&gt;--&lt;204.0,135.0&gt;&gt;

* uni0269 (U+0269): L&lt;&lt;49.0,101.0&gt;--&lt;77.0,181.0&gt;&gt; -&gt; L&lt;&lt;77.0,181.0&gt;--&lt;182.0,480.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;327.0,234.0&gt;--&lt;245.0,0.0&gt;&gt; -&gt; L&lt;&lt;245.0,0.0&gt;--&lt;235.0,-29.0&gt;&gt;

* uni0272 (U+0272): L&lt;&lt;90.0,-29.0&gt;--&lt;100.0,0.0&gt;&gt; -&gt; L&lt;&lt;100.0,0.0&gt;--&lt;269.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;-3.0,-72.0&gt;--&lt;23.0,0.0&gt;&gt; -&gt; L&lt;&lt;23.0,0.0&gt;--&lt;191.0,480.0&gt;&gt;

* uni027D (U+027D): L&lt;&lt;253.0,244.0&gt;--&lt;168.0,0.0&gt;&gt; -&gt; L&lt;&lt;168.0,0.0&gt;--&lt;154.0,-38.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;23.0,0.0&gt;--&lt;126.0,295.0&gt;&gt; -&gt; L&lt;&lt;126.0,295.0&gt;--&lt;147.0,353.0&gt;&gt;

* uni027E (U+027E): L&lt;&lt;280.0,320.0&gt;--&lt;271.0,295.0&gt;&gt; -&gt; L&lt;&lt;271.0,295.0&gt;--&lt;168.0,0.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;-17.0,-78.0&gt;--&lt;11.0,0.0&gt;&gt; -&gt; L&lt;&lt;11.0,0.0&gt;--&lt;257.0,700.0&gt;&gt;

* uni2C64 (U+2C64): L&lt;&lt;245.0,253.0&gt;--&lt;156.0,0.0&gt;&gt; -&gt; L&lt;&lt;156.0,0.0&gt;--&lt;135.0,-58.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;1202.0,646.0&gt;--&lt;1181.0,617.0&gt;&gt; -&gt; L&lt;&lt;1181.0,617.0&gt;--&lt;766.0,0.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;764.0,198.0&gt;--&lt;1055.0,660.0&gt;&gt; -&gt; L&lt;&lt;1055.0,660.0&gt;--&lt;1092.0,723.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* integral (U+222B): L&lt;&lt;305.0,5.0&gt;--&lt;233.0,5.0&gt;&gt;/L&lt;&lt;233.0,5.0&gt;--&lt;304.0,1.0&gt;&gt; = 3.22452260651989

* integral (U+222B): L&lt;&lt;407.0,523.0&gt;--&lt;480.0,523.0&gt;&gt;/L&lt;&lt;480.0,523.0&gt;--&lt;408.0,528.0&gt;&gt; = 3.9724959407506057

* l.alt: L&lt;&lt;241.0,224.0&gt;--&lt;168.0,224.0&gt;&gt;/L&lt;&lt;168.0,224.0&gt;--&lt;240.0,219.0&gt;&gt; = 3.9724959407506057

* sterling (U+00A3): L&lt;&lt;229.0,495.0&gt;--&lt;302.0,495.0&gt;&gt;/L&lt;&lt;302.0,495.0&gt;--&lt;230.0,500.0&gt;&gt; = 3.9724959407506057

* uni0162 (U+0162): L&lt;&lt;225.0,-116.0&gt;--&lt;231.0,-91.0&gt;&gt;/L&lt;&lt;231.0,-91.0&gt;--&lt;222.0,-116.0&gt;&gt; = 6.303143073729064

* uni01AD (U+01AD): L&lt;&lt;254.0,216.0&gt;--&lt;182.0,216.0&gt;&gt;/L&lt;&lt;182.0,216.0&gt;--&lt;253.0,212.0&gt;&gt; = 3.22452260651989

* uni025B (U+025B): B&lt;&lt;101.0,222.0&gt;-&lt;136.0,252.0&gt;-&lt;188.0,257.0&gt;&gt;/B&lt;&lt;188.0,257.0&gt;-&lt;147.0,263.0&gt;-&lt;129.0,293.0&gt;&gt; = 13.817974887554241

* uni028A (U+028A): B&lt;&lt;128.0,318.5&gt;-&lt;167.0,365.0&gt;-&lt;209.0,376.0&gt;&gt;/L&lt;&lt;209.0,376.0&gt;--&lt;130.0,374.0&gt;&gt; = 13.226176846516575
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

<details><summary>[16] ElmsSans-ExtraLight.ttf</summary>
<div>
<details>
    <summary>💥 <b>ERROR</b> Shapes languages in all GF glyphsets. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/googlefonts.html#googlefonts-glyphsets-shape-languages">googlefonts/glyphsets/shape_languages</a></summary>
    <div>







* 💥 **ERROR** <p>Failed with KeyError: 'Berf'</p>
<pre><code>  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checkrunner.py&quot;, line 223, in _run_check
    subresults = list(subresults)
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/fontbakery/checks/vendorspecific/googlefonts/glyphsets/shape_languages.py&quot;, line 48, in check_glyphsets_shape_languages
    for language_code in languages_per_glyphset(glyphset):
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 669, in languages_per_glyphset
    return GlyphSet.load(glyphset_name).get_language_codes()
  File &quot;/home/runner/work/elms-sans/elms-sans/venv-test/lib/python3.10/site-packages/glyphsets/__init__.py&quot;, line 222, in get_language_codes
    and SCRIPT_NAMES[language.script] == self.script

</code></pre>
 [code: failed-check]



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
<td align="left">U+03C7: GREEK SMALL LETTER CHI</td>
<td align="left">U+03A7: GREEK CAPITAL LETTER CHI</td>
</tr>
</tbody>
</table>
 [code: missing-case-counterparts]



</div>
</details>

<details>
    <summary>🔥 <b>FAIL</b> Ensure dotted circle glyph is present and can attach marks. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#dotted-circle">dotted_circle</a></summary>
    <div>







* 🔥 **FAIL** <p>The following glyphs could not be attached to the dotted circle glyph:</p>
<pre><code>- acutecomb

- dotbelowcomb

- gravecomb

- hookabovecomb

- tildecomb

- uni0302

- uni0304

- uni0306

- uni0307

- uni0308

- uni030A

- uni030B

- uni030C

- uni030F

- uni0310

- uni0311

- uni0312

- uni0313

- uni0315

- uni031B

- uni0324

- uni0325

- uni0326

- uni0327

- uni0328

- uni0329

- uni032D

- uni032E

- uni032F

- uni0330

- uni0331

- uni0332

- uni0334

- uni0335

- uni0336

- uni0337

- uni0338

- uni0358

- uni1DC4

- uni1DC5

- uni1DC6

- uni1DC7
</code></pre>
 [code: unattached-dotted-circle-marks]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check if each glyph has the recommended amount of contours. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#contour-count">contour_count</a></summary>
    <div>







* ⚠️ **WARN** <p>This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.</p>
<p>The following glyphs do not have the recommended number of contours:</p>
<pre><code>- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EA	Contours detected: 3	Expected: 2

- Glyph name: uni01EB	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12

- Glyph name: Dcroat	Contours detected: 3	Expected: 2

- Glyph name: Eth	Contours detected: 3	Expected: 2

- Glyph name: Lslash	Contours detected: 2	Expected: 1

- Glyph name: Tbar	Contours detected: 2	Expected: 1

- Glyph name: Uhorn	Contours detected: 2	Expected: 1

- Glyph name: Uogonek	Contours detected: 2	Expected: 1

- Glyph name: aogonek	Contours detected: 3	Expected: 2

- Glyph name: circle	Contours detected: 1	Expected: 2

- Glyph name: dcroat	Contours detected: 3	Expected: 2

- Glyph name: hbar	Contours detected: 2	Expected: 1

- Glyph name: tbar	Contours detected: 2	Expected: 1

- Glyph name: uhorn	Contours detected: 2	Expected: 1

- Glyph name: uni00AD	Contours detected: 1	Expected: 0

- Glyph name: uni0180	Contours detected: 3	Expected: 2

- Glyph name: uni019A	Contours detected: 2	Expected: 1

- Glyph name: uni01B5	Contours detected: 2	Expected: 1

- Glyph name: uni01B6	Contours detected: 2	Expected: 1

- Glyph name: uni01E4	Contours detected: 2	Expected: 1

- Glyph name: uni01E5	Contours detected: 3	Expected: 2

- Glyph name: uni01EC	Contours detected: 4	Expected: 3

- Glyph name: uni01ED	Contours detected: 4	Expected: 3

- Glyph name: uni0228	Contours detected: 2	Expected: 1

- Glyph name: uni0229	Contours detected: 3	Expected: 2

- Glyph name: uni023D	Contours detected: 2	Expected: 1

- Glyph name: uni0243	Contours detected: 4	Expected: 3

- Glyph name: uni0248	Contours detected: 2	Expected: 1

- Glyph name: uni0249	Contours detected: 3	Expected: 2

- Glyph name: uni024D	Contours detected: 2	Expected: 1

- Glyph name: uni1E08	Contours detected: 3	Expected: 2

- Glyph name: uni1E09	Contours detected: 3	Expected: 2

- Glyph name: uni1E1C	Contours detected: 3	Expected: 2

- Glyph name: uni1E1D	Contours detected: 4	Expected: 3

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

- Glyph name: uni25A1	Contours detected: 1	Expected: 2

- Glyph name: uni25AB	Contours detected: 1	Expected: 2

- Glyph name: uni25C7	Contours detected: 1	Expected: 2

- Glyph name: uni25CC	Contours detected: 15	Expected: 16 or 12
</code></pre>
 [code: contour-count]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are there caret positions declared for every ligature? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#ligature-carets">ligature_carets</a></summary>
    <div>







* ⚠️ **WARN** <p>This font lacks caret positioning values for these ligature glyphs:
- f_i.liga</p>
<pre><code>- fl
</code></pre>
 [code: incomplete-caret-pos-data]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check there are no overlapping path segments <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#overlapping-path-segments">overlapping_path_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have overlapping path segments:</p>
<pre><code>* uni2C72 (U+2C72): L&lt;&lt;858.0,685.0&gt;--&lt;858.0,685.0&gt;&gt; has the same coordinates as a previous segment.

* aogonek (U+0105): L&lt;&lt;506.0,0.0&gt;--&lt;547.0,0.0&gt;&gt; has the same coordinates as a previous segment.

* iogonek (U+012F): L&lt;&lt;63.0,0.0&gt;--&lt;105.0,0.0&gt;&gt; has the same coordinates as a previous segment.
</code></pre>
 [code: overlapping-path-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Does the font contain a soft hyphen? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-hyphen">soft_hyphen</a></summary>
    <div>







* ⚠️ **WARN** <p>This font has a 'Soft Hyphen' character.</p>
 [code: softhyphen]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Check font contains no unreachable glyphs <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#unreachable-glyphs">unreachable_glyphs</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs could not be reached by codepoint or substitution rules:</p>
<pre><code>- dotlessi_ogonek

- l.alt

- t.alt
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
<li>U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, tifinagh, math, cherokee</li>
<li>U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh</li>
<li>U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, coptic, syriac, todhri, canadian-aboriginal, math, tai-le, old-permic, malayalam, hebrew, duployan</li>
<li>U+030A COMBINING RING ABOVE: try adding one of: syriac, duployan</li>
<li>U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee</li>
<li>U+030C COMBINING CARON: try adding one of: cherokee, tai-le</li>
<li>U+030D COMBINING VERTICAL LINE ABOVE: try adding sunuwar</li>
<li>U+030F COMBINING DOUBLE GRAVE ACCENT: not included in any glyphset definition</li>
<li>U+0310 COMBINING CANDRABINDU: try adding one of: sunuwar, math</li>
<li>U+0311 COMBINING INVERTED BREVE: try adding one of: todhri, coptic</li>
<li>U+0312 COMBINING TURNED COMMA ABOVE: try adding math</li>
<li>U+0313 COMBINING COMMA ABOVE: try adding one of: old-permic, todhri</li>
<li>U+0315 COMBINING COMMA ABOVE RIGHT: try adding math</li>
<li>U+031B COMBINING HORN: not included in any glyphset definition</li>
<li>U+0324 COMBINING DIAERESIS BELOW: try adding one of: syriac, duployan, cherokee</li>
<li>U+0325 COMBINING RING BELOW: try adding syriac</li>
<li>U+0326 COMBINING COMMA BELOW: try adding math</li>
<li>U+0327 COMBINING CEDILLA: try adding math</li>
<li>U+0328 COMBINING OGONEK: not included in any glyphset definition</li>
<li>U+032D COMBINING CIRCUMFLEX ACCENT BELOW: try adding one of: syriac, sunuwar</li>
<li>U+032E COMBINING BREVE BELOW: try adding syriac</li>
<li>U+032F COMBINING INVERTED BREVE BELOW: try adding math</li>
<li>U+0330 COMBINING TILDE BELOW: try adding one of: syriac, math, cherokee</li>
<li>U+0331 COMBINING MACRON BELOW: try adding one of: thai, tifinagh, syriac, caucasian-albanian, sunuwar, cherokee, gothic</li>
<li>U+0332 COMBINING LOW LINE: try adding math</li>
<li>U+0334 COMBINING TILDE OVERLAY: not included in any glyphset definition</li>
<li>U+0335 COMBINING SHORT STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0336 COMBINING LONG STROKE OVERLAY: not included in any glyphset definition</li>
<li>U+0337 COMBINING SHORT SOLIDUS OVERLAY: not included in any glyphset definition</li>
<li>U+0338 COMBINING LONG SOLIDUS OVERLAY: try adding math</li>
<li>U+0358 COMBINING DOT ABOVE RIGHT: try adding osage</li>
<li>U+0398 GREEK CAPITAL LETTER THETA: try adding one of: elbasan, greek, math</li>
<li>U+039B GREEK CAPITAL LETTER LAMDA: try adding one of: elbasan, greek, math</li>
<li>U+03B8 GREEK SMALL LETTER THETA: try adding one of: greek, math</li>
<li>U+03BB GREEK SMALL LETTER LAMDA: try adding one of: greek, math</li>
<li>U+03BC GREEK SMALL LETTER MU: try adding one of: greek, math</li>
<li>U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi</li>
<li>U+03C7 GREEK SMALL LETTER CHI: try adding one of: greek, math</li>
<li>U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai</li>
<li>U+1DC4 COMBINING MACRON-ACUTE: not included in any glyphset definition</li>
<li>U+1DC5 COMBINING GRAVE-MACRON: not included in any glyphset definition</li>
<li>U+1DC6 COMBINING MACRON-GRAVE: not included in any glyphset definition</li>
<li>U+1DC7 COMBINING ACUTE-MACRON: not included in any glyphset definition</li>
<li>U+1DCA COMBINING LATIN SMALL LETTER R BELOW: not included in any glyphset definition</li>
<li>U+2016 DOUBLE VERTICAL LINE: try adding math</li>
<li>U+2021 DOUBLE DAGGER: try adding adlam</li>
<li>U+2028 LINE SEPARATOR: not included in any glyphset definition</li>
<li>U+2029 PARAGRAPH SEPARATOR: not included in any glyphset definition</li>
<li>U+2030 PER MILLE SIGN: try adding adlam</li>
<li>U+2070 SUPERSCRIPT ZERO: try adding math</li>
<li>U+2074 SUPERSCRIPT FOUR: try adding math</li>
<li>U+2075 SUPERSCRIPT FIVE: try adding math</li>
<li>U+2076 SUPERSCRIPT SIX: try adding math</li>
<li>U+2077 SUPERSCRIPT SEVEN: try adding math</li>
<li>U+2078 SUPERSCRIPT EIGHT: try adding math</li>
<li>U+2079 SUPERSCRIPT NINE: try adding math</li>
<li>U+207F SUPERSCRIPT LATIN SMALL LETTER N: try adding math</li>
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
<li>U+2126 OHM SIGN: try adding math</li>
<li>U+212E ESTIMATED SYMBOL: try adding math</li>
<li>U+2144 TURNED SANS-SERIF CAPITAL Y: try adding math</li>
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
<li>U+2205 EMPTY SET: try adding math</li>
<li>U+2206 INCREMENT: try adding math</li>
<li>U+220F N-ARY PRODUCT: try adding math</li>
<li>U+2211 N-ARY SUMMATION: try adding math</li>
<li>U+221A SQUARE ROOT: try adding math</li>
<li>U+221E INFINITY: try adding math</li>
<li>U+222B INTEGRAL: try adding math</li>
<li>U+2248 ALMOST EQUAL TO: try adding math</li>
<li>U+2260 NOT EQUAL TO: try adding math</li>
<li>U+2264 LESS-THAN OR EQUAL TO: try adding math</li>
<li>U+2265 GREATER-THAN OR EQUAL TO: try adding math</li>
<li>U+25A0 BLACK SQUARE: try adding symbols</li>
<li>U+25A1 WHITE SQUARE: try adding symbols</li>
<li>U+25AA BLACK SMALL SQUARE: try adding symbols</li>
<li>U+25AB WHITE SMALL SQUARE: try adding symbols</li>
<li>U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols</li>
<li>U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding symbols</li>
<li>U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math</li>
<li>U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols</li>
<li>U+25C6 BLACK DIAMOND: try adding symbols</li>
<li>U+25C7 WHITE DIAMOND: try adding symbols</li>
<li>U+25CA LOZENGE: try adding one of: symbols, math</li>
<li>U+25CB WHITE CIRCLE: try adding symbols</li>
<li>U+25CC DOTTED CIRCLE: try adding one of: gunjala-gondi, miao, wancho, bengali, tai-viet, pahawh-hmong, mahajani, batak, kaithi, masaram-gondi, dogra, armenian, devanagari, elbasan, math, nko, malayalam, tai-tham, manichaean, hanunoo, hebrew, osage, chakma, tagbanwa, buginese, new-tai-lue, limbu, balinese, mongolian, saurashtra, mende-kikakui, caucasian-albanian, siddham, khmer, myanmar, thaana, sinhala, tifinagh, rejang, lepcha, music, tai-le, khojki, adlam, hanifi-rohingya, marchen, telugu, warang-citi, psalter-pahlavi, kannada, lao, bassa-vah, gujarati, sundanese, oriya, tibetan, bhaiksuki, ahom, syriac, takri, modi, duployan, thai, khudawadi, sogdian, canadian-aboriginal, gurmukhi, symbols, soyombo, javanese, yi, tirhuta, phags-pa, sharada, syloti-nagri, brahmi, newa, tagalog, mandaic, coptic, grantha, meetei-mayek, kharoshthi, old-permic, kayah-li, tamil, zanabazar-square, buhid, cham</li>
<li>U+25CF BLACK CIRCLE: try adding symbols</li>
<li>U+25E6 WHITE BULLET: try adding symbols</li>
<li>U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math</li>
<li>U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math</li>
<li>U+AB53 LATIN SMALL LETTER CHI: not included in any glyphset definition</li>
<li>U+FB01 LATIN SMALL LIGATURE FI: not included in any glyphset definition</li>
<li>U+FB02 LATIN SMALL LIGATURE FL: not included in any glyphset definition</li>
</ul>
<p>Or you can add the above codepoints to one of the subsets supported by the font: <code>cyrillic-ext</code>, <code>latin</code>, <code>latin-ext</code>, <code>vietnamese</code></p>
 [code: unreachable-subsetting]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#soft-dotted">soft_dotted</a></summary>
    <div>







* ⚠️ **WARN** <p>The dot of soft dotted characters used in orthographies <em>must</em> disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌ ɨ̀ ɨ́ ɨ̂ ɨ̃ ɨ̄ ɨ̈ ɨ̋ ɨ̌ ɨ̏ ɨ̧̀ ɨ̧́ ɨ̧̂ ɨ̧̌ ɨ̱̀ ɨ̱́ ɨ̱̈ ị̀ ị́ ị̂ ị̃ ị̄</p>
<p>The dot of soft dotted characters <em>should</em> disappear in other cases, for example: ḭ̀ ḭ́ ḭ̂ ḭ̃ ḭ̄ ḭ̆ ḭ̇ ḭ̈ ḭ̉ ḭ̊ ḭ̋ ḭ̌ ḭ̍ ḭ̏ ḭ̐ ḭ̑ ḭ̒ ḭ̓ ḭ᷄ ḭ᷅</p>
 [code: soft-dotted]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do any segments have colinear vectors? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-colinear-vectors">outline_colinear_vectors</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have colinear vectors:</p>
<pre><code>* five.dnom: L&lt;&lt;86.0,162.0&gt;--&lt;59.0,179.0&gt;&gt; -&gt; L&lt;&lt;59.0,179.0&gt;--&lt;52.0,183.0&gt;&gt;

* five.numr: L&lt;&lt;86.0,514.0&gt;--&lt;59.0,531.0&gt;&gt; -&gt; L&lt;&lt;59.0,531.0&gt;--&lt;52.0,535.0&gt;&gt;

* fiveeighths (U+215D): L&lt;&lt;86.0,514.0&gt;--&lt;59.0,531.0&gt;&gt; -&gt; L&lt;&lt;59.0,531.0&gt;--&lt;52.0,535.0&gt;&gt;

* uni01B3 (U+01B3): L&lt;&lt;301.0,325.0&gt;--&lt;546.0,700.0&gt;&gt; -&gt; L&lt;&lt;546.0,700.0&gt;--&lt;580.0,751.0&gt;&gt;

* uni01B4 (U+01B4): L&lt;&lt;262.0,45.0&gt;--&lt;450.0,481.0&gt;&gt; -&gt; L&lt;&lt;450.0,481.0&gt;--&lt;474.0,537.0&gt;&gt;

* uni2075 (U+2075): L&lt;&lt;86.0,522.0&gt;--&lt;59.0,539.0&gt;&gt; -&gt; L&lt;&lt;59.0,539.0&gt;--&lt;52.0,543.0&gt;&gt;

* uni2085 (U+2085): L&lt;&lt;86.0,37.0&gt;--&lt;59.0,54.0&gt;&gt; -&gt; L&lt;&lt;59.0,54.0&gt;--&lt;52.0,58.0&gt;&gt;

* uni2C72 (U+2C72): L&lt;&lt;858.0,685.0&gt;--&lt;858.0,685.0&gt;&gt; -&gt; L&lt;&lt;858.0,685.0&gt;--&lt;858.0,685.0&gt;&gt;
</code></pre>
 [code: found-colinear-vectors]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any jaggy segments? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-jaggy-segments">outline_jaggy_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have jaggy segments:</p>
<pre><code>* uni0190 (U+0190): B&lt;&lt;132.0,339.5&gt;-&lt;175.0,366.0&gt;-&lt;232.0,372.0&gt;&gt;/B&lt;&lt;232.0,372.0&gt;-&lt;147.0,382.0&gt;-&lt;93.5,425.5&gt;&gt; = 12.718842765251416

* uni01B1 (U+01B1): B&lt;&lt;144.5,603.5&gt;-&lt;188.0,652.0&gt;-&lt;241.0,664.0&gt;&gt;/L&lt;&lt;241.0,664.0&gt;--&lt;88.0,664.0&gt;&gt; = 12.757532160876671

* uni01B1 (U+01B1): L&lt;&lt;708.0,664.0&gt;--&lt;555.0,664.0&gt;&gt;/B&lt;&lt;555.0,664.0&gt;-&lt;612.0,653.0&gt;-&lt;658.5,604.5&gt;&gt; = 10.922804719869259

* uni025B (U+025B): B&lt;&lt;74.5,213.5&gt;-&lt;109.0,250.0&gt;-&lt;164.0,256.0&gt;&gt;/B&lt;&lt;164.0,256.0&gt;-&lt;109.0,263.0&gt;-&lt;74.5,293.0&gt;&gt; = 13.479023677151083

* uni2126 (U+2126): B&lt;&lt;658.5,95.5&gt;-&lt;612.0,47.0&gt;-&lt;555.0,36.0&gt;&gt;/L&lt;&lt;555.0,36.0&gt;--&lt;708.0,36.0&gt;&gt; = 10.922804719869259

* uni2126 (U+2126): L&lt;&lt;88.0,36.0&gt;--&lt;241.0,36.0&gt;&gt;/B&lt;&lt;241.0,36.0&gt;-&lt;188.0,48.0&gt;-&lt;144.5,96.5&gt;&gt; = 12.757532160876671
</code></pre>
 [code: found-jaggy-segments]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Do outlines contain any semi-vertical or semi-horizontal lines? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-semi-vertical">outline_semi_vertical</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have semi-vertical/semi-horizontal lines:</p>
<pre><code>* Lcaron (U+013D): L&lt;&lt;395.0,522.0&gt;--&lt;394.0,700.0&gt;&gt;

* ae (U+00E6): L&lt;&lt;400.0,245.0&gt;--&lt;255.0,244.0&gt;&gt;

* dcaron (U+010F): L&lt;&lt;626.0,542.0&gt;--&lt;625.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;110.0,157.0&gt;--&lt;108.0,720.0&gt;&gt;

* exclam (U+0021): L&lt;&lt;148.0,720.0&gt;--&lt;146.0,157.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;108.0,-234.0&gt;--&lt;110.0,329.0&gt;&gt;

* exclamdown (U+00A1): L&lt;&lt;146.0,329.0&gt;--&lt;148.0,-234.0&gt;&gt;

* lcaron (U+013E): L&lt;&lt;160.0,542.0&gt;--&lt;159.0,720.0&gt;&gt;

* tcaron (U+0165): L&lt;&lt;329.0,542.0&gt;--&lt;328.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;110.0,35.0&gt;--&lt;108.0,720.0&gt;&gt;

* uni01C3 (U+01C3): L&lt;&lt;148.0,720.0&gt;--&lt;146.0,35.0&gt;&gt;

* uni01E3 (U+01E3): L&lt;&lt;400.0,245.0&gt;--&lt;255.0,244.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;51.0,587.0&gt;--&lt;52.0,771.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;523.0,771.0&gt;--&lt;522.0,597.0&gt;&gt;

* uni0222 (U+0222): L&lt;&lt;94.0,771.0&gt;--&lt;93.0,588.0&gt;&gt;

* uni0223 (U+0223): L&lt;&lt;44.0,533.0&gt;--&lt;45.0,701.0&gt;&gt;

* uni030C.alt: L&lt;&lt;51.0,542.0&gt;--&lt;50.0,720.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;50.0,176.0&gt;--&lt;53.0,617.0&gt;&gt;

* uni2196 (U+2196): L&lt;&lt;95.0,545.0&gt;--&lt;94.0,176.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;134.0,619.0&gt;--&lt;575.0,616.0&gt;&gt;

* uni2197 (U+2197): L&lt;&lt;503.0,574.0&gt;--&lt;134.0,575.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;533.0,164.0&gt;--&lt;534.0,534.0&gt;&gt;

* uni2198 (U+2198): L&lt;&lt;578.0,534.0&gt;--&lt;575.0,92.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;122.0,136.0&gt;--&lt;492.0,135.0&gt;&gt;

* uni2199 (U+2199): L&lt;&lt;492.0,91.0&gt;--&lt;50.0,94.0&gt;&gt;
</code></pre>
 [code: found-semi-vertical]



</div>
</details>

<details>
    <summary>⚠️ <b>WARN</b> Are any segments inordinately short? <a href="https://fontbakery.readthedocs.io/en/stable/fontbakery/checks/universal.html#outline-short-segments">outline_short_segments</a></summary>
    <div>







* ⚠️ **WARN** <p>The following glyphs have segments which seem very short:</p>
<pre><code>* uni018F (U+018F) contains a short segment B&lt;&lt;33.0,360.0&gt;-&lt;33.0,366.0&gt;-&lt;34.5,374.5&gt;&gt;

* uni018F (U+018F) contains a short segment B&lt;&lt;34.5,374.5&gt;-&lt;36.0,383.0&gt;-&lt;37.0,390.0&gt;&gt;

* G (U+0047) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;449.0,370.0&gt;--&lt;449.0,388.0&gt;&gt;

* G.ss01 contains a short segment L&lt;&lt;761.0,356.0&gt;--&lt;761.0,356.0&gt;&gt;

* uni01F4 (U+01F4) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* Gbreve (U+011E) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* Gcaron (U+01E6) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* Gcircumflex (U+011C) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* uni0122 (U+0122) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* Gdotaccent (U+0120) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* uni0193 (U+0193) contains a short segment L&lt;&lt;761.0,356.0&gt;--&lt;761.0,356.0&gt;&gt;

* uni1E20 (U+1E20) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* uni01E4 (U+01E4) contains a short segment L&lt;&lt;734.0,336.0&gt;--&lt;733.0,336.0&gt;&gt;

* uni0198 (U+0198) contains a short segment L&lt;&lt;493.0,662.0&gt;--&lt;472.0,662.0&gt;&gt;

* uni2C62 (U+2C62) contains a short segment B&lt;&lt;149.0,374.0&gt;-&lt;154.0,368.0&gt;-&lt;161.0,364.0&gt;&gt;

* uni1E9E (U+1E9E) contains a short segment L&lt;&lt;380.0,403.0&gt;--&lt;380.0,429.0&gt;&gt;

* uniA7A8 (U+A7A8) contains a short segment B&lt;&lt;297.0,346.0&gt;-&lt;291.0,347.0&gt;-&lt;283.0,349.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;282.0,0.0&gt;--&lt;279.0,0.0&gt;&gt;

* uni0162 (U+0162) contains a short segment L&lt;&lt;322.0,0.0&gt;--&lt;319.0,0.0&gt;&gt;

* uniA7B8 (U+A7B8) contains a short segment L&lt;&lt;641.0,683.0&gt;--&lt;641.0,700.0&gt;&gt;

* uniA7B8 (U+A7B8) contains a short segment L&lt;&lt;641.0,700.0&gt;--&lt;654.0,700.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;455.0,595.0&gt;--&lt;455.0,595.0&gt;&gt;

* uni01B2 (U+01B2) contains a short segment L&lt;&lt;500.0,586.0&gt;--&lt;499.0,585.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;858.0,685.0&gt;--&lt;858.0,685.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;858.0,685.0&gt;--&lt;858.0,685.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;858.0,685.0&gt;--&lt;863.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;863.0,700.0&gt;--&lt;863.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;910.0,700.0&gt;--&lt;911.0,700.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;692.0,0.0&gt;--&lt;656.0,0.0&gt;&gt;

* uni2C72 (U+2C72) contains a short segment L&lt;&lt;260.0,0.0&gt;--&lt;224.0,0.0&gt;&gt;

* uni01B3 (U+01B3) contains a short segment L&lt;&lt;596.0,700.0&gt;--&lt;596.0,700.0&gt;&gt;

* eth (U+00F0) contains a short segment L&lt;&lt;526.0,360.0&gt;--&lt;526.0,360.0&gt;&gt;

* k (U+006B) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uni1E31 (U+1E31) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uni01E9 (U+01E9) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uni0137 (U+0137) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uni1E33 (U+1E33) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uni0199 (U+0199) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uni1E35 (U+1E35) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uniA741 (U+A741) contains a short segment L&lt;&lt;124.0,270.0&gt;--&lt;111.0,270.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;501.0,471.0&gt;--&lt;501.0,480.0&gt;&gt;

* uniA7B9 (U+A7B9) contains a short segment L&lt;&lt;501.0,480.0&gt;--&lt;509.0,480.0&gt;&gt;

* uni01B4 (U+01B4) contains a short segment L&lt;&lt;489.0,463.0&gt;--&lt;489.0,463.0&gt;&gt;

* f_f_i.liga contains a short segment L&lt;&lt;503.0,682.0&gt;--&lt;481.0,682.0&gt;&gt;

* five.dnom contains a short segment L&lt;&lt;59.0,179.0&gt;--&lt;52.0,183.0&gt;&gt;

* five.numr contains a short segment L&lt;&lt;59.0,531.0&gt;--&lt;52.0,535.0&gt;&gt;

* fiveeighths (U+215D) contains a short segment L&lt;&lt;59.0,531.0&gt;--&lt;52.0,535.0&gt;&gt;

* uni2085 (U+2085) contains a short segment L&lt;&lt;59.0,54.0&gt;--&lt;52.0,58.0&gt;&gt;

* uni2075 (U+2075) contains a short segment L&lt;&lt;59.0,539.0&gt;--&lt;52.0,543.0&gt;&gt;

* braceleft (U+007B) contains a short segment L&lt;&lt;5.0,333.0&gt;--&lt;20.0,333.0&gt;&gt;

* braceright (U+007D) contains a short segment L&lt;&lt;449.0,287.0&gt;--&lt;434.0,287.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;265.0,394.0&gt;-&lt;274.0,392.0&gt;-&lt;283.5,390.0&gt;&gt;

* dollar (U+0024) contains a short segment B&lt;&lt;283.5,390.0&gt;-&lt;293.0,388.0&gt;-&lt;302.0,386.0&gt;&gt;

* uni20AD (U+20AD) contains a short segment L&lt;&lt;103.0,380.0&gt;--&lt;113.0,380.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;349.0,682.0&gt;-&lt;361.0,684.0&gt;-&lt;373.5,685.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;373.5,685.0&gt;-&lt;386.0,686.0&gt;-&lt;399.0,686.0&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;448.0,644.0&gt;-&lt;437.0,645.0&gt;-&lt;424.0,646.5&gt;&gt;

* uni20BE (U+20BE) contains a short segment B&lt;&lt;424.0,646.5&gt;-&lt;411.0,648.0&gt;-&lt;399.0,648.0&gt;&gt;

* at (U+0040) contains a short segment L&lt;&lt;651.0,480.0&gt;--&lt;685.0,480.0&gt;&gt;
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
| 18 | 0 | 37 | 218 | 1839 | 109 | 1738 | 0 | 
| 0% | 0% | 1% | 6% | 46% | 3% | 44% | 0% | 



**Note:** The following loglevels were omitted in this report:


* SKIP
* INFO
* PASS
* DEBUG
