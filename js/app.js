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
	this.imgAttribution = ko.observable('Aman');

	this.nickNames = ko.observableArray(
		[
			{name: 'Tabtab'},
			{name: 'T-bone'},
			{name: 'Mr. T'},
			{name: 'Tabitha Tab Tabby'}
		]
	);
	this.level = ko.computed(function(){
		if (this.clickCount() <=10) {
			return "Infant";
		}
		else if (this.clickCount() <=20) {
			return "Baby";
		}
		else if (this.clickCount() <=30) {
			return "Kid";
		}
		else if (this.clickCount() <=40) {
			return "Teen";
		}
		else if (this.clickCount() <=50) {
			return "Adult";
		}
		else if (this.clickCount() >50) {
			return "Old";
		}
	}, this);
}
ko.applyBindings(new ViewModel())