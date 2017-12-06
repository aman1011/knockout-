var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('tabby.jpg');
	this.imgAttribution = ko.observable('Aman');

	this.incrementCount = function(){
		this.clickCount(this.clickCount() + 1);
	};
	this.level = ko.computed(function(){
		if (this.clickCount() <=10) {
			console.log('reched in if');
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