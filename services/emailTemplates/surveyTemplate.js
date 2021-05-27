const keys = require("../../config/keys");
module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like to your input!</h3>
          <p>Please anwser the following question:</p>
          <p>${survey.body}</p>
          <div>
            <span><a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a></span><span style="margin-left: 10px;"><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></span>
          </div>
        </div>
      </body>
    </html>
  `;
};
