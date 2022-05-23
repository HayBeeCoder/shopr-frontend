import { defineConfig } from 'vite'

/*
  removed red squiggly line by adding 
  "allowSyntheticDefaultImports": true;
   to tsconfig.node.json file and reopen vscode window
*/
import svgrPlugin from "vite-plugin-svgr" 
// import  svgrPlugin from 'vite-plugin-svgr'

import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgrPlugin({
    svgrOptions: {
      icon: true,
      
      // ...svgr options (https://react-svgr.com/docs/options/)
    }
  }),]
})
