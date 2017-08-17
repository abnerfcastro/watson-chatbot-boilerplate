/*!
 * ./server/routes.js
 * 
 * Declares the Express routes for the server
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

var CheckWorkspaceMiddleware = (req, res, next) => {
    var workspace = process.env.WORKSPACE_ID;
    if (!workspace || workspace === '<workspace-id>') {
        console.error('WORKSPACE ID not set');
        return res.json({
            'output': {
                'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
            }
        });
    } else {
        // Attach WorkspaceID to request object
        req.workspaceId = workspace;
        next();
    }
}

module.exports = (app, conversation) => {

    app.post('/api/message', CheckWorkspaceMiddleware, (req, res) => {
        var $body = req.body;
        var input = {
            text: $body.message
        };
        var payload = {
            workspace_id: req.workspaceId,
            context: $body.context || {},
            input: input || {}
        }

        conversation.message(payload, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(err.code || 500).json(err);
            }
            res.json(data);
        });
    });

}