class Libs {
    videotitle:string;
    production:string;
    category:string;
    published:string;
    views:number;
    private likes:number;
    dislike:number;
    share:boolean;
    download:boolean;
    subscibe:boolean;
    constructor(vd:string,prod:string,cat:string,pub:string,vw:number,lk:number,dlk:number,sh?:boolean,dl?:boolean,ss?:boolean){
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
    getTitle = ()=>{
        return `\nYou have watched ${this.videotitle} which is published on ${this.published}`;
    }
    //access private specifier. 
    setalldetailsofmyfav = (l:number,d:number)=> {
        this.likes = l;
        this.dislike = d;
        let plus:number = 1000;
        let minus:number = d-320;
        console.log(`\n\nThe most popular video of ${this.production} '${this.videotitle}' has ${(this.likes+2675)} likes and only ${this.dislike-minus} dislikes !`);

    }
}
class Newpost extends Libs {
    super(vdnew:string,prodnew:string,catnew:string,pubnew:string,vwnew:number,lknew:number,dlknew:number,shnew?:boolean,dlnew?:boolean,ssnew?:boolean){
        this.videotitle = vdnew;
        this.views = vwnew;
    }
    newtitle = ()=> {
       let w:string = prompt(`\nDo you want to watch this new video from ${this.production}`);
       if(w==`yes`)
       {
            this.download = true;
            console.log("\nDownloaded successfully ..");
           console.log(`\nYou are watching ${this.videotitle}`);
       }
       else if(w==`no`)
       {
           console.log(`\nSorry something went wrong!!`);
       }
       else {
           console.log(`\nOOpS you are offline !`);
       }
    }
    newpostview = ()=> {
        console.log(`\nViews of the ${this.videotitle}'s are unbelivable !!i\It's ${this.views}`);
    }
} 
class Performers {
    public name:string[];
    public channel:string;
    public ttl:string;
    constructor(nm:string[],tl:string,ch?:string) {
        this.name = nm; 
        this.channel = ch;
        this.ttl = tl;
    }
    checkperforming = (...ppl)=> {
        let allppl:string[] = [];
        let all = ppl;
        allppl = allppl.concat(all);
        return `\n${this.name} are giving wonderful performance in ${this.ttl}`;
    } 
}
//Object of Libs class(super-class)
let Libsobj = new Libs("Home Craft","Fairytale","Business","6 May 2018",83721,45098,2320,true,false,true);
let g = Libsobj.getTitle();
console.log(g);
Libsobj.setalldetailsofmyfav(232984,3659);


//object of Newpost class(sub-class of Libs)
let newpostobj = new Newpost("The jungle book","T-series","Entertaiment","7 may 2018",98990,90077,0,true,false,true);
newpostobj.newtitle();
//display all object's total views
console.log(`\nThe total view of ${Libsobj.production} and ${newpostobj.production} are ${Libsobj.views+newpostobj.views}`);

//object of Performance(sub class of Libs)
let per = new Performers(['Emma watsen','milla staufer','Kristen'],"The jungle book","KidsBlog");
console.log(per.checkperforming(this.name)); 

//checks two different object's parameter in one function
let fun = (newpstttl,perfrmttl,len)=> {
    if(newpstttl == perfrmttl)
    {
        console.log(`\nThe '${newpstttl}' from ${newpostobj.production} is performed by ${len} Actors.`);
    }
    else {
        console.log(`\nThere is no same title found !!!`);
    }
}

//calling function
let lenofarray:number = (<string[]>per.name).length;
fun(newpostobj.videotitle,per.ttl,lenofarray);

alert("Done !");