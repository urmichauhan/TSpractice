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
var Profile = /** @class */ (function () {
    function Profile(fname, lname, flist, eml, bdyr, bmnth, bdt, gen, wrk, edu, plc, mno) {
        var _this = this;
        this.getage = function () {
            var age;
            var currentyear = new Date(2018);
            age = currentyear - _this.byear;
            return "You are " + age + " year old";
        };
        this.firstname = fname;
        this.lastname = lname;
        this.frnlist = flist;
        this.email = eml;
        this.work = wrk;
        this.education = edu;
        this.place = plc;
        this.byear = bdyr;
        this.bmonth = bmnth;
        this.bdate = bdt;
        this.m_number = mno;
        this.gender = gen;
    }
    return Profile;
}());
//friend class which defines friend's profile
var friend = /** @class */ (function () {
    function friend(ffn, fln, flist, feml, fbdyr, fbmnth, fbdt, fgen, fwrk, fedu, fplc, fmno) {
        var _this = this;
        this.status = function (qu) {
            _this.fquote = qu;
            console.log(_this.fquote);
            var ask = prompt("Do you like " + _this.ffname + "'s status ?");
            if (ask == 'yes') {
                console.log("\nYou liked " + _this.ffname + " " + _this.flname + "'s status..");
            }
            else if (ask == 'no') {
                console.log("\nYou disliked " + _this.ffname + " " + _this.flname + "'s status..");
            }
            else {
                console.log("\nPost something .....");
            }
        };
        this.ffname = ffn;
        this.flname = fln;
        this.ffdlist = flist;
        this.femail = feml;
        this.fwork = fwrk;
        this.feducation = fedu;
        this.fplace = fplc;
        this.fyear = fbdyr;
        this.fmonth = fmno;
        this.fdate = fbdt;
        this.fm_number = fmno;
        this.fgender = fgen;
    }
    return friend;
}());
var mutualfriends = /** @class */ (function (_super) {
    __extends(mutualfriends, _super);
    function mutualfriends() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.findmutualfriend = function () {
            var allfrnds = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allfrnds[_i] = arguments[_i];
            }
            var count = 0;
            var len = _this.ffdlist.length;
            var len2 = allfrnds.length;
            for (var i = 0; i < len; i++) {
                for (var i2 = 0; i2 < len2; i2++) {
                    if (_this.ffdlist[i] == allfrnds[i2]) {
                        console.log("\n" + _this.ffdlist[i] + " is mutual friend of yours and " + _this.ffname);
                        count++;
                    }
                }
            }
            console.log("\nYou have " + count + " mutual friends with " + _this.ffname);
        };
        return _this;
    }
    mutualfriends.prototype["super"] = function (sffn, sfln, sflist, sfeml, sfbdyr, sfbmnth, sfbdt) {
        this.ffdlist = sflist;
        this.ffname = sffn;
        this.flname = sffn;
    };
    return mutualfriends;
}(friend));
//object created of profile class
var prof = new Profile("jennifer", "desoza", ["virat kohli", "mayank markande", "suresh raina"], "jeni@gmail.com", 1998, 12, 3, "female");
console.log(prof.getage());
var allppl = ["virat kohli", "mayank markande", "hardik pandya", "mahendrasinh dhoni", "rohit sharma", "sachin tendulkar"];
//object created of friend's profile
var frnd = new friend("Mila", "staufar", ["virat kohli", "mayank markande", "suresh raina"], "mila@gmail.com", 2001, 18, 11, "female");
frnd.status("Failure will never overtake me if my determination to succeed is strong enough.");
//object created of mutualfriends class
var mfrnds = new mutualfriends("binz", "winget", allppl, "binz@yahoo.com", 1997, 2, 22, "male");
mfrnds.findmutualfriend("virat kohli", "mayank markande", "varun dhawan", "rohit sharma", "himansh kohli", "sachin tendulkar");
alert("Done!");
