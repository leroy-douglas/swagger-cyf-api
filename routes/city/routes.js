// city
console.log("/post - city")
/**
 * @swagger
 * /city:
 *   post:
 *     tryItOutEnabled: false
 *     summary: Add  a  new city
 *     description: Add a new city
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description:  city name.
 *                 example: Berlin
 *               email:
 *                   type: string
 *                   description: The Code Your Future city ID.
 *                   example: berlin@codeyourfuture.io
 *               slackChannel:
 *                 type: string
 *                 description: The city's channel name on the Slack platform.
 *                 example: Berlin
 *               slackChannelId:
 *                 type: string
 *                 description: The city's Slack channel id.
 *                 example: GGVV45PJ7
 *
 *
 *
 *     security:
 *	     - token: []
 *     responses:
 *       200:
 *         description: A city object.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The user ID.
 *                       example: 5c40ba625da199001c70b5fb
 *                     visibleIn:
 *                         type: array
 *                         items:
 *                           type: string
 *                         description: The list of applications selected from
 *                            VOLUNTEER_FORM, APPLICATION_PROCESS_FORM
 *                         example: [ VOLUNTEER_FORM, APPLICATION_PROCESS_FORM ]
 *
 *
 *
 *
 *
 *
 *                     name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Berlin
 *                     email:
 *                       type: string
 *                       description: The Code Your Future city ID.
 *                       example: berlin@codeyourfuture.io
 *                     slackChannel:
 *                       type: string
 *                       description: The city's channel name on the Slack platform.
 *                       example: Berlin
 *                     slackChannelId:
 *                       type: string
 *                       description: The city's Slack channel id.
 *                       example: GGVV45PJ7
 *                     createdAt:
 *                       type: string
 *                       description: Updated field.
 *                       example: 2019-10-31T08:39:10.820Z
 *                     updatedAt:
 *                       type: string
 *                       description: Updated field.
 *                       example: 2019-10-31T08:39:10.820Z
 *                     __v:
 *                       type: string
 *                       description: The Code Your Future city ID.
 *                       example: 0
 */

/*
* [
               "VOLUNTEER_FORM",
               "APPLICATION_PROCESS_FORM",
               "EVENT_LIST",
               "DASHBOARD"
           ]
           */