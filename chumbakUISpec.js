describe('UI Testing - chumbak.com', function(){

	beforeEach(function(){
		browser.get('https://www.chumbak.com/');
		browser.sleep(3000);
	});

	it('Get count from Fashion and Home lists', function(){
		let list = element.all(by.repeater('sub_cat in cat.sub_cats.value.split(','))'));
		expect(list.count()).toBe(12);
	});

	it('Navigate to First item(Tops & Blouses) from Fashion and verify the title', function(){
		//Verifying whether the First value is showing under Fashion is to be Tops & Blouses.
		var firstFashionValue = element(by.repeater('sub_cat in cat.sub_cats.value.split(','))').row(0));
		//expect(element.all(by.repeater('sub_cat in cat.sub_cats.value.split(','))')).count()).toBe(6);
		//Click on Tops & Blouses
		firstFashionValue.element(by.linkText('Tops & Blouses')).click();
		//element(by.repeater('sub_cat in cat.sub_cats.value.split(','))').row(0)).element(by.linkText('Tops & Blouses')).click();
		browser.sleep(3000);
		/*element(by.className('text-center header-with-underline')).getText().then(function(val){
			console.log(val);
		});*/
		var nextpageValue = element(by.className('text-center header-with-underline'));
		expect('Tops & Blouses'.toUpperCase()).toEqual(nextpageValue.getText());
		//Printing first fashion name in console
		/*element(by.repeater('sub_cat in cat.sub_cats.value.split(','))').row(0)).getText().then(function(value){
			console.log(value);
		});*/
		//Clicking on First fashion name
		//firstFashion.click();
		//browser.sleep(5000);
	});	
	
	it('Scroll down to see Feedback button', function(){
		browser.executeScript('window.scrollTo(0,0);').then(function(){
			browser.sleep(3000);
			expect(element(by.className('btn btn-md-new btn-black-t')).isPresent()).toBe(true);
		});
		/*browser.executeScript('window.scrollTo(0,0);').then(function(){
			var btn = element(by.className('btn btn-md-new btn-black-t'));
			btn.click();
			//element(by.className('btn btn-md-new btn-black-t')).click();
		});*/
		/*browser.executeScript('window.scrollTo(0,0);').then(function(){
			element(by.className('btn btn-md-new btn-black-t')).getText().then(function(btnname){
				console.log(btnname);
			});
		});*/
	});
	it('Login Field validation', function(){
		var menu = element(by.className('header-right-icons-top-pad-text'));
		menu.click();
		browser.sleep(3000);
		element(by.className('cfs-li')).element(by.linkText('Login')).click();	
		expect(element(by.className('text-center checkout-sub-title')).getText()).toEqual('ENTER YOUR EMAIL');
		element(by.model('signup.email')).sendKeys('abc@abcc.coco');
		browser.sleep(3000);
		element(by.className('btn checkout-button checkout-button-active')).click();
		expect(element(by.className('sign-up-modal-btn')).isDisplayed()).toBe(true);
	});
});