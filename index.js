const Oe = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M9 8.01953V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
<path d="M15 8.01953V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
</svg>`, Fe = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2018C13.7614%2018%2016%2015.9853%2016%2013.5C16%2011.0147%2013.7614%209%2011%209C8.23858%209%206%2011.0147%206%2013.5C6%2015.9853%208.23858%2018%2011%2018Z'%20fill='%236141D7'/%3e%3cpath%20d='M33.9994%205.00063H26.6886L26.6953%2022.7875C26.5296%2025.91%2023.8094%2028.3454%2020.5034%2028.3454C17.1973%2028.3454%2014.4838%2025.9157%2014.3122%2022.8133V19.8745H7L7.00601%2022.7869C7.29393%2029.6353%2013.2226%2035%2020.5034%2035C27.7842%2035%2033.7028%2029.6428%2034%2022.8038C34%2022.8038%2034%205.0755%2034%205L33.9994%205.00063Z'%20fill='%230E122D'/%3e%3c/svg%3e";
function ie() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var M = ie();
function Te(n) {
  M = n;
}
var j = { exec: () => null };
function f(n, e = "") {
  let r = typeof n == "string" ? n : n.source, s = { replace: (t, a) => {
    let i = typeof a == "string" ? a : a.source;
    return i = i.replace(T.caret, "$1"), r = r.replace(t, i), s;
  }, getRegex: () => new RegExp(r, e) };
  return s;
}
var T = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (n) => new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (n) => new RegExp(`^ {0,${Math.min(3, n - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (n) => new RegExp(`^ {0,${Math.min(3, n - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (n) => new RegExp(`^ {0,${Math.min(3, n - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (n) => new RegExp(`^ {0,${Math.min(3, n - 1)}}#`), htmlBeginRegex: (n) => new RegExp(`^ {0,${Math.min(3, n - 1)}}<(?:[a-z].*>|!--)`, "i") }, Ge = /^(?:[ \t]*(?:\n|$))+/, Qe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ve = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, O = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, We = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ae = /(?:[*+-]|\d{1,9}[.)])/, Re = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Ce = f(Re).replace(/bull/g, ae).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ue = f(Re).replace(/bull/g, ae).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), le = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Xe = /^[^\n]+/, oe = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Je = f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", oe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ke = f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ae).getRegex(), Y = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ce = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ye = f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ce).replace("tag", Y).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ae = f(le).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Y).getRegex(), et = f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ae).getRegex(), he = { blockquote: et, code: Qe, def: Je, fences: Ve, heading: We, hr: O, html: Ye, lheading: Ce, list: Ke, newline: Ge, paragraph: Ae, table: j, text: Xe }, xe = f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Y).getRegex(), tt = { ...he, lheading: Ue, table: xe, paragraph: f(le).replace("hr", O).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", xe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Y).getRegex() }, nt = { ...he, html: f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ce).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: j, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: f(le).replace("hr", O).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ce).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, rt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, st = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ee = /^( {2,}|\\)\n(?!\s*$)/, it = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ee = /[\p{P}\p{S}]/u, ue = /[\s\p{P}\p{S}]/u, Le = /[^\s\p{P}\p{S}]/u, at = f(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ue).getRegex(), ze = /(?!~)[\p{P}\p{S}]/u, lt = /(?!~)[\s\p{P}\p{S}]/u, ot = /(?:[^\s\p{P}\p{S}]|~)/u, ct = f(/link|code|html/, "g").replace("link", new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code", new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html", /<(?! )[^<>]*?>/).getRegex(), Be = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, ht = f(Be, "u").replace(/punct/g, ee).getRegex(), ut = f(Be, "u").replace(/punct/g, ze).getRegex(), Pe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", pt = f(Pe, "gu").replace(/notPunctSpace/g, Le).replace(/punctSpace/g, ue).replace(/punct/g, ee).getRegex(), dt = f(Pe, "gu").replace(/notPunctSpace/g, ot).replace(/punctSpace/g, lt).replace(/punct/g, ze).getRegex(), gt = f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Le).replace(/punctSpace/g, ue).replace(/punct/g, ee).getRegex(), ft = f(/\\(punct)/, "gu").replace(/punct/g, ee).getRegex(), kt = f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), bt = f(ce).replace("(?:-->|$)", "-->").getRegex(), mt = f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", bt).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), X = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, xt = f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", X).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ie = f(/^!?\[(label)\]\[(ref)\]/).replace("label", X).replace("ref", oe).getRegex(), Me = f(/^!?\[(ref)\](?:\[\])?/).replace("ref", oe).getRegex(), wt = f("reflink|nolink(?!\\()", "g").replace("reflink", Ie).replace("nolink", Me).getRegex(), we = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, pe = { _backpedal: j, anyPunctuation: ft, autolink: kt, blockSkip: ct, br: Ee, code: st, del: j, emStrongLDelim: ht, emStrongRDelimAst: pt, emStrongRDelimUnd: gt, escape: rt, link: xt, nolink: Me, punctuation: at, reflink: Ie, reflinkSearch: wt, tag: mt, text: it, url: j }, yt = { ...pe, link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", X).getRegex(), reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", X).getRegex() }, ne = { ...pe, emStrongRDelimAst: dt, emStrongLDelim: ut, url: f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", we).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: f(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", we).getRegex() }, $t = { ...ne, br: f(Ee).replace("{2,}", "*").getRegex(), text: f(ne.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, U = { normal: he, gfm: tt, pedantic: nt }, Z = { normal: pe, gfm: ne, breaks: $t, pedantic: yt }, St = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ye = (n) => St[n];
function z(n, e) {
  if (e) {
    if (T.escapeTest.test(n)) return n.replace(T.escapeReplace, ye);
  } else if (T.escapeTestNoEncode.test(n)) return n.replace(T.escapeReplaceNoEncode, ye);
  return n;
}
function $e(n) {
  try {
    n = encodeURI(n).replace(T.percentDecode, "%");
  } catch {
    return null;
  }
  return n;
}
function Se(n, e) {
  let r = n.replace(T.findPipe, (a, i, l) => {
    let o = !1, c = i;
    for (; --c >= 0 && l[c] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), s = r.split(T.splitPipe), t = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s.at(-1)?.trim() && s.pop(), e) if (s.length > e) s.splice(e);
  else for (; s.length < e; ) s.push("");
  for (; t < s.length; t++) s[t] = s[t].trim().replace(T.slashPipe, "|");
  return s;
}
function N(n, e, r) {
  let s = n.length;
  if (s === 0) return "";
  let t = 0;
  for (; t < s && n.charAt(s - t - 1) === e; )
    t++;
  return n.slice(0, s - t);
}
function vt(n, e) {
  if (n.indexOf(e[1]) === -1) return -1;
  let r = 0;
  for (let s = 0; s < n.length; s++) if (n[s] === "\\") s++;
  else if (n[s] === e[0]) r++;
  else if (n[s] === e[1] && (r--, r < 0)) return s;
  return r > 0 ? -2 : -1;
}
function ve(n, e, r, s, t) {
  let a = e.href, i = e.title || null, l = n[1].replace(t.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  let o = { type: n[0].charAt(0) === "!" ? "image" : "link", raw: r, href: a, title: i, text: l, tokens: s.inlineTokens(l) };
  return s.state.inLink = !1, o;
}
function Tt(n, e, r) {
  let s = n.match(r.other.indentCodeCompensation);
  if (s === null) return e;
  let t = s[1];
  return e.split(`
`).map((a) => {
    let i = a.match(r.other.beginningSpace);
    if (i === null) return a;
    let [l] = i;
    return l.length >= t.length ? a.slice(t.length) : a;
  }).join(`
`);
}
var J = class {
  options;
  rules;
  lexer;
  constructor(n) {
    this.options = n || M;
  }
  space(n) {
    let e = this.rules.block.newline.exec(n);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(n) {
    let e = this.rules.block.code.exec(n);
    if (e) {
      let r = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : N(r, `
`) };
    }
  }
  fences(n) {
    let e = this.rules.block.fences.exec(n);
    if (e) {
      let r = e[0], s = Tt(r, e[3] || "", this.rules);
      return { type: "code", raw: r, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: s };
    }
  }
  heading(n) {
    let e = this.rules.block.heading.exec(n);
    if (e) {
      let r = e[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        let s = N(r, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (r = s.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(n) {
    let e = this.rules.block.hr.exec(n);
    if (e) return { type: "hr", raw: N(e[0], `
`) };
  }
  blockquote(n) {
    let e = this.rules.block.blockquote.exec(n);
    if (e) {
      let r = N(e[0], `
`).split(`
`), s = "", t = "", a = [];
      for (; r.length > 0; ) {
        let i = !1, l = [], o;
        for (o = 0; o < r.length; o++) if (this.rules.other.blockquoteStart.test(r[o])) l.push(r[o]), i = !0;
        else if (!i) l.push(r[o]);
        else break;
        r = r.slice(o);
        let c = l.join(`
`), d = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${c}` : c, t = t ? `${t}
${d}` : d;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = g, r.length === 0) break;
        let k = a.at(-1);
        if (k?.type === "code") break;
        if (k?.type === "blockquote") {
          let w = k, x = w.raw + `
` + r.join(`
`), R = this.blockquote(x);
          a[a.length - 1] = R, s = s.substring(0, s.length - w.raw.length) + R.raw, t = t.substring(0, t.length - w.text.length) + R.text;
          break;
        } else if (k?.type === "list") {
          let w = k, x = w.raw + `
` + r.join(`
`), R = this.list(x);
          a[a.length - 1] = R, s = s.substring(0, s.length - k.raw.length) + R.raw, t = t.substring(0, t.length - w.raw.length) + R.raw, r = x.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: a, text: t };
    }
  }
  list(n) {
    let e = this.rules.block.list.exec(n);
    if (e) {
      let r = e[1].trim(), s = r.length > 1, t = { type: "list", raw: "", ordered: s, start: s ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
      let a = this.rules.other.listItemRegex(r), i = !1;
      for (; n; ) {
        let o = !1, c = "", d = "";
        if (!(e = a.exec(n)) || this.rules.block.hr.test(n)) break;
        c = e[0], n = n.substring(c.length);
        let g = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (q) => " ".repeat(3 * q.length)), k = n.split(`
`, 1)[0], w = !g.trim(), x = 0;
        if (this.options.pedantic ? (x = 2, d = g.trimStart()) : w ? x = e[1].length + 1 : (x = e[2].search(this.rules.other.nonSpaceChar), x = x > 4 ? 1 : x, d = g.slice(x), x += e[1].length), w && this.rules.other.blankLine.test(k) && (c += k + `
`, n = n.substring(k.length + 1), o = !0), !o) {
          let q = this.rules.other.nextBulletRegex(x), H = this.rules.other.hrRegex(x), v = this.rules.other.fencesBeginRegex(x), te = this.rules.other.headingBeginRegex(x), p = this.rules.other.htmlBeginRegex(x);
          for (; n; ) {
            let m = n.split(`
`, 1)[0], B;
            if (k = m, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), B = k) : B = k.replace(this.rules.other.tabCharGlobal, "    "), v.test(k) || te.test(k) || p.test(k) || q.test(k) || H.test(k)) break;
            if (B.search(this.rules.other.nonSpaceChar) >= x || !k.trim()) d += `
` + B.slice(x);
            else {
              if (w || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(g) || te.test(g) || H.test(g)) break;
              d += `
` + k;
            }
            !w && !k.trim() && (w = !0), c += m + `
`, n = n.substring(m.length + 1), g = B.slice(x);
          }
        }
        t.loose || (i ? t.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (i = !0));
        let R = null, F;
        this.options.gfm && (R = this.rules.other.listIsTask.exec(d), R && (F = R[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), t.items.push({ type: "list_item", raw: c, task: !!R, checked: F, loose: !1, text: d, tokens: [] }), t.raw += c;
      }
      let l = t.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      t.raw = t.raw.trimEnd();
      for (let o = 0; o < t.items.length; o++) if (this.lexer.state.top = !1, t.items[o].tokens = this.lexer.blockTokens(t.items[o].text, []), !t.loose) {
        let c = t.items[o].tokens.filter((g) => g.type === "space"), d = c.length > 0 && c.some((g) => this.rules.other.anyLine.test(g.raw));
        t.loose = d;
      }
      if (t.loose) for (let o = 0; o < t.items.length; o++) t.items[o].loose = !0;
      return t;
    }
  }
  html(n) {
    let e = this.rules.block.html.exec(n);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(n) {
    let e = this.rules.block.def.exec(n);
    if (e) {
      let r = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", t = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: r, raw: e[0], href: s, title: t };
    }
  }
  table(n) {
    let e = this.rules.block.table.exec(n);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let r = Se(e[1]), s = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), t = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (r.length === s.length) {
      for (let i of s) this.rules.other.tableAlignRight.test(i) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? a.align.push("left") : a.align.push(null);
      for (let i = 0; i < r.length; i++) a.header.push({ text: r[i], tokens: this.lexer.inline(r[i]), header: !0, align: a.align[i] });
      for (let i of t) a.rows.push(Se(i, a.header.length).map((l, o) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[o] })));
      return a;
    }
  }
  lheading(n) {
    let e = this.rules.block.lheading.exec(n);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(n) {
    let e = this.rules.block.paragraph.exec(n);
    if (e) {
      let r = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(n) {
    let e = this.rules.block.text.exec(n);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(n) {
    let e = this.rules.inline.escape.exec(n);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(n) {
    let e = this.rules.inline.tag.exec(n);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(n) {
    let e = this.rules.inline.link.exec(n);
    if (e) {
      let r = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
        if (!this.rules.other.endAngleBracket.test(r)) return;
        let a = N(r.slice(0, -1), "\\");
        if ((r.length - a.length) % 2 === 0) return;
      } else {
        let a = vt(e[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let i = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + a;
          e[2] = e[2].substring(0, a), e[0] = e[0].substring(0, i).trim(), e[3] = "";
        }
      }
      let s = e[2], t = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(s);
        a && (s = a[1], t = a[3]);
      } else t = e[3] ? e[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? s = s.slice(1) : s = s.slice(1, -1)), ve(e, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: t && t.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(n, e) {
    let r;
    if ((r = this.rules.inline.reflink.exec(n)) || (r = this.rules.inline.nolink.exec(n))) {
      let s = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), t = e[s.toLowerCase()];
      if (!t) {
        let a = r[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return ve(r, t, r[0], this.lexer, this.rules);
    }
  }
  emStrong(n, e, r = "") {
    let s = this.rules.inline.emStrongLDelim.exec(n);
    if (!(!s || s[3] && r.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      let t = [...s[0]].length - 1, a, i, l = t, o = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * n.length + t); (s = c.exec(e)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (i = [...a].length, s[3] || s[4]) {
          l += i;
          continue;
        } else if ((s[5] || s[6]) && t % 3 && !((t + i) % 3)) {
          o += i;
          continue;
        }
        if (l -= i, l > 0) continue;
        i = Math.min(i, i + l + o);
        let d = [...s[0]][0].length, g = n.slice(0, t + s.index + d + i);
        if (Math.min(t, i) % 2) {
          let w = g.slice(1, -1);
          return { type: "em", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
        }
        let k = g.slice(2, -2);
        return { type: "strong", raw: g, text: k, tokens: this.lexer.inlineTokens(k) };
      }
    }
  }
  codespan(n) {
    let e = this.rules.inline.code.exec(n);
    if (e) {
      let r = e[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(r), t = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
      return s && t && (r = r.substring(1, r.length - 1)), { type: "codespan", raw: e[0], text: r };
    }
  }
  br(n) {
    let e = this.rules.inline.br.exec(n);
    if (e) return { type: "br", raw: e[0] };
  }
  del(n) {
    let e = this.rules.inline.del.exec(n);
    if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(n) {
    let e = this.rules.inline.autolink.exec(n);
    if (e) {
      let r, s;
      return e[2] === "@" ? (r = e[1], s = "mailto:" + r) : (r = e[1], s = r), { type: "link", raw: e[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  url(n) {
    let e;
    if (e = this.rules.inline.url.exec(n)) {
      let r, s;
      if (e[2] === "@") r = e[0], s = "mailto:" + r;
      else {
        let t;
        do
          t = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (t !== e[0]);
        r = e[0], e[1] === "www." ? s = "http://" + e[0] : s = e[0];
      }
      return { type: "link", raw: e[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  inlineText(n) {
    let e = this.rules.inline.text.exec(n);
    if (e) {
      let r = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: r };
    }
  }
}, A = class re {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || M, this.options.tokenizer = this.options.tokenizer || new J(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: T, block: U.normal, inline: Z.normal };
    this.options.pedantic ? (r.block = U.pedantic, r.inline = Z.pedantic) : this.options.gfm && (r.block = U.gfm, this.options.breaks ? r.inline = Z.breaks : r.inline = Z.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: U, inline: Z };
  }
  static lex(e, r) {
    return new re(r).lex(e);
  }
  static lexInline(e, r) {
    return new re(r).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let s = this.inlineQueue[r];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, r = [], s = !1) {
    for (this.options.pedantic && (e = e.replace(T.tabCharGlobal, "    ").replace(T.spaceLine, "")); e; ) {
      let t;
      if (this.options.extensions?.block?.some((i) => (t = i.call({ lexer: this }, e, r)) ? (e = e.substring(t.raw.length), r.push(t), !0) : !1)) continue;
      if (t = this.tokenizer.space(e)) {
        e = e.substring(t.raw.length);
        let i = r.at(-1);
        t.raw.length === 1 && i !== void 0 ? i.raw += `
` : r.push(t);
        continue;
      }
      if (t = this.tokenizer.code(e)) {
        e = e.substring(t.raw.length);
        let i = r.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.text, this.inlineQueue.at(-1).src = i.text) : r.push(t);
        continue;
      }
      if (t = this.tokenizer.fences(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.heading(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.hr(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.blockquote(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.list(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.html(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.def(e)) {
        e = e.substring(t.raw.length);
        let i = r.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.raw, this.inlineQueue.at(-1).src = i.text) : this.tokens.links[t.tag] || (this.tokens.links[t.tag] = { href: t.href, title: t.title }, r.push(t));
        continue;
      }
      if (t = this.tokenizer.table(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      if (t = this.tokenizer.lheading(e)) {
        e = e.substring(t.raw.length), r.push(t);
        continue;
      }
      let a = e;
      if (this.options.extensions?.startBlock) {
        let i = 1 / 0, l = e.slice(1), o;
        this.options.extensions.startBlock.forEach((c) => {
          o = c.call({ lexer: this }, l), typeof o == "number" && o >= 0 && (i = Math.min(i, o));
        }), i < 1 / 0 && i >= 0 && (a = e.substring(0, i + 1));
      }
      if (this.state.top && (t = this.tokenizer.paragraph(a))) {
        let i = r.at(-1);
        s && i?.type === "paragraph" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : r.push(t), s = a.length !== e.length, e = e.substring(t.raw.length);
        continue;
      }
      if (t = this.tokenizer.text(e)) {
        e = e.substring(t.raw.length);
        let i = r.at(-1);
        i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + t.raw, i.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : r.push(t);
        continue;
      }
      if (e) {
        let i = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(i);
          break;
        } else throw new Error(i);
      }
    }
    return this.state.top = !0, r;
  }
  inline(e, r = []) {
    return this.inlineQueue.push({ src: e, tokens: r }), r;
  }
  inlineTokens(e, r = []) {
    let s = e, t = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (t = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; ) l.includes(t[0].slice(t[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, t.index) + "[" + "a".repeat(t[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (t = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; ) s = s.slice(0, t.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (t = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; ) s = s.slice(0, t.index) + "[" + "a".repeat(t[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    s = this.options.hooks?.emStrongMask?.call({ lexer: this }, s) ?? s;
    let a = !1, i = "";
    for (; e; ) {
      a || (i = ""), a = !1;
      let l;
      if (this.options.extensions?.inline?.some((c) => (l = c.call({ lexer: this }, e, r)) ? (e = e.substring(l.raw.length), r.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.link(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(l.raw.length);
        let c = r.at(-1);
        l.type === "text" && c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : r.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(e, s, i)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.br(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.del(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(e)) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(e))) {
        e = e.substring(l.raw.length), r.push(l);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startInline) {
        let c = 1 / 0, d = e.slice(1), g;
        this.options.extensions.startInline.forEach((k) => {
          g = k.call({ lexer: this }, d), typeof g == "number" && g >= 0 && (c = Math.min(c, g));
        }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
      }
      if (l = this.tokenizer.inlineText(o)) {
        e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (i = l.raw.slice(-1)), a = !0;
        let c = r.at(-1);
        c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : r.push(l);
        continue;
      }
      if (e) {
        let c = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else throw new Error(c);
      }
    }
    return r;
  }
}, K = class {
  options;
  parser;
  constructor(n) {
    this.options = n || M;
  }
  space(n) {
    return "";
  }
  code({ text: n, lang: e, escaped: r }) {
    let s = (e || "").match(T.notSpaceStart)?.[0], t = n.replace(T.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + z(s) + '">' + (r ? t : z(t, !0)) + `</code></pre>
` : "<pre><code>" + (r ? t : z(t, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: n }) {
    return `<blockquote>
${this.parser.parse(n)}</blockquote>
`;
  }
  html({ text: n }) {
    return n;
  }
  def(n) {
    return "";
  }
  heading({ tokens: n, depth: e }) {
    return `<h${e}>${this.parser.parseInline(n)}</h${e}>
`;
  }
  hr(n) {
    return `<hr>
`;
  }
  list(n) {
    let e = n.ordered, r = n.start, s = "";
    for (let i = 0; i < n.items.length; i++) {
      let l = n.items[i];
      s += this.listitem(l);
    }
    let t = e ? "ol" : "ul", a = e && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + t + a + `>
` + s + "</" + t + `>
`;
  }
  listitem(n) {
    let e = "";
    if (n.task) {
      let r = this.checkbox({ checked: !!n.checked });
      n.loose ? n.tokens[0]?.type === "paragraph" ? (n.tokens[0].text = r + " " + n.tokens[0].text, n.tokens[0].tokens && n.tokens[0].tokens.length > 0 && n.tokens[0].tokens[0].type === "text" && (n.tokens[0].tokens[0].text = r + " " + z(n.tokens[0].tokens[0].text), n.tokens[0].tokens[0].escaped = !0)) : n.tokens.unshift({ type: "text", raw: r + " ", text: r + " ", escaped: !0 }) : e += r + " ";
    }
    return e += this.parser.parse(n.tokens, !!n.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: n }) {
    return "<input " + (n ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: n }) {
    return `<p>${this.parser.parseInline(n)}</p>
`;
  }
  table(n) {
    let e = "", r = "";
    for (let t = 0; t < n.header.length; t++) r += this.tablecell(n.header[t]);
    e += this.tablerow({ text: r });
    let s = "";
    for (let t = 0; t < n.rows.length; t++) {
      let a = n.rows[t];
      r = "";
      for (let i = 0; i < a.length; i++) r += this.tablecell(a[i]);
      s += this.tablerow({ text: r });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: n }) {
    return `<tr>
${n}</tr>
`;
  }
  tablecell(n) {
    let e = this.parser.parseInline(n.tokens), r = n.header ? "th" : "td";
    return (n.align ? `<${r} align="${n.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  strong({ tokens: n }) {
    return `<strong>${this.parser.parseInline(n)}</strong>`;
  }
  em({ tokens: n }) {
    return `<em>${this.parser.parseInline(n)}</em>`;
  }
  codespan({ text: n }) {
    return `<code>${z(n, !0)}</code>`;
  }
  br(n) {
    return "<br>";
  }
  del({ tokens: n }) {
    return `<del>${this.parser.parseInline(n)}</del>`;
  }
  link({ href: n, title: e, tokens: r }) {
    let s = this.parser.parseInline(r), t = $e(n);
    if (t === null) return s;
    n = t;
    let a = '<a href="' + n + '"';
    return e && (a += ' title="' + z(e) + '"'), a += ">" + s + "</a>", a;
  }
  image({ href: n, title: e, text: r, tokens: s }) {
    s && (r = this.parser.parseInline(s, this.parser.textRenderer));
    let t = $e(n);
    if (t === null) return z(r);
    n = t;
    let a = `<img src="${n}" alt="${r}"`;
    return e && (a += ` title="${z(e)}"`), a += ">", a;
  }
  text(n) {
    return "tokens" in n && n.tokens ? this.parser.parseInline(n.tokens) : "escaped" in n && n.escaped ? n.text : z(n.text);
  }
}, de = class {
  strong({ text: n }) {
    return n;
  }
  em({ text: n }) {
    return n;
  }
  codespan({ text: n }) {
    return n;
  }
  del({ text: n }) {
    return n;
  }
  html({ text: n }) {
    return n;
  }
  text({ text: n }) {
    return n;
  }
  link({ text: n }) {
    return "" + n;
  }
  image({ text: n }) {
    return "" + n;
  }
  br() {
    return "";
  }
}, E = class se {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || M, this.options.renderer = this.options.renderer || new K(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new de();
  }
  static parse(e, r) {
    return new se(r).parse(e);
  }
  static parseInline(e, r) {
    return new se(r).parseInline(e);
  }
  parse(e, r = !0) {
    let s = "";
    for (let t = 0; t < e.length; t++) {
      let a = e[t];
      if (this.options.extensions?.renderers?.[a.type]) {
        let l = a, o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(l.type)) {
          s += o || "";
          continue;
        }
      }
      let i = a;
      switch (i.type) {
        case "space": {
          s += this.renderer.space(i);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(i);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(i);
          continue;
        }
        case "code": {
          s += this.renderer.code(i);
          continue;
        }
        case "table": {
          s += this.renderer.table(i);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(i);
          continue;
        }
        case "list": {
          s += this.renderer.list(i);
          continue;
        }
        case "html": {
          s += this.renderer.html(i);
          continue;
        }
        case "def": {
          s += this.renderer.def(i);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(i);
          continue;
        }
        case "text": {
          let l = i, o = this.renderer.text(l);
          for (; t + 1 < e.length && e[t + 1].type === "text"; ) l = e[++t], o += `
` + this.renderer.text(l);
          r ? s += this.renderer.paragraph({ type: "paragraph", raw: o, text: o, tokens: [{ type: "text", raw: o, text: o, escaped: !0 }] }) : s += o;
          continue;
        }
        default: {
          let l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
  parseInline(e, r = this.renderer) {
    let s = "";
    for (let t = 0; t < e.length; t++) {
      let a = e[t];
      if (this.options.extensions?.renderers?.[a.type]) {
        let l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          s += l || "";
          continue;
        }
      }
      let i = a;
      switch (i.type) {
        case "escape": {
          s += r.text(i);
          break;
        }
        case "html": {
          s += r.html(i);
          break;
        }
        case "link": {
          s += r.link(i);
          break;
        }
        case "image": {
          s += r.image(i);
          break;
        }
        case "strong": {
          s += r.strong(i);
          break;
        }
        case "em": {
          s += r.em(i);
          break;
        }
        case "codespan": {
          s += r.codespan(i);
          break;
        }
        case "br": {
          s += r.br(i);
          break;
        }
        case "del": {
          s += r.del(i);
          break;
        }
        case "text": {
          s += r.text(i);
          break;
        }
        default: {
          let l = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return s;
  }
}, D = class {
  options;
  block;
  constructor(n) {
    this.options = n || M;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(n) {
    return n;
  }
  postprocess(n) {
    return n;
  }
  processAllTokens(n) {
    return n;
  }
  emStrongMask(n) {
    return n;
  }
  provideLexer() {
    return this.block ? A.lex : A.lexInline;
  }
  provideParser() {
    return this.block ? E.parse : E.parseInline;
  }
}, Rt = class {
  defaults = ie();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = E;
  Renderer = K;
  TextRenderer = de;
  Lexer = A;
  Tokenizer = J;
  Hooks = D;
  constructor(...n) {
    this.use(...n);
  }
  walkTokens(n, e) {
    let r = [];
    for (let s of n) switch (r = r.concat(e.call(this, s)), s.type) {
      case "table": {
        let t = s;
        for (let a of t.header) r = r.concat(this.walkTokens(a.tokens, e));
        for (let a of t.rows) for (let i of a) r = r.concat(this.walkTokens(i.tokens, e));
        break;
      }
      case "list": {
        let t = s;
        r = r.concat(this.walkTokens(t.items, e));
        break;
      }
      default: {
        let t = s;
        this.defaults.extensions?.childTokens?.[t.type] ? this.defaults.extensions.childTokens[t.type].forEach((a) => {
          let i = t[a].flat(1 / 0);
          r = r.concat(this.walkTokens(i, e));
        }) : t.tokens && (r = r.concat(this.walkTokens(t.tokens, e)));
      }
    }
    return r;
  }
  use(...n) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return n.forEach((r) => {
      let s = { ...r };
      if (s.async = this.defaults.async || s.async || !1, r.extensions && (r.extensions.forEach((t) => {
        if (!t.name) throw new Error("extension name required");
        if ("renderer" in t) {
          let a = e.renderers[t.name];
          a ? e.renderers[t.name] = function(...i) {
            let l = t.renderer.apply(this, i);
            return l === !1 && (l = a.apply(this, i)), l;
          } : e.renderers[t.name] = t.renderer;
        }
        if ("tokenizer" in t) {
          if (!t.level || t.level !== "block" && t.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = e[t.level];
          a ? a.unshift(t.tokenizer) : e[t.level] = [t.tokenizer], t.start && (t.level === "block" ? e.startBlock ? e.startBlock.push(t.start) : e.startBlock = [t.start] : t.level === "inline" && (e.startInline ? e.startInline.push(t.start) : e.startInline = [t.start]));
        }
        "childTokens" in t && t.childTokens && (e.childTokens[t.name] = t.childTokens);
      }), s.extensions = e), r.renderer) {
        let t = this.defaults.renderer || new K(this.defaults);
        for (let a in r.renderer) {
          if (!(a in t)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let i = a, l = r.renderer[i], o = t[i];
          t[i] = (...c) => {
            let d = l.apply(t, c);
            return d === !1 && (d = o.apply(t, c)), d || "";
          };
        }
        s.renderer = t;
      }
      if (r.tokenizer) {
        let t = this.defaults.tokenizer || new J(this.defaults);
        for (let a in r.tokenizer) {
          if (!(a in t)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let i = a, l = r.tokenizer[i], o = t[i];
          t[i] = (...c) => {
            let d = l.apply(t, c);
            return d === !1 && (d = o.apply(t, c)), d;
          };
        }
        s.tokenizer = t;
      }
      if (r.hooks) {
        let t = this.defaults.hooks || new D();
        for (let a in r.hooks) {
          if (!(a in t)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let i = a, l = r.hooks[i], o = t[i];
          D.passThroughHooks.has(a) ? t[i] = (c) => {
            if (this.defaults.async && D.passThroughHooksRespectAsync.has(a)) return (async () => {
              let g = await l.call(t, c);
              return o.call(t, g);
            })();
            let d = l.call(t, c);
            return o.call(t, d);
          } : t[i] = (...c) => {
            if (this.defaults.async) return (async () => {
              let g = await l.apply(t, c);
              return g === !1 && (g = await o.apply(t, c)), g;
            })();
            let d = l.apply(t, c);
            return d === !1 && (d = o.apply(t, c)), d;
          };
        }
        s.hooks = t;
      }
      if (r.walkTokens) {
        let t = this.defaults.walkTokens, a = r.walkTokens;
        s.walkTokens = function(i) {
          let l = [];
          return l.push(a.call(this, i)), t && (l = l.concat(t.call(this, i))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(n) {
    return this.defaults = { ...this.defaults, ...n }, this;
  }
  lexer(n, e) {
    return A.lex(n, e ?? this.defaults);
  }
  parser(n, e) {
    return E.parse(n, e ?? this.defaults);
  }
  parseMarkdown(n) {
    return (e, r) => {
      let s = { ...r }, t = { ...this.defaults, ...s }, a = this.onError(!!t.silent, !!t.async);
      if (this.defaults.async === !0 && s.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (t.hooks && (t.hooks.options = t, t.hooks.block = n), t.async) return (async () => {
        let i = t.hooks ? await t.hooks.preprocess(e) : e, l = await (t.hooks ? await t.hooks.provideLexer() : n ? A.lex : A.lexInline)(i, t), o = t.hooks ? await t.hooks.processAllTokens(l) : l;
        t.walkTokens && await Promise.all(this.walkTokens(o, t.walkTokens));
        let c = await (t.hooks ? await t.hooks.provideParser() : n ? E.parse : E.parseInline)(o, t);
        return t.hooks ? await t.hooks.postprocess(c) : c;
      })().catch(a);
      try {
        t.hooks && (e = t.hooks.preprocess(e));
        let i = (t.hooks ? t.hooks.provideLexer() : n ? A.lex : A.lexInline)(e, t);
        t.hooks && (i = t.hooks.processAllTokens(i)), t.walkTokens && this.walkTokens(i, t.walkTokens);
        let l = (t.hooks ? t.hooks.provideParser() : n ? E.parse : E.parseInline)(i, t);
        return t.hooks && (l = t.hooks.postprocess(l)), l;
      } catch (i) {
        return a(i);
      }
    };
  }
  onError(n, e) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
        let s = "<p>An error occurred:</p><pre>" + z(r.message + "", !0) + "</pre>";
        return e ? Promise.resolve(s) : s;
      }
      if (e) return Promise.reject(r);
      throw r;
    };
  }
}, I = new Rt();
function b(n, e) {
  return I.parse(n, e);
}
b.options = b.setOptions = function(n) {
  return I.setOptions(n), b.defaults = I.defaults, Te(b.defaults), b;
};
b.getDefaults = ie;
b.defaults = M;
b.use = function(...n) {
  return I.use(...n), b.defaults = I.defaults, Te(b.defaults), b;
};
b.walkTokens = function(n, e) {
  return I.walkTokens(n, e);
};
b.parseInline = I.parseInline;
b.Parser = E;
b.parser = E.parse;
b.Renderer = K;
b.TextRenderer = de;
b.Lexer = A;
b.lexer = A.lex;
b.Tokenizer = J;
b.Hooks = D;
b.parse = b;
b.options;
b.setOptions;
b.use;
b.walkTokens;
b.parseInline;
E.parse;
A.lex;
function Ct({
  parentElement: n = "body",
  webhookUrl: e,
  logo: r = Fe,
  theme: s = "light",
  typingIndicator: t = !0,
  mode: a = "embedded",
  // 'embedded', 'floating'
  floatingButtonIcon: i = Oe,
  floatingButtonPosition: l = "bottom-right",
  requestTimeout: o = 12e4,
  onError: c = null,
  onMessageSent: d = null,
  onMessageReceived: g = null,
  onOpen: k = null,
  onClose: w = null,
  onAgentRequested: x = null,
  enableHumanAgent: R = !0,
  enableEmailFallback: F = !0,
  texts: q = {}
}) {
  const H = document.querySelector(n);
  if (!H)
    return console.error(`No se encontró el contenedor con id "${n}"`), null;
  const v = document.createElement("div");
  v.id = "chatbot-container";
  const p = { ...{
    // UI Principal
    title: "Chatbot",
    subtitle: "Tu asistente virtual",
    initialMessage: "",
    placeholder: "Escribe un mensaje...",
    footerText: "",
    // Agente Humano
    humanAgentButton: "Hablar con un humano",
    humanAgentMessage: "Hablar con humano",
    waitingForAgent: "Esperando respuesta del humano...",
    waitingPlaceholder: "Esperando respuesta del agente...",
    // Errores y Timeout
    timeoutMessage: "La solicitud tardó demasiado.",
    timeoutPlaceholder: "Por favor deja tu correo para que podamos contactar contigo.",
    connectionError: "No se pudo conectar con el servidor. Contacta con un administrador.",
    noResponse: "Sin respuesta",
    // Email Fallback
    emailPromptMessage: "Por favor deja tu correo y nos pondremos en contacto contigo lo antes posible",
    usernamePlaceholder: "Nombre",
    emailPlaceholder: "tu@email.com",
    phonePlaceholder: "Número de teléfono",
    emailSubmitButton: "Enviar",
    emailInvalidError: "Por favor ingresa un correo válido.",
    emailSendError: "No se pudo enviar tu correo. Intenta más tarde.",
    emailSuccessMessage: "Gracias, nos pondremos en contacto a {email}",
    // Automatic contact human
    automaticHumanContactMessage: "¡Vaya! Lo siento, parece que no estamos consiguiendo ayudarte. ¿Te gustaría contactar con nosotros?",
    humanContactYesButton: "Sí",
    humanContactNoButton: "No",
    humanContactEmailButton: "Contactar por mail y teléfono",
    // Accessibility & Validation
    closeChatAriaLabel: "Cerrar chat",
    closeChatTitle: "Cerrar",
    inputAriaLabel: "Escribe tu mensaje",
    sendAriaLabel: "Enviar mensaje",
    openChatAriaLabel: "Abrir chat",
    nameInvalidError: "Ingresa un nombre válido.",
    phoneInvalidError: "Ingresa un teléfono válido."
  }, ...q }, m = {
    sessionId: crypto.randomUUID(),
    messageHistory: [],
    isTyping: !1,
    isOpen: a === "embedded",
    chatResponseMode: "bot",
    originalPlaceholder: p.placeholder,
    enableHumanAgent: R,
    enableEmailFallback: F
  };
  v.setAttribute("data-theme", s), v.setAttribute("data-mode", a);
  const B = `
    <div id="chatbot-widget" class="chatbot-widget ${a === "embedded" ? "widget-open" : ""}">
      <header id="chatbot-header" class="chatbot-header">
        <div class="chatbot-header-content">
          ${r ? `<img src="${r}" class="chatbot-header-logo" alt="${p.title} logo" loading="lazy">` : ""}
          <div class="chatbot-header-text">
            <p class="chatbot-header-title">${p.title}</p>
            <p class="chatbot-header-subtitle">${p.subtitle}</p>
          </div>
        </div>
        <div class="chatbot-header-actions">
          ${a !== "embedded" ? `
            <button id="chatbot-close" class="chatbot-action-btn" aria-label="${p.closeChatAriaLabel}" title="${p.closeChatTitle}">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 5l10 10M15 5l-10 10"/>
              </svg>
            </button>
          ` : ""}
        </div>
      </header>

      <div id="chatbox" class="chatbot-chat" role="log" aria-live="polite" aria-atomic="false"></div>

      ${m.enableHumanAgent ? `
        <div id="chatbot-agent-btn-container" class="chatbot-agent-btn-container">
          <button id="chatbot-agent-btn" class="chatbot-agent-btn">${p.humanAgentButton}</button>
        </div>
      ` : ""}

      <div id="chatbot-input" class="chatbot-input-area">
        <textarea 
          id="chatInput" 
          placeholder="${p.placeholder}"
          rows="1"
          aria-label="${p.inputAriaLabel}"
          maxlength="2000"
        ></textarea>
        <button id="sendBtn" aria-label="${p.sendAriaLabel}" disabled>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3l16 7-16 7V3zm2 11.5V14l6-4-6-4v2.5L9 10l-5 4.5z"/>
          </svg>
        </button>
      </div>

      ${p.footerText ? `<footer id="chatbot-footer" class="chatbot-footer">${p.footerText}</footer>` : ""}
    </div>

    ${a === "floating" ? `
      <button id="chatbot-floating-btn" class="chatbot-floating-btn ${l}" aria-label="${p.openChatAriaLabel}">
        ${i}
      </button>
    ` : ""}
  `;
  v.innerHTML = B, H.appendChild(v);
  const h = {
    widget: v.querySelector("#chatbot-widget"),
    chatbox: v.querySelector("#chatbox"),
    inputWrapper: v.querySelector("#chatbot-input"),
    input: v.querySelector("#chatInput"),
    sendButton: v.querySelector("#sendBtn"),
    closeButton: v.querySelector("#chatbot-close"),
    floatingButton: v.querySelector("#chatbot-floating-btn"),
    agentButton: v.querySelector("#chatbot-agent-btn"),
    agentButtonContainer: v.querySelector("#chatbot-agent-btn-container")
  };
  function G() {
    h.chatbox.scrollTo({
      top: h.chatbox.scrollHeight,
      behavior: "smooth"
    });
  }
  function Q(u, y = null) {
    h.input.disabled = !u, y && (h.input.placeholder = y), u && !h.input.value.trim() && (h.sendButton.disabled = !0);
  }
  function _(u, y = "user") {
    const $ = document.createElement("div");
    $.classList.add("chat-message", `chat-message-${y}`), $.setAttribute("role", "article");
    const S = document.createElement("div");
    S.classList.add("message-bubble"), S.innerHTML = b.parse(u), $.appendChild(S), h.chatbox.appendChild($), requestAnimationFrame(() => {
      $.classList.add("message-visible"), G();
    }), m.messageHistory.push({ text: u, from: y, timestamp: Date.now() });
  }
  function _e() {
    if (!t || m.isTyping) return;
    m.isTyping = !0;
    const u = document.createElement("div");
    u.classList.add("chat-message", "chat-message-bot", "typing-indicator"), u.id = "typing-indicator", m.chatResponseMode === "human" ? u.innerHTML = `
        <div class="message-bubble">
          <span class="waiting-text">${p.waitingForAgent}</span>
        </div>
      ` : u.innerHTML = `
        <div class="message-bubble">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      `, h.chatbox.appendChild(u), G();
  }
  function ge() {
    const u = document.getElementById("typing-indicator");
    u && (u.remove(), m.isTyping = !1);
  }
  async function V() {
    const u = h.input.value.trim();
    if (!(!u || m.isTyping)) {
      _(u, "user"), h.input.value = "", h.sendButton.disabled = !0, d && d(u), _e(), m.chatResponseMode === "human" && Q(!1, p.waitingPlaceholder);
      try {
        const y = new AbortController(), $ = setTimeout(() => y.abort(), o), S = await fetch(e, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: m.sessionId,
            action: "sendMessage",
            chatInput: u,
            messageHistory: m.messageHistory,
            chatResponseMode: m.chatResponseMode,
            maximumWaitingTime: o
          }),
          signal: y.signal
        });
        if (clearTimeout($), ge(), !S.ok) throw new Error(`HTTP ${S.status}`);
        const C = await S.json();
        if (C.showForm) {
          Ze();
          return;
        }
        const L = C.reply || C.message || C.output || p.noResponse;
        _(L, "bot"), m.chatResponseMode === "human" && Q(!0, m.originalPlaceholder), g && g(L, C);
      } catch (y) {
        if (ge(), y.name === "AbortError" && m.enableEmailFallback) {
          _(p.timeoutMessage, "bot"), Q(!1, p.timeoutPlaceholder), fe();
          return;
        }
        _(p.connectionError, "bot"), m.chatResponseMode === "human" && Q(!0, m.originalPlaceholder), c && c(y), console.error("Error del chatbot:", y);
      }
    }
  }
  function qe() {
    m.isOpen || (m.isOpen = !0, h.widget.classList.add("widget-open"), h.floatingButton && h.floatingButton.classList.add("hidden"), k && k(), setTimeout(() => h.input.focus(), 300));
  }
  function He() {
    !m.isOpen || a === "embedded" || (m.isOpen = !1, h.widget.classList.remove("widget-open"), h.floatingButton && h.floatingButton.classList.remove("hidden"), w && w());
  }
  function fe() {
    h.inputWrapper.remove(), h.agentButtonContainer && h.agentButtonContainer.remove();
    const u = document.createElement("div");
    u.classList.add("chat-message", "chat-message-bot", "email-prompt"), u.innerHTML = `
    <div class="message-bubble">
      <p>${p.emailPromptMessage}</p>
      <form id="emailForm">
        <input type="text" id="userName" name="userName" autocomplete="name" placeholder="${p.usernamePlaceholder}" aria-label="Nombre" >
        <p id="nameError" class="field-error"></p>
        <input type="email" id="userEmail" name="userEmail" autocomplete="email" placeholder="${p.emailPlaceholder}" aria-label="Correo electrónico" >
        <p id="emailError" class="field-error"></p>
        <input type="phone" id="userPhone" name="userPhone" autocomplete="phone" placeholder="${p.phonePlaceholder}" aria-label="Teléfono" >
        <p id="phoneError" class="field-error"></p>
        <button type="submit">${p.emailSubmitButton}</button>
        <p id="formError" class="field-error"></p>
      </form>
    </div>
  `, h.chatbox.appendChild(u), G();
    const y = u.querySelector("#emailForm"), $ = u.querySelector("#nameError"), S = u.querySelector("#phoneError"), C = u.querySelector("#emailError"), L = u.querySelector("#formError"), be = u.querySelector('button[type="submit"]');
    y.addEventListener("submit", async (me) => {
      me.preventDefault();
      const De = new FormData(me.target), P = Object.fromEntries(De);
      [$, S, C].forEach(
        (je) => je.style.display = "none"
      );
      let W = !0;
      if (P.userName.trim().length < 2 && ($.textContent = p.nameInvalidError, $.style.display = "block", W = !1), /\S+@\S+\.\S+/.test(P.userEmail) || (C.textContent = p.emailInvalidError, C.style.display = "block", W = !1), P.userPhone.trim().length < 6 && (S.textContent = p.phoneInvalidError, S.style.display = "block", W = !1), !!W) {
        be.classList.add("loading"), C.style.display = "none";
        try {
          await Ne({
            email: P.userEmail,
            name: P.userName,
            phone: P.userPhone
          }), _(
            p.emailSuccessMessage.replace("{email}", P.userEmail),
            "bot"
          ), u.remove();
        } catch {
          L.textContent = p.emailSendError, L.style.display = "block";
        } finally {
          be.classList.remove("loading");
        }
      }
    });
  }
  function Ze() {
    const u = `human-contact-btns-${Date.now()}`, y = `
          <div class="message-bubble">
            <p>${p.automaticHumanContactMessage}</p>
            <div id="${u}" class="human-contact-buttons">
              <button data-action="yes">${p.humanContactYesButton}</button>
              <button data-action="no">${p.humanContactNoButton}</button>
              <button data-action="email">${p.humanContactEmailButton}</button>
            </div>
          </div>
        `, $ = document.createElement("div");
    $.classList.add("chat-message", "chat-message-bot"), $.innerHTML = y, h.chatbox.appendChild($), G(), document.getElementById(u).addEventListener("click", (C) => {
      const L = C.target.dataset.action;
      L && (L === "yes" ? ke() : L === "no" || L === "email" && fe(), $.remove());
    });
  }
  async function Ne({ email: u, name: y, phone: $ }) {
    try {
      const S = await fetch(e, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: u,
          name: y,
          phone: $,
          sessionId: m.sessionId,
          action: "submitEmail",
          messageHistory: m.messageHistory
        })
      });
      if (!S.ok) throw new Error(`HTTP ${S.status}`);
      return await S.json();
    } catch (S) {
      throw S;
    }
  }
  function ke() {
    m.chatResponseMode = "human", h.agentButtonContainer.classList.add("hiding"), h.agentButtonContainer.remove(), h.input.value = p.humanAgentMessage, h.sendButton.disabled = !1, V();
  }
  h.input.addEventListener("input", () => {
    h.input.disabled || (h.sendButton.disabled = !h.input.value.trim());
  }), h.sendButton.addEventListener("click", V), h.input.addEventListener("keypress", (u) => {
    u.key === "Enter" && !u.shiftKey && (u.preventDefault(), V());
  }), h.closeButton && h.closeButton.addEventListener("click", He), h.floatingButton && h.floatingButton.addEventListener("click", qe), h.agentButton && m.enableHumanAgent && h.agentButton.addEventListener("click", () => {
    ke(), V(), x && x();
  }), p.initialMessage && _(p.initialMessage, "bot");
}
export {
  Ct as createChatbot
};
