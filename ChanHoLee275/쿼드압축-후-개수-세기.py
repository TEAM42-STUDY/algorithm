# 2의 n제곱의 결과를 4등분하는 함수
def divideFourParticle(matrix):
    length = int(len(matrix)/2)
    if length == 1:
        return [[matrix[0][0]], [matrix[0][1]], [matrix[1][0]], [matrix[1][1]]]
    part1 = list(map(lambda x: x[0:length], matrix[0:length]))
    part2 = list(map(lambda x: x[length:], matrix[0:length]))
    part3 = list(map(lambda x: x[0:length], matrix[length:]))
    part4 = list(map(lambda x: x[length:], matrix[length:]))
    return [part1, part2, part3, part4]

# 압축 가능한지 확인하는 함수
def isCompressionPossible(matrix):
    totalSum = sum(list(map(lambda x: sum(x), matrix)))
    if totalSum == 0:
        return 0
    elif totalSum == len(matrix)**2:
        return 1
    else:
        return 2

def setNextDividedMatrix(target):
    dividedMatrix = []
    for i in target:
        parts = divideFourParticle(i)
        for j in parts:
            dividedMatrix.append(j)
    return dividedMatrix

def solution(arr):
    answer = [0, 0]
    # 전부 같은 경우 확인
    flag = isCompressionPossible(arr)
    if flag == 0:
        return [1,0]
    elif flag == 1:
        return [0,1]
    # 분할정복을 하기 위한 행렬 분할
    dividedMatrix = divideFourParticle(arr)
    # 더 이상 나룰 행렬이 없을 때 까지, 나눔
    while len(dividedMatrix) != 0 and (len(dividedMatrix[0]) != 1):
        nextTarget = []
        for i in dividedMatrix:
            flag = isCompressionPossible(i)
            if flag == 0:
                answer[0] = answer[0] + 1
            elif flag == 1:
                answer[1] = answer[1] + 1
            else:
                nextTarget.append(i)
        dividedMatrix = setNextDividedMatrix(nextTarget)

    if len(dividedMatrix) == 0:
        return answer
    # 한 개로 나누어진 결과물들을 answer에 합침
    for i in dividedMatrix:
        for j in i:
            if j == 0:
                answer[0] = answer[0] + 1
            else:
                answer[1] = answer[1] + 1
    return answer