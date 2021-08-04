import { languages, CompletionItem, SnippetString, MarkdownString, Disposable } from 'vscode';
import snippets from './data/snippets';

const registers: Disposable[] = [];

add('javascript');
add('css');
add('html');
add('others');

function add(language: string) {
	registers.push(languages.registerCompletionItemProvider(language, {
		provideCompletionItems() {

			const result: CompletionItem[] = [];

			snippets.forEach(snippet => {

				if (snippet.type !== language && language !== 'others')
					return;
 
				const completion = new CompletionItem(snippet.text);
				completion.insertText = new SnippetString(snippet.code);
				completion.documentation = new MarkdownString(typeof snippet.markdown === 'string' ? snippet.markdown : snippet.text);

				result.push(completion);
			});

			return result;
		}
	}));
}

export default registers;