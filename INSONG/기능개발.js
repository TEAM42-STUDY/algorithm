function solution(progresses, speeds) {
  let answer = [];

  while (speeds.length > 0) {
    // 스피드 배열을 기준으로 0이되면 종료
    for (let i = 0; i < speeds.length; i++) {
      // 각 스피드에 맞게 기능을 하나씩 추가
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }
  return answer;
}
