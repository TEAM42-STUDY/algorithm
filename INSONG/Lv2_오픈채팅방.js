function solution(record) {
  const idDic = {};
  const toDic = record.filter(value => value.split(' ')[0] !== 'Leave');
  const result = record.filter(value => value.split(' ')[0] !== 'Change');

  toDic.forEach(value => {
    const [_, id, nickname] = value.split(' ');
    idDic[id] = nickname;
  });

  return result.map(value => {
    const [command, id] = value.split(' ');
    return command === 'Enter' ? `${idDic[id]}님이 들어왔습니다.` : `${idDic[id]}님이 나갔습니다.`;
  });
}
