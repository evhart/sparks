//js sparks/prism/lens/scripts/doc.js

load('steal/rhino/steal.js');
steal.plugins("documentjs").then(function(){
	DocumentJS('sparks/prism/lens/lens.html');
});