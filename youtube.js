var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Libs = /** @class */ (function () {
    function Libs(vd, prod, cat, pub, vw, lk, dlk, sh, dl, ss) {
        var _this = this;
        this.getTitle = function () {
            return "\nYou have watched " + _this.videotitle + " which is published on " + _this.published;
        };
        //access private specifier. 
        this.setalldetailsofmyfav = function (l, d) {
            _this.likes = l;
            _this.dislike = d;
            var plus = 1000;
            var minus = d - 320;
            console.log("\n\nThe most popular video of " + _this.production + " '" + _this.videotitle + "' has " + (_this.likes + 2675) + " likes and only " + (_this.dislike - minus) + " dislikes !");
        };
        this.videotitle = vd;
        this.production = prod;
        this.category = cat;
        this.published = pub;
        this.views = vw;
        this.likes = lk;
        this.dislike = dlk;
        this.share = sh;
        this.download = dl;
        this.subscibe = ss;
    }
    return Libs;
}());
var Newpost = /** @class */ (function (_super) {
    __extends(Newpost, _super);
    function Newpost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newtitle = function () {
            var w = prompt("\nDo you want to watch this new video from " + _this.production);
            if (w == "yes") {
                _this.download = true;
                console.log("\nDownloaded successfully ..");
                console.log("\nYou are watching " + _this.videotitle);
            }
            else if (w == "no") {
                console.log("\nSorry something went wrong!!");
            }
            else {
                console.log("\nOOpS you are offline !");
            }
        };
        _this.newpostview = function () {
            console.log("\nViews of the " + _this.videotitle + "'s are unbelivable !!iIt's " + _this.views);
        };
        return _this;
    }
    Newpost.prototype["super"] = function (vdnew, prodnew, catnew, pubnew, vwnew, lknew, dlknew, shnew, dlnew, ssnew) {
        this.videotitle = vdnew;
        this.views = vwnew;
    };
    return Newpost;
}(Libs));
var Performers = /** @class */ (function () {
    function Performers(nm, tl, ch) {
        var _this = this;
        this.checkperforming = function () {
            var ppl = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ppl[_i] = arguments[_i];
            }
            var allppl = [];
            var all = ppl;
            allppl = allppl.concat(all);
            return "\n" + _this.name + " are giving wonderful performance in " + _this.ttl;
        };
        this.name = nm;
        this.channel = ch;
        this.ttl = tl;
    }
    return Performers;
}());
//Object of Libs class(super-class)
var Libsobj = new Libs("Home Craft", "Fairytale", "Business", "6 May 2018", 83721, 45098, 2320, true, false, true);
var g = Libsobj.getTitle();
console.log(g);
Libsobj.setalldetailsofmyfav(232984, 3659);
//object of Newpost class(sub-class of Libs)
var newpostobj = new Newpost("The jungle book", "T-series", "Entertaiment", "7 may 2018", 98990, 90077, 0, true, false, true);
newpostobj.newtitle();
//display all object's total views
console.log("\nThe total view of " + Libsobj.production + " and " + newpostobj.production + " are " + (Libsobj.views + newpostobj.views));
//object of Performance(sub class of Libs)
var per = new Performers(['Emma watsen', 'milla staufer', 'Kristen'], "The jungle book", "KidsBlog");
console.log(per.checkperforming(this.name));
//checks two different object's parameter in one function
var fun = function (newpstttl, perfrmttl, len) {
    if (newpstttl == perfrmttl) {
        console.log("\nThe '" + newpstttl + "' from " + newpostobj.production + " is performed by " + len + " Actors.");
    }
    else {
        console.log("\nThere is no same title found !!!");
    }
};
//calling function
var lenofarray = per.name.length;
fun(newpostobj.videotitle, per.ttl, lenofarray);
alert("Done !");
