const assert = require("assert");

function solution(record) {
  const id2nick = {};
  const answer = [];
  for (let i = 0; i < record.length; i++) {
    const [action, id, nick] = record[i].split(" ");
    switch (action) {
      case "Enter":
        id2nick[id] = nick;
        answer.push([id, true]);
        break;
      case "Change":
        id2nick[id] = nick;
        break;
      case "Leave":
        answer.push([id, false]);
        break;
    }
  }

  const enter = (nick) => `${nick}님이 들어왔습니다.`;
  const leave = (nick) => `${nick}님이 나갔습니다.`;
  return answer.map(([id, isEnter]) =>
    isEnter ? enter(id2nick[id]) : leave(id2nick[id])
  );
}

const tc = solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
assert.deepEqual(tc, [
  "Prodo님이 들어왔습니다.",
  "Ryan님이 들어왔습니다.",
  "Prodo님이 나갔습니다.",
  "Prodo님이 들어왔습니다.",
]);
