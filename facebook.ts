class Profile {
    public firstname:string;
    public lastname:string;
    public frnlist:string[];
    email:string;
    work:string;
    education:string;
    place:string;
    byear:number;
    bmonth:number;
    bdate:number;
    m_number:number;
    gender:string;
    constructor(fname:string,lname:string,flist:string[],eml:string,bdyr:number,bmnth:number,bdt:number,gen:string,wrk?:string,edu?:string,plc?:string,mno?:number) {
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
    getage = ()=> {
        let age:number;
        let currentyear:any = new Date(2018);
        age = currentyear-this.byear;
        return `You are ${age} year old`;
    } 
    
}
//friend class which defines friend's profile
class friend {
    public ffname:string;
    public flname:string;
    public ffdlist:string[];
    femail:string;
    fwork:string;
    feducation:string;
    fplace:string;
    fyear:number;
    fmonth:number;
    fdate:number;
    fm_number:number;
    fgender:string;
    fquote:string;
    constructor(ffn:string,fln:string,flist:string[],feml:string,fbdyr:number,fbmnth:number,fbdt:number,fgen:string,fwrk?:string,fedu?:string,fplc?:string,fmno?:number) {
        this.ffname = ffn;
        this.flname = fln;
        this.ffdlist = flist;
        this.femail= feml;
        this.fwork = fwrk;
        this.feducation = fedu;
        this.fplace = fplc;
        this.fyear = fbdyr;
        this.fmonth = fmno;
        this.fdate = fbdt;
        this.fm_number = fmno;
        this.fgender = fgen;
    }
    status = (qu:string)=> {
        this.fquote = qu;
        console.log(this.fquote);
        let ask:string = prompt(`Do you like ${this.ffname}'s status ?`);
        if(ask == 'yes')
        {
            console.log(`\nYou liked ${this.ffname} ${this.flname}'s status..`);
        }
        else if(ask == 'no')
        {
            console.log(`\nYou disliked ${this.ffname} ${this.flname}'s status..`);
        }
        else {
            console.log(`\nPost something .....`);
        }
    }
}

class mutualfriends extends friend {
    super(sffn:string,sfln:string,sflist:string[],sfeml:string,sfbdyr:number,sfbmnth:number,sfbdt:number) {
        this.ffdlist = sflist;
        this.ffname = sffn;
        this.flname = sffn;
    }
    findmutualfriend = (...allfrnds)=> {
        let count:number=0;
        let len:number = (<string[]>this.ffdlist).length;
        let len2:number = (<string[]>allfrnds).length; 
        for(let i:number=0;i<len;i++)
        {
            for(let i2:number=0;i2<len2;i2++)
            {
                if(this.ffdlist[i]==allfrnds[i2])
                {
                    console.log(`\n${this.ffdlist[i]} is mutual friend of yours and ${this.ffname}`);
                    count++;
                }
            }
        }
        console.log(`\nYou have ${count} mutual friends with ${this.ffname}`);
    }
    
}
//object created of profile class
let prof = new Profile("jennifer","desoza",["virat kohli","mayank markande","suresh raina"],"jeni@gmail.com",1998,12,3,"female");
console.log(prof.getage()); 

let allppl:string[] = ["virat kohli","mayank markande","hardik pandya","mahendrasinh dhoni","rohit sharma","sachin tendulkar"];
//object created of friend's profile
let frnd = new friend("Mila","staufar",["virat kohli","mayank markande","suresh raina"],"mila@gmail.com",2001,18,11,"female");
frnd.status(`Failure will never overtake me if my determination to succeed is strong enough.`);

//object created of mutualfriends class
let mfrnds = new mutualfriends("binz","winget",allppl,"binz@yahoo.com",1997,2,22,"male");
mfrnds.findmutualfriend("virat kohli","mayank markande","varun dhawan","rohit sharma","himansh kohli","sachin tendulkar");

alert("Done!");