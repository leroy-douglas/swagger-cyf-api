const routeList = require("./routelist");

const Router = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const { serve, setup } = require('swagger-ui-express');
const router = Router();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Code Your Future  API Documentation Server',
        version: '1.0.0',
        description:
            'This is the live document page that lists the APIs for Code Your Future applications.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
    },    
    /*
    components: {
        securitySchemes: {
            token: {
                type: 'http',
                scheme: 'bearer',
                in: 'header',
                bearerFormat: 'JWT'
            },
        }
    },
    
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Local Development server',
        },
    ],
    */
    
};
const DisableTryItOutPlugin = function() {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false
        }
      }
    }
  }
}

const options = {
    swaggerDefinition,
    apis: routeList   
};

const swaggerUiOpts = {
    swaggerOptions: {
    tryItOutEnabled: false,
    // supportedSubmitMethods: []
  },
    //customCss: '.swagger-ui .topbar { background-color: blue }'
}

//console.log("swagger.js: ",__dirname)
//const swaggerSpec = swaggerJSDoc(options);

router.use('/', serve);
router.get('/', setup( swaggerJSDoc(options, swaggerUiOpts) ));

module.exports = router;