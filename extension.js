const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, new view "My view" is added to the explorer section!'
  );

  const disposable1 = vscode.commands.registerCommand(
    "myview.button1",
    function () {
      vscode.window.showInformationMessage("Clicked button1!");
      console.log("Button1");
    }
  );
  const disposable2 = vscode.commands.registerCommand(
    "myview.button2",
    function () {
      vscode.window.showInformationMessage("Clicked button2!");
      console.log("Button2");
    }
  );

  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
