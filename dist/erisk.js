function n(n,t){return zr(n+Math.random()*(t-n))}function t(n,t){for(var r=[],i=n;t>i;i++)r.push(i);return r}function r(n){return n}function i(n,t){if(!t||"object"!=typeof n)return n;var r=void 0!==n.length?[]:{};return f(n,function(n,e){r[e]=i(n,t-1)}),r}function e(n,t,r){return t>n?t:n>r?r:n}function u(){return Date.now()}function o(n,t){return n.replace(/X/g,t)}function c(n,t){return[].slice.call(n).map(t)}function f(n,t){for(var r in n)t(n[r],r)}function a(n,r,i,e,u){c(t(n,i),function(n){c(t(r,e),u.bind(0,n))})}function s(n){return Or.querySelector("#"+n)}function l(n,t,r){var i={c:"class",s:"style",i:"id"},e="<"+n+" ";for(var u in t)e+=(i[u]||u)+"='"+t[u]+"'";return e+=">"+(r||"")+"</"+n+">"}function d(n,t){var r=s(n);return r.insertAdjacentHTML("beforeend",t),r.lastChild}function v(n,t){n.style.transform=t,n.style["-webkit-transform"]=t}function p(n,t){n.onclick=t,n.addEventListener("touchstart",function(n){return n.preventDefault(),t(n)})}function h(n,t){s(n).style.display=t?"block":"none"}function m(n){h(n,0)}function b(n){h(n,1)}function g(n,t,r){"string"==typeof n&&(n=s(n)),n.classList[r?"add":"remove"](t)}function y(n,t){t=t||r;var i,e=t(n[0]);return c(n,function(n){t(n)<=e&&(i=n,e=t(n))}),i}function w(n,t){return t=t||r,y(n,function(n){return-t(n)})}function T(n,t){var r=0;return c(n,function(n){r+=t(n)}),r}function k(n,t){return n&&n.indexOf(t)>=0}function M(n,t){var r=[];return c(n,function(i,e){c(n.slice(e+1),function(n){r.push(t(i,n))})}),r}function x(t){return c(t,function(r,i){var e=n(i,t.length),u=t[e];t[e]=t[i],t[i]=u}),t}function C(r){function i(t){var r=n(0,4);return r%2?t.w--:t.h--,2==r&&t.t++,3==r&&t.l++,t.w*t.h<9}function e(n){var t=!1;return a(n.l,n.t,n.l+n.w,n.t+n.h,function(n,r){t=t||s[n][r]}),t}function u(n,r){var i=r.l,e=r.t,u=r.w,f=r.h,l=[];c(t(0,u),function(n){l[n]=o(i+n,e),l[u+f+n]=o(i+u-n,e+f)}),c(t(0,f),function(n){l[u+n]=o(i+u,e+n),l[u+f+u+n]=o(i,e+f-n)});var d={i:n,p:l,d:[]};return a(r.l,r.t,r.l+r.w,r.t+r.h,function(n,t){s[n][t]=d}),d}function o(n,t){var r=6.28*Sr(n*n*t*t*600+357*m),i=Sr(n*t*600+211*m)/2;return[n+Sr(r)*i,t+Ar(r)*i]}function f(){a(1,1,$t-1,_t-1,function(n,t){var r=s[n][t];r&&(r.n||(r.n=[]),c([[-1,0],[1,0],[0,-1],[0,1]],function(i){var e=s[n+i[0]][t+i[1]];e&&e!=r&&-1==r.n.indexOf(e)&&r.n.push(e)}))})}var s,l,d,v,p=11-r,h=13+3*r,m=n(1e4,1e5);do for(s=t(0,$t).map(function(){return[]}),l=[],d=0,v=2500;h>d&&--v>0;){var b={l:n(1,$t-p+1),t:n(1,_t-p+1),w:n(3,p),h:n(3,p)};if(!d||e(b))for(;!i(b);)if(!e(b)){l.push(u(d++,b));break}}while(!v);return f(),l}function L(n){var t=0,r=0,i=n.length;return c(n,function(n){t+=n[0],r+=n[1]}),[t/i,r/i]}function H(n,t,r,i,e){var u=L(n);return c(n,function(n){return[u[0]+(n[0]-u[0])*t+i,u[1]+(n[1]-u[1])*r+e]})}function S(n){var t=n[0]/$t,r=n[1]/_t,i=.4*t+.6;return r=r*i+.5*(1-i),[100*t,100*r]}function A(n,t){return l("stop",{offset:n+"%",s:"stop-color:"+t})}function z(n,t,r){return l("radialGradient",{i:n,cx:"-100%",cy:"50%",fx:"-100%",fy:"50%",r:"200%",gradientUnits:"userSpaceOnUse"},A(60,r)+A(100,t))}function j(n,t,r,i,e){i=i||"stroke:#000;stroke-width:0.25;",r=r?"url(#"+r+")":"transparent";var u={i:t,points:c(n,S).join(" "),s:"fill:"+r+";"+i+";"};return e&&(u["clip-path"]=e),l("polygon",u)}function E(n,t){function r(){return c(u,function(n,t){return l("clipPath",{i:"clip"+t},j(n.p,"cp"+t,"l",""))}).join("")}function i(n,t,r,i,e,o,f,a){return l("g",{},c(u,function(u,c){return j(H(u.p,r,i,e,o),n+c,t,f,a?"url(#"+a+c+")":"")}).join(""))}function e(){f(t.t,function(n){var t=n.r.c,r="left:"+(t[0]-1.5)+"%;top:"+(t[1]-4)+"%",i=Xr({c:"o",s:r},Xr({c:"i"},Xr({c:"i"},Xr({c:"i"},Xr({c:"i"})))));n.e=d("m",i),p(n.e,X.bind(0,n.r,"t"))})}var u=t.r,o=l("defs",{},r()+z("b","#88f","#113")+z("l","#fa6","#530")+z("lh","#fb7","#741")+z("d","#210","#000")+z("w","#55f","#003")+c(t.p,function(n,t){return z("p"+t,n.l,n.d)+z("p"+t+"h",n.h,n.hd)}).join("")),a=j([[0,0],[$t,0],[$t,_t],[0,_t]],"b","b"),v=i("r","l",1,1,0,0),h=i("d","d",1,1,.05,.05),m=i("w","w",1.05,1.05,.2,.2," "),b=i("hl","",1,1,0,0,"stroke:#fff;stroke-width:1.5;opacity:0.0;","clip");n.innerHTML=l("svg",{viewbox:"0 0 100 100",preserveAspectRatio:"none"},o+a+m+h+v+b),Fr={},c(u,function(n,t){n.e=s("r"+t),n.c=S(L(n.p)),n.hl=s("hl"+t),p(n.hl,X.bind(0,n,"c"))}),p(Or.body,X.bind(0,null,"c")),e()}function O(n){var t=Xr({i:"tc",c:"sc"});t+=Xr({i:"pd",c:"sc un"},c(n.p,function(n){var t=n.i;return Xr({i:"pl"+t,c:"pl",style:"background: "+n.d},n.n+Xr({c:"ad",i:"pr"+t})+Xr({c:"ad",i:"pc"+t}))}).join("")),t+=Xr({c:"sc un ds",i:"in"}),s("d").innerHTML=t,c(["mv","und"],b)}function X(n,t,r){var i=Ir[t];return i&&(Qt(Kr),i(n)),r.target.href&&"#"!=r.target.href?1:(r.stopPropagation(),0)}function I(n,t,r){function e(){t.d=i(f,3),t.d.h=t.r.filter(Tt.bind(0,t,n)),P(t)}function u(r){var i=Ct(t,r.r),e=c(cr,function(e){var u=r.u==e?r.l+1:e==ar?t.m.h||0:0,c=e.c[u],f=o(e.n,fr[u])+l("b",{}," ("+c+"&#9775;)"),a=o(e.d,e.x[u]),s=!1;return s=s||e==pr&&!r.u,s=s||r.u&&r.u!=e&&e!=ar&&e!=pr,s=s||u>=e.c.length,s=s||u<Ht(t,i,e),s=s||i!=n,{t:f,d:a,o:c>Lt(t,n),h:s}});return e.push({t:"Done"}),e}var f={b:[{t:"Cancel move",h:1},{t:"End turn"}]};Ir.c=function(i){if(i&&t.d.t!=er||e(),!t.d.s&&i)Tt(t,n,i)&&(e(),t.d.t=ir,t.d.s=i,t.d.c=yt(t,i),t.d.b[0].h=0,t.d.h=i.n.concat(i));else if(i){var u=t.d;if(i==u.s)u.c=u.c%yt(t,i)+1;else{if(u.s.n.indexOf(i)>-1)return Ir={},u.d=i,r(u);e()}}P(t)},Ir.t=function(n){var r=t.t[n.i];t.d={t:er,w:r,r:n,b:u(r)},P(t)},Ir.s=function(n){var r=null;c(t.r,function(i){k(t.s[i.i],n)&&(r=i)}),r&&Ir.c(r)},Ir.b=function(i){t.d&&t.d.t==er?i>=cr.length?e():(t.d.u=cr[i],t.d.u==ar&&(Nr[n.i]=t.d.r),r(t.d)):1==i?(Ir={},r({t:ur})):e()},Ir.un=function(){Ot(t)},e(),Nr[n.i]&&(Ir.t(Nr[n.i]),delete Nr[n.i])}function N(n,t){function r(){var n=Dr[0];n.f(),setTimeout(function(){Dr.shift(),Dr.length&&r()},n.d)}Dr.push({d:n,f:t}),1==Dr.length&&r()}function D(r){function i(t){var i=Ct(r,t),e=i?"p"+i.i:"l",u=k(r.d&&r.d.h||[],t)||r.e&&i==r.e;u&&(e+="h");var o=.1+.003*t.c[0];(r.e||r.d&&r.d.s==t)&&(o*=2),t.hl.style.opacity=u?o:0,t.hl.style.cursor=u?"pointer":"default",r.prt==t&&(r.prt=0,c(t.p,function(r){r=S(r);var i=t.c,e=n(30,100)/100,u=[Rt(e,i[0],r[0]),Rt(e,i[1],r[1])],o=(u[0]-i[0])/2,c=(u[1]-i[1])/2-.15;B(u[0],u[1],o,c,"#fff")})),t.e.style.fill="url(#"+e+")"}function e(){if(c(Or.querySelectorAll(".ttp"),s("m").removeChild.bind(s("m"))),xt(r).u==I){var n=r.d&&r.d.s;if(n){u(n,"Click this region again to change the number of soldiers.");var t=w(n.n,function(t){return Math.abs(n.c[0]-t.c[0])+Math.abs(n.c[1]-t.c[1])});u(t,"Click a bordering region to move.")}if(!n){var i=r.m.z;i&&(u(i[i.length-1],"Armies that conquer a new region cannot move again."),u({c:[-2,80]},"Once you're done, click 'End turn' here."))}2==r.m.t&&2==r.m.l&&u({c:[90,93]},"If you want to undo a move or check the rules, use the buttons here.",15)}}function u(n,t,r){if(!Gr.tt[t]){setTimeout(function(){Gr.tt[t]=1,It(Gr)},500),r=r||7;var i=n.c[0]-.5*(r+1),e=102-n.c[1],u="bottom: "+e+"%; left: "+i+"%; width: "+r+"%";d("m",Xr({c:"tt ttp",s:u},t))}}function o(n){for(var t=n.e,i=n.u?n.l+3:2;t;)t.style.display=i>0?"block":"none",t.style.background=n.u?n.u.b:"#999",i--,t=t.firstChild;var e=Ct(r,n.r);n.e.style.cursor=Jr==Cr?e==xt(r)?"zoom-in":"help":"default";var u=r.d&&r.d.w==n;g(n.e,"l",u)}function a(n,t,i){h.push(t.i);var e=Fr[t.i];if(!e){var u=Xr({c:"s",s:"display: none"});e=Fr[t.i]=d("m",u),p(e,X.bind(0,t,"s"))}var o=n.c,c=yt(r,n),f=y([c,4]),a=y([2/jr(c/4),1]),s=i%4,l=zr(i/4),v=-.6*f+1.2*s,m=l*a+(r.t[n.i]?1.5:0),b=o[0]+v-.2*m,w=o[1]+.2*v+m;if(t.a){var T=t.a.c;b=(b+T[0])/2,w=(w+T[1])/2}e.style.left=b+"%",e.style.top=w+"%",e.style.zIndex=20+5*l+s,e.style.display="block";var k=r.d||{};g(e,"l",k.s==n&&i<k.c)}function l(){c(r.flt||[],function(n){var t,r;if(n.r)t=n.r.c[0],r=n.r.c[1];else{var i=Fr[n.s.i];t=parseFloat(i.style.left)+.2,r=parseFloat(i.style.top)+.2}t-=n.w/2+.5,r-=4;var e="left: "+t+"%;top:"+r+"%;color:"+n.c+";width:"+n.w+"%",u=d("m",Xr({c:"tt",s:e},n.t));v(u,"translate3d(0,0,0)"),G(u,0,-3)}),r.flt=0}c(r.r,i),f(r.t,o);var h=[];f(r.s,function(n,t){c(n,a.bind(0,r.r[t]))}),f(Fr,function(r,i){if(h.indexOf(parseInt(i))<0){s("m").removeChild(r),delete Fr[i];var e=parseFloat(r.style.left),u=parseFloat(r.style.top);c(t(0,20),function(){var t=6.28*Math.random(),r=n(0,100)/80;B(e+Sr(t)*r,u+Ar(t)*r,0,-1,"#000")})}}),l(),e()}function F(n){var t=n.m,r=n.d,i=r&&r.t==er,e=r&&r.s,u=xt(n);if(i){var o=jt(n,r.w);s("tc").innerHTML=Xr({},o.n)+Xr({c:"ds"},o.d)}else s("tc").innerHTML="Turn <b>"+n.m.t+"</b>"+(Gr.tc!=kr?" / "+Gr.tc:"");c(n.p,function(t,r){var i=kt(n,t),e=n.e;i?(s("pr"+r).innerHTML=kt(n,t)+"&#9733;",s("pc"+r).innerHTML=e?e==t?"&#9819;":"":n.c[t.i]+"&#9775;"):(s("pr"+r).innerHTML="&#9760;",s("pc"+r).innerHTML="")});var o;o=u.u==I?i?Ct(n,r.r)==u?l("p",{},"Choose an upgrade to build."):"":e?l("p",{},"Click on this region again to choose how many to move.")+l("p",{},"Click on a target region to move the army."):l("p",{},"Click on a region to move or attack with its army.")+l("p",{},"Click on a temple to buy soldiers or upgrades with &#9775;."):l("p",{},u.n+" is taking her turn."),s("in").innerHTML=o,s("in").style.background=u.d,s("pd").style.display=i?"none":"block",s("mc").innerHTML=t.l+l("span",{s:"font-size: 80%"},"&#10138;"),s("ft").innerHTML=n.c[u.i]+l("span",{s:"font-size: 80%"},"&#9775;"),q(r&&r.b),s("und").innerHTML=Et(n)?"&#x21b6;":""}function q(n){s("u").innerHTML="",c(n||[],function(n,t){if(!n.h){var r=Xr({},n.t);n.d&&(r+=Xr({c:"ds"},n.d));var i=l("a",{href:"#",c:n.o?"off":""},r),e=d("u",i);n.o||p(e,X.bind(0,t,"b"))}})}function P(n){qr=n,D(n),F(n),n.sc&&(Qt(n.sc),n.sc=null)}function R(n,t,r){function i(n){return"translate3d(1.2em,"+n+"em,0) rotateY("+(10+2*n)+"deg)"}r=r||1,N(r,function(){var r=d("c",Xr({c:"bn"},t)),e=r.style;e.background=n,e.opacity=0,v(r,i(-1)),setTimeout(function(){e.opacity=1,v(r,i(1))},100),setTimeout(function(){e.opacity=1},600),setTimeout(function(){e.opacity=0},1100),setTimeout(function(){r.parentNode.removeChild(r)},1600)})}function B(n,t,r,i,e){var u="opacity:1;left: "+n+"%;top: "+t+"%;box-shadow: 0 0 1px 1px "+e,o=d("m",Xr({c:"pr",s:u},""));G(o,r,i)}function G(n,t,r){setTimeout(function(){v(n,"translate3d("+t+"em,"+r+"em,0)"),n.style.opacity=0},50),setTimeout(function(){s("m").removeChild(n)},3050)}function J(){setTimeout(function(){var n=Er.innerWidth,t=Er.innerHeight,r=1.65,i="px";n/t>r?n=t*r:t=n/r;var e=s("c").style;e.width=n+i,e.height=t+i,e.fontSize=.025*t+i},1)}function U(r){function e(n,t){for(var r=[{r:n,d:0}],i=[n],e=-1,u=100;0>e;){var o=r.shift(),f=o.r,a=o.d;f==t?e=a:a>=u?e=u:(f.d[t.i]&&(u=y([u,f.d[t.i]+a])),c(f.n,function(n){k(i,n)||r.push({r:n,d:a+1})}),i.push(f))}return n.d[t.i]=t.d[n.i]=e,e}function u(n){return y(M(n,e))}function o(){return l[n(0,l.length)]}function f(){function n(n){return c(f,function(t,r){return l[r]+e(t,n)})}function r(t){if(k(v,t))return-100;var r=n(t),i=w(r)-y(r),e=u(v.concat(f).concat(t));return e||(e=-5),e-i}c(s,function(n,t){d.c[t]=d.l[t]=0});var i=c(t(0,1e3),function(){return c(d.p,o)}),f=w(i,u);c(s,function(n,t){var r=f[t];d.o[r.i]=n,a(r,3)});var l=c(f,function(){return 0}),v=[],p=[3,3,4][s.length-2];c(t(0,p),function(){var t=w(d.r,function(n){return r(n)});a(t,3),v.push(t),l=n(t)})}function a(n,t){var r=n.i;d.t[r]={r:n,i:r},dt(d,n,t)}var s=[];c(r.p,function(t,r){if(t!=hr){var e=i(or[r],1);e.u=t==mr?I:W,t==br&&(e.p=i(Hr[n(0,Hr.length)],2)),e.i=s.length,s.push(e)}});var l=C(s.length),d={p:s,r:l,o:{},t:{},s:{},c:{},l:{},m:{t:1,p:0,m:ir,l:nr}};return f(),d}function W(n,t,r){if(Y(n,t)){var i=Z(n,t);return setTimeout(r.bind(0,i),tr)}var e=Q(n,t);if(e)return setTimeout(r.bind(0,e),tr);var u=t.m.l||1;nt(n,t,u,r)}function Y(n,t){if(!Mt(t,n).length)return!1;var r=n.p.u.length?n.p.s:1,i=zt(t)/t.c[n.i];if(i>1)return!1;var e=c(t.p,K.bind(0,t)),u=w(e)/K(t,n),o=u*r-i;return o>=0}function K(n,t){return 2*kt(n,t)+At(n,t)}function Q(n,t){if(n.p.u.length){var r=n.p.u[0],i=Ht(t,n,r);if(!(t.c[n.i]<r.c[i])){var e=Mt(t,n).filter(function(n){return!n.u&&!i||n.u==r});if(e.length){var u=y(e,V.bind(0,t));return n.p.u.shift(),{t:er,u:r,w:u,r:u.r}}}}}function V(n,t){var r=Ct(n,t.r);return ut(n,r,t.r)+ot(n,r,t.r)}function Z(n,t){var r=w(Mt(t,n),V.bind(0,t));return{t:er,u:ar,w:r,r:r.r}}function $(n){if(0==n.d)return n.v=it(n.a,n.s),_(n.p,n);var t=n.u.shift();if(t){var r=ft(n.s,t);return{p:n,a:n.a,d:n.d-1,m:t,s:r,u:tt(r)}}return _(n.p,n)}function _(n,t){if(n){var r=n.s.p[n.s.m.p],i=r==n.a,e=!n.b||i&&t.v>n.v||!i&&t.v<n;e&&(n.b=t.m,n.v=t.v)}return n}function nt(n,t,r,i){function e(){for(var n=a;n--;){f=$(f);var t=u()-s;if(t>rr&&(f=null),!f){var r=c.b;return r||(r={t:ur}),void setTimeout(i.bind(0,r),w([tr-t,1]))}}setTimeout(e,1)}var o=at(t,n),c={p:null,a:n,s:o,d:r,u:tt(t)},f=c,a=100,s=u();setTimeout(e,1)}function tt(n){function t(t,e,u){Ct(n,e)!=i&&yt(n,e)>u||r.push({t:ir,s:t,d:e,c:u})}var r=[{t:ur}],i=xt(n);return n.m.l?(c(n.r,function(r){if(Tt(n,i,r)){var e=yt(n,r);c(r.n,function(n){t(r,n,e),e>1&&t(r,n,zr(e/2))})}}),x(r),r):r}function rt(n,t,r,i){var e=i*Gr.tc,u=(n.m.t-e)/(Gr.tc-e);return 0>u&&(u=0),t+(r-t)*u}function it(n,t){function r(r){var u=et(t,r);return u+=ot(t,n,r)*e-ut(t,n,r)*e*u,u+=yt(t,r)*i}var i=rt(t,.25,0,.83),e=rt(t,1,0,.83),u=T(t.r,function(i){return Ct(t,i)==n?r(i):0}),o=wt(t,n)*i/12;return u+o}function et(n,t){var r=n.t[t.i];if(r){var i=rt(n,6,0,.5),e=rt(n,4,0,.9),u=r.u?r.l+1:0;return 1+i+e*u}return 1}function ut(n,t,r){var i=Gr.l;if(Gr.l==gr)return 0;var u=yt(n,r),o=w(c(r.n,function(r){var e=Ct(n,r);if(e==t||!e)return 0;for(var u=i==yr?0:2,o=[{r:r,d:u}],f=[],a=0;o.length;){var s=o.shift();a+=yt(n,s.r)*(i>yr?(2+s.d)/4:1),f.push(s.r),s.d&&c(s.r.n.filter(function(t){return!k(f,t)&&Ct(n,t)==e}),function(n){o.push({r:n,d:s.d-1})})}return a}));return e((o/(u+1e-4)-1)/1.5,0,i==yr?.5:1.1)}function ot(n,t,r){if(Gr.l==gr)return 0;var i=yt(n,r);return i?T(r.n,function(r){if(Ct(n,r)!=t){var u=yt(n,r);return e(.5*(i/(u+.01)-.9),0,.5)*et(n,r)}return 0}):0}function ct(n,t,r){return kt(t,n)?void n.u(n,t,r):r({t:ur})}function ft(n,t){n=at(n);var r=t.t;return r==ir?vt(n,t.s,t.d,t.c):r==er?ht(n,t.r,t.u):r==ur&&mt(n),lt(n),n}function at(n,t){return{r:n.r,p:n.p,a:n.a||t,m:i(n.m,1),o:i(n.o,1),t:i(n.t,2),s:i(n.s,3),c:i(n.c,1),l:i(n.l,1),flt:n.flt}}function st(n){Jr=Cr,N(150,function(){var t=xt(n);ct(t,n,function(r){t.u==W&&Qt(Kr);var i=ft(n,r);return i.e?(N(150,P.bind(0,i)),void gt(i)):(Rr=at(n),void setTimeout(st.bind(0,i),1))}),P(n)})}function lt(n){c(n.p,function(t){var r=T(n.r,function(r){return Ct(n,r)==t?yt(n,r):0});!r&&kt(n,t)&&(f(n.o,function(r,i){t==r&&delete n.o[i]}),xt(n)==t&&(n.m.l=0),n.a||(N(150,P.bind(0,n)),R("#222",t.n+" has been eliminated!",900)))});var t=n.p.filter(kt.bind(0,n)).length>1;return t?void 0:void(n.e=bt(n))}function dt(n,r,i){c(t(0,i),function(){Pr=Pr+1||0;var t=n.s[r.i];t||(t=n.s[r.i]=[]),t.push({i:Pr++})})}function vt(r,i,e,u){function o(t){var i=120+g;return r.a?(t+3)*i/(b+5):n(.12*i,.88*i)}var f=r.s[i.i],a=r.s[e.i]||(r.s[e.i]=[]),s=Ct(r,i),l=Ct(r,e);if(s!=l){var d=a.length,v=y([u,St(r,l,vr)]),p=St(r,s,lr);if((v||d)&&(r.a||c(f.slice(0,u),function(n){n.a=e}),pt(r)),v&&(c(t(0,v),function(){f.shift(),u--}),pt(r,800,Vr,[{s:f[0],t:"Earth kills "+v+"!",c:vr.b,w:9}])),d&&u){r.u=1;var h=u*(1+.01*St(r,s,lr)),m=d*(1+.01*St(r,l,vr)),b=y([u,d]),g=100*Math.pow(h/m,1.6);c(t(0,b),function(n){o(n)<=120?p--<=0?(f.shift(),u--,pt(r,250,Vr)):pt(r,800,Vr,[{s:f[0],t:"Protected by Fire!",c:lr.b,w:11}]):(a.shift(),l&&(r.c[l.i]+=4),pt(r,250,Qr))}),a.length&&(u=0,r.sc=$r,r.flt=[{r:e,c:l?l.h:"#fff",t:"Defended!",w:7}])}c(f,function(n){n.a=0})}if(u>0&&(c(t(0,u),function(){a.push(f.shift())}),s!=l)){r.o[e.i]=s,r.m.z=(r.m.z||[]).concat(e);var w=r.t[e.i];w&&delete w.u,r.prt=e,r.flt=[{r:e,c:s.h,t:"Conquered!",w:7}],r.sc=d?Zr:_r}r.m.l--}function pt(n,t,r,i){if(!n.a){var e=at(n);e.sc=r,e.flt=i,N(t||500,P.bind(0,e))}}function ht(n,t,r){var i=n.t[t.i],e=Ct(n,t);return r==ar?(n.m.h||(n.m.h=0),n.c[e.i]-=r.c[n.m.h++],dt(n,t,1)):r==pr?void delete i.u:(i.u!=r?(i.u=r,i.l=0):i.l++,n.c[e.i]-=r.c[i.l],n.prt=i.r,void(r==dr&&n.m.l++))}function mt(n){var t=xt(n),r=wt(n,t);n.c[t.i]+=r,r&&(n.flt=[{r:Mt(n,t)[0].r,t:"+"+r+"&#9775;",c:"#fff",w:5}]),f(n.t,function(r,i){n.o[i]==t&&dt(n,r.r,1)});do{var i=n.p.length,e=(n.m.p+1)%i,u=n.p[e],o=n.m.t+(e?0:1);n.m={t:o,p:e,m:ir,l:nr+St(n,u,dr)}}while(!kt(n,u));return n.m.t>Gr.tc?(n.m.t=Gr.tc,void(n.e=bt(n))):void(n.a||R(xt(n).d,xt(n).n+"'s turn"))}function bt(n){var t=kt.bind(0,n),r=w(n.p,t),i=n.p.filter(function(n){return n!=r}),e=w(i,t);return t(r)!=t(e)?r:Lr}function gt(n){N(1,function(){var t=n.e;t!=Lr?R(t.d,t.n+" wins the game!"):R("#333","The game ends in a draw!"),P(n),s("tc").innerHTML="Game complete",s("in").innerHTML=l("p",{},"Click the button below to start a new game."),s("in").style.background="#555",s("mv").style.display="none",q([{t:"New game"}]),Ir.b=Dt})}function yt(n,t){var r=n.s[t.i];return r?r.length:0}function wt(n,t){var r=Mt(n,t);if(!r.length)return 0;var i=kt(n,t),e=T(r,function(t){return yt(n,t.r)}),u=1+.01*St(n,t,sr);return t.u==W&&Gr.l==Tr&&(u+=.4),jr(u*(i+e))}function Tt(n,t,r){return n.m.l>0&&Ct(n,r)==t&&yt(n,r)&&!k(n.m.z,r)}function kt(n,t){var r=0;return c(n.r,function(i){Ct(n,i)==t&&r++}),r}function Mt(n,t){var r=[];return f(n.t,function(i,e){n.o[e]==t&&r.push(i)}),r}function xt(n){return n.p[n.m.p]}function Ct(n,t){return n.o[t.i]}function Lt(n,t){return n.c[t.i]}function Ht(n,t,r){return w(c(Mt(n,t),function(n){return n.u&&n.u==r?n.l+1:0}).concat(0))}function St(n,t,r){return t?w(c(n.r,function(i){var e=n.t[i.i];return e?Ct(n,i)!=t?0:e.u==r?r.x[e.l]:0:0})):0}function At(n,t){return T(n.r,function(r){return Ct(n,r)==t?yt(n,r):0})}function zt(n){return ar.c[n.m.h||0]}function jt(n,t){if(t.u){var r=t.u,i=t.l,e=o(r.d,r.x[i]);return{n:o(r.n,fr[i]),d:e}}var u=Ct(n,t.r)?"Basic Temple":"Neutral Temple";return{n:u,d:"No upgrades."}}function Et(n){return Rr&&xt(Rr)==xt(n)&&!n.u&&xt(n).u==I}function Ot(n){if(Et(n)){Ir={};var t=Rr;Rr=null,st(t)}}function Xt(){if(localStorage){var n=localStorage.getItem("s");if(n)return n=JSON.parse(n),f(Br,function(t,r){void 0===n[r]&&(n[r]=t)}),n}return Br}function It(){localStorage&&localStorage.setItem("s",JSON.stringify(Gr))}function Nt(){function n(n,t,r,i){var e=c(r,function(n,i){var e=t+(r.length-1-i);return l("a",{i:e,c:"rt",href:"#",s:"font-size: 90%"},n)}).join(""),u={c:"sc ds",s:"padding-right: 0.5em"};return f(i,function(n,t){u[t]=n}),Xr(u,n+e)}var r=Xr({c:"sc ds"},"Player setup"),i=c(or,function(t){var r=t.i;return n(t.n,"sb"+t.i,["AI","Human","Off"],{i:"pl"+r,c:"pl",s:"background: "+t.d})}).join("");r+=Xr({i:"pd",c:"sc un"},i),r+=n("AI","ai",["Evil","Mean","Rude","Nice"]),r+=n("Turns","tc",["Endless","15","12","9"]),s("d").innerHTML=r,c(["mv","und"],m),a(0,0,or.length,3,function(n,t){p(s("sb"+n+t),X.bind(0,{p:n,b:t},"sb"))}),c(t(0,4),function(n){p(s("ai"+n),X.bind(0,n,"ai")),p(s("tc"+n),X.bind(0,Mr[n],"tc"))})}function Dt(){function n(){var n=T(Gr.p,function(n){return n!=hr?1:0});return n>1}function r(){var t=!n();q([{t:"Change map",o:t},{t:"Start game",o:t}])}function i(){It(Gr),c(Gr.p,function(n,r){c(t(0,3),function(t){g("sb"+r+t,"sl",n==t)})}),c(t(0,4),function(n){g("ai"+n,"sl",n==Gr.l),g("tc"+n,"sl",Mr[n]==Gr.tc)})}function e(){n()&&(u=U(Gr),E(s("m"),u),D(u))}Jr=xr;var u;e(),Nt(),r(),i(),Ir.b=function(t){n()&&(0==t?e():(O(u),P(u),st(u)))},Ir.sb=function(n){Gr.p[n.p]=n.b,i(),r(),e()},Ir.ai=function(n){Gr.l=n,i()},Ir.tc=function(n){Gr.tc=n,i()}}function Ft(){c(["o","tub","snd"],function(n){h(n,1)}),p(s("cb"),Pt.bind(0,!1)),p(s("nxt"),qt.bind(0,1)),p(s("prv"),qt.bind(0,-1)),p(s("tub"),Pt.bind(0,!0)),p(s("snd"),Zt),p(s("und"),X.bind(0,0,"un")),qt(0),setTimeout(Pt.bind(0,!0),10)}function qt(n){Ur=e(Ur+n,0,Wr-1),v(s("tuc"),"translate3d("+100*-Ur/Wr+"%,0,0)"),h("prv",Ur>0),h("nxt",Wr-1>Ur)}function Pt(n){n&&(s("ts").style.display="block"),setTimeout(function(){g("ts","h",!n)},50),n||setTimeout(function(){s("ts").style.display="none"},500)}function Rt(n,t,r){return n=e(n,0,1),r*n+t*(1-n)}function Bt(n,t,r,i,e,u){var o=0;return function(c){var f=u(c);return o+=c,n>o?Rt(o/n,0,1)*f:n+t>o?Rt((o-n)/t,1,e)*f:n+t+r>o?e*f:Rt((o-n-r-t)/i,e,0)*f}}function Gt(n){var t=0;return function(r){return t+=r,Math.sin(t*n*6.283)}}function Jt(n,t,r,i){var e=0;return function(u){e+=u;var o=u*Rt(e/r,n,t);return i(o)}}function Ut(n,t,r,i){var e=0;return function(u){return e+=u,i(e>r?u*t:u*n)}}function Wt(n){c(n,function(n){n.f=Bt(.01,.03,.03*n.d,.03*n.d,.7,Gt(n.p))});var t=0;return function(r){t+=r;var i=0;return c(n,function(n){t>=n.t&&(i+=n.f(r))}),i}}function Yt(n,t,r){for(var r=r||1,i=Yr.sampleRate,e=i*t,u=Yr.createBuffer(1,e,i),o=1/i,c=u.getChannelData(0),f=0;e>f;f++)c[f]=n(o)*r;return u}function Kt(){Yr&&(Kr=Yt(Bt(.01,.03,.01,.01,.2,Gt(110)),.1),Qr=Yt(Bt(.01,.05,.05,.05,.5,Jt(1,.3,.1,Gt(300))),.2,.6),Vr=Yt(Bt(.01,.05,.05,.05,.5,Jt(1,.3,.1,Gt(200))),.2,.6),_r=Yt(Wt([{t:0,p:261,d:1},{t:.1,p:329,d:2}]),.6,.2),Zr=Yt(Wt([{t:0,p:261,d:1},{t:0,p:329,d:2},{t:0,p:392,d:3},{t:.2,p:261,d:1},{t:.2,p:349,d:2},{t:.2,p:440,d:3}]),.6,.2),$r=Yt(Wt([{t:0,p:392,d:3},{t:.15,p:329,d:2},{t:.3,p:261,d:1}]),.6,.2),Vt())}function Qt(n){if(n&&Gr.s){var t=Yr.createBufferSource();t.buffer=n,t.connect(Yr.destination),t.start()}}function Vt(){s("snd").innerHTML=Gr.s?"♪":" ",It(Gr)}function Zt(){Gr.s=!Gr.s,Vt()}var $t=30,_t=20,nr=3,tr=1e3,rr=5e3,ir=1,er=2,ur=3,or=[{i:0,n:"Amber",l:"#fd8",d:"#960",h:"#fd8",hd:"#a80"},{i:1,n:"Crimson",l:"#f88",d:"#722",h:"#faa",hd:"#944"},{i:2,n:"Lavender",l:"#d9d",d:"#537",h:"#faf",hd:"#759"},{i:3,n:"Emerald",l:"#9d9",d:"#262",h:"#bfb",hd:"#484"}],cr=[{n:"Extra soldier",d:"",c:c(t(0,100),function(n){return 8+4*n}),x:[]},{n:"X of Water",d:"Income: X% more each turn.",c:[15,25],x:[20,40],b:"#66f"},{n:"X of Fire",d:"Attack: X invincible soldier(s).",c:[20,30],x:[1,2],b:"#f88"},{n:"X of Air",d:"Move: X extra move(s) per turn.",c:[25,35],x:[1,2],b:"#ffa"},{n:"X of Earth",d:"Defense: Always kill X invader(s).",c:[30,45],x:[1,2],b:"#696"},{n:"Rebuild temple",d:"Switch to a different upgrade.",c:[0],x:[]}],fr=["Temple","Cathedral"],ar=cr[0],sr=cr[1],lr=cr[2],dr=cr[3],vr=cr[4],pr=cr[5],hr=0,mr=1,br=2,gr=0,yr=1,wr=2,Tr=3,kr=1e6,Mr=[9,12,15,kr],xr=0,Cr=1,Lr={},Hr=[{s:1,u:[]},{s:.2,u:[sr,vr]},{s:.25,u:[sr,lr,lr]},{s:.15,u:[sr,sr,vr,vr]},{s:.4,u:[sr]},{s:.3,u:[sr,sr]},{s:.25,u:[lr,lr]},{s:.2,u:[vr,vr]}],Sr=Math.sin,Ar=Math.cos,zr=Math.floor,jr=Math.ceil,Er=window,Or=document,Xr=l.bind(0,"div"),Ir={},Nr={},Dr=[],Fr={},qr,Pr,Rr=null,Br={p:[mr,br,br,hr],l:gr,s:!0,tc:12,tt:{}},Gr=Xt(),Jr=0,Ur=0,Wr=5,Yr=window.AudioContext&&new AudioContext,Kr,Qr,Vr,Zr,$r,_r;(Er.onresize=J)(),window.onload=function(){setTimeout(function(){Gr=Xt(),Kt(),Dt(),Ft()},500)};