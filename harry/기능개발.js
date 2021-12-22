function solution(progresses, speeds) {
  const answer = [];
  const doneDays = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
  let deploy = 1;
  let doneDay = doneDays[0];
  for (let i = 1; i < doneDays.length; i++) {
    if (doneDays[i] <= doneDay) {
      deploy += 1;
    } else {
      answer.push(deploy);
      deploy = 1;
      doneDay = doneDays[i];
    }
  }
  answer.push(deploy);
  return answer;
}
