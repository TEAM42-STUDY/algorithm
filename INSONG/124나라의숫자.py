def convert(n, base):
    q, r = divmod(n-1, base)
    if q == 0:
        return "124"[r]
    else:
        return convert(q, base) + "124"[r]

def solution(n):
    if n <= 3:
        return "124"[n-1]
    else:
        return convert(n, 3)