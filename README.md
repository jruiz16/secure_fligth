# secure_fligth

# Comando para login en docker hub
kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=username --docker-password=pass --docker-email=correo -n secure-flight

# Comando para exponer el servicio de APP en local por el puerto 9081
kubectl port-forward service/express-app-service 9081:8083 -n secure-flight