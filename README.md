¡Aquí tienes el contenido del `README.md` listo para copiar y pegar directamente en tu proyecto, sin explicaciones adicionales!

---

```markdown
# 🧠 Teachable Machine Image Model - Webcam Classifier

Este proyecto permite clasificar imágenes en tiempo real usando un modelo entrenado con [Teachable Machine](https://teachablemachine.withgoogle.com/). Utiliza la webcam del navegador para detectar objetos o gestos y muestra las predicciones con barras de porcentaje estilizadas.

## ✨ Características

- Interfaz centrada y amigable en tonos rosados.
- Reconocimiento en tiempo real con webcam.
- Carga dinámica del modelo desde Teachable Machine.
- Barras de progreso animadas para mostrar la probabilidad de cada clase.
- El botón `Start` desaparece al activar la cámara.

## 📁 Estructura

```

/proyecto/
├── index.html         # Página principal
├── style.css          # Estilos personalizados
└── README.md          # Documentación del proyecto

````

## 🚀 Cómo usar

### 1. Entrena y exporta tu modelo

1. Ve a [Teachable Machine](https://teachablemachine.withgoogle.com/).
2. Entrena tu modelo de imagen.
3. Exporta como `Web`.
4. Copia la URL del modelo (ej. `https://teachablemachine.withgoogle.com/models/xxxxxx/`).

### 2. Configura el código

En `index.html`, reemplaza la línea:

```javascript
const URL = "https://teachablemachine.withgoogle.com/models/TU_MODELO/";
````

con la URL de tu modelo.

### 3. Abre el proyecto

1. Abre `index.html` en un navegador moderno (Chrome recomendado).
2. Da permiso para usar la cámara.
3. Haz clic en `Start`.
4. La clasificación aparecerá en tiempo real con barras animadas.

## ⚙️ Tecnologías usadas

* HTML, CSS y JavaScript
* [TensorFlow.js](https://www.tensorflow.org/js)
* [Teachable Machine](https://teachablemachine.withgoogle.com/)
* Webcam API

## 📝 Personalización

* Cambia los colores y estilos en `style.css`.
* Puedes ajustar el tamaño del video en esta línea:

```javascript
webcam = new tmImage.Webcam(200, 200, flip);
```

## 📌 Notas

* Este proyecto **no incluye** una clase llamada `"humano"`, pero puedes agregar nuevas clases desde Teachable Machine y volver a exportar el modelo sin problemas.
* Todo el contenido del modelo (número de clases, nombres, predicciones) se carga dinámicamente.

## 📜 Licencia

Este proyecto es libre de usar y modificar para fines educativos y personales.




