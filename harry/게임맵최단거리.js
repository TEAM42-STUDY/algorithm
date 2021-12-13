class Queue {
  constructor() {
    this._size = 0;
    this.head;
    this.tail;
  }

  get size() {
    return this._size;
  }

  enQueue(value) {
    const node = { value };
    if (this._size === 0) {
      // 사이즈 0이면 헤드 설정
      this.head = node;
    } else {
      this.tail.next = node; // 기존 마지막 노드에 연결
    }
    this.tail = node; // 마지막 노드를 입력 값으로 변경
    this._size++;
  }

  deQueue() {
    if (this._size === 0) return;
    const result = this.head.value;
    if (this.head.value === this.tail.value) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return result;
  }
}
function solution(maps) {
  const queue = new Queue();
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  queue.enQueue([0, 0]);
  // bfs
  while (queue.size > 0) {
    const [x, y] = queue.deQueue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
      if (maps[nx][ny] !== 1) continue;
      maps[nx][ny] = maps[x][y] + 1;
      queue.enQueue([nx, ny]);
    }
  }
  const answer = maps[maps.length - 1][maps[0].length - 1];
  return answer > 1 ? answer : -1;
}
