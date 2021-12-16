const assert = require("assert");

String.prototype.trimDot = function () {
  return this.slice(this[0] === "." ? 1 : 0).slice(
    0,
    this[this.length - 1] === "." ? this.length - 1 : undefined
  );
};

function solution(new_id) {
  const s = new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z\d-_\.]/g, "") // 2단계
    .replace(/\.+/g, ".") // 3단계
    .trimDot(); // 4단계
  const ss = s.length ? s : "a"; // 5단계
  const sss = ss.slice(0, 15).trimDot(); // 6단계
  return sss.length <= 2 ? sss.padEnd(3, sss[sss.length - 1]) : sss; // 7단계
}

function solution2(new_id) {
  // 프로그래머스에서 본 정규식 쥐어짜기
  const s = new_id
    .toLowerCase()
    .replace(/[^a-z\d-_\.]*/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a");
  return s.length <= 2 ? s.padEnd(3, s[s.length - 1]) : s;
}

assert.equal(solution("...!@BaT#*..y.abcdefghijklm"), "bat.y.abcdefghi");
assert.equal(solution("z-+.^."), "z--");
assert.equal(solution("=.="), "aaa");
assert.equal(solution("123_.def"), "123_.def");
assert.equal(solution("abcdefghijklmn.p"), "abcdefghijklmn");
