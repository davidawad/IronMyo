import subprocess

cmd = "node hi"
# no block, it start a sub process.
p = subprocess.Popen(cmd , shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# and you can block util the cmd execute finish
p.wait()
# or stdout, stderr = p.communicate()

with open("ex.txt", "r") as f:
    stockPrice = f.read();
    
print stockPrice
