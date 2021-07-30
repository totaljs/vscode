interface Snippet {
	search: string,
	text: string,
	code: string,
	ch: number,
	type?: string,
	line?: number,
	priority?: number,
	special?: number
}

const SNIPPETS: Snippet[] = [];

// Copy pasted snippets from - https://github.com/totaljs/code/blob/master/public/js/editor.js
// Last import - 26.07.2021

// START
SNIPPETS.push({ type: 'css', search: '@media xs mobile', text: '<b>media: XS</b>', code: '@media (max-width:768px) {\n\t{0}\n}', ch: 29 });
SNIPPETS.push({ type: 'css', search: '@media sm mobile', text: '<b>media: SM</b>', code: '@media (max-width:991px) and (min-width:768px) {\n\t{0}\n}', ch: 47 });
SNIPPETS.push({ type: 'css', search: '@media md mobile', text: '<b>media: MD</b>', code: '@media (max-width:1199px) and (min-width:992px) {\n\t{0}\n}', ch: 48 });
SNIPPETS.push({ type: 'css', search: '@media lg mobile', text: '<b>media: LG</b>', code: '@media (min-width:1200px) {\n\t{0}\n}', ch: 26 });
SNIPPETS.push({ type: 'css', search: 'line height', text: '<b>line-height</b>', code: 'line-height: px;', ch: 14 });
SNIPPETS.push({ type: 'css', search: 'position relative inline block', text: 'display: <b>inline-block</b>', code: 'position: relative; display: inline-block;', ch: 43 });
SNIPPETS.push({ type: 'css', search: 'position absolute', text: '<b>absolute</b>', code: 'position: absolute;', ch: 20 });
SNIPPETS.push({ type: 'css', search: 'position fixed', text: '<b>fixed</b>', code: 'position: fixed;', ch: 17 });
SNIPPETS.push({ type: 'css', search: 'position relative', text: '<b>relative</b>', code: 'position: relative;', ch: 20 });
SNIPPETS.push({ type: 'css', search: 'border-radius', text: '<b>border-radius</b>', code: 'border-radius: ;', ch: 16 });
SNIPPETS.push({ type: 'css', search: 'transparent', text: '<b>transparent</b>', code: 'transparent', ch: 12 });
SNIPPETS.push({ type: 'css', search: 'var radius', text: '<b>var(--radius)</b>', code: 'var(--radius)', ch: 14 });
SNIPPETS.push({ type: 'css', search: 'var color', text: '<b>var(--color)</b>', code: 'var(--color)', ch: 13 });
SNIPPETS.push({ type: 'css', search: 'border-top-left-radius', text: 'border-top-left-radius', code: 'border-top-left-radius: ', ch: 25 });
SNIPPETS.push({ type: 'css', search: 'border-top-right-radius', text: 'border-top-right-radius', code: 'border-top-right-radius: ', ch: 26 });
SNIPPETS.push({ type: 'css', search: 'border-bottom-left-radius', text: 'border-bottom-left-radius', code: 'border-bottom-left-radius: ', ch: 28 });
SNIPPETS.push({ type: 'css', search: 'border-bottom-right-radius', text: 'border-bottom-right-radius', code: 'border-bottom-right-radius: ', ch: 29 });
SNIPPETS.push({ type: 'css', search: 'font-size', text: '<b>font-size</b>', code: 'font-size: ;', ch: 12 });
SNIPPETS.push({ type: 'css', search: 'font-weight bold', text: '<b>font-weight: bold</b>', code: 'font-weight: bold;', ch: 19 });
SNIPPETS.push({ type: 'css', search: 'font-style italic', text: '<b>font-style: italic</b>', code: 'font-style: italic;', ch: 21 });
SNIPPETS.push({ type: 'css', search: 'display block', text: '<b>display: block</b>', code: 'display: block;', ch: 16 });
SNIPPETS.push({ type: 'css', search: 'background-color', text: '<b>background-color</b>', code: 'background-color: ;', ch: 19 });
SNIPPETS.push({ type: 'css', search: 'border', text: '<b>border</b>', code: 'border: ;', ch: 9 });
SNIPPETS.push({ type: 'css', search: 'vertical align top', text: '<b>vertical-align: top</b>', code: 'vertical-align: top;', ch: 21 });
SNIPPETS.push({ type: 'css', search: 'vertical align middle', text: '<b>vertical-align: middle</b>', code: 'vertical-align: middle;', ch: 24 });
SNIPPETS.push({ type: 'css', search: 'vertical align bottom', text: '<b>vertical-align: bottom</b>', code: 'vertical-align: bottom;', ch: 24 });
SNIPPETS.push({ type: 'css', search: 'background image picture url', text: '<b>background-image</b>', code: 'background: url() no-repeat 0 0;', ch: 17 });
SNIPPETS.push({ type: 'css', search: 'overflow hidden', text: '<b>overflow: hidden</b>', code: 'overflow: hidden;', ch: 18 });
SNIPPETS.push({ type: 'css', search: 'hellip overflow', text: '<b>hellip</b>', code: 'text-overflow: ellipsis; white-space: nowrap; overflow: hidden;', ch: 64 });
SNIPPETS.push({ type: 'css', search: 'text align center', text: '<b>text-align: center</b>', code: 'text-align: center;', ch: 20 });
SNIPPETS.push({ type: 'css', search: 'text align right', text: '<b>text-align: right</b>', code: 'text-align: right;', ch: 19 });
SNIPPETS.push({ type: 'css', search: 'text align left', text: '<b>text-align: left</b>', code: 'text-align: left;', ch: 18 });
SNIPPETS.push({ type: 'css', search: 'text align justify', text: '<b>text-align: justify</b>', code: 'text-align: justify;', ch: 21 });
SNIPPETS.push({ type: 'css', search: 'float left', text: '<b>float: left</b>', code: 'float: left;', ch: 13 });
SNIPPETS.push({ type: 'css', search: 'float right', text: '<b>float: right</b>', code: 'float: right;', ch: 14 });
SNIPPETS.push({ type: 'css', search: 'float none', text: '<b>float: none</b>', code: 'float: none;', ch: 13 });
SNIPPETS.push({ type: 'css', search: 'text decoration none', text: '<b>text-decoration: none</b>', code: 'text-decoration: none;', ch: 23 });
SNIPPETS.push({ type: 'css', search: 'text decoration underline', text: '<b>text-decoration: underline</b>', code: 'text-decoration: underline;', ch: 28 });
SNIPPETS.push({ type: 'css', search: 'text decoration line through', text: '<b>text-decoration: line-through</b>', code: 'text-decoration: line-through;', ch: 31 });
SNIPPETS.push({ type: 'css', search: 'text transform uppercase', text: '<b>text-transform: uppercase</b>', code: 'text-transform: uppercase;', ch: 27 });
SNIPPETS.push({ type: 'css', search: 'text transform lowercase', text: '<b>text-transform: lowercase</b>', code: 'text-transform: transform;', ch: 27 });
SNIPPETS.push({ type: 'css', search: 'linear gradient', text: '<b>linear-gradient</b>', code: 'background: linear-gradient(0deg,#F0F0F0,#D0D0D0);', ch: 34 });
SNIPPETS.push({ type: 'css', search: 'appearance', text: '<b>appearance</b>', code: 'appearance: ;', ch: 13 });
SNIPPETS.push({ type: 'css', search: '@keyframes', text: 'keyframes', code: '@keyframes  {\n\t0% {}\n\t50% {}\n\t100% {}\n}', ch: 12 });
SNIPPETS.push({ type: 'css', search: 'animation', text: 'animation', code: 'animation: NAME 1s infinite forwards;', ch: 12 });
SNIPPETS.push({ type: 'css', search: 'forwards', text: 'forwards', code: 'forwards', ch: 9 });
SNIPPETS.push({ type: 'css', search: '!important', text: '<b>!important</b>', code: '!important;', ch: 12 });
SNIPPETS.push({ type: 'css', search: 'radial gradient', text: '<b>radial</b>-gradient', code: 'background: radial-gradient(#F0F0F0,#D0D0D0);', ch: 29 });
SNIPPETS.push({ type: 'css', search: 'media', text: 'Media', code: '@media(max-width: 768px) {\n\n}', ch: 30 });
SNIPPETS.push({ type: 'html', search: '~PATH~', text: '<b>~PATH~</b>', code: '~PATH~', ch: 7 });
SNIPPETS.push({ type: 'html', search: 'link css', text: '<b>Link CSS</b>', code: '<link rel="stylesheet" href="/css/.css" />', ch: 35 });
SNIPPETS.push({ type: 'html', search: 'favicon', text: '<b>Favicon</b>', code: '<link rel="icon" href="" type="image/x-icon" />', ch: 24 });
SNIPPETS.push({ type: 'html', search: 'style', text: '<b>Inline style</b>', code: 'style=""', ch: 8 });
SNIPPETS.push({ type: 'html', search: 'style', text: '<b>Style</b>', code: '{0}<style></style>', ch: 8 });
SNIPPETS.push({ type: 'html', search: 'script', text: '<b>Script: JavaScript</b>', code: '<script></script>', ch: 9 });
SNIPPETS.push({ type: 'html', search: 'script', text: '<b>Script: HTML</b>', code: '<script type="text/html"></script>', ch: 26 });
SNIPPETS.push({ type: 'html', search: 'script', text: '<b>Script: Text</b>', code: '<script type="text/plain"></script>', ch: 27 });
SNIPPETS.push({ type: 'html', search: 'fa', text: '<b>Font-Awesome Icon</b>', code: '<i class="fa fa-"></i>', ch: 17 });
SNIPPETS.push({ type: 'html', search: 'jc', text: '<b>Component</b>', code: '<div data-jc="__"></div>', ch: 15 });
SNIPPETS.push({ type: 'html', search: '--', text: '<b>Component</b>', code: '<div data---="__"></div>', ch: 15 });
SNIPPETS.push({ type: 'html', search: 'br', text: '<b>&lt;br /&gt;</b>', code: '<br />', ch: 7 });
SNIPPETS.push({ type: 'html', search: 'scope', text: '<b>data-scope</b>', code: '<div data-scope=""></div>', ch: 18 });
SNIPPETS.push({ type: 'html', search: 'data-bind', text: '<b>data-bind</b>', code: '<div data-bind="__"></div>', ch: 17 });
SNIPPETS.push({ type: 'html', search: 'data-import', text: '<b>data-import</b>', code: '<div data-import="__"></div>', ch: 19 });
SNIPPETS.push({ type: 'html', search: 'link spa min css', text: 'Link: <b>spa.min@18.css</b>', code: '<link href="\/\/cdn.componentator.com/spa.min@18.css" rel="stylesheet" />', ch: 100 });
SNIPPETS.push({ type: 'html', search: 'scri' + 'pt spa min js', text: ('Scr' + 'ipt: <b>spa.min@18.js</b>'), code: ('<scr' + 'ipt src="\/\/cdn.componentator.com/spa.min@18.js"></scr' + 'ipt>'), ch: 100 });
SNIPPETS.push({ type: 'html', search: 'scri' + 'pt livereload', text: ('Scr' + 'ipt: <b>livereload.js</b>'), code: ('@{if DEBUG}<scr' + 'ipt src="\/\/cdn.componentator.com/livereload.js"></scr' + 'ipt>@{fi}'), ch: 100 });
SNIPPETS.push({ type: 'html', search: 'scri' + 'pt openplatform min js', text: ('Scr' + 'ipt: <b>openplatform.min@4.js</b>'), code: ('<scr' + 'ipt src="\/\/cdn.componentator.com/openplatform.min@4.js"></scr' + 'ipt>'), ch: 100 });
SNIPPETS.push({ type: 'js', search: '~PATH~', text: '<b>~PATH~</b>', code: '~PATH~', ch: 7 });
SNIPPETS.push({ type: 'js', search: 'AUTH', text: '<b>AUTH</b>', code: 'AUTH(function($) {\n\t{0}$.success(USER_PROFILE);\n{0}});', ch: 30 });
SNIPPETS.push({ type: 'js', search: 'PLUGIN', text: '<b>PLUGIN</b>', code: 'PLUGIN(\'{1}\', function(exports) {\n\n\t{0}exports.refresh = function() {\n\t{0}};\n\n{0}});', ch: 9 });
SNIPPETS.push({ type: 'js', search: 'PLUGINABLE', text: '<b>PLUGINABLE</b>', code: 'PLUGINABLE(\'{1}\', function(exports) {\n\n\t{0}exports.create = function() {\n\t{0}};\n\n{0}}, function(next) {\n\n\t{0}next();\n\n{0}});', ch: 13 });
SNIPPETS.push({ type: 'js', search: 'COMPONENT', text: '<b>COMPONENT</b>', code: 'COMPONENT(\'\', \'\', function(self, config, cls) {\n\t{0}\n{0}});', ch: 12 });
SNIPPETS.push({ type: 'js', search: 'EXTENSION', text: '<b>EXTENSION</b>', code: 'EXTENSION(\'\', \'\', function(self, config, cls) {\n\t{0}\n{0}});', ch: 12 });
SNIPPETS.push({ type: 'js', search: 'CONFIG', text: '<b>CONFIG</b>', code: 'CONFIG(\'\', \'\');', ch: 9 });
SNIPPETS.push({ type: 'js', search: 'PUBLISH', text: '<b>PUBLISH</b>', code: 'PUBLISH(\'\', model);', ch: 10 });
SNIPPETS.push({ type: 'js', search: 'SUBSCRIBE', text: '<b>SUBSCRIBE</b>', code: 'SUBSCRIBE(\'\', model, true);', ch: 12 });
SNIPPETS.push({ type: 'js', search: 'NEWSCHEMA', text: '<b>NEWSCHEMA</b>', code: 'NEWSCHEMA(\'{1}\', function(schema) {\n\t{0}schema.define(\'key\', String, true);\n{0}});', ch: 12 });
SNIPPETS.push({ type: 'js', search: 'NEWOPERATION', text: '<b>NEWOPERATION</b>', code: 'NEWOPERATION(\'\', function($, value) {\n\t{0}\n{0}});', ch: 15 });
SNIPPETS.push({ type: 'js', search: 'NEWTASK', text: '<b>NEWTASK</b>', code: 'NEWTASK(\'{1}\', function(push) {\n\n\t{0}push(\'TASK_NAME_1\', function($, value) {\n\t\t{0}$.next(\'TASK_NAME_2\');\n\t{0}});\n\n\t{0}push(\'TASK_NAME_2\', function($, value) {\n\t\t{0}$.end();\n\t{0}});\n\n{0}});', ch: 10 });
SNIPPETS.push({ type: 'js', search: 'NEWCOMMAND', text: '<b>NEWCOMMAND</b>', code: 'NEWCOMMAND(\'\', function() {\n\t{0}\n{0}});', ch: 13 });
SNIPPETS.push({ type: 'js', search: 'NEWJSONSCHEMA', text: '<b>NEWJSONSCHEMA</b>', code: 'NEWJSONSCHEMA(\'\', {});', ch: 16 });
SNIPPETS.push({ type: 'js', search: 'NEWPUBLISH', text: '<b>NEWPUBLISH</b>', code: 'NEWPUBLISH(\'\', \'\');', ch: 13 });
SNIPPETS.push({ type: 'js', search: 'NEWSUBSCRIBE', text: '<b>NEWSUBSCRIBE</b>', code: 'NEWSUBSCRIBE(\'\', function(data) {\n\t{0}\n{0}});', ch: 15 });
SNIPPETS.push({ type: 'js', search: 'for var', text: '<b>for in</b>', code: 'for (var i = 0; i < .length; i++)', ch: 21, priority: 10 });
SNIPPETS.push({ type: 'js', search: 'foreach forEach', text: '<b>forEach</b>', code: 'forEach(function(item) {\n{0}});', ch: 30, priority: 1 });
SNIPPETS.push({ type: 'js', search: '$.invalid', text: '<b>$.invalid()</b>', code: 'if (err) {\n\t{0}$.invalid(err);\n\t{0}return;\n{0}}', ch: 30 });
SNIPPETS.push({ type: 'js', search: 'callback', text: '<b>callback</b>', code: 'callback', ch: 9, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'callback function', text: '<b>function() {</b>', code: 'function() {\n\t{0}\n{0}}', ch: 30, priority: 1, special: 1 });
SNIPPETS.push({ type: 'js', search: 'callback function', text: '<b>function(err, response) {</b>', code: 'function(err, response) {\n\t{0}\n{0}}', ch: 30, priority: 1, special: 1 });
SNIPPETS.push({ type: 'js', search: 'callback function', text: '<b>function(response) {</b>', code: 'function(response) {\n\t{0}\n{0}}', ch: 30, priority: 1, special: 1 });
SNIPPETS.push({ type: 'js', search: 'callback function', text: '<b>function(item, next) {</b>', code: 'function(item, next) {\n\t{0}\n{0}}', ch: 30, priority: 1, special: 1 });
SNIPPETS.push({ type: 'js', search: 'callback function', text: '<b>function($) {</b>', code: 'function($) {\n\t{0}\n{0}}', ch: 30, priority: 1, special: 1 });
SNIPPETS.push({ type: 'js', search: 'Object.keys', text: '<b>Object.keys</b>', code: 'Object.keys()', ch: 13, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.define', text: '<b>schema.define</b>', code: 'schema.define(\'\', String, true);', ch: 16, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.required', text: '<b>schema.required</b>', code: 'schema.required(\'\', model => model.age > 33);', ch: 18, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.addWorkflow', text: '<b>schema.addWorkflow</b>', code: 'schema.addWorkflow(\'\', function($, model) {\n\t{0}var id = $.id;\n{0}});', ch: 21, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.addWorkflowExtension', text: '<b>schema.addWorkflowExtension</b>', code: 'schema.addWorkflowExtension(\'\', function($, data) {\n\t{0}\n{0}});', ch: 21, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.addTask', text: '<b>schema.addTask</b>', code: 'schema.addTask(\'\', \'\');', ch: 17, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.addOperation', text: '<b>schema.addOperation</b>', code: 'schema.addOperation(\'\', \'\');', ch: 22, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setSave setsave', text: '<b>schema.setSave</b>', code: 'schema.setSave(function($, model) {\n\t{0}\n{0}});', ch: 21, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setPatch setpatch', text: '<b>schema.setPatch</b>', code: 'schema.setPatch(function($, model) {\n\t{0}var id = $.id;\n\t{0}model.dtupdated = NOW;\n{0}});', ch: 1, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setInsert setinsert', text: '<b>schema.setInsert</b>', code: 'schema.setInsert(function($, model) {\n\t{0}var id = UID();\n\t{0}model.id = id;\n\t{0}model.dtcreated = NOW;\n{0}});', ch: 1, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setUpdate setupdate', text: '<b>schema.setUpdate</b>', code: 'schema.setUpdate(function($, model) {\n\t{0}var id = $.id;\n\t{0}model.dtupdated = NOW;\n{0}});', ch: 1, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setRemove setremove', text: '<b>schema.setRemove</b>', code: 'schema.setRemove(function($) {\n\t{0}var id = $.id;\n{0}});', ch: 1, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setQuery setquery', text: '<b>schema.setQuery</b>', code: 'schema.setQuery(function($) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setRead setread', text: '<b>schema.setRead</b>', code: 'schema.setRead(function($) {\n\t{0}var id = $.id;\n{0}});', ch: 1, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setGet setget', text: '<b>schema.setGet</b>', code: 'schema.setGet(function($) {\n\t{0}var id = $.id;\n{0}});', ch: 1, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setSaveExtension', text: '<b>schema.setSaveExtension</b>', code: 'schema.setSaveExtension(function($, data) {\n\t{0}\n{0}});', ch: 21, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setPatchExtension', text: '<b>schema.setPatchExtension</b>', code: 'schema.setPatchExtension(function($, data) {\n\t{0}\n{0}});', ch: 22, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setInsertExtension', text: '<b>schema.setInsertExtension</b>', code: 'schema.setInsertExtension(function($, data) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setUpdateExtension', text: '<b>schema.setUpdateExtension</b>', code: 'schema.setUpdateExtension(function($, data) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setRemoveExtension', text: '<b>schema.setRemoveExtension</b>', code: 'schema.setRemoveExtension(function($, data) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setQueryExtension', text: '<b>schema.setQueryExtension</b>', code: 'schema.setQueryExtension(function($, data) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setReadExtension', text: '<b>schema.setReadExtension</b>', code: 'schema.setReadExtension(function($, data) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.setGetExtension', text: '<b>schema.setGetExtension</b>', code: 'schema.setGetExtension(function($, data) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'schema.middleware', text: '<b>schema.middleware</b>', code: 'schema.middleware(function($, next) {\n\t{0}\n{0}});', ch: 2, line: 1, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS list', text: '<b>DBMS().list(...).autoquery()</b>', code: 'DBMS().list(\'\').autoquery($.query, \'id:uid,name:string,dtcreated:date,dtupdated:date\', \'dtcreated_desc\', 100).where(\'isremoved=FALSE\').callback($.callback);', ch: 14, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS list', text: '<b>DBMS().list(...).autofill()</b>', code: 'DBMS().list(\'\').autofill($, \'id:uid,dtcreated:date,dtupdated:date\', null, \'dtcreated_desc\', 100).where(\'isremoved=FALSE\').callback($.callback);', ch: 14, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS find', text: '<b>DBMS().find(...)</b>', code: 'DBMS().find(\'\').where(\'isremoved=FALSE\').callback($.callback);', ch: 14, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS read', text: '<b>DBMS().read(...)</b>', code: 'DBMS().read(\'\').id(id).where(\'isremoved=FALSE\').error(404).callback($.callback);', ch: 14, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS insert', text: '<b>DBMS().insert(...)</b>', code: 'DBMS().insert(\'\', model).callback($.done(id));', ch: 16, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS update', text: '<b>DBMS().update(...)</b>', code: 'DBMS().update(\'\', model).id(id).where(\'isremoved=FALSE\').error(404).callback($.done(id));', ch: 16, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS modify', text: '<b>DBMS().modify(...)</b>', code: 'DBMS().modify(\'\', model).id(id).where(\'isremoved=FALSE\').error(404).callback($.done(id));', ch: 16, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'dbms DBMS remove', text: '<b>DBMS().remove(...)</b>', code: 'DBMS().remove(\'\').id(id).error(404).callback($.done(id));', ch: 16, line: 0, priority: 1 });
SNIPPETS.push({ type: 'js', search: 'TotalAPI', text: '<b>TotalAPI</b>', code: 'TotalAPI(\'\', { value: \'\' }, $);', ch: 10 });
SNIPPETS.push({ type: 'js', search: 'MERGE', text: '<b>MERGE</b>', code: 'MERGE(\'\', \'\');', ch: 8 });
SNIPPETS.push({ type: 'js', search: 'ROUTE', text: '<b>ROUTE</b>', code: 'ROUTE(\'\', \'\');', ch: 8 });
SNIPPETS.push({ type: 'js', search: 'WEBSOCKET', text: '<b>WEBSOCKET</b>', code: 'WEBSOCKET(\'\', action, [\'json\']);', ch: 12 });
SNIPPETS.push({ type: 'js', search: 'LOCALIZE', text: '<b>LOCALIZE</b>', code: 'LOCALIZE(\'\', \'\');', ch: 11 });
SNIPPETS.push({ type: 'js', search: 'UNAUTHORIZED', text: '<b>UNAUTHORIZED($, ...)</b>', code: 'UNAUTHORIZED($, \'role\');', ch: 18 });
SNIPPETS.push({ type: 'js', search: 'exports.install', text: '<b>exports.install</b>', code: 'exports.install = function() {\n\t{0}\n{0}};', ch: 2, line: 1 });
SNIPPETS.push({ type: 'js', search: 'console.log', text: '<b>console.log</b>', code: 'console.log();', ch: 13 });
SNIPPETS.push({ type: 'js', search: 'console.warn', text: '<b>console.warn</b>', code: 'console.warn();', ch: 14 });
SNIPPETS.push({ type: 'js', search: 'console.error', text: '<b>console.error</b>', code: 'console.error();', ch: 15 });
SNIPPETS.push({ type: 'js', search: 'null', text: '<b>null</b>', code: 'null', ch: 5 });
SNIPPETS.push({ type: 'js', search: 'undefined', text: '<b>undefined</b>', code: 'undefined', ch: 10, priority: -1 });
SNIPPETS.push({ type: 'js', search: 'setImmediate', text: 'setImmediate', code: 'setImmediate()', ch: 13, priority: -1 });
SNIPPETS.push({ type: 'js', search: 'EMPTYARRAY', text: 'EMPTYARRAY', code: 'EMPTYARRAY', ch: 11 });
SNIPPETS.push({ type: 'js', search: 'EMPTYOBJECT', text: 'EMPTYOBJECT', code: 'EMPTYOBJECT', ch: 12 });
SNIPPETS.push({ type: 'js', search: 'require dbms', text: '<b>require(\'DBMS\')</b>', code: 'require(\'dbms\').init(CONF.database, ERROR(\'DBMS\'));', ch: 1, priority: 1 });
SNIPPETS.push({ search: 'openplatformid', text: 'openplatformid', code: 'openplatformid', ch: 15 });
SNIPPETS.push({ search: 'encodeURIComponent', text: 'encodeURIComponent', code: 'encodeURIComponent', ch: 19 });
SNIPPETS.push({ search: 'decodeURIComponent', text: 'decodeURIComponent', code: 'decodeURIComponent', ch: 19 });
SNIPPETS.push({ search: 'componentator', text: 'componentator', code: 'componentator', ch: 14 });
SNIPPETS.push({ search: 'RESTBuilder', text: 'RESTBuilder', code: 'RESTBuilder', ch: 12 });
SNIPPETS.push({ search: 'exports.', text: 'exports.', code: 'exports.', ch: 9 });
SNIPPETS.push({ search: 'controller', text: 'controller', code: 'controller', ch: 10 });
SNIPPETS.push({ search: 'response', text: 'response', code: 'response', ch: 9 });
SNIPPETS.push({ search: 'self', text: 'self', code: 'self', ch: 5 });
SNIPPETS.push({ search: 'invalid', text: 'invalid', code: 'invalid', ch: 8 });
SNIPPETS.push({ search: 'schema', text: 'schema', code: 'schema', ch: 7 });
SNIPPETS.push({ search: 'language', text: 'language', code: 'language', ch: 9 });
// END

// Compatibility with vscode API
SNIPPETS.forEach(snippet => {

	snippet.text = snippet.text.replace('<b>', '').replace('</b>', '');

	const at_line = snippet.line || 0;
	let lines = snippet.code.split('\n');
	const char = snippet.ch || 0;

	// Remove template's tab placeholders
	lines = lines.map(item => {
		return item.replace(/\{[0-9]}/g, '');
	});

	// Insert starter position
	const a = lines[at_line];
	const b = '${1}';
	const position = char - 1;

	lines[at_line] = [a.slice(0, position), b, a.slice(position)].join('');

	snippet.code = lines.join('\n');

	// Others
	if (snippet.type == 'js')
		snippet.type = 'javascript';

});

export default SNIPPETS;