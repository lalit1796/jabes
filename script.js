var mpd = {
    rec:[],
    ele:function(e){return document.getElementById(e);},
    els:function(e){return document.getElementsByClassName(e);},
    
    
    
    show:function(){
        var db=this.ele("cntBody"),acts=mpd.ele("acts"),bt;
        
            acts.innerHTML="";
            bt=document.createElement("div");
            bt.className="btn";
            bt.id="__add";
            bt.innerHTML="ADD SUBSCRIBERS";
            acts.appendChild(bt);;
        
            bt.addEventListener("click",function(){mpd.events.add();});
            
            if(this.rec==""){db.innerHTML="<div class='noth'>NO RECORD AVAILABLE</div>";}
            else{
            db.innerHTML='<div class="tableHead">'+
                                '<div class="row1 cmnCss">Name</div>'+
                                '<div class="row2 cmnCss">Mobile</div>'+
                                '<div class="row3 cmnCss">Option</div>'+
                            '</div>';
        
            for(var i=0;i<this.rec.length;i++){
                db.innerHTML+=this.createRow(this.rec[i]);
            }
        }
    },
    createRow:function(x){
            return'<div class="tableContent"><div class="row1 cmnCss">'+x[0]+'</div><div class="row2 cmnCss">'+x[1]+'</div><div class="row3 cmnCss"><div data-index="'+x[2]+'" onclick="mpd.events.del(this)" class="actBtn btnRed">Delete</div></div></div>';
        },
    
    form:function(){
        
        
        return "<div class='addOpt'>"+
                "<div id='localForm' class='psuedoForm'>"+
                "<div class='slice1'><label class='ip_lable'>Name</label><input data-id='nres' id='name' class='ifl' type='text'></div>"+
                "<div class='slice1'><label class='ip_lable'>Mobile</label><input data-id='mres' id='contact' class='ifl'  type='text'></div>"+
                "<div class='slice1'><div class='actBtn btnGreen' role='button' onclick='mpd.submit()'>Add</div></div>"+
                "<div class='slice1'><div class='res'><div id='nres' class='rfld'></div><div id='mres' class='rfld'></div></div></div>"+
                "</div>"+
                "</div>";
        
    },
    submit:function(){
        var name=this.ele('name').value,contact=this.ele("contact").value;
        
        if(name==""){
            window.alert("Empty Name");
        }
        else{
            if(contact==""){
                window.alert("Empty Contact");
            }
            else{
                this.rec.push([name,contact,Math.random().toString(36).substr(2, 9)]);
                mpd.ini();
            }
        }
    },
    
    events:{
        add:function(){   
            var bdy=mpd.ele("cntBody"),acts=mpd.ele("acts"),bt;
            acts.innerHTML="";
            bt=document.createElement("div");
            bt.className="btn";
            bt.id="__show";
            bt.innerHTML="SHOW SUBSCRIBERS";
            acts.appendChild(bt);
            bdy.innerHTML=mpd.form();
            bt.addEventListener("click",function(){mpd.show();});
            this.react();    
        },
        del:function(e){
            var token = e.dataset.index;
            for(var i=0;i<mpd.rec.length;i++){
                if(mpd.rec[i][2]===token){
                    mpd.rec.splice(i,1);
                }
            }
            mpd.ini();
            
        },
        react:function(){     
            var ec = mpd.els("ifl");
            for(var i=0;i<ec.length;i++){
              ec[i].addEventListener("keyup",function(){mpd.ele(this.dataset.id).innerHTML="<b>=></b> "+this.value;}); 
            } 
        }
    },
    ini:function(){
        this.show();
        this.ele("__add").addEventListener("click",function(){mpd.events.add();});
    }
};



mpd.ini();
