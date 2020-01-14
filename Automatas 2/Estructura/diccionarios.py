

alumnos = {
    "F0007" : "Miguel Martin",
    "x9999" : "Maria Rodriguez"
}

alumnos ["M001"]= "Enrique Perez",
alumnos ["FXXX"]= "Jhoana Riquelme"

dias = {
    "enero":31,
    "febrero":28,
    "marzo":31,
    "abril":30,
    "mayo":30,
    "junio":31,
    "julio ":31,
    "agosto":31,
    "septiembre":30,
    "octubre":31,
    "noviembre" :30,
    "diciembre":31

}

mes = input ("Enter a mes: ")

print ("El mes tiene", dias[mes],"dias")

for key in dias:
    print (key,"\t", dias[key])


