function generateLog(command, uid, table){
    return function(){
        return command === 'Enter' ? `${table.get(uid)}님이 들어왔습니다.` : `${table.get(uid)}님이 나갔습니다.`;
    }
}

function solution(record) {
    var answer = [];
    
    const table = new Map();
    
    record.forEach(el => {
        const [command, uid, nickName] = el.split(' ');
        nickName && table.set(uid, nickName);
        command !== 'Change' && answer.push(generateLog(command, uid, table));
    });
    
    return answer.map(el => el());
}