const requireDirectory = require('require-directory')
function check (path: string){
	if(/\/(Application|Base)Controller\.ts$/i.test(path)){
		return false; // don't include
	} else {
		return true; // go ahead and include
	}
}
module.exports = requireDirectory(module, {include: check, extensions: ['ts']})