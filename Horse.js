
function Horse() {
}

Horse.prototype.Jump = function(){
    console.log('Jumped.....');
};

Horse.prototype.run = function(){
    console.log('Running');
};

module.exports = Horse;