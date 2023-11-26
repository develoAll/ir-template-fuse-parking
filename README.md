# Identificador 

El identificador ```__MODIFY__``` te permite encontrar las líneas de código donde se encuentra el punto que debes modificar. Seguido por paréntesis indicando especificamente cuál es cambio. Por ejemplo:

* ```/*** __MODIFY__ (port) ***/ ``` (Te indica que en esta línea de código se debe modificar el puerto)
* ```/*** __MODIFY__ (path) ***/``` (Te indica que en esta línea de código se debe modificar el path de salida que va a ser reconocido por el padre [ir-hr-backoffice-webapp] quien encapsula todos los proyectos hijos [tu proyecto micro-webapp])
* Etc

### Archivos JSON a modificar 

##### package.json

```bash
    "scripts": { 
        "ng": "ng",
        "start": "ng serve",
        "start-dev": "ng serve -c=dev --port=4203 -o", /*** __MODIFY__ (port) ***/
        "start-qa": "ng serve -c=qa --port=4203", /*** __MODIFY__ (port) ***/
        "start-prod": "ng serve -c=prod --port=4203", /*** __MODIFY__ (port) ***/
        "build": "ng build",
        "build-dev": "ng build production=false",
        "build-qa": "ng build --configuration=qa --base-href /absences/", /*** __MODIFY__ (path) ***/
        "build-prod": "ng build --configuration=prod --base-href /absences/", /*** __MODIFY__ (path) ***/
        "watch": "ng build --watch --configuration development",
        "test": "ng test",
        "run:all": "node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js"
    },
```

##### angular.json

