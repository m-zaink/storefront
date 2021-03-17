const express = require('express');

const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');
const landingRouter = require('./routers/landing');

const app = express();

app.use(adminRouter.baseRoute, adminRouter.router);
app.use(shopRouter.baseRoute, shopRouter.router);
app.use(landingRouter.baseRoute, landingRouter.router);

app.listen(process.env.PORT || 3000);