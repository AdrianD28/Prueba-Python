def encontrar_subset(M, N):
    vistos = set()
    for numero in M:
        complemento = N - numero
        if complemento in vistos:
            return [complemento, numero]       
        vistos.add(numero)
    
    return []
