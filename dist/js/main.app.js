!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=
b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),
h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&
(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,
f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=
a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];
if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=
g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",
/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,
q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=
c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");
r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;
a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,
t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],
["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),
["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);
p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});
return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r=
{h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,
h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()

//Form Validation
    function validateForm(elem) {

        var error = false;
        var name = $("#form-name").val();
        var company = $("#form-company").val();
        var email = $("#form-email").val();
        var message = $("#form-message").val();
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

    if (name == null || name == "") {        
        $("#form-name").addClass("red-alert");
        $("#form-name").attr("placeholder", "Type your Name here");
        error = true;
    } else {
        $("#form-name").removeClass("red-alert");
        $("#form-name").attr("placeholder", "Name");
        
    }

    if (company == null || company == "") {    
        $("#form-company").addClass("red-alert");
        $("#form-company").attr("placeholder", "Type your Company here");
        error = true;
    } else {
        $("#form-company").removeClass("red-alert");
        $("#form-company").attr("placeholder", "Company");
        
    }

    if (email == null || !re.test(email)) {        
        $("#form-email").addClass("red-alert");
        $("#form-email").attr("placeholder", "Type your Email here"); 
        error = true; 
    } else  {
        $("#form-email").removeClass("red-alert");
        $("#form-email").attr("placeholder", "Email");  
    }


    if (message == null || message == "") {
        $("#form-message").addClass("red-alert");
        $("#form-message").attr("placeholder", "Type your Message here");
        error = true;     
    } else {
        $("#form-message").removeClass("red-alert");
        $("#form-message").attr("placeholder", "Message");
        
    }

    if (error == true) {
        return false;
    }

    $.getJSON('contact_form.php', $(elem).serialize(), function(data) {
        // jsondata = JSON.stringify(data);
        // console.log(jsondata);
        if (data.result == "success"){
            $(".sent").show("fade", 250, function() {
                $(".sent").hide("fade", 2600, function() {
                    elem.reset();
                });
            });
        } else {
            console.log("sending email failed");
            $(".failed").show("fade", 250, function() {
                $(".failed").hide("fade", 2600, function() {
                   
                });
            });
        }
    });

    return false;

    }
$(document).on('ready', function(){
	
	Analytics();

	setInterval(function(){
			$(".slogan1").show("blind", { easing : 'easeInOutCirc'} , 1000, function(){
				$(".slogan2").show("blind", { easing : 'easeInOutCirc'} , 1100, function(){
					$(".slogan3").show("blind", { easing : 'easeInOutCirc'} , 1200)
				})
			})
	}, 1600);

	// Device detection
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

	};
	
    if( !isMobile.any() ){
       $.stellar({
		horizontalScrolling: false,
		responsive: true
	 });
    }

    if( isMobile.any() ){
       $(".homeB1, .homeB2, .aboutusB1, .aboutusB2, .servicesB1, .servicesB2, .servicesB3, .servicesB4, .servicesB5, .one1800FB1, .one1800FB2, .one1800FB3, .one1800FB4, .oTB1, .oTB2, .oTB3, .pop1, .pop2, .pop3, .min1, .min2, .min3, .Screenshot1, .zte1, .zte2, .500bc1, .500bc6").css("background-attachment","initial");
    }

	//dots functionality
	$(".dot").mouseover(function(){
		var city = $(this).data("city");
		$("." + city).addClass("dot-selected");
	});

	$(".dot").mouseleave(function(){
		var city = $(this).data("city");
		$("." + city).removeClass("dot-selected");
	});

	$(".dots-map").mouseover(function(){
		var city = $(this).data("dot");
		$("." + city).addClass("link-selected");
	});

	$(".dots-map").mouseleave(function(){
		var city = $(this).data("dot");
		$("." + city).removeClass("link-selected");
	});

	//google maps functionality
	$(".link").on("click", function(){
		$(".map iframe").attr("src", $(this).find("a").data("link"));
		$(".link").removeClass("link-selected");
		$(this).addClass("link-selected");

		var address = $(this).find("a").data("address")

		$('article p').addClass("hide")
		$("section article.addresses").addClass("article-selected")
		$('article p[data-address='+address+']').removeClass("hide")

	});

	$("#map").addClass("scrolloff");

	$(".map").on("mouseup", function(){
		$("#map").addClass("scrolloff");
	});

	$(".map").on("mouseleave", function(){
		$("#map").addClass("scrolloff");
	});

	$(".map").on("mousedown", function(){
		$("#map").removeClass("scrolloff");
	});
	
	//Header functionality
	$( document ).scroll(function() {
  		var y = $(this).scrollTop();

  		if (y > 30) {
  			$(".show-logo").hide();
  			$(".hide-logo").show();
  			$("#nav-icon span").css(menu_click_opened);
  			$(".menu-text").css(menu_click_p);
  			$("header").css(headerFixed);
  			$(".right").addClass("scrollColor");

	    } else {
	    	$(".show-logo").show();
  			$(".hide-logo").hide();
  			$(".white-logo").hide();
  			$("header").removeAttr('style');
	        $(".menu-text").removeAttr('style');
	        $("#nav-icon span").removeAttr('style');
	    	$(".right").removeClass("scrollColor");
	    }
	});

	var menu_click_opened = {
		background : "#000000"
	}

	var menu_click_p = {
		color : "#000000"
	}

	var headerFixed = {
		background : "#ffffff",
		transition : ".4s"
	}


	if($('body').hasClass('blk-logo')){
		//$('#h1logo').attr("src", "http://d283pee6upvkfl.cloudfront.net/img/logoblack.png");
		$("#nav-icon span").addClass('span-dark');
		$('#toggle').addClass('blk-bg');
		$('.menu-text').addClass('blk-text');
	}

	function disable_scroll() {
         $('body').bind('touchmove', function(e){e.preventDefault()});
    }

    function enable_scroll() {
        $('body').unbind('touchmove');
    }
	
	// Testimonials interactions Beginning
	$(".readbutton").on("click", function(){

		var employee = $(this).parent().data("employee");
		var close = $(this).parent().find(".close");
		var parent = $(this).parent().closest(".test-interaction");
		var name = $(this).parent().find('h4').text();
		var paragraph = $(this).parent().find('.padding-Yvw-3');
		var testi_details = $(this).parent().find(".testi-details");
		var img = $(this).parent().find("img");

		// $(".testi-details").css( "display", "none");
		// $(testi_details).show()

		$(this).parent().find('.padding-Yvw-3').css( "display", "block");

		 $(".close").on("click", function(){
		 	console.log("CLose was pressed");
		 	// $(".large-12").attr("class", "large-6 medium-12 small-12 columns testi-bg test-interaction no-padding");
		 	$(this).parent().find('.padding-Yvw-3').css( "display", "none");
		 	$(this).parent().find('.close').css( "display", "none");
		 	$(this).parent().find('.readbutton').css( "display", "block");
		 	$(this).parent().find('img').css( "display", "initial");
		 	$(this).parent().find('h4').css("padding", "1.2em 0 0 0"); 	
		 })

		// console.log("You just clicked on " + employee + " " + "Bitch")
		
		var read = $(this).parent().find("h6");

		 $(this).parent().addClass("full_widhtT", 800, function(){
		 	$(read).css( "display", "none");
		 	$(paragraph).show("fade", 900, function(){
		 		$(close).show("slide", 450)
		 	})
		 	$(paragraph).css( "padding", "2em 2em 0em 2em");
		 	$(img).css( "display", "none");
		})
	});

	//open/close primary navigation
	$('.menu-click').on('click', function(){
		disable_scroll()
		$('.menu-click').toggleClass('close-menu');
		$('#primary-nav').show('blind', { easing : 'easeOutBounce'} , 900);

		$("#nav-icon span").toggleClass('white-span');
		$("#nav-icon").toggleClass('open');
		
		$('body').toggleClass('menu-visible');

			$(".white-logo").toggleClass('hide-active');
			$(".show-logo").toggleClass('hide-innactive');
  			$(".hide-logo").toggleClass('hide-innactive');

  		//Steps to execute when the menu opens
		if($(".menu-text").text() === "Menu") {
			$(".menu-text").text("Close");
			$('.menu-text').addClass('wh-text');
			$('#toggle').addClass('wh-bg');
		}
		//Steps to execute when the menu closses
		else {
			$(".menu-text").text("Menu");
			$('#toggle').removeClass('wh-bg');
			$('.menu-text').removeClass('wh-text');
			enable_scroll();
			$('#primary-nav').hide('fade' , 300);
			
			if($('body').hasClass('blk-logo')) {
				$('#h1logo, #h2logo').attr("src", "http://d283pee6upvkfl.cloudfront.net/img/logoblack.png");
			}else {
				$('#h1logo').attr("src", "http://d283pee6upvkfl.cloudfront.net/img/logowhite.png");
			}
		}

	});

   // Services page progress bar animations
   $( "#seventy-bar" )
   .animate({
   	width: "70%"
   }, {
   	queue: true,
   	duration: 3000
   });

   $( "#thirteen-bar" )
   .animate({
   	width: "13%"
   }, {
   	queue: true,
   	duration: 3000
   });

   $( "#thirteen-bar-two" )
   .animate({
   	width: "13%"
   }, {
   	queue: true,
   	duration: 3000
   });

   $( "#twentyfive-bar" )
   .animate({
   	width: "25%"
   }, {
   	queue: true,
   	duration: 3000
   });


   if ( $("body").hasClass("_services") ) {

   	function servicesDialsStart() {
   		var rp1 = radialProgress(document.getElementById('dial1'))
   		.diameter(250)
   		.value(75)
   		.render();

   		var rp2 = radialProgress(document.getElementById('dial2'))
   		.diameter(250)
   		.value(47)
   		.render();
   	}
    	//Waypoint for numbers section on the service page
    	var waypoint = new Waypoint({
    		element: document.getElementById('waypoint-numbers-section'),
    		handler: function(direction) {
    			if (direction === 'down' && ($(".dial1").attr("id") != "dial1") && ($(".dial2").attr("id") != "dial2") ) {
    				
    				$(".dial1").attr("id", "dial1");
    				$(".dial2").attr("id", "dial2");
    				servicesDialsStart();
    			}
    		},
    		offset: 600
    	});
    };

    if($("body").hasClass("_assessment-tool")){
    	$('pre.code.bash').addClass('prettyprint language-bash');
        $('pre.code.html').addClass('prettyprint language-html');
        $('pre.code.xml').addClass('prettyprint language-xml');
        $('pre.code.json').addClass('prettyprint language-js');
        $('pre.code.javascript').addClass('prettyprint language-js');
        prettyPrint();

        $("._assessment-tool .sidebar li[data-class]:not(.current)").on("click",function(){
            $("._assessment-tool .sidebar li").removeClass("current");
            $("._assessment-tool .content > div").css({"display": "none"});
            $("."+$(this).attr("data-class")).css({"display": "block"});
            $(this).addClass("current");

            if($(this).closest(".sub-menu").length > 0){
                $(".all_api").css({"display":"block"});
            }else{
                $(".all_api").css({"display":"none"});
            }
        });

        $("._assessment-tool .sidebar li[data-class='about_ae']").addClass("current");
    }

    if ( $("body").hasClass("_case-study") ) {

    	function caseStudyStart() {
	    	// 1-800-Flowers
	    	var rp1 = radialProgress(document.getElementById('case-dial1'))
	    	.diameter(150)
	    	.value(48.8)
	    	.render();

	    	var rp2 = radialProgress(document.getElementById('case-dial2'))
	    	.diameter(150)
	    	.value(5.59)
	    	.render();

	    	var rp3 = radialProgress(document.getElementById('case-dial3'))
	    	.diameter(150)
	    	.value(-66.7)
	    	.render();

	    	var rp4 = radialProgress(document.getElementById('case-dial4'))
	    	.diameter(150)
	    	.value(70.6)
	    	.render();

	      // Popcorn Trading
	      var rp5 = radialProgress(document.getElementById('otc-case-dial1'))
	      .diameter(150)
	      .value(73)
	      .render();

	      var rp6 = radialProgress(document.getElementById('otc-case-dial2'))
	      .diameter(150)
	      .value(13)
	      .render();

	      var rp7 = radialProgress(document.getElementById('otc-case-dial3'))
	      .diameter(150)
	      .value(13)
	      .render();

	      var rp8 = radialProgress(document.getElementById('otc-case-dial4'))
	      .diameter(150)
	      .value(25)
	      .render();

	       // Oriental Trading
	      var rp9 = radialProgress(document.getElementById('pop-case-dial1'))
	      .diameter(150)
	      .value(18.5)
	      .render();

	      var rp10 = radialProgress(document.getElementById('pop-case-dial2'))
	      .diameter(150)
	      .value(-6.9)
	      .render();

	      var rp11 = radialProgress(document.getElementById('pop-case-dial3'))
	      .diameter(150)
	      .value(10.7)
	      .render();

	      var rp12 = radialProgress(document.getElementById('pop-case-dial4'))
	      .diameter(150)
	      .value(20.2)
	      .render();

	      // Mindware
	      var rp13 = radialProgress(document.getElementById('min-case-dial1'))
	      .diameter(150)
	      .value(71)
	      .render();

	      var rp14 = radialProgress(document.getElementById('min-case-dial2'))
	      .diameter(150)
	      .value(64)
	      .render();

	      var rp15 = radialProgress(document.getElementById('min-case-dial3'))
	      .diameter(150)
	      .value(2.17)
	      .render();

	      var rp16 = radialProgress(document.getElementById('min-case-dial4'))
	      .diameter(150)
	      .value(36)
	      .render();
	  }

	    //Waypoint for numbers section on the service page
	    var waypoint2 = new Waypoint({
	    	element: document.getElementById('waypoint-benefits'),
	    	handler: function(direction) {
	    		if ( direction === 'down' && ( $(".benefits").attr("id") != "waypoint-on" ) ) {
	    			$(".benefits").attr("id", "waypoint-on");
		      		// Flowers
		      		$(".case-dial1").attr("id", "case-dial1");
		      		$(".case-dial2").attr("id", "case-dial2");
		      		$(".case-dial3").attr("id", "case-dial3");
		      		$(".case-dial4").attr("id", "case-dial4");
			    	// Oriental Trading
			    	$(".otc-case-dial1").attr("id", "otc-case-dial1");
			    	$(".otc-case-dial2").attr("id", "otc-case-dial2");
			    	$(".otc-case-dial3").attr("id", "otc-case-dial3");
			    	$(".otc-case-dial4").attr("id", "otc-case-dial4");
			    	// Popcorn Factory
			    	$(".pop-case-dial1").attr("id", "pop-case-dial1");
			    	$(".pop-case-dial2").attr("id", "pop-case-dial2");
			    	$(".pop-case-dial3").attr("id", "pop-case-dial3");
			    	$(".pop-case-dial4").attr("id", "pop-case-dial4");
			    	// Mindware Factory
			    	$(".min-case-dial1").attr("id", "min-case-dial1");
			    	$(".min-case-dial2").attr("id", "min-case-dial2");
			    	$(".min-case-dial3").attr("id", "min-case-dial3");
			    	$(".min-case-dial4").attr("id", "min-case-dial4");

			    	caseStudyStart()
			    }
			},
			offset: 400
		});

		
	}
	
	var waypoint3 = new Waypoint({
	    	element: document.getElementById('map-interaction'),
	    	handler: function(direction) {
	    		if ( direction === 'down' ) { 			
	      			
	      			$(".map-dot-image").show("fade", 1200, function(){
	      				$(".dot1").show("fade", 700, function(){
	      					$(".dot2").show("fade", 700, function(){
	      						$(".dot3").show("fade", 900, function(){
	      							$(".dot4").show("fade", 500)
	      						})
	      					})
	      				})
	      			});
			    	
			    }
			},
			offset: 500
		});

	

});

