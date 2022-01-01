function solution(record) {
  const result = [];
  const userObj = {};
  const textObj = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  for (const text of record) {
    const [keyword, id, name] = text.split(' ');
    if (keyword === 'Leave') continue;
    userObj[id] = name;
  }

  for (const text of record) {
    const [keyword, id, _] = text.split(' ');
    if (keyword === 'Change') continue;
    result.push(userObj[id] + textObj[keyword]);
  }

  return result;
}
