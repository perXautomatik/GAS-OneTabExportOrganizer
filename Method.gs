function presentFIlteredTags() {

return '=sort(UNIQUE({{UPPER(transpose({split(substitute(substitute(substitute(join("/",unique(FILTER(Input!A:A,Input!D:D="")))," ","/"),".","/"),",","/"),"/",true,true)}))},arrayformula(iferror(match(UPPER(transpose({split(substitute(substitute(substitute(join("/",unique(FILTER(Input!A:A,Input!D:D="")))," ","/"),".","/"),",","/"),"/",true,true)})),A:A,0),arrayformula("oc "&countif(UPPER(transpose({split(substitute(substitute(substitute(join("/",unique(FILTER(Input!A:A,Input!D:D="")))," ","/"),".","/"),",","/"),"/",true,true)})),"="&UPPER(transpose({split(substitute(substitute(substitute(join("/",unique(FILTER(Input!A:A,Input!D:D="")))," ","/"),".","/"),",","/"),"/",true,true)}))))))}), 2, false, 1, true)';
}
