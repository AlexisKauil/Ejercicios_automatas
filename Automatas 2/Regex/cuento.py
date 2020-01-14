import re #librerias de expresiones regulares

path = "Nuez.txt"

try:
    archivo = open (path,'r')
except:
    print ("El archivo que intentas abrir no existe!")
    quit()

texto = ""

for linea in archivo:
    texto += linea

print (texto)

patron = r"\a[aeiou]\w+"
result = re.findall(patron,texto)

print ("\n resultado de busqueda", result)

patron = "\n"
result = re.split(patron,texto)

print ("\n resultado de busqueda", result)

patron = "nuez"
result = re.sub(patron, "Puerco Araña",texto)

print ("\n Resultado de busqueda", result)