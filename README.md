# Report-with-AntDesign
## Introduction
The general idea is to render html as pdf files using `phantomJS`.
The dom elements will be created using Javascript, just like what we do using `React`.
We'll create a JS bundle and dispach actions when `phantomJS` is evaluating the html page.
The `phantomjs-node` package is used as a wrapper to bridge `node` and `phantomJS`.

In the `PhantomReport` directory, run `npm install` and `node src/`. 
You'll see a sample report with a button and a chart in the `output` directory.  
## Development Steps
- Report layout should be developed and tested in the `Report` directory.
I used create-react-app as the boilerplate and installed `@ihealth/ihcharts` and
`antd`. Please check [this page](https://ant.design/docs/react/use-with-create-react-app) to see how you can use antd in `create-react-app`
and override antd's default styles. I've done the setup.
 - By creating an output target in the webpack config files (for both environments),
 we are able to expose some methods to dispatch actions. 
 In my current setup, the exposed method is `report`.
 For simplicity, plain react was used in this project,
  but to share components with the front end code and to dispatch actions properly,
  `redux` can be considered.
 - In `/public/index.html`, write an `window.onload` function to dispatch the actions.
 A proper report will be displayed on your browser. You'll need to set a zoom factor 0.68 on
  the html to scale it down, because the report rendered by `phantomJS` is always bigger.
  - Now remove the `window.onload` method and run `npm run build`. 
   Open`build/index.html`, change the absolute path from `/static/*` to `./static/*`.
   Then copy everything in the `build` folder
  to `PhantomReport/static`.
  - Now you need to use `phantomJS` to open the index.html page and in your`page.evaluate` method,
  you'll be able to dispatch actions, much like what's done on the `window.onload` function.
  When you need to debug the report, you can always debug in your browser.
  - One reminder is that for deployment, in the linux environment,
  you'll need to manually install `phantomJS`. But on your local machine `phantomJS` is automatically installed when you install the `phantomjs-node` package.
  
  Special thanks to Zhengda for his awesome idea!
 

   
