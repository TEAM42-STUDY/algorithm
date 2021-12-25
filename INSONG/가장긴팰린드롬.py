def isPalindrome(w):
    if w == w[::-1]:
        return True
    return False

def solution(s):
    if len(s) < 2 or s == s[::-1]:
        return len(s)
    
    L = len(s)
    step = L
    answer = []

    while step > 1:
        for i in range(L - step + 1):
            if isPalindrome(s[i:i+step]):
                answer.append(len(s[i:i+step]))
        step -= 1
    
    return max(answer) if answer else 1