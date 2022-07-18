// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string) {
  let letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  let lettersArr = letters.split(",");
  let marks = {};
  for (i = 1; i <= lettersArr.length; i++) {
    marks[lettersArr[i - 1]] = i;
  }
  let stringArr = string.split("");
  return stringArr.reduce((sum, letter) => sum + marks[letter], 0);
}
