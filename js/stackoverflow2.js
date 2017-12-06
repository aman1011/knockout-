var ViewModel = function() {
	this.currentCat = ko.observable( new Cat() );
	console.log(this.currentCat().clickCount())
	this.incrementCount = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('tabby.jpg');
	this.imgAttribution = ko.observable('XXXX');

	this.nickNames = ko.observableArray(
		[
			{name: 'Tabtab'},
			{name: 'T-bone'},
			{name: 'Mr. T'},
			{name: 'Tabitha Tab Tabby'}
		]
	);
}
ko.applyBindings(new ViewModel())