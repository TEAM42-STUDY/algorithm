function solution(new_id) {
    const step1 = new_id.toLowerCase().split('');
    const step2 = step1.filter(el => {
        const ascii = el.charCodeAt(0);
        return (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57) || (el === '.' || el === '-' || el === '_')
    });
    const step3 = step2.length ? step2.reduce((array, item) =>  array.length && array[array.length - 1] === '.' && item === '.' ? array : [...array, item], []) : step2;
    const step4 = step3.length && step3[step3.length - 1] === '.' ? step3.splice(0, step3.length - 1) : step3;
    const step4_2 = step4.length && step4[0] === '.' ? step4.splice(1, step4.length) : step4;
    const step5 = !step4_2.length ? ['a'] : step4_2;
    const step6 = step5.length > 15 ? step5.splice(0,15) : step5;
    const step7 = step6.length && step6[step6.length - 1] === '.' ? step6.splice(0, step6.length - 1) : step6;
    while(step7.length <= 2){
        step7.push(step7[step7.length - 1])
    }
    return step7.join('');
}