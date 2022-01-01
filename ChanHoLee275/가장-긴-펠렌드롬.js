function solution(s)
{
    var answer = 0;
    let maxWidth = 0;

    const chars = ['#'];
    
    const target = s.split('');
    
    for(let i = 0; i < target.length; i++){
        chars.push(target[i]);
        chars.push('#');
    }
    
    if(chars[chars.length-1] !== '#') chars.push('#');

    for(let i = 0; i < chars.length; i++){
        let width = 1;
        while(i - width >= 0 && i + width < chars.length && isPalindrome(chars, i - width, i + width)){
            i % 2 ? width += 1 : width += 2;
        }
        width -= 1;
        if(maxWidth < width){
            const candidate = chars.slice(i - width, i + width + 1).filter(el => el !== '#');
            if(answer < candidate.length){
                answer = candidate.length;
                maxWidth = width;
            }   
        }
    }
    return answer;
}

function isPalindrome(chars, index1, index2){
    return chars[index1] === chars[index2] ? true : false;
}