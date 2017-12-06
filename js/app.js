var ViewModel = function() {
	var self = this;
	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'tabby.jpg',
		imgAttribution: 'Aman',
		nickNames: ['Tabtab', 'T-bone', 'Mr. T', 'Tabitha Tab Tabby']
	}) );
	console.log(this.currentCat().clickCount())
	this.incrementCount = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observable(data.nickNames);
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