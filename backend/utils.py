

def getSecretKey():
    with open('backend/secret.txt','r') as f:
        return f.readline()