```bash
{
	"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
	"version": 1,
	"newProjectRoot": "projects",
	"projects": {
		"ir-hr-absences-micro-webapp": { /*** __MODIFY__ (webapp project name) ***/
			"projectType": "application",
			"schematics": {
				"@schematics/angular:component": {
					"style": "scss",
					"standalone": true
				},
				"@schematics/angular:directive": {
					"standalone": true
				},
				"@schematics/angular:pipe": {
					"standalone": true
				}
			},
			"root": "",
			"sourceRoot": "src",
			"prefix": "app",
			"architect": {
				"build": {
					"builder": "ngx-build-plus:browser",
					"options": {
						"outputPath": "dist",
						"index": "src/index.html",
						"main": "src/main.ts",
						"polyfills": [
							"zone.js"
						],
						"tsConfig": "tsconfig.app.json",
						"inlineStyleLanguage": "scss",
						"allowedCommonJsDependencies": [
							"apexcharts",
							"highlight.js",
							"crypto-js/enc-utf8",
							"crypto-js/hmac-sha256",
							"crypto-js/enc-base64",
							"flat",
							"quill"
						],
						"assets": [
							"src/favicon-16x16.png",
							"src/favicon-32x32.png",
							"src/assets",
							{
								"glob": "_redirects",
								"input": "src",
								"output": "/"
							}
						],
						"stylePreprocessorOptions": {
							"includePaths": [
								"src/@fuse/styles"
							]
						},
						"styles": [
							"src/@fuse/styles/tailwind.scss",
							"src/@fuse/styles/themes.scss",
							"src/styles/vendors.scss",
							"src/@fuse/styles/main.scss",
							"src/styles/styles.scss",
							"src/styles/tailwind.scss",
							"node_modules/ngx-spinner/animations/ball-scale-multiple.css",
							"node_modules/ngx-toastr/toastr.css"
						],
						"scripts": [],
						"extraWebpackConfig": "webpack.config.js",
						"commonChunk": false
					},
					"configurations": {
						"prod": {
							"fileReplacements": [
								{
									"replace": "src/environments/environment.ts",
									"with": "src/environments/environment.prod.ts"
								}
							],
							"budgets": [
								{
									"type": "initial",
									"maximumWarning": "100mb",
									"maximumError": "200mb"
								},
								{
									"type": "anyComponentStyle",
									"maximumWarning": "60kb",
									"maximumError": "60kb"
								}
							],
							"optimization": true,
							"outputHashing": "all",
							"sourceMap": false,
							"namedChunks": false,
							"extractLicenses": true,
							"vendorChunk": false,
							"buildOptimizer": true,
							"extraWebpackConfig": "webpack.prod.config.js"
						},
						"qa": {
							"fileReplacements": [
								{
									"replace": "src/environments/environment.ts",
									"with": "src/environments/environment.qa.ts"
								}
							],
							"extraWebpackConfig": "webpack.qa.config.js"
						},
						"dev": {
							"buildOptimizer": false,
							"optimization": false,
							"vendorChunk": true,
							"extractLicenses": false,
							"sourceMap": true,
							"namedChunks": true,
							"fileReplacements": [
								{
									"replace": "src/environments/environment.ts",
									"with": "src/environments/environment.dev.ts"
								}
							],
							"extraWebpackConfig": "webpack.config.js"
						}
					}
				},
				"serve": {
					"builder": "ngx-build-plus:dev-server",
					"options": {
						"browserTarget": "ir-hr-absences-micro-webapp:build" /*** __MODIFY__ (webapp project name) ***/
					},
					"configurations": {
						"prod": {
							"browserTarget": "ir-hr-absences-micro-webapp:build:prod", /*** __MODIFY__ (webapp project name) ***/
							"extraWebpackConfig": "webpack.prod.config.js"
						},
						"dev": {
							"browserTarget": "ir-hr-absences-micro-webapp:build:dev", /*** __MODIFY__ (webapp project name) ***/
							"extraWebpackConfig": "webpack.config.js"
						},
						"qa": {
							"browserTarget": "ir-hr-absences-micro-webapp:build:qa", /*** __MODIFY__ (webapp project name) ***/
							"extraWebpackConfig": "webpack.qa.config.js"
						}
					}
				},
				"extract-i18n": {
					"builder": "ngx-build-plus:extract-i18n",
					"options": {
						"browserTarget": "ir-hr-absences-micro-webapp:build", /*** __MODIFY__ (webapp project name) ***/
						"extraWebpackConfig": "webpack.config.js"
					}
				},
				"test": {
					"builder": "@angular-devkit/build-angular:karma",
					"options": {
						"polyfills": [
							"zone.js",
							"zone.js/testing"
						],
						"tsConfig": "tsconfig.spec.json",
						"inlineStyleLanguage": "scss",
						"assets": [
							"src/favicon-16x16.png",
							"src/favicon-32x32.png",
							"src/assets"
						],
						"styles": [
							"src/styles/styles.scss"
						],
						"scripts": []
					}
				}
			}
		}
	}
}
```

# Consideraciones 

##### Barra de Menú  [ uso opcional ]
En el modo ```dev```, por ayuda al desarrollador, se proporciona el mismo menú latera de BackOffice donde encontrarás las opciones de cada módulo. Si deseas ver las opciones del menú del módulo de tu proyecto, simplemente agrégalo en la BD de Meys.

No te preocupes por tocar el código html. Al desplegar a QA el panel del menú no se visualizará en el BackOffice 🤝.

###### ... por el momento
Antes de desplegar a QA, tomar en cuenta las anotaciones del archivo ```layout.component.ts``` donde el identificador ```__MODIFY__``` sugiere que ciertas porciones de código se deben comentar antes de hacer el despliegue. En el modo ```dev``` ese codigo debe volver a descomentarse. 

# Inicialización

#### Descarga de paquetes

```bash
npm i --legacy-peer-deps
```

#### Run

```bash
npm run start-dev
```

#### Ingresa a tu web
No te olvides de generar el tokenSeguridad 
######[ Ver Postman [Api Seguridad  > Login Usuario](https://api.postman.com/collections/8995175-29fda54d-a591-4dc4-8d8d-3ada1583cc67?access_key=PMAT-01HAQYWN4JNH74Q9FTFVNQ97N3) ]

```bash
http://localhost:4203/session-verification?jwt=tokenSeguridad
```