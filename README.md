# Chatbots con IA · Estrategia Digital Estrella

Landing page estática del servicio de diseño de chatbots con inteligencia artificial. HTML, CSS y JavaScript sin frameworks ni paso de compilación, lista para Cloudflare Pages.

## Estructura

```
.
├── index.html      Página completa, metadatos SEO y Open Graph y datos estructurados JSON-LD
├── styles.css      Estilos (mobile first)
├── script.js       Demo de chat simulada, acordeón de preguntas y animaciones al hacer scroll
├── robots.txt      Permite el rastreo
├── llms.txt        Resumen del servicio para motores de IA
├── README.md
└── assets/
    ├── logo-rojo.png   Cabecera
    ├── logo-negro.png  Pie
    ├── banner.png      Hero
    ├── favicon.png
    └── og-image.png    Imagen para redes sociales
```

## Publicar en Cloudflare Pages

1. Conecta el repositorio de GitHub en Cloudflare Pages.
2. Framework: ninguno. Comando de compilación: vacío. Directorio de salida: `/`.

## Pendiente

- Añadir en `assets/` la imagen que falta: `og-image.png`.

## Vista previa en local

```
python3 -m http.server 8080
```

Y abre http://localhost:8080
