import * as vscode from 'vscode';
import snippets from './snippets';

export function activate(context: vscode.ExtensionContext) {

	snippets.forEach(snippet => {
		context.subscriptions.push(snippet);
	});

}

export function deactivate() {}