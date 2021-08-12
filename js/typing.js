String.prototype.toKorChars = function() {
    let cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ],
    cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ],
    cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong;
    let str = this,
    cnt = str.length,
    chars = [],
    cCode;
    for (let i = 0; i < cnt; i++) {
        cCode = str.charCodeAt(i);
        if (cCode == 32) {
          chars.push(" ");
          continue;
        } // 한글이 아닌 경우
        if (cCode < 0xAC00 || cCode > 0xD7A3) {
            chars.push(str.charAt(i)); continue;
            }
        cCode = str.charCodeAt(i) - 0xAC00;

        jong = cCode % 28;
        // 종성
        jung = ((cCode - jong) / 28 ) % 21
        // 중성
        cho = (((cCode - jong) / 28 ) - jung ) / 21
        // 초성


        //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
        chars.push(cCho[cho]);
        chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
        if (cJong[jong] !== '') {
            chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
        }

    }

    return chars;
}


function typi(){
    if(i<=imax1-1){
        let jmax1 = typingArr[i].length;
        resultTypingText.innerHTML = text + typingArr[i][j];
        j++;
        if(j==jmax1){
            text+=  typingArr[i][j-1];
            i++;
            j=0;
        }
    } else{
         text ="";
        i=0;
        j=0;
    }
}

//타이핑할 문장
// let resultTypingChar  = "에듀윌";
let typingArr=[];
resultTypingChar = resultTypingChar.split(''); 
//각글자 초성,중성,종성으로 나눔
for(let i =0; i<resultTypingChar.length; i++){
    typingArr[i]=resultTypingChar[i].toKorChars();
}
//출력할 엘리먼트요소 가져옴
let resultTypingText = document.getElementsByClassName("resultTypingChar")[0];
let text = "",i=0,j=0;
let imax1 = typingArr.length;
let inter = setInterval(typi,250);


