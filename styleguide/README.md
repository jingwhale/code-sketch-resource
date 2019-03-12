# Styleguide
For a detailed explanation on how things work, checkout the [code-sketch-resource Readme](https://www.yuque.com/jingwhale/blog/do37mc)._

## How to use

Download the project:

```bash
https://github.com/jingwhale/code_sketch_resource/tar.gz/master
cd styleguide
```

or [clone the repo](https://github.com/jingwhale/code_sketch_resource):
```bash
git clone https://github.com/jingwhale/code_sketch_resource
cd styleguide
```

Install the dependencies

```bash
npm install
```

Run with live reloading in Sketch, in terminal:

```bash
npm run render
```

or, open Sketch and navigate to `Plugins → react-sketchapp: Styleguide`

## [The idea behind the project](https://www.yuque.com/jingwhale/component/artboards/59671)

The reason we started `react-sketchapp` was to build dynamic styleguides! This is an example showing how to quickly render rich styleguides from JavaScript design system definition. It uses `flow` to enforce correctness, and `chroma-js` to dynamically generate color contrast labels.

![examples-styleguide-palette](https://cdn.nlark.com/yuque/0/2019/png/120638/1552048817637-6e5333e1-2958-4740-8029-f6f4714cabbb.png)

![examples-styleguide-palette](https://cdn.nlark.com/yuque/0/2019/png/120638/1552049054577-d9c13c5f-fe5d-4a1f-af47-577ed3e7596d.png)
