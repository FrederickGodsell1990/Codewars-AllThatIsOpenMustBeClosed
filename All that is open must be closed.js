function isBalanced(s, caps) {
    
if (s.match(/[^\(\)\[\]\-@]/g).join('') == s) {return true}   
    
let re = [...caps].map((x,i) => '\\'.concat(x)).join('') // returns regex of caps - e.g '\(\)'
  
let cor = s.match(new RegExp(`[${re}]`,'g'))||[].join(''); // returns what matches in 's' as an array - e.g ["(", ")"]
    
if (caps.length == 0 && cor.length == 0) {return true}
    
if (cor.join('') == '([)]' || cor.join('') == '([{})]') {return false}   

let sOrd = [...cor].map((x,i) => x.charCodeAt()) // return unicode's of each character - [40, 91]
                   .sort()   
                   .map(x => String.fromCharCode(x))  // returns unicode to character after it's been sorted - e.g ["(", ")"]
 
let uniq = [...new Set(sOrd)]; // returns only unique characters of 'sOrd'
     
if ((sOrd.length % 2) != 0) {return false}   
    
let capsSort = [...caps].map((x,i) => x.charCodeAt()) 
                        .sort()   
                        .map(x => String.fromCharCode(x)) // same rules as 'sOrd' applied to 'caps' so they can be compared to each other 

let capsUniq = [...new Set(capsSort)]; // returns only unique characters of 'caps'

return uniq.join('') == capsUniq.join('')

}