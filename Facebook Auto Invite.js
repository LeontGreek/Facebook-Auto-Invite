// ==UserScript==
// @name         Facebook Auto Invite
// @version      0.0.9
// @description  Facebook Add Friends Script
// @author       LeontG
// @match        https://www.facebook.com/friends/suggestions
// @grant        none
// @run-at       document-idle
// ==/UserScript==

! function() {
    "use strict";

    var t1 = setInterval(function() {
        var a = document.querySelector("div div div.x9f619.x1n2onr6.x1ja2u2z div.x9f619.x1n2onr6.x1ja2u2z div.x78zum5.xdt5ytf.x1n2onr6.x1ja2u2z div.x78zum5.xdt5ytf.x1n2onr6 div.x78zum5.xdt5ytf.x1n2onr6.xat3117.xxzkxad div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl div.x9f619.x1n2onr6.x78zum5.xdt5ytf.x193iq5w.xeuugli.x2lah0s.x1t2pt76.x1xzczws.x1cvmir6.x1vjfegm div.x2bj2ny.x1afcbsf.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1cvmir6.xcoz2nd.xxzkxad.xh78kpn.xojf56a.x1r98mxo div.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft");
        a.scrollTo(0, a.scrollTopMax);
        addFriends();
    }, 5000);

    function addFriends(){
        var l = document.getElementsByClassName("x1n2onr6 x1ja2u2z x78zum5 x2lah0s xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou xtvsq51 x1r1pt67");
        for (let i = 0; i < l.length; ++i){
            var o = l[i];
            o.click();
        }
    }
}();