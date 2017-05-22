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
		//Click on Tops & Blouses
		firstFashionValue.element(by.linkText('Tops & Blouses')).click();
		browser.sleep(3000);
		//Get heading of the next page
		var nextpageValue = element(by.className('text-center header-with-underline'));
		//Check the title - the heading should be Tops & Blouses
		expect('Tops & Blouses'.toUpperCase()).toEqual(nextpageValue.getText());
	});	
	
	it('Scroll down to see Feedback button', function(){
		browser.executeScript('window.scrollTo(0,0);').then(function(){
			browser.sleep(3000);
			expect(element(by.className('btn btn-md-new btn-black-t')).isPresent()).toBe(true);
		});
	});

	it('Login Field validation', function(){
		//Click on My Account
		var menu = element(by.className('header-right-icons-top-pad-text'));
		menu.click();
		browser.sleep(3000);
		//Click on Login
		element(by.className('cfs-li')).element(by.linkText('Login')).click();	
		expect(element(by.className('text-center checkout-sub-title')).getText()).toEqual('ENTER YOUR EMAIL');
		//Enter the value in email ID field
		element(by.model('signup.email')).sendKeys('abc@abcc.coco');
		//Click on Continue with Email button
		element(by.className('btn checkout-button checkout-button-active')).click();
		//Verify whether the error message is displaying or not
		expect(element(by.className('sign-up-modal-btn')).isDisplayed()).toBe(true);
	});
});