// Analytics function beginning
function Analytics() {

	//---- Menu Page Beginning ----//

	// Home Manu buttom
	$('#Home').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Home');
	});

	// About us Manu buttom
	$('#About-Us').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'About-Us');
	});

	// Services Manu buttom
	$('#Services').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Services');
	});

	// Works Manu buttom
	$('#Works').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Works');
	});

	// Contact-us Manu buttom
	$('#Contact-us').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Contact-us');
	});

	// Contact-us Manu buttom
	$('#Careers').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Careers');
	});

	//---- Works Page Beginning ----//

	// 1-800-flowers Manu buttom
	$('#1-800-flowers').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', '1-800-flowers');
	});

	// Oriental-trading Manu buttom
	$('#oriental-trading').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', 'oriental-trading');
	});

	// Popcorn-factory Manu buttom
	$('#popcorn-factory').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', 'popcorn-factory');
	});

	// Mindware Manu buttom
	$('#mindware').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', 'mindware');
	});

	//---- Case Study Page Beginning ----//

	// 1-800-flowers Case Study buttom
	$('#CS1-800-flowers').on('click', function() {
	 	 ga('send', 'event', 'Case_Study ', 'Click', 'CS1-800-flowers');
	});

	// Oriental-trading Case Study buttom
	$('#CSoriental-trading').on('click', function() {
	 	 ga('send', 'event', 'Case_Study ', 'Click', 'CSoriental-trading');
	});

	// Popcorn-factory Case Study buttom
	$('#CSpopcorn-factory').on('click', function() {
	 	 ga('send', 'event', 'Case_Study ', 'Click', 'CSpopcorn-factory');
	});

	// Mindware Case Study buttom
	$('#CSmindware').on('click', function() {
	 	 ga('send', 'event', 'Case_Study', 'Click', 'CSmindware');
	});

	//---- Contact Us Page Beginning ----//

	// New-Jersey Contact Us buttom
	$('#New-Jersey').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us', 'Click', 'New-Jersey');
	});

	// California Contact Us buttom
	$('#California').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us ', 'Click', 'California');
	});

	// India Contact Us buttom
	$('#India').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us', 'Click', 'India');
	});

	// Dubai Contact Us buttom
	$('#Dubai').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us', 'Click', 'Dubai');
	});


	// Google Analytics Script Beginning 
	   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-30307619-1', 'auto');
		  ga('send', 'pageview');

  	// Google Analytics Script End 
}





