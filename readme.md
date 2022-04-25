# Cyrillify
[_Cyrillify_](https://www.npmjs.com/package/cyrillify) obfuscates your text with Cyrillic homoglyphs. There are 15 uppercase and 7 lowercase identical homoglyphs shared between English and Cyrillic character sets. Each character in each pair has a distinct and unrelated ASCII code from its homoglyphic counterpart, yet an identical character manifestation across most regular font weights and types. Swapping out English characters with their Cyrillic equivalents has the benefit of obfuscating text, cloaking the content of pages from scrapers and bots while allowing humans to read content as normal.

<img src="https://user-images.githubusercontent.com/45696445/51097826-161bd700-1795-11e9-8df3-e5122f7f6777.gif">

_________________________
## API
### cyrillify(`string`)
```js
var cyrillify = require('cyrillify');
```
&nbsp;
_________________________
### -- Example 1 --
```js
console.log(cyrillify('U.N. Environment Envoy Quits After Audit of Expenses'));
```
> Output should look identical.
```
U.N. Environment Envoy Quits After Audit of Expenses
```
> -- But instead of being:
> "U.N. Environment Envoy Quits After Audit of Expenses"
>
> -- Punycode will be:
> "U.N.xn-- nvirnmnt nv quits ftr udit f nss-uh0ae0ngdmkac66ajat9grf9e"
_________________________
&nbsp;
&nbsp;
_________________________
### -- Example 2 --
```js
console.log(cyrillify('john@johndoe.com, jane@acmecorp.com, tom@tomthumbesq.com, jill@designlab.com, pat@knittingcircle.com'));
```
> Output should look identical.
```
john@johndoe.com, jane@acmecorp.com, tom@tomthumbesq.com, jill@designlab.com, pat@knittingcircle.com
```
> -- But instead of being:
> "john@johndoe.com, jane@acmecorp.com, tom@tomthumbesq.com, jill@designlab.com, pat@knittingcircle.com"
>
> -- Punycode will be:
> "xn--jhn@jhnd-j8g6fed.xn--m, jn@mrp-3yhc2dd9il9akc.xn--m, tm@tmthumbsq-hom9ied4c.xn--m, jill@dsignlb-7lm1e0h6b.xn--m, t@knittingirl-vdnzg7gtbqqc.xn--m-0tbi"
_________________________
&nbsp;
&nbsp;
_________________________
### -- Example 3 --
```js
console.log(cyrillify('Methanol was administered to rats, rhesus monkeys, and pigtail monkeys. Of these animals, only the pigtail monkey reliably developed a severe metabolic organic acidosis resembling that observed in humans.'));
```
> Output should look identical.
```
Methanol was administered to rats, rhesus monkeys, and pigtail monkeys. Of these animals, only the pigtail monkey reliably developed a severe metabolic organic acidosis resembling that observed in humans.
```
> -- But instead of being:
> "Methanol was administered to rats, rhesus monkeys, and pigtail monkeys. Of these animals, only the pigtail monkey reliably developed a severe metabolic organic acidosis resembling that observed in humans."
>
> -- Punycode will be:
> "xn--thnl ws dministrd t rts-nrsecn9isab9qrcua
xn-- rhsus mnks-qkjh7j8c
xn-- nd igtil mnks-vtlg5g0h3a6e.xn-- f ths nimls-39jd2eb0m
xn-- nl th igtil mnk rlibl dvld  svr mtbli rgni idsis rsmbling tht bsrvd in humns-ce4dkaihgdro76alachbbfbbcuboc72fparrdju8k1a3khc2nsai."
_________________________
&nbsp;
## Notes
[_Cyrillify_](https://www.npmjs.com/package/cyrillify) obfuscates your text with Cyrillic homoglyphs. There are 15 uppercase and 7 lowercase identical homoglyphs shared between English and Cyrillic character sets. Each character in each pair has a distinct and unrelated ASCII code from its homoglyphic counterpart, yet an identical character manifestation across most regular font weights and types.

[_Cyrillify's_](https://www.npmjs.com/package/cyrillify) output will appear identical to its input, however, the code used to represent it will be different. We can verify _Cyrillify's_ work in two ways:
##### &nbsp;&nbsp;&nbsp;&nbsp; Punycode Verification
>Punycode is a representation of Unicode with ASCII. It is the encoding system used in encoding internationalized domain names. We can verify [_Cyrillify's_](https://www.npmjs.com/package/cyrillify) work by using any of the widely available Punycode converters, checking the associated Punycode of the output to ensure that it differs from the input (see examples below).
##### &nbsp;&nbsp;&nbsp;&nbsp; RegEx Verification
>The quickest way to verify [_Cyrillify's_](https://www.npmjs.com/package/cyrillify) work via regex is to hit Ctrl+F on Windows, or Command+F on Mac, and search some of the _Cyrillified_ content to see if the computer can identify it.

Swapping English characters with their Cyrillic equivalents has the benefit of obfuscating text, cloaking the content of pages from scrapers and bots while allowing humans to read content as normal. This is particularly useful in shrouding email addresses from bots without compromising their visibility in the browser from humans.

In the event that you are posting and [_Cyrillifying_](https://www.npmjs.com/package/cyrillify) 'spun' articles, search engine web crawlers such as Googlebot, Bingbot, etc., will not identify the duplicate content, hence, will not penalize nor demote your SERP ranking. [_Cyrillify_](https://www.npmjs.com/package/cyrillify) can therefore be used as both a weapon and a shield. Behave yourself!

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install cyrillify
```

## License
(MIT)

Copyright (c) 2018 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
