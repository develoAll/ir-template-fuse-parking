FROM node:20-alpine3.17 AS build

#ARG SPRING_PROFILES_ACTIVE

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
#RUN npm install --legacy-peer-deps
COPY . /app

#RUN npm run build-${SPRING_PROFILES_ACTIVE}

# RUN if [ ${SPRING_PROFILES_ACTIVE} = "qa" ] ; then \
#         npm run build-qa ; \
#     else \
#         npm run build-prod ; \
#     fi

# Etapa  Configurar Nginx para servir la aplicación
FROM nginx:stable-alpine3.17-slim

# Copia los archivos compilados de la etapa de compilación al directorio del servidor Nginx
# /*** __MODIFY__ (path) ***/
COPY --from=build /app/dist/ /usr/share/nginx/html/parking/

# Copia un archivo de configuración personalizado para Nginx
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expone el puerto ${projectPort} para que la aplicación sea accesible
# /*** __MODIFY__ (port) ***/
EXPOSE 4207