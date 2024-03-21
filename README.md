# secure_fligth

# Comando para login en docker hub
kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=username --docker-password=pass --docker-email=correo -n secure-flight

# Secuencia para aplicar los deploymeny con kubectl apply -f <path deployment>
1. backend\deploy\namespace.yaml
2. backend\deploy\mysql\configmap.yaml
3. backend\deploy\mysql\deployment.yaml
4. backend\deploy\mysql\service.yaml
5. backend\deploy\backend\deployment.yaml
6. backend\deploy\backend\service.yaml
7. backend\deploy\frontend\secret.yaml
8. backend\deploy\frontend\deployment.yaml
9. backend\deploy\frontend\service.yaml

# Comando para exponer el servicio de APP en local por el puerto 8083
kubectl port-forward service/express-app-service 8083:8083 -n secure-flight

# Comando para exponer el servicio de Front en local por el puerto 8085
kubectl port-forward service/express-app-service 8085:8085 -n secure-flight