//Flex slider
(function slider($, window){

    window.app = {};    
    
    app.uiSlide =
    {
        /* Test elem and Call flexslider() */
        flexslider: function ( elem, params ) {
            // Test if elem exist in dom
            if( $(elem).length > 0 ) {
                 // Call function
                 $(elem).flexslider(params);
            };
        },
        /* Define and init all elem */
        init:  function () {
                            
            // Define Objects Collection
            var elem = [
                // Slider Home Page
                {
                    slide: '.flexslider',
                    param: {
                        animation: "slide",
                        touch : true,
                        easing : "swing"
                    }
                },
                // Slider Works Page
                {
                    slide: '.flexslider-works',
                    param: {
                        animation: "slide",
                        animationLoop: true,
					    // itemWidth: 293,
					    touch : true,
					    controlNav : true
                    }
                },

                {
                	slide: '.flexslider-examples',
                	param: {
                		 animation: "slide",
						 controlNav: "thumbnails"
                	}
                }
            ];
            
            // 2 Init All
            for( var i=0; i < elem.length; i++ ) {
                this.flexslider( elem[i].slide, elem[i].param )
            }
                            
        }
    };    
    
    /* init all function() */
    app.start =
       function(){
           this.uiSlide.init()
       };
    $(document).ready(function(){app.start();})
/*-----------------------------------------------------------------------------------*/
})(jQuery, window)

var fadeStart=0 
    ,fadeUntil=350 
    ,fading = $('.fading');

$(window).bind('scroll', function(){

    var offset = $(document).scrollTop(),opacity=0;

    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
});

